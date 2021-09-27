(ns rdd.components.recipe.recipe-editor.core
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [applied-science.js-interop :as j]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]))


(declare Item Children)

(defnc Editor
  [{:keys [item
           update-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item]
    {:keys [children]} :item}]

  (let [has-children? (seq children)]
    (d/div {:class "mt-2 xl:w-9/12 md:w-full"}
           (d/h1 (:name item))
           (d/p {:class "text-lg"} "Line items")
           (when has-children?
             ($ rdd.components.recipe.recipe-editor.core/Children {:item item
                                                                   :update-quantity-handler update-quantity-handler
                                                                   :update-recipe-line-item-uom update-recipe-line-item-uom
                                                                   :create-recipe-line-item create-recipe-line-item})))))


(defnc UsageControls
  [{:keys [quantity
           recipe-line-item-id
           update-quantity-handler
           update-recipe-line-item-uom
           uom]}]

  (let [uom-selected-handler (hooks/use-callback :once (fn [uom]
                                                         (update-recipe-line-item-uom recipe-line-item-id (.. uom -title))))

        uomRenderer (hooks/use-memo :once (fn [item opts]
                                            (j/let [^js {:keys [title]} item]
                                              ($ MenuItem {:onClick (fn [_] (uom-selected-handler item))
                                                           :active (j/get-in opts [:modifiers :active])
                                                           :key title
                                                           :text title}))))

        pred-filter (hooks/use-memo :once (fn [query film index exactMatch]
                                            (if (empty? query)
                                              true
                                              (re-find (re-pattern query) (.. film -title)))))]
    (d/div {:class "item-quantity flex items-center"}
           (d/div {:class "mr-2"}
                  ($ InputGroup {:value quantity
                                 :small true
                                 :onChange #(update-quantity-handler recipe-line-item-id (.. % -target -value))}))
           (d/div {:class "border-2"}
                  ($ Select {:popoverProps (j/lit {:minimal true})
                             :itemRenderer uomRenderer
                             :itemPredicate pred-filter
                             :onItemSelect uom-selected-handler
                             :tagRenderer (fn [item]
                                            (:title item))
                             :items (j/lit [{:title "gr"}
                                            {:title "lb"}])}
                     ($ Button {:text uom
                                :small true
                                :minimal true
                                :rightIcon "double-caret-vertical"}))))))

(defnc Item
  [{:keys [item
           index
           update-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item]
    {:keys [id uuid name quantity recipe-line-item-id uom total-cost children]} :item}]

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
                                ($ :span {:class "w-10/12"} (str name))
                                #_($ Button {:text "Add"
                                             :onClick (fn []
                                                        (create-recipe-line-item id 17))}))
                         ($ UsageControls {:update-quantity-handler update-quantity-handler
                                           :update-recipe-line-item-uom update-recipe-line-item-uom
                                           :recipe-line-item-id recipe-line-item-id
                                           :quantity quantity
                                           :uom uom})))

           (when (and has-children?
                      is-open?)
             ($ :div
                ($ rdd.components.recipe.recipe-editor.core/Children {:item item
                                                                      :update-quantity-handler update-quantity-handler
                                                                      :update-recipe-line-item-uom update-recipe-line-item-uom
                                                                      :create-recipe-line-item create-recipe-line-item}))))))



(defnc Children
  [{:keys [update-quantity-handler
           update-recipe-line-item-uom
           create-recipe-line-item]
    {:keys [children]} :item}]

  (d/div {:class "flex h-full"}
         (d/div {:class "w-8 h-full"}
                (d/div {:class "border-l border-dashed h-full my-2 ml-4"}))
         (d/div {:class "flex flex-col w-full"}
                (for-indexed [child index children]
                             ($ rdd.components.recipe.recipe-editor.core/Item
                                {:key (:id child)
                                 :index (inc index)
                                 :item child
                                 :create-recipe-line-item create-recipe-line-item
                                 :update-recipe-line-item-uom update-recipe-line-item-uom
                                 :update-quantity-handler update-quantity-handler})))))


