(ns rdd.components.recipe.recipe-editor.testing
  (:require [rdd.utils.for-indexed :refer [for-indexed]]))

(let [coll [:a :b]]
  (for-indexed [item coll]
               [index item]))