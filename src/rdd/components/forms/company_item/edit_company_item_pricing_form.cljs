(ns rdd.components.forms.company-item.edit-company-item-pricing-form
  (:require ["@blueprintjs/core" :refer [Button ControlGroup Dialog NumericInput]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [nano-id.core :refer [nano-id]]
            [rdd.components.forms.create-uom-form :refer [CreateUOMForm]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]))

(defnc EditCompanyItemPricingForm
  [{:keys [uoms
           state-info
           on-touch
           on-submit
           on-field-change]}]
  (let [[_ _ builder] (use-item-state)

        validations (:validations state-info)
        context (:context state-info)
        touches (:touches state-info)

        current-selected-uom-uuid (:uom/uuid context)
        matched-uom (first (filter (fn [uom] (= current-selected-uom-uuid (:uom/uuid uom))) uoms))
        current-uom (or matched-uom
                        (first (filter (fn [uom] (= "gr" (:uom/code uom))) uoms)))

        [is-showing-create-uom? set-is-showing-create-uom!] (hooks/use-state false)

        uom-options (map (fn [uom] {:title (:uom/code uom)
                                    :uuid (:uom/uuid uom)}) uoms)

        on-submit-new-uom (builder :create-uom)
        on-submit-new-uom-wrapper (hooks/use-callback [on-field-change] (fn [{:uom/keys [name code]}]
                                                                          (let [new-uuid (nano-id)]
                                                                            (on-submit-new-uom {:name name
                                                                                                :code code
                                                                                                :uuid new-uuid})
                                                                            (on-field-change :uom/uuid new-uuid)
                                                                            (set-is-showing-create-uom! false))))

        name-invalid? (and (not (nil? (:currency.usd/cost validations)))
                           (not (:currency.usd/cost validations))
                           (:currency.usd/cost touches))

        sku-invalid? (and (not (nil? (:measurement/quantity validations)))
                          (not (:measurement/quantity validations))
                          (:measurement/quantity touches))

        valid? (or
                (= #{true} (set (vals validations)))
                (= #{} (set (vals validations))))]

    (d/div
     ($ ControlGroup {}
        ($ NumericInput {:id "item-price"
                         :value (or (:currency.usd/cost context) "")
                         :leftIcon "dollar"
                         :placeholder "Enter item price"
                         :allowNumericCharactersOnly false
                         :clampValueOnBlur true
                         :minorStepSize 0.01
                         :min 0
                         :small true
                         :onBlur #(on-touch :currency.usd/cost)
                         :onValueChange #(on-field-change :currency.usd/cost %)})

        ($ NumericInput {:id "item-quantity"
                         :value (or (:measurement/quantity context) "")
                         :leftIcon "dollar"
                         :placeholder "Enter item price"
                         :allowNumericCharactersOnly false
                         :clampValueOnBlur true
                         :minorStepSize 0.01
                         :min 0
                         :small true
                         :onBlur #(on-touch :measurement/quantity)
                         :onValueChange #(on-field-change :measurement/quantity %)})

        ($ SimpleSelect {:value (:uom/code current-uom)
                         :on-existing-selected #(on-field-change :uom/uuid (:uuid %))
                         :on-create-selected #(set-is-showing-create-uom! true)
                         :options uom-options}))

     ($ Dialog {:isOpen is-showing-create-uom?
                :title (str "Create new uom")}
        ($ CreateUOMForm {:on-submit on-submit-new-uom-wrapper}))

     ($ Button {:intent "primary"
                :disabled (not valid?)
                :onClick on-submit
                :text "Next"}))))
