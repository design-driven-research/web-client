(ns rdd.services.syncer
  (:require [rdd.services.event-bus :refer [subscribe!]]))

(subscribe! :db-update (fn [data]
                         (tap> data)))