(ns rdd.components.ui.simple-select
  (:require ["@blueprintjs/core" :refer [Button MenuItem]]
            ["@blueprintjs/select" :refer [Select]]
            [clojure.string :as s]
            [applied-science.js-interop :as j]
            [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.hooks :as hooks]))

(defnc SimpleSelect
  "A simple select expects the following props
   value - A scalar
   options - A vector of maps. Each map must include a :title key
   on-existing-selected - Handler called on click or enter of an existing option
   on-create-selected - Handler called on click or enter of 'Create new' - Returns an object with {:type :create :query 'value typed in'}
   create-new-label - The label to display in the create new menu item

   Example ($ SimpleSelect {:value 'gr' :options [{:title 'gr'} {:title 'lb'}] :on-selected on-selected-handler})
   "
  [{:keys [value
           options
           create-new-label
           on-existing-selected
           on-create-selected]}]

  (let [on-selected-wrapper (hooks/use-callback [on-create-selected
                                                 on-existing-selected] (fn [val]
                                                                         (let [option (js->clj val :keywordize-keys true)
                                                                               is-create? (= :create (:type option))]
                                                                           (if is-create?
                                                                             (on-create-selected option)
                                                                             (on-existing-selected option)))))
        renderer (hooks/use-memo [on-create-selected
                                  on-existing-selected] (fn [item opts]
                                                          (j/let [^js {:keys [title]} item]
                                                            ($ MenuItem {:onClick #(on-selected-wrapper item)
                                                                         :active (j/get-in opts [:modifiers :active])
                                                                         :key title
                                                                         :text title}))))

        create-new-renderer (hooks/use-memo [on-create-selected
                                             on-existing-selected] (fn [query opts]
                                                                     ($ MenuItem {:onClick #(on-selected-wrapper
                                                                                             {:type :create
                                                                                              :query query})
                                                                                  :icon "add"
                                                                                  :active opts
                                                                                  :key "new"
                                                                                  :text (if create-new-label
                                                                                          (str create-new-label " " query)
                                                                                          query)})))

        predicate-filter (hooks/use-memo [options] (fn [query option]
                                                     (if (empty? query)
                                                       true
                                                       (let [option-title (s/lower-case (j/get option :title))
                                                             query (s/lower-case query)
                                                             pattern (re-pattern query)]
                                                         (re-find pattern option-title)))))

        create-new-from-query-handler (hooks/use-callback :once (fn [query option]
                                                                  {:type :create
                                                                   :query query}))]


    ($ :div
       ($ Select {:popoverProps (j/lit {:minimal true})
                  :createNewItemFromQuery create-new-from-query-handler
                  :createNewItemRenderer create-new-renderer
                  :itemRenderer renderer
                  :itemPredicate predicate-filter
                  :onItemSelect #(on-selected-wrapper %)
                  :items (clj->js options)}
          ($ Button {:text value
                     :small true
                     :minimal true
                     :rightIcon "chevron-down"})))))
