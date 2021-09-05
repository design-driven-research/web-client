(ns rdd.db
  (:require [datascript.core :as d]
            [rdd.converters.node :refer [node->tree]]
            [reagent.core :as r]))

(defn node-schema
  []
  {:node/name {:db/unique :db.unique/identity}
   :node/children {:db/valueType :db.type/ref
                   :db/cardinality :db.cardinality/many
                   :db/isComponent true}
   :node/parents {:db/valueType :db.type/ref
                  :db/cardinality :db.cardinality/many
                  :db/isComponent true}

   :node/uom {:db/valueType :db.type/ref :db/cardinality :db.cardinality/one}

   :node/categories {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
   :node/tags {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

(defn category-schema
  []
  {:category/name {:db/unique :db.unique/identity}
   :category/parents {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
   :category/children {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

(defn edge-schema
  []
  {:edge/uid  {:db/unique :db.unique/identity}
   :edge/parent {:db/cardinality :db.cardinality/one
                 :db/valueType :db.type/ref}
   :edge/child {:db/cardinality :db.cardinality/one
                :db/valueType :db.type/ref}

   :edge/uom {:db/cardinality :db.cardinality/one
              :db/valueType :db.type/ref}})

(defn tag-schema
  []
  {:tag/name {:db/unique :db.unique/identity}
   :tag/nodes {:db/valueType :db.type/ref
               :db/cardinality :db.cardinality/many}})

(defn uom-schema
  []
  {:uom/name {:db/unique :db.unique/identity}
   :uom/code {:db/unique :db.unique/identity}

   :uom/type {:db/valueType :db.type/ref}
   :uom/system {:db/valueType :db.type/ref}})

(defn conversions-schema
  []
  {:conversion/node {:db/valueType :db.type/ref}
   :conversion/from {:db/valueType :db.type/ref}
   :conversion/to {:db/valueType :db.type/ref}})

(defn cost-schema
  []
  {:cost/uom {:db/valueType :db.type/ref}
   :cost/node {:db/valueType :db.type/ref}})

(defn schema
  []
  (merge (node-schema)
         (category-schema)
         (edge-schema)
         (tag-schema)
         (uom-schema)
         (conversions-schema)
         (cost-schema)

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

   {:db/ident :units.type/WEIGHT}
   {:db/ident :units.type/VOLUME}
   {:db/ident :units.type/CUSTOM}])

(defn uom-data
  "Units of measure data prepped as datoms for insert"
  []
  [{:uom/name "Pound" :uom/code "lb" :uom/system :units.system/IMPERIAL :uom/type :units.type/WEIGHT :uom/factor 453.5920865}
   {:uom/name "Gram" :uom/code "gram" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :uom/factor 1}
   {:uom/name "Ounce" :uom/code "oz" :uom/system :units.system/IMPERIAL :uom/type :units.type/WEIGHT :uom/factor 28.34949978}
   {:uom/name "Kilogram" :uom/code "kg" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :uom/factor 1000}

   {:uom/name "Gallon" :uom/code "gallon" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 768.0019661}
   {:uom/name "Fluid Ounce" :uom/code "floz" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 5.999988}
   {:uom/name "Tablespoon" :uom/code "tbs" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 3.000003}
   {:uom/name "Cup" :uom/code "cup" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 48.0000768}
   {:uom/name "Teaspoon" :uom/code "tsp" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 1}

   {:uom/name "Each" :uom/code "ea"  :uom/type :units.type/CUSTOM}])

(defn seed-base-data
  []
  [;;  Nodes
   {:db/id -1 :node/name "Salt" :node/uom [:uom/code "gram"] :node/yield 1}
   {:db/id -2 :node/name "Pepper" :node/uom [:uom/code "gram"] :node/yield 1}
   {:db/id -3 :node/name "Paprila" :node/uom [:uom/code "gram"] :node/yield 1}
   {:db/id -4 :node/name "Garlic powder" :node/uom [:uom/code "gram"] :node/yield 1}

   {:db/id -5 :node/name "Oil mix" :node/uom [:uom/code "gram"] :node/yield 50}
   {:db/id -6 :node/name "Pesto Sauce" :node/uom [:uom/code "gram"] :node/yield 1}
   {:db/id -7 :node/name "Master Sauce" :node/uom [:uom/code "gram"] :node/yield 100}

   {:db/id -8 :node/name "Chorizo Wrap" :node/uom [:uom/code "gram"] :node/yield 1}

  ;;  Edges
   {:edge/child -1 :edge/parent -5 :node/_parents -1 :node/_children -5 :edge/quantity 10 :edge/uom [:uom/code "gram"]}
   {:edge/child -2 :edge/parent -5 :node/_parents -2 :node/_children -5 :edge/quantity 10 :edge/uom [:uom/code "gram"]}
   {:edge/child -3 :edge/parent -5 :node/_parents -3 :node/_children -5 :edge/quantity 10 :edge/uom [:uom/code "gram"]}
   {:edge/child -4 :edge/parent -5 :node/_parents -4 :node/_children -5 :edge/quantity 10 :edge/uom [:uom/code "gram"]}

   {:edge/child -5 :edge/parent -6 :node/_parents -5 :node/_children -6 :edge/quantity 10 :edge/uom [:uom/code "gram"]}
   {:edge/child -6 :edge/parent -7 :node/_parents -6 :node/_children -7 :edge/quantity 10 :edge/uom [:uom/code "gram"]}
   {:edge/child -7 :edge/parent -8 :node/_parents -7 :node/_children -8 :edge/quantity 10 :edge/uom [:uom/code "gram"]}

  ;;  Categories
   {:db/id -100 :category/name "Food"}
   {:db/id -101 :category/name "Dry" :category/parents [-100]}
   {:db/id -102 :category/name "Spice" :category/parents [-101]}

  ;;  Costs
  ;;  1lb of salt is $10
   {:db/id -200
    :cost/quantity 1
    :cost/uom [:uom/code "lb"]
    :cost/node [:node/name "Salt"]
    :cost/cost 10}

   {:db/id -201
    :cost/quantity 1
    :cost/uom [:uom/code "lb"]
    :cost/node [:node/name "Pepper"]
    :cost/cost 10}

  ;;  Conversions
  ;;  Custom UOM
   {:db/id -300 :uom/name "Case" :uom/code "cs" :uom/type :units.type/CUSTOM}
   {:db/id -301 :uom/name "Pallet" :uom/code "pallet" :uom/type :units.type/CUSTOM}
   {:db/id -302 :uom/name "Wrap" :uom/code "wrap" :uom/type :units.type/CUSTOM}

  ;;  Conversions
   {:db/id -400
    :conversion/from -300
    :conversion/to [:uom/code "lb"]
    :conversion/node [:node/name "Salt"]
    :conversion/factor 25}

   {:db/id -401
    :conversion/from -300
    :conversion/to [:uom/code "lb"]
    :conversion/node [:node/name "Pepper"]
    :conversion/factor 25}

   {:db/id -403
    :conversion/from -301
    :conversion/to [:uom/code "cs"]
    :conversion/node [:node/name "Pepper"]
    :conversion/factor 100}

  ;;  
   ])

(defonce dsdb (r/atom (d/empty-db (schema))
                      :meta {:listeners (atom {})}))

(defn seed-db
  "Seed the db with data"
  []
  (d/transact! dsdb (unit-systems-data))
  (d/transact! dsdb (uom-data))
  (d/transact! dsdb (seed-base-data)))

(defn reset-db
  []
  (d/reset-conn! dsdb (d/empty-db (schema))))

(defn node-by-name
  [name]
  (node->tree (d/entity @dsdb [:node/name name])))

(defn update-node-name!
  [name]
  (let [new-name (str (random-uuid))]
    (d/transact! dsdb [[:db/add [:node/name name] :node/name new-name]])))


;; Setup the DB
(seed-db)

;; Fiddle
#_(node-by-name "Chorizo Wrap")

;; Reset
#_(reset-db)