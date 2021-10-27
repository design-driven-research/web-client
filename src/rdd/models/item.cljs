(ns rdd.models.item
  (:require [clojure.set]
            [datascript.core :as d]
            [rdd.db :refer [db]]))

(defn items
  []
  (map first (d/q '[:find (pull ?e [*])
                    :where [?e :item/name ?name]]
                  (db))))

(defn item-by-uuid
  [uuid]
  (first (d/q '[:find [(pull ?e [*])]
                :in $ ?uuid
                :where [?e :item/uuid ?uuid]]
              (db) uuid)))

(defn item-by-name
  [name]
  (first (d/q '[:find [(pull ?e [*])]
                :in $ ?name
                :where [?e :item/name ?name]]
              (db) name)))

#_(tap> (item-by-name "Sauce"))

#_(item-by-name "Salt")


#_(item-by-name "Bay leaves")

#_(item-by-uuid "saV2jehHxu0YkJYjDg9FI")

#_(tap> (items))
