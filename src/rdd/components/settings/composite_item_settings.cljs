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
  [{:keys [rli]}]
  (let [item-uuid (-> rli :recipe-line-item/child-item :item/uuid)
        item-yield (-> rli :recipe-line-item/child-item :item/yield)
        item-yield-uom (-> rli :recipe-line-item/child-item :item/yield-uom)
        [current-selected-index set-current-selected-index] (hooks/use-state "yield")
        [_ _ builder] (use-item-state)
        item-yield-changed-handler (builder :update-item-yield :once)
        item-yield-uom-changed-handler (builder :update-item-yield-uom :once)


        update-yield-handler (hooks/use-callback [item-uuid] (fn [{:keys [quantity]}]
                                                               (item-yield-changed-handler {:uuid item-uuid
                                                                                            :quantity quantity})))

        update-yield-uom-handler (hooks/use-callback [item-uuid] (fn [{:keys [uom-code]}]
                                                                   (item-yield-uom-changed-handler {:uuid item-uuid
                                                                                                    :uom-code uom-code})))]
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
                                                   :item-yield-changed-handler update-yield-handler
                                                   :item-yield-uom-changed-handler update-yield-uom-handler})})
              ($ Tab {:id "labor"
                      :title "Labor"
                      :panel ($ ItemLaborSettings/Core)})
              ($ Tab {:id "conversions"
                      :title "Conversions"
                      :panel ($ ItemConversionSettings/Core)})))))

