(ns rdd.components.items.item-editor
  (:require ["@blueprintjs/core" :refer [Button]]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.components.settings.atomic-item-settings :refer [AtomicItemSettings]]
            [rdd.components.settings.composite-item-settings :refer [CompositeItemSettings]]
            [rdd.components.ui.quantity-editor :refer [QuantityEditor]]
            [rdd.providers.item-provider :refer [use-item-state]]
            [rdd.utils.for-indexed :refer [for-indexed]]))

(declare Item Children)

(defnc Editor
  "The main entry point for a recipe."
  [{:keys [item
           update-recipe-line-item-quantity-uom-handler
           create-recipe-line-item]
    {:keys [children item-total-cost]} :item}]

  (let [has-children? (seq children)]
    (d/div {:class "mt-2 xl:w-9/12 md:w-full"}
           (d/h1 (:item-name item))
           (d/p {:class "text-lg"} "Total cost: $" (js/parseInt item-total-cost))

           (when has-children?
             ($ rdd.components.items.item-editor/Children {:item item
                                                           :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler
                                                           :create-recipe-line-item create-recipe-line-item})))))

(defnc Item
  "Item row"
  [{:keys [item
           update-recipe-line-item-quantity-uom-handler
           create-recipe-line-item]

    {:keys [item-uuid
            item-name
            recipe-line-item-quantity
            item-yield
            item-default-uom
            recipe-line-item-uuid
            item-yield-uom
            recipe-line-item-quantity-uom
            children]} :item}]

  (let [[is-settings-open? is-settings-open-state] (hooks/use-state false)
        [is-showing-children? set-is-showing-children-state] (hooks/use-state true)

        has-children? (seq children)

        [_ _ builder] (use-item-state)
        recipe-line-item-quantity-uom-selected-handler (builder :update-recipe-line-item-quantity-uom :once)
        update-recipe-line-item-quantity-handler (builder :update-recipe-line-item-quantity :once)]

    (d/div {:class "item-wrapper flex flex-col"}
           (d/div {:class "item-header-wrapper flex w-full mt-2 border "}
                  (when has-children?
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
                                ($ :span {:class "w-6/12"} (str item-name)))
                         ($ QuantityEditor {:label "Qty"
                                            :uuid recipe-line-item-uuid
                                            :qty recipe-line-item-quantity
                                            :uom-code recipe-line-item-quantity-uom
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
             (let [production-type (:item-production-type item)]
               (case production-type
                 :production.type/ATOM ($ AtomicItemSettings {:item-uuid item-uuid

                                                              :item-yield-uom (or item-yield-uom
                                                                                  item-default-uom)

                                                              :recipe-line-item-uuid recipe-line-item-uuid
                                                              :recipe-line-item-quantity recipe-line-item-quantity

                                                              :recipe-line-item-quantity-uom recipe-line-item-quantity-uom})
                 :production.type/COMPOSITE ($ CompositeItemSettings {:item-uuid item-uuid
                                                                      :item-yield (or item-yield
                                                                                      1)
                                                                      :item-yield-uom (or item-yield-uom
                                                                                          item-default-uom)

                                                                      :recipe-line-item-uuid recipe-line-item-uuid
                                                                      :recipe-line-item-quantity recipe-line-item-quantity

                                                                      :recipe-line-item-quantity-uom recipe-line-item-quantity-uom})
                 :else (d/div "No matching production type found"))))
           (when (and has-children?
                      is-showing-children?)
             ($ :div
                ($ rdd.components.items.item-editor/Children {:item item
                                                              :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler
                                                              :create-recipe-line-item create-recipe-line-item}))))))


(defnc Children
  "Composite children container. Contains all the recipe line items"
  [{:keys [update-recipe-line-item-quantity-uom-handler
           create-recipe-line-item]
    {:keys [children]} :item}]

  (d/div {:class "flex h-full"}
         (d/div {:class "w-8 h-full"}
                (d/div {:class "border-l border-dashed h-full my-2 ml-4"}))
         (d/div {:class "flex flex-col w-full"}
                (for-indexed [child index children]
                             ($ rdd.components.items.item-editor/Item
                                {:key (:item-uuid child)
                                 :index (inc index)
                                 :item child
                                 :create-recipe-line-item create-recipe-line-item
                                 :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler})))))


