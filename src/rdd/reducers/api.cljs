(ns rdd.reducers.api)

(defmulti item-editor-reducer
  (fn [_ action] (first action)))
