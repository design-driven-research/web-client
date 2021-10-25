(ns rdd.models.uom
  (:require [clojure.set]
            [datascript.core :as d]
            [rdd.db :refer [db]]
            [postmortem.core :as pm]))

(defn uoms
  []
  (map first (d/q '[:find (pull ?e [*])
                    :where [?e :uom/uuid _]]
                  (db))))

(defn uom-by-uuid
  [uuid]
  (first (d/q '[:find [(pull ?e [*])]
                :in $ ?uuid
                :where [?e :uom/uuid ?uuid]]
              (db) uuid)))

(first (uoms))
;; => {:db/id 9, :uom/code "lb", :uom/name "Pound", :uom/system #:db{:id 3}, :uom/type #:db{:id 6}, :uom/uuid "71vabjOIx7nH-Bio2V2HF"}


#_(uom-by-uuid "71vabjOIx7nH-Bio2V2HF")
  ;; => {:db/id 9, :uom/code "lb", :uom/name "Pound", :uom/system #:db{:id 3}, :uom/type #:db{:id 6}, :uom/uuid "71vabjOIx7nH-Bio2V2HF"}

;; => {:db/id 52, :item/name "Bay leaves", :item/production-type :production.type/ATOM, :item/uuid "bZCKGlRJ3dAKznfddYWa3"}

#_(map first (d/q '[:find (pull ?e [*])
                    :where [?e :uom/uuid _]]
                  (db)))