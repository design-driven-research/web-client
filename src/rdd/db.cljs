(ns rdd.db
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [clojure.edn]
            [datascript.core :as d]
            [rdd.db.transformers.tx-transforms :refer [initial-remote->tx-data]]
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
   :company/name {:db/unique :db.unique/identity}
   :company/company-items {:db/valueType :db.type/ref
                           :db/cardinality :db.cardinality/many}})

(defn company-item-schema
  []
  {:company-item/uuid {:db/unique :db.unique/identity}
   :company-item/name {:db/unique :db.unique/identity}
   :company-item/sku {:db/unique :db.unique/identity}
   :company-item/item {:db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/one}
   :company-item/quotes {:db/valueType :db.type/ref
                         :db/cardinality :db.cardinality/many}})

(defn quote-schema
  []
  {:quote/uuid {:db/unique :db.unique/identity}})

#_(defn category-schema
    []
    {:category/name {:db/unique :db.unique/identity}
     :category/parents {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
     :category/children {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

(defn recipe-line-item-schema
  []
  {:recipe-line-item/uuid  {:db/unique :db.unique/identity}
   :recipe-line-item/company-item {:db/valueType :db.type/ref
                                   :db/cardinality :db.cardinality/one}})

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
   :uom/system {:db/valueType :db.type/ref}
   :uom/conversions {:db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/many}})

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

(defn composite-schema
  []
  {:composite/contains  {:db/valueType :db.type/ref
                         :db/cardinality :db.cardinality/many}})

(defn schema
  []
  (merge
   (uom-schema)
   (conversions-schema)
   (item-schema)
   (recipe-line-item-schema)
   (company-schema)
   (company-item-schema)
   (quote-schema)
   (measurement-schema)
   (composite-schema)

   {:schema/version {:version "0.0.1" :doc "Main schema"}}))

;; =========================================================================
;; =========================================================================
;; SEED DATA
;; =========================================================================
;; =========================================================================
(defn enum-data
  "System of units data prepped as datoms for insert"
  []
  [{:db/ident :production.type/ATOM}
   {:db/ident :production.type/COMPOSITE}

   {:db/ident :units.system/IMPERIAL}
   {:db/ident :units.system/METRIC}

   {:db/ident :units.system/CUSTOM}

   {:db/ident :units.type/WEIGHT}
   {:db/ident :units.type/VOLUME}
   {:db/ident :units.type/CUSTOM}])

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
  (d/transact! db (enum-data)))

(defn reset-db!
  [conn]
  (d/reset-conn! conn (d/empty-db (schema)))
  (seed-db conn))

(defn setup-listeners
  [conn]
  (d/listen! conn :default (fn [db]
                             (publish! {:topic :db-updated
                                        :data db}))))





;; (defn parse-tree-to->db!
;;   [conn data]

;;   (let [item-uuid (-> data :item/uuid)
;;         is-item? item-uuid
;;         children (-> data :composite/contains)]

;;     (if is-item?
;;       ;; Item
;;       (let [name (-> data :item/name)
;;             yield (-> data :measurement/yield)
;;             uom-code (-> data :measurement/uom :uom/code)
;;             recipe-line-items (mapv #(parse-tree-to->db! conn %) children)
;;             recipe-line-item-uuids (map :recipe-line-item/uuid recipe-line-items)
;;             item-payload [[:db/add -1 :item/uuid item-uuid]
;;                           [:db/add -1 :item/name name]
;;                           [:db/add -1 :measurement/yield yield]
;;                           [:db/add -1 :measurement/uom [:uom/code uom-code]]]
;;             item-rlis-payload (map (fn [uuid]
;;                                      [:db/add -1 :composite/contains [:recipe-line-item/uuid uuid]]) recipe-line-item-uuids)
;;             payload (into item-rlis-payload item-payload)]

;;         (d/transact! conn payload)
;;         data)

;;       ;; Recipe line item
;;       (let [rli-uuid (-> data :recipe-line-item/uuid)
;;             item-data (first children)
;;             item (parse-tree-to->db! conn item-data)
;;             item-uuid (:item/uuid item)
;;             quantity (-> data :measurement/quantity)
;;             uom-code (-> data :measurement/uom :uom/code)
;;             payload [{:recipe-line-item/uuid rli-uuid
;;                       :measurement/quantity quantity
;;                       :measurement/uom [:uom/code uom-code]
;;                       :composite/contains [:item/uuid item-uuid]}]]

;;         (d/transact! conn payload)
;;         data))))

;; (defn tree->db!
;;   [data]
;;   (parse-tree-to->db! @dsdb (:item data))
;;   (publish! {:topic :remote-db-loaded}))

(defn initial-data->db!
  "Push an initial data load into the db"
  [raw-data]
  (let [data (-> raw-data :result :data)
        tx-data (initial-remote->tx-data data)]
    (d/transact! @dsdb tx-data)
    (publish! {:topic :remote-db-loaded})))

(comment

  (tap> (d/datoms (d/db @dsdb) :avet))
  (tap> (d/datoms (d/db @dsdb) :eavt))

  ;; 
  )
