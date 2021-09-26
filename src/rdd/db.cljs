(ns rdd.db
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [clojure.edn]
            [nano-id.core :refer [nano-id]]
            [datascript.core :as d]
            [postmortem.core :as pm]
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
           (let [conn (atom (d/empty-db (schema))
                            :meta {:listeners (atom {})})]
             (reset-db! conn)
             (setup-listeners conn)
             conn)))

(defn seed-db
  "Seed the db with data"
  [db]

  (d/transact! db (unit-systems-data))
  (d/transact! db (uom-data))
  #_(d/transact! db (seed-base-data)))

(defn reset-db!
  [conn]
  (d/reset-conn! conn (d/empty-db (schema)))
  (seed-db conn))

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


(defn create-recipes!
  [conn data]

  (let [item-uuid (-> data :item/uuid)
        #_#_parent-uuid (or parent-uuid
                            item-uuid)
        is-item? item-uuid
        children (-> data :composite/contains)
        has-children? (seq children)]


    (if (and is-item? has-children?)
      (let [rli-ids (for [rli children] (create-recipes! conn rli))]
        (d/transact! conn [{:db/id [:item/uuid item-uuid]
                            :item/children rli-ids}]))

      (let [child (first children)
            child-uuid (-> child :item/uuid)
            payload {:recipe-line-item/uuid (-> data :recipe-line-item/uuid)
                     :recipe-line-item/quantity (-> data :measurement/quantity)
                     :recipe-line-item/uom [:uom/code (-> data :measurement/uom :uom/code)]
                     :recipe-line-item/child [:item/uuid child-uuid]}]
        (when child
          (do (doall (create-recipes! conn child))
              (-> (d/transact! conn [payload])
                  :tx-data
                  (first))))))))


(defn create-items!
  [conn data]

  (let [uuid (-> data :item/uuid)
        is-item? uuid

        payload {:item/uuid (-> data :item/uuid)
                 :item/yield (-> data :measurement/yield)
                 :item/uom [:uom/code (-> data :measurement/uom :uom/code)]
                 :item/name (-> data :item/name)}

        children (-> data :composite/contains)
        has-children? (seq children)]

    (cond-> {:id "create-items"}
      is-item? (assoc :item-id (-> (d/transact! conn [payload]) :tx-data))
      has-children? (assoc :children (doseq [child children]
                                       (create-items! conn child))))))

(defonce sample (atom nil))

(defn tree->db!
  [data]
  ;; ()
  ;; (tap> data)

  (reset! sample data)
  (doall (create-items! @dsdb (:item data)))
  (doall (create-recipes! @dsdb (:item data)))
  ;; (neo4j-transformer/tree->db! @dsdb data)


  (publish! {:topic :remote-db-loaded}))




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




