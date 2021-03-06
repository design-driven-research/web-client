(ns rdd.db.transformers.tx-transforms
  (:require
   [rdd.utils.general :refer [de-nill]]
   [postmortem.core :as pm]))

(defn build-uom-tx-data
  [uoms]
  (for [uom uoms]
    (let [{:uom/keys [uuid name code]} uom
          type (-> uom :uom/type :db/ident)
          system (-> uom :uom/system :db/ident)]
      {:db/id uuid
       :uom/uuid uuid
       :uom/name name
       :uom/code code
       :uom/type type
       :uom/system system})))

(defn build-role-tx-data
  [roles]
  (for [role roles]
    (let [interval-ident (:time/duration-interval role)
          prepped (assoc role
                         :db/id (:role/name role)
                         :time/duration-interval interval-ident)]
      prepped)))

(defn build-labor-tx-data
  [labors]
  (for [labor labors]
    (let [interval-ident (-> labor :time/duration-interval :db/ident)
          labor-role-uuid (-> labor :labor/role :role/uuid)
          labor-name (:labor/name labor)
          labor-temp-id labor-name
          prepped (assoc labor
                         :db/id labor-temp-id
                         :labor/role [:role/uuid labor-role-uuid]
                         :time/duration-interval interval-ident)]
      prepped)))

(defn build-process-tx-data
  [processes]
  (for [process processes]
    (let [process-uuid (:process/uuid process)
          process-temp-id process-uuid
          uom-uuid (-> process :measurement/uom :uom/uuid)
          labor-uuids (map (fn [ll] [:labor/uuid (:labor/uuid ll)]) (:process/labor process))
          process-tx (assoc process
                            :db/id process-temp-id
                            :measurement/uom uom-uuid
                            :process/labor labor-uuids)]
      process-tx)))

(defn build-conversion-tx-data
  [conversions]
  (for [conversion conversions]
    (let [{:conversion/keys [uuid from to]
           :measurement/keys [quantity]} conversion
          from-uom-temp-id (-> from :uom/uuid)
          to-uom-temp-id (-> to :uom/uuid)]
      {:db/id uuid
       :conversion/uuid uuid
       :measurement/quantity quantity
       :conversion/from from-uom-temp-id
       :conversion/to to-uom-temp-id})))

(defn build-company-tx-data
  [companies]
  (for [company companies]
    (let [{:company/keys [uuid name company-items]} company
          company-item-temp-ids (map :company-item/uuid company-items)]
      {:company/uuid uuid
       :company/name name
       :company/company-items company-item-temp-ids})))

(defn build-item-tx-data
  [items]
  (for [item items]
    (let [{:item/keys [uuid name]
           :measurement/keys [yield uom]} item
          uom-temp-id (-> uom :uom/uuid)
          children (-> item :composite/contains)
          rli-temp-ids (map :recipe-line-item/uuid children)
          production-type (-> item :item/production-type :db/ident)
          process-uuid (-> item :item/process :process/uuid)]

      (cond-> {:db/id uuid
               :item/uuid uuid
               :item/name name
               :item/production-type production-type
               :measurement/yield yield
               :measurement/uom uom-temp-id
               :composite/contains rli-temp-ids}
        process-uuid (assoc :item/process process-uuid)))))

(defn build-company-item-tx-data
  [company-items]
  (for [company-item company-items]
    (let [{:company-item/keys [:uuid
                               :name
                               :sku

                               :item
                               :quotes]
           :info/keys [:description]} company-item
          conversions (-> company-item :uom/conversions)
          item-temp-id (-> item :item/uuid)

          company-quotes-temp-ids (map :quote/uuid quotes)
          conversion-temp-ids (map :conversion/uuid conversions)]
      {:db/id uuid
       :company-item/uuid uuid
       :company-item/name name
       :info/description description
       :company-item/sku sku
       :company-item/item item-temp-id
       :company-item/quotes company-quotes-temp-ids
       :uom/conversions conversion-temp-ids})))

(defn build-recipe-line-items-tx-data
  [recipe-line-items]
  (for [rli recipe-line-items]
    (let [uuid (-> rli :recipe-line-item/uuid)
          quantity (-> rli :measurement/quantity)
          uom-temp-id (-> rli :measurement/uom :uom/uuid)
          child-temp-id (-> rli :recipe-line-item/item :item/uuid)
          company-item-temp-id (-> rli :recipe-line-item/company-item :company-item/uuid)
          position (-> rli :meta/position)]
      {:db/id uuid
       :recipe-line-item/uuid uuid
       :meta/position position
       :recipe-line-item/item child-temp-id
       :recipe-line-item/company-item company-item-temp-id
       :measurement/quantity quantity
       :measurement/uom uom-temp-id})))

(defn build-quote-tx-data
  [quotes]
  (for [quote quotes]
    (let [uuid (-> quote :quote/uuid)
          quantity (-> quote :measurement/quantity)
          uom-temp-id (-> quote :measurement/uom :uom/uuid)
          cost (-> quote :currency.usd/cost)
          valid-from (-> quote :date/valid-from)
          valid-to (-> quote :date/valid-to)]
      {:db/id uuid
       :quote/uuid uuid
       :currency.usd/cost cost
       :date/valid-from valid-from
       :date/valid-to valid-to
       :measurement/quantity quantity
       :measurement/uom uom-temp-id})))

(defn initial-remote->tx-data
  "Build tx-data from initial data payload across all entity types"
  [data]
  (pm/spy>> :data data)
  (-> [(build-uom-tx-data (:uoms data))
       (build-role-tx-data (:roles data))
       (build-conversion-tx-data (:conversions data))
       (build-item-tx-data (:items data))
       (build-labor-tx-data (:labor data))
       (build-process-tx-data (:processes data))
       (build-recipe-line-items-tx-data (:recipe-line-items data))
       (build-quote-tx-data (:quotes data))
       (build-company-tx-data (:companies data))
       (build-company-item-tx-data (:company-items data))]
      (flatten)
      (de-nill)))

(comment


  (build-process-tx-data (first (pm/log-for :data)))

  (:process (first (pm/log-for :data)))

  (tap> (first (pm/log-for :data)))
  ;; 
  )