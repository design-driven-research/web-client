(ns rdd.db
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [clojure.edn]
            [postmortem.core :as pm]
            [datascript.core :as d]
            [nano-id.core :refer [nano-id]]
            [rdd.converters.item :refer [item->tree]]
            [rdd.services.event-bus :as bus :refer [publish!]]))

(defn item-schema
  []
  {:item/name {:db/unique :db.unique/identity}
   :item/uuid {:db/unique :db.unique/identity}


   #_#_:item/categories {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
   #_#_:item/tags {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

(defn company-schema
  []
  {:company/uuid {:db/unique :db.unique/identity}
   :company/name {:db/unique :db.unique/identity}})

#_(defn category-schema
    []
    {:category/name {:db/unique :db.unique/identity}
     :category/parents {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
     :category/children {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

(defn recipe-line-item-schema
  []
  {:recipe-line-item/uuid  {:db/unique :db.unique/identity}})

#_(defn tag-schema
    []
    {:tag/name {:db/unique :db.unique/identity}
     :tag/items {:db/valueType :db.type/ref
                 :db/cardinality :db.cardinality/many}})

(defn uom-schema
  []
  {:uom/uuid  {:db/unique :db.unique/identity}
   :uom/name {:db/unique :db.unique/identity}
   :uom/code {:db/unique :db.unique/identity}

   :uom/type {:db/valueType :db.type/ref}
   :uom/system {:db/valueType :db.type/ref}})

(defn measurement-schema
  []
  {:measurement/uom {:db/valueType :db.type/ref}})

(defn conversions-schema
  []
  {:conversion/uuid  {:db/unique :db.unique/identity}
   :conversion/from {:db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/one}
   :conversion/to {:db/valueType :db.type/ref
                   :db/cardinality :db.cardinality/one}})

(defn cost-schema
  []
  {:cost/uuid  {:db/unique :db.unique/identity}})

(defn composite-schema
  []
  {:composite/contains  {:db/valueType :db.type/ref
                         :db/cardinality :db.cardinality/many}})

(defn reference-schema
  []
  {:for/item  {:db/valueType :db.type/ref
               :db/cardinality :db.cardinality/one}})

(defn schema
  []
  (merge
   #_(category-schema)

   #_(tag-schema)
   (uom-schema)
   (conversions-schema)
   (item-schema)
   (recipe-line-item-schema)
   (company-schema)
   (cost-schema)
   (measurement-schema)
   (composite-schema)
   (reference-schema)


   {:schema/version {:version "0.0.1" :doc "Say something"}}))


;; =========================================================================
;; =========================================================================
;; SEED DATA
;; =========================================================================
;; =========================================================================
(defn unit-systems-data
  "System of units data prepped as datoms for insert"
  []
  [{:db/ident :units.system/IMPERIAL}
   {:db/ident :units.system/METRIC}

   {:db/ident :units.system/CUSTOM}

   {:db/ident :units.type/WEIGHT}
   {:db/ident :units.type/VOLUME}
   {:db/ident :units.type/CUSTOM}])

(defn uom-data
  "Units of measure data prepped as datoms for insert"
  []
  [{:uom/uuid (nano-id) :uom/name "Pound" :uom/code "lb" :uom/system :units.system/IMPERIAL :uom/type :units.type/WEIGHT :measurement/quantity 453.5920865}
   {:uom/uuid (nano-id) :uom/name "gr" :uom/code "gr" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :measurement/quantity 1}
   {:uom/uuid (nano-id) :uom/name "Ounce" :uom/code "oz" :uom/system :units.system/IMPERIAL :uom/type :units.type/WEIGHT :measurement/quantity 28.34949978}
   {:uom/uuid (nano-id) :uom/name "Kilogram" :uom/code "kg" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :measurement/quantity 1000}

   {:uom/uuid (nano-id) :uom/name "Gallon" :uom/code "gallon" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 768.0019661}
   {:uom/uuid (nano-id) :uom/name "Fluid Ounce" :uom/code "floz" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 5.999988}
   {:uom/uuid (nano-id) :uom/name "Tablespoon" :uom/code "tbs" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 3.000003}
   {:uom/uuid (nano-id) :uom/name "Cup" :uom/code "cup" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 48.0000768}
   {:uom/uuid (nano-id) :uom/name "Teaspoon" :uom/code "tsp" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 1}

   {:uom/uuid (nano-id) :uom/name "Each" :uom/code "ea" :uom/system :units.system/CUSTOM :uom/type :units.type/CUSTOM  :measurement/quantity 1}])

(declare reset-db! seed-db setup-listeners)

(defstate ^{:on-reload :noop} dsdb
  :start (do
           (js/console.log "Recreating dsdb")
           (let [conn (atom (d/empty-db (schema))
                            :meta {:listeners (atom {})})]
             (reset-db! conn)
             (setup-listeners conn)
             conn)))

(defn seed-db
  "Seed the db with data"
  [db]
  (d/transact! db (unit-systems-data))
  #_(d/transact! db (uom-data)))

(defn reset-db!
  [conn]
  (d/reset-conn! conn (d/empty-db (schema)))
  (seed-db conn))

(defn setup-listeners
  [conn]
  (d/listen! conn :default (fn [db]
                             (publish! {:topic :db-updated
                                        :data db}))))

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

(defn item-by-name
  [name]
  (let [item (d/entity @@dsdb [:item/name name])]
    (when item
      (item->tree item))))

(defn update-item-name!
  [name]
  (let [new-name (str (random-uuid))]
    (d/transact! @dsdb [[:db/add [:item/name name] :item/name new-name]])))

(defn update-recipe-line-item-quantity!
  [recipe-line-item-id qty]
  (let [parsed-quantity (js/parseFloat qty)
        prepped-quantity (if (and (number? parsed-quantity)
                                  (>= parsed-quantity 0))
                           parsed-quantity
                           0)
        has-recipe-line-item-id? recipe-line-item-id]
    (when has-recipe-line-item-id?
      (let [tx (d/transact! @dsdb [[:db/add recipe-line-item-id :measurement/quantity prepped-quantity]])
            new-db (:db-after tx)]

        (publish! {:topic :update/recipe-line-item
                   :data {:quantity prepped-quantity
                          :uuid (get-rli-uuid-by-eid new-db recipe-line-item-id)}})
        new-db))))


(defn update-recipe-line-item-uom!
  [recipe-line-item-id uom-code]
  (let [has-recipe-line-item-id? recipe-line-item-id]
    (when has-recipe-line-item-id?

      (let [tx (d/transact! @dsdb [[:db/add recipe-line-item-id :measurement/uom [:uom/code uom-code]]])
            new-db (:db-after tx)]

        (publish! {:topic :update/recipe-line-item
                   :data {:uom uom-code
                          :uuid (get-rli-uuid-by-eid new-db recipe-line-item-id)}})
        new-db))))

(defn create-recipe-line-item!
  [parent-item-id child-item-id]
  (let [new-uuid (nano-id)]
    (d/transact! @dsdb [[:db/add -1 :recipe-line-item/uuid  new-uuid]

                        [:db/add -1 :composite/contains child-item-id]
                        [:db/add -1 :measurement/quantity 0]
                        [:db/add parent-item-id :composite/contains -1]])))

(defn parse-tree-to->db!
  [conn data]

  (let [item-uuid (-> data :item/uuid)
        is-item? item-uuid
        children (-> data :composite/contains)]

    (if is-item?
      ;; Item
      (let [name (-> data :item/name)
            yield (-> data :measurement/yield)
            uom-code (-> data :measurement/uom :uom/code)
            recipe-line-items (mapv #(parse-tree-to->db! conn %) children)
            recipe-line-item-uuids (map :recipe-line-item/uuid recipe-line-items)
            item-payload [[:db/add -1 :item/uuid item-uuid]
                          [:db/add -1 :item/name name]
                          [:db/add -1 :measurement/yield yield]
                          [:db/add -1 :measurement/uom [:uom/code uom-code]]]
            item-rlis-payload (map (fn [uuid]
                                     [:db/add -1 :composite/contains [:recipe-line-item/uuid uuid]]) recipe-line-item-uuids)
            payload (into item-rlis-payload item-payload)]

        (d/transact! conn payload)
        data)

      ;; Recipe line item
      (let [rli-uuid (-> data :recipe-line-item/uuid)
            item-data (first children)
            item (parse-tree-to->db! conn item-data)
            item-uuid (:item/uuid item)
            quantity (-> data :measurement/quantity)
            uom-code (-> data :measurement/uom :uom/code)
            payload [{:recipe-line-item/uuid rli-uuid
                      :measurement/quantity quantity
                      :measurement/uom [:uom/code uom-code]
                      :composite/contains [:item/uuid item-uuid]}]]

        (d/transact! conn payload)
        data))))

(defn transact-uom-data!
  [conn uoms]
  (let [uoms (for [{:keys [uuid name code type system]} uoms]
               {:uom/uuid uuid
                :uom/name name
                :uom/code code
                :uom/type type
                :uom/system system})]
    (d/transact! conn uoms)))

(defn transact-conversion-data!
  [conn conversions]
  (let [conversions (for [{:keys [uuid from to quantity]} conversions]
                      {:conversion/uuid uuid
                       :measurement/quantity quantity
                       :conversion/from [:uom/code from]
                       :conversion/to [:uom/code to]})]
    (pm/spy>> :con conversions)
    (d/transact! conn conversions)))

(defn transact-company-data!
  [conn companies]
  (let [companies (for [{:keys [uuid name]} companies]
                    {:company/uuid uuid
                     :company/name name})]

    (d/transact! conn companies)))

(defn transact-item-data!
  [conn items]
  (let [items (for [{:keys [uuid name yield uom]} items]
                {:item/uuid uuid
                 :item/name name
                 :measurement/yield yield
                 :measurement/uom [:uom/code uom]})]

    (d/transact! conn items)))

(defn transact-recipe-line-items-data!
  [conn recipe-line-items]
  (let [recipe-line-items (for [{:keys [uuid child-uuid parent-uuid quantity uom]} recipe-line-items]
                            {:recipe-line-item/uuid uuid
                             :composite/contains [:item/uuid child-uuid]
                             :measurement/quantity quantity
                             :measurement/uom [:uom/code uom]})]

    (d/transact! conn recipe-line-items)))

(defn transact-item-recipe-links-data!
  [conn recipe-line-items]
  (let [item-recipe-links (for [{:keys [uuid parent-uuid]} recipe-line-items]
                            [:db/add [:item/uuid parent-uuid] :composite/contains [:recipe-line-item/uuid uuid]])]

    (d/transact! conn item-recipe-links)))

(defn transact-costs-data!
  [conn costs]
  (let [costs (for [{:keys [uuid company-uuid cost quantity uom]} costs]
                {:cost/uuid uuid
                 :currency.usd/cost cost
                 :cost/company [:company/uuid company-uuid]
                 :measurement/quantity quantity
                 :measurement/uom [:uom/code uom]})]

    (d/transact! conn costs)))

(defn tree->db!
  [data]
  (parse-tree-to->db! @dsdb (:item data))
  (publish! {:topic :remote-db-loaded}))

(defn initial-data->db
  [data]

  (let [result (:result data)]
    (transact-uom-data! @dsdb (-> result :data :uoms))
    (transact-conversion-data! @dsdb (-> result :data :conversions))
    (transact-company-data! @dsdb (-> result :data :companies))
    (transact-item-data! @dsdb (-> result :data :items))
    (transact-recipe-line-items-data! @dsdb (-> result :data :recipe-line-items))
    (transact-item-recipe-links-data! @dsdb (-> result :data :recipe-line-items))
    (transact-costs-data! @dsdb (-> result :data :costs)))

  (publish! {:topic :remote-db-loaded}))

(comment
  (tap> (d/datoms (d/db @dsdb) :avet))
  (tap> (d/datoms (d/db @dsdb) :eavt))



  (pm/log-for :con)
  (pm/log-for :result)
  (pm/log-for :com-data)

  (pm/reset!)
  (-> (pm/log-for :result) (first) :data :costs)

  (transact-uom-data! @dsdb (-> (pm/log-for :result) (first) :data :uoms))
  (-> (pm/log-for :result) (first) :data :uoms)

  ;; 
  )
