(ns rdd.hooks.use-item
  (:require [helix.hooks :as hooks]
            [rdd.services.store :as store]
            [rdd.services.event-bus :as eb]))

(defn use-item
  [product-name]

  (let [[state set-state] (hooks/use-state (store/item->tree product-name))]
    (hooks/use-effect [product-name]
                      (eb/subscribe!
                       :db-updated
                       (fn [_]
                         (set-state (store/item->tree product-name)))))
    [state]))



