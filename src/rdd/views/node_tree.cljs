(ns rdd.views.node-tree
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            ["antd" :refer [Input Select]]))
(def Option (. Select -Option))

(defnc node-form
  [{:keys [update-name-handler update-quantity-handler]
    {:keys [name quantity edge-id total-cost]} :node :as node}]
  (tap> node)
  (d/div {:class "flex w-5/12 items-center space-between"}
         (d/span {:class "w-6/12"} (str name " - " total-cost))
         (d/div {:class "w-6/12"}
                ($ Input {:className ""
                          :value quantity
                          :onChange #(update-quantity-handler edge-id (.. % -target -value))
                          :addonAfter ($ Select {:className "select-after" :defaultValue "gram"}
                                         ($ Option {:value "lb"} "lb")
                                         ($ Option {:value "kg"} "kg"))}))))

(defnc node-view
  [{:keys [node update-name-handler update-quantity-handler]
    {:keys [children]} :node}]

  {:wrap [(helix.core/memo =)]}

  (d/div {:class "ml-4"}
         ($ node-form {:node node
                       :update-name-handler update-name-handler
                       :update-quantity-handler update-quantity-handler})
         (d/div {:class "mt-2"}
                (d/div
                 (for [{:keys [id] :as child} children]
                   ($ rdd.views.node-tree/node-view
                      {:key id
                       :node child
                       :update-quantity-handler update-quantity-handler
                       :update-name-handler update-name-handler}))))))