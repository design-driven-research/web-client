(ns bangfe.infinite
  (:require
   [rdd.utils.for-indexed :refer [for-indexed]]
   [clojure.spec.alpha :as s]))

(defn- states-lookup-table
  [fsm]
  (let [states (::states fsm)]
    (into {} (map (juxt ::id identity) states))))

(defn- state-index-lookup-table
  [fsm]
  (let [states (::states fsm)]
    (into {} (for-indexed [{::keys [id]} idx states]
                          {id idx}))))

(defn index-of-state
  [fsm id]
  (let [lookup-table (state-index-lookup-table fsm)]
    (id lookup-table)))

(defn update-context!
  [fsm id value]
  (let [state-index (index-of-state fsm id)
        assoc-path [::states state-index ::context]]
    (assoc-in fsm assoc-path value)))

(defn validate!
  [fsm]
  fsm)