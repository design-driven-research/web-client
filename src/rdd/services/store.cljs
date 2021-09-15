(ns rdd.services.store
  (:require [rdd.services.web-socket :refer [send!]]
            [rdd.db :refer [tree->db!]]))

(defn item-by-name
  [product-name]
  (send! :id :data/item-by-name
         :data {:product-name product-name}
         :reply? tree->db!))