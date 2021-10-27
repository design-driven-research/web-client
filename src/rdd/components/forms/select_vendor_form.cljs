(ns rdd.components.forms.select-vendor-form
  (:require ["@blueprintjs/core" :refer [Button Dialog]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [nano-id.core :refer [nano-id]]
            [rdd.components.forms.create-new-vendor-form :refer [CreateVendorForm]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]))

(defnc SelectVendorForm
  [{:keys [vendors
           state-info
           on-submit
           on-field-change]}]

  (let [;; Hooks
        [_ _ builder] (use-item-state)
        [create-vendor-state set-create-vendor-state!] (hooks/use-state {:is-open? false
                                                                         :query ""})

        ;; Extracted values
        validations (:validations state-info)
        context (:context state-info)
        touches (:touches state-info)
        current-selected-vendor-uuid (:company/uuid context)

        ;; Derived values
        current-selected-vendor-name (->> vendors
                                          (filter (fn [[vendor]] (= current-selected-vendor-uuid (:company/uuid vendor))))
                                          (ffirst)
                                          :company/name)

        vendor-options (map (fn [[vendor]]
                              {:title (:company/name vendor)
                               :uuid (:company/uuid vendor)}) vendors)

        uuid-invalid? (and (not (:company/uuid validations))
                           (:company/uuid touches))

        valid? (= #{true} (set (vals validations)))


        ;; Callbacks
        on-submit-new-vendor (builder :create-company)
        on-submit-new-vendor-wrapper (fn [company-name]
                                       (let [uuid (nano-id)]
                                         (on-submit-new-vendor {:name company-name
                                                                :uuid uuid})
                                         (on-field-change :company/uuid uuid)
                                         (set-create-vendor-state! {:is-open? false
                                                                    :query ""})))]
    (d/div
     (d/div {:class "ml-2"}
            (when uuid-invalid?
              (d/span "You must select a vendor"))
            ($ SimpleSelect {:value current-selected-vendor-name
                             :on-create-selected (fn [{:keys [query]}]
                                                   (set-create-vendor-state! {:is-open? true
                                                                              :query query}))
                             :on-existing-selected #(on-field-change :company/uuid (:uuid %))
                             :options vendor-options}))

     ($ Button {:intent "primary"
                :disabled (not valid?)
                :onClick on-submit
                :text "Create"})

     ($ Dialog {:isOpen (:is-open? create-vendor-state)}
        ($ CreateVendorForm {:start-value (:query create-vendor-state)
                             :on-submit on-submit-new-vendor-wrapper})))))