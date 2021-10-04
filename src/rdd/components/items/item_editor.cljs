(ns rdd.components.items.item-editor
  (:require ["@blueprintjs/core" :refer [Button]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.menus.add-row-menu :refer [AddRowMenu]]
            [rdd.components.settings.atomic-item-settings :refer [AtomicItemSettings]]
            [rdd.components.settings.composite-item-settings :refer [CompositeItemSettings]]
            [rdd.components.ui.quantity-editor :refer [QuantityEditor]]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.utils.for-indexed :refer [for-indexed]]))

(declare RecipeLineItemWrapper)

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
                          ($ RecipeLineItemWrapper {:key (:recipe-line-item/uuid rli)
                                                    :rli rli
                                                    :index index}))))))

(defnc DraftRecipeLineItem
  [{:keys [rli]}]
  (d/div {:class "flex border w-full h-12 items-center"}
         (d/span {:class "ml-2"} (str "Draft" " - " (-> rli :recipe-line-item/position)))))

(defnc PublishedRecipeLineItem
  [{:keys [rli
           has-children?
           is-showing-children?
           set-is-showing-children-state
           update-recipe-line-item-quantity-handler
           recipe-line-item-quantity-uom-selected-handler
           is-settings-open-state
           is-settings-open?]}]
  (d/div {:class "flex flex-col w-full border"}
         (d/div {:class "flex"} (when has-children?
                                  (d/div {:class "border-r p-2 cursor-pointer"
                                          :onClick (fn []
                                                     (set-is-showing-children-state (not is-showing-children?)))}
                                         (if is-showing-children?
                                           ($ Button {:icon "chevron-down"
                                                      :minimal true})
                                           ($ Button {:icon "chevron-right"
                                                      :minimal true}))))
                (d/div {:class "flex items-center justify-between w-full p-2"}
                       (d/div {:class "flex w-1/2 items-center"}
                              ($ :span {:class "w-6/12"} (str (-> rli :recipe-line-item/child-item :item/name)
                                                              " - "
                                                              (-> rli :recipe-line-item/position)
                                                              " - rli-uuid - "
                                                              (-> rli :recipe-line-item/uuid))))
                       ($ QuantityEditor {:label "Qty"
                                          :uuid (:recipe-line-item/uuid rli)
                                          :qty (:recipe-line-item/quantity rli)
                                          :uom-code (:recipe-line-item/uom rli)
                                          :options [{:title "gr"
                                                     :uom-code "gr"}
                                                    {:title "lb"
                                                     :uom-code "lb"}]
                                          :on-quantity-changed update-recipe-line-item-quantity-handler
                                          :on-uom-changed recipe-line-item-quantity-uom-selected-handler})

                       ($ Button {:icon "cog"
                                  :minimal true
                                  :onClick (fn []
                                             (is-settings-open-state (not is-settings-open?)))})))
         (when is-settings-open?
           (let [production-type (-> rli :recipe-line-item/child-item :item/production-type)]
             (case production-type
               :production.type/ATOM ($ AtomicItemSettings {:item-uuid (-> rli :recipe-line-item/child-item :item/uuid)

                                                            :item-yield-uom (or (-> rli :recipe-line-item/child-item :item/yield)
                                                                                (-> rli :recipe-line-item/child-item :item/uom))

                                                            :recipe-line-item-uuid (:recipe-line-item/uuid rli)
                                                            :recipe-line-item-quantity (:recipe-line-item/quantity rli)

                                                            :recipe-line-item-quantity-uom (:recipe-line-item/quantity rli)})
               :production.type/COMPOSITE ($ CompositeItemSettings {:item-uuid (-> rli :recipe-line-item/child-item :item/uuid)
                                                                    :item-yield (or (-> rli :recipe-line-item/child-item :item/yield)
                                                                                    1)
                                                                    :item-yield-uom (or (-> rli :recipe-line-item/child-item :item/yield-uom)
                                                                                        (-> rli :recipe-line-item/child-item :item/default-uom))

                                                                    :recipe-line-item-uuid (:recipe-line-item/uuid rli)
                                                                    :recipe-line-item-quantity (:recipe-line-item/quantity rli)

                                                                    :recipe-line-item-quantity-uom (:recipe-line-item/uom rli)})
               :else (d/div "No matching production type found"))))))

(defnc RecipeLineItemWrapper
  "Item row"
  [{:keys [rli]}]

  (let [child-item (-> rli :recipe-line-item/child-item)
        is-draft? (nil? child-item)

        [is-settings-open? is-settings-open-state] (hooks/use-state false)
        [is-showing-children? set-is-showing-children-state] (hooks/use-state true)
        [is-hovering? set-is-hovering] (hooks/use-state false)

        item-children (-> rli :recipe-line-item/child-item :item/children)
        has-children? (seq item-children)
        sorted-children (sort-by :recipe-line-item/position item-children)

        [_ _ builder] (use-item-state)
        recipe-line-item-quantity-uom-selected-handler (builder :update-recipe-line-item-quantity-uom :once)
        update-recipe-line-item-quantity-handler (builder :update-recipe-line-item-quantity :once)


        create-sibling-recipe-line-item (builder :create-sibling-recipe-line-item :once)
        create-nested-recipe-line-item (builder :create-nested-recipe-line-item :once)

        on-add-row-below (hooks/use-callback [:item-uuid :recipe-line-item-uuid] #(create-sibling-recipe-line-item {:origin-rli-uuid (:recipe-line-item/uuid rli)
                                                                                                                    :insert-type :after}))
        on-add-row-inside (hooks/use-callback [:item-uuid :recipe-line-item-uuid] #(create-nested-recipe-line-item {:origin-rli-uuid (:recipe-line-item/uuid rli)
                                                                                                                    :insert-type :inside}))]

    (d/div {:class "item-wrapper flex flex-col"}
           (d/div {:class "item-header-wrapper align-center justify-center items-center flex w-full mt-2"
                   :onMouseEnter (fn [e]
                                   (.stopPropagation e)
                                   (set-is-hovering true))
                   :onMouseLeave (fn [e]
                                   (.stopPropagation e)
                                   (set-is-hovering false))}
                  (d/div {:class "hover-menu flex align-center justify-center items-center w-8 mr-2 h-full"}

                         (when is-hovering?
                           ($ AddRowMenu {:on-add-row-below on-add-row-below
                                          :on-add-row-inside on-add-row-inside})))
                  (if is-draft?
                    ($ DraftRecipeLineItem {:rli rli})
                    ($ PublishedRecipeLineItem {:rli rli
                                                :has-children? has-children?
                                                :is-showing-children? is-showing-children?
                                                :set-is-showing-children-state set-is-showing-children-state
                                                :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler
                                                :recipe-line-item-quantity-uom-selected-handler recipe-line-item-quantity-uom-selected-handler
                                                :is-settings-open-state is-settings-open-state
                                                :is-settings-open? is-settings-open?})))

           (when (and has-children?
                      is-showing-children?)
             ($ :div
                (d/div {:class "ml-4"}
                       (for-indexed [rli index sorted-children]
                                    ($ RecipeLineItemWrapper {:key (:recipe-line-item/uuid rli)
                                                              :rli rli
                                                              :index index}))))))))

