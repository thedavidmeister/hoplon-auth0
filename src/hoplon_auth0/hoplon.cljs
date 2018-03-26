(ns hoplon-auth0.hoplon
 (:require
  [hoplon.core :as h]
  hoplon-auth0.api))

(defn handle-login!
 [el v]
 (el
  :click #(when v (hoplon-auth0.api/authorize v))))

(defn handle-logout!
 [el v]
 (el :click #(when v (hoplon-auth0.api/logout! v))))

(defmethod hoplon.core/do! :logout!
 [el k v]
 (handle-logout! el v))

(defmethod hoplon.core/on! :logout!
 [el k v]
 (handle-logout! el v))

(defmethod hoplon.core/do! :login!
 [el k v]
 (handle-login! el v))

(defmethod hoplon.core/on! :login!
 [el k v]
 (handle-login! el v))
