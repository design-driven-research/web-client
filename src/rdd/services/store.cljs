(ns rdd.services.store
  (:require [clojure.set]
            [datascript.core :as d]
            [nano-id.core :refer [nano-id]]
            [postmortem.core :as pm]
            [rdd.utils.for-indexed :refer [for-indexed]]
            [rdd.converters.uom :as uom-converters]
            [rdd.db :as db-core]
            [rdd.services.event-bus :as eb]))

(defn- conn
  []
  @db-core/dsdb)

(defn- db
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

;; @TODO - Flatten this and update destructing where used
(defn get-items
  "Get all items"
  []
  (d/q '[:find (pull ?eid [*])
         :where
         [?eid :item/uuid ?uuid]] (db)))

;; @TODO - Flatten this and update destructing where used
(defn get-vendors
  "Get all vendors"
  []
  (d/q '[:find (pull ?eid [*])
         :where
         [?eid :company/uuid ?uuid]] (db)))

(defn get-uoms
  "Get all uoms"
  []
  (-> (d/q '[:find (pull ?eid [*
                               {:uom/type [*]}
                               {:uom/system [*]}])
             :where
             [?eid :uom/uuid ?uuid]] (db))
      (flatten)))

(defn get-uom-by-uuid
  "Get uom by uuid"
  [uuid]
  (-> (d/q '[:find [(pull ?eid [*
                                {:uom/type [*]}
                                {:uom/system [*]}])]
             :in $ ?uuid
             :where
             [?eid :uom/uuid ?uuid]]
           (db) uuid)
      (first)))

(defn get-recipe-line-items
  "Get all recipe line items"
  []
  (d/q '[:find (pull ?eid [*])
         :where
         [?eid :recipe-line-item/uuid ?uuid]] (db)))

(get-recipe-line-items)

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

(defn quantity-in-uom
  "Convert quantity from one UOM or a different UOM based on the conversions passed in.
   
   Example: (quantity-in-uom '1uXwh_BaxU7BaWroGtHXA' 1 'lb' 'gr' vecotr-of-conversions)
   
   Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}"
  [quantity from to conversions]
  (let [mapping (uom-converters/generate-conversions-lookup-table conversions)]
    (uom-converters/quantity-in-uom quantity from to mapping)))

(defn item-quantity-in-uom
  "Convert quantity from one UOM or a different UOM based on the item-uuid passed in.
   
   Example: (item-quantity-in-uom '1uXwh_BaxU7BaWroGtHXA' 1 'lb' 'gr')
   
   Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}"
  [item-uuid quantity from to]
  (let [conversions (get-conversions-for-item item-uuid)]
    (quantity-in-uom quantity from to conversions)))

(defn has-path-from-to?
  [from to custom-conversions]
  (let [conversions (clojure.set/union (get-standard-conversions) custom-conversions)
        mapping (uom-converters/generate-conversions-lookup-table conversions)]
    (uom-converters/has-path-from-to? from to mapping)))

(defn get-uom-type-info
  "Gets the type and system information for a uom by uuid 
   Returns: [type system]"
  [uom-uuid]
  (d/q '[:find [?type-ident ?system-ident]
         :in $ ?uom-uuid
         :where
         [?uom :uom/uuid ?uom-uuid]
         [?uom :uom/type ?type]
         [?type :db/ident ?type-ident]
         [?uom :uom/system ?system]
         [?system :db/ident ?system-ident]]
       (db)
       uom-uuid))

