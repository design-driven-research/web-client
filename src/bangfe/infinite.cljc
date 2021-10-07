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

        ;; Derived values
        context-path (into base-path [::context])
        validations-path (into base-path [::validations])]

    {:state state
     :base-path base-path
     :context-path context-path
     :validations-path validations-path}))

(defn update-context!
  [fsm id value]
  (let [{:keys [context-path]} (state-info fsm id)]
    (assoc-in fsm context-path value)))

(defn validate-state!
  [fsm id]
  (let [{:keys [state validations-path]} (state-info fsm id)
        fields (::fields state)
        context (::context state)

        validations (reduce (fn [acc {::keys [id spec]}]
                              (if spec
                                (assoc acc id (s/valid? spec (id context)))
                                acc))
                            {}
                            fields)]

    (assoc-in fsm validations-path validations)))