(ns rdd.db.transformers.neo4j
  (:require [clojure.edn]
            [postmortem.core :as pm]
            [datascript.core :as d]))

(declare create-recipe-line-item!
         create-recipe-line-items!
         create-item!
         create-uom!)

(defn create-uom!
  [db data]

  (let [id (-> data :_id)
        uuid (-> data :uuid)
        name (-> data :name)
        code (-> data :code)
        ;; type (-> data :type)

        payload {:db/id id
                 :uom/uuid uuid
                 :uom/name name
                 :uom/code code
                 #_#_:uom/type type}]

    (d/transact! db [payload])
    id))

(defn create-recipe-line-item!
  [db data]
  (let [uuid (-> data :recipe-line-item/uuid)
        child-data (-> data :composite/contains (first))
        uom-code (-> data :measurement/uom :uom/code)
        quantity (-> data :measurement/quantity)

        child-item-id (pm/spy>> :child-item-id (create-item! db child-data))


        payload (cond-> {:recipe-line-item/uuid uuid

                         :recipe-line-item/uom [:uom/code uom-code]
                         :recipe-line-item/quantity quantity}
                  child-item-id (merge {:recipe-line-item/child child-item-id}))
        result (-> (d/transact! db [payload]) :tx-data)
        new-id (ffirst result)]



    new-id))

(defn create-recipe-line-items!
  [db recipe-line-items]
  (mapv (partial create-recipe-line-item! db) recipe-line-items))

(defn create-item!
  [db data]
  (let [uuid (-> data :item/uuid)
        name (-> data :item/name)
        yield (-> data :measurement/yield)
        uom-code (-> data :measurement/uom :uom/code)
        recipe-line-items-data (-> data :composite/contains)
        recipe-line-item-ids (if (seq recipe-line-items-data)
                               (create-recipe-line-items! db recipe-line-items-data)
                               nil)

        payload (cond-> {:item/uuid uuid
                         :item/yield yield
                         :item/uom [:uom/code uom-code]
                         :item/name name}
                  (seq recipe-line-items-data) (merge {:item/children recipe-line-item-ids}))
        result (-> (d/transact! db [payload]) :tx-data)
        new-id (ffirst result)]

    new-id))

(defn create-items!
  [db data]
  (let [uuid (-> data :item/uuid)
        is-item? uuid

        payload {:item/uuid (-> data :item/uuid)
                 :item/yield (-> data :measurement/yield)
                 :item/uom (-> data :measurement/uom :uom/code)
                 :item/name (-> data :item/name)}

        children (-> data :composite/contains)
        has-children? (seq children)]

    (if is-item?
      (d/transact! db [payload]))))



(defn tree->db!
  [conn data]
  (tap> (:item data))

  (create-item! conn (:item data)))

(cond-> {}
  (seq [1 2]) (merge {:a 19})
  false {}
  true (merge {:X 20}))

(comment

  (pm/reset!)

  (pm/log-for :child-item-id)
  (pm/log-for :payload)
  (pm/log-for :new-item)
  ;; => [{:new-id 16, :payload #:item{:uuid "dj1dwv18NY27R7p-DtmxT", :yield 1, :uom [:uom/code "gr"], :name "Salt"}}
  ;;     {:new-id 18, :payload #:item{:uuid "5N_C722tf6mOrFGKYvDi_", :yield 1, :uom [:uom/code "gr"], :name "Garlic Powder"}}
  ;;     {:new-id 20, :payload #:item{:uuid "WoDYNMwTAnjrbqIkvYPlA", :yield 1, :uom [:uom/code "gr"], :name "Onion Powder"}}
  ;;     {:new-id 22, :payload #:item{:uuid "ZiWgb59s9MVyshN53T7pI", :yield 1, :uom [:uom/code "gr"], :name "Asafoetida"}}
  ;;     {:new-id 24, :payload #:item{:uuid "vnAKV6xIZW2FO_oZ4AxPW", :yield 1, :uom [:uom/code "gr"], :name "Pearl Dust"}}
  ;;     {:new-id 26,
  ;;      :payload
  ;;      #:item{:uuid "fIWg4tldcSQyrAZuPbWv-",
  ;;             :yield 130,
  ;;             :uom [:uom/code "gr"],
  ;;             :name "Special Sauce",
  ;;             :children [17 19 21 23 25]}}
  ;;     {:new-id 28, :payload #:item{:uuid "YLCfz4pFkDa0ueUR38Iwm", :yield 1, :uom [:uom/code "gr"], :name "Pepper"}}
  ;;     {:new-id 30, :payload #:item{:uuid "K495YUw9ngz9VvM_0WsTZ", :yield 1, :uom [:uom/code "gr"], :name "Turmeric"}}
  ;;     {:new-id nil, :payload #:item{:uuid "ZiWgb59s9MVyshN53T7pI", :yield 1, :uom [:uom/code "gr"], :name "Asafoetida"}}]

  ;; => [#:recipe-line-item{:uuid "Auy_EO9kYJ3D4LVJcd7nu", :child 16, :uom [:uom/code "gr"], :quantity 10}
  ;;     #:recipe-line-item{:uuid "061FlML6hX58K2x7zB2g7", :child 18, :uom [:uom/code "gr"], :quantity 20}
  ;;     #:recipe-line-item{:uuid "-5KvjqPGOMkYRCiRvOvv0", :child 20, :uom [:uom/code "gr"], :quantity 20}
  ;;     #:recipe-line-item{:uuid "BLIWUaEbXcShuMAYi_IjP", :child 22, :uom [:uom/code "gr"], :quantity 30}
  ;;     #:recipe-line-item{:uuid "_UCdm3Rxn5dMZIq7liGAQ", :child 24, :uom [:uom/code "gr"], :quantity 50}
  ;;     #:recipe-line-item{:uuid "rmwI2DY3aqXqB_bcW1QIt", :child 26, :uom [:uom/code "gr"], :quantity 20}
  ;;     #:recipe-line-item{:uuid "BChh5R_KjtXU09i8yUzQG", :child 28, :uom [:uom/code "gr"], :quantity 10}
  ;;     #:recipe-line-item{:uuid "hUb-e192hG3k43ZzyzMWJ", :child 30, :uom [:uom/code "gr"], :quantity 10}
  ;;     #:recipe-line-item{:uuid "59IUO7Jz14dLdoJlfECVo", :child nil, :uom [:uom/code "gr"], :quantity 10}]


  ;; => nil

  ;; => [16 18 20 22 24 26 28 30 nil]

  ;; 
  )