(ns cljs.user
  (:require
   [rdd.services.store :as store]
   [postmortem.core :as pm]))

(defn reset-postmortem!
  []
  (pm/reset!))

(defn tap-current-state!
  []
  (tap> (store/item->tree "Wrap")))