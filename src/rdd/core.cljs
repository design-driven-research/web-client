(ns rdd.core
  (:require [helix.core :refer [$ defnc]]
            [helix.hooks :as hooks]
            [rdd.db :as db]
            [rdd.views.node-tree :refer [node-view]]
            ["react-dom" :as rdom]))

(defnc app []
  (let [product-name "Chorizo Wrap"
        [node set-state] (hooks/use-state (db/node-by-name product-name))
        update-name (hooks/use-callback :once (fn [ingredient-name]
                                                (db/update-node-name! ingredient-name)
                                                (set-state (db/node-by-name product-name))))]
    ($ node-view {:node node :update-name-handler update-name})))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn ^:dev/after-load init!
  []
  (.render root ($ app)))