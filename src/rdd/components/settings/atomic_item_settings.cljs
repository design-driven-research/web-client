(ns rdd.components.settings.atomic-item-settings
  (:require ["@blueprintjs/core" :refer [Tab Tabs]]
            [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.forms.item-conversions-settings :as ItemConversionSettings]
            [rdd.components.forms.item-default-settings :refer [ItemDefaultSettings]]
            [rdd.providers.item-provider :refer [use-item-state]]))

(defnc AtomicItemSettings
  [{:keys [rli]}]
  (let [item-uuid (-> rli :recipe-line-item/child-item :item/uuid)
        item-yield-uom (or (-> rli :recipe-line-item/child-item :item/yield)
                           (-> rli :recipe-line-item/child-item :item/uom))
        [current-selected-index set-current-selected-index] (hooks/use-state "settings")
        [_ _ builder] (use-item-state)
        item-yield-uom-changed-handler (builder :update-item-yield-uom :once)]
    (d/div {:class "p-4 border"}
           ($ Tabs {:id "settings"
                    :animate true
                    :selectedTabId current-selected-index
                    :onChange #(set-current-selected-index %)}
              ($ Tab {:id "settings"
                      :title "Settings"
                      :panel ($ ItemDefaultSettings {:label "Default UOM"
                                                     :item-uuid item-uuid
                                                     :item-yield-uom item-yield-uom
                                                     :item-yield-uom-changed-handler item-yield-uom-changed-handler})})

              ($ Tab {:id "conversions"
                      :title "Conversions"
                      :panel ($ ItemConversionSettings/Core)})))))