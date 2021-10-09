(ns rdd.services.syncer
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [rdd.services.event-bus :refer [subscribe! publish!]]
            [ajax.core :refer [GET POST]]
            [rdd.services.store :as store]
            [cognitect.transit :as t]
            [postmortem.core :as pm]))

(subscribe! :db-updated (fn [& args]))

(subscribe! :local-transaction-update (fn [tx-data]
                                        (POST "http://localhost:3000/api/transactor" {:params {:topic :local/tx-data
                                                                                               :tx-data tx-data}})))

(subscribe!
 :update/recipe-line-item
 (fn [data]
   (POST "http://localhost:3000/api/composites/recipe-line-items" {:params data})))

#_(publish! {:topic :sys/init})
