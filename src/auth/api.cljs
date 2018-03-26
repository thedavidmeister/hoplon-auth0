(ns auth.api
 (:require
  metrics.identification
  [javelin.core :as j]
  [hoplon.core :as h]
  auth.state
  spinny.state
  auth.auth0.data
  auth.auth0.api
  route.state
  cljs.reader
  wheel.error.core
  oops.core))

(defn login!
  "Updates state in response to a login event. Requires a profile and a token."
 ; Access token, jwt token, jwt state, jwt nonce.
 ([a t s n]
  ; We have to actually fetch the user info from auth0 using the access token.
  (auth.auth0.api/user-info
   a
   (fn [e p]
    (if-not e
     ; No errors, let's drop all our auth data into place.
     (do
      (j/dosync
       (reset! auth.state/access-token a)
       (reset! auth.state/token t)
       (reset! auth.state/state s)
       (reset! auth.state/nonce n)
       (reset! auth.state/user-profile p))
      ; Let the rest of the world know that somebody logged in.
      (metrics.identification/login!))

     (do
      ; Let the user (and us) know that something bad happened.
      (wheel.error.core/error
       :error (str "Error fetching user profile information. " (oops.core/oget e "statusText") " " (oops.core/oget e "statusCode") ": " (oops.core/oget e "description"))
       :user-message "There was a problem logging in. Please try again.")
      ; Drop any user credentials we might have crufting up the place.
      (auth.state/flush-state!)))

    ; juggle the route a bit to get the user to the right place after logging in
    (h/with-animation-frame
     (j/dosync
      ; navigate home to clear any sensitive auth details from the url
      (route.state/navigate! :home)
      ; redeem the pre-auth-hash if it exists
      (auth.auth0.api/redeem-pre-auth-hash!)))))))

(defn logout!
  "Logs the user out by cleaning up local state and notifying auth0."
  []
  ; Pull an RAF and a followup timeout to really ensure the spinny actually
  ; shows up. The redirection can take a few seconds and it looks like the page
  ; has sort of frozen otherwise.
  (.requestAnimationFrame js/window
   #(do
     ; This is safe to leave open ended as we're going to redirect the user anyway.
     (spinny.state/+! :blocking)
     ; Give enough time for the animation to do something.
     (h/with-timeout 300
      (auth.state/flush-state!)
      ; FYI - No guarantee this will fire before user is redirected.
      ; Don't put anything important in metrics.identification/logout!
      (metrics.identification/logout! auth.state/user-profile)
      (auth.auth0.api/logout!)))))

; Immediately drop the JWT and logout if it is not valid.
; This really only works on page load or if the token gets modified somehow.
; Assuming nothing malicious is going on, this will happen when the JWT
; exists in local storage, then naturally expires and then the user visits us.
(j/cell=
 (when auth.state/token
  (auth.auth0.api/validate-jwt
   auth.state/token
   auth.state/nonce
   (fn [e r] (when e (logout!))))))

; We always want to identify the user as soon as we know who they are. Any
; subtleties around doing this conditionally need to live with the vendor
; integration code.
(j/cell=
 (when auth.state/user-profile
  (metrics.identification/identify!
   auth.state/user-profile)))

(defn login-from-url
 []
 ; If we can cleanly parse all our tokens from the URL, go ahead and log in.
 ; If not, do nothing at all.
 (auth.auth0.api/parse-hash
  (fn [e r]
   (when e
    ; Let the user (and us) know that something bad happened.
    (wheel.error.core/error
     :error (str (oops.core/oget e "error") ": " (oops.core/oget e "errorDescription"))
     :log "Error parsing Auth0 access hash in URL."
     :user-message "There was a problem logging in. Please try again.")
    ; Hard flush local storage in case there was something corrupted in there
    ; causing the problem.
    (auth.state/flush-state!)
    (local-storage.core/flush)

    ; Drop the current URL fragment.
    (route.state/navigate! :home))

   (when r
    (taoensso.timbre/debug "Auth0 access hash in URL. Logging in with discovered credentials.")
    (apply login! (auth.auth0.api/parsed-hash->token-data r))))))
(login-from-url)
