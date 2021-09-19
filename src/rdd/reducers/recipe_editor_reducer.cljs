(ns rdd.reducers.recipe-editor-reducer
  (:require [rdd.db :as db]
            [applied-science.js-interop :as j]))

(defn reducer
  [state payload]

  (let [{:keys [product-name data topic]} payload]
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
                                 (db/item-by-name product-name)))))
