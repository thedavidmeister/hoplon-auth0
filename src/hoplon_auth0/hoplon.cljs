(ns hoplon-auth0.hoplon
 (:require
  [hoplon.core :as h]
  hoplon-auth0.api))

(defmethod hoplon.core/do! :login!
 [el k v]
 (el
  :click #(when v (hoplon-auth0.api/authorize v))))

(defmethod hoplon.core/do! :logout!
 [el k v])
