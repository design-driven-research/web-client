(ns rdd.services.syncer
  (:require-macros
   [mount.core :refer [defstate]])
  (:require [rdd.services.event-bus :refer [subscribe!]]
            [ajax.core :refer [POST]]
            [cognitect.transit :as t]
            [postmortem.core :as pm]))

(subscribe! :db-updated (fn [& args] #_(tap> args)))

(subscribe!
 :update/recipe-line-item-quantity
 (fn [data]
   (POST "http://localhost:3000/api/items/" {:format :transit
                                             :body {:quantity 2.9
                                                    :uuid "hithere"}})



   #_(ws/send! :id :update/recipe-line-item-quantity
               :data (pm/spy>> :data data)
               :reply? (fn [& args]
                         (js/console.log args)))))


#_(pm/reset!)
#_(pm/log-for :data)
  ;; => [{:quantity 6, :uuid "nAU90hTKBemrhrrD85Qu-"}]

;; defn item-by-name
;;   [product-name]
;;   (GET (str "http://localhost:3000/api/items/" product-name) {:handler tree->db!}

#_(macroexpand '(POST "http://localhost:3000/api/items/" {:format :transit
                                                          :body {:quantity 2.9
                                                                 :uuid "hithere"}}))
  ;; => (POST "http://localhost:3000/api/items/" {:format :transit, :body {:quantity 2.9, :uuid "hithere"}})


(def w (t/writer :json))
(t/write w {:quantity 10.0 :uuid "asdfsd"})
(t/write w {:x 10 :y 20})
;; => "[\"^ \",\"~:x\",10,\"~:y\",20]"

;; => "[\"^ \",\"~:quantity\",10,\"~:uuid\",\"asdfsd\"]"



  ;; => (POST "http://localhost:3000/api/items/" {:format :transit, :body {:quantity 2.9, :uuid "hithere"}})

;; => (POST "http://localhost:3000/api/items/" {:format :transit, :body {:quantity 2.9, :uuid "hithere"}})

;; => nil
