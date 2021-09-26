(ns rdd.db
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [clojure.edn]
            [datascript.core :as d]
            [nano-id.core :refer [nano-id]]
            [rdd.converters.item :refer [item->tree]]
            [rdd.services.event-bus :refer [publish!]]))

(defn item-schema
  []
  {:item/name {:db/unique :db.unique/identity}
   :item/uuid {:db/unique :db.unique/identity}


   #_#_:item/categories {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
   #_#_:item/tags {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

#_(defn category-schema
    []
    {:category/name {:db/unique :db.unique/identity}
     :category/parents {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
     :category/children {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}})

(defn recipe-line-item-schema
  []
  {:recipe-line-item/uuid  {:db/unique :db.unique/identity}})

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

(defn measurement-schema
  []
  {:measurement/uom {:db/valueType :db.type/ref}})

(defn conversions-schema
  []
  {:conversion/uuid  {:db/unique :db.unique/identity}
   :conversion/from {:db/valueType :db.type/ref}
   :conversion/to {:db/valueType :db.type/ref}})

(defn cost-schema
  []
  {:cost/uuid  {:db/unique :db.unique/identity}})

(defn composite-schema
  []
  {:composite/contains  {:db/valueType :db.type/ref
                         :db/cardinality :db.cardinality/many}})

(defn reference-schema
  []
  {:for/item  {:db/valueType :db.type/ref
               :db/cardinality :db.cardinality/one}})



(defn schema
  []
  (merge (item-schema)
         #_(category-schema)
         (recipe-line-item-schema)
         #_(tag-schema)
         (uom-schema)
         (conversions-schema)
         (cost-schema)
         (measurement-schema)
         (composite-schema)
         (reference-schema)


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

   {:db/ident :units.system/CUSTOM}

   {:db/ident :units.type/WEIGHT}
   {:db/ident :units.type/VOLUME}
   {:db/ident :units.type/CUSTOM}])

(defn uom-data
  "Units of measure data prepped as datoms for insert"
  []
  [{:uom/uuid (nano-id) :uom/name "Pound" :uom/code "lb" :uom/system :units.system/IMPERIAL :uom/type :units.type/WEIGHT :measurement/quantity 453.5920865}
   {:uom/uuid (nano-id) :uom/name "gr" :uom/code "gr" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :measurement/quantity 1}
   {:uom/uuid (nano-id) :uom/name "Ounce" :uom/code "oz" :uom/system :units.system/IMPERIAL :uom/type :units.type/WEIGHT :measurement/quantity 28.34949978}
   {:uom/uuid (nano-id) :uom/name "Kilogram" :uom/code "kg" :uom/system :units.system/METRIC :uom/type :units.type/WEIGHT :measurement/quantity 1000}

   {:uom/uuid (nano-id) :uom/name "Gallon" :uom/code "gallon" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 768.0019661}
   {:uom/uuid (nano-id) :uom/name "Fluid Ounce" :uom/code "floz" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 5.999988}
   {:uom/uuid (nano-id) :uom/name "Tablespoon" :uom/code "tbs" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 3.000003}
   {:uom/uuid (nano-id) :uom/name "Cup" :uom/code "cup" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 48.0000768}
   {:uom/uuid (nano-id) :uom/name "Teaspoon" :uom/code "tsp" :uom/system :units.system/IMPERIAL :uom/type :units.type/VOLUME :measurement/quantity 1}

   {:uom/uuid (nano-id) :uom/name "Each" :uom/code "ea" :uom/system :units.system/CUSTOM :uom/type :units.type/CUSTOM  :measurement/quantity 1}])

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
  (d/transact! db (uom-data)))

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
      (let [tx (d/transact! @dsdb [[:db/add recipe-line-item-id :measurement/quantity prepped-quantity]])
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
      (d/transact! @dsdb [[:db/add recipe-line-item-id :measurement/uom [:uom/code uom-code]]]))))

(defn create-recipe-line-item!
  [parent-item-id child-item-id]
  (js/console.log parent-item-id child-item-id " parent-item-id child-item-id ")
  (let [new-uuid (nano-id)]
    (d/transact! @dsdb [[:db/add -1 :recipe-line-item/uuid  new-uuid]

                        [:db/add -1 :composite/contains child-item-id]
                        [:db/add -1 :measurement/quantity 0]
                        [:db/add parent-item-id :composite/contains -1]])))

