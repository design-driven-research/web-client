(ns rdd.reducers.recipe-editor-reducer
  (:require [rdd.services.store :as store]))

(defmulti reducer
  (fn [_ action] (first action)))

(defmethod reducer :update-recipe-line-item-quantity
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid quantity]}]]
  (store/update-recipe-line-item-quantity! uuid quantity)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :update-item-yield-quantity
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid quantity]}]]
  (store/update-recipe-line-item-quantity! uuid quantity)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :remote-db-loaded
  [{:as state :keys [current-product-name]} _]
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :update-recipe-line-item-quantity-uom
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid uom]}]]
  (store/update-recipe-line-item-quantity-uom! uuid uom)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :update-item-yield-uom
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid uom]}]]
  (store/update-recipe-line-item-quantity-uom! uuid uom)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :create-recipe-line-item
  [{:as state :keys [current-product-name]} [_ [parent-item-id new-item-id]]]
  (js/console.log parent-item-id new-item-id)
  (store/create-recipe-line-item! parent-item-id new-item-id)
  (assoc state :item (store/item->tree current-product-name)))