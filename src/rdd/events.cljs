(ns rdd.events
  (:require
   [re-frame.core :as rf :refer [reg-event-fx]]
   [rdd.db :as db]))

(reg-event-fx
 ::initialize-db
 (fn [_ _]
   {:db {:default "DB"}}))