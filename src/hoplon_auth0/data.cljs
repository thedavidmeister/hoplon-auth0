(ns hoplon-auth0.data)

(goog-define client-id "")
(goog-define domain "")

(def web-auth
 (clj->js
  {:domain domain
   :clientID client-id}))

(def authorize
 {:redirectUri (-> js/window .-location .-origin)
  ; Need a scope AND "id_token" responseType to get a JWT.
  :responseType "token id_token"
  :scope "openid email"
  :clientID client-id})
