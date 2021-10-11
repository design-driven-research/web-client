(ns rdd.converters.uom
  (:require [clojure.set]
            [goog.string :as gstring]
            [goog.string.format]
            [loom.alg :as alg]
            [loom.graph :as g]))

(defn generate-conversions-lookup-table
  "Takes a set of conversions and generates a lookup table. 
   
   Required keys for each entry: :from-uom-code :to-uom-code :quantity
   
   '#{{:conversion-uuid 'Nhs-KWvQjyf-D2YMZM7bP', :from-uom-code 'kg', :to-uom-code 'gr', :quantity 1000}
     {:conversion-uuid 'ZqGv_fqNsZw0Zem7F2mLm', :from-uom-code 'gr', :to-uom-code 'gr', :quantity 1}
     {:conversion-uuid 'HrsYuIva9akIEH_0fQiGG', :from-uom-code 'pallet', :to-uom-code 'case', :quantity 50}
     {:conversion-uuid 'OciR1EXFmdsYe075q3szn', :from-uom-code 'lb', :to-uom-code 'gr', :quantity 453.1}
     {:conversion-uuid '9NpI7YvNXdjqeu9yNM9NT', :from-uom-code 'case', :to-uom-code 'lb', :quantity 25}}'
   
   Returns:

   {'gr' {'kg' 0.001, 'gr' 1, 'lb' 0.0022070183182520413}
    'kg' {'gr' 1000}
    'lb' {'gr' 453.1, 'case' 0.04}
    'case' {'lb' 25, 'pallet' 0.02}
    'pallet' {'case' 50}}
   
   Example:
   ```clojure
   (generate-conversions-lookup-table conversions)
   ```
   "
  [conversions]
  (reduce
   (fn
     [acc {:keys [from-uom-code to-uom-code quantity]}]
     (-> (assoc-in acc [to-uom-code from-uom-code] (/ 1 quantity))
         (assoc-in [from-uom-code to-uom-code] quantity)))
   {} conversions))

(defn quantity-in-uom
  "Convert quantity from one UOM or a different UOM based on the conversion passed in.
   
   Example: (quantity-in-uom 5 :case :lb conversions)
   
   Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}

   Returns error map if no path is found: {:has-error? true, :error-msg 'No path was found between :case and :lbs'}"
  [quantity from to mapping]
  (if (= from to)
    {:quantity quantity
     :from from
     :to to
     :factor 1
     :total quantity}
    (let [graph (g/graph mapping)
          path (alg/bf-path graph from to)
          missing-path? (nil? path)
          result (reduce (fn [{:keys [factor head]} cur]
                           (let [factor (if head
                                          (* factor (get head cur))
                                          1)]
                             {:factor factor
                              :head (get mapping cur)})) {} path)
          factor (:factor result)]
      (if missing-path?
        {:has-error? true
         :error-msg (gstring/format "No path was found between %s and %s" from to)}
        {:quantity quantity
         :from from
         :to to
         :factor factor
         :total (* quantity factor)}))))

(defn has-path-from-to?
  "Convert quantity from one UOM or a different UOM based on the conversion passed in.
   
   Example: (quantity-in-uom 5 :case :lb conversions)
   
   Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}

   Returns error map if no path is found: {:has-error? true, :error-msg 'No path was found between :case and :lbs'}"
  [from to mapping]
  (if (= from to)
    true
    (let [graph (g/graph mapping)
          path (alg/bf-path graph from to)]
      (boolean path))))
