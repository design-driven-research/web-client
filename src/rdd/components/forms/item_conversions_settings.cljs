(ns rdd.components.forms.item-conversions-settings
  (:require ["@blueprintjs/core" :refer [Button InputGroup MenuItem Tab Tabs]]
            ["@blueprintjs/select" :refer [Select]]

            [applied-science.js-interop :as j]

            [helix.core :refer [$]]
            [rdd.lib.defnc :refer [defnc]]
            [rdd.converters.uom]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [rdd.utils.for-indexed :refer [for-indexed]]))

(defnc Core
  []
  (d/div "Conversion settings form"))