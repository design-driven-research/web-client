(ns rdd.components.forms.create-company-item
  (:require [tilakone.core :as tk :refer [_]]
            [rdd.utils.fsm-utils :refer [states-lookup-table state-index-lookup-table]]
            [helix.hooks :as hooks]
            [clojure.spec.alpha :as s]
            [bangfe.infinite :as bi]
            ["@blueprintjs/core" :refer [Button
                                         InputGroup
                                         MenuItem
                                         DialogStep
                                         MultistepDialog
                                         Radio
                                         RadioGroup]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]))


(s/def ::string string?)

(def states [{::bi/id :select-vendor
              ::bi/fields [{::bi/id :company/uuid
                            ::bi/spec ::string}]
              :label "Select vendor"}
             {::bi/id :edit-info
              ::bi/fields [{::bi/id :info/name
                            ::bi/spec ::string}
                           {::bi/id :info/description}]
              :label "Edit item info"}])

(defnc CreateNewCompanyItem
  []
  (let [;; Local state
        [fsm set-fsm!] (hooks/use-state {::bi/states states
                                         ::bi/state :select-vendor})

        ;; Extracted values
        states (::bi/states fsm)
        current-state-id (::bi/state fsm)

        ;; Derived values
        {:keys [state]} (bi/state-info fsm current-state-id)]

    (d/div
     (for [state states]
       ($ MenuItem {:key (::bi/id state)
                    :text (:label state)}))
     #_($ MultistepDialog {:title "Create vendor item"
                           :icon "info-sign"
                           :isOpen is-open?
                           :initialStepIndex starting-state-index}

          (for [step [{:id :edit-info
                       :title "Select item type"
                       :panel (d/div {:class "p-4"}
                                     (d/span {:class ""}
                                             "Create")

                                     ($ RadioGroup {:className "mt-4"
                                                    :onChange (fn [e] (js/console.log e))
                                                    :selectedValue "purchase"}
                                        ($ Radio {:label "We make this"
                                                  :value "make"})
                                        ($ Radio {:label "We purchase this"
                                                  :value "purchase"})))}]]
            ($ DialogStep {:id (:id step)
                           :title (:title step)
                           :panel (:panel step)}))))))


;; :default
;; :selected-vendor
;; :selected-vendor.create
;; :edit-info
;; :edit-pricing
;; :edit-usage
;; :edit-usage.create-uom
;; :edit-conversions
;; :edit-conversions.create-uom
;; :finalalize