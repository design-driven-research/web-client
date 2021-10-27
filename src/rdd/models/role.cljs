(ns rdd.models.role
  (:require [clojure.set]
            [datascript.core :as d]
            [rdd.db :refer [db]]))

(defn roles
  []
  (flatten (d/q '[:find (pull ?e [*])
                  :where [?e :role/uuid _]]
                (db))))