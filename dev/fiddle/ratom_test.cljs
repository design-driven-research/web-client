(ns fiddle.ratom-test
  (:require [reagent.core :as r]))
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
    [:li
     (:name p)]))

(defn name-list []
  (let [ids @(r/track person-keys)]
    [:ul
     (for [i ids]
       ^{:key i} [name-comp i])]))
