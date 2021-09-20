(ns rdd.views.edit-recipe
  (:require
   [helix.core :refer [$ defnc]]
   ["@blueprintjs/core" :as hey :refer [Button Icon useHotkeys]]

   [helix.hooks :as hooks]
   [rdd.components.recipe.recipe-editor.core :as recipe-editor]
   [rdd.reducers.recipe-editor-reducer :as rer]
   [rdd.db :as db]
   [rdd.hooks.use-item :refer [use-item]]
   [rdd.hooks.use-item-reducer :refer [use-item-reducer]]
   [rdd.hooks.use-dispatch :refer [use-dispatch]]
   [rdd.services.event-bus :refer [subscribe! publish!]]))

(defnc view
  [{:keys [product-name]}]
  (let [#_#_[item] (use-item product-name)
        #_#_[item dispatch] (hooks/use-reducer rer/reducer (db/item-by-name product-name))
        {:keys [state dispatch! builder]} (use-item-reducer product-name)
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

        update-quantity-handler (builder :update-quantity [product-name])
        update-recipe-line-item-uom (builder :update-recipe-line-item-uom [product-name])
        create-recipe-line-item-handler (builder :create-recipe-line-item [product-name])

        #_#_update-quantity-handler (use-dispatch :update-recipe-line-item-quantity [product-name])
        #_#_update-recipe-line-item-uom (use-dispatch :update-recipe-line-item-uom [product-name])
        #_#_create-recipe-line-item-handler (use-dispatch :create-recipe-line-item [product-name])
        #_#_update-quantity-handler (hooks/use-callback [product-name] (fn [recipe-line-item-id quantity]
                                                                         (dispatch {:type :update-quantity
                                                                                    :data {:recipe-line-item-id recipe-line-item-id
                                                                                           :quantity quantity
                                                                                           :product-name product-name}})))

        #_#_update-recipe-line-item-uom (hooks/use-callback [product-name] (fn [recipe-line-item-id uom-code]
                                                                             (dispatch {:type :update-recipe-line-item-uom
                                                                                        :data {:recipe-line-item-id recipe-line-item-id
                                                                                               :product-name product-name
                                                                                               :uom-code uom-code}})))

        #_#_create-recipe-line-item-handler (hooks/use-callback [product-name] (fn [parent-item-id new-item-id]
                                                                                 (dispatch {:type :create-recipe-line-item
                                                                                            :data {:product-name product-name
                                                                                                   :parent-item-id parent-item-id
                                                                                                   :new-item-id new-item-id}})))]

    #_(hooks/use-effect [product-name]
                        ((subscribe!
                          :remote-db-loaded
                          (fn [_]
                            (js/console.log "Dispatching remote db load")
                            (dispatch!
                             [:remote-db-loaded])))))



    ($ :div {:class "p-4"
             :onKeyDown handleKeyDown
             :onKeyUp handleKeyUp}
       ($ recipe-editor/Editor {:item item
                                :update-recipe-line-item-uom update-recipe-line-item-uom
                                :create-recipe-line-item-handler create-recipe-line-item-handler
                                :update-quantity-handler update-quantity-handler}))))
