(ns rdd.converters.item)

(defn item->tree
  [e]
  (let [is-item? (:item/uuid e)
        has-children? (:composite/contains e)
        is-recipe-line-item? (not is-item?)

        build-item (fn [item]
                     (let [children (mapv item->tree (:composite/contains item))
                           id (:db/id item)
                           uuid (:item/uuid item)
                           name (:item/name item)
                           yield (:measurement/yield item)
                           total-children-cost (->> children
                                                    (map :total-cost)
                                                    (reduce +))
                           normalized-cost (or (/ total-children-cost yield) 1)
                           response {:uuid uuid
                                     :id id
                                     :name name
                                     :yield yield
                                     :normalized-cost normalized-cost
                                     :children children}]
                       response))

        build-recipe-line-item (fn [recipe-line-item]
                                 (let [item (item->tree (first (:composite/contains recipe-line-item)))
                                       recipe-line-item-uuid (:recipe-line-item/uuid recipe-line-item)
                                       recipe-line-item-id (:db/id recipe-line-item)
                                       quantity (:measurement/quantity recipe-line-item)
                                       uom (-> recipe-line-item :measurement/uom :uom/code)
                                       total-cost (* quantity (:normalized-cost item))
                                       response (merge item {:recipe-line-item-uuid recipe-line-item-uuid
                                                             :recipe-line-item-id recipe-line-item-id
                                                             :quantity quantity
                                                             :total-cost total-cost
                                                             :uom uom})]
                                   response))

        build-base-item (fn [item]
                          (let [id (:db/id item)
                                uuid (:item/uuid item)
                                name (:item/name item)
                                yield (:measurement/yield item)
                                uom (-> item :measurement/uom :uom/code)
                                cost-per-yield 1
                                normalized-cost (/ cost-per-yield yield)
                                response {:uuid uuid
                                          :id id
                                          :uom uom
                                          :normalized-cost normalized-cost
                                          :name name}]
                            response))]

    (cond
      (and is-item? has-children?) (build-item e)
      is-recipe-line-item? (build-recipe-line-item e)
      :default (build-base-item e))))


