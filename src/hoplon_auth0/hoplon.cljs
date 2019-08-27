(ns hoplon-auth0.hoplon
 (:require
  [hoplon.core :as h]
  hoplon-auth0.api))

; START LOGIN

(defn build-login-handler
 [state authorize-config]
 (fn [_]
  (when authorize-config
   (hoplon-auth0.api/authorize state authorize-config))))

(defn bind-login!
 [el v]
 (let [[state authorize-config]
       (cond
        (sequential? v) v
        (coll? v) [(hoplon-auth0.state/login-data) v]
        :else [nil nil])]
  (el
   :click (build-login-handler state authorize-config))))

(defmethod hoplon.core/do! :login!
 [el k v]
 (bind-login! el v))

(defmethod hoplon.core/on! :login!
 [el k v]
 (bind-login! el v))

; START LOGOUT

(defn build-logout-handler
 [v]
 (fn [_]
  (when v
   (hoplon-auth0.api/logout! v))))

(defn bind-logout!
 [el v]
 (el :click (build-logout-handler v)))

(defmethod hoplon.core/do! :logout!
 [el k v]
 (bind-logout! el v))

(defmethod hoplon.core/on! :logout!
 [el k v]
 (bind-logout! el v))
