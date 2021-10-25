(ns rdd.components.ui.quantity-editor
  (:require ["@blueprintjs/core" :refer [NumericInput]]
            [rdd.utils.debounce :refer [debounce]]
            [helix.hooks :as hooks]
            [helix.core :refer [$]]
            [rdd.components.ui.uom-select :refer [UOMSelect]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(defnc QuantityEditor
  "Quantity & uom control."
  [{:keys [label
           qty
           uoms
           selected-uom-code
           on-quantity-changed
           on-uom-changed]}]

  (let [[local-qty set-local-qty!] (hooks/use-state qty)
        quantity-changed-debounced (hooks/use-callback :once (debounce
                                                              #(on-quantity-changed %)
                                                              1000))

        on-local-qty-changed (hooks/use-callback :once (fn [qty qty-str] (set-local-qty! qty-str)
                                                         (quantity-changed-debounced qty)))]


    (hooks/use-effect [qty] (set-local-qty! qty))

    (d/div {:class "flex items-center"}
           (d/span {:class "mr-4"} label)
           (d/div {:class " w-7/12"}
                  ($ NumericInput {:value local-qty
                                   :allowNumericCharactersOnly false
                                   :clampValueOnBlur true
                                   :fill true
                                   :minorStepSize 0.01
                                   :min 0
                                   :small true
                                   :onValueChange on-local-qty-changed}))

           (d/div {:class "ml-2 w-3/12"}
                  ($ UOMSelect {:uoms uoms
                                :selected-uom-code selected-uom-code
                                :on-change on-uom-changed})))))