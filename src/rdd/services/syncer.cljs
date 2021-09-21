(ns rdd.services.syncer
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [rdd.services.event-bus :refer [subscribe!]]))

(subscribe! :db-updated (fn [& args] (tap> args)))

;; #_(defstate ^{:on-reload :noop} )