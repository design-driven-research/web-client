(ns rdd.components.forms.item-yield-settings
  (:require [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.dom :as d]
            [rdd.components.ui.quantity-editor :refer [QuantityEditor]]))

(defnc ItemYieldSettings
  [{:keys [item-yield
           item-yield-uom-code
           item-yield-changed-handler
           item-yield-uom-changed-handler
           uoms]}]

  (d/div {:class "item-quantity flex items-center"}
         ($ QuantityEditor {:label "Yield"
                            :qty item-yield
                            :selected-uom-code item-yield-uom-code
                            :uoms uoms
                            :on-quantity-changed item-yield-changed-handler
                            :on-uom-changed item-yield-uom-changed-handler})))



