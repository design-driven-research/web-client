(ns rdd.core
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [rdd.db :as db]
            [rdd.views.node-tree :refer [node-view]]
            ["react-dom" :as rdom]))

(defnc app []
  (let [[node set-state] (hooks/use-state (db/node-by-name "Chorizo Wrap"))
        run-it (hooks/use-callback :once (fn [name]
                                           (let [new-data (db/update-son "Chorizo Wrap" name)]
                                             (set-state new-data))))]

    ($ :div
       ($ node-view {:node node :callback run-it}))))


(defn render
  []
  (rdom/render ($ app) (js/document.getElementById "app")))

;; (defn ^:dev/after-load reload
;;   "Render the toplevel component for this app."
;;   []
;;   (rdom/unmountComponentAtNode (js/document.getElementById "app"))
;;   (render))



(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn ^:dev/after-load init!
  []
  (.render root ($ app)))

;; (defn ^:export init! "Run application startup logic." [] (render))