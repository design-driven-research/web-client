(ns rdd.converters.item)

(defn item->tree
  [e]
  (let [is-item? (:item/children e)
        is-recipe-line-item? (:recipe-line-item/child e)

        build-item-with-children (fn [node]
                                   (let [children (mapv item->tree (:item/children node))
                                         id (-> node :db/id)
                                         name (-> node :item/name)
                                         yield (-> node :item/yield)
                                         total-children-cost (->> children
                                                                  (map :total-cost)
                                                                  (reduce +))
                                         normalized-cost (or (/ total-children-cost yield) 1)]
                                     {:id id
                                      :name name
                                      :yield yield
                                      :normalized-cost normalized-cost
                                      :children children}))

        build-recipe-line-item (fn [recipe-line-item]
                                 (let [node (item->tree (:recipe-line-item/child recipe-line-item))
                                       recipe-line-item-id (:db/id recipe-line-item)
                                       quantity (:recipe-line-item/quantity recipe-line-item)
                                       uom (-> recipe-line-item :recipe-line-item/uom :uom/code)
                                       total-cost (* quantity (-> node :normalized-cost))]
                                   (merge node {:quantity quantity
                                                :recipe-line-item-id recipe-line-item-id
                                                :total-cost total-cost
                                                :uom uom})))

        build-base-item (fn [node]
                          (let [id (-> node :db/id)
                                name (-> node :item/name)
                                yield (-> node :item/yield)
                                uom (-> node :item/uom :uom/code)
                                cost-per-yield 1
                                normalized-cost (/ cost-per-yield yield)]
                            {:id id
                             :uom uom
                             :normalized-cost normalized-cost
                             :name name}))]

    (cond
      is-item? (build-item-with-children e)
      is-recipe-line-item? (build-recipe-line-item e)
      :default (build-base-item e))))


