(ns rdd.components.forms.company-item.edit-company-item-usage-form
  (:require ["@blueprintjs/core" :refer [Button Dialog]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [nano-id.core :refer [nano-id]]
            [rdd.components.forms.create-uom-form :refer [CreateUOMForm]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]))

(defnc EditCompanyItemUsageForm
  [{:keys [uoms
           state-info
           on-submit
           on-field-change]}]

  (let [;; Hooks
        [_ _ builder] (use-item-state)
        [create-uom-state set-create-uom-state!] (hooks/use-state {:is-open? false
                                                                   :query ""})

        ;; Extracted values
        validations (:validations state-info)
        context (:context state-info)
        touches (:touches state-info)
        current-selected-uom-uuid (:uom/uuid context)

        ;; Derived values
        current-selected-uom-name (->> uoms
                                       (filter (fn [uom] (= current-selected-uom-uuid (:uom/uuid uom))))
                                       (first)
                                       :uom/name)

        uom-options (map (fn [uom]
                           {:title (:uom/name uom)
                            :uuid (:uom/uuid uom)}) uoms)

        uuid-invalid? (and (not (:uom/uuid validations))
                           (:uom/uuid touches))

        valid? (or
                (= #{true} (set (vals validations)))
                (= #{} (set (vals validations))))


        ;; Callbacks
        on-submit-new-uom (builder :create-uom)
        on-submit-new-uom-wrapper (fn [company-name]
                                    (let [uuid (nano-id)]
                                      (on-submit-new-uom {:name company-name
                                                          :uuid uuid})
                                      (on-field-change :uom/uuid uuid)
                                      (set-create-uom-state! {:is-open? false
                                                              :query ""})))]
    (d/div
     (d/div {:class "ml-2"}
            (when uuid-invalid?
              (d/span "You must select a uom"))
            ($ SimpleSelect {:value current-selected-uom-name
                             :on-create-selected (fn [{:keys [query]}]
                                                   (set-create-uom-state! {:is-open? true
                                                                           :query query}))
                             :on-existing-selected #(on-field-change :uom/uuid (:uuid %))
                             :options uom-options}))

     ($ Button {:intent "primary"
                :disabled (not valid?)
                :onClick on-submit
                :text "Create"})

     ($ Dialog {:isOpen (:is-open? create-uom-state)}
        ($ CreateUOMForm {:start-value (:query create-uom-state)
                          :on-submit on-submit-new-uom-wrapper})))))