(ns rdd.components.nav-bars.main
  (:require
   ["@blueprintjs/core" :refer [Button]]
   [helix.core :refer [$ defnc]]
   [helix.dom :as d]
   [rdd.providers.item-provider :refer [use-item-state]]
   [rdd.services.store :as store]))

(defnc nav-bar
  []
  (let [[state dispatch!] (use-item-state)]
    (d/div {:class "mb-4 flex justify-end"}

           #_($ Button {:icon "download"
                        :onClick (fn [] (store/item->tree "Sauce"))} "Download recipe"))))