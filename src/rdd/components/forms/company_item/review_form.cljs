(ns rdd.components.forms.company-item.review-form
  (:require ["@blueprintjs/core" :refer [Button]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [rdd.lib.defnc :refer [defnc]]))

(defnc ReviewForm
  [{:keys [state-info
           on-submit]}]

  (let [context (:context state-info)]
    (d/div
     ($ Button {:intent "primary"
                :onClick on-submit
                :text "Submit all"}))))