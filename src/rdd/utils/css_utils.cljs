(ns rdd.utils.css-utils
  (:require ["@blueprintjs/core" :refer [Classes]]))

(defn get-class [key]
  (-> (js->clj Classes :keywordize-keys true)
      key))

(get-class :MULTISTEP_DIALOG_PANELS)