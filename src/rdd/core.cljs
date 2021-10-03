(ns rdd.core
  (:require [helix.core :refer [$ defnc]]
            [mount.core :as mount]
            [rdd.components.menus.header :refer [NavBar]]

            [rdd.db]
            [rdd.services.syncer]
            [helix.hooks]
            [rdd.subscriptions]
            [rdd.services.store]
            [rdd.views.edit-recipe :as erv]
            [rdd.providers.item-provider :refer [ItemProvider]]
            ["react-dom" :as rdom]
            ["@blueprintjs/core" :refer [HotkeysProvider FocusStyleManager]]))

(.onlyShowFocusOnTabs FocusStyleManager)

(defnc app []
  (let [product-name "Wrap"]
    ($ ItemProvider
       ($ HotkeysProvider ($ :div
                             ($ NavBar)
                             ($ erv/view {:product-name product-name}))))))

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