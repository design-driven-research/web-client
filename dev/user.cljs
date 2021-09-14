(ns dev.user
  (:require [datascript.core :as d]))


(def sample '({:value
               {:_type "Item"
                :name "Chorizo Family Pack"
                :_id 23
                :made_of
                ({:_type "RecipeLineItem"
                  :measured_in ({:code "ea", :_type "UOM", :name "Each", :measured_in.quantity 50, :_id 16, :type "COUNT"})
                  :_id 31
                  :made_of
                  ({:_type "Item"
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
                      ({:_type "Item"
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
                          ({:_type "Item"
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
                              ({:_type "Item"
                                :name "Pepper"
                                :_id 18
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
                                  :sku "P001"})})}
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
                              :made_of ({:_type "Item", :name "Salt", :_id 17})})})})})})})})}}))

(-> sample
    first
    :value)