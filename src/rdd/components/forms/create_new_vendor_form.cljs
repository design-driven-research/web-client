(ns rdd.components.forms.create-new-vendor-form
  (:require ["@blueprintjs/core" :refer [Button FormGroup InputGroup]]
            [applied-science.js-interop :as j]
            [bangfe.infinite :as bi]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.specs.form-specs :as fs]))

(def default-states {::bi/states [{::bi/id :create-vendor
                                   ::bi/open true
                                   ::bi/fields [{::bi/id :company/name
                                                 ::bi/spec ::fs/info}]
                                   :label "Create vendor"}]
                     ::bi/state  :create-vendor})

(defnc CreateVendorForm
  [{:keys [start-value on-submit]}]
  (let [[fsm set-fsm!] (hooks/use-state (bi/update-context-field! default-states :create-vendor :company/name start-value))

        ;; Extracted values
        current-state-id (::bi/state fsm)

        ;; Derived values
        state-info (bi/state-info fsm current-state-id)

        ;; Callbacks
        on-field-change (hooks/use-callback [fsm current-state-id] (fn [field-id value]
                                                                     (let [updated (bi/update-context-field! fsm current-state-id field-id value)]
                                                                       (set-fsm! updated))))

        on-touch (hooks/use-callback [fsm current-state-id] (fn [field-id]
                                                              (let [touched (bi/touch-field! fsm current-state-id field-id)]
                                                                (set-fsm! touched))))

        validations (:validations state-info)
        context (:context state-info)
        touches (:touches state-info)

        name-invalid? (and (not (nil? (:company/name validations)))
                           (not (:company/name validations))
                           (:company/name touches))

        valid? (or
                (= #{true} (set (vals validations)))
                (= #{} (set (vals validations))))]

    (d/div
     ($ FormGroup {:helperText "Helper text"
                   :label "Vendor name (Required)"}
        (when name-invalid? (d/span "Invalid"))
        ($ InputGroup {:id "company-name"
                       :value (or (:company/name context) "")
                       :onChange #(on-field-change :company/name (j/get-in % [:target :value]))
                       :onBlur #(on-touch :company/name)
                       :placeholder "Enter vendor name"})

        ($ Button {:intent "primary"
                   :disabled (not valid?)
                   :onClick #(on-submit (:company/name context))
                   :text "Next"})))))

