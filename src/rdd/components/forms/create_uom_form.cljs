(ns rdd.components.forms.create-uom-form
  (:require ["@blueprintjs/core" :refer [Button FormGroup InputGroup InputGroup]]
            [applied-science.js-interop :as j]
            [bangfe.infinite :as bi]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.specs.form-specs :as fs]))

(def default-states {::bi/states [{::bi/id :create-uom
                                   ::bi/open true
                                   ::bi/fields [{::bi/id :uom/name
                                                 ::bi/spec ::fs/info}
                                                {::bi/id :uom/code
                                                 ::bi/spec ::fs/info}]
                                   :label "Create UOM"}]
                     ::bi/state  :create-uom})

(defnc CreateUOMForm
  [{:keys [query on-submit]}]
  (let [[fsm set-fsm!] (hooks/use-state default-states)

        ;; Extracted values
        current-state-id (::bi/state fsm)

        ;; Derived values
        state-info (bi/state-info fsm current-state-id)

        ;; Additional extracted values
        validations (:validations state-info)
        context (:context state-info)
        touches (:touches state-info)

        ;; Callbacks
        on-field-change (hooks/use-callback [fsm current-state-id context] (fn [field-id value]
                                                                             (let [updated (bi/update-context-field! fsm current-state-id field-id value)]
                                                                               (set-fsm! updated))))

        on-touch (hooks/use-callback [fsm current-state-id context] (fn [field-id]
                                                                      (let [touched (bi/touch-field! fsm current-state-id field-id)]
                                                                        (set-fsm! touched))))


        name-invalid? (and (not (nil? (:uom/name validations)))
                           (not (:uom/name validations))
                           (:uom/name touches))

        valid? (or
                (= #{true} (set (vals validations)))
                (= #{} (set (vals validations))))]

    (d/div
     ($ FormGroup {:helperText "Helper text"
                   :label "UOM name (Required)"}
        (when name-invalid? (d/span "Invalid"))
        ($ InputGroup {:id "uom-name"
                       :value (or (:uom/name context) "")
                       :onChange #(on-field-change :uom/name (j/get-in % [:target :value]))
                       :onBlur #(on-touch :uom/name)
                       :placeholder "Enter ventor name"}))

     ($ FormGroup {:helperText "Helper text"
                   :label "UOM code (Required)"}
        (when name-invalid? (d/span "Invalid"))
        ($ InputGroup {:id "uom-code"
                       :value (or (:uom/code context) "")
                       :onChange #(on-field-change :uom/code (j/get-in % [:target :value]))
                       :onBlur #(on-touch :uom/code)
                       :placeholder "Enter ventor name"}))

     ($ Button {:intent "primary"
                :disabled (not valid?)
                :onClick #(on-submit context)
                :text "Create"}))))

