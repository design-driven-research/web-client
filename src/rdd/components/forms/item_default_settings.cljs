(ns rdd.components.forms.item-default-settings
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]))

(defnc ItemDefaultSettings
  [{:keys [item-uuid
           label
           item-yield-uom
           item-yield-uom-changed-handler]}]

  (d/div {:class "item-quantity flex items-center"}
         (d/span {:class "mr-4"} label)
         ($ SimpleSelect {:value item-yield-uom
                          :on-existing-selected #(item-yield-uom-changed-handler {:uuid item-uuid
                                                                                  :uom (:uom-code %)})
                          :options [{:title "gr"
                                     :uom-code "gr"}
                                    {:title "lb"
                                     :uom-code "lb"}]})))