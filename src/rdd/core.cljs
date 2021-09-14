(ns rdd.core
  (:require [helix.core :refer [$ defnc]]
            [helix.hooks :as hooks]
            [rdd.components.nav-bar.main :refer [nav-bar]]
            [rdd.db :as db]
            [rdd.services.syncer]
            [rdd.views.node-tree :refer [node-view]]
            [mount.core :as mount]
            ["react-dom" :as rdom]))

(defnc app []
  (let [product-name "Chorizo Wrap"
        [node set-state] (hooks/use-state (db/node-by-name product-name))
        update-quantity (hooks/use-callback :once (fn [edge-id quantity]
                                                    (db/update-edge-quantity! edge-id quantity)
                                                    (set-state (db/node-by-name product-name))))
        update-name (hooks/use-callback :once (fn [ingredient-name]
                                                (db/update-node-name! ingredient-name)
                                                (set-state (db/node-by-name product-name))))]

    #_(hooks/use-effect :once
                        (let [count (atom 1)
                              timer (js/setInterval (fn []
                                                      (swap! count inc)
                                                      (db/update-edge-quantity! 27 @count)
                                                      (set-state (db/node-by-name product-name))) 50)]))
    ($ :div {:class "p-4"}
       ($ nav-bar)
       ($ node-view {:node node
                     :update-name-handler update-name
                     :update-quantity-handler update-quantity}))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn ^:dev/after-load init!
  []
  (mount/start)
  (.render root ($ app)))

