(ns rdd.components.recipe.recipe-editor.rows.atomic-item.tool-bar
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [applied-science.js-interop :as j]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.converters.uom]))

(defnc Core
  "Atomic item controls"
  [{:keys [recipe-line-item-quantity
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

    (d/div {:class "flex flex-col"}
           (d/div {:class "item-quantity flex items-center"}

                  (d/span {:class "mr-2"} "Qty: ")
                  (d/div {:class "mr-2"}
                         ($ InputGroup {:value recipe-line-item-quantity
                                        :small true
                                        :onChange #(update-recipe-line-item-quantity-handler {:uuid recipe-line-item-uuid
                                                                                              :quantity (.. % -target -value)})}))


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
                                :rightIcon "double-caret-vertical"})))

           (d/div {:class "flex items-center mt-2"}
                  (d/span {:class "mr-2"} "Default UOM")
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
                                :rightIcon "double-caret-vertical"}))))))