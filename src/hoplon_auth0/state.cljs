(ns hoplon-auth0.state
 (:require
  hoplon.storage-atom
  clojure.walk
  [javelin.core :as j]))

; fallback state if none provided
; stores logins in a global local storage cell
(defn -login-data []
 (hoplon.storage-atom/local-storage
  (j/cell nil)
  ::login-data))
(def login-data (memoize -login-data))

(defn build-cell
 ([k] (build-cell k (login-data)))
 ([k state]
  (j/cell= (get state k))))

(def access-token (partial build-cell :access-token))
(def state (partial build-cell :state))
(def nonce (partial build-cell :nonce))
(def token (partial build-cell :token))

(defn -user-profile
 ([] (-user-profile (login-data)))
 ([state]
  (let [p (build-cell :user-profile state)]
   (j/cell=
    (when p (clojure.walk/keywordize-keys p))))))
(def user-profile (memoize -user-profile))

(defn -logged-in?
 ([] (-logged-in? (login-data)))
 ([state]
  (let [profile (user-profile state)
        token (token state)]
   (j/cell=
    (and
     (boolean user-profile)
     (boolean token))))))
(def logged-in? (memoize -logged-in?))

(defn flush-state!
 ([] (flush-state! (login-data)))
 ([state] (reset! state nil)))
