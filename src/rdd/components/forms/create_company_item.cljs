(ns rdd.components.forms.create-company-item
  (:require ["@blueprintjs/core" :refer [Dialog]]
            [bangfe.infinite :as bi]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [postmortem.core :as pm]
            [rdd.components.forms.company-item.edit-company-item-form :refer [EditCompanyItemForm]]
            [rdd.components.forms.company-item.edit-company-item-pricing-form :refer [EditCompanyItemPricingForm]]
            [rdd.components.forms.create-new-vendor-form :refer [CreateVendorForm]]
            [rdd.components.forms.select-vendor-form :refer [SelectVendorForm]]
            [rdd.components.forms.company-item.edit-company-item-usage-form :refer [EditCompanyItemUsageForm]]
            [rdd.components.forms.create-conversions-form :refer [CreateConversionsForm]]
            [rdd.components.menus.multi-step-form-menu :refer [MultiStepFormMenu]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.services.store :as store]
            [rdd.specs.form-specs :as fs]
            [rdd.utils.css-utils :refer [get-class]]))

(def default-states {::bi/states [{::bi/id :select-vendor
                                   ::bi/open true
                                   ::bi/fields [{::bi/id :company/uuid
                                                 ::bi/spec ::fs/info}]
                                   :label "Select vendor"}
                                  {::bi/id :edit-info
                                   ::bi/fields [{::bi/id :company-item/name
                                                 ::bi/spec ::fs/info}
                                                {::bi/id :company-item/sku
                                                 ::bi/spec ::fs/info}
                                                {::bi/id :company-item/description}]
                                   :label "Edit item info"}

                                  {::bi/id :edit-pricing
                                   ::bi/fields [{::bi/id :measurement/quantity}
                                                {::bi/id :currency.usd/cost}
                                                {::bi/id :uom/uuid}]
                                   :label "Edit pricing"}

                                  {::bi/id :edit-usage
                                   ::bi/fields []
                                   :label "Edit usage"}]
                     ::bi/state  :select-vendor})

#_(bi/generate-lookup-paths default-states)

(defnc CreateNewCompanyItem
  [{:keys [item
           vendors
           uoms
           is-open?
           on-close]}]
  (let [;; Local state
        [fsm set-fsm!] (hooks/use-state default-states)

        ;; Extracted values
        states (::bi/states fsm)
        current-state-id (::bi/state fsm)

        ;; Derived values
        state-info (bi/state-info fsm current-state-id)

        ;; Callbacks
        on-field-change (hooks/use-callback [fsm] (fn [state-id field-id value]
                                                    (let [updated (bi/update-context-field! fsm state-id field-id value)]
                                                      (set-fsm! updated))))

        transition-to (hooks/use-callback [fsm] (fn [state-id]
                                                  (set-fsm! (bi/transition-to-state! fsm state-id))))

        on-touch (hooks/use-callback [fsm] (fn [state-id field-id]
                                             (let [touched (bi/touch-field! fsm state-id field-id)]
                                               (set-fsm! touched))))

        on-select-vendor (hooks/use-callback [fsm] (fn [state-id uuid]
                                                     (let [updated (-> (bi/update-context-field! fsm state-id :company/uuid uuid))]
                                                       (set-fsm! updated))))

        on-menu-item-clicked (hooks/use-callback [fsm] (fn [state-id]
                                                         (let [updated (bi/transition-to-state! fsm state-id)]
                                                           (set-fsm! updated))))

        on-submit-usage (hooks/use-callback [fsm] (fn []
                                                    (let [pricing-state (bi/state-info fsm :edit-pricing)
                                                          pricing-context (:context pricing-state)
                                                          pricing-uom-uuid (:uom/uuid pricing-context)

                                                          usage-state (bi/state-info fsm :edit-usage)
                                                          usage-context (:context usage-state)
                                                          usage-uom-uuid (:uom/uuid usage-context)

                                                          usage-uom (store/get-uom-by-uuid usage-uom-uuid)
                                                          purchase-uom (store/get-uom-by-uuid pricing-uom-uuid)
                                                          needs-conversions? (not (store/has-path-from-to? usage-uom purchase-uom []))]

                                                      (if needs-conversions?
                                                        (let [updated (-> (bi/push-states! fsm [{::bi/id :add-conversions
                                                                                                 :label "Add conversions"}])
                                                                          (bi/transition-to-state! :add-conversions))]
                                                          (set-fsm! updated))
                                                        (js/console.log "Submit final"))

                                                      #_(set-fsm! updated))))]

    ($ Dialog {:style (clj->js {:paddingBottom "0"
                                :minWidth "800px"})
               :isOpen is-open?
               :onClose on-close
               :title (str "Create new vendor item for " (:item/name item))}
       (d/div {:class (get-class :MULTISTEP_DIALOG_PANELS)}
              ($ MultiStepFormMenu {:current-state-id current-state-id
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
                                                                   :on-select-vendor (partial on-select-vendor :select-vendor)})

                               :create-vendor ($ CreateVendorForm {:state-info state-info
                                                                   :on-touch (partial on-touch :create-vendor)
                                                                   :on-submit (partial transition-to :edit-info)
                                                                   :on-field-change (partial on-field-change :create-vendor)})

                               :edit-info ($ EditCompanyItemForm {:state-info state-info
                                                                  :on-touch (partial on-touch :edit-info)
                                                                  :on-submit (partial transition-to :edit-pricing)
                                                                  :on-field-change (partial on-field-change :edit-info)})

                               :edit-pricing ($ EditCompanyItemPricingForm {:state-info state-info
                                                                            :uoms uoms
                                                                            :on-touch (partial on-touch :edit-pricing)
                                                                            :on-submit (partial transition-to :edit-usage)
                                                                            :on-field-change (partial on-field-change :edit-pricing)})

                               :edit-usage ($ EditCompanyItemUsageForm {:state-info state-info
                                                                        :uoms uoms
                                                                        :on-touch (partial on-touch :edit-usage)
                                                                        :on-submit on-submit-usage
                                                                        :on-field-change (partial on-field-change :edit-usage)})
                               :add-conversions ($ CreateConversionsForm
                                                   {:state-info state-info
                                                    :uoms uoms
                                                    :on-touch (partial on-touch :add-conversions)
                                                    :on-submit on-submit-usage
                                                    :on-field-change (partial on-field-change :add-conversions)})

                              ;;  Default branch
                               (d/div "No form found"))))

                    ;;  Footer
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