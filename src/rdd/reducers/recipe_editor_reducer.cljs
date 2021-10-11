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

(defmethod reducer :refresh!
  [{:as state :keys [current-product-name]} _]
  (assoc state
         :item (store/item->tree current-product-name)
         :items (store/get-items)
         :vendors (store/get-vendors)
         :uoms (store/get-uoms)))

(defmethod reducer :update-recipe-line-item-quantity-uom
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid uom-code]}]]
  (store/update-recipe-line-item-quantity-uom! uuid uom-code)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :update-item-yield
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid quantity]}]]
  (store/update-item-yield! uuid quantity)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :update-item-yield-uom
  [{:as state :keys [current-product-name]} [_ {:as args :keys [uuid uom-code]}]]
  (store/update-item-yield-uom! uuid uom-code)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :create-sibling-recipe-line-item
  [{:as state :keys [current-product-name]} [_ {:as args :keys [origin-rli-uuid insert-type]}]]
  (store/create-sibling-recipe-line-item! origin-rli-uuid insert-type)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :update-recipe-line-item-item
  [{:as state :keys [current-product-name]} [_ {:as args :keys [rli-uuid item-uuid]}]]
  (store/update-recipe-line-item-item! rli-uuid item-uuid)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :create-and-link-item
  [{:as state :keys [current-product-name]} [_ {:as args :keys [rli-uuid item-name item-type]}]]
  (store/create-and-link-item! rli-uuid item-name item-type)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod reducer :create-company
  [state [_ {:keys [name uuid]}]]
  (store/create-company! {:name name
                          :uuid uuid})
  (assoc state :vendors (store/get-vendors)))

(defmethod reducer :create-uom
  [state [_ {:keys [name code uuid]}]]
  (store/create-uom! {:name name
                      :code code
                      :uuid uuid
                      :system :units.system/CUSTOM
                      :type :units.type/CUSTOM})
  (assoc state :uoms (store/get-uoms)))
