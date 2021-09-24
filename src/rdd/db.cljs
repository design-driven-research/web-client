(ns rdd.db
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [clojure.edn]
            [nano-id.core :refer [nano-id]]
            [datascript.core :as d]
            [rdd.converters.item :refer [item->tree]]
            [rdd.db.transformers.neo4j :as neo4j-transformer]
            [rdd.services.event-bus :refer [publish!]]))

(defn item-schema
  []
  {:item/name {:db/unique :db.unique/identity}
   :item/uuid {:db/unique :db.unique/identity}
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
  {:recipe-line-item/uuid  {:db/unique :db.unique/identity}
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
  {:uom/uuid  {:db/unique :db.unique/identity}
   :uom/name {:db/unique :db.unique/identity}
   :uom/code {:db/unique :db.unique/identity}

   :uom/type {:db/valueType :db.type/ref}
   :uom/system {:db/valueType :db.type/ref}})

(defn conversions-schema
  []
  {:conversion/uuid  {:db/unique :db.unique/identity}
   :conversion/item {:db/valueType :db.type/ref}
   :conversion/from {:db/valueType :db.type/ref}
   :conversion/to {:db/valueType :db.type/ref}})

(defn cost-schema
  []
  {:cost/uuid  {:db/unique :db.unique/identity}
   :cost/uom {:db/valueType :db.type/ref}
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
  [{:uom/uuid (nano-id) :uom/name "Pound" :uom/code "lb" :uom/system :units.system/IMPERIAL :uom/type :units.type/WEIGHT :uom/factor 453.5920865}
   {:uom/uuid (nano-id) :uom/name "gr" :uom/code "gr" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :uom/factor 1}
   {:uom/uuid (nano-id) :uom/name "Ounce" :uom/code "oz" :uom/system :units.system/IMPERIAL :uom/type :units.type/WEIGHT :uom/factor 28.34949978}
   {:uom/uuid (nano-id) :uom/name "Kilogram" :uom/code "kg" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :uom/factor 1000}

   {:uom/uuid (nano-id) :uom/name "Gallon" :uom/code "gallon" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 768.0019661}
   {:uom/uuid (nano-id) :uom/name "Fluid Ounce" :uom/code "floz" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 5.999988}
   {:uom/uuid (nano-id) :uom/name "Tablespoon" :uom/code "tbs" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 3.000003}
   {:uom/uuid (nano-id) :uom/name "Cup" :uom/code "cup" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 48.0000768}
   {:uom/uuid (nano-id) :uom/name "Teaspoon" :uom/code "tsp" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :uom/factor 1}

   {:uom/uuid (nano-id) :uom/name "Each" :uom/code "ea"  :uom/type :units.type/CUSTOM}])

(defn seed-base-data
  []
  [;;  items
   {:item/uuid (nano-id) :db/id -1 :item/name "Salt" :item/uom [:uom/code "gr"] :item/yield 1}
   {:item/uuid (nano-id) :db/id -2 :item/name "Pepper" :item/uom [:uom/code "gr"] :item/yield 1}
   {:item/uuid (nano-id) :db/id -3 :item/name "Paprila" :item/uom [:uom/code "gr"] :item/yield 1}
   {:item/uuid (nano-id) :db/id -4 :item/name "Garlic powder" :item/uom [:uom/code "gr"] :item/yield 1}

   {:item/uuid (nano-id) :db/id -5 :item/name "Oil mix" :item/uom [:uom/code "gr"] :item/yield 50}
   {:item/uuid (nano-id) :db/id -6 :item/name "Pesto Sauce" :item/uom [:uom/code "gr"] :item/yield 1}
   {:item/uuid (nano-id) :db/id -7 :item/name "Master Sauce" :item/uom [:uom/code "gr"] :item/yield 100}

   {:item/uuid (nano-id) :db/id -8 :item/name "Chorizo Wrap" :item/uom [:uom/code "gr"] :item/yield 1}

  ;;  recipe-line-items
   {:recipe-line-item/uuid (nano-id) :recipe-line-item/child -1 :recipe-line-item/parent -5 :item/_parents -1 :item/_children -5 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/uuid (nano-id) :recipe-line-item/child -2 :recipe-line-item/parent -5 :item/_parents -2 :item/_children -5 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/uuid (nano-id) :recipe-line-item/child -3 :recipe-line-item/parent -5 :item/_parents -3 :item/_children -5 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/uuid (nano-id) :recipe-line-item/child -4 :recipe-line-item/parent -5 :item/_parents -4 :item/_children -5 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}

   {:recipe-line-item/uuid (nano-id) :recipe-line-item/child -5 :recipe-line-item/parent -6 :item/_parents -5 :item/_children -6 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/uuid (nano-id) :recipe-line-item/child -6 :recipe-line-item/parent -7 :item/_parents -6 :item/_children -7 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}
   {:recipe-line-item/uuid (nano-id) :recipe-line-item/child -7 :recipe-line-item/parent -8 :item/_parents -7 :item/_children -8 :recipe-line-item/quantity 10 :recipe-line-item/uom [:uom/code "gr"]}

  ;;  Categories
   {:category/uuid (nano-id) :db/id -100 :category/name "Food"}
   {:category/uuid (nano-id) :db/id -101 :category/name "Dry" :category/parents [-100]}
   {:category/uuid (nano-id) :db/id -102 :category/name "Spice" :category/parents [-101]}

  ;;  Costs
  ;;  1lb of salt is $10
   {:cost/uuid (nano-id)
    :db/id -200
    :cost/quantity 1
    :cost/uom [:uom/code "lb"]
    :cost/item [:item/name "Salt"]
    :cost/cost 10}

   {:cost/uuid (nano-id)
    :db/id -201
    :cost/quantity 1
    :cost/uom [:uom/code "lb"]
    :cost/item [:item/name "Pepper"]
    :cost/cost 10}

  ;;  Conversions
  ;;  Custom UOM
   {:uom/uuid (nano-id) :db/id -300 :uom/name "Case" :uom/code "cs" :uom/type :units.type/CUSTOM}
   {:uom/uuid (nano-id) :db/id -301 :uom/name "Pallet" :uom/code "pallet" :uom/type :units.type/CUSTOM}
   {:uom/uuid (nano-id) :db/id -302 :uom/name "Wrap" :uom/code "wrap" :uom/type :units.type/CUSTOM}

  ;;  Conversions
   {:conversion/uuid (nano-id)
    :db/id -400
    :conversion/from -300
    :conversion/to [:uom/code "lb"]
    :conversion/item [:item/name "Salt"]
    :conversion/factor 25}

   {:conversion/uuid (nano-id)
    :db/id -401
    :conversion/from -300
    :conversion/to [:uom/code "lb"]
    :conversion/item [:item/name "Pepper"]
    :conversion/factor 25}

   {:conversion/uuid (nano-id)
    :db/id -403
    :conversion/from -301
    :conversion/to [:uom/code "cs"]
    :conversion/item [:item/name "Pepper"]
    :conversion/factor 100}

  ;;  
   ])

(declare reset-db! seed-db setup-listeners)

(defstate ^{:on-reload :noop} dsdb
  :start (do
           (js/console.log "Recreating dsdb")
           (let [db (atom (d/empty-db (schema))
                          :meta {:listeners (atom {})})]
             (reset-db! db)
             (seed-db db)
             (setup-listeners db)
             db)))

(defn seed-db
  "Seed the db with data"
  [db]

  (d/transact! db (unit-systems-data))
  (d/transact! db (uom-data))
  #_(d/transact! db (seed-base-data)))

(defn reset-db!
  [db]
  (d/reset-conn! db (d/empty-db (schema))))

(defn setup-listeners
  [conn]
  (d/listen! conn :default (fn [db]
                             (publish! {:topic :db-updated
                                        :data db}))))

(defn item-by-name
  [name]
  (let [item (d/entity @@dsdb [:item/name name])]
    (when item
      (item->tree item))))

(defn update-item-name!
  [name]
  (let [new-name (str (random-uuid))]
    (d/transact! @dsdb [[:db/add [:item/name name] :item/name new-name]])))

(defn update-recipe-line-item-quantity!
  [recipe-line-item-id qty]
  (let [parsed-quantity (js/parseFloat qty)
        prepped-quantity (if (and (number? parsed-quantity)
                                  (>= parsed-quantity 0))
                           parsed-quantity
                           0)
        has-recipe-line-item-id? recipe-line-item-id]
    (when has-recipe-line-item-id?
      (let [tx (d/transact! @dsdb [[:db/add recipe-line-item-id :recipe-line-item/quantity prepped-quantity]])
            new-db (:db-after tx)]

        (publish! {:topic :update/recipe-line-item-quantity
                   :data {:quantity prepped-quantity
                          :uuid (->> (d/q '[:find [?uuid]
                                            :in $ ?id
                                            :where [?id :recipe-line-item/uuid ?uuid]]
                                          new-db recipe-line-item-id)
                                     first)}})
        new-db))))


(defn update-recipe-line-item-uom!
  [recipe-line-item-id uom-code]
  (let [has-recipe-line-item-id? recipe-line-item-id]
    (when has-recipe-line-item-id?
      (d/transact! @dsdb [[:db/add recipe-line-item-id :recipe-line-item/uom [:uom/code uom-code]]]))))

(defn create-recipe-line-item!
  [parent-item-id child-item-id]
  (js/console.log parent-item-id child-item-id " parent-item-id child-item-id ")
  (let [new-uuid (nano-id)]
    (d/transact! @dsdb [[:db/add -1 :recipe-line-item/uuid  new-uuid]
                        [:db/add -1 :recipe-line-item/parent parent-item-id]
                        [:db/add -1 :recipe-line-item/child child-item-id]
                        [:db/add -1 :recipe-line-item/quantity 0]
                        [:db/add parent-item-id :item/children -1]
                        [:db/add child-item-id :item/parents -1]])))

(defn tree->db!
  [data]

  (neo4j-transformer/tree->db! @dsdb data)
  (publish! {:topic :remote-db-loaded}))



;; => #datascript.db.TxReport{:db-before #datascript/DB {:schema {:uom/code {:db/unique :db.unique/identity}, :item/parents {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many, :db/isComponent true}, :item/categories {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many}, :item/uom {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/one}, :recipe-line-item/uuid {:db/unique :db.unique/identity}, :cost/uuid {:db/unique :db.unique/identity}, :recipe-line-item/child {:db/cardinality :db.cardinality/one, :db/valueType :db.type/ref}, :uom/uuid {:db/unique :db.unique/identity}, :item/uuid {:db/unique :db.unique/identity}, :conversion/uuid {:db/unique :db.unique/identity}, :conversion/to {:db/valueType :db.type/ref}, :uom/system {:db/valueType :db.type/ref}, :item/children {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many, :db/isComponent true}, :item/tags {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many}, :conversion/item {:db/valueType :db.type/ref}, :recipe-line-item/parent {:db/cardinality :db.cardinality/one, :db/valueType :db.type/ref}, :conversion/from {:db/valueType :db.type/ref}, :cost/item {:db/valueType :db.type/ref}, :recipe-line-item/uom {:db/cardinality :db.cardinality/one, :db/valueType :db.type/ref}, :cost/uom {:db/valueType :db.type/ref}, :uom/name {:db/unique :db.unique/identity}, :item/name {:db/unique :db.unique/identity}, :schema/version {:version "0.0.1", :doc "Say something"}, :uom/type {:db/valueType :db.type/ref}}, :datoms [[1 :db/ident :units.system/IMPERIAL 536870913] [2 :db/ident :units.system/METRIC 536870913] [3 :db/ident :units.type/WEIGHT 536870913] [4 :db/ident :units.type/VOLUME 536870913] [5 :db/ident :units.type/CUSTOM 536870913] [6 :uom/code "lb" 536870914] [6 :uom/factor 453.5920865 536870914] [6 :uom/name "Pound" 536870914] [6 :uom/system 1 536870914] [6 :uom/type 3 536870914] [6 :uom/uuid "ykCtRKUyY2frBVI6kXSOg" 536870914] [7 :uom/code "gr" 536870914] [7 :uom/factor 1 536870914] [7 :uom/name "gr" 536870914] [7 :uom/system 2 536870914] [7 :uom/type 3 536870914] [7 :uom/uuid "qRUeaM70Fbh7pwmmbwJfP" 536870914] [8 :uom/code "oz" 536870914] [8 :uom/factor 28.34949978 536870914] [8 :uom/name "Ounce" 536870914] [8 :uom/system 1 536870914] [8 :uom/type 3 536870914] [8 :uom/uuid "wm9PXk9S5vZJdCmNe-dcX" 536870914] [9 :uom/code "kg" 536870914] [9 :uom/factor 1000 536870914] [9 :uom/name "Kilogram" 536870914] [9 :uom/system 2 536870914] [9 :uom/type 3 536870914] [9 :uom/uuid "LSwAmF4f0W_ycLGB3TGIj" 536870914] [10 :uom/code "gallon" 536870914] [10 :uom/factor 768.0019661 536870914] [10 :uom/name "Gallon" 536870914] [10 :uom/system 1 536870914] [10 :uom/type 4 536870914] [10 :uom/uuid "A4eJLDI4V1FvwCq-9zUxc" 536870914] [11 :uom/code "floz" 536870914] [11 :uom/factor 5.999988 536870914] [11 :uom/name "Fluid Ounce" 536870914] [11 :uom/system 1 536870914] [11 :uom/type 4 536870914] [11 :uom/uuid "BDbgSumlT5uUh8h5IP_0p" 536870914] [12 :uom/code "tbs" 536870914] [12 :uom/factor 3.000003 536870914] [12 :uom/name "Tablespoon" 536870914] [12 :uom/system 1 536870914] [12 :uom/type 4 536870914] [12 :uom/uuid "e8Wz94QBScub-EqkBZuSn" 536870914] [13 :uom/code "cup" 536870914] [13 :uom/factor 48.0000768 536870914] [13 :uom/name "Cup" 536870914] [13 :uom/system 1 536870914] [13 :uom/type 4 536870914] [13 :uom/uuid "tZxM_e4mtMV8IoRqzMJdD" 536870914] [14 :uom/code "tsp" 536870914] [14 :uom/factor 1 536870914] [14 :uom/name "Teaspoon" 536870914] [14 :uom/system 1 536870914] [14 :uom/type 4 536870914] [14 :uom/uuid "cW8sWsT4gI9_xkUspRUCa" 536870914] [15 :uom/code "ea" 536870914] [15 :uom/name "Each" 536870914] [15 :uom/type 5 536870914] [15 :uom/uuid "k69XN7ozPZdghyw4OmieE" 536870914] [16 :item/uuid "asdfasdf" 536870915]]}, :db-after #datascript/DB {:schema {:uom/code {:db/unique :db.unique/identity}, :item/parents {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many, :db/isComponent true}, :item/categories {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many}, :item/uom {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/one}, :recipe-line-item/uuid {:db/unique :db.unique/identity}, :cost/uuid {:db/unique :db.unique/identity}, :recipe-line-item/child {:db/cardinality :db.cardinality/one, :db/valueType :db.type/ref}, :uom/uuid {:db/unique :db.unique/identity}, :item/uuid {:db/unique :db.unique/identity}, :conversion/uuid {:db/unique :db.unique/identity}, :conversion/to {:db/valueType :db.type/ref}, :uom/system {:db/valueType :db.type/ref}, :item/children {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many, :db/isComponent true}, :item/tags {:db/valueType :db.type/ref, :db/cardinality :db.cardinality/many}, :conversion/item {:db/valueType :db.type/ref}, :recipe-line-item/parent {:db/cardinality :db.cardinality/one, :db/valueType :db.type/ref}, :conversion/from {:db/valueType :db.type/ref}, :cost/item {:db/valueType :db.type/ref}, :recipe-line-item/uom {:db/cardinality :db.cardinality/one, :db/valueType :db.type/ref}, :cost/uom {:db/valueType :db.type/ref}, :uom/name {:db/unique :db.unique/identity}, :item/name {:db/unique :db.unique/identity}, :schema/version {:version "0.0.1", :doc "Say something"}, :uom/type {:db/valueType :db.type/ref}}, :datoms [[1 :db/ident :units.system/IMPERIAL 536870913] [2 :db/ident :units.system/METRIC 536870913] [3 :db/ident :units.type/WEIGHT 536870913] [4 :db/ident :units.type/VOLUME 536870913] [5 :db/ident :units.type/CUSTOM 536870913] [6 :uom/code "lb" 536870914] [6 :uom/factor 453.5920865 536870914] [6 :uom/name "Pound" 536870914] [6 :uom/system 1 536870914] [6 :uom/type 3 536870914] [6 :uom/uuid "ykCtRKUyY2frBVI6kXSOg" 536870914] [7 :uom/code "gr" 536870914] [7 :uom/factor 1 536870914] [7 :uom/name "gr" 536870914] [7 :uom/system 2 536870914] [7 :uom/type 3 536870914] [7 :uom/uuid "qRUeaM70Fbh7pwmmbwJfP" 536870914] [8 :uom/code "oz" 536870914] [8 :uom/factor 28.34949978 536870914] [8 :uom/name "Ounce" 536870914] [8 :uom/system 1 536870914] [8 :uom/type 3 536870914] [8 :uom/uuid "wm9PXk9S5vZJdCmNe-dcX" 536870914] [9 :uom/code "kg" 536870914] [9 :uom/factor 1000 536870914] [9 :uom/name "Kilogram" 536870914] [9 :uom/system 2 536870914] [9 :uom/type 3 536870914] [9 :uom/uuid "LSwAmF4f0W_ycLGB3TGIj" 536870914] [10 :uom/code "gallon" 536870914] [10 :uom/factor 768.0019661 536870914] [10 :uom/name "Gallon" 536870914] [10 :uom/system 1 536870914] [10 :uom/type 4 536870914] [10 :uom/uuid "A4eJLDI4V1FvwCq-9zUxc" 536870914] [11 :uom/code "floz" 536870914] [11 :uom/factor 5.999988 536870914] [11 :uom/name "Fluid Ounce" 536870914] [11 :uom/system 1 536870914] [11 :uom/type 4 536870914] [11 :uom/uuid "BDbgSumlT5uUh8h5IP_0p" 536870914] [12 :uom/code "tbs" 536870914] [12 :uom/factor 3.000003 536870914] [12 :uom/name "Tablespoon" 536870914] [12 :uom/system 1 536870914] [12 :uom/type 4 536870914] [12 :uom/uuid "e8Wz94QBScub-EqkBZuSn" 536870914] [13 :uom/code "cup" 536870914] [13 :uom/factor 48.0000768 536870914] [13 :uom/name "Cup" 536870914] [13 :uom/system 1 536870914] [13 :uom/type 4 536870914] [13 :uom/uuid "tZxM_e4mtMV8IoRqzMJdD" 536870914] [14 :uom/code "tsp" 536870914] [14 :uom/factor 1 536870914] [14 :uom/name "Teaspoon" 536870914] [14 :uom/system 1 536870914] [14 :uom/type 4 536870914] [14 :uom/uuid "cW8sWsT4gI9_xkUspRUCa" 536870914] [15 :uom/code "ea" 536870914] [15 :uom/name "Each" 536870914] [15 :uom/type 5 536870914] [15 :uom/uuid "k69XN7ozPZdghyw4OmieE" 536870914] [16 :item/uuid "asdfasdf" 536870915]]}, :tx-data [], :tempids {:db/current-tx 536870916}, :tx-meta nil}


;; Fiddle
;; #_(tap> (item-by-name "Chorizo Family Pack"))
;; #_(tap> (d/datoms @@dsdb :eavt))
;; #_(item-by-name "Chorizo Family Pack")
  ;; => {:id nil, :uom nil, :normalized-cost ##Inf, :name nil}

;; Reset


;; Setup the DB


;; (d/listen! dsdb :default (fn [] (publish! {:topic :db-updated})))


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
                        (update-recipe-line-item-quantity! 27 @count)) 1000)))

;; (update-recipe-line-item-quantity! 27 20)
