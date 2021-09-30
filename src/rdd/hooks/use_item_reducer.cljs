(ns rdd.hooks.use-item-reducer
  (:require [helix.hooks :as hooks]
            [rdd.db :as db]
            [rdd.services.store :as store]
            [rdd.reducers.recipe-editor-reducer :as rer]))

(defn use-item-reducer
  [product-name]
  (let [initial-state {:current-product-name product-name
                       :item (store/item->tree product-name)}
        [state dispatch!] (hooks/use-reducer rer/reducer initial-state)
        builder (fn [topic invalidation-keys & {:keys [middleware]}]
                  (hooks/use-callback
                   invalidation-keys
                   (fn [& args]
                     (let [payload (if middleware
                                     (apply middleware args)
                                     args)]
                       (dispatch! [topic payload])))))]

    {:state state
     :dispatch! dispatch!
     :builder builder}))

;; (hooks/use-callback [product-name] (fn [recipe-line-item-id quantity]
;;                                      (dispatch {:type :update-quantity
;;                                                 :data {:recipe-line-item-id recipe-line-item-id
;;                                                        :quantity quantity
;;                                                        :product-name product-name}})))


;; (let [dispatch (hooks/use-callback
;;                 invalidation-keys
;;                 (fn [& args]
;;                   (let [data (if middleware
;;                                (apply middleware args)
;;                                args)
;;                         payload {:topic topic
;;                                  :data data}]
;;                     (publish! payload))))]
;;   dispatch)