(ns rdd.components.ui.time-interval-select
  (:require ["@blueprintjs/core" :refer []]
            [helix.core :refer [$]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]))

(defnc TimeIntervalSelect
  [{:keys [value
           on-change]}]

  (let [options [{:title "Seconds"
                  :ident :time.interval/SECOND}
                 {:title "Minute"
                  :ident :time.interval/MINUTE}
                 {:title "Hour"
                  :ident :time.interval/HOUR}]

        matched-option (first (filter (fn [t] (= value (:ident t))) options))
        converted-value (or (:title matched-option)
                            "Select interval")]

    ($ SimpleSelect {:value converted-value
                     :on-existing-selected #(on-change (:ident %))
                     :options options})))
