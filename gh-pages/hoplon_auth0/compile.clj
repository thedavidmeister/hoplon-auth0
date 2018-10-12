(ns hoplon-auth0.compile
 (:require
  environ.core))

(defn with-closure-defines
 ([config]
  (with-closure-defines
   config
   (environ.core/env :auth0-domain)
   (environ.core/env :auth0-client-id)))
 ([config domain client-id]
  (-> config
   (assoc-in [:closure-defines 'hoplon-auth0.data/domain] domain)
   (assoc-in [:closure-defines 'hoplon-auth0.data/client-id] client-id))))
