(ns auth.auth0.api
 (:require
  auth0.lib
  auth.auth0.data
  taoensso.timbre
  [javelin.core :as j]
  [hoplon.core :as h]
  wheel.dom.traversal
  oops.core
  hoplon.jquery
  hoplon.storage-atom
  [cljs.test :refer-macros [deftest is]]))

(let [pre-auth-hash (hoplon.storage-atom/session-storage
                     (j/cell nil)
                     ::pre-auth-hash)]
 (defn sync-pre-auth-hash!
  []
  (reset! pre-auth-hash (-> js/window .-location .-hash)))

 (defn redeem-pre-auth-hash!
  []
  (when @pre-auth-hash
   (j/dosync
    (set! (-> js/window .-location .-hash) @pre-auth-hash)
    (reset! pre-auth-hash nil)))))

(defn web-auth
 []
 (auth0.WebAuth.
  auth.auth0.data/web-auth))

(defn authorize
 ([] (authorize nil))
 ([params]
  ; log the hash in case it needs to be restored after a successful auth
  (sync-pre-auth-hash!)
  (.authorize (web-auth)
   (clj->js
    (merge auth.auth0.data/authorize
           params)))))

(defmethod hoplon.core/do! :login!
 [el k v]
 (el
  :click #(when v (authorize {:connection "google-oauth2"}))
  #{:data-login}))

(defn logout!
 []
 (.logout (web-auth)
  (clj->js {:returnTo (-> js/window .-location .-origin)})))

(defn parse-hash
 ([cb]
  (parse-hash
   {:hash (-> js/window .-location .-hash)}
   cb))
 ([options cb]
  (let [web-auth (web-auth)]
   (.parseHash web-auth
    (clj->js options)
    cb))))

(defn parsed-hash->token-data
 "Given the result of parse-hash, returns [token jwt jwt-state jwt-nonce]"
 [r]
 [(oops.core/oget r "accessToken")
  (oops.core/oget r "idToken")
  (oops.core/oget r "state")
  (oops.core/oget r "idTokenPayload" "nonce")])

(defn validate-jwt
 [t n cb]
 (let [web-auth (web-auth)]
  (.validateToken web-auth
   t n cb)))

(defn user-info
 [access-token cb]
 (let [client (oops.core/oget (web-auth) "client")]
  (oops.core/ocall client "userInfo" access-token cb)))

; TESTS.

(deftest ??do-login!
 (let [el (h/div :login!)]
  (is (wheel.dom.traversal/is? el "[data-login=\"data-login\"]"))))
