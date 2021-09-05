(ns rdd.core
  (:require [re-frame.core :as rf]
            [rdd.events :as evt]
            [datascript.transit :as dt]
            [datascript.core :as d]
            [reagent.core :as reagent :refer [atom]]
            [reagent.dom :as rdom]
            ;; [db :refer [conn]]
            [rdd.views :as views]
            [rdd.syncer]
            [taoensso.timbre :as timbre
             :refer-macros [info]]))

(defn dev-setup []
  (when true
    (info "dev mode")))

(defn ^:dev/after-load mount-root []

  ;; Restart DB on each save. Disable if you want to retain state
  ;; across saves
  ;; (rf/dispatch-sync [::events/initialize-db])
  ;; (re-posh/dispatch-sync [::evt/initialize-db])

  (rf/clear-subscription-cache!)

  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init! []
  (dev-setup)
  (rf/dispatch-sync [::evt/initialize-db])
  #_(let [stored (js/localStorage.getItem "datascript/db")]
      (if stored

        #_(reset! conn (dt/read-transit-str stored))
        (re-posh/dispatch-sync [::evt/initialize-db])
        #_(re-posh/dispatch-sync [::evt/initialize-db])))

  (mount-root))

;; (comment

;;   (->> (js/localStorage.getItem "datascript/db")
;;        (dt/read-transit-str)
;;        (reset! conn))
;;   ;; => #datascript/DB {:schema nil, :datoms [[1 :app/type :type/create-todo-form 536870913] [1 :create-todo-form/description "" 536870913] [1 :create-todo-form/title "" 536870913] [2 :app/type :type/task 536870913] [2 :task/description "Just learn it" 536870913] [2 :task/done? false 536870913] [2 :task/title "Learn Clojure a little bit" 536870913] [3 :app/type :type/task 536870913] [3 :task/description "Just relax" 536870913] [3 :task/done? false 536870913] [3 :task/title "Have a coffe" 536870913]]}


;;   @conn
;;   ;; => #datascript/DB {:schema nil, :datoms [[1 :app/type :type/create-todo-form 536870913] [1 :create-todo-form/description "" 536870913] [1 :create-todo-form/title "" 536870913] [2 :app/type :type/task 536870913] [2 :task/description "Just learn it" 536870913] [2 :task/done? false 536870913] [2 :task/title "Learn Clojure a little bit" 536870913] [3 :app/type :type/task 536870913] [3 :task/description "Just relax" 536870913] [3 :task/done? false 536870913] [3 :task/title "Have a coffe" 536870913]]}

;;   ;; => #datascript/DB {:schema nil, :datoms [[1 :app/type :type/create-todo-form 536870913] [1 :create-todo-form/description "" 536870913] [1 :create-todo-form/title "" 536870913] [2 :app/type :type/task 536870913] [2 :task/description "Just learn it" 536870913] [2 :task/done? false 536870913] [2 :task/title "Learn Clojure a little bit" 536870913] [3 :app/type :type/task 536870913] [3 :task/description "Just relax" 536870913] [3 :task/done? false 536870913] [3 :task/title "Have a coffe" 536870913]]}

;;   ;; => #datascript/DB {:schema nil, :datoms [[1 :app/type :type/create-todo-form 536870913] [1 :create-todo-form/description "" 536870913] [1 :create-todo-form/title "" 536870913] [2 :app/type :type/task 536870913] [2 :task/description "Just learn it" 536870913] [2 :task/done? false 536870913] [2 :task/title "Learn Clojure a little bit" 536870913] [3 :app/type :type/task 536870913] [3 :task/description "Just relax" 536870913] [3 :task/done? false 536870913] [3 :task/title "Have a coffe" 536870913]]}

;;   ;; => #datascript/DB {:schema nil, :datoms [[1 :app/type :type/create-todo-form 536870913] [1 :create-todo-form/description "" 536870913] [1 :create-todo-form/title "" 536870913] [2 :app/type :type/task 536870913] [2 :task/description "Just learn it" 536870913] [2 :task/done? false 536870913] [2 :task/title "Learn Clojure a little bit" 536870913] [3 :app/type :type/task 536870913] [3 :task/description "Just relax" 536870913] [3 :task/done? false 536870913] [3 :task/title "Have a coffe" 536870913]]}




;;   ;; 
;;   )