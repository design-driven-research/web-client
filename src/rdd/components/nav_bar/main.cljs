(ns rdd.components.nav-bar.main
  (:require ["@ant-design/icons" :refer [DownloadOutlined]]
            ["antd" :refer [Button]]
            [helix.core :refer [$ defnc]]
            [rdd.services.store :as store]

            [helix.dom :as d]))

(defnc nav-bar
  []
  (d/div {:class "mb-4 flex justify-end"}
         ($ Button {:className "mr-2"
                    :type "primary"
                    :icon ($ DownloadOutlined)
                    :onClick (fn [] (store/load-initial!))} "Hey there")
         ($ Button {:type "primary"
                    :onClick (fn [] (js/console.log "Clicked2"))} "Hey there")))