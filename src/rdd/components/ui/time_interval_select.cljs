(ns rdd.components.ui.time-interval-select
  (:require [helix.core :refer [$]]
            [rdd.components.ui.simple-select :refer [SimpleSelect]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.utils.select-utils :refer [match-option-by-keyword]]))

(defnc TimeIntervalSelect
  [{:keys [value
           on-change]}]

  (let [options [{:title "Seconds"
                  :ident :time.interval/SECOND
                  :code "sec"}
                 {:title "Minute"
                  :ident :time.interval/MINUTE
                  :code "min"}
                 {:title "Hour"
                  :ident :time.interval/HOUR
                  :code "hour"}]

        matched-option (match-option-by-keyword options value :ident)
        converted-value (or (:title matched-option)
                            "Select interval")]

    ($ SimpleSelect {:value converted-value
                     :on-existing-selected #(on-change (keyword (:ident %)))
                     :options options})))