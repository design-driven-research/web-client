(ns rdd.components.forms.item-yield-settings
  (:require [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.dom :as d]
            [rdd.components.ui.quantity-editor :refer [QuantityEditor]]))

(defnc ItemYieldSettings
  [{:keys [item-yield
           item-yield-uom
           item-yield-changed-handler
           item-yield-uom-changed-handler]}]

  (d/div {:class "item-quantity flex items-center"}
         ($ QuantityEditor {:label "Yield"
                            :qty item-yield
                            :uom-code item-yield-uom
                            :options [{:title "gr"
                                       :uom-code "gr"}
                                      {:title "lb"
                                       :uom-code "lb"}]
                            :on-quantity-changed item-yield-changed-handler
                            :on-uom-changed item-yield-uom-changed-handler})))



