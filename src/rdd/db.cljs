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
   :item/uuid {:db/unique :db.unique/identity}})

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

(defn recipe-line-item-schema
  []
  {:recipe-line-item/uuid  {:db/unique :db.unique/identity}
   :recipe-line-item/item {:db/valueType :db.type/ref
                           :db/cardinality :db.cardinality/one}
   :recipe-line-item/company-item {:db/valueType :db.type/ref
                                   :db/cardinality :db.cardinality/one}})

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

(defn transact-from-local!
  [conn tx-data]
  (let [result (d/transact! conn tx-data)]
    (publish! {:topic :local-transaction-update
               :data tx-data})
    result))

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
