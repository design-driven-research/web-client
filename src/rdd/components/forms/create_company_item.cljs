(ns rdd.components.forms.create-company-item
  (:require [tilakone.core :as tk :refer [_]]
            [rdd.utils.fsm-utils :refer [states-lookup-table state-index-lookup-table]]
            [helix.hooks :as hooks]
            ["@blueprintjs/core" :refer [DialogStep MultistepDialog Radio RadioGroup Button]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]))

(def main-form-state [{::tk/name        :edit-info
                       ::tk/transitions [{::tk/on :SUBMIT
                                          ::tk/to :selected-vendor}]}

                      {::tk/name        :selected-vendor
                       ::tk/transitions [{::tk/on :SUBMIT
                                          ::tk/to :edit-pricing}]}

                      {::tk/name        :edit-pricing
                       ::tk/transitions [{::tk/on :SUBMIT
                                          ::tk/to :edit-usage}]}

                      {::tk/name        :edit-usage
                       ::tk/transitions [{::tk/on :SUBMIT
                                          ::tk/to :edit-conversions}]}

                      {::tk/name        :edit-conversions
                       ::tk/transitions [{::tk/on :SUBMIT
                                          ::tk/to :finalalize}]}

                      {::tk/name        :finalalize}])



(defnc CreateNewCompanyItem
  []
  (let [;; Local state
        [fsm set-fsm!] (hooks/use-state {::tk/states main-form-state
                                         ::tk/state :edit-info
                                         :context {:item {:uuid "abc"
                                                          :name "Salt"
                                                          :default-uom "gr"}
                                                   :rli {:uuid "rli-uuid"}
                                                   :company {:uuid "company-uuid"
                                                             :name "ABC Company"}}})

        ;; Extracted values
        current-state (::tk/state fsm)

        ;; Derived values
        states-lookup (states-lookup-table (-> fsm ::tk/states))
        states-index-lookup (state-index-lookup-table (-> fsm ::tk/states))
        starting-state-index (current-state states-index-lookup)
        is-open? (not (= current-state :default))]

    (d/div
     ($ MultistepDialog {:title "Create vendor item"
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