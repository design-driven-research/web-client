(ns rdd.utils.general)

(defn de-nill
  "Removes nil keys from a collection of maps or a single map"
  [data]
  (let [remove-nils-fn (fn [m]
                         (let [valid-keys (for [[k v] m :when (not (nil? v))] k)]
                           (select-keys m valid-keys)))]
    (when data
      (if (map? data)
        (remove-nils-fn data)
        (map remove-nils-fn data)))))

(comment
  (de-nill [{:a nil :b 19}])
  ;; 
  )


(defn generate-lookup-table
  [key coll]
  (reduce #(merge %1 {(key %2) %2}) {} coll))

(comment
  (generate-lookup-table :uuid [{:uuid "4Qc59NC3NXHLd0oAyWyeZ", :position 1286742750677284}
                                {:uuid "EbWSjQh37jwP9VXxrTz6r", :position 2573485501354568}
                                {:uuid "J2YsL3MSKY5avVMk7OtGs", :position 3860228252031853}])
  ;; 
  )


