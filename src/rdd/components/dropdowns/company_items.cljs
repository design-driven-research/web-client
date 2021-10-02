(ns rdd.components.dropdowns.company-items
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [applied-science.js-interop :as j]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.converters.uom]))

(defnc Core
  [{:keys [supplier-data]}]

  (let [items (map (fn [ci] {:title (:company-item-name ci)}) supplier-data)

        pred-filter (hooks/use-memo :once (fn [query film index exactMatch]
                                            (if (empty? query)
                                              true
                                              (re-find (re-pattern query) (.. film -title)))))

        item-yield-uom-renderer (hooks/use-memo :once (fn [item opts]
                                                        (j/let [^js {:keys [title]} item]
                                                          ($ MenuItem {:onClick (fn [_] (js/console.log "clicked"))
                                                                       :active (j/get-in opts [:modifiers :active])
                                                                       :key title
                                                                       :text title}))))]

    (d/div {:class "flex items-center mt-2"}
           (d/span {:class "mr-2"} "Select supplier")
           ($ Select {:popoverProps (j/lit {:minimal true})
                      :itemRenderer item-yield-uom-renderer
                      :itemPredicate pred-filter
                      :onItemSelect (fn [_] (js/console.log "clicked"))
                      :tagRenderer (fn [item]
                                     (:title item))
                      :items (clj->js items)}

              ($ Button {:text "ABC Company"
                         :small true
                         :minimal true
                         :rightIcon "double-caret-vertical"})))))