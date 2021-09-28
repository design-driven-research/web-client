(ns rdd.converters.uom
  (:require [datascript.core :as d]
            [rdd.db :as db-core]
            [loom.graph :as g]
            [loom.alg :as alg]))

(defn uom->uom-factor
  "Returns the factor of converting units from and to"
  [from to db]

;;   
  )

(-> (d/entity (d/db @db-core/dsdb) [:uom/code "gr"]))

#_(d/entity (d/db @db-core/dsdb) [:conversion/from [:uom/code "gr"]])

(d/q '[:find ?conversion-uuid
       :where
       [?uom :uom/code "kg"]
       [?conversion :conversion/from ?uom]
       [?conversion :conversion/uuid ?conversion-uuid]] (d/db @db-core/dsdb))

(def yo (g/graph ["pallet" "case"] ["case" "lb"] ["lb" "gram"]))
(g/nodes yo)
(g/edges yo)
(alg/bf-path yo "pallet" "gram")