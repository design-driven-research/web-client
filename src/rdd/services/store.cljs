(ns rdd.services.store
  (:require [rdd.services.web-socket :refer [send!]]))

(defn load-initial!
  []
  (send! :id :data/load-initial! :data {} :reply? (fn [reply] (tap> reply))))

(load-initial!)