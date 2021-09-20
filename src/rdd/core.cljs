(ns rdd.core
  (:require [helix.core :refer [$ defnc]]
            [mount.core :as mount]
            [rdd.components.nav-bar.main :refer [nav-bar]]
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
     :always
     (fn []
       (js/setTimeout (fn [e] (js/console.log "Called!****")) 1000)
       #_(store/item-by-name product-name)))

    (hooks/use-effect
     :always
     (fn []
       (js/console.log "Called!!!")
       (fn [] (js/console.log "Cleanup"))))

    ($ HotkeysProvider ($ :div
                          ($ nav-bar)
                          ($ erv/view {:product-name product-name})))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn ^:dev/after-load init!
  []
  (js/console.log "Init!")
  (mount/start)

  (.render root ($ app)))