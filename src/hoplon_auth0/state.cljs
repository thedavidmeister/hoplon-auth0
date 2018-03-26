(ns hoplon-auth0.state
 (:require
  hoplon.storage-atom
  clojure.walk
  [javelin.core :as j]))

(defonce access-token (hoplon.storage-atom/local-storage (j/cell nil) ::access-token))
(defonce user-profile
 (let [p (hoplon.storage-atom.local-storage (j/cell nil) ::user-profile)]
  (j/cell=
   (when p (clojure.walk/keywordize-keys p))
   #(reset! p (js->clj %)))))

(defonce state (hoplon.storage-atom/local-storage (j/cell nil) ::state))
(defonce nonce (hoplon.storage-atom/local-storage (j/cell nil) ::nonce))
(defonce token (hoplon.storage-atom/local-storage (j/cell nil) ::token))

(defonce logged-in?
 (j/cell=
  (and
   (boolean user-profile)
   (boolean token))))

(defn flush-state!
 []
 (j/dosync
  (reset! access-token nil)
  (reset! user-profile nil)
  (reset! token nil)
  (reset! state nil)
  (reset! nonce nil)))
