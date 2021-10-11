(ns user
  (:require [datascript.core :as d]
            [postmortem.core :as pm]
            [rdd.db :as db]))

(defn reset-postmortem!
  []
  (pm/reset!))