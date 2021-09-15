(ns dev.user
  (:require [datascript.core :as d]
            [rdd.db :as db]))

#_(tap> (d/datoms @db/dsdb :eavt))

(def sample '({:value
               {:measured_in ({:_type "UOM", :name "Each", :_id 16, :code "ea", :type "COUNT"})
                :yield 1.0
                :_type "Item"
                :name "Chorizo Family Pack"
                :_id 23
                :made_of
                ({:_type "RecipeLineItem"
                  :measured_in ({:code "ea", :_type "UOM", :name "Each", :measured_in.quantity 50, :_id 16, :type "COUNT"})
                  :_id 31
                  :made_of
                  ({:measured_in ({:_type "UOM", :name "Each", :_id 16, :code "ea", :type "COUNT"})
                    :yield 1.0
                    :_type "Item"
                    :name "Chorizo Wrap"
                    :_id 22
                    :made_of
                    ({:_type "RecipeLineItem"
                      :measured_in
                      ({:code "gr"
                        :divides_into ({:divides_into.quantity 1, :code "gr", :_type "UOM", :name "Gram", :_id 14, :type "WEIGHT"})
                        :_type "UOM"
                        :name "Gram"
                        :measured_in.quantity 30
                        :_id 14
                        :type "WEIGHT"})
                      :_id 30
                      :made_of
                      ({:measured_in
                        ({:code "gr"
                          :divides_into
                          ({:divides_into.quantity 1, :code "gr", :_type "UOM", :name "Gram", :_id 14, :type "WEIGHT"})
                          :_type "UOM"
                          :name "Gram"
                          :_id 14
                          :type "WEIGHT"})
                        :yield 30.0
                        :_type "Item"
                        :name "Master Mix"
                        :_id 21
                        :made_of
                        ({:_type "RecipeLineItem"
                          :measured_in
                          ({:code "gr"
                            :divides_into
                            ({:divides_into.quantity 1, :code "gr", :_type "UOM", :name "Gram", :_id 14, :type "WEIGHT"})
                            :_type "UOM"
                            :name "Gram"
                            :measured_in.quantity 20
                            :_id 14
                            :type "WEIGHT"})
                          :_id 29
                          :made_of
                          ({:measured_in
                            ({:code "gr"
                              :divides_into
                              ({:divides_into.quantity 1, :code "gr", :_type "UOM", :name "Gram", :_id 14, :type "WEIGHT"})
                              :_type "UOM"
                              :name "Gram"
                              :_id 14
                              :type "WEIGHT"})
                            :yield 20.0
                            :_type "Item"
                            :name "Spicy Sauce"
                            :_id 19
                            :made_of
                            ({:_type "RecipeLineItem"
                              :measured_in
                              ({:code "lb"
                                :divides_into
                                ({:divides_into.quantity 453.1
                                  :code "gr"
                                  :divides_into
                                  ({:divides_into.quantity 1, :code "gr", :_type "UOM", :name "Gram", :_id 14, :type "WEIGHT"})
                                  :_type "UOM"
                                  :name "Gram"
                                  :_id 14
                                  :type "WEIGHT"})
                                :_type "UOM"
                                :name "Pound"
                                :measured_in.quantity 10
                                :_id 13
                                :type "WEIGHT"})
                              :_id 28
                              :made_of
                              ({:measured_in
                                ({:code "gr"
                                  :divides_into
                                  ({:divides_into.quantity 1, :code "gr", :_type "UOM", :name "Gram", :_id 14, :type "WEIGHT"})
                                  :_type "UOM"
                                  :name "Gram"
                                  :_id 14
                                  :type "WEIGHT"})
                                :yield 1.0
                                :variant_of
                                ({:_type "SKU"
                                  :quoted
                                  ({:_type "Price"
                                    :measured_in
                                    ({:code "lb"
                                      :divides_into
                                      ({:divides_into.quantity 453.1
                                        :code "gr"
                                        :divides_into
                                        ({:divides_into.quantity 1
                                          :code "gr"
                                          :_type "UOM"
                                          :name "Gram"
                                          :_id 14
                                          :type "WEIGHT"})
                                        :_type "UOM"
                                        :name "Gram"
                                        :_id 14
                                        :type "WEIGHT"})
                                      :_type "UOM"
                                      :name "Pound"
                                      :measured_in.quantity 5
                                      :_id 13
                                      :type "WEIGHT"})
                                    :_id 26
                                    :price 25.0})
                                  :_id 25
                                  :sku "P001"})
                                :_type "Item"
                                :name "Pepper"
                                :_id 18})}
                             {:_type "RecipeLineItem"
                              :measured_in
                              ({:code "lb"
                                :divides_into
                                ({:divides_into.quantity 453.1
                                  :code "gr"
                                  :divides_into
                                  ({:divides_into.quantity 1, :code "gr", :_type "UOM", :name "Gram", :_id 14, :type "WEIGHT"})
                                  :_type "UOM"
                                  :name "Gram"
                                  :_id 14
                                  :type "WEIGHT"})
                                :_type "UOM"
                                :name "Pound"
                                :measured_in.quantity 20
                                :_id 13
                                :type "WEIGHT"})
                              :_id 27
                              :made_of
                              ({:_type "Item"
                                :name "Salt"
                                :measured_in
                                ({:code "gr"
                                  :divides_into
                                  ({:divides_into.quantity 1, :code "gr", :_type "UOM", :name "Gram", :_id 14, :type "WEIGHT"})
                                  :_type "UOM"
                                  :name "Gram"
                                  :_id 14
                                  :type "WEIGHT"})
                                :_id 17
                                :yield 1.0})})})})})})})})}}))


;; => {:_type "Item",
;;     :name "Chorizo Family Pack",
;;     :_id 23,
;;     :made_of
;;     ({:_type "RecipeLineItem",
;;       :measured_in ({:code "ea", :_type "UOM", :name "Each", :measured_in.quantity 50, :_id 16, :type "COUNT"}),
;;       :_id 31,
;;       :made_of

(declare create-recipe-line-item!
         create-recipe-line-items!
         create-item!
         create-uom!)

(defn create-uom!
  [data]

  (let [id (-> data :_id)
        name (-> data :name)
        code (-> data :code)
        ;; type (-> data :type)

        payload {:db/id id
                 :uom/name name
                 :uom/code code
                 #_#_:uom/type type}]

    (d/transact! db/dsdb [payload])
    id))

(defn create-recipe-line-item!
  [data]
  (let [id (-> data :_id)
        child-data (-> data :made_of first)
        uom-code (-> data :measured_in first :code)
        quantity (-> data :measured_in first :measured_in.quantity)

        child-item-id (create-item! child-data)

        payload {:db/id id
                 :recipe-line-item/child child-item-id
                 :recipe-line-item/uom [:uom/code uom-code]
                 :recipe-line-item/quantity quantity}]

    (d/transact! db/dsdb [payload])
    id))

(defn create-recipe-line-items!
  [recipe-line-items]
  (mapv create-recipe-line-item! recipe-line-items))

(defn create-item!
  [data]
  (let [id (-> data :_id)
        name (-> data :name)
        yield (-> data :yield)
        uom-code (-> data :measured_in first :code)
        recipe-line-items-data (-> data :made_of)
        recipe-line-item-ids (create-recipe-line-items! recipe-line-items-data)

        payload {:db/id id
                 :item/yield yield
                 :item/uom [:uom/code uom-code]
                 :item/name name
                 :item/children recipe-line-item-ids}]
    (d/transact! db/dsdb [payload])
    id))

#_(-> sample
      first
      :value
      create-item!)

#_(tap> (d/datoms @db/dsdb :eavt))