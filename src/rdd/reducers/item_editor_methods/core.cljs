(ns rdd.reducers.item-editor-methods.core
  (:require [rdd.reducers.api :refer [item-editor-reducer]]
            [rdd.models.role :as role]
            [rdd.services.store :as store]))

(defmethod item-editor-reducer :refresh!
  [{:as state :keys [current-product-name]} _]
  (assoc state
         :item (store/item->tree current-product-name)
         :items (store/get-items)
         :vendors (store/get-vendors)
         :roles (role/roles)
         :uoms (store/get-uoms)))