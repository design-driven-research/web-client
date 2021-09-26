(ns rdd.services.store
  (:require [ajax.core :refer [GET]]
            [rdd.db :refer [tree->db!]]
            [rdd.services.event-bus :as bus]))

(defn item-by-name
  [product-name]
  (GET (str "http://localhost:3000/api/items/" product-name) {:handler tree->db!}))



(bus/subscribe! :load-bootstrap-data! (fn []
                                        (item-by-name "Chorizo Family Pack")))

(bus/publish! {:topic :load-bootstrap-data!})

