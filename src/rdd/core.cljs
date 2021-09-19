(ns rdd.core
  (:require [helix.core :refer [$ defnc]]
            [mount.core :as mount]
            [rdd.components.nav-bar.main :refer [nav-bar]]
            [rdd.services.syncer]
            [rdd.views.edit-recipe :as erv]
            ["react-dom" :as rdom]
            ["@blueprintjs/core" :refer [HotkeysProvider]]))

(defnc app []
  ($ HotkeysProvider ($ :div
                        ($ nav-bar)
                        ($ erv/view {:product-name "Chorizo Family Pack"}))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn ^:dev/after-load init!
  []
  (mount/start)
  (.render root ($ app)))