(ns rdd.models.process
  (:require [clojure.set]
            [datascript.core :as d]
            [rdd.db :refer [db]]))

(defn processes
  []
  (flatten (d/q '[:find (pull ?e [*
                                  {:measurement/uom [:uom/uuid]}])
                  :where [?e :process/uuid _]]
                (db))))


#_(tap> (processes))