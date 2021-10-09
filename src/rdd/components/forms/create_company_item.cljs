(ns rdd.components.forms.create-company-item
  (:require [tilakone.core :as tk :refer [_]]
            [rdd.utils.css-utils :refer [get-class]]

            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]
            [applied-science.js-interop :as j]
            [clojure.spec.alpha :as s]
            [bangfe.infinite :as bi]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
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
            [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(s/def ::info (s/and string? #(> (count %) 2)))

(def states [{::bi/id :select-vendor
              ::bi/open true
              ::bi/fields [{::bi/id :company/uuid
                            ::bi/spec ::info}]
              :label "Select vendor"}
             {::bi/id :edit-info
              ::bi/fields [{::bi/id :info/name
                            ::bi/spec ::info}
                           {::bi/id :info/description}]
              :label "Edit item info"}])

#_(bi/generate-lookup-paths {::bi/states states})
;; => {:create-vendor {:path [:bangfe.infinite/states 0 :bangfe.infinite/states 0], :index 0},
;;     :create-vendor-1 {:path [:bangfe.infinite/states 0 :bangfe.infinite/states 1], :index 1},
;;     :create-vendor-2 {:path [:bangfe.infinite/states 0 :bangfe.infinite/states 2], :index 2},
;;     :select-vendor {:path [:bangfe.infinite/states 0], :index 0},
;;     :edit-info {:path [:bangfe.infinite/states 1], :index 1}}

;; => {:create-vendor {:path [:bangfe.infinite/states 0 :bangfe.infinite/states 0], :index 0},
;;     :select-vendor {:path [:bangfe.infinite/states 0], :index 0},
;;     :edit-info {:path [:bangfe.infinite/states 1], :index 1}}


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
  [{:keys [vendors
           state-info
           on-touch
           on-submit
           on-field-change
           on-create-new-vendor-requested
           on-select-vendor]}]
  (let [validations (:validations state-info)
        context (:context state-info)
        touches (:touches state-info)
        current-selected-vendor-uuid (:company/uuid context)
        current-selected-vendor-name (->> vendors
                                          (filter (fn [[vendor]] (= current-selected-vendor-uuid (:company/uuid vendor))))
                                          (ffirst)
                                          :company/name)

        vendor-options (map (fn [[vendor]]
                              {:title (:company/name vendor)
                               :uuid (:company/uuid vendor)}) vendors)

        name-invalid? (and (not (:company/name validations))
                           (:company/name touches))

        uuid-invalid? (and (not (:company/uuid validations))
                           (:company/uuid touches))

        valid? (= #{true} (set (vals validations)))]

    (d/div

     (d/div {:class "ml-2"}
            ($ SimpleSelect {:value current-selected-vendor-name
                             :on-create-selected (fn [{:keys [query]}] (on-create-new-vendor-requested query))
                             :on-existing-selected (fn [{:keys [uuid]}] (on-select-vendor uuid))
                             :options vendor-options}))

     #_#_($ FormGroup {:helperText "Helper text"
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

(defnc MultiStepMenu
  [{:keys [current-state-id
           states
           on-click]}]
  (d/div {:class (get-class :MULTISTEP_DIALOG_LEFT_PANEL)}
         (for-indexed [state idx states]
                      (let [is-open? (::bi/open state)
                            children (::bi/states state)

                            has-children? (boolean children)
                            is-active? (= current-state-id (::bi/id state))
                            state-id (::bi/id state)]

                        (d/div {:key idx}
                               (d/div {:key state-id
                                       :onClick #(on-click state-id)
                                       :class (str "bp3-dialog-step-container" " " (when is-active? "bp3-active") " " (when is-open? "bp3-dialog-step-viewed"))}
                                      ($ :div {:class "bp3-dialog-step"}
                                         (d/div {:class "bp3-dialog-step-icon"} (inc idx))
                                         (d/div {:class "bp3-dialog-step-title"} (:label state))))
                               (when has-children?
                                 (d/div {:key "children"
                                         :class "ml-2"}
                                        ($ MultiStepMenu {:current-state-id current-state-id
                                                          :states children
                                                          :on-click on-click}))))))))


(defnc Yoson
  []
  (d/div "hi there"))

(defnc CreateNewCompanyItem
  [{:keys [vendors
           is-open?
           on-close]}]
  (let [;; Local state
        [fsm set-fsm!] (hooks/use-state {::bi/states states
                                         ::bi/state  :select-vendor})

        ;; Extracted values
        states (::bi/states fsm)
        current-state-id (::bi/state fsm)

        ;; Derived values
        state-info (bi/state-info fsm current-state-id)

        ;; Callbacks
        on-field-change (hooks/use-callback [fsm] (fn [state-id field-id e]
                                                    (let [val     (j/get-in e [:target :value])
                                                          updated (bi/update-context-field! fsm state-id field-id val)]
                                                      (set-fsm! updated))))

        on-submit (hooks/use-callback [fsm] (fn [state-id]
                                              (let [validated (bi/validate-state! fsm state-id)]
                                                (set-fsm! validated))))

        transition-to (hooks/use-callback [fsm] (fn [state-id]
                                                  (set-fsm! (bi/transition-to-state! fsm state-id))))

        on-touch (hooks/use-callback [fsm] (fn [state-id field-id]
                                             (let [touched (bi/touch-field! fsm state-id field-id)]
                                               (set-fsm! touched))))


        on-select-vendor (hooks/use-callback [fsm] (fn [state-id uuid]
                                                     (let [updated (-> (bi/update-context-field! fsm state-id :company/uuid uuid)
                                                                       (bi/remove-child-states! state-id))]
                                                       (set-fsm! updated))))

        on-create-new-vendor-requested (hooks/use-callback [fsm] (fn [state-id new-name]
                                                                   (let [updated (-> (bi/swap-child-states! fsm state-id [{::bi/id      :create-vendor
                                                                                                                           :label      "Create vendor"
                                                                                                                           ::bi/fields  [{::bi/id :company/name}]
                                                                                                                           ::bi/context {:company/name new-name}}])
                                                                                     (bi/transition-to-state! :create-vendor))]
                                                                     (set-fsm! updated))))

        on-menu-item-clicked (hooks/use-callback [fsm] (fn [state-id]
                                                         (let [updated (bi/transition-to-state! fsm state-id)]
                                                           (set-fsm! updated))))]

    ($ Dialog {:style (clj->js {:paddingBottom "0"
                                :minWidth "800px"})
               :isOpen is-open?
               :onClose on-close
               :title "Create New Vendor Item"}
       (d/div {:class (get-class :MULTISTEP_DIALOG_PANELS)}
              ($ MultiStepMenu {:current-state-id current-state-id
                                :states states
                                :on-click on-menu-item-clicked})
              (d/div {:class (get-class :MULTISTEP_DIALOG_RIGHT_PANEL)}
                     (d/div {:class "bp3-dialog-body"}
                            (d/div
                             (case current-state-id
                               :select-vendor ($ SelectVendorForm {:state-info state-info
                                                                   :vendors vendors
                                                                   :on-touch (partial on-touch :select-vendor)
                                                                   :on-submit (partial transition-to :edit-info)
                                                                   :on-field-change (partial on-field-change :select-vendor)
                                                                   :on-select-vendor (partial on-select-vendor :select-vendor)
                                                                   :on-create-new-vendor-requested (partial on-create-new-vendor-requested :select-vendor)})
                               :edit-info ($ EditInfoForm)

                               ($ Yoson))))
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