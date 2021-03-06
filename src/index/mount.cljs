(ns ^:dev/once index.mount
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery
  hoplon-auth0.hoplon
  hoplon-auth0.api
  hoplon-auth0.state))

; toggle this to see local vs. global state
(def local? true)

(defn to-element! [el]
 (el
  (let [local-state (j/cell nil)
        state (if local? local-state (hoplon-auth0.state/login-data))]

   (h/with-dom el (hoplon-auth0.api/login-from-url state))

   (h/div
    "Hi, click a button to login!"
    (h/div
     (h/button
      :login! [state {:connection "google-oauth2"}]
      "Login with google")
     (h/button
      :login! [state {:connection "facebook"}]
      "Login with facebook")
     (h/button
      :logout! [state #(prn "logout callback!")]
      "Logout"))

    "Global state:"
    (let [global-state (hoplon-auth0.state/login-data)]
     (h/pre (j/cell= (pr-str global-state))))

    "Local state:"
    (h/pre (j/cell= (pr-str local-state)))

    "Access token:"
    (let [access-token (hoplon-auth0.state/access-token state)]
     (h/pre (j/cell= (pr-str access-token))))

    "User profile:"
    (let [user-profile (hoplon-auth0.state/user-profile state)]
     (h/pre (j/cell= (pr-str user-profile))))

    "State:"
    (let [state (hoplon-auth0.state/state state)]
     (h/pre (j/cell= (pr-str state))))

    "Nonce:"
    (let [nonce (hoplon-auth0.state/nonce state)]
     (h/pre (j/cell= (pr-str nonce))))

    "JWT Token:"
    (let [token (hoplon-auth0.state/token state)]
     (h/pre (j/cell= (pr-str token))))))))

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
