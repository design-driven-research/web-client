(ns rdd.reducers.recipe-editor-reducer
  (:require [rdd.db :as db]
            [applied-science.js-interop :as j]))

(defmulti reducer
  (fn [_ action] (first action)))

(defmethod reducer :update-recipe-line-item-quantity
  [{:as state :keys [current-product-name]} [_ [id quantity]]]
  (db/update-recipe-line-item-quantity! id quantity)
  (assoc state :item (db/item-by-name current-product-name)))

(defmethod reducer :remote-db-loaded
  [{:as state :keys [current-product-name]} _]
  (assoc state :item (db/item-by-name current-product-name)))

(defmethod reducer :update-recipe-line-item-uom
  [{:as state :keys [current-product-name]} [_ [id uom]]]
  (db/update-recipe-line-item-uom! id uom)
  (assoc state :item (db/item-by-name current-product-name)))

(defmethod reducer :create-recipe-line-item
  [{:as state :keys [current-product-name]} [_ [parent-item-id new-item-id]]]
  (js/console.log parent-item-id new-item-id)
  (db/create-recipe-line-item! parent-item-id new-item-id)
  (assoc state :item (db/item-by-name current-product-name)))