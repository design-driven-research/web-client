(ns rdd.services.store
  (:require [clojure.set]
            [postmortem.core :as pm]
            [rdd.services.event-bus :as eb]
            [datascript.core :as d]
            [nano-id.core :refer [nano-id]]
            [rdd.converters.item :as item-converter]
            [rdd.converters.uom :as uom-converters]
            [rdd.db :as db-core]))

(defn conn
  []
  @db-core/dsdb)

(defn db
  []
  (d/db (conn)))

(defn item-entity-by-name
  [name]
  (d/entity (db) [:item/name name]))

(defn get-atomic-items
  []
  (d/q '[:find (pull ?eid [*])

         :where
         [?eid :item/uuid ?uuid]
         [?eid :item/production-type :production.type/ATOM]] (db)))

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
        (if (js/Number.isNaN converted-cost)
          nil
          converted-cost)))))

(defn company-items-for-item
  [item-uuid]
  (d/q '[:find ?item-uuid ?company-item-uuid ?company-item-name ?company-item-description ?company-uuid ?company-name
         :keys item-uuid company-item-uuid company-item-name company-item-description company-uuid company-name
         :in $ ?item-uuid
         :where
         [?item :item/uuid ?item-uuid]
         [?company-item :company-item/item ?item]
         [?company-item :company-item/uuid ?company-item-uuid]
         [?company-item :company-item/name ?company-item-name]
         [?company-item :info/description ?company-item-description]

         [?company :company/company-items ?company-item]
         [?company :company/uuid ?company-uuid]
         [?company :company/name ?company-name]]
       (db)
       item-uuid))

(defn get-companies
  []
  (d/q '[:find (pull ?eid [*])
         :where
         [?eid :company/uuid ?uuid]]
       (db)))

(defn get-companies-company-item
  [company-uuid]
  (d/q '[:find (pull ?ci [*])
         :in $ ?company-uuid
         :where
         [?company :company/uuid ?company-uuid]
         [?company :company/company-items ?ci]]
       (db) company-uuid))

