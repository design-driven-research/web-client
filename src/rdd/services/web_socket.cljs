(ns rdd.services.web-socket
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]
   [mount.core :refer [defstate]])
  (:require
   [postmortem.core :as pm]
   [cljs.core.async :refer [chan <! put! close! tap mult]]
   [rdd.services.event-bus :as bus]
   [taoensso.sente :as sente :refer (cb-success?)]))

(declare start-listeners)

(defstate ^{:on-reload :noop} conn
  :start (do
           (tap> "Connecting ws")
           (js/console.log "Creating websocket")
           (let [{:keys [chsk ch-recv send-fn state]}
                 (sente/make-channel-socket-client!
                  "/chsk"
                  "csrf-token-from-server"
                  {:type :auto
                   :host "localhost"
                   :port 3000})

                 receive-mult (mult ch-recv)]

             (start-listeners (tap receive-mult (chan)))

             {:chsk chsk
              :ch-receive receive-mult
              :ch-send! send-fn
              :ch-state state})))

(defn send!
  "Send data to the channel. Pass in ID of send command and data payload"
  [& {:keys [id data reply? timeout] :or {timeout 5000}}]
  (let [send-fn (:ch-send! @conn)]
    (send-fn [id data]
             timeout
             (when reply?
               reply?))))

(defonce initialized? (atom false))

(defn check-initialized
  [evt]
  (when (not @initialized?)
    (if (-> evt :state deref :open?)
      (do
        (js/console.log "ws Ready")
        (reset! initialized? true)
        (bus/publish! {:topic :ws-ready}))
      (js/console.log "ws Not Ready"))))

(defn start-listeners
  [c]
  (go
    (while true
      (check-initialized (<! c)))))


;; (chsk-send! [:data/update! {:db/id 001 :node/name "Chorizo"}])