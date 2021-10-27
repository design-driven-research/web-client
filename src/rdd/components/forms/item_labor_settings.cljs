(ns rdd.components.forms.item-labor-settings
  (:require
   [rdd.components.ui.simple-select :refer [SimpleSelect]]


   [rdd.components.ui.time-editor :refer [TimeEditor]]

   [helix.core :refer [$]]
   [rdd.lib.defnc :refer [defnc]]
   [rdd.converters.uom]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc LaborLine
  [{:keys [labor roles]}]
  (let [{:labor/keys [role]
         :time/keys [duration duration-interval]} labor

        current-role-uuid (:role/uuid role)

        current-role (first (filter (fn [r] (= (:role/uuid r) current-role-uuid)) roles))
        current-role-name (:role/name current-role)

        role-options (map (fn [r] {:title (:role/name r)
                                   :uuid (:role/uuid r)}) roles)

        on-existing-role-selected (hooks/use-callback :once (fn [i] (js/console.log i)))
        on-create-role-selected (hooks/use-callback :once (fn [i] (js/console.log i)))

        on-duration-changed (hooks/use-callback :once (fn [i] (js/console.log i)))
        on-duration-interval-changed (hooks/use-callback :once (fn [i] (js/console.log i)))]


    (d/div {:class "flex w-1/2 mt-2 items-center"}
           (d/div {:class "w-6/12"} ($ SimpleSelect {:class "border-2"
                                                     :value current-role-name
                                                     :options role-options
                                                     :create-new-label "Create new role"
                                                     :on-existing-selected on-existing-role-selected
                                                     :on-create-selected on-create-role-selected}))
           (d/div {:class "w-6/12"}
                  ($ TimeEditor {:duration duration
                                 :interval duration-interval
                                 :on-duration-changed on-duration-changed
                                 :on-time-interval-changed on-duration-interval-changed})))))

(defnc ItemLaborSettings
  [{:keys [roles process]}]
  (let [labor (:process/labor process)]
    (d/div (for [l labor]
             ($ LaborLine {:key (:labor/uuid l)
                           :labor l
                           :roles roles})))))