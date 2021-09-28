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

(defn uoms []
  (d/q '[:find ?from-uom-code ?to-uom-code ?quantity
         :keys :from :to :quantity
         :where
         [?conversion :measurement/quantity ?quantity]
         [?conversion :conversion/from ?from-uom]
         [?from-uom :uom/code ?from-uom-code]

         [?conversion :conversion/to ?to-uom]
         [?to-uom :uom/code ?to-uom-code]

      ;;  
         ](d/db @db-core/dsdb)))


(g/nodes (g/graph ["kg" "gr" 1000] ["gr" "gr" 1] ["lb" "gr" 453.1]))


(def g-2 (g/graph [{:from "pallet" :to "case" :qty 5} {:from "case" :to "kg" :qty 5}]
                  [{:from "case" :to "kg" :qty 5} {:from "kg" :to "lb" :qty 5}]
                  [{:from "kg" :to "lb" :qty 5} {:from "lb" :to "gr" :qty 453}]))

(g/nodes g-2)
(g/edges g-2)
(alg/bf-path g-2 {:from "pallet", :to "case", :qty 5} {:from "lb", :to "gr", :qty 453})
;; => ({:from "pallet", :to "case", :qty 5}
;;     {:from "case", :to "kg", :qty 5}
;;     {:from "kg", :to "lb", :qty 5}
;;     {:from "lb", :to "gr", :qty 453})

;; => ([{:from "pallet", :to "case", :qty 5} {:from "case", :to "kg", :qty 5}]
;;     [{:from "case", :to "kg", :qty 5} {:from "pallet", :to "case", :qty 5}]
;;     [{:from "case", :to "kg", :qty 5} {:from "kg", :to "lb", :qty 5}]
;;     [{:from "kg", :to "lb", :qty 5} {:from "case", :to "kg", :qty 5}]
;;     [{:from "kg", :to "lb", :qty 5} {:from "lb", :to "gr", :qty 453}]
;;     [{:from "lb", :to "gr", :qty 453} {:from "kg", :to "lb", :qty 5}])


;; => #{{:from "kg", :to "lb", :qty 5}
;;      {:from "pallet", :to "case", :qty 5}
;;      {:from "lb", :to "gr", :qty 453}
;;      {:from "case", :to "kg", :qty 5}}


(-> (g/graph ["pallet" "case" 25]
             ["case" "kg" 10]
             ["other" "gr" 5]
             ["another" "gr" 5]
             ["last" "kg" 5]
             ["kg" "lb" 5]
             ["lb" "gr" 453]
             ["gr" "gr" 1])
    (alg/bf-path "pallet" "gr"))
;; => ("pallet" "case" "kg" "lb" "gr")

;; => ("kg" "gr")
(uoms)
;; => #{["lb" 453.1 "gr"] ["kg" 1000 "gr"] ["gr" 1 "gr"]}

(-> (apply g/graph (uoms))
    (alg/bf-path "kg" "gr"))


(defn path-from-to
  [from to]
  (-> (apply g/graph (uoms))
      (alg/bf-path from to)))


(defn uom-by-code
  [code]
  (d/q '[:find ?conversion-uuid
         :where
         [?uom :uom/code code]
         [?conversion :conversion/from ?uom]
         [?conversion :conversion/uuid ?conversion-uuid]] (d/db @db-core/dsdb)))

(defn convert-from-to
  [from to]
  (let [path (path-from-to from to)]))


;; => ("kg" "gr")


(-> (apply g/graph #{["pallet" "case" 25]
                     ["case" "kg" 10]
                     ["other" "gr" 5]
                     ["another" "gr" 5]
                     ["last" "kg" 5]
                     ["kg" "lb" 5]
                     ["lb" "gr" 453]
                     ["gr" "gr" 1]})
    (alg/bf-path "pallet" "gr"))

(-> (apply g/graph #{["lb" "gr" 453] ["kg" "gr" 1000] ["gr" "gr" 1]})
    (alg/bf-path "kg" "gr"))



(def yo (g/graph ["pallet" "case"] ["case" "lb"] ["lb" "gram"]))
(g/nodes yo)
(g/edges yo)
(alg/bf-path yo "pallet" "gram")