(ns rdd.views.node-tree)

(defn menu-bar
  [{:keys [name]} update-name-handler]
  [:div
   [:span {:on-click #(update-name-handler name)} name]])

(defn node-view
  [node update-name-handler]
  (let [{:keys [children]} node]
    [:<>
     [:div
      [menu-bar node update-name-handler]]
     [:div {:style {:padding-left "10px"}}
      (for [child children]
        ^{:key (:id child)}
        [node-view child update-name-handler])]]))
