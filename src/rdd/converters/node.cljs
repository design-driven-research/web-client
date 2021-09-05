(ns rdd.converters.node)

(defn node->tree
  [e]
  (let [has-child-nodes? (:node/children e)
        has-child-node? (:edge/child e)

        build-node-with-children (fn [node]
                                   (let [children (mapv node->tree (:node/children node))
                                         id (-> node :db/id)
                                         name (-> node :node/name)
                                         yield (-> node :node/yield)
                                         total-children-cost (->> children
                                                                  (map :total-cost)
                                                                  (reduce +))
                                         normalized-cost (/ total-children-cost yield)]
                                     {:id id
                                      :name name
                                      :yield yield
                                      :normalized-cost normalized-cost
                                      :children children}))

        build-edge (fn [edge]
                     (let [node (node->tree (:edge/child edge))
                           quantity (:edge/quantity edge)
                           uom (-> edge :edge/uom :uom/code)
                           total-cost (* quantity (-> node :normalized-cost))]
                       (merge node {:quantity quantity
                                    :total-cost total-cost
                                    :uom uom})))

        build-base-node (fn [node]
                          (let [id (-> node :db/id)
                                name (-> node :node/name)
                                yield (-> node :node/yield)
                                uom (-> node :node/uom :uom/code)
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