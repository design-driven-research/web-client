(ns rdd.components.menus.recipe-line-item-settings-menu
  (:require ["@blueprintjs/core" :refer [Button Menu MenuItem]]
            ["@blueprintjs/popover2" :refer [Popover2]]
            [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(defnc RecipeLineItemSettingsMenu
  [{:keys [open-settings-panel!
           toggle-detailed-info!
           delete-row!]}]
  (d/div {:class "w-8"}
         ($ Popover2 {:placement "bottom-start"
                      :usePortal false
                      :content (d/div {:class "border"}
                                      ($ Menu
                                         ($ MenuItem {:key "settings"
                                                      :icon "cog"
                                                      :text "Settings"
                                                      :onClick open-settings-panel!})
                                         ($ MenuItem {:key "recipe-info"
                                                      :icon "info-sign"
                                                      :text "Line item details"
                                                      :onClick toggle-detailed-info!})
                                         ($ MenuItem {:key "delete"
                                                      :icon "delete"
                                                      :text "Delete"
                                                      :onClick delete-row!})))}

            ($ Button {:outlined true
                       :minimal true
                       :icon "more"}))))
