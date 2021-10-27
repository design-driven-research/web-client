(ns rdd.components.forms.create-conversions-form
  (:require ["@blueprintjs/core" :refer [Button ControlGroup NumericInput Dialog]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]

            [rdd.utils.for-indexed :refer [for-indexed]]
            [nano-id.core :refer [nano-id]]
            [rdd.components.forms.create-uom-form :refer [CreateUOMForm]]
            [bangfe.infinite :as bi]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.services.store :as store]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]))


(defnc ConversionRow
  [{:keys [uoms
           conversion
           on-delete
           on-conversion-updated]}]
  (let [[_ _ builder] (use-item-state)
        [fsm set-fsm!] (hooks/use-state {::bi/states [{::bi/id :create-conversion
                                                       ::bi/context {:measurement/quantity (:measurement/quantity conversion)
                                                                     :position (:position conversion)
                                                                     :from (:from conversion)
                                                                     :to (:to conversion)}
                                                       ::bi/fields [{::bi/id :measurement/quantity}
                                                                    {::bi/id :uom/code}]}]
                                         ::bi/state  :create-conversion})

        ;; Extracted values
        current-state-id (::bi/state fsm)

        ;; Derived values
        state-info (bi/state-info fsm current-state-id)

        ;; Additional extracted values

        context (:context state-info)


        current-selected-uom (:to context)
        current-selected-uom-uuid (:uom/uuid current-selected-uom)

        match-uom-by-uuid (hooks/use-callback [uoms] (fn [uoms uuid]
                                                       (-> (filter #(= uuid (:uom/uuid %)) uoms)
                                                           (first))))

        current-uom (match-uom-by-uuid uoms current-selected-uom-uuid)

        [is-showing-create-uom? set-is-showing-create-uom!] (hooks/use-state false)

        uom-options (map (fn [uom] {:title (:uom/code uom)
                                    :code (:uom/code uom)
                                    :name (:uom/name uom)
                                    :uuid (:uom/uuid uom)}) uoms)

        on-uom-selected (hooks/use-callback [fsm current-state-id context on-conversion-updated] (fn [field-id value]
                                                                                                   (let [selected-uom (match-uom-by-uuid uoms (:uuid value))
                                                                                                         updated (bi/update-context-field! fsm current-state-id field-id selected-uom)
                                                                                                         updated-state-info (bi/state-info updated current-state-id)
                                                                                                         updated-context (:context updated-state-info)]
                                                                                                     (on-conversion-updated updated-context)
                                                                                                     (set-fsm! updated))))

        on-submit-new-uom (builder :create-uom)
        on-submit-new-uom-wrapper (hooks/use-callback [on-uom-selected] (fn [{:uom/keys [name code]}]
                                                                          (let [new-uuid (nano-id)
                                                                                payload {:title code
                                                                                         :name name
                                                                                         :code code
                                                                                         :uuid new-uuid}]
                                                                            (on-submit-new-uom payload)
                                                                            (on-uom-selected :to payload)
                                                                            (set-is-showing-create-uom! false))))

        ;; Callbacks


        on-field-change (hooks/use-callback [fsm current-state-id context] (fn [field-id value]
                                                                             (let [updated (bi/update-context-field! fsm current-state-id field-id value)]
                                                                               (set-fsm! updated))))

        on-touch (hooks/use-callback [fsm current-state-id context] (fn [field-id]
                                                                      (let [touched (bi/touch-field! fsm current-state-id field-id)]
                                                                        (set-fsm! touched))))]

    (d/div
     ($ ControlGroup
        (d/span (str "1 " (-> conversion :from :uom/name) " = "))

        ($ NumericInput {:id "item-quantity"
                         :value (or (:measurement/quantity context) "")
                         :placeholder "Enter quantity"
                         :allowNumericCharactersOnly false
                         :clampValueOnBlur true
                         :minorStepSize 0.01
                         :min 0
                         :small true
                         :onBlur #(on-touch :measurement/quantity)
                         :onValueChange #(on-field-change :measurement/quantity %)})

        ($ SimpleSelect {:value (or (:uom/code current-uom) "Select a unit of measure")
                         :on-existing-selected #(on-uom-selected :to %)
                         :on-create-selected #(set-is-showing-create-uom! true)
                         :options uom-options})

        ($ Button {:icon "delete"
                   :onClick on-delete}))


     ($ Dialog {:isOpen is-showing-create-uom?
                :onClose #(set-is-showing-create-uom! false)
                :title (str "Create new uom")}
        ($ CreateUOMForm {:on-submit on-submit-new-uom-wrapper})))))

(defnc CreateConversionsForm
  [{:keys [uoms
           from-uom
           to-uom
           state-info

           on-submit]}]
  (let [[conversions set-conversions!] (hooks/use-state [{:from from-uom}])
        [is-valid? set-is-valid!] (hooks/use-state false)

        on-conversion-updated (hooks/use-callback
                               [uoms from-uom to-uom state-info conversions]
                               (fn [{:as conversion
                                     :keys [position]}]

                                 (let [updated-conversions (->> (assoc conversions position conversion)
                                                                (take (inc position))
                                                                (vec))

                                       mapping (map (fn [c] {:from-uom-code (-> c :from :uom/code)
                                                             :to-uom-code (-> c :to :uom/code)
                                                             :quantity (-> c :measurement/quantity)}) updated-conversions)
                                       needs-conversions? (not (store/has-path-from-to? (:uom/code from-uom) (:uom/code to-uom) mapping))]


                                   (if needs-conversions?
                                     (let [next-conversion {:from (:to conversion)}
                                           updated-conversions (conj updated-conversions next-conversion)]
                                       (set-conversions! updated-conversions)
                                       (set-is-valid! false))
                                     (do
                                       (set-conversions! updated-conversions)
                                       (set-is-valid! true))))))

        on-delete (hooks/use-callback [conversions] (fn [position]
                                                      (let [item (nth conversions position)
                                                            updated (filter #(not (= item %)) conversions)]
                                                        (set-conversions! updated))))]

    (d/div
     (for-indexed [conversion idx conversions]
                  ($ ConversionRow {:key idx
                                    :uoms uoms
                                    :on-delete (partial on-delete idx)
                                    :conversion (assoc conversion :position idx)
                                    :on-conversion-updated on-conversion-updated}))

     ($ Button {:text "Reset"
                :onClick (fn [] (set-conversions! [{:from from-uom}]))})


     ($ Button {:text "Submit"
                :disabled (not is-valid?)
                :onClick #(on-submit conversions)}))))
