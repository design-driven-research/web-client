(ns rdd.components.ui.quantity-editor
  (:require ["@blueprintjs/core" :refer [NumericInput]]
            [rdd.utils.debounce :refer [debounce]]
            [helix.hooks :as hooks]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]))

(defnc QuantityEditor
  "Quantity & uom control."
  [{:keys [label
           qty
           uom-code
           options
           on-quantity-changed
           on-uom-changed]}]
  (let [[local-qty set-local-qty!] (hooks/use-state qty)
        quantity-changed-debounced (hooks/use-callback :once (debounce
                                                              #(on-quantity-changed {:quantity %})
                                                              1000))

        on-local-qty-changed (hooks/use-callback :once (fn [qty qty-str] (set-local-qty! qty-str)
                                                         (quantity-changed-debounced qty)))]


    (hooks/use-effect [qty] (set-local-qty! qty))

    (d/div {:class "item-quantity flex items-center"}
           (d/div {:class "flex items-center"}
                  (d/span {:class "mr-4"} label)
                  ($ NumericInput {:value local-qty
                                   :allowNumericCharactersOnly false
                                   :clampValueOnBlur true
                                   :minorStepSize 0.01
                                   :min 0
                                   :small true
                                   :onValueChange on-local-qty-changed})

                  (d/div {:class "ml-2"}
                         ($ SimpleSelect {:value uom-code
                                          :on-existing-selected #(on-uom-changed {:uom-code (:uom-code %)})
                                          :options options}))))))


