(ns rdd.components.items.item-editor
  (:require ["@blueprintjs/core" :refer [Button]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.menus.recipe-line-item-settings-menu :refer [RecipeLineItemSettingsMenu]]
            [rdd.components.dropdowns.company-item-selector :refer [CompanyItemSelector]]
            [rdd.components.dropdowns.item-selector :refer [ItemSelector]]
            [rdd.components.menus.add-row-menu :refer [AddRowMenu]]
            [rdd.components.settings.atomic-item-settings :refer [AtomicItemSettings]]
            [rdd.components.settings.composite-item-settings :refer [CompositeItemSettings]]
            [rdd.components.ui.quantity-editor :refer [QuantityEditor]]
            [rdd.hooks.use-hover :refer [use-hover]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.utils.for-indexed :refer [for-indexed]]
            ["react" :as react]))

(declare RecipeLineItem)

(defnc Editor
  "The main entry point for a recipe."
  [{:keys [item]
    {:item/keys [children total-cost]} :item}]

  (let [has-children? (seq children)
        sorted-children (sort-by :recipe-line-item/position children)]
    (d/div {:class "mt-2 xl:w-9/12 md:w-full"}
           (d/h1 (:item-name item))
           (d/p {:class "text-lg"} "Total cost: $" (js/parseInt total-cost))

           (when has-children?
             (for-indexed [rli index sorted-children]
                          ($ RecipeLineItem {:key (:recipe-line-item/uuid rli)
                                             :rli rli
                                             :index index}))))))

