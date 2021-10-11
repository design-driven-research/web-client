(ns rdd.components.forms.company-item.edit-company-item-form
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

(defnc EditCompanyItemForm
  [{:keys [vendors
           state-info
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