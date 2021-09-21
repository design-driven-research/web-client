(ns rdd.core
  (:require [helix.core :refer [$ defnc]]
            [mount.core :as mount]
            [rdd.components.nav-bar.main :refer [nav-bar]]
            [rdd.services.web-socket]
            [rdd.db]
            [rdd.services.syncer]
            [helix.hooks]
            [rdd.subscriptions.item]
            [rdd.services.store]
            [rdd.views.edit-recipe :as erv]
            ["react-dom" :as rdom]
            ["@blueprintjs/core" :refer [HotkeysProvider]]))

(defnc app []
  (let [product-name "Chorizo Family Pack"]
    ($ HotkeysProvider ($ :div
                          ($ nav-bar)
                          ($ erv/view {:product-name product-name})))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn ^:dev/after-load start
  []
  (js/console.log "Calling start")
  (.render root ($ app)))

(defn init!
  []
  (js/console.log "Calling init")
  (mount/start)
  (start))