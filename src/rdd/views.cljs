(ns rdd.views
  (:require [rdd.db :as db]
            [datascript.core :as d]
            [rdd.views.node-tree :refer [node-view]]
            [reagent.core :as r]))

(defn what
  [name]
  (d/transact! db/dsdb [[:db/add [:node/name name] :node/name (str "name - " (random-uuid))]]))

(defn main-panel []
  (let [node-tree @(r/track db/item-by-name "Chorizo Family Pack")]
    [:div.main-panel
     [node-view node-tree what]]))

(db/item-by-name "Chorizo Family Pack")
;; => nil
