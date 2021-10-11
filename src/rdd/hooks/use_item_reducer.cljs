(ns rdd.hooks.use-item-reducer
  (:require [helix.hooks :as hooks]
            [rdd.reducers.recipe-editor-reducer :as rer]))

(defn use-item-reducer
  "Use the item reducer. This provides the recipe editor reducer along with a helper function 'builer' 
   that wraps the current product name under :current-product-name
   
   Example usage for builder: (builder :topic-name-in-reducer [props-to-watch-and-invalidate])
   "
  [item-name]
  (let [[state dispatch!] (hooks/use-reducer rer/reducer {:current-product-name item-name})

        builder (fn [topic invalidation-keys]
                  (hooks/use-callback
                   (or invalidation-keys :once)
                   (fn [args]
                     (dispatch! [topic args]))))]

    [state dispatch! builder]))