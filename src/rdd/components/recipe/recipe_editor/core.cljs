(ns rdd.components.recipe.recipe-editor.core
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [applied-science.js-interop :as j]
            [rdd.components.recipe.recipe-editor.rows.atomic-item.core]
            [rdd.components.recipe.recipe-editor.rows.composite-item.tool-bar]
            [helix.core :refer [$ defnc]]
            [rdd.converters.uom]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]))


(declare Item Children)

(defnc Editor
  "The main entry point for a recipe."
  [{:keys [item
           update-recipe-line-item-quantity-handler
           update-recipe-line-item-quantity-uom-handler
           create-recipe-line-item]
    {:keys [children item-total-cost]} :item}]

  (let [has-children? (seq children)]
    (d/div {:class "mt-2 xl:w-9/12 md:w-full"}
           (d/h1 (:name item))
           (d/p {:class "text-lg"} "Line items")
           (d/p {:class "text-lg"} "Total recipe cost: " item-total-cost)

           (when has-children?
             ($ rdd.components.recipe.recipe-editor.core/Children {:item item
                                                                   :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler
                                                                   :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler
                                                                   :create-recipe-line-item create-recipe-line-item})))))


(defnc Item
  "Item row"
  [{:keys [item
           index
           update-recipe-line-item-quantity-handler
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
            recipe-line-item-total-cost
            children]} :item}]

  ;; Wrap this to force memo to use equility instead of identical. It's slower to check but stops rerenders

  (let [[is-open? set-open-state] (hooks/use-state true)
        has-children? (seq children)]

    (d/div {:class "item-wrapper flex flex-col"}
           (d/div {:class "item-header-wrapper flex w-full mt-2 border "}
                  (when has-children?
                    (d/div {:class "border-r p-2 cursor-pointer"
                            :onClick (fn []
                                       (set-open-state (not is-open?)))}
                           (if is-open?
                             ($ Button {:icon "chevron-down"
                                        :minimal true})

                             ($ Button {:icon "chevron-right"
                                        :minimal true}))))
                  (d/div {:class "flex items-center justify-between w-full p-2"}
                         (d/div {:class "flex w-1/2 items-center"}
                                ($ :span {:class "w-2/12"} (str index "."))
                                ($ :span {:class "w-6/12"} (str item-name))
                                ($ :span {:class "w-4/12"} recipe-line-item-total-cost)
                                #_($ Button {:text "Add"
                                             :onClick (fn []
                                                        (create-recipe-line-item id 17))}))
                         ($ rdd.components.recipe.recipe-editor.rows.composite-item.tool-bar/Core {:item-yield (or item-yield
                                                                                                                   1)
                                                                                                   :item-yield-uom (or item-yield-uom
                                                                                                                       item-default-uom)

                                                                                                   :recipe-line-item-uuid recipe-line-item-uuid
                                                                                                   :recipe-line-item-quantity recipe-line-item-quantity

                                                                                                   :recipe-line-item-quantity-uom recipe-line-item-quantity-uom

                                                                                                   :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler
                                                                                                   :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler})))

           (when (and has-children?
                      is-open?)
             ($ :div
                ($ rdd.components.recipe.recipe-editor.core/Children {:item item
                                                                      :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler
                                                                      :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler
                                                                      :create-recipe-line-item create-recipe-line-item}))))))



(defnc Children
  "Composite children container. Contains all the recipe line items"
  [{:keys [update-recipe-line-item-quantity-handler
           update-recipe-line-item-quantity-uom-handler
           create-recipe-line-item]
    {:keys [children]} :item}]

  (d/div {:class "flex h-full"}
         (d/div {:class "w-8 h-full"}
                (d/div {:class "border-l border-dashed h-full my-2 ml-4"}))
         (d/div {:class "flex flex-col w-full"}
                (for-indexed [child index children]
                             (let [production-type (:item-production-type child)]
                               (case production-type
                                 :production.type/ATOM ($ rdd.components.recipe.recipe-editor.rows.atomic-item.core/Core
                                                          {:key (:item-uuid child)
                                                           :index (inc index)
                                                           :item child
                                                           :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler
                                                           :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler})
                                 :production.type/COMPOSITE ($ rdd.components.recipe.recipe-editor.core/Item
                                                               {:key (:item-uuid child)
                                                                :index (inc index)
                                                                :item child
                                                                :create-recipe-line-item create-recipe-line-item
                                                                :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler
                                                                :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler})
                                 :else (d/div "No matching production type found")))))))


