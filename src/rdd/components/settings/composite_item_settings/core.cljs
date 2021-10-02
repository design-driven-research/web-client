(ns rdd.components.settings.composite-item-settings.core
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem Tab Tabs]]
            ["@blueprintjs/select" :refer [Select]]

            [applied-science.js-interop :as j]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.components.recipe.recipe-editor.rows.atomic-item.core]
            [rdd.components.recipe.recipe-editor.rows.composite-item.tool-bar]
            [rdd.components.forms.item-yield-settings :as ItemYieldSettings]
            [rdd.components.forms.item-labor-settings :as ItemLaborSettings]
            [rdd.components.forms.item-conversions-settings :as ItemConversionSettings]
            [helix.core :refer [$ defnc]]
            [rdd.converters.uom]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]))


(defnc Core
  [{:as args
    :keys [item-uuid item-yield item-yield-uom]}]
  (tap> {:args args})
  (let [[current-selected-index set-current-selected-index] (hooks/use-state "yield")
        [_ _ builder] (use-item-state)
        item-yield-changed-handler (builder
                                    :update-item-yield
                                    :once)

        item-yield-uom-changed-handler (builder
                                        :update-item-yield-uom
                                        :once)]
    (d/div {:class "p-4 border"}
           ($ Tabs {:id "settings"
                    :animate true
                    :selectedTabId current-selected-index
                    :onChange #(set-current-selected-index %)}
              ($ Tab {:id "yield"
                      :title "Yield"
                      :panel ($ ItemYieldSettings/Core {:item-uuid item-uuid
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