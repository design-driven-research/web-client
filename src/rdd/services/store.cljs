(ns rdd.services.store
  (:require [clojure.set]
            [datascript.core :as d]
            [rdd.converters.item :as item-converter]
            [rdd.converters.uom :as uom-converters]
            [rdd.db :as db-core]))

(defn db
  []
  (d/db @db-core/dsdb))

(defn conn
  []
  @@db-core/dsdb)

(defn item-entity-by-name
  [name]
  (d/entity (conn) [:item/name name]))

(defn uoms
  []
  (d/q '[:find ?from-uom-code ?to-uom-code ?quantity
         :keys :from :to :quantity
         :where
         [?conversion :measurement/quantity ?quantity]
         [?conversion :conversion/from ?from-uom]
         [?from-uom :uom/code ?from-uom-code]

         [?conversion :conversion/to ?to-uom]
         [?to-uom :uom/code ?to-uom-code]] (db)))

(defn get-standard-conversions
  "Get standard conversions for weight volume, for both metric and imperial"
  []
  (d/q '[:find ?uuid ?from-uom-code ?to-uom-code ?quantity
         :keys conversion-uuid from-uom-code to-uom-code quantity
         :where
         [?conversion :conversion/uuid ?uuid]
         [?conversion :conversion/from ?from-uom]
         [?conversion :conversion/to ?to-uom]
         [?conversion :measurement/quantity ?quantity]

         [?from-uom :uom/code ?from-uom-code]
         [?to-uom :uom/code ?to-uom-code]

         (or [?from-uom :uom/system :units.system/IMPERIAL]
             [?from-uom :uom/system :units.system/METRIC])

         (or [?to-uom :uom/system :units.system/IMPERIAL]
             [?to-uom :uom/system :units.system/METRIC])]
       (db)))

(defn get-custom-conversions
  "Get custom, item specific conversions based on the item uuid
   
   Returns a set of custom conversions"
  [item-uuid]
  (d/q '[:find ?uuid ?from-uom-code ?to-uom-code ?quantity
         :keys conversion-uuid from-uom-code to-uom-code quantity
         :in $ ?item-uuid

         :where
         [?item :item/uuid ?item-uuid]

         [?conversion :conversion/uuid ?uuid]
         [?company-item :company-item/item ?item]
         [?company-item :uom/conversions ?conversion]

         [?conversion :conversion/from ?from-uom]
         [?conversion :conversion/to ?to-uom]
         [?conversion :measurement/quantity ?quantity]

         [?from-uom :uom/code ?from-uom-code]
         [?to-uom :uom/code ?to-uom-code]]
       (db)
       item-uuid))

(defn get-conversions-for-item
  "Get all conversions for the given item uuid.
   This will return a set with conversions based on standard UOMs as well as 
   custom conversions specific to this item.
   "
  [item-uuid]
  (clojure.set/union (get-standard-conversions) (get-custom-conversions item-uuid)))

(defn item-quantity-in-uom
  "Convert quantity from one UOM or a different UOM based on the item-uuid passed in.
   
   Example: (item-quantity-in-uom '1uXwh_BaxU7BaWroGtHXA' 1 'lb' 'gr')
   
   Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}"
  [item-uuid quantity from to]
  (let [conversions (get-conversions-for-item item-uuid)
        mapping (uom-converters/generate-conversions-lookup-table conversions)]
    (uom-converters/quantity-in-uom quantity from to mapping)))

(defn item-quotes
  "Get all quotes for an item based on uuid"
  [item-uuid]
  (d/q '[:find ?uuid ?cost ?uom-code ?quantity
         :keys uuid cost uom quantity
         :in $ ?item-uuid
         :where
         [?item :item/uuid ?item-uuid]
         [?company-item :company-item/item ?item]
         [?company-item :company-item/quotes ?quote]

         [?quote :quote/uuid ?uuid]
         [?quote :currency.usd/cost ?cost]
         [?quote :measurement/quantity ?quantity]
         [?quote :measurement/uom ?uom]
         [?uom :uom/code ?uom-code]]
       (db)
       item-uuid))

(defn cost-for-qty
  "Get cost for a specific quantity and UOM based on item uuid
   
   Example: (cost-for-qty '1uXwh_BaxU7BaWroGtHXA' 1000 'gr')
   
   "
  [item-uuid to-quantity to-uom-code]
  (let [quotes (item-quotes item-uuid)
        quote (-> quotes (first))
        {:keys [cost uom quantity]} quote
        normalized-cost (/ cost quantity)]
    (if (= uom to-uom-code)
      (* to-quantity normalized-cost)
      (let [conversion (item-quantity-in-uom item-uuid to-quantity to-uom-code uom)
            converted-cost (* (:total conversion) normalized-cost)]
        converted-cost))))


(defn- item->tree'
  [e]
  (let [is-item? (:item/uuid e)
        has-children? (:composite/contains e)
        is-recipe-line-item? (not is-item?)

        build-item (fn [item]
                     (let [children (mapv item->tree' (:composite/contains item))
                           id (:db/id item)
                           uuid (:item/uuid item)
                           name (:item/name item)
                           yield (:measurement/yield item)
                           total-children-cost (->> children
                                                    (map :total-cost)
                                                    (reduce +))
                           normalized-cost (or (/ total-children-cost yield) 1)
                           response {:uuid uuid
                                     :id id
                                     :name name
                                     :yield yield
                                     :normalized-cost normalized-cost
                                     :children children}]
                       response))

        build-recipe-line-item (fn [recipe-line-item]
                                 (let [item (item->tree' (first (:composite/contains recipe-line-item)))
                                       recipe-line-item-uuid (:recipe-line-item/uuid recipe-line-item)
                                       recipe-line-item-id (:db/id recipe-line-item)
                                       quantity (:measurement/quantity recipe-line-item)
                                       uom (-> recipe-line-item :measurement/uom :uom/code)
                                       total-cost (* quantity (:normalized-cost item))
                                       response (merge item {:recipe-line-item-uuid recipe-line-item-uuid
                                                             :recipe-line-item-id recipe-line-item-id
                                                             :quantity quantity
                                                             :total-cost total-cost
                                                             :uom uom})]
                                   response))

        build-base-item (fn [item]
                          (let [id (:db/id item)
                                uuid (:item/uuid item)
                                name (:item/name item)
                                yield (:measurement/yield item)
                                uom (-> item :measurement/uom :uom/code)
                                cost-per-yield 1
                                normalized-cost (/ cost-per-yield yield)
                                response {:uuid uuid
                                          :id id
                                          :uom uom
                                          :normalized-cost normalized-cost
                                          :name name}]
                            response))]

    (cond
      (and is-item? has-children?) (build-item e)
      is-recipe-line-item? (build-recipe-line-item e)
      :default (build-base-item e))))

(defn item->tree
  [name]
  (let [item-entity (item-entity-by-name name)]
    (when item-entity
      (item->tree' item-entity))))

(comment

  (item-quantity-in-uom "1uXwh_BaxU7BaWroGtHXA" 5 "lb" "gr")
  ;; => {:quantity 5, :from "lb", :to "gr", :factor 453.1, :total 2265.5}

  (cost-for-qty "1uXwh_BaxU7BaWroGtHXA" 1000 "gr")
  ;; => 2.2070183182520413

  (item-quotes "1uXwh_BaxU7BaWroGtHXA")

  (get-conversions-for-item "1uXwh_BaxU7BaWroGtHXA")

  ;; 
  )