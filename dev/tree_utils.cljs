


;; (defn parse-tree-to->db!
;;   [conn data]

;;   (let [item-uuid (-> data :item/uuid)
;;         is-item? item-uuid
;;         children (-> data :composite/contains)]

;;     (if is-item?
;;       ;; Item
;;       (let [name (-> data :item/name)
;;             yield (-> data :measurement/yield)
;;             uom-code (-> data :measurement/uom :uom/code)
;;             recipe-line-items (mapv #(parse-tree-to->db! conn %) children)
;;             recipe-line-item-uuids (map :recipe-line-item/uuid recipe-line-items)
;;             item-payload [[:db/add -1 :item/uuid item-uuid]
;;                           [:db/add -1 :item/name name]
;;                           [:db/add -1 :measurement/yield yield]
;;                           [:db/add -1 :measurement/uom [:uom/code uom-code]]]
;;             item-rlis-payload (map (fn [uuid]
;;                                      [:db/add -1 :composite/contains [:recipe-line-item/uuid uuid]]) recipe-line-item-uuids)
;;             payload (into item-rlis-payload item-payload)]

;;         (d/transact! conn payload)
;;         data)

;;       ;; Recipe line item
;;       (let [rli-uuid (-> data :recipe-line-item/uuid)
;;             item-data (first children)
;;             item (parse-tree-to->db! conn item-data)
;;             item-uuid (:item/uuid item)
;;             quantity (-> data :measurement/quantity)
;;             uom-code (-> data :measurement/uom :uom/code)
;;             payload [{:recipe-line-item/uuid rli-uuid
;;                       :measurement/quantity quantity
;;                       :measurement/uom [:uom/code uom-code]
;;                       :composite/contains [:item/uuid item-uuid]}]]

;;         (d/transact! conn payload)
;;         data))))

;; (defn tree->db!
;;   [data]
;;   (parse-tree-to->db! @dsdb (:item data))
;;   (publish! {:topic :remote-db-loaded}))