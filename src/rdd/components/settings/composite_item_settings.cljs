(ns rdd.components.settings.composite-item-settings
  (:require ["@blueprintjs/core" :refer [Tab Tabs]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.forms.item-conversions-settings :as ItemConversionSettings]
            [rdd.components.forms.item-labor-settings :as ItemLaborSettings]
            [rdd.components.forms.item-yield-settings :refer [ItemYieldSettings]]
            [rdd.providers.item-provider :refer [use-item-state]]))

(defnc CompositeItemSettings
  [{:keys [item-uuid item-yield item-yield-uom]}]
  (let [[current-selected-index set-current-selected-index] (hooks/use-state "yield")
        [_ _ builder] (use-item-state)
        item-yield-changed-handler (builder :update-item-yield :once)
        item-yield-uom-changed-handler (builder :update-item-yield-uom :once)]
    (d/div {:class "p-4 border"}
           ($ Tabs {:id "settings"
                    :animate true
                    :selectedTabId current-selected-index
                    :onChange #(set-current-selected-index %)}
              ($ Tab {:id "yield"
                      :title "Yield"
                      :panel ($ ItemYieldSettings {:item-uuid item-uuid
                                                   :item-yield item-yield
                                                   :item-yield-uom item-yield-uom
                                                   :item-yield-changed-handler item-yield-changed-handler
                                                   :item-yield-uom-changed-handler item-yield-uom-changed-handler})})
              ($ Tab {:id "labor"
                      :title "Labor"
                      :panel ($ ItemLaborSettings/Core)})
              ($ Tab {:id "conversions"
                      :title "Conversions"
                      :panel ($ ItemConversionSettings/Core)})))))