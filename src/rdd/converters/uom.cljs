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


(d/q '[:find ?cei ?name ?uuid
       :where [?cei :company-item/uuid ?uuid]
       [?cei :company-item/item ?item]
       [?item :item/name ?name]]
     (d/db @db-core/dsdb))
;; => #{[78 "Turmeric" "Wrdv0iZqdUdFPwmEXSRnL"]
;;      [93 "Turmeric" "Wrdv0iZqdUdFPwmEXSRnL"]
;;      [99 "Pepper" "qde5W99qK9ZPybCXl2lRo"]
;;      [102 "Onion Powder" "iAzAtN8k3lmDvP9quV0RO"]
;;      [90 "Salt" "RMs3zx5AWyacVpcZsLArx"]
;;      [105 "Onion Powder" "iAzAtN8k3lmDvP9quV0RO"]
;;      [97 "Pearl Dust" "xUWXUy4P6x3FS1kgbpXZ3"]
;;      [91 "Bay Leaves" "QHjCk1ci7hkc4AqNnY29F"]
;;      [108 "Bay Leaves" "QHjCk1ci7hkc4AqNnY29F"]
;;      [92 "Bay Leaves" "QHjCk1ci7hkc4AqNnY29F"]
;;      [88 "Pepper" "qde5W99qK9ZPybCXl2lRo"]
;;      [69 "Garlic Powder" "3HGZvZdsy7kVwfh0sAaro"]
;;      [67 "Garlic Powder" "3HGZvZdsy7kVwfh0sAaro"]
;;      [83 "Pepper" "qde5W99qK9ZPybCXl2lRo"]
;;      [77 "Pearl Dust" "xUWXUy4P6x3FS1kgbpXZ3"]
;;      [64 "Asafoetida" "_t0H4z3PP_ub0bKRtDfgT"]
;;      [63 "Pearl Dust" "xUWXUy4P6x3FS1kgbpXZ3"]
;;      [82 "Asafoetida" "_t0H4z3PP_ub0bKRtDfgT"]
;;      [95 "Pearl Dust" "xUWXUy4P6x3FS1kgbpXZ3"]
;;      [71 "Onion Powder" "iAzAtN8k3lmDvP9quV0RO"]
;;      [101 "Garlic Powder" "3HGZvZdsy7kVwfh0sAaro"]
;;      [100 "Salt" "xl8g4FhlMrbokoAlIsB7J"]
;;      [109 "Turmeric" "Wrdv0iZqdUdFPwmEXSRnL"]
;;      [89 "Onion Powder" "iAzAtN8k3lmDvP9quV0RO"]
;;      [81 "Pearl Dust" "xUWXUy4P6x3FS1kgbpXZ3"]
;;      [98 "Asafoetida" "_t0H4z3PP_ub0bKRtDfgT"]
;;      [87 "Garlic Powder" "3HGZvZdsy7kVwfh0sAaro"]
;;      [96 "Turmeric" "Wrdv0iZqdUdFPwmEXSRnL"]
;;      [104 "Pepper" "qde5W99qK9ZPybCXl2lRo"]
;;      [76 "Asafoetida" "_t0H4z3PP_ub0bKRtDfgT"]
;;      [68 "Onion Powder" "iAzAtN8k3lmDvP9quV0RO"]
;;      [66 "Salt" "xl8g4FhlMrbokoAlIsB7J"]
;;      [86 "Onion Powder" "iAzAtN8k3lmDvP9quV0RO"]
;;      [106 "Salt" "RMs3zx5AWyacVpcZsLArx"]
;;      [103 "Garlic Powder" "3HGZvZdsy7kVwfh0sAaro"]
;;      [75 "Turmeric" "Wrdv0iZqdUdFPwmEXSRnL"]
;;      [70 "Pepper" "qde5W99qK9ZPybCXl2lRo"]
;;      [94 "Asafoetida" "_t0H4z3PP_ub0bKRtDfgT"]
;;      [65 "Pepper" "qde5W99qK9ZPybCXl2lRo"]
;;      [111 "Pearl Dust" "xUWXUy4P6x3FS1kgbpXZ3"]
;;      [112 "Turmeric" "Wrdv0iZqdUdFPwmEXSRnL"]
;;      [84 "Salt" "xl8g4FhlMrbokoAlIsB7J"]
;;      [74 "Bay Leaves" "QHjCk1ci7hkc4AqNnY29F"]
;;      [73 "Bay Leaves" "QHjCk1ci7hkc4AqNnY29F"]
;;      [72 "Salt" "RMs3zx5AWyacVpcZsLArx"]
;;      [85 "Garlic Powder" "3HGZvZdsy7kVwfh0sAaro"]
;;      [107 "Bay Leaves" "QHjCk1ci7hkc4AqNnY29F"]
;;      [110 "Asafoetida" "_t0H4z3PP_ub0bKRtDfgT"]}

;; => #{[105 "Onion Powder"]
;;      [67 "Garlic Powder"]
;;      [92 "Bay Leaves"]
;;      [94 "Asafoetida"]
;;      [82 "Asafoetida"]
;;      [70 "Pepper"]
;;      [106 "Salt"]
;;      [77 "Pearl Dust"]
;;      [112 "Turmeric"]
;;      [81 "Pearl Dust"]
;;      [93 "Turmeric"]
;;      [73 "Bay Leaves"]
;;      [64 "Asafoetida"]
;;      [66 "Salt"]
;;      [97 "Pearl Dust"]
;;      [87 "Garlic Powder"]
;;      [109 "Turmeric"]
;;      [78 "Turmeric"]
;;      [102 "Onion Powder"]
;;      [98 "Asafoetida"]
;;      [68 "Onion Powder"]
;;      [96 "Turmeric"]
;;      [86 "Onion Powder"]
;;      [100 "Salt"]
;;      [101 "Garlic Powder"]
;;      [103 "Garlic Powder"]
;;      [111 "Pearl Dust"]
;;      [76 "Asafoetida"]
;;      [104 "Pepper"]
;;      [84 "Salt"]
;;      [88 "Pepper"]
;;      [95 "Pearl Dust"]
;;      [89 "Onion Powder"]
;;      [83 "Pepper"]
;;      [99 "Pepper"]
;;      [72 "Salt"]
;;      [85 "Garlic Powder"]
;;      [69 "Garlic Powder"]
;;      [110 "Asafoetida"]
;;      [107 "Bay Leaves"]
;;      [75 "Turmeric"]
;;      [90 "Salt"]
;;      [71 "Onion Powder"]
;;      [63 "Pearl Dust"]
;;      [108 "Bay Leaves"]
;;      [65 "Pepper"]
;;      [74 "Bay Leaves"]
;;      [91 "Bay Leaves"]}



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