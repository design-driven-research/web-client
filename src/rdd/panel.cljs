(ns panel
  (:require [reagent.core :as r]
            [taoensso.timbre :as timbre
             :refer-macros [log info spy]]))
(defonce app-state (r/atom {:people
                            {1 {:name "John Smith"}
                             2 {:name "Maggie Johnson"}}}))

(defn people []
  (:people @app-state))

(defn person-keys []
  (-> @(r/track people)
      keys
      sort))

(defn person [id]
  (-> @(r/track people)
      (get id)))

(defn name-comp [id]
  (let [p @(r/track person id)]
    (info "name-comp" id)
    [:li
     (:name p)]))

(defn name-list []
  (let [ids @(r/track person-keys)]
    [:ul
     (for [i ids]

       (do
         (info "rendering")
         ^{:key i} [name-comp i]))]))

#_(defn hey []
    (let [names (name-list)]
      [:div (for [name @names]
              [:div name])]))

#_(reset! app-state {:people {1 {:name "Aram"}
                              2 {:name "Margeaux"}
                              3 {:name "Zadik"}}})