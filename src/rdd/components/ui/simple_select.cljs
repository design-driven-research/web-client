(ns rdd.components.ui.simple-select
  (:require ["@blueprintjs/core" :refer [Button MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [applied-science.js-interop :as j]
            [helix.core :refer [$ defnc]]
            [helix.hooks :as hooks]))

(defnc SimpleSelect
  [{:keys [on-selected
           options
           value]}]

  (let [on-selected-wrapper (fn [val] (on-selected (js->clj val :keywordize-keys true)))
        renderer (hooks/use-memo :once (fn [item opts]
                                         (j/let [^js {:keys [title]} item]
                                           ($ MenuItem {:onClick #(on-selected-wrapper item)
                                                        :active (j/get-in opts [:modifiers :active])
                                                        :key title
                                                        :text title}))))

        predicate-filter (hooks/use-memo :once (fn [query film index exactMatch]
                                                 (if (empty? query)
                                                   true
                                                   (re-find (re-pattern query) (.. film -title)))))]

    ($ :div
       ($ Select {:popoverProps (j/lit {:minimal true})
                  :itemRenderer renderer
                  :itemPredicate predicate-filter
                  :onItemSelect #(on-selected-wrapper %)
                  :items (clj->js options)}
          ($ Button {:text value
                     :small true
                     :minimal true
                     :rightIcon "chevron-down"})))))