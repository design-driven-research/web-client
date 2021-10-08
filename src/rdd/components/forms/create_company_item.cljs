(ns rdd.components.forms.create-company-item
  (:require [tilakone.core :as tk :refer [_]]
            [rdd.utils.css-utils :refer [get-class]]

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

(s/def ::info (s/and string? #(> (count %) 2)))

(def states [{::bi/id :select-vendor
              ::bi/fields [{::bi/id :company/name
                            ::bi/spec ::info}
                           {::bi/id :company/uuid
                            ::bi/spec ::info}]
              :label "Select vendor"}
             {::bi/id :edit-info
              ::bi/fields [{::bi/id :info/name
                            ::bi/spec ::info}
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
           on-touch
           on-submit
           on-field-change]}]
  (let [validations (:validations state-info)
        context (:context state-info)
        touches (:touches state-info)

        name-invalid? (and (not (:company/name validations))
                           (:company/name touches))

        uuid-invalid? (and (not (:company/uuid validations))
                           (:company/uuid touches))

        valid? (= #{true} (set (vals validations)))]

    (tap> {:validations validations
           :context context
           :touches touches})
    (d/div

     ($ FormGroup {:helperText "Helper text"
                   :label "New vendor (Required)"}
        (when name-invalid? (d/span "Invalid"))
        ($ InputGroup {:id "company-name"
                       :value (or (:company/name context) "")
                       :onChange #(on-field-change :company/name %)
                       :onBlur #(on-touch :company/name)
                       :placeholder "Enter ventor name"}))

     ($ FormGroup {:helperText "Helper text"
                   :label "New vendor (Required)"}
        (when uuid-invalid? (d/span "Invalid"))
        ($ InputGroup {:id "company-uuid"
                       :value (or (:company/uuid context) "")
                       :onChange #(on-field-change :company/uuid %)
                       :onBlur #(on-touch :company/uuid)
                       :placeholder "Enter ventor uuid"}))

     ($ Button {:intent "primary"
                :disabled (not valid?)
                :onClick on-submit
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
        on-field-change (hooks/use-callback [fsm] (fn [field-id e]
                                                    (let [val (j/get-in e [:target :value])
                                                          updated (bi/update-context-field! fsm :select-vendor field-id val)]
                                                      (set-fsm! updated))))

        on-submit (hooks/use-callback [fsm] (fn [_]
                                              (let [validated (bi/validate-state! fsm :select-vendor)]
                                                (set-fsm! validated))))

        on-touch (hooks/use-callback [fsm] (fn [field-id]
                                             (let [touched (bi/touch-field! fsm :select-vendor field-id)]
                                               (set-fsm! touched))))]

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
                                                                   :on-touch on-touch
                                                                   :on-submit on-submit
                                                                   :on-field-change on-field-change})
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