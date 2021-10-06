(ns rdd.utils.fsm-utils
  (:require
   [tilakone.core :as tk]
   [rdd.utils.for-indexed :refer [for-indexed]]))

(defn states-lookup-table
  [states]
  (into {} (map (juxt ::tk/name identity) states)))

(defn state-index-lookup-table
  [states]
  (into {} (for-indexed [{::tk/keys [name]} idx states]
                        {name idx})))