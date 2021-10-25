(ns rdd.reducers.item-editor-methods.recipe-line-item
  (:require [rdd.reducers.api :refer [item-editor-reducer]]
            [rdd.services.store :as store]))

(defmethod item-editor-reducer :update-recipe-line-item-quantity
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid quantity]}]]
  (store/update-recipe-line-item-quantity! uuid quantity)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :update-recipe-line-item-quantity-uom
  [{:as state :keys [current-product-name]} [_ {:as args :keys [rli-uuid uom-uuid]}]]
  (store/update-recipe-line-item-quantity-uom! rli-uuid uom-uuid)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :create-sibling-recipe-line-item
  [{:as state :keys [current-product-name]} [_ {:as args :keys [origin-rli-uuid insert-type]}]]
  (store/create-sibling-recipe-line-item! origin-rli-uuid insert-type)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :update-recipe-line-item-item
  [{:as state :keys [current-product-name]} [_ {:as args :keys [rli-uuid item-uuid]}]]
  (store/update-recipe-line-item-item! rli-uuid item-uuid)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :update-recipe-line-company-item
  [{:as state :keys [current-product-name]} [_ {:keys [rli-uuid company-item-uuid]}]]
  (store/update-recipe-line-company-item! rli-uuid company-item-uuid)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :delete-recipe-line-item
  [{:as state :keys [current-product-name]} [_ rli-uuid]]
  (store/delete-recipe-line-item! rli-uuid)
  (assoc state :item (store/item->tree current-product-name)))