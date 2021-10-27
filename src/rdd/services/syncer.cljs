(ns rdd.services.syncer
  (:require-macros
   [mount.core :refer [defstate]]
   [cljs.core.async.macros :refer [go-loop]])
  (:require [ajax.core :refer [POST]]
            [cljs.core.async :refer [<! chan put! timeout]]
            [rdd.services.event-bus :refer [subscribe!]]))

(defstate queue
  :start (let [c (chan)]
           (js/console.log "Creating the transactor queue")
           c))

(subscribe!
 :update/recipe-line-item
 (fn [data]
   (POST "http://localhost:3000/api/composites/recipe-line-items" {:params data})))

(defn enqueue-tx
  [tx-data]
  (js/console.log)
  (put! @queue tx-data))

(subscribe! :local-transaction-update (fn [tx-data]
                                        (enqueue-tx tx-data)))

#_(publish! {:topic :sys/init})

(defn process-tx-data
  [tx-data]
  (let [c (chan)]
    (POST
      "http://localhost:3000/api/transactor"
      {:params {:topic :local/tx-data
                :tx-data tx-data}
       :handler #(put! c %)})
    c))

(go-loop []
  (let [tx-data (<! @queue)]
    (<! (process-tx-data tx-data))
    (<! (timeout 50))
    (recur)))


