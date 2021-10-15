(ns rdd.reducers.item-editor-methods.item
  (:require [rdd.reducers.api :refer [item-editor-reducer]]
            [rdd.services.store :as store]))

(defmethod item-editor-reducer :update-item-yield
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid quantity]}]]
  (store/update-item-yield! uuid quantity)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :update-item-yield-uom
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid uom-code]}]]
  (store/update-item-yield-uom! uuid uom-code)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :create-and-link-item
  [{:as state :keys [current-product-name]} [_ {:as args :keys [rli-uuid item-name item-type]}]]
  (store/create-and-link-item! rli-uuid item-name item-type)
  (assoc state :item (store/item->tree current-product-name)))