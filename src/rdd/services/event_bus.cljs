(ns rdd.services.event-bus
  (:require-macros
   [mount.core :refer [defstate]]
   [cljs.core.async.macros :refer (go)])
  (:require

   [cljs.core.async :refer [chan <! put! close!]]))

(declare process-queue)

(defstate ^{:on-reload :noop} bus
  :start (let [c (chan)]
           (js/console.log "Starting event bus")
           c))

(defonce subscriptions (atom []))

(defn- unsubscribe!
  [id]
  (js/console.log "Unsubscribing " id)
  (swap! subscriptions (fn [subs]
                         (filter (fn [sub] (not= (:id sub) id)) subs))))

(defn subscribe!
  "Subscribe to a topic on the global event bus. Pass in a topic as a string or keyword.
   This returns an unsubscribe method
   
   (def unsubscribe (subscribe! :test (fn [] (js/console.log 'Called'))))

   (publish! {:topic :test :data {:id 42}})
   
   (unsubscribe)
   "
  [topic handler]
  (let [id (random-uuid)]
    (swap! subscriptions conj {:id id
                               :topic topic
                               :handler handler})
    (partial unsubscribe! id)))

(defn filter-by-topic [topic]
  (fn [sub] (= (:topic sub) topic)))

(defn process-queue
  [{:keys [topic data]}]
  (let [filtered-subs (filter (filter-by-topic topic) @subscriptions)]
    (doseq [{:keys [handler]} filtered-subs]
      (handler data))))

(defn start-queue
  [c]
  (go
    (while true
      (process-queue (<! c)))))

(start-queue @bus)

(defn publish!
  [data]
  (put! @bus data))

#_(publish {:topic "yes"
            :data {:id 10}})

#_(reset! subscriptions [])
#_@subscriptions

#_(subscribe "yes" (fn [data] (js/console.log "Call back baby!")))

(comment


  (def hey (subscribe! :test (fn [] (js/console.log "Called"))))

  (publish! {:topic :test})

  (hey)
  ;; 
  )
