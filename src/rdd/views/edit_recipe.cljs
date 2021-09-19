(ns rdd.views.edit-recipe
  (:require
   [helix.core :refer [$ defnc]]
   ["@blueprintjs/core" :as hey :refer [Button Icon useHotkeys]]

   [helix.hooks :as hooks]
   [rdd.components.recipe.recipe-editor.core :as recipe-editor]
   [rdd.reducers.recipe-editor-reducer :as rer]
   [rdd.db :as db]
   [rdd.services.event-bus :refer [subscribe!]]))

(defnc view
  [{:keys [product-name]}]
  (let [[item dispatch] (hooks/use-reducer rer/reducer (db/item-by-name product-name))

        hotkeys (hooks/use-memo :once (clj->js [{:combo "Shift + B"
                                                 :global true
                                                 :label "Refresh"
                                                 :onKeyDown (fn [e] (js/console.log "Pressed B " e))}

                                                {:combo "C"
                                                 :global true
                                                 :label "Yo son"
                                                 :onKeyDown (fn [e] (js/console.log "Pressed C " e))}]))

        {:keys [handleKeyDown handleKeyUp]} (useHotkeys hotkeys)

        update-quantity-handler (hooks/use-callback :once (fn [recipe-line-item-id quantity]
                                                            (dispatch {:type :update-quantity
                                                                       :data {:recipe-line-item-id recipe-line-item-id
                                                                              :quantity quantity
                                                                              :product-name product-name}})))

        update-recipe-line-item-uom (hooks/use-callback :once (fn [recipe-line-item-id uom-code]
                                                                (dispatch {:type :update-recipe-line-item-uom
                                                                           :data {:recipe-line-item-id recipe-line-item-id
                                                                                  :product-name product-name
                                                                                  :uom-code uom-code}})))

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

    ($ :div {:class "p-4"
             :onKeyDown handleKeyDown
             :onKeyUp handleKeyUp}
       ($ recipe-editor/Editor {:item item
                                :update-recipe-line-item-uom update-recipe-line-item-uom
                                :create-recipe-line-item-handler create-recipe-line-item-handler
                                :update-quantity-handler update-quantity-handler}))))