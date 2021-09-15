(ns rdd.converters.item)

(defn item->tree
  [e]
  (let [has-child-nodes? (:item/children e)
        has-child-node? (:recipe-line-item/child e)

        build-node-with-children (fn [node]
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

        build-edge (fn [edge]
                     (let [node (item->tree (:recipe-line-item/child edge))
                           edge-id (:db/id edge)
                           quantity (:recipe-line-item/quantity edge)
                           uom (-> edge :recipe-line-item/uom :uom/code)
                           total-cost (* quantity (-> node :normalized-cost))]
                       (merge node {:quantity quantity
                                    :edge-id edge-id
                                    :total-cost total-cost
                                    :uom uom})))

        build-base-node (fn [node]
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
      has-child-nodes? (build-node-with-children e)
      has-child-node? (build-edge e)
      :default (build-base-node e))))


