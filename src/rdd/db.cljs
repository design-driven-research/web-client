(ns rdd.db
  (:require

   [taoensso.timbre :as timbre
    :refer-macros [log info spy]]
   [datascript.core :as d]
   [nano-id.core :refer [nano-id]]
   [postmortem.core :as pm]
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
   {:db/id -1 :node/name "Salt" :node/categories [-102] :node/uom [:uom/code "gram"] :node/yield 1}
   {:db/id -2 :node/name "Pepper" :node/uom [:uom/code "gram"] :node/yield 1}
   {:db/id -3 :node/name "Sauce" :node/uom [:uom/code "gram"] :node/yield 100}
   {:db/id -4 :node/name "Chorizo Wrap" :node/uom -302 :node/yield 1}

  ;;  Edges
   {:edge/child -1 :edge/parent -3 :node/_parents -1 :node/_children -3 :edge/quantity 10 :edge/uom [:uom/code "gram"]}
   {:edge/child -2 :edge/parent -3 :node/_parents -2 :node/_children -3 :edge/quantity 10 :edge/uom [:uom/code "gram"]}
   {:edge/child -3 :edge/parent -4 :node/_parents -3 :node/_children -4 :edge/quantity 10 :edge/uom [:uom/code "gram"]}

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

(reset-db)
(seed-db)

#_(->> @dsdb
       :aevt
       (sort-by (fn [h] (:e h)))
       tap>)




(comment
  (pm/reset!)

  (pm/log-for :quantity)
  ;; => [10 10 10]

  ;; => [10 10 10 10 10 10]

  (pm/log-for :yield)
  ;; => [1 1 100]

  ;; => [1 1 100 1 1 100]

  (pm/log-for :total)
  ;; => [10 10 1000]

  ;; => [10 10 1000]

  ;; => [10 10 1000]


  ;; 
  )

#_(tap> (node->tree (d/entity @dsdb [:node/name "Chorizo Wrap"])))

;; (time (node->tree (d/entity @dsdb [:node/name "Chorizo Wrap"])))
;; => {:id 20,
;;     :name "Chorizo Wrap",
;;     :yield 1,
;;     :normalized-cost 2,
;;     :children
;;     ({:id 19,
;;       :name "Sauce",
;;       :yield 100,
;;       :normalized-cost 0.2,
;;       :children
;;       ({:id 16, :uom "gram", :normalized-cost 1, :name "Salt", :quantity 10, :total-cost 10}
;;        {:id 18, :uom "gram", :normalized-cost 1, :name "Pepper", :quantity 10, :total-cost 10}),
;;       :quantity 10,
;;       :total-cost 2,
;;       :uom "gram"})}



(defn uoms
  []
  (->> (d/q '[:find ?name ?code ?eid
              :keys name code id
              :where [?eid :uom/name ?name]
              [?eid :uom/code ?code]]
            @dsdb)
       (sort-by :name)))

(defn node-by-name
  [name]
  (node->tree (d/entity @dsdb [:node/name name])))


(defn update-son
  [node-name name]
  (let [new-name (str (random-uuid))]
    (d/transact! dsdb [[:db/add [:node/name name] :node/name new-name]])
    (tap> (node-by-name node-name))
    (node-by-name node-name)))

(defn entity-by-id
  [id]
  (d/pull @dsdb '[*] id))

;; (d/q '[:find ?node ?name ?children
;;        :where [?node :db/id 22]
;;        [?node :node/name ?name]
;;        [?node :node/children ?children]]
;;      @dsdb)

;; (d/q '[:find ?name
;;        :where [~id :node/name ?name]]
;;      @dsdb)


#_(defn node-by-id
    [id]
    (d/pull @dsdb [:db/id] [:node/name "Product"]))

#_(d/pull @dsdb '[:node/parents] [:node/name "Salt"])
;; => #:node{:parents [{:db/id 23, :edge/child #:db{:id 19}, :edge/parent #:db{:id 21}}]}


#_(d/transact! dsdb [[:db/add [:node/name "Salty"] :node/name "Salt"]])
#_(d/transact! dsdb [[:db/add [:node/name "Salt"] :node/name "Salty"]])
#_(d/transact! dsdb [[:db/add [:node/name "Chorizo Wrap"] :node/name "Chorizoy"]])
#_(d/transact! dsdb [[:db/add [:node/name "Chorizoy"] :node/name "Chorizo Wrap"]])
#_(d/transact! dsdb [[:db/add [:uom/name "Pound"] :uom/name "Poundy"]])

#_(d/transact! dsdb [[:db/retractEntity 23]])

;; => nil

;; => #:node{:name "Chorizo Wrap"}

