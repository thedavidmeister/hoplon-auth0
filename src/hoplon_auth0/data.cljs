(ns hoplon-auth0.data)

(goog-define client-id "")
(goog-define domain "")

(def web-auth
 (clj->js
  {:domain domain
   :clientID client-id}))

(defn redirect-uri
 "build the default redirect uri (current url sans hash)"
 []
 (str
  (-> js/window .-location .-origin)
  (-> js/window .-location .-pathname)))

(def authorize
 {:redirectUri (redirect-uri)
  ; Need a scope AND "id_token" responseType to get a JWT.
  :responseType "token id_token"
  :scope "openid email profile"
  :responseMode "fragment"
  :clientID client-id})
