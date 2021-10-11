(ns rdd.components.menus.multi-step-form-menu
  (:require [bangfe.infinite :as bi]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.utils.css-utils :refer [get-class]]
            [rdd.utils.for-indexed :refer [for-indexed]]))

(defnc MultiStepFormMenu
  [{:keys [current-state-id
           states
           on-click]}]
  (d/div {:class (get-class :MULTISTEP_DIALOG_LEFT_PANEL)}
         (for-indexed [state idx states]
                      (let [is-open? (::bi/open state)
                            children (::bi/states state)

                            has-children? (boolean children)
                            is-active? (= current-state-id (::bi/id state))
                            state-id (::bi/id state)]

                        (d/div {:key idx}
                               (d/div {:key state-id
                                       :onClick #(on-click state-id)
                                       :class (str "bp3-dialog-step-container" " " (when is-active? "bp3-active") " " (when is-open? "bp3-dialog-step-viewed"))}
                                      ($ :div {:class "bp3-dialog-step"}
                                         (d/div {:class "bp3-dialog-step-icon"} (inc idx))
                                         (d/div {:class "bp3-dialog-step-title"} (:label state))))
                               (when has-children?
                                 (d/div {:key "children"
                                         :class "ml-2"}
                                        ($ MultiStepFormMenu {:current-state-id current-state-id
                                                              :states children
                                                              :on-click on-click}))))))))