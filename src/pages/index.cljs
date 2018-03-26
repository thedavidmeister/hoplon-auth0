(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon-auth0.hoplon
  hoplon-auth0.api
  hoplon-auth0.state))

(hoplon-auth0.api/login-from-url)

(h/html
 (h/head
  (h/title "Hoplon Auth0"))
 (h/body
  (h/div
   "Hi, click a button to login!"
   (h/div
    (h/button
     :login! {:connection "google-oauth2"}
     "Login with google")
    (h/button
     :login! {:connection "facebook"}
     "Login with facebook"))

   "Access token:"
   (h/pre (j/cell= (pr-str hoplon-auth0.state/access-token)))

   "User profile:"
   (h/pre (j/cell= (pr-str hoplon-auth0.state/user-profile)))

   "State:"
   (h/pre (j/cell= (pr-str hoplon-auth0.state/state)))

   "Nonce:"
   (h/pre (j/cell= (pr-str hoplon-auth0.state/nonce)))

   "JWT Token:"
   (h/pre (j/cell= (pr-str hoplon-auth0.state/token))))))
