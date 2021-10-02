(ns rdd.components.ui.quantity-editor
  (:require ["@blueprintjs/core" :refer [NumericInput]]
            [rdd.utils.debounce :refer [debounce]]
            [helix.hooks :as hooks]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]))

(defnc QuantityEditor
  "Recipe line item controls. Used to set all recipe line item level settings, qty, company-item etc."
  [{:keys [label
           uuid
           qty
           uom-code
           options
           on-quantity-changed
           on-uom-changed]}]
  (let [quantity-changed-debounced (hooks/use-callback [uuid] (debounce
                                                               #(on-quantity-changed {:uuid uuid
                                                                                      :quantity %})
                                                               1000))]
    (d/div {:class "item-quantity flex items-center"}
           (d/div {:class "flex items-center"}
                  (d/span {:class "mr-4"} label)
                  ($ NumericInput {:defaultValue qty
                                   :allowNumericCharactersOnly true
                                   :clampValueOnBlur true
                                   :minorStepSize 0.01
                                   :min 0
                                   :small true
                                   :onValueChange quantity-changed-debounced})

                  (d/div {:class "ml-2"}
                         ($ SimpleSelect {:value uom-code
                                          :on-selected #(on-uom-changed {:uuid uuid
                                                                         :uom (:uom-code %)})
                                          :options options}))))))


