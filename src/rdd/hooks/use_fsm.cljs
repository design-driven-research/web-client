(ns rdd.hooks.use-fsm
  (:require [bangfe.infinite :as bi]
            [helix.hooks :as hooks]))

(defn use-fsm
  "Set up an FSM
   
   Returns the following map:
   
    {:fsm              fsm
     :set-fsm!         set-fsm!
     :states           states
     :current-state-id current-state-id
     :state-info       state-info
     :on-field-change  on-field-change
     :transition-to    transition-to
     :on-touch         on-touch}
   
   "
  [states]

  (let [[fsm set-fsm!] (hooks/use-state states)

        ;; Extracted values
        states (::bi/states fsm)
        current-state-id (::bi/state fsm)

        ;; Derived values
        state-info (bi/state-info fsm current-state-id)

        ;; Callbacks
        on-field-change (hooks/use-callback [fsm] (fn [state-id field-id value]
                                                    (let [updated (bi/update-context-field! fsm state-id field-id value)]
                                                      (set-fsm! updated))))

        transition-to (hooks/use-callback [fsm] (fn [state-id]
                                                  (set-fsm! (bi/transition-to-state! fsm state-id))))

        on-touch (hooks/use-callback [fsm] (fn [state-id field-id]
                                             (let [touched (bi/touch-field! fsm state-id field-id)]
                                               (set-fsm! touched))))]
    {:fsm              fsm
     :set-fsm!         set-fsm!
     :states           states
     :current-state-id current-state-id
     :state-info       state-info
     :on-field-change  on-field-change
     :transition-to    transition-to
     :on-touch         on-touch}))