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

(defn build-lens
 ([k] (build-lens k (login-data)))
 ([k state]
  (j/cell=
   (get state k)
   (partial swap! state assoc k))))

(def access-token (partial build-lens :access-token))
(def state (partial build-lens :state))
(def nonce (partial build-lens :nonce))
(def token (partial build-lens :token))

(defn -user-profile
 ([] (-user-profile (login-data)))
 ([state]
  (let [p (build-lens :user-profile state)]
   (j/cell=
    (when p (clojure.walk/keywordize-keys p))
    #(reset! p (js->clj %))))))
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
