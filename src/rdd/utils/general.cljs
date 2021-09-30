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