(defn- item->tree'
  [e]
  (let [is-item? (:item/uuid e)
        has-children? (:composite/contains e)
        is-recipe-line-item? (not is-item?)

        build-item (fn [item]
                     (let [children (mapv item->tree' (:composite/contains item))
                           item-production-type (:item/production-type item)
                           item-uuid (:item/uuid item)
                           item-name (:item/name item)
                           item-yield (:measurement/yield item)
                           item-yield-uom (-> item :measurement/uom :uom/code)
                           total-children-cost (->> children
                                                    (map :recipe-line-item-total-cost)
                                                    (reduce +))
                           item-cost-per-default-uom (/ total-children-cost item-yield)]
                       {:item-uuid item-uuid

                        :item-name item-name
                        :item-production-type item-production-type
                        :item-yield item-yield
                        :item-yield-uom item-yield-uom
                        :item-cost-per-default-uom item-cost-per-default-uom
                        :item-total-cost total-children-cost
                        :children children}))

        build-recipe-line-item (fn [recipe-line-item]
                                 (let [item (item->tree' (first (:composite/contains recipe-line-item)))
                                       item-uuid (:item-uuid item)
                                       recipe-line-item-uuid (:recipe-line-item/uuid recipe-line-item)
                                       recipe-line-item-quantity (:measurement/quantity recipe-line-item)
                                       recipe-line-item-quantity-uom (-> recipe-line-item :measurement/uom :uom/code)

                                      ;;  Should we instead check for if this is composite or atom type item?
                                      ;;  Need to simplify this
                                       child-uom->rli-uom-conversion (:total (item-quantity-in-uom item-uuid recipe-line-item-quantity recipe-line-item-quantity-uom (or (:item-yield-uom item)
                                                                                                                                                                         (:item-default-uom item))))
                                       converted-composite-item-cost (* (:item-cost-per-default-uom item) child-uom->rli-uom-conversion)

                                       recipe-line-item-total-cost (or
                                                                    converted-composite-item-cost
                                                                    (cost-for-qty item-uuid recipe-line-item-quantity recipe-line-item-quantity-uom))]

                                   (merge item {:recipe-line-item-uuid recipe-line-item-uuid
                                                :recipe-line-item-quantity recipe-line-item-quantity
                                                :recipe-line-item-total-cost recipe-line-item-total-cost
                                                :recipe-line-item-quantity-uom recipe-line-item-quantity-uom})))

        build-base-item (fn [item]
                          (let [item-uuid (:item/uuid item)
                                item-production-type (:item/production-type item)
                                item-name (:item/name item)
                                item-default-uom (-> item :measurement/uom :uom/code)
                                item-cost-per-default-uom (cost-for-qty item-uuid 1 item-default-uom)]
                            {:item-uuid item-uuid
                             :item-production-type item-production-type
                             :item-name item-name
                             :item-default-uom item-default-uom
                             :item-cost-per-default-uom item-cost-per-default-uom
                             :item-company-items (company-items-for-item item-uuid)}))]

    (cond
      (and is-item? has-children?) (build-item e)
      is-recipe-line-item? (build-recipe-line-item e)
      :else (build-base-item e))))

#_#_(pm/logs)

  (pm/reset!)

(defn item->tree
  [name]
  (let [item-entity (item-entity-by-name name)]
    (when item-entity
      (item->tree' item-entity))))


(defn update-recipe-line-item-quantity!
  [recipe-line-item-uuid qty]

  (let [parsed-quantity (js/parseFloat qty)
        prepped-quantity (if (and (number? parsed-quantity)
                                  (>= parsed-quantity 0))
                           parsed-quantity
                           0)
        has-recipe-line-item-uuid? recipe-line-item-uuid]

    (tap> [:db/add [:recipe-line-item/uuid recipe-line-item-uuid] :measurement/quantity prepped-quantity])
    (when has-recipe-line-item-uuid?
      (let [tx (d/transact! (conn) [[:db/add [:recipe-line-item/uuid recipe-line-item-uuid] :measurement/quantity prepped-quantity]])
            new-db (:db-after tx)]

        (eb/publish! {:topic :update/recipe-line-item
                      :data {:quantity prepped-quantity
                             :uuid recipe-line-item-uuid}})
        new-db))))

(defn get-item-uuid-by-eid
  [db eid]
  (->> (d/q '[:find [?uuid]
              :in $ ?id
              :where [?id :item/uuid ?uuid]]
            db eid)
       first))

(defn get-rli-uuid-by-eid
  [db eid]
  (->> (d/q '[:find [?uuid]
              :in $ ?id
              :where [?id :recipe-line-item/uuid ?uuid]]
            db eid)
       first))

(defn update-recipe-line-item-quantity-uom!
  [recipe-line-item-uuid uom-code]
  (let [has-recipe-line-item-uuid? recipe-line-item-uuid]
    (when has-recipe-line-item-uuid?

      (let [tx (d/transact! (conn) [[:db/add [:recipe-line-item/uuid recipe-line-item-uuid] :measurement/uom [:uom/code uom-code]]])
            new-db (:db-after tx)]

        (eb/publish! {:topic :update/recipe-line-item
                      :data {:uom uom-code
                             :uuid recipe-line-item-uuid}})
        new-db))))

(defn create-recipe-line-item!
  [parent-item-id child-item-id]
  (let [new-uuid (nano-id)]
    (d/transact! (conn) [[:db/add -1 :recipe-line-item/uuid  new-uuid]
                         [:db/add -1 :composite/contains child-item-id]
                         [:db/add -1 :measurement/quantity 0]
                         [:db/add parent-item-id :composite/contains -1]])))

(comment
  (item-quantity-in-uom "AMRGozwKdaHB3UAustIja" 1 "gr" "gr")

  (pm/reset!)

  (item-quantity-in-uom "1uXwh_BaxU7BaWroGtHXA" 5 "lb" "gr")
  ;; => {:quantity 5, :from "lb", :to "gr", :factor 453.1, :total 2265.5}

  (cost-for-qty "1uXwh_BaxU7BaWroGtHXA" 1000 "gr")
  ;; => 2.2070183182520413

  (item-quotes "1uXwh_BaxU7BaWroGtHXA")

  (get-conversions-for-item "1uXwh_BaxU7BaWroGtHXA")

  ;; 
  )