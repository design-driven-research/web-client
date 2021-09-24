(ns rdd.services.store
  (:require
   [ajax.core :refer [GET POST]]
   [cljs.core.async :refer [<!]]
   [rdd.services.event-bus :as bus]
   ["axios" :as axios]
   [rdd.db :refer [tree->db!]]))

(defn item-by-name
  [product-name]
  (GET (str "http://localhost:3000/api/items/" product-name) {:handler (fn [res]
                                                                         (tree->db! res))})
  #_(go (let [response {} #_(<! (http/get (str "http://localhost:3000/api/items/" product-name)))]))

  #_(send! :id :data/item-by-name
           :data {:product-name product-name}
           :reply? tree->db!))

#_(defn hey
    []
    (go (let [response (<! (http/get "http://localhost:3000/api/ping"
                                     {:with-credentials? false
                                      :headers {"Accept" "application/json, text/plain, */*"}}))]
          (js/console.log response)))

    #_(send! :id :data/item-by-name
             :data {:product-name product-name}
             :reply? tree->db!))



(bus/subscribe! :load-bootstrap-data! (fn []
                                        (item-by-name "Chorizo Family Pack")))

#_(bus/publish! {:topic :load-bootstrap-data!})

#_(let [resp (axios/get "http://localhost:3000/api/ping")
        resp (js->clj resp :keywordize-keys true)]
    (js/console.log resp))


