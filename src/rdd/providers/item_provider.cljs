(ns rdd.providers.item-provider
  (:require
   ["react" :as react]
   [helix.core :refer [$ defnc provider]]
   [helix.hooks :as hooks]
   [rdd.hooks.use-item-reducer :refer [use-item-reducer]]))

(def item-context (react/createContext))

(defn use-item-state
  "Gives you a tuple of the following [state dispatch! builder] = (use-item-state)"
  []
  (hooks/use-context item-context))

(defnc ItemProvider [{:keys [item-name
                             children]}]
  (provider
   {:context item-context
    :value (use-item-reducer item-name)}
   children))

