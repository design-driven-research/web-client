(ns rdd.models.uom
  (:require [clojure.set]
            [datascript.core :as d]
            [rdd.db :refer [db]]))

(defn uoms
  []
  (map first (d/q '[:find (pull ?e [*])
                    :where [?e :uom/uuid _]]
                  (db))))

(defn uom-by-uuid
  [uuid]
  (first (d/q '[:find [(pull ?e [*])]
                :in $ ?uuid
                :where [?e :uom/uuid ?uuid]]
              (db) uuid)))

(first (uoms))

#_(uom-by-uuid "71vabjOIx7nH-Bio2V2HF")

#_(map first (d/q '[:find (pull ?e [*])
                    :where [?e :uom/uuid _]]
                  (db)))