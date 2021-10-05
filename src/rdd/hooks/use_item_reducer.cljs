(ns rdd.hooks.use-item-reducer
  (:require [helix.hooks :as hooks]
            [rdd.reducers.recipe-editor-reducer :as rer]
            [rdd.services.store :as store]))

(defn use-item-reducer
  "Use the item reducer. This provides the recipe editor reducer along with a helper function 'builer' 
   that wraps the current product name under :current-product-name
   
   Example usage for builder: (builder :topic-name-in-reducer [props-to-watch-and-invalidate])
   "
  [product-name]
  (let [initial-state {:current-product-name product-name
                       :item (store/item->tree product-name)
                       :items (store/get-items)}

        [state dispatch!] (hooks/use-reducer rer/reducer initial-state)

        builder (fn [topic invalidation-keys]
                  (hooks/use-callback
                   invalidation-keys
                   (fn [args]
                     (dispatch! [topic args]))))]

    [state dispatch! builder]))
