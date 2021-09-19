(ns rdd.db
  (:require [clojure.edn]
            [datascript.core :as d]
            [rdd.converters.item :refer [item->tree]]
            [rdd.db.transformers.neo4j :as neo4j-transformer]
            [rdd.services.event-bus :refer [publish!]]))

(defn item-schema
  []
  {:item/name {:db/unique :db.unique/identity}
   :item/children {:db/valueType :db.type/ref
                   :db/cardinality :db.cardinality/many
                   :db/isComponent true}
   :item/parents {:db/valueType :db.type/ref
                  :db/cardinality :db.cardinality/many
                  :db/isComponent true}

   :item/uom {:db/valueType :db.type/ref :db/cardinality :db.cardinality/one}

   :item/categories {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
   :item/tags {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

#_(defn category-schema
    []
    {:category/name {:db/unique :db.unique/identity}
     :category/parents {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
     :category/children {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

(defn recipe-line-item-schema
  []
  {:recipe-line-item/uid  {:db/unique :db.unique/identity}
   :recipe-line-item/parent {:db/cardinality :db.cardinality/one
                             :db/valueType :db.type/ref}
   :recipe-line-item/child {:db/cardinality :db.cardinality/one
                            :db/valueType :db.type/ref}
   :recipe-line-item/uom {:db/cardinality :db.cardinality/one
                          :db/valueType :db.type/ref}})

#_(defn tag-schema
    []
    {:tag/name {:db/unique :db.unique/identity}
     :tag/items {:db/valueType :db.type/ref
                 :db/cardinality :db.cardinality/many}})

(defn uom-schema
  []
  {:uom/name {:db/unique :db.unique/identity}
   :uom/code {:db/unique :db.unique/identity}

   :uom/type {:db/valueType :db.type/ref}
   :uom/system {:db/valueType :db.type/ref}})

(defn conversions-schema
  []
  {:conversion/item {:db/valueType :db.type/ref}
   :conversion/from {:db/valueType :db.type/ref}
   :conversion/to {:db/valueType :db.type/ref}})

(defn cost-schema
  []
  {:cost/uom {:db/valueType :db.type/ref}
   :cost/item {:db/valueType :db.type/ref}})

(defn schema
  []
  (merge (item-schema)
         #_(category-schema)
         (recipe-line-item-schema)
         #_(tag-schema)
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
   {:uom/name "gr" :uom/code "gr" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :uom/factor 1}
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
  [;;  items
   {:db/id -1 :item/name "Salt" :item/uom [:uom/code "gr"] :item/yield 1}
   {:db/id -2 :item/name "Pepper" :item/uom [:uom/code "gr"] :item/yield 1}
   {:db/id -3 :item/name "Paprila" :item/uom [:uom/code "gr"] :item/yield 1}
   {:db/id -4 :item/name "Garlic powder" :item/uom [:uom/code "gr"] :item/yield 1}

   {:db/id -5 :item/name "Oil mix" :item/uom [:uom/code "gr"] :item/yield 50}
   {:db/id -6 :item/name "Pesto Sauce" :item/uom [:uom/code "gr"] :item/yield 1}
   {:db/id -7 :item/name "Master Sauce" :item/uom [:uom/code "gr"] :item/yield 100}

   {:db/id -8 :item/name "Chorizo Wrap" :item/uom [:uom/code "gr"] :item/yield 1}

  ;;  recipe-line-items
   {:recipe-line-item/child -1 :recipe-line-item/parent -5 :item/_parents -1 :item/_children -5 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/child -2 :recipe-line-item/parent -5 :item/_parents -2 :item/_children -5 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/child -3 :recipe-line-item/parent -5 :item/_parents -3 :item/_children -5 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/child -4 :recipe-line-item/parent -5 :item/_parents -4 :item/_children -5 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}

   {:recipe-line-item/child -5 :recipe-line-item/parent -6 :item/_parents -5 :item/_children -6 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/child -6 :recipe-line-item/parent -7 :item/_parents -6 :item/_children -7 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/child -7 :recipe-line-item/parent -8 :item/_parents -7 :item/_children -8 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}

  ;;  Categories
   {:db/id -100 :category/name "Food"}
   {:db/id -101 :category/name "Dry" :category/parents [-100]}
   {:db/id -102 :category/name "Spice" :category/parents [-101]}

  ;;  Costs
  ;;  1lb of salt is $10
   {:db/id -200
    :cost/quantity 1
    :cost/uom [:uom/code "lb"]
    :cost/item [:item/name "Salt"]
    :cost/cost 10}

   {:db/id -201
    :cost/quantity 1
    :cost/uom [:uom/code "lb"]
    :cost/item [:item/name "Pepper"]
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
    :conversion/item [:item/name "Salt"]
    :conversion/factor 25}

   {:db/id -401
    :conversion/from -300
    :conversion/to [:uom/code "lb"]
    :conversion/item [:item/name "Pepper"]
    :conversion/factor 25}

   {:db/id -403
    :conversion/from -301
    :conversion/to [:uom/code "cs"]
    :conversion/item [:item/name "Pepper"]
    :conversion/factor 100}

  ;;  
   ])

(defonce dsdb (atom (d/empty-db (schema))
                    :meta {:listeners (atom {})}))

(defn seed-db
  "Seed the db with data"
  []
  (d/transact! dsdb (unit-systems-data))
  (d/transact! dsdb (uom-data))
  #_(d/transact! dsdb (seed-base-data)))

(defn reset-db!
  []
  (d/reset-conn! dsdb (d/empty-db (schema))))

(defn item-by-name
  [name]
  (let [item (d/entity @dsdb [:item/name name])]
    (when item
      (item->tree item))))

(defn update-item-name!
  [name]
  (let [new-name (str (random-uuid))]
    (d/transact! dsdb [[:db/add [:item/name name] :item/name new-name]])))

(defn update-recipe-line-item-uom-quantity!
  [recipe-line-item-id qty]
  (let [parsed-quantity (js/parseFloat qty)
        prepped-quantity (if (and (number? parsed-quantity)
                                  (>= parsed-quantity 0))
                           parsed-quantity
                           0)
        has-recipe-line-item-id? recipe-line-item-id]
    (when has-recipe-line-item-id?
      (d/transact! dsdb [[:db/add recipe-line-item-id :recipe-line-item/quantity prepped-quantity]]))))


(defn update-recipe-line-item-uom!
  [recipe-line-item-id uom-code]
  (let [has-recipe-line-item-id? recipe-line-item-id]
    (when has-recipe-line-item-id?
      (d/transact! dsdb [[:db/add recipe-line-item-id :recipe-line-item/uom [:uom/code uom-code]]]))))

(defn create-recipe-line-item!
  [parent-item-id child-item-id]
  (js/console.log parent-item-id child-item-id " parent-item-id child-item-id ")
  (d/transact! dsdb [[:db/add -1 :recipe-line-item/parent parent-item-id]
                     [:db/add -1 :recipe-line-item/child child-item-id]
                     [:db/add -1 :recipe-line-item/quantity 0]
                     [:db/add parent-item-id :item/children -1]
                     [:db/add child-item-id :item/parents -1]]))

(defn tree->db!
  [data]
  (neo4j-transformer/tree->db! dsdb data))

;; Fiddle
#_(tap> (item-by-name "Chorizo Family Pack"))
#_(tap> (d/datoms @dsdb :eavt))
#_(item-by-name "Chorizo Family Pack")
  ;; => {:id nil, :uom nil, :normalized-cost ##Inf, :name nil}

;; Reset
(reset-db!)

;; Setup the DB
(seed-db)

(d/listen! dsdb :default (fn [] (publish! {:topic :db-updated})))


;; (d/listen! dsdb :degub (fn [tx] (tap> tx)))





#_(-> (rc/inline "seed/seed_data.edn")
      clojure.edn/read-string
      :item-sample
      first
      :value
      create-item!)


#_(def timer
    (let [count (atom 1)]
      (js/setInterval (fn []
                        (js/console.log "hi" @count)
                        (swap! count inc)
                        (update-recipe-line-item-uom-quantity! 27 @count)) 1000)))

;; (update-recipe-line-item-uom-quantity! 27 20)
