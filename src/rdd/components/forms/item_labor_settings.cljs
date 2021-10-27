(ns rdd.components.forms.item-labor-settings
  (:require [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.ui.quantity-editor :refer [QuantityEditor]]
            [rdd.components.ui.role-select :refer [RoleSelect]]
            [rdd.components.ui.time-editor :refer [TimeEditor]]
            [rdd.converters.uom]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]))

(defnc LaborLine
  [{:keys [labor
           roles
           on-field-change]}]
  (let [{:labor/keys [role]
         :time/keys [duration duration-interval]} labor]
    [:db/add [:process/uuid "asdf"] :labor [:labor/uuid "asdf"]]
    (d/div {:class "flex w-1/2 mt-2 items-center"}
           (d/div {:class "w-6/12"} ($ RoleSelect {:value role
                                                   :options roles
                                                   :on-change (partial on-field-change :labor/role)}))
           (d/div {:class "w-6/12"}
                  ($ TimeEditor {:duration duration
                                 :interval duration-interval
                                 :on-duration-changed (partial on-field-change :time/duration)
                                 :on-time-interval-changed (partial on-field-change :time/duration-interval)})))))

(defnc ItemLaborSettings
  [{:keys [process]}]
  (let [[state _ builder] (use-item-state)

        process-uuid (:process/uuid process)

        uoms (:uoms state)
        roles (:roles state)

        labor (:process/labor process)
        quantity (:measurement/quantity process)
        uom-code (-> process :measurement/uom :uom/code)

        on-generic-attr-change (builder :on-attr-change)

        on-generic-attr-change-wrapper (hooks/use-callback :once (fn [eid attr value]
                                                                   (on-generic-attr-change [:db/add eid attr value])))]

    (d/div
     ($ QuantityEditor {:label "Batch size"
                        :qty quantity
                        :selected-uom-code uom-code
                        :uoms uoms
                        :on-quantity-changed #(on-generic-attr-change-wrapper [:process/uuid process-uuid] :measurement/quantity %)
                        :on-uom-changed #(on-generic-attr-change-wrapper [:process/uuid process-uuid] :measurement/uom [:uom/uuid %])})
     (d/div (for [l labor]
              ($ LaborLine {:key (:labor/uuid l)
                            :on-field-change (partial on-generic-attr-change-wrapper [:labor/uuid (:labor/uuid l)])
                            :labor l
                            :roles roles}))))))