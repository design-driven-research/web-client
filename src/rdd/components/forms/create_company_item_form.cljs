(ns rdd.components.forms.create-company-item-form
  (:require ["@blueprintjs/core" :refer [Dialog]]
            [bangfe.infinite :as bi]
            [helix.core :refer [$]]
            [nano-id.core :refer [nano-id]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [postmortem.core :as pm]
            [rdd.hooks.use-fsm :refer [use-fsm]]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.components.forms.company-item.edit-company-item-form :refer [EditCompanyItemForm]]
            [rdd.components.forms.company-item.edit-company-item-pricing-form :refer [EditCompanyItemPricingForm]]
            [rdd.components.forms.create-new-vendor-form :refer [CreateVendorForm]]
            [rdd.components.forms.company-item.review-form :refer [ReviewForm]]
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
                                   :label "Edit usage"}

                                  {::bi/id :review
                                   ::bi/fields []
                                   :label "Review"}]
                     ::bi/state  :select-vendor})

(defnc CreateNewCompanyItemForm
  [{:keys [item
           vendors
           uoms
           is-open?
           on-submit
           on-close]}]
  (let [;; Local state
        [_ _ builder] (use-item-state)

        {:keys [fsm
                set-fsm!
                states
                current-state-id
                state-info
                on-field-change
                transition-to
                on-touch]} (use-fsm default-states)

        on-submit-usage (hooks/use-callback [fsm] (fn []
                                                    (let [pricing-state (bi/state-info fsm :edit-pricing)
                                                          pricing-context (:context pricing-state)
                                                          pricing-uom-uuid (:uom/uuid pricing-context)

                                                          usage-state (bi/state-info fsm :edit-usage)
                                                          usage-context (:context usage-state)
                                                          usage-uom-uuid (:uom/uuid usage-context)

                                                          usage-uom (store/get-uom-by-uuid usage-uom-uuid)
                                                          purchase-uom (store/get-uom-by-uuid pricing-uom-uuid)
                                                          needs-conversions? (not (store/has-path-from-to? (:uom/code usage-uom) (:uom/code purchase-uom) []))]

                                                      (if needs-conversions?
                                                        (let [updated (-> (bi/push-states! fsm [{::bi/id :add-conversions
                                                                                                 :label "Add conversions"}])
                                                                          (bi/transition-to-state! :add-conversions))]
                                                          (set-fsm! updated))
                                                        (set-fsm! (bi/transition-to-state! fsm :review))))))

        on-submit-conversions (hooks/use-callback [fsm] (fn [conversions]
                                                          (let [updated (-> (bi/update-context-field! fsm :add-conversions :conversions conversions)
                                                                            (bi/transition-to-state! :review))]
                                                            (set-fsm! updated))))

        create-company-item (builder :create-company-item [fsm])
        on-submit-wrapper (hooks/use-callback [fsm] (fn []
                                                      (let [company-item-uuid (nano-id)
                                                            extracted-context (bi/extract-context fsm)

                                                            company-uuid (-> extracted-context :select-vendor :company/uuid)
                                                            company-item-name (-> extracted-context :edit-info :company-item/name)
                                                            company-item-sku (-> extracted-context :edit-info :company-item/sku)
                                                            quote-price (-> extracted-context :edit-pricing :currency.usd/cost)
                                                            quote-quantity (-> extracted-context :edit-pricing :measurement/quantity)
                                                            quote-uom-uuid (-> extracted-context :edit-pricing :uom/uuid)
                                                            usage-uom-uuid (-> extracted-context :edit-usage :uom/uuid)

                                                            item-uuid (:item/uuid item)

                                                            conversions (map (fn [c]
                                                                               {:quantity (:measurement/quantity c)
                                                                                :from-uom-uuid (-> c :from :uom/uuid)
                                                                                :to-uom-uuid (-> c :to :uom/uuid)}) (-> extracted-context :add-conversions :conversions))
                                                            payload {:company/uuid company-uuid
                                                                     :company-item/uuid company-item-uuid
                                                                     :company-item/name company-item-name
                                                                     :company-item/sku company-item-sku
                                                                     :quote/price quote-price
                                                                     :quote/quantity quote-quantity
                                                                     :quote/uom-uuid quote-uom-uuid
                                                                     :usage-uom-uuid usage-uom-uuid
                                                                     :item/uuid item-uuid
                                                                     :conversions conversions}]

                                                        (create-company-item payload)

                                                        (on-submit {:uuid company-item-uuid}))))]

    ($ Dialog {:style (clj->js {:paddingBottom "0"
                                :minWidth "800px"})
               :isOpen is-open?
               :onClose on-close
               :title (str "Create new vendor item for " (:item/name item))}
       (d/div {:class (get-class :MULTISTEP_DIALOG_PANELS)}
              ($ MultiStepFormMenu {:current-state-id current-state-id
                                    :states states
                                    :on-click transition-to})
              (d/div {:class (get-class :MULTISTEP_DIALOG_RIGHT_PANEL)}
                     (d/div {:class "bp3-dialog-body"}
                            (d/div
                             (case current-state-id
                               :select-vendor ($ SelectVendorForm {:state-info state-info
                                                                   :vendors vendors
                                                                   :on-touch (partial on-touch :select-vendor)
                                                                   :on-submit (partial transition-to :edit-info)
                                                                   :on-field-change (partial on-field-change :select-vendor)})

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
                               :add-conversions (let [pricing-state (bi/state-info fsm :edit-pricing)
                                                      pricing-context (:context pricing-state)
                                                      pricing-uom-uuid (:uom/uuid pricing-context)

                                                      usage-state (bi/state-info fsm :edit-usage)
                                                      usage-context (:context usage-state)
                                                      usage-uom-uuid (:uom/uuid usage-context)

                                                      usage-uom (store/get-uom-by-uuid usage-uom-uuid)
                                                      purchase-uom (store/get-uom-by-uuid pricing-uom-uuid)]

                                                  ($ CreateConversionsForm
                                                     {:state-info state-info
                                                      :uoms uoms
                                                      :from-uom purchase-uom
                                                      :to-uom usage-uom
                                                      :on-touch (partial on-touch :add-conversions)
                                                      :on-submit on-submit-conversions
                                                      :on-field-change (partial on-field-change :add-conversions)}))

                               :review ($ ReviewForm {:on-submit on-submit-wrapper})

                              ;;  Default branch
                               (d/div "No form found"))))

                    ;;  Footer
                     (d/div {:class (get-class :MULTISTEP_DIALOG_FOOTER)}
                            (d/div {:class "bp3-dialog-footer-actions"} "hey")))))))