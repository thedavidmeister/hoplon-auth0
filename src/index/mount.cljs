(ns ^:dev/once index.mount
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery
  hoplon-auth0.hoplon
  hoplon-auth0.api
  hoplon-auth0.state))

(hoplon-auth0.api/login-from-url)

(defn to-element! [el]
 (el
  (h/div
   "Hi, click a button to login!"
   (h/div
    (h/button
     :login! {:connection "google-oauth2"}
     "Login with google")
    (h/button
     :login! {:connection "facebook"}
     "Login with facebook")
    (h/button
     :logout! #(prn "logout callback!")
     "Logout"))

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

(let [mountpoint (atom (h/div))]
 (defn remount! []
  ; clear out hoplon data from mountpoint div
  (h/hl! @mountpoint :hoplon/reset nil)
  ; create a new div for mountpoint
  (reset! mountpoint (h/div))
  ; flush the DOM in the document body
  (set! (.-innerHTML (h/body)) "")
  ; drop the new mountpoint into the body
  (h/html
   [
    (h/head
     (h/title "Hoplon Auth0"))
    (h/body
     @mountpoint)])
  ; rebuild everything
  (to-element! @mountpoint)))

; hook into shadow cljs
(defn ^:dev/after-load start! []
 (remount!))
(start!)
