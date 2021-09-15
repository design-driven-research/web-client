(ns rdd.services.store
  (:require [rdd.services.web-socket :refer [send!]]
            [rdd.db :refer [load-from-remote!]]))

(defn load-initial!
  []
  (send! :id :data/load-initial! :data {} :reply? (fn [reply]
                                                    (load-from-remote! reply)
                                                    (tap> reply))))

;; (load-initial!)