(ns hoplon-auth0.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
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
        ; v is a [state authorize-config] tuple already
        (sequential? v) v
        ; v is a authorize-config map so wrap with default state
        (coll? v) [(hoplon-auth0.state/login-data) v]
        ; v is truthy so login with defaults
        v [(hoplon-auth0.state/login-data) nil]
        ; do nothing
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
 [state cb]
 (fn [_]
  (when cb
   (hoplon-auth0.api/logout! state cb))))

(defn bind-logout!
 [el v]
 (let [[state cb]
       (cond
        ; v is a [state cb] tuple use as is
        (sequential? v) v
        ; v is a callback so wrap it with default state
        (fn? v) [(hoplon-auth0.state/login-data) v]
        ; v is a state so wrap it with empty callback
        (j/cell? v) [v #()]
        ; v is something truthy logout with default state
        v [(hoplon-auth0.state/login-data) #()]
        ; do nothing
        :else [nil nil])]
  (el
   :click (build-logout-handler state cb))))

(defmethod hoplon.core/do! :logout!
 [el k v]
 (bind-logout! el v))

(defmethod hoplon.core/on! :logout!
 [el k v]
 (bind-logout! el v))
