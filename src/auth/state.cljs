(ns auth.state
 (:require
  [javelin.core :as j]
  ; Need to explicitly include local-storage.core to flush potential broken auth
  ; storage because both auth.state and local-storage.core are bootstrap ns.
  local-storage.core
  hoplon.storage-atom
  auth.auth0.api
  taoensso.timbre
  clojure.walk))

(defonce access-token (hoplon.storage-atom/local-storage (j/cell nil) ::access-token))
(defonce user-profile
 (let [p (hoplon.storage-atom.local-storage (j/cell nil) ::user-profile)]
  (j/cell=
   (when p (clojure.walk/keywordize-keys p))
   #(reset! p (js->clj %)))))

(defonce state (hoplon.storage-atom/local-storage (j/cell nil) ::state))
(defonce nonce (hoplon.storage-atom/local-storage (j/cell nil) ::nonce))
(defonce token (hoplon.storage-atom/local-storage (j/cell nil) ::token))

(defonce logged-in? (j/cell= (and (boolean user-profile)
                                  (boolean token))))

(defn flush-state!
 []
 (j/dosync
  (reset! access-token nil)
  (reset! user-profile nil)
  (reset! token nil)
  (reset! state nil)
  (reset! nonce nil)))
