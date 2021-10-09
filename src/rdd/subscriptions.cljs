(ns rdd.subscriptions
  (:require [ajax.core :refer [GET]]
            [rdd.db :as db]
            [rdd.services.event-bus :as bus]))

(bus/subscribe!
 :sys/init
 (fn [data]
   (GET "http://localhost:3000/api/custom/initial-data" {:handler db/initial-data->db!})))