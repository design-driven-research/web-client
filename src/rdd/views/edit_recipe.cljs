(ns rdd.views.edit-recipe
  (:require
   [helix.core :refer [$ defnc]]
   [helix.hooks :as hooks]
   [rdd.components.recipe.recipe-editor.core :refer [item]]
   [rdd.db :as db]
   [rdd.services.event-bus :refer [subscribe!]]))

(defn- reducer
  [state action]
  (case (:type action)
    :update-quantity (let [{:keys [edge-id quantity]} action]
                       (db/update-recipe-line-item-quantity! edge-id quantity))
    :force nil)
  (db/item-by-name (-> action :product-name)))

(defnc view
  [{:keys [product-name]}]
  (let [[node dispatch] (hooks/use-reducer reducer (db/item-by-name product-name))
        update-quantity (hooks/use-callback :once (fn [edge-id quantity]
                                                    (dispatch {:type :update-quantity
                                                               :edge-id edge-id
                                                               :quantity quantity
                                                               :product-name product-name})))]
    (hooks/use-effect :once
                      (subscribe!
                       :remote-db-loaded
                       (fn [_]
                         (dispatch {:type :force
                                    :product-name product-name}))))

    ($ :div {:class "p-4"}
       ($ item {:node node
                :update-quantity-handler update-quantity}))))


