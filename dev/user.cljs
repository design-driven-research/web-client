(ns user
  (:require [datascript.core :as d]
            [postmortem.core :as pm]))

(defn reset-postmortem!
  []
  (pm/reset!))