(defn parse-tree-to->db!
  [conn data]

  (let [item-uuid (-> data :item/uuid)
        is-item? item-uuid
        children (-> data :composite/contains)]

    (if is-item?
      ;; Item
      (let [name (-> data :item/name)
            yield (-> data :measurement/yield)
            uom-code (-> data :measurement/uom :uom/code)
            recipe-line-items (mapv #(parse-tree-to->db! conn %) children)
            recipe-line-item-uuids (map :recipe-line-item/uuid recipe-line-items)
            item-payload [[:db/add -1 :item/uuid item-uuid]
                          [:db/add -1 :item/name name]
                          [:db/add -1 :measurement/yield yield]
                          [:db/add -1 :measurement/uom [:uom/code uom-code]]]
            item-rlis-payload (map (fn [uuid]
                                     [:db/add -1 :composite/contains [:recipe-line-item/uuid uuid]]) recipe-line-item-uuids)
            payload (into item-rlis-payload item-payload)]

        (d/transact! conn payload)
        data)

      ;; Recipe line item
      (let [rli-uuid (-> data :recipe-line-item/uuid)
            item-data (first children)
            item (parse-tree-to->db! conn item-data)
            item-uuid (:item/uuid item)
            quantity (-> data :measurement/quantity)
            uom-code (-> data :measurement/uom :uom/code)
            payload [{:recipe-line-item/uuid rli-uuid
                      :measurement/quantity quantity
                      :measurement/uom [:uom/code uom-code]
                      :composite/contains [:item/uuid item-uuid]}]]

        (d/transact! conn payload)
        data))))

(into [[:b 20]] [[:a 10]])

(defonce sample (atom nil))

(defn tree->db!
  [data]
  (parse-tree-to->db! @dsdb (:item data))
  (publish! {:topic :remote-db-loaded}))


(comment
  (do
    (reset-db! @dsdb)
    (tap> @sample)
    (tap> (d/datoms (d/db @dsdb) :avet))
    (parse-tree-to->db! @dsdb (:item @sample))
    (tap> (d/datoms (d/db @dsdb) :eavt))

    ;; 
    ;; 
    )




  ;; 
  )




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
;; => #{}

;; => #{}

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


;; #_{:item
;;    {:db/id 92358976733291
;;     :item/uuid "BeQ74KXwGPO8dYPO5iFmB"
;;     :item/name "Chorizo Family Pack"
;;     :measurement/yield 1
;;     :measurement/uom {:uom/code "ea"}
;;     :composite/contains
;;     [{:db/id #object[Long 4611681620380876921]
;;       :recipe-line-item/uuid "EWZKF9cOfI_Qfwh25-nNw"
;;       :measurement/quantity 12
;;       :measurement/uom {:uom/code "ea"}
;;       :composite/contains
;;       [{:db/id 92358976733290
;;         :item/uuid "GVSH4FFmIgBro2z4cIYA3"
;;         :item/name "Chorizo Wrap"
;;         :measurement/yield 1
;;         :measurement/uom {:uom/code "ea"}
;;         :composite/contains
;;         [{:db/id #object[Long 4611681620380876918]
;;           :recipe-line-item/uuid "8ZSoMx_DTL2kJ8xnithsL"
;;           :measurement/quantity 50
;;           :measurement/uom {:uom/code "gr"}
;;           :composite/contains
;;           [{:db/id 92358976733289
;;             :item/uuid "Lzi9H4prv1J1KC4i5UOJD"
;;             :item/name "Master Sauce"
;;             :measurement/yield 40
;;             :measurement/uom {:uom/code "gr"}
;;             :composite/contains
;;             [{:db/id #object[Long 4611681620380876916]
;;               :recipe-line-item/uuid "CjEzZPk8yMmdm7jbXpC-V"
;;               :measurement/quantity 20
;;               :measurement/uom {:uom/code "gr"}
;;               :composite/contains
;;               [{:db/id 92358976733287
;;                 :item/uuid "WnqnJMLvBgnWpbAb3ksO1"
;;                 :item/name "Special Sauce"
;;                 :measurement/yield 130
;;                 :measurement/uom {:uom/code "gr"}
;;                 :composite/contains
;;                 [{:db/id #object[Long 4611681620380876908]
;;                   :recipe-line-item/uuid "SCgeu4DnexeZBehCIOPhm"
;;                   :measurement/quantity 10
;;                   :measurement/uom {:uom/code "gr"}
;;                   :composite/contains
;;                   [{:db/id 92358976733279
;;                     :item/uuid "DnnV7uU-vtg0sUP7IEnjh"
;;                     :item/name "Salt"
;;                     :measurement/yield 1
;;                     :measurement/uom {:uom/code "gr"}}]}
;;                  {:db/id #object[Long 4611681620380876909]
;;                   :recipe-line-item/uuid "K91z8o-pADxoG2_pey-TK"
;;                   :measurement/quantity 20
;;                   :measurement/uom {:uom/code "gr"}
;;                   :composite/contains
;;                   [{:db/id 92358976733280
;;                     :item/uuid "tS1UfgeCI9Mc4U0uIoUst"
;;                     :item/name "Garlic Powder"
;;                     :measurement/yield 1
;;                     :measurement/uom {:uom/code "gr"}}]}
;;                  {:db/id #object[Long 4611681620380876910]
;;                   :recipe-line-item/uuid "zZt3UpUGA0n1IFHvPGq90"
;;                   :measurement/quantity 20
;;                   :measurement/uom {:uom/code "gr"}
;;                   :composite/contains
;;                   [{:db/id 92358976733281
;;                     :item/uuid "C6wExxYjY5hWQ0VwdkqJj"
;;                     :item/name "Onion Powder"
;;                     :measurement/yield 1
;;                     :measurement/uom {:uom/code "gr"}}]}
;;                  {:db/id #object[Long 4611681620380876911]
;;                   :recipe-line-item/uuid "aUrnIc2m1Ht7gCp3QzXX7"
;;                   :measurement/quantity 30
;;                   :measurement/uom {:uom/code "gr"}
;;                   :composite/contains
;;                   [{:db/id 92358976733283
;;                     :item/uuid "29aqxbNxs1kETa4mrZsEk"
;;                     :item/name "Asafoetida"
;;                     :measurement/yield 1
;;                     :measurement/uom {:uom/code "gr"}}]}
;;                  {:db/id #object[Long 4611681620380876912]
;;                   :recipe-line-item/uuid "zg9nDDSRiJ7rTUN8vVR0c"
;;                   :measurement/quantity 50
;;                   :measurement/uom {:uom/code "gr"}
;;                   :composite/contains
;;                   [{:db/id 92358976733284
;;                     :item/uuid "j162FWkb2E5PXWTIo79SM"
;;                     :item/name "Pearl Dust"
;;                     :measurement/yield 1
;;                     :measurement/uom {:uom/code "gr"}}]}]}]}
;;              {:db/id #object[Long 4611681620380876917]
;;               :recipe-line-item/uuid "OBxsDf2hXRFoO2cZXWrw0"
;;               :measurement/quantity 20
;;               :measurement/uom {:uom/code "gr"}
;;               :composite/contains
;;               [{:db/id 92358976733288
;;                 :item/uuid "xF5jVw4uSSO2DCVsR5OAj"
;;                 :item/name "Spicy Sauce"
;;                 :measurement/yield 30
;;                 :measurement/uom {:uom/code "gr"}
;;                 :composite/contains
;;                 [{:db/id #object[Long 4611681620380876913]
;;                   :recipe-line-item/uuid "l7pVMKQPTdO4VaGmRj0qA"
;;                   :measurement/quantity 10
;;                   :measurement/uom {:uom/code "gr"}
;;                   :composite/contains
;;                   [{:db/id 92358976733285
;;                     :item/uuid "9ZhvcyMgAFVBD7TvAUzms"
;;                     :item/name "Pepper"
;;                     :measurement/yield 1
;;                     :measurement/uom {:uom/code "gr"}}]}
;;                  {:db/id #object[Long 4611681620380876914]
;;                   :recipe-line-item/uuid "Oln_DXejpiNR2tzSxre8w"
;;                   :measurement/quantity 10
;;                   :measurement/uom {:uom/code "gr"}
;;                   :composite/contains
;;                   [{:db/id 92358976733286
;;                     :item/uuid "fBH515bMxAYeFCb9-PztV"
;;                     :item/name "Turmeric"
;;                     :measurement/yield 1
;;                     :measurement/uom {:uom/code "gr"}}]}
;;                  {:db/id #object[Long 4611681620380876915]
;;                   :recipe-line-item/uuid "rLwP_rbPA2HwjnO0XIOWP"
;;                   :measurement/quantity 10
;;                   :measurement/uom {:uom/code "gr"}
;;                   :composite/contains
;;                   [{:db/id 92358976733283
;;                     :item/uuid "29aqxbNxs1kETa4mrZsEk"
;;                     :item/name "Asafoetida"
;;                     :measurement/yield 1
;;                     :measurement/uom {:uom/code "gr"}}]}]}]}]}]}
;;          {:db/id #object[Long 4611681620380876919]
;;           :recipe-line-item/uuid "WC7rubjjrFQ1hrASPM0Ic"
;;           :measurement/quantity 10
;;           :measurement/uom {:uom/code "gr"}
;;           :composite/contains
;;           [{:db/id 92358976733279
;;             :item/uuid "DnnV7uU-vtg0sUP7IEnjh"
;;             :item/name "Salt"
;;             :measurement/yield 1
;;             :measurement/uom {:uom/code "gr"}}]}
;;          {:db/id #object[Long 4611681620380876920]
;;           :recipe-line-item/uuid "VTvO_vOWmkKqOsPI_RyV9"
;;           :measurement/quantity 10
;;           :measurement/uom {:uom/code "gr"}
;;           :composite/contains
;;           [{:db/id 92358976733285
;;             :item/uuid "9ZhvcyMgAFVBD7TvAUzms"
;;             :item/name "Pepper"
;;             :measurement/yield 1
;;             :measurement/uom {:uom/code "gr"}}]}]}]}]}}
