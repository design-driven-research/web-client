(ns rdd.components.ui.uom-select
  (:require ["@blueprintjs/core" :refer [ControlGroup Dialog]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [nano-id.core :refer [nano-id]]
            [rdd.components.forms.create-uom-form :refer [CreateUOMForm]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.utils.select-utils :refer [build-select-options
                                            match-option-by-keyword]]))

(defnc UOMSelect
  [{:keys [value
           uoms
           on-change]}]

  (let [;; State
        [_ _ builder] (use-item-state)
        [is-showing-create-uom? set-is-showing-create-uom!] (hooks/use-state false)

        ;; Derived values
        prepared-options (build-select-options uoms :uom/code :uom/uuid)
        matched-uom (match-option-by-keyword uoms value :uom/code)
        current-uom (or (:uom/code matched-uom) "Select a UOM")

        ;; Callbacks & handlers
        on-submit-new-uom (builder :create-uom)
        on-submit-new-uom-wrapper (hooks/use-callback [on-change] (fn [{:uom/keys [name code]}]
                                                                    (let [new-uuid (nano-id)]
                                                                      (on-submit-new-uom {:name name
                                                                                          :code code
                                                                                          :uuid new-uuid})
                                                                      (on-change new-uuid)
                                                                      (set-is-showing-create-uom! false))))]

    (d/div
     ($ ControlGroup
        ($ SimpleSelect {:value current-uom
                         :on-existing-selected #(on-change (:id %))
                         :on-create-selected #(set-is-showing-create-uom! true)
                         :options prepared-options}))

     ($ Dialog {:isOpen is-showing-create-uom?
                :onClose #(set-is-showing-create-uom! false)
                :title (str "Create new uom")}
        ($ CreateUOMForm {:on-submit on-submit-new-uom-wrapper})))))
