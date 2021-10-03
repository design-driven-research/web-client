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

(defmethod reducer :update-item-yield
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid quantity]}]]
  (store/update-item-yield! uuid quantity)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :update-item-yield-uom
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid uom]}]]
  (store/update-item-yield-uom! uuid uom)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :create-sibling-recipe-line-item
  [{:as state :keys [current-product-name]} [_ {:as args :keys [origin-rli-uuid insert-type]}]]
  (store/create-sibling-recipe-line-item! origin-rli-uuid insert-type)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :create-nested-recipe-line-item
  [{:as state :keys [current-product-name]} [_ {:as args :keys [origin-rli-uuid insert-type]}]]

  #_(store/create-recipe-line-item! origin-rli-uuid insert-type)
  state
  #_(assoc state :item (store/item->tree current-product-name)))