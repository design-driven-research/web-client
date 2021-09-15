(ns rdd.services.event-bus
  (:require-macros
   [cljs.core.async.macros :refer (go)])
  (:require
   [mount.core :refer [defstate]]
   [cljs.core.async :refer [chan <! put! close!]]))

(declare process-queue)

(defstate bus
  :start (let [c (chan)]
           (js/console.log "Starting event bus")
           c)
  :stop (close! bus))

(defonce subscriptions (atom []))

#_(reset! subscriptions [])
#_@subscriptions

(defn subscribe
  [topic handler]
  (swap! subscriptions conj {:topic topic
                             :handler handler}))

(defn process-queue
  [{:keys [topic data]}]
  (doseq [{:keys [topic' handler]} @subscriptions]
    (handler data)))

(defn start-queue
  [c]
  (go
    (while true
      (process-queue (<! c)))))

(start-queue @bus)

(defn publish
  [data]
  (put! @bus data))

#_(publish {:topic "yes"
            :data {:id 10}})
#_@subscriptions

#_(subscribe "yes" (fn [data] (js/console.log "Call back baby!")))