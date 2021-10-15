(ns rdd.reducers.item-editor-methods.company
  (:require [rdd.reducers.api :refer [item-editor-reducer]]
            [rdd.services.store :as store]))

(defmethod item-editor-reducer :create-company
  [state [_ {:keys [name uuid]}]]
  (store/create-company! {:name name
                          :uuid uuid})
  (assoc state :vendors (store/get-vendors)))