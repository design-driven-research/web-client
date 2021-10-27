(ns rdd.components.ui.time-editor
  (:require ["@blueprintjs/core" :refer [NumericInput]]
            [rdd.utils.debounce :refer [debounce]]
            [rdd.components.ui.time-interval-select :refer [TimeIntervalSelect]]
            [helix.hooks :as hooks]
            [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(defnc TimeEditor
  "Duration and interval control."
  [{:keys [duration
           interval
           on-duration-changed
           on-time-interval-changed]}]

  (let [[local-duration set-local-duration!] (hooks/use-state duration)
        duration-changed-debounced (hooks/use-callback :once (debounce
                                                              #(on-duration-changed %)
                                                              1000))

        on-local-duration-changed (hooks/use-callback :once (fn [duration duration-str] (set-local-duration! duration-str)
                                                              (duration-changed-debounced duration)))]


    (hooks/use-effect [duration] (set-local-duration! duration))

    (d/div {:class "w-full flex items-center"}
           (d/div {:class " w-8/12"}
                  ($ NumericInput {:value local-duration
                                   :allowNumericCharactersOnly false
                                   :clampValueOnBlur true
                                   :fill true
                                   :minorStepSize 0.01
                                   :min 0
                                   :small true
                                   :onValueChange on-local-duration-changed}))

           (d/div {:class "ml-2 w-4/12"}
                  ($ TimeIntervalSelect {:value interval
                                         :on-change on-time-interval-changed})))))