(ns rdd.components.menus.header
  (:require
   [rdd.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(defnc NavBar
  []
  (d/div {:class "mb-4 flex justify-end"}))