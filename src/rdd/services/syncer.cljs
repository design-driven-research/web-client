(ns rdd.services.syncer
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [rdd.services.event-bus :refer [subscribe!]]
            [postmortem.core :as pm]
            [rdd.services.web-socket :as ws]))

(subscribe! :db-updated (fn [& args] (tap> args)))

(subscribe!
 :update/recipe-line-item-quantity
 (fn [data]
   (tap> "Sending")
   (ws/send! :id :update/recipe-line-item-quantity
             :data (pm/spy>> :data data)
             :reply? (fn [& args]
                       (js/console.log args)))))


#_(pm/reset!)
#_(pm/log-for :data)
  ;; => [{:quantity 6, :uuid "nAU90hTKBemrhrrD85Qu-"}]
