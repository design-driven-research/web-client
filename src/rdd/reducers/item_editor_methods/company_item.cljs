(ns rdd.reducers.item-editor-methods.company-item
  (:require [rdd.reducers.api :refer [item-editor-reducer]]
            [rdd.services.store :as store]))

(defmethod item-editor-reducer :create-company-item
  [{:as state :keys [current-product-name]} [_ req]]
  (store/create-company-item! req)
  (assoc state :item (store/item->tree current-product-name)))