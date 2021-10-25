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
        item-yield-uom-code (-> rli :recipe-line-item/child-item :item/yield-uom-code)
        [current-selected-index set-current-selected-index] (hooks/use-state "settings")
        [state _ builder] (use-item-state)

        uoms (:uoms state)

        item-yield-uom-changed-handler (builder :update-item-yield-uom :once)

        item-yield-uom-changed-handler-wrapper (hooks/use-callback [uoms item-yield-uom-code]
                                                                   (fn [item-uuid uom-uuid]
                                                                     (item-yield-uom-changed-handler {:item-uuid item-uuid
                                                                                                      :uom-uuid uom-uuid})))]


    (d/div {:class "p-4"}
           ($ Tabs {:id "settings"
                    :animate true
                    :selectedTabId current-selected-index
                    :onChange #(set-current-selected-index %)}
              ($ Tab {:id "settings"
                      :title "Settings"
                      :panel ($ ItemDefaultSettings {:label "Default UOM"
                                                     :item-uuid item-uuid
                                                     :item-yield-uom-code item-yield-uom-code
                                                     :item-yield-uom-changed-handler (partial item-yield-uom-changed-handler-wrapper item-uuid)
                                                     :uoms uoms})})

              ($ Tab {:id "conversions"
                      :title "Conversions"
                      :panel ($ ItemConversionSettings/Core)})))))