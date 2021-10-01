(ns rdd.components.recipe.recipe-editor.rows.atomic-item.core
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [rdd.components.recipe.recipe-editor.rows.atomic-item.tool-bar :as ToolBar]
            [rdd.components.dropdowns.company-items :as CompanyItemsDropDown]
            [rdd.converters.uom]))


(defnc Core
  "Atom type item row"
  [{:keys [item
           index
           update-recipe-line-item-quantity-handler
           update-recipe-line-item-quantity-uom-handler]

    {:keys [item-uuid
            item-name
            item-company-items
            recipe-line-item-quantity
            item-yield
            item-default-uom
            recipe-line-item-uuid
            item-yield-uom
            recipe-line-item-quantity-uom
            recipe-line-item-total-cost]} :item}]

  ;; Wrap this to force memo to use equility instead of identical. It's slower to check but stops rerenders
;;   {:wrap [(helix.core/memo =)]}


  (d/div {:class "item-wrapper flex flex-col"}
         (d/div {:class "item-header-wrapper flex w-full mt-2 border "}
                (d/div {:class "flex items-center justify-between w-full p-2"}
                       (d/div {:class "flex w-1/2 items-center"}
                              ($ :span {:class "w-2/12"} (str index "."))
                              ($ :span {:class "w-6/12"} (str item-name))

                              ($ CompanyItemsDropDown/Core {:supplier-data item-company-items})

                              ($ :span {:class "w-4/12"} recipe-line-item-total-cost))
                       ($ rdd.components.recipe.recipe-editor.rows.atomic-item.tool-bar/Core {:item-yield (or item-yield
                                                                                                              1)
                                                                                              :item-yield-uom (or item-yield-uom
                                                                                                                  item-default-uom)

                                                                                              :recipe-line-item-uuid recipe-line-item-uuid
                                                                                              :recipe-line-item-quantity recipe-line-item-quantity

                                                                                              :recipe-line-item-quantity-uom recipe-line-item-quantity-uom

                                                                                              :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler
                                                                                              :update-recipe-line-item-quantity-uom-handler update-recipe-line-item-quantity-uom-handler})))))