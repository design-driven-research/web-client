(ns rdd.db
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [clojure.edn]
            [postmortem.core :as pm]
            [datascript.core :as d]
            [nano-id.core :refer [nano-id]]
            [rdd.converters.item :refer [item->tree]]
            [rdd.services.event-bus :refer [publish!]]))

(defn item-schema
  []
  {:item/name {:db/unique :db.unique/identity}
   :item/uuid {:db/unique :db.unique/identity}


   #_#_:item/categories {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
   #_#_:item/tags {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

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
   :conversion/from {:db/valueType :db.type/ref}
   :conversion/to {:db/valueType :db.type/ref}})

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
  (merge (item-schema)
         #_(category-schema)
         (recipe-line-item-schema)
         #_(tag-schema)
         (uom-schema)
         (conversions-schema)
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
  (d/transact! db (uom-data)))

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

(defn tree->db!
  [data]
  (parse-tree-to->db! @dsdb (:item data))
  (publish! {:topic :remote-db-loaded}))