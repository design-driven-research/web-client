(ns rdd.components.dropdowns.company-item-selector
  (:require [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.forms.create-company-item-form :refer [CreateNewCompanyItemForm]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]))

(defnc CompanyItemSelector [{:keys [rli
                                    uoms
                                    vendors
                                    company-items
                                    on-selected]}]

  (let [;;  Extracted values


        child-item (-> rli :recipe-line-item/child-item)

        company-item (-> rli :recipe-line-item/company-item)
        selected-item-name (str (:company-item/name company-item) "-" (:info/description company-item))

        ;; Local state
        [create-company-item-state set-create-company-item-state!] (hooks/use-state {:current-state :empty})

        ;;  Derived values
        company-item-options (map (fn [ci] {:title (str (:company-item/name ci) "-" (:info/description ci))
                                            :uuid (:company-item/uuid ci)}) company-items)

        is-create-company-item-open? (= :creating (:current-state create-company-item-state))

        close-create-company-item! (hooks/use-callback :once (fn []
                                                               (set-create-company-item-state!
                                                                {:current-state :empty
                                                                 :value nil})))

        ;;  Callbacks
        on-selected-wrapper (hooks/use-callback
                             :once
                             (fn
                               [{:keys [uuid]}]
                               (on-selected uuid)))

        on-create-submit (hooks/use-callback
                          :once
                          (fn
                            [{:keys [uuid]}]
                            (on-selected uuid)
                            (set-create-company-item-state!
                             {:current-state :empty
                              :value nil})))

        on-create-selected-wrapper (hooks/use-callback
                                    :once
                                    (fn
                                      [{:keys [query]}]
                                      (set-create-company-item-state!
                                       {:current-state :creating
                                        :value query})))]

    (d/div {:class "flex items-center"}
           ($ CreateNewCompanyItemForm
              {:item child-item
               :vendors vendors
               :uoms uoms
               :on-submit on-create-submit
               :is-open? is-create-company-item-open?
               :on-close close-create-company-item!})

           ($ SimpleSelect {:value selected-item-name
                            :create-new-label "Create new company item:"
                            :on-existing-selected on-selected-wrapper
                            :on-create-selected on-create-selected-wrapper
                            :options company-item-options}))))