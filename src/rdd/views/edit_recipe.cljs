(ns rdd.views.edit-recipe
  (:require
   [helix.core :refer [$ defnc]]
   [helix.hooks :as hooks]
   [rdd.components.recipe.recipe-editor.core :as recipe-editor]
   [rdd.reducers.recipe-editor-reducer :as rer]
   [rdd.db :as db]
   [rdd.services.event-bus :refer [subscribe!]]))

(defnc view
  [{:keys [product-name]}]
  (let [[item dispatch] (hooks/use-reducer rer/reducer (db/item-by-name product-name))
        update-quantity-handler (hooks/use-callback :once (fn [recipe-line-item-id quantity]
                                                            (dispatch {:type :update-quantity
                                                                       :data {:recipe-line-item-id recipe-line-item-id
                                                                              :quantity quantity
                                                                              :product-name product-name}})))
        create-recipe-line-item-handler (hooks/use-callback :once (fn [parent-item-id new-item-id]
                                                                    (dispatch {:type :create-recipe-line-item
                                                                               :data {:product-name product-name
                                                                                      :parent-item-id parent-item-id
                                                                                      :new-item-id new-item-id}})))]
    (hooks/use-effect :once
                      (subscribe!
                       :remote-db-loaded
                       (fn [_]
                         (dispatch {:type :remote-db-loaded
                                    :data {:product-name product-name}}))))

    ($ :div {:class "p-4"}
       ($ recipe-editor/Editor {:item item
                                :create-recipe-line-item-handler create-recipe-line-item-handler
                                :update-quantity-handler update-quantity-handler}))))


