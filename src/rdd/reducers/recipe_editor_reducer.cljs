(ns rdd.reducers.recipe-editor-reducer
  (:require [rdd.db :as db]))

(defn reducer
  [state action]
  (case (:type action)
    :update-quantity (let [{:keys [recipe-line-item-id quantity product-name]} (:data action)]
                       (db/update-recipe-line-item-quantity! recipe-line-item-id quantity)
                       (db/item-by-name product-name))
    :remote-db-loaded (let [{:keys [product-name]} (:data action)]
                        (db/item-by-name product-name))
    :create-recipe-line-item (let [{:keys [product-name parent-item-id new-item-id]} (:data action)]
                               (js/console.log parent-item-id new-item-id)
                               (db/create-recipe-line-item! parent-item-id new-item-id)
                               (db/item-by-name product-name))))
