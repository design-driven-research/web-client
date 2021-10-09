(ns rdd.core
  (:require [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [mount.core :as mount]
            [rdd.components.menus.header :refer [NavBar]]

            [rdd.db]
            [rdd.services.syncer]
            [rdd.subscriptions]
            [rdd.services.store]
            [rdd.services.event-bus :as eb]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [rdd.views.edit-recipe :as erv]
            [rdd.providers.item-provider :refer [ItemProvider]]
            ["react-dom" :as rdom]
            ["@blueprintjs/core" :refer [HotkeysProvider FocusStyleManager]]))

(.onlyShowFocusOnTabs FocusStyleManager)

(defnc app []
  ($ ItemProvider {:item-name "Wrap"}
     ($ HotkeysProvider
        ($ erv/view))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn start
  []
  (js/console.log "Calling start")
  (.render root ($ app)))

(defn init!
  []
  (js/console.log "Calling init")
  (mount/start)
  (start)

  (eb/publish! {:topic :sys/init}))