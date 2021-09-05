(ns rdd.views.node-tree
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]))

(defnc node-view
  [{:keys [node update-name-handler] :as props}]
  {:wrap [(helix.core/memo)]}
  (tap> props)
  (let [{:keys [name children]} node]
    (d/div
     (d/span {:on-click #(update-name-handler name)} name)
     (d/div {:style {:margin-top "6px"}}
            (d/div {:style {:padding-left "10px"}}
                   (for [{:keys [id] :as child} children]
                     ($ node-view {:key id
                                   :node child
                                   :update-name-handler update-name-handler})))))))