(defn is-standard-uoms?
  "Is the UOM of type standard? Either :units.type/WEIGHT or :units.type/VOLUME"
  [uom-uuid]
  (let [[type system] (get-uom-type-info uom-uuid)]
    (or
     (= type :units.type/WEIGHT)
     (= type :units.type/VOLUME))))

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
  (-> (d/q '[:find (pull ?company-item [*
                                        {:company-item/item [:item/uuid]
                                         :company-item/quotes [:quote/uuid
                                                               :currency.usd/cost
                                                               :measurement/quantity
                                                               {:measurement/uom [:uom/uuid
                                                                                  :uom/code]}]
                                         :uom/conversions [:conversion/uuid
                                                           {:conversion/from [:uom/uuid
                                                                              :uom/code]}
                                                           {:conversion/to [:uom/uuid
                                                                            :uom/code]}]}])

             :in $ ?item-uuid
             :where
             [?item :item/uuid ?item-uuid]
             [?company-item :company-item/item ?item]]
           (db)
           item-uuid)
      (flatten)))

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
                                                    (map :recipe-line-item/total-cost)
                                                    (reduce +))
                           item-cost-per-default-uom (/ total-children-cost item-yield)]
                       {:item/uuid item-uuid
                        :type :item
                        :item/name item-name
                        :item/production-type item-production-type
                        :item/yield item-yield
                        :item/yield-uom item-yield-uom
                        :item/cost-per-default-uom item-cost-per-default-uom
                        :item/total-cost total-children-cost
                        :item/children children}))

        build-recipe-line-item (fn [rli]
                                 (let [child-item (:recipe-line-item/item rli)
                                       has-child? (boolean child-item)
                                       item (when has-child? (item->tree' child-item))
                                       item-uuid (:item/uuid item)
                                       recipe-line-item-uuid (:recipe-line-item/uuid rli)
                                       recipe-line-item-quantity (:measurement/quantity rli)
                                       recipe-line-item-quantity-uom (-> rli :measurement/uom :uom/code)
                                       recipe-line-item-position (-> rli :meta/position)
                                       recipe-line-item-company-item (-> rli :recipe-line-item/company-item)

                                      ;;  Should we instead check for if this is composite or atom type item?
                                      ;;  Need to simplify this
                                       child-uom->rli-uom-conversion (when has-child?
                                                                       (:total (item-quantity-in-uom item-uuid recipe-line-item-quantity recipe-line-item-quantity-uom (or (:item/yield-uom item)
                                                                                                                                                                           (:item/default-uom item)))))
                                       converted-composite-item-cost (when has-child? (* (:item/cost-per-default-uom item) child-uom->rli-uom-conversion))

                                       recipe-line-item-total-cost (or
                                                                    converted-composite-item-cost
                                                                    (cost-for-qty item-uuid recipe-line-item-quantity recipe-line-item-quantity-uom))]

                                   {:type :recipe-line-item
                                    :recipe-line-item/uuid recipe-line-item-uuid
                                    :recipe-line-item/quantity recipe-line-item-quantity
                                    :recipe-line-item/total-cost recipe-line-item-total-cost
                                    :recipe-line-item/quantity-uom recipe-line-item-quantity-uom
                                    :recipe-line-item/position recipe-line-item-position
                                    :recipe-line-item/child-item item
                                    :recipe-line-item/company-item (pm/spy>> :rli-ci recipe-line-item-company-item)}))


        build-base-item (fn [item]
                          (let [item-uuid (:item/uuid item)
                                item-production-type (:item/production-type item)
                                item-name (:item/name item)
                                item-default-uom (-> item :measurement/uom :uom/code)
                                item-cost-per-default-uom (cost-for-qty item-uuid 1 item-default-uom)]
                            {:item/uuid item-uuid
                             :type :item
                             :item/production-type item-production-type
                             :item/name item-name
                             :item/default-uom item-default-uom
                             :item/cost-per-default-uom item-cost-per-default-uom
                             :item/company-items (company-items-for-item item-uuid)}))]

    (cond
      (and is-item? has-children?) (build-item e)
      is-recipe-line-item? (build-recipe-line-item e)
      :else (build-base-item e))))

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

    (when has-recipe-line-item-uuid?
      (let [tx (db-core/transact-from-local! (conn) [[:db/add [:recipe-line-item/uuid recipe-line-item-uuid] :measurement/quantity prepped-quantity]])
            new-db (:db-after tx)]
        new-db))))

