(ns rdd.components.nav-bar.main
  (:require ["@ant-design/icons" :refer [DownloadOutlined]]
            ["antd" :refer [Button]]
            [helix.core :refer [$ defnc]]

            [helix.dom :as d]))

(defnc nav-bar
  []
  (d/div {:class "mb-4 flex justify-end"}
         ($ Button {:className "mr-2"
                    :type "primary"
                    :icon ($ DownloadOutlined)
                    :onClick (fn [] (js/console.log "Clicked1"))} "Hey there")
         ($ Button {:type "primary"
                    :onClick (fn [] (js/console.log "Clicked2"))} "Hey there")))