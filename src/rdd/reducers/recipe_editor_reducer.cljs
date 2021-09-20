(ns rdd.reducers.recipe-editor-reducer
  (:require [rdd.db :as db]
            [applied-science.js-interop :as j]))

(defmulti reducer
  (fn [_ action] (first action)))

(defmethod reducer :update-quantity
  [{:as state :keys [current-product-name]} [_ [id quantity]]]
  (db/update-recipe-line-item-uom-quantity! id quantity)
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
  (db/create-recipe-line-item! parent-item-id new-item-id)
  (assoc state :item (db/item-by-name current-product-name)))


#_(let [{:keys [product-name data topic]} payload]
    (case topic

      :update-recipe-line-item-uom (let [[recipe-line-item-id uom-code] data]
                                     (db/update-recipe-line-item-uom! recipe-line-item-id uom-code)
                                     (db/item-by-name product-name))

      :update-quantity (let [[recipe-line-item-id quantity] data]
                         (db/update-recipe-line-item-uom-quantity! recipe-line-item-id quantity)
                         (db/item-by-name product-name))

      :remote-db-loaded (db/item-by-name product-name)

      :create-recipe-line-item (let [[parent-item-id new-item-id] data]
                                 (db/create-recipe-line-item! parent-item-id new-item-id)
                                 (db/item-by-name product-name))))