(defn update-item-yield!
  [item-uuid qty]

  (let [parsed-yield (js/parseFloat qty)
        prepped-yield (if (and (number? parsed-yield)
                               (>= parsed-yield 0))
                        parsed-yield
                        0)
        has-item-uuid? item-uuid]

    (when has-item-uuid?
      (let [tx (db-core/transact-from-local! (conn) [[:db/add [:item/uuid item-uuid] :measurement/yield prepped-yield]])
            new-db (:db-after tx)]

        (eb/publish! {:topic :update/item
                      :data {:yield prepped-yield
                             :uuid item-uuid}})
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

(defn update-item-yield-uom!
  [item-uuid uom-code]
  (let [has-item-uuid? item-uuid]
    (when has-item-uuid?

      (let [tx (db-core/transact-from-local! (conn) [[:db/add [:item/uuid item-uuid] :measurement/uom [:uom/code uom-code]]])
            new-db (:db-after tx)]
        new-db))))

(defn update-recipe-line-item-quantity-uom!
  [recipe-line-item-uuid uom-code]
  (let [has-recipe-line-item-uuid? recipe-line-item-uuid]
    (when has-recipe-line-item-uuid?

      (let [tx (db-core/transact-from-local! (conn) [[:db/add [:recipe-line-item/uuid recipe-line-item-uuid] :measurement/uom [:uom/code uom-code]]])
            new-db (:db-after tx)]

        new-db))))

(defn get-rli-parent-item
  [db rli-uuid]
  (->> (d/q '[:find [?item-uuid]
              :in $ ?rli-uuid
              :where [?rli :recipe-line-item/uuid ?rli-uuid]
              [?item :composite/contains ?rli]
              [?item :item/uuid ?item-uuid]]
            db rli-uuid)
       first))

(defn get-rli-position
  [db rli-uuid]
  (->> (d/q '[:find [?position]
              :in $ ?rli-uuid
              :where [?rli :recipe-line-item/uuid ?rli-uuid]
              [?rli :meta/position ?position]]
            db rli-uuid)
       first))

{:above 0
 :this 100
 :below 1000}

(defn get-rli-siblings
  [db rli-uuid]
  (let [positions (->> (d/q '[:find ?sibling-uuid ?position
                              :keys uuid position
                              :in $ ?rli-uuid
                              :where [?rli :recipe-line-item/uuid ?rli-uuid]
                              [?parent-item :composite/contains ?rli]
                              [?parent-item :composite/contains ?siblings]
                              [?siblings :recipe-line-item/uuid ?sibling-uuid]
                              [?siblings :meta/position ?position]]
                            db rli-uuid)
                       (sort-by :position))]
    positions))

(defn center-between-int
  "Returns the center point between two numbers
   Will return a long
   Example: (center-between-int 0 100) => 50
   "
  [a b]
  (let [high (max a b)
        low (min a b)
        diff (- high low)
        half-diff (/ diff 2)]
    (long (+ low half-diff))))

(defn position-info
  [rli-uuid positions]
  (let [current-rli (first (filter #(= (:uuid %) rli-uuid) positions))
        current-rli-index (.indexOf positions current-rli)
        is-first? (= 0 current-rli-index)
        is-last? (= current-rli-index (dec (count positions)))
        previous-rli (if is-first?
                       nil
                       (nth positions (dec current-rli-index)))
        next-rli (if is-last?
                   nil
                   (nth positions (inc current-rli-index)))

        current-position (:position current-rli)
        previous-rli-position (or (:position previous-rli)
                                  0)

        next-rli-position (or (:position next-rli)
                              9007199254740991)]
    {:previous-rli-position previous-rli-position
     :current-position current-position
     :next-rli-position next-rli-position

     :current-rli current-rli
     :current-rli-index current-rli-index
     :previous-rli previous-rli
     :next-rli next-rli
     :next-position-before (center-between-int current-position previous-rli-position)
     :next-position-after (center-between-int current-position next-rli-position)}))


(defn create-sibling-recipe-line-item!
  [origin-rli-uuid insert-type]
  (let [new-uuid (nano-id)
        parent-item-uuid (get-rli-parent-item (db) origin-rli-uuid)
        rli-siblings (get-rli-siblings (db) origin-rli-uuid)
        position-info (position-info origin-rli-uuid rli-siblings)
        next-position (case insert-type
                        :before (:next-position-before position-info)
                        :after (:next-position-after position-info))]

    (db-core/transact-from-local! (conn) [[:db/add -1 :recipe-line-item/uuid  new-uuid]
                                          [:db/add -1 :meta/position next-position]
                                          [:db/add [:item/uuid parent-item-uuid] :composite/contains -1]])))

(defn update-recipe-line-item-item!
  [rli-uuid item-uuid]
  (db-core/transact-from-local! (conn) [[:db/add [:recipe-line-item/uuid rli-uuid] :recipe-line-item/item [:item/uuid item-uuid]]]))


(defn update-recipe-line-company-item!
  [rli-uuid company-item-uuid]
  (db-core/transact-from-local! (conn) [[:db/add [:recipe-line-item/uuid rli-uuid] :recipe-line-item/company-item [:company-item/uuid company-item-uuid]]]))

(defn delete-recipe-line-item!
  [uuid]
  (db-core/transact-from-local! (conn) [[:db/retractEntity [:recipe-line-item/uuid uuid]]]))

(defn create-company!
  [{:keys [name uuid]}]
  (db-core/transact-from-local! (conn) [[:db/add -1 :company/uuid uuid]
                                        [:db/add -1 :company/name name]]))

(defn create-uom!
  [{:keys [name code uuid system type]}]
  (db-core/transact-from-local! (conn) [[:db/add -1 :uom/uuid uuid]
                                        [:db/add -1 :uom/name name]
                                        [:db/add -1 :uom/code code]
                                        [:db/add -1 :uom/system system]
                                        [:db/add -1 :uom/type type]]))

(defn create-and-link-item!
  [rli-uuid item-name item-type]
  (db-core/transact-from-local! (conn) [[:db/add -1 :item/uuid (nano-id)]
                                        [:db/add -1 :item/name item-name]
                                        [:db/add -1 :item/production-type item-type]
                                        [:db/add [:recipe-line-item/uuid rli-uuid] :recipe-line-item/item -1]]))

(defn create-company-item!
  [request]
  (let [company-item-tx [[:db/add -1 :company-item/uuid (:company-item/uuid request)]
                         [:db/add -1 :company-item/name (:company-item/name request)]
                         [:db/add -1 :company-item/sku (:company-item/sku request)]

                         [:db/add -1 :company-item/item [:item/uuid (:item/uuid request)]]

                         [:db/add -1 :company-item/quotes -2]]

        company-tx [[:db/add [:company/uuid (:company/uuid request)] :company/company-items -1]]

        quote-tx [[:db/add -2 :quote/uuid (nano-id)]
                  [:db/add -2 :currency.usd/cost (:quote/price request)]
                  [:db/add -2 :measurement/quantity (:quote/quantity request)]
                  [:db/add -2 :measurement/uom [:uom/uuid (:quote/uom-uuid request)]]]

        conversions-tx (mapcat
                        (fn [c] (let [temp-id (nano-id)]
                                  [[:db/add temp-id :conversion/from [:uom/uuid (:from-uom-uuid c)]]
                                   [:db/add temp-id :conversion/to [:uom/uuid (:to-uom-uuid c)]]
                                   [:db/add temp-id :measurement/quantity (:quantity c)]
                                   [:db/add -1 :uom/conversions temp-id]])) (:conversions request))

        all-tx (concat company-item-tx company-tx quote-tx conversions-tx)]

    (db-core/transact-from-local! (conn) all-tx)))


(comment

  (position-info "7eKp3rZ_C2F65O870djRZ" (get-rli-siblings (db) "7eKp3rZ_C2F65O870djRZ"))

  (item-quantity-in-uom "AMRGozwKdaHB3UAustIja" 1 "gr" "gr")

  (pm/reset!)

  (item-quantity-in-uom "1uXwh_BaxU7BaWroGtHXA" 5 "lb" "gr")
  ;; => {:quantity 5, :from "lb", :to "gr", :factor 453.1, :total 2265.5}

  (cost-for-qty "1uXwh_BaxU7BaWroGtHXA" 1000 "gr")
  ;; => 2.2070183182520413

  (item-quotes "1uXwh_BaxU7BaWroGtHXA")

  (get-conversions-for-item "1uXwh_BaxU7BaWroGtHXA")

  (map [[[1] 2 3] [1 2 3]])


  ;; 
  )