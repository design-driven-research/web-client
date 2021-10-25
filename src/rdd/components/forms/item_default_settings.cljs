(ns rdd.components.forms.item-default-settings
  (:require [helix.core :refer [$]]
            [helix.hooks :as hooks]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.components.ui.uom-select :refer [UOMSelect]]
            [helix.dom :as d]))

(defnc ItemDefaultSettings
  [{:keys [item-uuid
           label
           item-yield-uom-code
           item-yield-uom-changed-handler
           uoms]}]

  (d/div {:class "item-quantity flex items-center"}
         (d/span {:class "mr-4"} label)
         ($ UOMSelect {:uoms uoms
                       :selected-uom-code item-yield-uom-code
                       :on-change item-yield-uom-changed-handler})))