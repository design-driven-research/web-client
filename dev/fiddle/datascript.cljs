(ns dev.fiddle.datascript
  (:require [datascript.core :as d]
            [db :as db]))

(d/q '[:find [(pull ?e [*]) ...]
       :where [?e :node/name ?name]]
     @db/dsdb)