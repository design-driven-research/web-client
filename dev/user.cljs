(ns dev.user
  (:require [datascript.core :as d]
            [tilakone.core :as tk :refer [_]]
            [rdd.db :as db]))


(def light-machine
  {::tk/states [{::tk/name        "green"
                 ::tk/transitions [{::tk/on :timer
                                    ::tk/to "yellow"
                                    ::tk/actions [[:yo]]
                                    ::tk/guards [:my-guard]}
                                   {::tk/on _
                                    ::tk/guards [:shit-guard]
                                    ::tk/to "shit"}
                                   {::tk/on _
                                    ::tk/to "red"}]}
                {::tk/name        "yellow"
                 ::tk/transitions [{::tk/on :timer
                                    ::tk/to "red"
                                    ::tk/guards [:red-guard]}]}
                {::tk/name        "red"
                 ::tk/transitions [{::tk/on :timer
                                    ::tk/to "green"
                                    ::tk/guards [:red-guard]}]}
                {::tk/name        "shit"}]
   ::tk/action! (fn [{::tk/keys [signal action] :as fsm}]
                  #_(tap> fsm)
                  (update fsm :trace conj (into [signal] action))
                  #_fsm)
   ::tk/guard? (fn [fsm]
                 (tap> {:tap "Inside guard?"
                        :fsm fsm})
                 false)
   ::tk/state  "green"
   :context {:sup :son}})

(->> (repeat 5 :timer)
     (reduce tk/apply-signal light-machine)
     ::tk/state)


(-> (tk/apply-signal light-machine :timer)
    ::tk/state)
(tk/apply-signal light-machine "TIMER")

(tk/transfers-to light-machine "TIMER")


(def count-ab
  [{::tk/name        :start
    ::tk/transitions [{::tk/on      \a
                       ::tk/to      :found-a
                       ::tk/actions [[:action :start :found-a]]}
                      {::tk/on      _
                       ::tk/actions [[:action :start :start]]}]
    ::tk/enter       {::tk/actions [[:enter :start]]}
    ::tk/leave       {::tk/actions [[:leave :start]]}
    ::tk/stay        {::tk/actions [[:stay :start]]}}

   {::tk/name        :found-a
    ::tk/transitions [{::tk/on      \a
                       ::tk/actions [[:action :found-a :found-a]]}
                      {::tk/on      \b
                       ::tk/actions [[:action :found-a :found-a :via-guard-1]]}
                      {::tk/on      _
                       ::tk/to      :start
                       ::tk/actions [[:action :found-a :start :via-b-_]]}]
    ::tk/enter       {::tk/actions [[:enter :found-a]]}
    ::tk/leave       {::tk/actions [[:leave :found-a]]}
    ::tk/stay        {::tk/actions [[:stay :found-a]]}}])

(def count-ab-process {::tk/states  count-ab
                       ::tk/action! (fn [{::tk/keys [signal action] :as fsm}]
                                      (update fsm :trace conj (into [signal] action)))
                       ::tk/state   :start})

(let [count-ab (assoc count-ab-process :trace [])]
  (-> (reduce tk/apply-signal count-ab "xxababbax")
      :trace))


(def form-states-2 [{::tk/name        :default
                     :my-buddy "and me"
                     ::tk/transitions [{::tk/on :CREATE
                                        ::tk/to :selected-vendor}]}

                    {::tk/name        :selected-vendor
                     ::tk/transitions [{::tk/on :SUBMIT
                                        ::tk/to :edit-info}
                                       {::tk/on :CREATE
                                        ::tk/to :selected-vendor.create}]}

                    {::tk/name        :selected-vendor.create
                     ::tk/transitions [{::tk/on :SUBMIT
                                        ::tk/to :edit-info}]}

                    {::tk/name        :edit-info
                     ::tk/transitions [{::tk/on :SUBMIT
                                        ::tk/to :edit-pricing}]}

                    {::tk/name        :edit-pricing
                     ::tk/transitions [{::tk/on :SUBMIT
                                        ::tk/to :edit-usage}]}

                    {::tk/name        :edit-usage
                     ::tk/transitions [{::tk/on :SUBMIT
                                        ::tk/to :edit-conversions}
                                       {::tk/on :CREATE
                                        ::tk/to :edit-usage.create-uom}]}

                    {::tk/name        :edit-usage.create-uom
                     ::tk/transitions [{::tk/on :SUBMIT
                                        ::tk/to :edit-conversions}]}

                    {::tk/name        :edit-conversions
                     ::tk/transitions [{::tk/on :SUBMIT
                                        ::tk/to :finalalize}]}

                    {::tk/name        :edit-conversions.create-uom
                     ::tk/transitions [{::tk/on :SUBMIT
                                        ::tk/to :finalalize}]}

                    {::tk/name        :finalalize}])