(ns rdd.views.edit-recipe
  (:require ["@blueprintjs/core" :as hey :refer [useHotkeys]]
            [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.hooks :as hooks]
            [rdd.components.items.item-editor :as recipe-editor]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.services.event-bus :refer [subscribe!]]))


(defnc view
  []
  (let [[state dispatch! builder] (use-item-state)
        item (-> state :item)

        hotkeys (hooks/use-memo :once (clj->js [{:combo "Shift + B"
                                                 :global true
                                                 :label "Refresh"
                                                 :onKeyDown (fn [e] (js/console.log "Pressed B " e))}

                                                {:combo "C"
                                                 :global true
                                                 :label "Yo son"
                                                 :onKeyDown (fn [e] (js/console.log "Pressed C " e))}]))

        {:keys [handleKeyDown handleKeyUp]} (useHotkeys hotkeys)

        update-recipe-line-item-quantity-handler (builder :update-recipe-line-item-quantity)
        update-recipe-line-item-quantity-uom-handler (builder :update-recipe-line-item-quantity-uom)
        create-recipe-line-item (builder :create-recipe-line-item)]

    (hooks/use-effect :once
                      (dispatch!
                       [:refresh!]))

    (hooks/use-effect :once
                      (subscribe!
                       :remote-db-loaded
                       (fn [_]
                         (dispatch!
                          [:refresh!]))))

    ($ :div {:class "p-4"
             :onKeyDown handleKeyDown
             :onKeyUp handleKeyUp}
       ($ recipe-editor/Editor {:item item
                                :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler
                                :create-recipe-line-item create-recipe-line-item
                                :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler}))))