(defnc ChildToggleNav [{:keys [is-showing-children? set-is-showing-children-state]}]
  (d/div {:class "border-r p-2 cursor-pointer"
          :onClick #(set-is-showing-children-state (not is-showing-children?))}
         (if is-showing-children?
           ($ Button {:icon "chevron-down"
                      :minimal true})
           ($ Button {:icon "chevron-right"
                      :minimal true}))))

(defnc SettingsPanel [{:keys [close-panel!
                              is-settings-open?
                              rli]}]


  (when is-settings-open?
    (let [production-type (-> rli :recipe-line-item/child-item :item/production-type)]
      (d/div {:class "border w-full relative"}


             (case production-type
               :production.type/ATOM ($ AtomicItemSettings {:rli rli})
               :production.type/COMPOSITE ($ CompositeItemSettings {:rli rli})
               :else (d/div "No matching production type found"))

             (d/div {:class "mr-2 mt-2 absolute top-0 right-0 border"}
                    ($ Button {:icon "small-cross"
                               :minimal true
                               :onClick close-panel!}))))))

(defnc QuantityEditorWrapper [{:keys [rli
                                      uoms
                                      is-draft?
                                      update-quantity-handler
                                      update-uom-handler]}]

  (let [quantity (or (:recipe-line-item/quantity rli)
                     0)]
    (when (not is-draft?)

      ($ QuantityEditor {:label "Qty"
                         :qty quantity
                         :selected-uom-code (:recipe-line-item/quantity-uom-code rli)
                         :uoms uoms
                         :on-quantity-changed update-quantity-handler
                         :on-uom-changed update-uom-handler}))))

(defnc AddRowMenuHoverUI [{:keys [wrapper-container
                                  on-add-row-below
                                  on-add-row-inside]}]

  (let [is-hovering? (use-hover wrapper-container)]
    (d/div {:class "hover-menu flex align-center justify-center items-center w-12"}
           (when is-hovering?
             ($ AddRowMenu {:on-add-row-below on-add-row-below
                            :on-add-row-inside on-add-row-inside})))))

(defnc RecipeLineItemSettingMenuUI [{:keys [wrapper-container
                                            open-settings-panel!
                                            toggle-detailed-info!
                                            delete-row!]}]

  (let [is-hovering? (use-hover wrapper-container)]
    (d/div {:class "hover-menu flex align-center justify-center items-center w-12"}
           (when is-hovering?
             ($ RecipeLineItemSettingsMenu {:open-settings-panel! open-settings-panel!
                                            :toggle-detailed-info! toggle-detailed-info!
                                            :delete-row! delete-row!})))))

(defnc RecipeLineItem
  "Item row"
  [{:keys [rli]}]
  (let [;; Local state
        [is-settings-open? set-is-settings-open!] (hooks/use-state false)
        [is-detailed-info? set-is-detailed-info!] (hooks/use-state false)
        [is-showing-children? set-is-showing-children-state] (hooks/use-state true)

        ;; Reducer events
        [state _ builder] (use-item-state)
        recipe-line-item-quantity-uom-selected-handler (builder :update-recipe-line-item-quantity-uom :once)
        update-recipe-line-item-quantity-handler (builder :update-recipe-line-item-quantity :once)
        create-sibling-recipe-line-item (builder :create-sibling-recipe-line-item :once)
        create-nested-recipe-line-item (builder :create-nested-recipe-line-item :once)
        on-rli-item-selected (builder :update-recipe-line-item-item :once)
        on-item-created (builder :create-and-link-item :once)

        on-company-item-selected (builder :update-recipe-line-company-item :once)
        on-delete-recipe-line-item (builder :delete-recipe-line-item :once)

        ;; Local bindings
        rli-uuid (:recipe-line-item/uuid rli)
        items (:items state)
        vendors (:vendors state)
        uoms (:uoms state)

        child-item (-> rli :recipe-line-item/child-item)
        company-items (-> child-item :item/company-items)
        item-children (-> rli :recipe-line-item/child-item :item/children)

        ;; Derived values
        sorted-children (sort-by :recipe-line-item/position item-children)

        ;; Flags
        is-draft? (nil? child-item)
        has-children? (seq item-children)

        ;; Refs
        wrapper-container (react/useRef)

        ;; Wrappers and callbacks
        on-add-row-below (hooks/use-callback
                          [:item-uuid :recipe-line-item-uuid]
                          #(create-sibling-recipe-line-item
                            {:origin-rli-uuid
                             rli-uuid
                             :insert-type :after}))

        on-add-row-inside (hooks/use-callback
                           [:item-uuid :recipe-line-item-uuid]
                           #(create-nested-recipe-line-item
                             {:origin-rli-uuid
                              rli-uuid
                              :insert-type :inside}))

        open-settings-panel! (hooks/use-callback
                              :once
                              #(set-is-settings-open! true))

        close-settings-panel! (hooks/use-callback
                               :once
                               #(set-is-settings-open! false))

        show-detailed-info! (hooks/use-callback
                             :once
                             #(set-is-detailed-info! true))

        hide-detailed-info! (hooks/use-callback
                             :once
                             #(set-is-detailed-info! false))

        toggle-detailed-info! (hooks/use-callback
                               [is-detailed-info?]
                               #(set-is-detailed-info! (not is-detailed-info?)))

        update-quantity-handler (hooks/use-callback
                                 [rli-uuid]
                                 (fn [rli-uuid quantity]
                                   (update-recipe-line-item-quantity-handler
                                    {:uuid rli-uuid
                                     :quantity quantity})))

        update-uom-handler (hooks/use-callback
                            [rli-uuid]
                            (fn [uom-uuid]
                              (recipe-line-item-quantity-uom-selected-handler
                               {:rli-uuid rli-uuid
                                :uom-uuid uom-uuid})))

        on-company-item-selected-wrapper (hooks/use-callback
                                          [rli-uuid]
                                          (fn [rli-uuid company-item-uuid]
                                            (on-company-item-selected
                                             {:rli-uuid rli-uuid
                                              :company-item-uuid company-item-uuid})))]

    (d/div {:class "item-wrapper flex flex-col"}

           (d/div {:ref wrapper-container
                   :class "flex flex-col mt-2"}

                  (d/div {:class "item-header-wrapper flex items-center"}

                         ($ AddRowMenuHoverUI {:wrapper-container wrapper-container
                                               :on-add-row-below on-add-row-below
                                               :on-add-row-inside on-add-row-inside})

                         (d/div {:class "flex flex-col w-full border"}

                                (d/div {:class "flex items-center justify-between p-2"}

                                       (when has-children?
                                         ($ ChildToggleNav {:is-showing-children? is-showing-children?
                                                            :set-is-showing-children-state set-is-showing-children-state}))

                                       (d/div {:class "flex items-center justify-between w-full justify-between p-2"}
                                              (d/div {:class "flex items-center w-9/12"}
                                                     (d/div {:class "w-4/12"}
                                                            ($ ItemSelector {:rli rli
                                                                             :items items
                                                                             :on-item-selected on-rli-item-selected
                                                                             :on-item-created on-item-created}))

                                                     (d/div {:class "w-8/12"}
                                                            ($ CompanyItemSelector {:rli rli
                                                                                    :uoms uoms
                                                                                    :vendors vendors
                                                                                    :on-selected (partial on-company-item-selected-wrapper rli-uuid)
                                                                                    :company-items company-items})))

                                              (d/div {:class "w-3/12 "}
                                                     ($ QuantityEditorWrapper {:rli rli
                                                                               :uoms uoms
                                                                               :is-draft? is-draft?
                                                                               :update-quantity-handler (partial update-quantity-handler rli-uuid)
                                                                               :update-uom-handler update-uom-handler})))))


                         ($ RecipeLineItemSettingMenuUI {:wrapper-container wrapper-container
                                                         :open-settings-panel! open-settings-panel!
                                                         :toggle-detailed-info! toggle-detailed-info!
                                                         :delete-row! (partial on-delete-recipe-line-item rli-uuid)}))

                  (when is-detailed-info?
                    (d/div {:class "flex ml-12 mr-12 p-4 border"}
                           (d/div (str "Total line item cost: " (:recipe-line-item/total-cost rli)))))

                  (d/div {:class "flex ml-12 mr-12"}

                         ($ SettingsPanel {:close-panel! close-settings-panel!
                                           :is-settings-open? is-settings-open?
                                           :rli rli})))

           (when (and has-children?
                      is-showing-children?)
             (d/div {:class "ml-4"}
                    (for-indexed [rli index sorted-children]
                                 ($ RecipeLineItem {:key (:recipe-line-item/uuid rli)
                                                    :rli rli
                                                    :index index})))))))

