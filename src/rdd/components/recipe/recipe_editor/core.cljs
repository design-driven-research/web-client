(ns rdd.components.recipe.recipe-editor.core
  (:require [helix.core :refer [$ defnc]]
            [rdd.utils.for-indexed :refer [for-indexed]]
            [helix.hooks :as hooks]
            ["@ant-design/icons" :refer [DownOutlined RightOutlined]]
            [helix.dom :as d]
            ["antd" :refer [Input Select Button Collapse]]))

(def Option (. Select -Option))
(def Panel (. Collapse -Panel))

(declare Item Children)

(defnc Editor
  [{:keys [item
           update-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item-handler]
    {:keys [children]} :item}]

  (let [has-children? (seq children)]
    (d/div {:class "mt-2 w-5/12"}
           (when has-children?
             ($ rdd.components.recipe.recipe-editor.core/Children {:item item
                                                                   :update-quantity-handler update-quantity-handler
                                                                   :update-recipe-line-item-uom update-recipe-line-item-uom
                                                                   :create-recipe-line-item-handler create-recipe-line-item-handler})))))

(defnc UsageControls
  [{:keys [quantity
           recipe-line-item-id
           update-quantity-handler
           update-recipe-line-item-uom
           uom]}]
  (d/div {:class "item-quantity w-6/12 flex"}
         (d/div {:class "mr-2"}
                ($ Input {:value quantity
                          :size "small"
                          :onChange #(update-quantity-handler recipe-line-item-id (.. % -target -value))}))
         ($ Select {:value uom
                    :size "small"
                    :onChange #(update-recipe-line-item-uom recipe-line-item-id %)}
            ($ Option {:value "lb"} "lb")
            ($ Option {:value "gr"} "gr")
            ($ Option {:value "ea"} "ea")
            ($ Option {:value "kg"} "kg"))))

(defnc Item
  [{:keys [item
           index
           update-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item-handler]
    {:keys [id name quantity recipe-line-item-id uom total-cost children]} :item}]


  ;; Wrap this to force memo to use equility instead of identical. It's slower to check but stops rerenders
  {:wrap [(helix.core/memo =)]}

  (let [[is-open? set-open-state] (hooks/use-state true)
        has-children? (seq children)]

    (d/div {:class "item-wrapper flex flex-col"}
           (d/div {:class "item-header-wrapper flex w-full mt-2 border "}
                  (when has-children?
                    (d/div {:class "border-r p-2 cursor-pointer"
                            :onClick (fn []
                                       (set-open-state (not is-open?)))}
                           (if is-open?
                             ($ DownOutlined)
                             ($ RightOutlined))))
                  (d/div {:class "flex items-center space-between w-full p-2"}
                         (d/div {:class "item-info flex w-full items-center"}
                                (d/div {:class "flex w-5/12"}
                                       ($ :span {:class "w-2/12"} (str index "."))
                                       ($ :span {:class "w-10/12"} name)))
                         ($ UsageControls {:update-quantity-handler update-quantity-handler
                                           :update-recipe-line-item-uom update-recipe-line-item-uom
                                           :recipe-line-item-id recipe-line-item-id
                                           :quantity quantity
                                           :uom uom})))


           (when (and has-children?
                      is-open?)
             ($ rdd.components.recipe.recipe-editor.core/Children {:item item
                                                                   :update-quantity-handler update-quantity-handler
                                                                   :update-recipe-line-item-uom update-recipe-line-item-uom
                                                                   :create-recipe-line-item-handler create-recipe-line-item-handler})))))




(defnc Children
  [{:keys [update-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item-handler]
    {:keys [children]} :item}]

  (d/div {:class "flex h-full"}
         (d/div {:class "w-8 h-full"}
                (d/div {:class "border-l border-dashed h-full my-2 ml-4"}))
         (d/div {:class "flex flex-col w-full"}
                (for-indexed [child index children]
                             ($ rdd.components.recipe.recipe-editor.core/Item
                                {:key (:id child)
                                 :index (inc index)
                                 :item child
                                 :create-recipe-line-item-handler create-recipe-line-item-handler
                                 :update-recipe-line-item-uom update-recipe-line-item-uom
                                 :update-quantity-handler update-quantity-handler})))))





;; ($ Button {:className "mr-2"
;;            :type "primary"
;;            :onClick (fn []
;;                       (create-recipe-line-item-handler id 17))} "Add item")