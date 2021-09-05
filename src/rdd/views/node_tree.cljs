(ns rdd.views.node-tree
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]))



(defnc node-view
  [{:keys [node callback]}]
  {:wrap [(helix.core/memo)]}
  (let [{:keys [name children]} node]
    ($ :div
       ($ :span {:on-click (fn [] (callback name))} name)

       ($ :div
          (for [{:keys [id] :as child} children]
            ($ node-view {:key id
                          :node child
                          :callback callback}))))))


