(ns rdd.calculators.cost
  (:require))

(defn labor-cost-for-process
  [process]

  (let [quantity (:measurement/quantity process)
        uom (:measurement/uom process)
        uom-code (:uom/code uom)
        labor-lines (:process/labor process)
        total-labor-cost (reduce (fn [acc cur]
                                   (let [labor-duration (:time/duration cur)
                                         labor-interval-factor (-> cur :time/duration-interval :scale/factor)

                                         role-cost (-> cur :labor/role :currency.usd/cost)
                                         role-interval-factor (-> cur :labor/role :time/duration-interval :scale/factor)
                                         normalized-role-cost (* role-cost role-interval-factor)

                                         normalized (* (/ normalized-role-cost labor-interval-factor) labor-duration)]
                                     (+ acc normalized))) 0 labor-lines)
        normalized-cost (/ total-labor-cost quantity)]

    {:cost normalized-cost
     :uom-code uom-code}))

#_(labor-cost-for-process (d/entity (db-core/db) 58))