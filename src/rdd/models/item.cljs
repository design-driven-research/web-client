(ns rdd.models.item
  (:require [clojure.set]
            [datascript.core :as d]
            [rdd.db :refer [db]]
            [postmortem.core :as pm]))

(defn items
  []
  (map first (d/q '[:find (pull ?e [*])
                    :where [?e :item/name ?name]]
                  (db))))

(defn item-by-uuid
  [uuid]
  (first (d/q '[:find [(pull ?e [*])]
                :in $ ?uuid
                :where [?e :item/uuid ?uuid]]
              (db) uuid)))

(defn item-by-name
  [name]
  (first (d/q '[:find [(pull ?e [*])]
                :in $ ?name
                :where [?e :item/name ?name]]
              (db) name)))

#_(item-by-name "Sauce")
  ;; => {:db/id 44, :composite/contains [#:db{:id 45} #:db{:id 46} #:db{:id 47} #:db{:id 48} #:db{:id 49} #:db{:id 50} #:db{:id 51} #:db{:id 52}], :item/name "Sauce", :item/production-type :production.type/ATOM, :item/uuid "-jwC3iBHWKEwyLpEiw0Jm", :measurement/uom #:db{:id 9}, :measurement/yield 1}

#_(item-by-name "Salt")
  ;; => {:db/id 36, :item/name "Salt", :item/production-type :production.type/ATOM, :item/uuid "8WT67jGI3MEb2gt5RQS4t", :measurement/uom #:db{:id 10}, :measurement/yield 1}


#_(item-by-name "Bay leaves")
  ;; => {:db/id 52, :item/name "Bay leaves", :item/production-type :production.type/ATOM, :item/uuid "bZCKGlRJ3dAKznfddYWa3"}

#_(item-by-uuid "saV2jehHxu0YkJYjDg9FI")
  ;; => {:db/id 42, :item/name "Collards", :item/production-type :production.type/ATOM, :item/uuid "saV2jehHxu0YkJYjDg9FI", :measurement/uom #:db{:id 16}, :measurement/yield 1}

;; => {:db/id 52, :item/name "Bay leaves", :item/production-type :production.type/ATOM, :item/uuid "bZCKGlRJ3dAKznfddYWa3"}

#_(tap> (items))
;; => ({:db/id 52, :item/name "Bay leaves", :item/production-type :production.type/ATOM, :item/uuid "bZCKGlRJ3dAKznfddYWa3"} {:db/id 42, :item/name "Collards", :item/production-type :production.type/ATOM, :item/uuid "saV2jehHxu0YkJYjDg9FI", :measurement/uom #:db{:id 16}, :measurement/yield 1} {:db/id 41, :item/name "Cardamom", :item/production-type :production.type/ATOM, :item/uuid "q4ta2w0m0tLT3iGgdzfJu", :measurement/uom #:db{:id 10}, :measurement/yield 1} {:db/id 43, :composite/contains [#:db{:id 44} #:db{:id 45} #:db{:id 46} #:db{:id 47}], :item/name "Sauce", :item/production-type :production.type/ATOM, :item/uuid "x_NsJMPNmkyKPc1uHScrk", :measurement/uom #:db{:id 9}, :measurement/yield 1} {:db/id 37, :item/name "Pepper", :item/production-type :production.type/ATOM, :item/uuid "mxhaRU3KrwMKNwIDwzy0W", :measurement/uom #:db{:id 10}, :measurement/yield 1} {:db/id 40, :item/name "Asafoetida", :item/production-type :production.type/ATOM, :item/uuid "g0UZd3BqCKmm7TeAA6J9Z", :measurement/uom #:db{:id 10}, :measurement/yield 1} {:db/id 48, :composite/contains [#:db{:id 49} #:db{:id 50} #:db{:id 51}], :item/name "Wrap", :item/production-type :production.type/ATOM, :item/uuid "duW2_OZLUUEAwke0YHw0_", :measurement/uom #:db{:id 9}, :measurement/yield 1} {:db/id 36, :item/name "Salt", :item/production-type :production.type/ATOM, :item/uuid "8WT67jGI3MEb2gt5RQS4t", :measurement/uom #:db{:id 10}, :measurement/yield 1} {:db/id 38, :item/name "Paprika", :item/production-type :production.type/ATOM, :item/uuid "Pwwz0bzIxPMJCzSlH8w8C", :measurement/uom #:db{:id 10}, :measurement/yield 1} {:db/id 39, :item/name "Fenugreek", :item/production-type :production.type/ATOM, :item/uuid "T5-nihuWrpVeIoOIs8KhX", :measurement/uom #:db{:id 10}, :measurement/yield 1})

;; => [{:db/id 52, :item/name "Bay leaves", :item/production-type :production.type/ATOM, :item/uuid "bZCKGlRJ3dAKznfddYWa3"}]
