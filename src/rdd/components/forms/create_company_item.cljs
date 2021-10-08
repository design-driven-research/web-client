(ns rdd.components.forms.create-company-item
  (:require [tilakone.core :as tk :refer [_]]
            [rdd.utils.css-utils :refer [get-class]]
            [rdd.utils.fsm-utils :refer [states-lookup-table state-index-lookup-table]]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]
            [applied-science.js-interop :as j]
            [clojure.spec.alpha :as s]
            [bangfe.infinite :as bi]
            ["@blueprintjs/core" :refer [Button
                                         InputGroup
                                         Dialog
                                         MenuItem
                                         Classes
                                         H5
                                         Intent
                                         DialogStep
                                         MultistepDialog
                                         FormGroup
                                         InputGroup
                                         Radio
                                         RadioGroup]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]))

(s/def ::string string?)

(def states [{::bi/id :select-vendor
              ::bi/fields [{::bi/id :company/name
                            ::bi/spec ::string}
                           {::bi/id :company/uuid
                            ::bi/spec ::string}]
              :label "Select vendor"}
             {::bi/id :edit-info
              ::bi/fields [{::bi/id :info/name
                            ::bi/spec ::string}
                           {::bi/id :info/description}]
              :label "Edit item info"}])

(defnc EditInfoForm
  []
  (d/div
   ($ FormGroup {:helperText "Helper text"
                 :label "Edit info (Required)"}
      ($ InputGroup {:id "text-input"
                     :placeholder "Enter item name"}))

   ($ Button {:intent "primary"
              :text "Create"})))

(defnc SelectVendorForm
  [{:keys [state-info
           on-vendor-name-changed]}]
  (let [context (:context state-info)]
    (tap> {:context context})
    (d/div
     ($ FormGroup {:helperText "Helper text"
                   :label "New vendor (Required)"}
        ($ InputGroup {:id "text-input"
                       :onChange on-vendor-name-changed
                       :placeholder "Enter ventor name"}))

     ($ Button {:intent "primary"
                :text "Create"}))))

(defnc CreateNewCompanyItem
  []
  (let [;; Local state
        [fsm set-fsm!] (hooks/use-state {::bi/states states
                                         ::bi/state :select-vendor})

        ;; Extracted values
        states (::bi/states fsm)
        current-state-id (::bi/state fsm)

        ;; Derived values
        state-info (bi/state-info fsm current-state-id)
        {:keys [state context]} state-info

        ;; Callbacks
        on-vendor-name-changed (hooks/use-callback :once (fn [e]
                                                           (let [val (j/get-in e [:target :value])]
                                                             (set-fsm! (bi/update-context! fsm :select-vendor {:company/name val})))))]

    ($ Dialog {:style (clj->js {:padding-bottom "0"
                                :min-width "800px"})
               :isOpen true
               :title "Create New Vendor Item"}
       (d/div {:class (get-class :MULTISTEP_DIALOG_PANELS)}
              (d/div {:class (get-class :MULTISTEP_DIALOG_LEFT_PANEL)}
                     (for-indexed [state idx states]
                                  (let [is-active? (= current-state-id (::bi/id state))]
                                    (d/div {:key (::bi/id state)
                                            :class (str "bp3-dialog-step-container" " " (when is-active? "bp3-dialog-step-viewed bp3-active"))}
                                           ($ :div {:class "bp3-dialog-step"}
                                              (d/div {:class "bp3-dialog-step-icon"} (inc idx))
                                              (d/div {:class "bp3-dialog-step-title"} (:label state)))))))
              (d/div {:class (get-class :MULTISTEP_DIALOG_RIGHT_PANEL)}
                     (d/div {:class "bp3-dialog-body"}
                            (d/div
                             (case current-state-id
                               :select-vendor ($ SelectVendorForm {:state-info state-info
                                                                   :on-vendor-name-changed on-vendor-name-changed})
                               :edit-info ($ EditInfoForm)
                               :else (d/div "No form found"))))
                     (d/div {:class (get-class :MULTISTEP_DIALOG_FOOTER)}
                            (d/div {:class "bp3-dialog-footer-actions"} "hey")))))))


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