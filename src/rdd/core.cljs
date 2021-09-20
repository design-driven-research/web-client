(ns rdd.core
  (:require [helix.core :refer [$ defnc]]
            [mount.core :as mount]
            [rdd.components.nav-bar.main :refer [nav-bar]]
            [rdd.services.web-socket :as ws]
            [rdd.db :as db]
            [rdd.services.syncer]
            [helix.hooks :as hooks]
            [rdd.subscriptions.item]
            [rdd.services.store :as store]
            [rdd.views.edit-recipe :as erv]
            ["react-dom" :as rdom]
            ["@blueprintjs/core" :refer [HotkeysProvider]]))

(defnc app []
  (let [product-name "Chorizo Family Pack"]
    (hooks/use-effect
     :once
     (js/console.log "loading product")
     (store/item-by-name product-name))

    ($ HotkeysProvider ($ :div
                          ($ nav-bar)
                          #_($ erv/view {:product-name product-name})))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn ^:dev/after-load start
  []
  (js/console.log "Start")
  (mount/start)
  (.render root ($ app)))

(defn ^:dev/before-load stop
  []
  (js/console.log "Stop")
  (mount/stop))

(defn ^:dev/after-load init!
  []
  (js/console.log "Init!")
  (start))