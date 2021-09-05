(ns rdd.views.node-tree)

(defn menu-bar
  [{:keys [name]}]
  [:div
   [:span name]])

(defn node-view
  [node]
  (let [{:keys [children]} node]
    [:<>
     [:div
      [menu-bar node]]

     [:div (for [child children]
             ^{:key (:id child)} [node-view child])]]))
