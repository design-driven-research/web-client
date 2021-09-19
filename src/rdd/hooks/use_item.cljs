(ns rdd.hooks.use-item
  (:require [helix.hooks :as hooks]
            [rdd.db :as db]
            [rdd.services.event-bus :as eb]))

(defn use-item
  [product-name]

  (let [[state set-state] (hooks/use-state (db/item-by-name product-name))]
    (hooks/use-effect [product-name]
                      (eb/subscribe!
                       :db-updated
                       (fn [_]
                         (set-state (db/item-by-name product-name)))))
    [state]))

