(ns rdd.components.dropdowns.item-selector
  (:require [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.dialogs.create-item-dialog :refer [CreateNewIngredientDialog]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]))

(defnc ItemSelector [{:keys [rli
                             items
                             on-item-selected
                             on-item-created]}]
  (let [;;  Extracted values
        rli-uuid (:recipe-line-item/uuid rli)
        selected-item-name (-> rli :recipe-line-item/child-item :item/name)


        ;; Local state
        [create-item-state set-create-item-state!] (hooks/use-state {:current-state :empty})

        ;;  Derived values
        options (map (fn [[i]] {:title (:item/name i)
                                :item-uuid (:item/uuid i)}) items)

        is-open? (= :creating (:current-state create-item-state))

        ;;  Callbacks
        on-child-item-selected-wrapper (hooks/use-callback
                                        :once
                                        (fn
                                          [{:keys [item-uuid]}]
                                          (on-item-selected
                                           {:rli-uuid rli-uuid
                                            :item-uuid item-uuid})))

        handle-create-item-submit (hooks/use-callback
                                   :once
                                   (fn
                                     [{:keys [item-name item-type item-default-uom-code]}]
                                     (on-item-created
                                      {:rli-uuid rli-uuid
                                       :item-name item-name
                                       :item-type item-type
                                       :item-default-uom-code item-default-uom-code})
                                     (set-create-item-state!
                                      {:current-state :empty
                                       :value nil})))

        on-create-selected-wrapper (hooks/use-callback
                                    :once
                                    (fn
                                      [{:keys [query]}]
                                      (set-create-item-state!
                                       {:current-state :creating
                                        :value query})))]

    (d/div {:class "flex w-1/2 items-center"}

           ($ CreateNewIngredientDialog
              {:is-open? is-open?
               :start-value (:value create-item-state)
               :handle-create-item-submit handle-create-item-submit})

           ($ SimpleSelect {:value selected-item-name
                            :create-new-label "Create new item:"
                            :on-existing-selected on-child-item-selected-wrapper
                            :on-create-selected on-create-selected-wrapper
                            :options options}))))