(ns rdd.components.recipe.recipe-editor.core
  (:require [helix.core :refer [$ defnc]]
            ["@ant-design/icons" :refer [DownloadOutlined]]

            [helix.dom :as d]
            ["antd" :refer [Input Select Button]]))
(def Option (. Select -Option))

(defnc item-controls
  [{:keys [update-quantity-handler
           create-recipe-line-item-handler]
    {:keys [id name quantity recipe-line-item-id total-cost]} :item :as item}]
  (d/div {:class "flex w-5/12 items-center space-between"}
         ($ Button {:className "mr-2"
                    :type "primary"
                    :onClick (fn []
                               (create-recipe-line-item-handler id 17))} "Add item")

         (d/span {:class "w-6/12"} (str name " - " total-cost " - " id))
         (d/div {:class "w-6/12"}
                ($ Input {:className ""
                          :value quantity
                          :onChange #(update-quantity-handler recipe-line-item-id (.. % -target -value))
                          :addonAfter ($ Select {:className "select-after" :defaultValue "gram"}
                                         ($ Option {:value "lb"} "lb")
                                         ($ Option {:value "kg"} "kg"))}))))

(defnc item
  [{:keys [item
           update-quantity-handler
           create-recipe-line-item-handler]
    {:keys [children]} :item}]

  ;; Wrap this to force memo to use equility instead of identical. It's slower to check but stops rerenders
  {:wrap [(helix.core/memo =)]}

  (d/div {:class "ml-4"}
         ($ item-controls {:item item
                           :create-recipe-line-item-handler create-recipe-line-item-handler
                           :update-quantity-handler update-quantity-handler})
         (d/div {:class "mt-2"}
                (d/div
                 (for [{:keys [id] :as child} children]
                   ($ rdd.components.recipe.recipe-editor.core/item
                      {:key id
                       :item child
                       :create-recipe-line-item-handler create-recipe-line-item-handler
                       :update-quantity-handler update-quantity-handler}))))))
