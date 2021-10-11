(ns rdd.specs.form-specs
  (:require [clojure.spec.alpha :as s]))

(s/def ::info (s/and string? #(> (count %) 2)))