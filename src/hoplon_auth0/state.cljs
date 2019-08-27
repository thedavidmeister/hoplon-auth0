(ns hoplon-auth0.state
 (:require
  hoplon.storage-atom
  clojure.walk
  [javelin.core :as j]))

(defonce login-data
 (hoplon.storage-atom/local-storage
  (j/cell nil)
  ::login-data))

(defn build-lens [k]
 (j/cell=
  (get login-data k)
  (partial swap! login-data assoc k)))

(defonce access-token (build-lens :access-token))
(defonce state (build-lens :state))
(defonce nonce (build-lens :nonce))
(defonce token (build-lens :token))

(defonce user-profile
 (let [p (build-lens :user-profile)]
  (j/cell=
   (when p (clojure.walk/keywordize-keys p))
   #(reset! p (js->clj %)))))

(defonce logged-in?
 (j/cell=
  (and
   (boolean user-profile)
   (boolean token))))

(defn flush-state!
 []
 (reset! login-data nil))
