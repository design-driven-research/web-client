(ns rdd.hooks.use-dispatch
  (:require [helix.hooks :as hooks]
            [rdd.services.event-bus :refer [publish!]]))

(defn use-dispatch
  "Use the global dispatcher. Returns a dispatch function to call from handlers.
   Pass in a middleware to transform the args

   dispatch (use-dispatch :update-item [id] :middleware middleware-fn)
   dispatch (use-dispatch :delete-id :once)
   "
  [topic invalidation-keys & {:keys [middleware]}]

  (let [dispatch (hooks/use-callback
                  invalidation-keys
                  (fn [& args]
                    (let [data (if middleware
                                 (apply middleware args)
                                 args)
                          payload {:topic topic
                                   :data data}]
                      (publish! payload))))]
    dispatch))
