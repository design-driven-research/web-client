(ns rdd.components.dialogs.create-item-dialog
  (:require ["@blueprintjs/core" :refer [Button
                                         Menu
                                         MenuItem
                                         MultistepDialog
                                         DialogStep
                                         RadioGroup
                                         Radio]]
            ["@blueprintjs/popover2" :refer [Popover2]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]))

(defnc CreateNewIngredientDialog []
  (d/div {}
         ($ MultistepDialog {:title "Create new item"
                             :icon "info-sign"
                             :isOpen true}
            ($ DialogStep {:id "choose-type"
                           :title "Select item type"
                           :panel (d/div {:class "p-4"}
                                         (d/span {:class ""}
                                                 "Select the type of item. Is this something you make inhouse or purchase ready made?")
                                         ($ RadioGroup {:className "mt-4"
                                                        :onChange (fn [e] (js/console.log e))
                                                        :selectedValue "purchase"}
                                            ($ Radio {:label "We make this"
                                                      :value "make"})
                                            ($ Radio {:label "We purchase this"
                                                      :value "purchase"})))}))))