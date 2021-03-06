(ns hoplon-auth0.api
 (:require
  hoplon-auth0.data
  cljsjs.auth0
  hoplon-auth0.state
  taoensso.timbre
  [javelin.core :as j]
  [hoplon.core :as h])
 (:require-macros
  [hoplon-auth0.with-animation-frame :refer [with-animation-frame]]))

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
  hoplon-auth0.data/web-auth))

(defn authorize
 ([] (authorize nil))
 ([params]
  ; log the hash in case it needs to be restored after a successful auth
  (sync-pre-auth-hash!)
  (.authorize (web-auth)
   (clj->js
    (merge
     hoplon-auth0.data/authorize
     params)))))

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
 [(.-accessToken r)
  (.-idToken r)
  (.-state r)
  (.-nonce (.-idTokenPayload r))])

(defn user-info
 [access-token cb]
 (let [client (.-client (web-auth))]
  (.userInfo client access-token cb)))

(defn login!
  "Updates state in response to a login event. Requires a profile and a token."
 ([a t s n] (login! a t s n #()))
 ; Access token, jwt token, jwt state, jwt nonce, callback.
 ([a t s n cb]
  ; We have to actually fetch the user info from auth0 using the access token.
  (user-info
   a
   (fn [e p]
    (if-not e
     ; No errors, let's drop all our auth data into place.
     (do
      (j/dosync
       (reset! hoplon-auth0.state/access-token a)
       (reset! hoplon-auth0.state/token t)
       (reset! hoplon-auth0.state/state s)
       (reset! hoplon-auth0.state/nonce n)
       (reset! hoplon-auth0.state/user-profile p)))

     (do
      ; Let the user (and us) know that something bad happened.
      (taoensso.timbre/warn (str "Error fetching user profile information."))
      ; Drop any user credentials we might have crufting up the place.
      (hoplon-auth0.state/flush-state!)))

    ; juggle the route a bit to get the user to the right place after logging in
    (hoplon-auth0.with-animation-frame/with-animation-frame
     (cb e p)
     ; redeem the pre-auth-hash if it exists
     (redeem-pre-auth-hash!))))))

(defn login-from-url
 ([] (login-from-url #()))
 ([cb]
  ; If we can cleanly parse all our tokens from the URL, go ahead and log in.
  ; If not, do nothing at all.
  (parse-hash
   (fn [e r]
    (when e
     (taoensso.timbre/warn "Error parsing Auth0 access hash in URL.")
     (hoplon-auth0.state/flush-state!)
     (cb e r))

    (when r
     (taoensso.timbre/debug "Auth0 access hash in URL. Logging in with discovered credentials.")
     (apply login! (into (parsed-hash->token-data r) [cb])))))))

(defn logout!
 "Logs the user out by cleaning up local state and notifying auth0."
 ([] (logout! #()))
 ([cb]
  (hoplon-auth0.with-animation-frame/with-animation-frame
   (hoplon-auth0.state/flush-state!)
   (when (fn? cb) (cb))
   (.logout (web-auth)
    (clj->js {:returnTo (-> js/window .-location .-origin)})))))

(defn validate-jwt
 [t n cb]
 (let [web-auth (web-auth)]
  (.validateToken web-auth
   t n cb)))

; enforcers

; Immediately drop the JWT and logout if it is not valid.
; This really only works on page load or if the token gets modified somehow.
; Assuming nothing malicious is going on, this will happen when the JWT
; exists in local storage, then naturally expires and then the user visits us.
(j/cell=
 (when hoplon-auth0.state/token
  (validate-jwt
   hoplon-auth0.state/token
   hoplon-auth0.state/nonce
   (fn [e r] (when e (logout!))))))
