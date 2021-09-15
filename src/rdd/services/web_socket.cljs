(ns rdd.services.web-socket
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require
   [mount.core :refer [defstate]]
   [taoensso.sente :as sente :refer (cb-success?)]))

(defstate conn
  :start  (let [{:keys [chsk ch-recv send-fn state]}
                (sente/make-channel-socket-client!
                 "/chsk"
                 "csrf-token-from-server"
                 {:type :auto
                  :host "localhost"
                  :port 3000})]
            (js/console.log "Starting web socket")
            {:chsk chsk
             :ch-receive ch-recv
             :ch-send! send-fn
             :ch-state state}))

(defn send!
  "Send data to the channel. Pass in ID of send command and data payload"
  [& {:keys [id data reply? timeout] :or {timeout 5000}}]
  (let [send-fn (:ch-send! @conn)]
    (send-fn [id data]
             timeout
             (when reply?
               reply?))))

;; (chsk-send! [:data/update! {:db/id 001 :node/name "Chorizo"}])
