(ns rdd.components.settings.composite-item-settings
  (:require ["@blueprintjs/core" :refer [Tab Tabs]]
            [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.forms.item-conversions-settings :as ItemConversionSettings]
            [rdd.components.forms.item-labor-settings :as ItemLaborSettings]
            [rdd.components.forms.item-yield-settings :refer [ItemYieldSettings]]
            [rdd.providers.item-provider :refer [use-item-state]]))

(defnc CompositeItemSettings
  [{:keys [rli]}]
  (tap> rli)
  (let [item-uuid (-> rli :recipe-line-item/child-item :item/uuid)
        item-yield (-> rli :recipe-line-item/child-item :item/yield)
        item-yield-uom-code (-> rli :recipe-line-item/child-item :item/yield-uom-code)
        [current-selected-index set-current-selected-index] (hooks/use-state "yield")
        [state _ builder] (use-item-state)

        uoms (:uoms state)
        item-yield-changed-handler (builder :update-item-yield :once)
        item-yield-uom-changed-handler (builder :update-item-yield-uom :once)


        update-yield-handler (hooks/use-callback [item-uuid] (fn [item-uuid yield]
                                                               (item-yield-changed-handler {:item-uuid item-uuid
                                                                                            :item-yield yield})))

        update-yield-uom-handler (hooks/use-callback [item-uuid] (fn [item-uuid uom-uuid]
                                                                   (item-yield-uom-changed-handler {:item-uuid item-uuid
                                                                                                    :uom-uuid uom-uuid})))]
    (d/div {:class "p-4 border"}
           ($ Tabs {:id "settings"
                    :animate true
                    :selectedTabId current-selected-index
                    :onChange #(set-current-selected-index %)}
              ($ Tab {:id "yield"
                      :title "Yield"
                      :panel ($ ItemYieldSettings {:item-uuid item-uuid
                                                   :uoms uoms
                                                   :item-yield item-yield
                                                   :item-yield-uom-code item-yield-uom-code
                                                   :item-yield-changed-handler (partial update-yield-handler item-uuid)
                                                   :item-yield-uom-changed-handler (partial update-yield-uom-handler item-uuid)})})
              ($ Tab {:id "labor"
                      :title "Labor"
                      :panel ($ ItemLaborSettings/Core)})
              ($ Tab {:id "conversions"
                      :title "Conversions"
                      :panel ($ ItemConversionSettings/Core)})))))

