(ns rdd.components.recipe.recipe-editor.core
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [applied-science.js-interop :as j]
            [helix.core :refer [$ defnc]]
            [rdd.converters.uom]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]))


(declare Item Children)

(defnc Editor
  [{:keys [item
           update-recipe-line-item-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item]
    {:keys [children]} :item}]

  (tap> item)

  (let [has-children? (seq children)]
    (d/div {:class "mt-2 xl:w-9/12 md:w-full"}
           (d/h1 (:name item))
           (d/p {:class "text-lg"} "Line items")
           (when has-children?
             ($ rdd.components.recipe.recipe-editor.core/Children {:item item
                                                                   :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler
                                                                   :update-recipe-line-item-uom update-recipe-line-item-uom
                                                                   :create-recipe-line-item create-recipe-line-item})))))

(defnc UsageControls
  [{:keys [recipe-line-item-quantity
           item-yield
           recipe-line-item-uuid
           update-recipe-line-item-quantity-handler
           update-recipe-line-item-uom
           item-yield-uom
           recipe-line-item-quantity-uom]}]

  (let [recipe-line-item-quantity-uom-selected-handler (hooks/use-callback :once (fn [uom]
                                                                                   (update-recipe-line-item-uom recipe-line-item-uuid (.. uom -title))))

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

    (d/div {:class "item-quantity flex items-center"}
           (d/div {:class "mr-2"}

                  ($ InputGroup {:value recipe-line-item-quantity
                                 :small true
                                 :onChange #(update-recipe-line-item-quantity-handler recipe-line-item-uuid (.. % -target -value))})

                  ($ InputGroup {:value item-yield
                                 :small true
                                 :onChange #(update-recipe-line-item-quantity-handler recipe-line-item-uuid (.. % -target -value))}))

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
                                :rightIcon "double-caret-vertical"})))

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
                                :rightIcon "double-caret-vertical"}))))))

(defnc Item
  [{:keys [item
           index
           update-recipe-line-item-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item]

    {:keys [item-uuid
            item-name
            item-production-type
            recipe-line-item-quantity
            item-yield
            recipe-line-item-uuid
            item-yield-uom
            recipe-line-item-quantity-uom
            recipe-line-item-total-cost
            children]} :item}]

  ;; Wrap this to force memo to use equility instead of identical. It's slower to check but stops rerenders
  {:wrap [(helix.core/memo =)]}

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
                                ($ :span {:class "w-6/12"} (str item-production-type))
                                ($ :span {:class "w-4/12"} recipe-line-item-total-cost)
                                #_($ Button {:text "Add"
                                             :onClick (fn []
                                                        (create-recipe-line-item id 17))}))
                         ($ UsageControls {:item-yield item-yield
                                           :item-yield-uom item-yield-uom

                                           :recipe-line-item-uuid recipe-line-item-uuid
                                           :recipe-line-item-quantity recipe-line-item-quantity

                                           :recipe-line-item-quantity-uom recipe-line-item-quantity-uom

                                           :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler
                                           :update-recipe-line-item-uom update-recipe-line-item-uom})))

           (when (and has-children?
                      is-open?)
             ($ :div
                ($ rdd.components.recipe.recipe-editor.core/Children {:item item
                                                                      :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler
                                                                      :update-recipe-line-item-uom update-recipe-line-item-uom
                                                                      :create-recipe-line-item create-recipe-line-item}))))))



(defnc Children
  [{:keys [update-recipe-line-item-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item]
    {:keys [children]} :item}]

  (d/div {:class "flex h-full"}
         (d/div {:class "w-8 h-full"}
                (d/div {:class "border-l border-dashed h-full my-2 ml-4"}))
         (d/div {:class "flex flex-col w-full"}
                (for-indexed [child index children]
                             ($ rdd.components.recipe.recipe-editor.core/Item
                                {:key (:item-uuid child)
                                 :index (inc index)
                                 :item child
                                 :create-recipe-line-item create-recipe-line-item
                                 :update-recipe-line-item-uom update-recipe-line-item-uom
                                 :update-recipe-line-item-quantity-handler update-recipe-line-item-quantity-handler})))))


