(ns rdd.core
  (:require [helix.core :refer [$ defnc]]
            [helix.hooks :as hooks]
            [rdd.components.nav-bar.main :refer [nav-bar]]
            [rdd.db :as db]
            [rdd.services.syncer]
            [rdd.views.node-tree :refer [node-view]]
            [rdd.services.event-bus :refer [subscribe]]

            [mount.core :as mount]
            ["react-dom" :as rdom]))

(defn hey
  [state action]
  (js/console.log (-> action :product-name))
  (case (:type action)
    :update-quantity (let [{:keys [edge-id quantity]} action]
                       (db/update-recipe-line-item-quantity! edge-id quantity))
    :force nil)

  (db/item-by-name (-> action :product-name)))

(db/item-by-name "Chorizo Family Pack")
;; => {:id nil, :uom nil, :normalized-cost ##Inf, :name nil}


(defnc app []
  (let [product-name "Chorizo Family Pack"
        [node dispatch] (hooks/use-reducer hey (db/item-by-name product-name))
        ;; [node set-state] (hooks/use-state (db/item-by-name product-name))
        update-quantity (hooks/use-callback :once (fn [edge-id quantity]
                                                    (dispatch {:type :update-quantity
                                                               :edge-id edge-id
                                                               :quantity quantity
                                                               :product-name product-name})))]

    (hooks/use-effect :once
                      (subscribe :anything (fn [data]
                                             (dispatch {:type :force
                                                        :product-name product-name}))))
    #_(hooks/use-effect :once
                        (let [count (atom 1)
                              timer (js/setInterval (fn []
                                                      (js/console.log "Called")
                                                      #_(swap! count inc)
                                                      #_(db/update-edge-quantity! 27 @count)
                                                      #_(set-state (db/item-by-name product-name))
                                                      (dispatch {:type :force
                                                                 :product-name product-name})) 5000)]))
    ($ :div {:class "p-4"}
       ($ nav-bar)
       ($ node-view {:node node
                     :update-quantity-handler update-quantity}))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn ^:dev/after-load init!
  []
  (mount/start)
  (.render root ($ app)))

