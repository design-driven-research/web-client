(ns rdd.views
  (:require [rdd.db :as db]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [rdd.views.node-tree :refer [node-view]]))

(defn main-panel [node]
  (let [node-tree @(r/track db/node-by-name "Chorizo Wrap")]
    [:div.main-panel
     [node-view node-tree]]))