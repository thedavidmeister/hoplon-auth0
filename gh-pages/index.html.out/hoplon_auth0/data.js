// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon_auth0.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/** @define {string} */
goog.define("hoplon_auth0.data.client_id","");

/** @define {string} */
goog.define("hoplon_auth0.data.domain","");
hoplon_auth0.data.web_auth = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,hoplon_auth0.data.domain,cljs.core.cst$kw$clientID,hoplon_auth0.data.client_id], null));
hoplon_auth0.data.authorize = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$redirectUri,window.location.origin,cljs.core.cst$kw$responseType,"token id_token",cljs.core.cst$kw$scope,"openid email",cljs.core.cst$kw$clientID,hoplon_auth0.data.client_id], null);
