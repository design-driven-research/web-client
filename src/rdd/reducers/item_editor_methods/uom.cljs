(ns rdd.reducers.item-editor-methods.uom
  (:require [rdd.reducers.api :refer [item-editor-reducer]]
            [rdd.services.store :as store]))

(defmethod item-editor-reducer :create-uom
  [state [_ {:keys [name code uuid]}]]
  (store/create-uom! {:name name
                      :code code
                      :uuid uuid
                      :system :units.system/CUSTOM
                      :type :units.type/CUSTOM})
  (assoc state :uoms (store/get-uoms)))