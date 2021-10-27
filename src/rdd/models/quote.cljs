(ns rdd.models.quote
  (:require [clojure.set]
            [datascript.core :as d]
            [rdd.db :refer [db]]))


(defn quotes
  []
  (map first (d/q '[:find (pull ?e [*])
                    :where [?e :quote/uuid _]]
                  (db))))


(defn quote-by-uuid
  [uuid]
  (first (d/q '[:find [(pull ?e [*])]
                :in $ ?uuid
                :where [?e :quote/uuid ?uuid]]
              (db) uuid)))


(defn quotes-by-item-name
  [item-name]
  (d/q '[:find ?quote-uuid ?quantity ?cost ?uom-code
         :in $ ?item-name
         :where [?item :item/name ?item-name]
         [?company-item :company-item/item ?item]
         [?company-item :company-item/quotes ?quote]
         [?quote :quote/uuid ?quote-uuid]
         [?quote :currency.usd/cost ?cost]
         [?quote :measurement/quantity ?quantity]
         [?quote :measurement/uom ?uom]
         [?uom :uom/code ?uom-code]]
       (db) item-name))

(defn quotes-by-item-uuid
  [item-uuid]
  (d/q '[:find ?quote-uuid ?quantity ?cost ?uom-code
         :in $ ?item-uuid
         :where [?item :item/uuid ?item-uuid]
         [?company-item :company-item/item ?item]
         [?company-item :company-item/quotes ?quote]
         [?quote :quote/uuid ?quote-uuid]
         [?quote :currency.usd/cost ?cost]
         [?quote :measurement/quantity ?quantity]
         [?quote :measurement/uom ?uom]
         [?uom :uom/code ?uom-code]]
       (db) item-uuid))

(quotes-by-item-name "Bay leaves")


#_(defn update-quote-by-uuid
    [quote-uuid change-set])

#_(tap> (quotes))