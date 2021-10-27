(ns rdd.reducers.item-editor-methods.item
  (:require [rdd.reducers.api :refer [item-editor-reducer]]
            [rdd.services.store :as store]))

(defmethod item-editor-reducer :update-item-yield
  [{:as state :keys [current-product-name]} [_ {:keys [item-uuid item-yield]}]]
  (store/update-item-yield! item-uuid item-yield)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :update-item-yield-uom
  [{:as state :keys [current-product-name]} [_ {:keys [item-uuid uom-uuid]}]]
  (store/update-item-yield-uom! item-uuid uom-uuid)
  (assoc state :item (store/item->tree current-product-name)))

(defmethod item-editor-reducer :create-and-link-item
  [{:as state :keys [current-product-name]} [_ {:keys [rli-uuid item-name item-type item-default-uom-code]}]]
  (store/create-and-link-item! {:rli-uuid rli-uuid
                                :item-name item-name
                                :item-type item-type
                                :item-default-uom-code item-default-uom-code})
  (assoc state :item (store/item->tree current-product-name)))