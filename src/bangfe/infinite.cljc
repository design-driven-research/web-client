(ns bangfe.infinite
  (:require
   [rdd.utils.for-indexed :refer [for-indexed]]
   [postmortem.core :as pm]
   [clojure.spec.alpha :as s]))

(defn generate-lookup-paths
  ([node] (generate-lookup-paths node [] 0))
  ([node parent-path parent-idx]
   (let [states (::states node)]
     (->> (for-indexed [state idx states]
                       (let [path (into parent-path [::states idx])]
                         [(generate-lookup-paths state path (+ parent-idx idx))
                          {(::id state) {:path path
                                         :index (+ parent-idx idx)}}]))
          (flatten)
          (into {})))))

(defn lookup-path-for-state
  [fsm id]
  (-> (generate-lookup-paths fsm) id :path))

(defn state-info
  [fsm id]
  (let [;; Extracted values
        base-path (lookup-path-for-state fsm id)
        state (get-in fsm base-path)
        context (::context state)
        validations (::validations state)
        touches (::touches state)
        states (::states state)

        ;; Derived values
        context-path (into base-path [::context])
        validations-path (into base-path [::validations])
        touches-path (into base-path [::touches])
        states-path (into base-path [::states])]

    {:state            state
     :base-path        base-path
     :context-path     context-path
     :context          context
     :validations      validations
     :validations-path validations-path
     :touches-path     touches-path
     :touches          touches
     :states-path      states-path
     :states           states}))

(defn validate-state!
  [fsm state-id]
  (let [{:keys [state validations-path]} (state-info fsm state-id)
        fields (::fields state)
        context (::context state)

        validations (reduce (fn [acc {::keys [id spec]}]
                              (if spec
                                (assoc acc id (s/valid? spec (id context)))
                                acc))
                            {}
                            fields)]

    (assoc-in fsm validations-path validations)))

(defn update-context-field!
  [fsm state-id field-id value]
  (let [{:keys [context-path]} (state-info fsm state-id)
        field-path (into context-path [field-id])]
    (-> (assoc-in fsm field-path value)
        (validate-state! state-id))))

(defn update-context!
  [fsm state-id value]
  (let [{:keys [context-path base-path]} (state-info fsm state-id)]
    (-> (assoc-in fsm context-path value)
        (update-in base-path dissoc ::validations))))

(defn touch-field!
  [fsm state-id field-id]
  (let [{:keys [touches-path]} (state-info fsm state-id)
        touch-path (into touches-path [field-id])]
    (-> (assoc-in fsm touch-path true)
        (validate-state! state-id))))

(defn swap-child-states!
  [fsm state-id states]
  (let [{:keys [states-path]} (state-info fsm state-id)]
    (-> (assoc-in fsm states-path states)
        (validate-state! state-id))))

(defn remove-child-states!
  [fsm state-id]
  (let [{:keys [base-path]} (state-info fsm state-id)]
    (-> (update-in fsm base-path dissoc ::states)
        (validate-state! state-id))))

(defn transition-to-state!
  [fsm state-id]
  (let [{:keys [base-path]} (state-info fsm state-id)
        open-path (into base-path [::open])]
    (-> (assoc-in fsm open-path true)
        (assoc ::state state-id))))

