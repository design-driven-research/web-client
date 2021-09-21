(ns rdd.subscriptions.item
  (:require [rdd.services.event-bus :refer [subscribe!]]
            [rdd.db :as db]))

(subscribe!
 :update-recipe-line-item-quantity
 (fn [[recipe-line-item-id quantity]]
   (db/update-recipe-line-item-quantity! recipe-line-item-id quantity)))

(subscribe!
 :update-recipe-line-item-uom
 (fn [[recipe-line-item-id uom-code]]
   (db/update-recipe-line-item-uom! recipe-line-item-id uom-code)))

(subscribe!
 :create-recipe-line-item
 (fn [[parent-item-id new-item-id]]
   (db/create-recipe-line-item! parent-item-id new-item-id)))