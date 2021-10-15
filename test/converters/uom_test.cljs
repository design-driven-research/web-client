(ns converters.uom-test
  (:require
   [rdd.converters.uom :refer [quantity-in-uom generate-conversions-lookup-table]]
   [clojure.test :as t :refer [deftest is testing]]))

(deftest conversions
  (testing "Can convert a uom"
    (let [conversions #{{:from-uom-code "kg" :to-uom-code "gr" :quantity 1000}
                        {:from-uom-code "gr" :to-uom-code "gr" :quantity 1}
                        {:from-uom-code "pallet" :to-uom-code "case" :quantity 50}
                        {:from-uom-code "lb" :to-uom-code "gr" :quantity 453.1}
                        {:from-uom-code "case" :to-uom-code "lb" :quantity 25}}
          mapping (generate-conversions-lookup-table conversions)]
      (is (= (quantity-in-uom 5 "case" "lb" mapping)
             {:quantity 5 :from "case" :to "lb" :factor 25 :total 125})
          "Should be able to convert directly related in mapping")

      (is (= (quantity-in-uom 5 "lb" "case" mapping)
             {:quantity 5 :from "lb" :to "case" :factor 0.04 :total 0.2})
          "Should be able to convert in either direction")

      (is (= (quantity-in-uom 1000 "kg" "case" mapping)
             {:quantity 1000 :from "kg" :to "case" :factor 0.08828073273008165 :total 88.28073273008165})
          "Should be able to convert distant conversions")

      (is (= (quantity-in-uom 1 "kg" "kg" mapping)
             {:quantity 1 :from "kg" :to "kg" :factor 1 :total 1})
          "Should return no change when the same UOM")

      (is (:has-error? (quantity-in-uom 1 "kg" :invalid-uom mapping))
          "Should return an error when no path is found"))))