#_(reset-db! @dsdb)
#_(create-items! @dsdb (:item @sample))
  ;; => {:id "create-items", :item-id [#datascript/Datom [16 :item/uuid "gEDXVREqPygQ4vJ0axy3D" 536870915 true] #datascript/Datom [16 :item/yield 1 536870915 true] #datascript/Datom [16 :item/uom 15 536870915 true] #datascript/Datom [16 :item/name "Chorizo Family Pack" 536870915 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [17 :item/uuid "5HVmnDzED6xPgyzoz4Vxg" 536870916 true] #datascript/Datom [17 :item/yield 1 536870916 true] #datascript/Datom [17 :item/uom 15 536870916 true] #datascript/Datom [17 :item/name "Chorizo Wrap" 536870916 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [18 :item/uuid "Dx1Sxaq5f7LIwPlvNquJO" 536870917 true] #datascript/Datom [18 :item/yield 40 536870917 true] #datascript/Datom [18 :item/uom 7 536870917 true] #datascript/Datom [18 :item/name "Master Sauce" 536870917 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [19 :item/uuid "-ffuceHJ5VWgWGReKh0J8" 536870918 true] #datascript/Datom [19 :item/yield 130 536870918 true] #datascript/Datom [19 :item/uom 7 536870918 true] #datascript/Datom [19 :item/name "Special Sauce" 536870918 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [20 :item/uuid "ZREz79S73VyWuvSwNYhHz" 536870919 true] #datascript/Datom [20 :item/yield 1 536870919 true] #datascript/Datom [20 :item/uom 7 536870919 true] #datascript/Datom [20 :item/name "Salt" 536870919 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [21 :item/uuid "I1wt2eLoKoq0BlgvtAcNr" 536870920 true] #datascript/Datom [21 :item/yield 1 536870920 true] #datascript/Datom [21 :item/uom 7 536870920 true] #datascript/Datom [21 :item/name "Garlic Powder" 536870920 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [22 :item/uuid "mvaID1cZq7PRsqsmijHka" 536870921 true] #datascript/Datom [22 :item/yield 1 536870921 true] #datascript/Datom [22 :item/uom 7 536870921 true] #datascript/Datom [22 :item/name "Onion Powder" 536870921 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [23 :item/uuid "Sw5U2gCjMqDcqG9ZO4Ap5" 536870922 true] #datascript/Datom [23 :item/yield 1 536870922 true] #datascript/Datom [23 :item/uom 7 536870922 true] #datascript/Datom [23 :item/name "Asafoetida" 536870922 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [24 :item/uuid "bpNVfZXJ5E2eCKQpn4vVN" 536870923 true] #datascript/Datom [24 :item/yield 1 536870923 true] #datascript/Datom [24 :item/uom 7 536870923 true] #datascript/Datom [24 :item/name "Pearl Dust" 536870923 true]]})})})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [25 :item/uuid "LPoAuUo0_Q6qvwEahYVk7" 536870924 true] #datascript/Datom [25 :item/yield 30 536870924 true] #datascript/Datom [25 :item/uom 7 536870924 true] #datascript/Datom [25 :item/name "Spicy Sauce" 536870924 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [26 :item/uuid "5vF0-WNLzZ_wuGzRQwQtW" 536870925 true] #datascript/Datom [26 :item/yield 1 536870925 true] #datascript/Datom [26 :item/uom 7 536870925 true] #datascript/Datom [26 :item/name "Pepper" 536870925 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [27 :item/uuid "FX1_MLSsiqzyTpGhnrTg1" 536870926 true] #datascript/Datom [27 :item/yield 1 536870926 true] #datascript/Datom [27 :item/uom 7 536870926 true] #datascript/Datom [27 :item/name "Turmeric" 536870926 true]]})} {:id "create-items", :children ({:id "create-items", :item-id []})})})})})} {:id "create-items", :children ({:id "create-items", :item-id []})} {:id "create-items", :children ({:id "create-items", :item-id []})})})})}

  ;; => {:id "create-items", :item-id [#datascript/Datom [16 :item/uuid "gEDXVREqPygQ4vJ0axy3D" 536870915 true] #datascript/Datom [16 :item/yield 1 536870915 true] #datascript/Datom [16 :item/uom 15 536870915 true] #datascript/Datom [16 :item/name "Chorizo Family Pack" 536870915 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [17 :item/uuid "5HVmnDzED6xPgyzoz4Vxg" 536870916 true] #datascript/Datom [17 :item/yield 1 536870916 true] #datascript/Datom [17 :item/uom 15 536870916 true] #datascript/Datom [17 :item/name "Chorizo Wrap" 536870916 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [18 :item/uuid "Dx1Sxaq5f7LIwPlvNquJO" 536870917 true] #datascript/Datom [18 :item/yield 40 536870917 true] #datascript/Datom [18 :item/uom 7 536870917 true] #datascript/Datom [18 :item/name "Master Sauce" 536870917 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [19 :item/uuid "-ffuceHJ5VWgWGReKh0J8" 536870918 true] #datascript/Datom [19 :item/yield 130 536870918 true] #datascript/Datom [19 :item/uom 7 536870918 true] #datascript/Datom [19 :item/name "Special Sauce" 536870918 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [20 :item/uuid "ZREz79S73VyWuvSwNYhHz" 536870919 true] #datascript/Datom [20 :item/yield 1 536870919 true] #datascript/Datom [20 :item/uom 7 536870919 true] #datascript/Datom [20 :item/name "Salt" 536870919 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [21 :item/uuid "I1wt2eLoKoq0BlgvtAcNr" 536870920 true] #datascript/Datom [21 :item/yield 1 536870920 true] #datascript/Datom [21 :item/uom 7 536870920 true] #datascript/Datom [21 :item/name "Garlic Powder" 536870920 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [22 :item/uuid "mvaID1cZq7PRsqsmijHka" 536870921 true] #datascript/Datom [22 :item/yield 1 536870921 true] #datascript/Datom [22 :item/uom 7 536870921 true] #datascript/Datom [22 :item/name "Onion Powder" 536870921 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [23 :item/uuid "Sw5U2gCjMqDcqG9ZO4Ap5" 536870922 true] #datascript/Datom [23 :item/yield 1 536870922 true] #datascript/Datom [23 :item/uom 7 536870922 true] #datascript/Datom [23 :item/name "Asafoetida" 536870922 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [24 :item/uuid "bpNVfZXJ5E2eCKQpn4vVN" 536870923 true] #datascript/Datom [24 :item/yield 1 536870923 true] #datascript/Datom [24 :item/uom 7 536870923 true] #datascript/Datom [24 :item/name "Pearl Dust" 536870923 true]]})})})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [25 :item/uuid "LPoAuUo0_Q6qvwEahYVk7" 536870924 true] #datascript/Datom [25 :item/yield 30 536870924 true] #datascript/Datom [25 :item/uom 7 536870924 true] #datascript/Datom [25 :item/name "Spicy Sauce" 536870924 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [26 :item/uuid "5vF0-WNLzZ_wuGzRQwQtW" 536870925 true] #datascript/Datom [26 :item/yield 1 536870925 true] #datascript/Datom [26 :item/uom 7 536870925 true] #datascript/Datom [26 :item/name "Pepper" 536870925 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [27 :item/uuid "FX1_MLSsiqzyTpGhnrTg1" 536870926 true] #datascript/Datom [27 :item/yield 1 536870926 true] #datascript/Datom [27 :item/uom 7 536870926 true] #datascript/Datom [27 :item/name "Turmeric" 536870926 true]]})} {:id "create-items", :children ({:id "create-items", :item-id []})})})})})} {:id "create-items", :children ({:id "create-items", :item-id []})} {:id "create-items", :children ({:id "create-items", :item-id []})})})})}

  ;; => {:id "create-items", :item-id [#datascript/Datom [16 :item/uuid "gEDXVREqPygQ4vJ0axy3D" 536870915 true] #datascript/Datom [16 :item/yield 1 536870915 true] #datascript/Datom [16 :item/uom 15 536870915 true] #datascript/Datom [16 :item/name "Chorizo Family Pack" 536870915 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [17 :item/uuid "5HVmnDzED6xPgyzoz4Vxg" 536870916 true] #datascript/Datom [17 :item/yield 1 536870916 true] #datascript/Datom [17 :item/uom 15 536870916 true] #datascript/Datom [17 :item/name "Chorizo Wrap" 536870916 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [18 :item/uuid "Dx1Sxaq5f7LIwPlvNquJO" 536870917 true] #datascript/Datom [18 :item/yield 40 536870917 true] #datascript/Datom [18 :item/uom 7 536870917 true] #datascript/Datom [18 :item/name "Master Sauce" 536870917 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [19 :item/uuid "-ffuceHJ5VWgWGReKh0J8" 536870918 true] #datascript/Datom [19 :item/yield 130 536870918 true] #datascript/Datom [19 :item/uom 7 536870918 true] #datascript/Datom [19 :item/name "Special Sauce" 536870918 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [20 :item/uuid "ZREz79S73VyWuvSwNYhHz" 536870919 true] #datascript/Datom [20 :item/yield 1 536870919 true] #datascript/Datom [20 :item/uom 7 536870919 true] #datascript/Datom [20 :item/name "Salt" 536870919 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [21 :item/uuid "I1wt2eLoKoq0BlgvtAcNr" 536870920 true] #datascript/Datom [21 :item/yield 1 536870920 true] #datascript/Datom [21 :item/uom 7 536870920 true] #datascript/Datom [21 :item/name "Garlic Powder" 536870920 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [22 :item/uuid "mvaID1cZq7PRsqsmijHka" 536870921 true] #datascript/Datom [22 :item/yield 1 536870921 true] #datascript/Datom [22 :item/uom 7 536870921 true] #datascript/Datom [22 :item/name "Onion Powder" 536870921 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [23 :item/uuid "Sw5U2gCjMqDcqG9ZO4Ap5" 536870922 true] #datascript/Datom [23 :item/yield 1 536870922 true] #datascript/Datom [23 :item/uom 7 536870922 true] #datascript/Datom [23 :item/name "Asafoetida" 536870922 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [24 :item/uuid "bpNVfZXJ5E2eCKQpn4vVN" 536870923 true] #datascript/Datom [24 :item/yield 1 536870923 true] #datascript/Datom [24 :item/uom 7 536870923 true] #datascript/Datom [24 :item/name "Pearl Dust" 536870923 true]]})})})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [25 :item/uuid "LPoAuUo0_Q6qvwEahYVk7" 536870924 true] #datascript/Datom [25 :item/yield 30 536870924 true] #datascript/Datom [25 :item/uom 7 536870924 true] #datascript/Datom [25 :item/name "Spicy Sauce" 536870924 true]], :children ({:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [26 :item/uuid "5vF0-WNLzZ_wuGzRQwQtW" 536870925 true] #datascript/Datom [26 :item/yield 1 536870925 true] #datascript/Datom [26 :item/uom 7 536870925 true] #datascript/Datom [26 :item/name "Pepper" 536870925 true]]})} {:id "create-items", :children ({:id "create-items", :item-id [#datascript/Datom [27 :item/uuid "FX1_MLSsiqzyTpGhnrTg1" 536870926 true] #datascript/Datom [27 :item/yield 1 536870926 true] #datascript/Datom [27 :item/uom 7 536870926 true] #datascript/Datom [27 :item/name "Turmeric" 536870926 true]]})} {:id "create-items", :children ({:id "create-items", :item-id []})})})})})} {:id "create-items", :children ({:id "create-items", :item-id []})} {:id "create-items", :children ({:id "create-items", :item-id []})})})})}

#_(create-recipes! @dsdb (:item @sample) (first (:item @sample)))
  ;; => :repl/exception!


#_(tap> (:item @sample))
#_(pm/reset!)
#_(pm/log-for :is-rli-branch)
#_(pm/log-for :is-item-branch)
  ;; => nil

;; => nil

;; => nil

;; => nil

;; => ["gEDXVREqPygQ4vJ0axy3D" nil]

;; => nil



(d/q '[:find ?name ?id ?uuid
       :where [?id :item/name ?name]
       [?id :item/uuid ?uuid]]
     (d/db @dsdb))
;; => #{["Chorizo Wrap" 17 "5HVmnDzED6xPgyzoz4Vxg"]
;;      ["Onion Powder" 22 "mvaID1cZq7PRsqsmijHka"]
;;      ["Pepper" 26 "5vF0-WNLzZ_wuGzRQwQtW"]
;;      ["Garlic Powder" 21 "I1wt2eLoKoq0BlgvtAcNr"]
;;      ["Master Sauce" 18 "Dx1Sxaq5f7LIwPlvNquJO"]
;;      ["Turmeric" 27 "FX1_MLSsiqzyTpGhnrTg1"]
;;      ["Chorizo Family Pack" 16 "gEDXVREqPygQ4vJ0axy3D"]
;;      ["Special Sauce" 19 "-ffuceHJ5VWgWGReKh0J8"]
;;      ["Spicy Sauce" 25 "LPoAuUo0_Q6qvwEahYVk7"]
;;      ["Asafoetida" 23 "Sw5U2gCjMqDcqG9ZO4Ap5"]
;;      ["Salt" 20 "ZREz79S73VyWuvSwNYhHz"]
;;      ["Pearl Dust" 24 "bpNVfZXJ5E2eCKQpn4vVN"]}

;; => #{["Chorizo Wrap" 17 "5HVmnDzED6xPgyzoz4Vxg"]
;;      ["Onion Powder" 22 "mvaID1cZq7PRsqsmijHka"]
;;      ["Pepper" 26 "5vF0-WNLzZ_wuGzRQwQtW"]
;;      ["Garlic Powder" 21 "I1wt2eLoKoq0BlgvtAcNr"]
;;      ["Master Sauce" 18 "Dx1Sxaq5f7LIwPlvNquJO"]
;;      ["Turmeric" 27 "FX1_MLSsiqzyTpGhnrTg1"]
;;      ["Chorizo Family Pack" 16 "gEDXVREqPygQ4vJ0axy3D"]
;;      ["Special Sauce" 19 "-ffuceHJ5VWgWGReKh0J8"]
;;      ["Spicy Sauce" 25 "LPoAuUo0_Q6qvwEahYVk7"]
;;      ["Asafoetida" 23 "Sw5U2gCjMqDcqG9ZO4Ap5"]
;;      ["Salt" 20 "ZREz79S73VyWuvSwNYhHz"]
;;      ["Pearl Dust" 24 "bpNVfZXJ5E2eCKQpn4vVN"]}

;; => #{["Garlic Powder" 21]
;;      ["Spicy Sauce" 25]
;;      ["Pearl Dust" 24]
;;      ["Master Sauce" 18]
;;      ["Chorizo Wrap" 17]
;;      ["Turmeric" 27]
;;      ["Salt" 20]
;;      ["Asafoetida" 23]
;;      ["Pepper" 26]
;;      ["Onion Powder" 22]
;;      ["Special Sauce" 19]
;;      ["Chorizo Family Pack" 16]}

;; => #{["Chorizo Family Pack"]
;;      ["Asafoetida"]
;;      ["Garlic Powder"]
;;      ["Pepper"]
;;      ["Special Sauce"]
;;      ["Turmeric"]
;;      ["Onion Powder"]
;;      ["Pearl Dust"]
;;      ["Salt"]
;;      ["Chorizo Wrap"]
;;      ["Spicy Sauce"]
;;      ["Master Sauce"]}

;; => #{["Chorizo Family Pack"]
;;      ["Asafoetida"]
;;      ["Garlic Powder"]
;;      ["Pepper"]
;;      ["Special Sauce"]
;;      ["Turmeric"]
;;      ["Onion Powder"]
;;      ["Pearl Dust"]
;;      ["Salt"]
;;      ["Chorizo Wrap"]
;;      ["Spicy Sauce"]
;;      ["Master Sauce"]}

