(ns rdd.components.nav-bar.main
  (:require
   ["@blueprintjs/core" :refer [Button]]
   [helix.core :refer [$ defnc]]
   [helix.dom :as d]
   [rdd.services.store :as store]))

(defnc nav-bar
  []
  (d/div {:class "mb-4 flex justify-end"}
         ($ Button {:icon "download"
                    :onClick (fn [] (store/item->tree "Wrap"))} "Download recipe")))