(ns rdd.views
  (:require [rdd.db :as db]
            [rdd.views.node-tree :refer [node-view]]
            [reagent.core :as r]))

(defn main-panel []
  (let [node-tree @(r/track db/node-by-name "Chorizo Wrap")]
    [:div.main-panel
     [node-view node-tree]]))