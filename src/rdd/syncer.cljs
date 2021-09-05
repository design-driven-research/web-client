(ns rdd.syncer
  (:require [datascript.core :as d]
            [cljs.reader]
            [datascript.transit :as dt]))

;; (d/listen)
;; #_(d/listen! conn (fn [tx-report]
;;                     (let [db (:db-after tx-report)
;;                           serialized (dt/write-transit-str db)]
;;                       (tap> serialized)
;;                       (js/localStorage.setItem "datascript/db" serialized))))

;; ;; (d/listen! conn (fn [{:keys [db-after]}] (tap> db-after)))
