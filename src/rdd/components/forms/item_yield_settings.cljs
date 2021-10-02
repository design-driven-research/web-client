(ns rdd.components.forms.item-yield-settings
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem Tab Tabs]]
            ["@blueprintjs/select" :refer [Select]]

            [applied-science.js-interop :as j]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.components.recipe.recipe-editor.rows.atomic-item.core]
            [rdd.components.recipe.recipe-editor.rows.composite-item.tool-bar]
            [helix.core :refer [$ defnc]]
            [rdd.converters.uom]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]))

(defnc Core
  [{:keys [item-yield
           item-yield-uom
           recipe-line-item-uuid
           item-yield-quantity-changed-handler
           item-yield-uom-changed-handler]}]

  (d/div {:class "item-quantity flex items-center"}
         (d/div {:class "flex items-center"}
                (d/span {:class "mr-4"} "Qty")
                ($ InputGroup {:value item-yield
                               :small true
                               :onChange #(item-yield-quantity-changed-handler {:uuid recipe-line-item-uuid
                                                                                :quantity (.. % -target -value)})})

                ($ SimpleSelect {:value item-yield-uom
                                 :on-selected #(item-yield-uom-changed-handler {:uuid recipe-line-item-uuid
                                                                                :uom (:title %)})
                                 :options [{:title "gr"}
                                           {:title "lb"}]})))

  #_(d/div {:class "recipe-yield flex mt-2"}
           (d/span "Yield: ")
           #_($ InputGroup {:value item-yield
                            :small true
                            :onChange #(update-recipe-line-item-quantity-handler recipe-line-item-uuid (.. % -target -value))})

           ($ SimpleSelect {:on-selected on-uom-selected
                            :value "gr"
                            :options [{:title "gr"}
                                      {:title "lb"}]})))



