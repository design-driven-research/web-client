(ns rdd.services.store
  (:require [ajax.core :refer [GET]]
            [rdd.db :as db]
            [rdd.services.event-bus :as bus]))



(defn item-by-name
  [product-name]
  (GET (str "http://localhost:3000/api/items/" product-name) {:handler db/tree->db!}))


#_(bus/subscribe! :load-bootstrap-data! (fn []
                                          (item-by-name "Chorizo Family Pack")))

(bus/subscribe!
 :sys/init
 (fn [data]
   (GET "http://localhost:3000/api/custom/initial-data" {:handler db/initial-data->db})))


(bus/publish! {:topic :sys/init})