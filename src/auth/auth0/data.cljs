(ns auth.auth0.data
 (:require
  card.styles
  goog.crypt.base64))

; Defaults are the dev environment.
(goog-define client-id "")
(goog-define domain "")

(defn clj->state
 [data]
 (->> data
      clj->js
      (.stringify js/JSON)
      goog.crypt.base64/encodeString))

(def web-auth
 (clj->js {:domain domain
           :clientID client-id}))

; https://auth0.com/docs/libraries/auth0js/v8#webauth-authorize-
(def authorize
 {:redirectUri (-> js/window .-location .-origin)
  ; Need a scope AND "id_token" responseType to get a JWT.
  :responseType "token id_token"
  :scope "openid email stripe_id"
  :clientID client-id})
