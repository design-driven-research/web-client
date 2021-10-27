(ns rdd.components.forms.company-item.edit-company-item-form
  (:require ["@blueprintjs/core" :refer [Button FormGroup InputGroup InputGroup]]
            [applied-science.js-interop :as j]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [rdd.lib.defnc :refer [defnc]]))

(defnc EditCompanyItemForm
  [{:keys [state-info
           on-touch
           on-submit
           on-field-change]}]
  (let [validations (:validations state-info)
        context (:context state-info)
        touches (:touches state-info)

        name-invalid? (and (not (nil? (:company-item/name validations)))
                           (not (:company-item/name validations))
                           (:company-item/name touches))

        sku-invalid? (and (not (nil? (:company-item/sku validations)))
                          (not (:company-item/sku validations))
                          (:company-item/sku touches))

        valid? (or
                (= #{true} (set (vals validations)))
                (= #{} (set (vals validations))))]

    (d/div

     ($ FormGroup {:helperText "Helper text"
                   :label "Vendor item name (Required)"}
        (when name-invalid? (d/span "Invalid"))
        ($ InputGroup {:id "company-name"
                       :value (or (:company-item/name context) "")
                       :onChange #(on-field-change :company-item/name (j/get-in % [:target :value]))
                       :onBlur #(on-touch :company-item/name)
                       :placeholder "Enter item name"})

        (when sku-invalid? (d/span "Invalid"))
        ($ InputGroup {:id "company-item-sku"
                       :value (or (:company-item/sku context) "")
                       :onChange #(on-field-change :company-item/sku (j/get-in % [:target :value]))
                       :onBlur #(on-touch :company-item/sku)
                       :placeholder "Enter item SKU"})

        ($ Button {:intent "primary"
                   :disabled (not valid?)
                   :onClick on-submit
                   :text "Next"})))))