(ns rdd.components.forms.item-labor-settings
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
  (d/div "Labor settings form"))