(d/pull @dsdb '[* {:node/children [{:edge/_parent ...}]}] [:node/name "Chorizo Wrap"])
;; => {:db/id 22, :node/name "Chorizo Wrap", :node/uid "KUumRSahbSislxN4NEJwy"}

;; => {:db/id 22, :node/children [#:db{:id 25}], :node/name "Chorizo Wrap", :node/uid "KUumRSahbSislxN4NEJwy"}

;; => {:db/id 22, :node/children [#:db{:id 25}], :node/name "Chorizo Wrap", :node/uid "KUumRSahbSislxN4NEJwy"}

;; => {:db/id 22,
;;     :node/children [{:db/id 25, :edge/child #:db{:id 21}, :edge/parent #:db{:id 22}}],
;;     :node/name "Chorizo Wrap",
;;     :node/uid "KUumRSahbSislxN4NEJwy"}


(d/pull @dsdb '[* {:node/children [{:edge/child [{:node/children ...}]}]}] [:node/name "Chorizo Wrap"])
;; => {:db/id 22, :node/name "Chorizo Wrap", :node/uid "KUumRSahbSislxN4NEJwy"}

;; => :repl/exception!

;; => {:db/id 22,
;;     :node/children
;;     [#:edge{:child
;;             #:node{:children
;;                    [{:db/id 23, :edge/child #:db{:id 19}, :edge/parent #:db{:id 21}}
;;                     {:db/id 24, :edge/child #:db{:id 20}, :edge/parent #:db{:id 21}}]}}],
;;     :node/name "Chorizo Wrap",
;;     :node/uid "KUumRSahbSislxN4NEJwy"}

;; => {:db/id 22, :node/name "Chorizo Wrap", :node/uid "KUumRSahbSislxN4NEJwy"}

;; => {:db/id 22, :node/name "Chorizo Wrap", :node/uid "54nQUTJcKmpphPa84P7qE"}

;; => {:db/id 22, :node/children [#:db{:id 25}], :node/name "Chorizo Wrap", :node/uid "54nQUTJcKmpphPa84P7qE"}

;; => {:db/id 22,
;;     :node/children [{:db/id 25, :edge/child #:db{:id 21}, :edge/parent #:db{:id 22}}],
;;     :node/name "Chorizo Wrap",
;;     :node/uid "54nQUTJcKmpphPa84P7qE"}



(d/pull @dsdb '[:node/name {:node/children
                            [{:edge/child
                              [:node/name {:node/children
                                           [{:edge/child [:node/name]}]}]}]}] [:node/name "Chorizo Wrap"])


(d/q '[:find #_?child #_?name ?children
       :in $ %
       :where (children ?child ?children)

       #_[?child :node/name "Chorizo Wrap"]
       #_[?child :node/name ?name]] @dsdb '[[(children ?child ?children)
                                             [?child :node/children ?children]]
                                            [(children ?child ?children)
                                             [?children :edge/child ?en]
                                             [?en :node/children ?tt]
                                             (children ?en ?tt)]])
;; => #{[23] [24] [25]}

;; => #{[22 25] [nil 25] [21 24] [21 23]}

;; => :repl/exception!

;; => #{[22 25] [21 24] [21 23]}

;; => #{[22 25] [21 24] [21 23]}

#_(defn entity-by-id
    [id]
    (d/entity @dsdb id))



(def children (:node/children (d/entity @dsdb [:node/name "Chorizo Wrap"])))

children
;; => #{{:edge/child #:db{:id 21}, :db/id 25}}

(map (fn [c] (:edge/child c)) children)
;; => (#:db{:id 21})

;; => (#:db{:id 21})

  ;; => #{#:db{:id 25}}





;; =========================================================================
;; =========================================================================
;; FIDDLE
;; =========================================================================
;; =========================================================================

(comment

  ;; Pull a UOM out with all attributes
  (d/pull @dsdb '[* {:uom/type [:uom/type :uom/code :db/id]}] 15)

  (->> @dsdb
       :aevt
       (sort-by (fn [h] (:e h)))
       tap>)


  ;; 
  )



(comment


  (:node/uid (d/entity @dsdb [:node/name "Salt"]))

  (d/q '[:find ?name ?code ?eid
         :keys name code id
         :where [?eid :uom/name ?name]
         [?eid :uom/code ?code]]
       @dsdb)



  #_(let [db (d/empty-db schema)
          conn (d/conn-from-db db)]

      (-> (d/transact! conn (seed-data))
          :db-after
          :eavt
          tap>))



  #_(tap> (-> @dsdb
              :eavt))


  #_(d/transact! dsdb [[:db/add [:uom/name "Pound"] :uom/name "Poundy"]])
  #_(d/transact! dsdb [[:db/add [:uom/name "Poundy"] :uom/name "Pound"]])

  (d/datoms @dsdb :avet :node/name "Chorizo Wrap")
  (d/q '[:find ?e ?name ?none ?no
         :where [?e :uom/name ?name]
         [(get-else $ ?e :uom/hey :what) ?none]
         [(= :what ?none)]
         [(ground :whaat) ?no]]
       @dsdb)



  (->> (d/datoms @dsdb :eavt 1 :edge/_parent) (map :v))


  #_(d/transact! dsdb [{:node/name "Salty"}])
  #_(d/transact! dsdb [{:node/name "Spicy"}])
  #_(d/transact! dsdb [[:db/add [:node/name "Salt"] :node/name "Salty"]])
  #_(d/transact! dsdb [[:db/retractEntity  [:node/name "Sexy"] :node/name]])

  #_(d/transact! dsdb [{:db/id 1 :node/name "Salty"}])
  #_(d/transact! dsdb [[:db/cas 1 :node/name "Salty" "Salt"]])

  #_(d/transact! dsdb [[:db/add -1 :node/uid (nano-id)]
                       [:db/add -1 :node/name "Salt"]

                       [:db/add -2 :node/uid (nano-id)]
                       [:db/add -2 :node/name "Pepper"]

                       [:db/add -3 :node/uid (nano-id)]
                       [:db/add -3 :node/name "Sauce"]

                       [:db/add -10 :edge/child -1]
                       [:db/add -10 :edge/parent -3]

                       [:db/add -11 :edge/child -2]
                       [:db/add -11 :edge/parent -3]

                    ;;  [:db/add -1 :node/parents -10]
                       #_[:db/add -2 :node/parents -11]

                       #_[:db/add -3 :node/children -10]
                       #_[:db/add -3 :node/children -11]])


  #_(d/transact! dsdb [[:db/add [:node/name "Salt"] :category/type "Sea Salt"]])
  #_(d/transact! dsdb [[:db/add [:node/name "Salt"] :category/type "Other"]])
  #_(d/transact! dsdb [[:db/retract [:node/name "Salt"] :node/some-other-prop]])

  #_(d/transact! dsdb [{:category/type {:db/unique :db.unique/identity}}])


  #_(d/touch (d/entity @dsdb 1))
  #_(d/touch (d/entity @dsdb 5))


  #_(tap> (-> @dsdb
              :eavt))

  (d/q '[:find ?e ?i ?uid
         :where [?e :node/name ?i]
         [?e :node/uid ?uid]]
       @dsdb)

  (d/q '[:find ?n ?uid
         :in $ ?n
         :where [?n :node/uid ?uid]
         [?n :node/name ?name]] @dsdb [:node/name "Salt"])

  (d/q '[:find ?name ?c
         :where
         [?n :node/name "Sauce"]
         [?e :edge/child ?c]
         [?c :node/name ?name]
         #_[?e :edge/id ?e-id]
         #_[?p :node/name ?name]]
       @dsdb)

  (d/q '[:find ?e ?node-by-name
         :in $ ?node-by-name
         :where
         [?n :node/name "Salt"]
         [?n :edge/_child ?e]
         #_[?e :edge/_child ?node-by-name]
         #_[?node-by-name :edge/_child ?e]

         #_[?e :edge/id ?e-id]
         #_[?p :node/name ?name]]
       @dsdb [:node/name "Salt"])

  (d/q '[:find ?e
         :where
         [?e :edge/_child]]
       @dsdb)


  (let [db [[1 :follow 2]
            [2 :follow 3]
            [2 :follow 4]

            [3 :follow 4]
            [4 :follow 6]

            [5 :follow 3]]]
    (d/q '[:find ?e1 ?e2
           :in $ %
           :where (follow ?e1 ?e2)]
         db
         '[[(follow ?x ?y)
            [?x :follow ?y]]])

    (d/q '[:find  ?e2
           :in    $ ?e1 %
           :where (follow ?e1 ?e2)]
         db
         1
         '[[(follow ?e1 ?e2)
            [?e1 :follow ?e2]]
           [(follow ?e1 ?e2)
            [?e1 :follow ?t]
            (follow ?t ?e2)]]))


  (d/q '[:find  ?e1 ?e2
         :in    $ %
         :where (f1 ?e1 ?e2)]
       [[0 :f1 1]
        [1 :f2 2]
        [2 :f1 3]
        [3 :f2 4]
        [4 :f1 5]
        [5 :f2 6]]
       '[[(f1 ?e1 ?e2)
          [?e1 :f1 ?e2]]
         [(f1 ?e1 ?e2)
          [?t :f1 ?e2]
          (f2 ?e1 ?t)]
         [(f2 ?e1 ?e2)
          [?e1 :f2 ?e2]]
         [(f2 ?e1 ?e2)
          [?t :f2 ?e2]
          (f1 ?e1 ?t)]])




  (d/pull @dsdb '[:edge/_child] 1)




  (def hey (-> (d/empty-db {:artist/country {:db/valueType :db.type/ref}})
               (d/db-with [[:db/ident :country/US]
                           [:db/ident :country/CA]])))

  (def temp-db (d/conn-from-db hey))

  (d/transact! temp-db [{:artist/country :country/US}])

  (-> @temp-db
      tap>)

  (d/q '[:find ?e
         :where [[]]])

  ;; 
  )