(ns rdd.components.ui.role-select
  (:require ["@blueprintjs/core" :refer [ControlGroup Dialog]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [nano-id.core :refer [nano-id]]
            [rdd.components.forms.create-role-form :refer [CreateRoleForm]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.utils.select-utils :refer [build-select-options
                                            match-option-by-keyword]]))

(defnc RoleSelect
  [{:keys [value
           options
           on-change]}]

  (let [;; State
        [_ _ builder] (use-item-state)
        [is-showing-create-role? set-is-showing-create-role!] (hooks/use-state false)

        ;; Derived values
        match (match-option-by-keyword options (:role/uuid value) :role/uuid)
        current-option (or (:role/name match) "Select a Role")
        prepared-options (build-select-options options :role/name :role/uuid)

        ;; Callbacks & handlers
        on-submit-new-role (builder :create-role)
        on-submit-new-role-wrapper (hooks/use-callback [on-change] (fn [{:keys [name cost duration interval]}]
                                                                     (let [new-uuid (nano-id)]
                                                                       (on-submit-new-role {:name name
                                                                                            :cost cost
                                                                                            :duration duration
                                                                                            :interval interval
                                                                                            :uuid new-uuid})
                                                                       (on-change [:role/uuid new-uuid])
                                                                       (set-is-showing-create-role! false))))]

    (d/div
     ($ ControlGroup {}
        ($ SimpleSelect {:value current-option
                         :on-existing-selected #(on-change [:role/uuid (:id %)])
                         :on-create-selected #(set-is-showing-create-role! true)
                         :options prepared-options}))

     ($ Dialog {:isOpen is-showing-create-role?
                :onClose #(set-is-showing-create-role! false)
                :title (str "Create new role")}
        ($ CreateRoleForm {:on-submit on-submit-new-role-wrapper})))))
