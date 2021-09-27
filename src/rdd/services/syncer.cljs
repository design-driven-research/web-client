(ns rdd.services.syncer
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [rdd.services.event-bus :refer [subscribe!]]
            [ajax.core :refer [POST]]
            [cognitect.transit :as t]
            [postmortem.core :as pm]))

(subscribe! :db-updated (fn [& args] #_(tap> args)))

(subscribe!
 :update/recipe-line-item
 (fn [data]
   (POST "http://localhost:3000/api/composites/recipe-line-items" {:params data})))