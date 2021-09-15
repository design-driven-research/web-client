(ns rdd.components.recipe.recipe-editor.core
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            ["antd" :refer [Input Select]]))
(def Option (. Select -Option))

(defnc item-controls
  [{:keys [update-quantity-handler]
    {:keys [name quantity edge-id total-cost]} :node}]
  (d/div {:class "flex w-5/12 items-center space-between"}
         (d/span {:class "w-6/12"} (str name " - " total-cost))
         (d/div {:class "w-6/12"}
                ($ Input {:className ""
                          :value quantity
                          :onChange #(update-quantity-handler edge-id (.. % -target -value))
                          :addonAfter ($ Select {:className "select-after" :defaultValue "gram"}
                                         ($ Option {:value "lb"} "lb")
                                         ($ Option {:value "kg"} "kg"))}))))

(defnc item
  [{:keys [node update-name-handler update-quantity-handler]
    {:keys [children]} :node}]

  {:wrap [(helix.core/memo =)]}

  (d/div {:class "ml-4"}
         ($ item-controls {:node node
                           :update-name-handler update-name-handler
                           :update-quantity-handler update-quantity-handler})
         (d/div {:class "mt-2"}
                (d/div
                 (for [{:keys [id] :as child} children]
                   ($ rdd.components.recipe.recipe-editor.core/item
                      {:key id
                       :node child
                       :update-quantity-handler update-quantity-handler
                       :update-name-handler update-name-handler}))))))
