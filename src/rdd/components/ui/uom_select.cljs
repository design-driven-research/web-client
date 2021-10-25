(ns rdd.components.ui.uom-select
  (:require ["@blueprintjs/core" :refer [ControlGroup Dialog]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [nano-id.core :refer [nano-id]]
            [rdd.components.forms.create-uom-form :refer [CreateUOMForm]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]))

(defnc UOMSelect
  [{:keys [selected-uom-code
           uoms
           on-change]}]

  (let [[_ _ builder] (use-item-state)
        uom-options (map (fn [uom] {:title (:uom/code uom)
                                    :uuid (:uom/uuid uom)}) uoms)

        matched-uom (first (filter (fn [uom] (= selected-uom-code (:uom/code uom))) uoms))
        current-uom (or (:uom/code matched-uom)
                        "Select a UOM")

        [is-showing-create-uom? set-is-showing-create-uom!] (hooks/use-state false)

        on-submit-new-uom (builder :create-uom)
        on-submit-new-uom-wrapper (hooks/use-callback [on-change] (fn [{:uom/keys [name code]}]
                                                                    (let [new-uuid (nano-id)]
                                                                      (on-submit-new-uom {:name name
                                                                                          :code code
                                                                                          :uuid new-uuid})
                                                                      (on-change (:uom/uuid new-uuid))
                                                                      (set-is-showing-create-uom! false))))]

    (d/div
     ($ ControlGroup {}


        ($ SimpleSelect {:value current-uom
                         :on-existing-selected #(on-change (:uuid %))
                         :on-create-selected #(set-is-showing-create-uom! true)
                         :options uom-options}))

     ($ Dialog {:isOpen is-showing-create-uom?
                :onClose #(set-is-showing-create-uom! false)
                :title (str "Create new uom")}
        ($ CreateUOMForm {:on-submit on-submit-new-uom-wrapper})))))
