(ns rdd.components.recipe.recipe-editor.rows.composite-item.tool-bar
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [applied-science.js-interop :as j]
            [helix.core :refer [$ defnc]]
            [rdd.converters.uom]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]))

(defnc Core
  "Recipe line item controls. Used to set all recipe line item level settings, qty, company-item etc."
  [{:keys [recipe-line-item-quantity
           item-yield
           recipe-line-item-uuid
           update-recipe-line-item-quantity-handler
           update-recipe-line-item-quantity-uom-handler
           item-yield-uom
           recipe-line-item-quantity-uom]}]

  (let [recipe-line-item-quantity-uom-selected-handler (hooks/use-callback :once (fn [uom]
                                                                                   (update-recipe-line-item-quantity-uom-handler recipe-line-item-uuid (.. uom -title))))

        item-yield-uom-renderer (hooks/use-memo :once (fn [item opts]
                                                        (j/let [^js {:keys [title]} item]
                                                          ($ MenuItem {:onClick (fn [_] (recipe-line-item-quantity-uom-selected-handler item))
                                                                       :active (j/get-in opts [:modifiers :active])
                                                                       :key title
                                                                       :text title}))))

        pred-filter (hooks/use-memo :once (fn [query film index exactMatch]
                                            (if (empty? query)
                                              true
                                              (re-find (re-pattern query) (.. film -title)))))]

    (d/div {:class "item-quantity flex flex-col items-center"}
           (d/div {:class "flex"}
                  (d/span "Qty: ")
                  ($ InputGroup {:value recipe-line-item-quantity
                                 :small true
                                 :onChange #(update-recipe-line-item-quantity-handler recipe-line-item-uuid (.. % -target -value))})

                  (d/div {:class "border-2"}
                         ($ Select {:popoverProps (j/lit {:minimal true})
                                    :itemRenderer item-yield-uom-renderer
                                    :itemPredicate pred-filter
                                    :onItemSelect recipe-line-item-quantity-uom-selected-handler
                                    :tagRenderer (fn [item]
                                                   (:title item))
                                    :items (j/lit [{:title "gr"}
                                                   {:title "lb"}])}
                            ($ Button {:text recipe-line-item-quantity-uom
                                       :small true
                                       :minimal true
                                       :rightIcon "double-caret-vertical"}))))

           (d/div {:class "recipe-yield flex mt-2"}
                  (d/span "Yield: ")
                  ($ InputGroup {:value item-yield
                                 :small true
                                 :onChange #(update-recipe-line-item-quantity-handler recipe-line-item-uuid (.. % -target -value))})

                  (d/div {:class "border-2"}
                         ($ Select {:popoverProps (j/lit {:minimal true})
                                    :itemRenderer item-yield-uom-renderer
                                    :itemPredicate pred-filter
                                    :onItemSelect recipe-line-item-quantity-uom-selected-handler
                                    :tagRenderer (fn [item]
                                                   (:title item))
                                    :items (j/lit [{:title "gr"}
                                                   {:title "lb"}])}
                            ($ Button {:text item-yield-uom
                                       :small true
                                       :minimal true
                                       :rightIcon "double-caret-vertical"})))))))