(ns rdd.components.forms.item-yield-settings
  (:require ["@blueprintjs/core" :refer [InputGroup]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [rdd.components.recipe.recipe-editor.rows.atomic-item.core]
            [rdd.components.recipe.recipe-editor.rows.composite-item.tool-bar]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.converters.uom]))

(defnc Core
  [{:keys [item-uuid
           item-yield
           item-yield-uom
           item-yield-changed-handler
           item-yield-uom-changed-handler]}]

  (d/div {:class "item-quantity flex items-center"}
         (d/div {:class "flex items-center"}
                (d/span {:class "mr-4"} "Qty")
                ($ InputGroup {:value item-yield
                               :small true
                               :onChange #(item-yield-changed-handler {:uuid item-uuid
                                                                       :yield (.. % -target -value)})})

                ($ SimpleSelect {:value item-yield-uom
                                 :on-selected #(item-yield-uom-changed-handler {:uuid item-uuid
                                                                                :uom (:title %)})
                                 :options [{:title "gr"}
                                           {:title "lb"}]}))))