;; => #{["Chorizo Family Pack"]}

;; => #{["Chorizo Family Pack"]}

;; => #{["Chorizo Family Pack"]}

;; => #{["Chorizo Family Pack" 16]}

;; => #{["Chorizo Family Pack" 16]}


#_(publish! {:topic :remote-db-loaded})
;; => #{["Chorizo Family Pack"]
;;      ["Asafoetida"]
;;      ["Garlic Powder"]
;;      ["Pepper"]
;;      ["Special Sauce"]
;;      ["Turmeric"]
;;      ["Onion Powder"]
;;      ["Pearl Dust"]
;;      ["Salt"]
;;      ["Chorizo Wrap"]
;;      ["Spicy Sauce"]
;;      ["Master Sauce"]}

;; => #{["Chorizo Family Pack"]
;;      ["Asafoetida"]
;;      ["Garlic Powder"]
;;      ["Pepper"]
;;      ["Special Sauce"]
;;      ["Turmeric"]
;;      ["Onion Powder"]
;;      ["Pearl Dust"]
;;      ["Salt"]
;;      ["Chorizo Wrap"]
;;      ["Spicy Sauce"]
;;      ["Master Sauce"]}

;; => #{["Chorizo Family Pack"]
;;      ["Asafoetida"]
;;      ["Garlic Powder"]
;;      ["Pepper"]
;;      ["Special Sauce"]
;;      ["Turmeric"]
;;      ["Onion Powder"]
;;      ["Pearl Dust"]
;;      ["Salt"]
;;      ["Chorizo Wrap"]
;;      ["Spicy Sauce"]
;;      ["Master Sauce"]}

;; => #{["Chorizo Family Pack"]
;;      ["Asafoetida"]
;;      ["Garlic Powder"]
;;      ["Pepper"]
;;      ["Special Sauce"]
;;      ["Turmeric"]
;;      ["Onion Powder"]
;;      ["Pearl Dust"]
;;      ["Salt"]
;;      ["Chorizo Wrap"]
;;      ["Spicy Sauce"]
;;      ["Master Sauce"]}

;; => #{["Chorizo Family Pack"]}
