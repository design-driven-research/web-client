(ns rdd.components.recipe.recipe-editor.rows.composite-item.tool-bar
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [applied-science.js-interop :as j]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [helix.core :refer [$ defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.converters.uom]

            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]))

(defnc Core
  "Recipe line item controls. Used to set all recipe line item level settings, qty, company-item etc."
  [{:keys [recipe-line-item-quantity
           item-yield
           recipe-line-item-uuid
           item-yield-uom
           recipe-line-item-quantity-uom]}]

  (let [[_ _ builder] (use-item-state)
        recipe-line-item-quantity-uom-selected-handler (builder
                                                        :update-recipe-line-item-quantity-uom
                                                        :once)

        update-recipe-line-item-quantity-handler (builder
                                                  :update-recipe-line-item-quantity
                                                  :once)]

    (d/div {:class "item-quantity flex items-center"}
           (d/div {:class "flex items-center"}
                  (d/span {:class "mr-4"} "Qty")
                  ($ InputGroup {:value recipe-line-item-quantity
                                 :small true
                                 :onChange #(update-recipe-line-item-quantity-handler {:uuid recipe-line-item-uuid
                                                                                       :quantity (.. % -target -value)})})

                  ($ SimpleSelect {:value recipe-line-item-quantity-uom
                                   :on-selected #(recipe-line-item-quantity-uom-selected-handler {:uuid recipe-line-item-uuid
                                                                                                  :uom (:title %)})
                                   :options [{:title "gr"}
                                             {:title "lb"}]})))))