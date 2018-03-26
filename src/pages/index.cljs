(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon-auth0.hoplon))

(h/html
 (h/head
  (h/title "Hoplon Auth0"))
 (h/body
  (h/div
   "Hi!"
   (h/button
    :login! {:connection "google-oauth2"}
    "Login with google"))))
