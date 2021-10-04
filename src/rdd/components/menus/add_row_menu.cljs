(ns rdd.components.menus.add-row-menu
  (:require ["@blueprintjs/core" :refer [Button Menu MenuItem]]
            ["@blueprintjs/popover2" :refer [Popover2]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]))

(defnc AddRowMenu
  [{:keys [on-add-row-below
           on-add-row-inside]}]
  (d/div {:class "h-full"}
         ($ Popover2 {:placement "bottom-start"
                      :content (d/div {:class "border"}
                                      ($ Menu
                                         ($ MenuItem {:key "inside"
                                                      :icon "inheritance"
                                                      :text "Add new row inside"
                                                      :onClick on-add-row-inside})
                                         ($ MenuItem {:key "below"
                                                      :icon "add-row-bottom"
                                                      :text "Add new row below"
                                                      :onClick on-add-row-below})))}

            ($ Button {:outlined true
                       :minimal true
                       :icon "plus"}))))