(ns hoplon-auth0.api
 (:require
  hoplon-auth0.data
  cljsjs.auth0))

(defn web-auth
 []
 (auth0.WebAuth.
  hoplon-auth0.data/web-auth))

(defn authorize
 ([] (authorize nil))
 ([params]
  ; log the hash in case it needs to be restored after a successful auth
  ; (sync-pre-auth-hash!)
  (.authorize (web-auth)
   (clj->js
    (merge
     hoplon-auth0.data/authorize
     params)))))
