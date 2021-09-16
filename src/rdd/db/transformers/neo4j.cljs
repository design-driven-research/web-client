(ns rdd.db.transformers.neo4j
  (:require [clojure.edn]
            [datascript.core :as d]))

(declare create-recipe-line-item!
         create-recipe-line-items!
         create-item!
         create-uom!)

(defn create-uom!
  [db data]

  (let [id (-> data :_id)
        name (-> data :name)
        code (-> data :code)
        ;; type (-> data :type)

        payload {:db/id id
                 :uom/name name
                 :uom/code code
                 #_#_:uom/type type}]

    (d/transact! db [payload])
    id))

(defn create-recipe-line-item!
  [db data]
  (let [id (-> data :_id)
        child-data (-> data :made_of first)
        uom-code (-> data :measured_in first :code)
        quantity (-> data :measured_in first :measured_in.quantity)

        child-item-id (create-item! db child-data)

        payload {:db/id id
                 :recipe-line-item/child child-item-id
                 :recipe-line-item/uom [:uom/code uom-code]
                 :recipe-line-item/quantity quantity}]

    (d/transact! db [payload])
    id))

(defn create-recipe-line-items!
  [db recipe-line-items]
  (mapv (partial create-recipe-line-item! db) recipe-line-items))

(defn create-item!
  [db data]
  (let [id (-> data :_id)
        name (-> data :name)
        yield (-> data :yield)
        uom-code (-> data :measured_in first :code)
        recipe-line-items-data (-> data :made_of)
        recipe-line-item-ids (create-recipe-line-items! db recipe-line-items-data)

        payload {:db/id id
                 :item/yield yield
                 :item/uom [:uom/code uom-code]
                 :item/name name
                 :item/children recipe-line-item-ids}]
    (d/transact! db [payload])
    id))

(defn tree->db!
  [db data]
  (create-item! db data))