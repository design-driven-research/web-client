(ns rdd.components.dialogs.create-item-dialog
  (:require ["@blueprintjs/core" :refer [DialogStep MultistepDialog Radio RadioGroup]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]))

(defnc CreateNewIngredientDialog
  [{:keys [is-open?
           start-value
           handle-create-item-submit]}]
  ($ MultistepDialog {:title (str "Create new item " start-value)
                      :icon "info-sign"
                      :finalButtonProps (clj->js {:onClick (fn [] (handle-create-item-submit {:item-type :production.type/ATOM
                                                                                              :item-name start-value}))})
                      :isOpen is-open?}
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
                                               :value "purchase"})))})))