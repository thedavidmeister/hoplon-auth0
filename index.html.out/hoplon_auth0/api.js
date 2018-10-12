// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon_auth0.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon_auth0.data');
goog.require('hoplon_auth0.state');
goog.require('taoensso.timbre');
goog.require('javelin.core');
goog.require('hoplon.core');
var pre_auth_hash_22902 = hoplon.storage_atom.session_storage(javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$hoplon_DASH_auth0$api_SLASH_pre_DASH_auth_DASH_hash);
hoplon_auth0.api.sync_pre_auth_hash_BANG_ = ((function (pre_auth_hash_22902){
return (function hoplon_auth0$api$sync_pre_auth_hash_BANG_(){
return cljs.core.reset_BANG_(pre_auth_hash_22902,window.location.hash);
});})(pre_auth_hash_22902))
;

hoplon_auth0.api.redeem_pre_auth_hash_BANG_ = ((function (pre_auth_hash_22902){
return (function hoplon_auth0$api$redeem_pre_auth_hash_BANG_(){
if(cljs.core.truth_(cljs.core.deref(pre_auth_hash_22902))){
return javelin.core.dosync_STAR_(((function (pre_auth_hash_22902){
return (function (){
window.location.hash = cljs.core.deref(pre_auth_hash_22902);

return cljs.core.reset_BANG_(pre_auth_hash_22902,null);
});})(pre_auth_hash_22902))
);
} else {
return null;
}
});})(pre_auth_hash_22902))
;
hoplon_auth0.api.web_auth = (function hoplon_auth0$api$web_auth(){
return (new auth0.WebAuth(hoplon_auth0.data.web_auth));
});
hoplon_auth0.api.authorize = (function hoplon_auth0$api$authorize(var_args){
var G__22904 = arguments.length;
switch (G__22904) {
case 0:
return hoplon_auth0.api.authorize.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hoplon_auth0.api.authorize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon_auth0.api.authorize.cljs$core$IFn$_invoke$arity$0 = (function (){
return hoplon_auth0.api.authorize.cljs$core$IFn$_invoke$arity$1(null);
});

hoplon_auth0.api.authorize.cljs$core$IFn$_invoke$arity$1 = (function (params){
hoplon_auth0.api.sync_pre_auth_hash_BANG_();

return hoplon_auth0.api.web_auth().authorize(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hoplon_auth0.data.authorize,params], 0))));
});

hoplon_auth0.api.authorize.cljs$lang$maxFixedArity = 1;

hoplon_auth0.api.parse_hash = (function hoplon_auth0$api$parse_hash(var_args){
var G__22907 = arguments.length;
switch (G__22907) {
case 1:
return hoplon_auth0.api.parse_hash.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon_auth0.api.parse_hash.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon_auth0.api.parse_hash.cljs$core$IFn$_invoke$arity$1 = (function (cb){
return hoplon_auth0.api.parse_hash.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hash,window.location.hash], null),cb);
});

hoplon_auth0.api.parse_hash.cljs$core$IFn$_invoke$arity$2 = (function (options,cb){
var web_auth = hoplon_auth0.api.web_auth();
return web_auth.parseHash(cljs.core.clj__GT_js(options),cb);
});

hoplon_auth0.api.parse_hash.cljs$lang$maxFixedArity = 2;

/**
 * Given the result of parse-hash, returns [token jwt jwt-state jwt-nonce]
 */
hoplon_auth0.api.parsed_hash__GT_token_data = (function hoplon_auth0$api$parsed_hash__GT_token_data(r){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r.accessToken,r.idToken,r.state,r.idTokenPayload.nonce], null);
});
hoplon_auth0.api.user_info = (function hoplon_auth0$api$user_info(access_token,cb){
var client = hoplon_auth0.api.web_auth().client;
return client.userInfo(access_token,cb);
});
/**
 * Updates state in response to a login event. Requires a profile and a token.
 */
hoplon_auth0.api.login_BANG_ = (function hoplon_auth0$api$login_BANG_(var_args){
var G__22910 = arguments.length;
switch (G__22910) {
case 4:
return hoplon_auth0.api.login_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hoplon_auth0.api.login_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon_auth0.api.login_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (a,t,s,n){
return hoplon_auth0.api.login_BANG_.cljs$core$IFn$_invoke$arity$5(a,t,s,n,(function (){
return cljs.core.List.EMPTY;
}));
});

hoplon_auth0.api.login_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (a,t,s,n,cb){
return hoplon_auth0.api.user_info(a,(function (e,p){
if(cljs.core.not(e)){
javelin.core.dosync_STAR_((function (){
cljs.core.reset_BANG_(hoplon_auth0.state.access_token,a);

cljs.core.reset_BANG_(hoplon_auth0.state.token,t);

cljs.core.reset_BANG_(hoplon_auth0.state.state,s);

cljs.core.reset_BANG_(hoplon_auth0.state.nonce,n);

return cljs.core.reset_BANG_(hoplon_auth0.state.user_profile,p);
}));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"hoplon-auth0.api",null,87,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Error fetching user profile information."].join('')], null);
}),null)),null,288423989);

hoplon_auth0.state.flush_state_BANG_();
}

return window.requestAnimationFrame((function (){
(cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(e,p) : cb.call(null,e,p));

return hoplon_auth0.api.redeem_pre_auth_hash_BANG_();
}));
}));
});

hoplon_auth0.api.login_BANG_.cljs$lang$maxFixedArity = 5;

hoplon_auth0.api.login_from_url = (function hoplon_auth0$api$login_from_url(var_args){
var G__22913 = arguments.length;
switch (G__22913) {
case 0:
return hoplon_auth0.api.login_from_url.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hoplon_auth0.api.login_from_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon_auth0.api.login_from_url.cljs$core$IFn$_invoke$arity$0 = (function (){
return hoplon_auth0.api.login_from_url.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.List.EMPTY;
}));
});

hoplon_auth0.api.login_from_url.cljs$core$IFn$_invoke$arity$1 = (function (cb){
return hoplon_auth0.api.parse_hash.cljs$core$IFn$_invoke$arity$1((function (e,r){
if(cljs.core.truth_(e)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"hoplon-auth0.api",null,105,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error parsing Auth0 access hash in URL."], null);
}),null)),null,1840591010);

hoplon_auth0.state.flush_state_BANG_();

(cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(e,r) : cb.call(null,e,r));
} else {
}

if(cljs.core.truth_(r)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon-auth0.api",null,110,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Auth0 access hash in URL. Logging in with discovered credentials."], null);
}),null)),null,729455370);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon_auth0.api.login_BANG_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(hoplon_auth0.api.parsed_hash__GT_token_data(r),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb], null)));
} else {
return null;
}
}));
});

hoplon_auth0.api.login_from_url.cljs$lang$maxFixedArity = 1;

/**
 * Logs the user out by cleaning up local state and notifying auth0.
 */
hoplon_auth0.api.logout_BANG_ = (function hoplon_auth0$api$logout_BANG_(var_args){
var G__22916 = arguments.length;
switch (G__22916) {
case 0:
return hoplon_auth0.api.logout_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hoplon_auth0.api.logout_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon_auth0.api.logout_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return hoplon_auth0.api.logout_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.List.EMPTY;
}));
});

hoplon_auth0.api.logout_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (cb){
return window.requestAnimationFrame((function (){
hoplon_auth0.state.flush_state_BANG_();

if(cljs.core.fn_QMARK_(cb)){
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
}

return hoplon_auth0.api.web_auth().logout(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$returnTo,window.location.origin], null)));
}));
});

hoplon_auth0.api.logout_BANG_.cljs$lang$maxFixedArity = 1;

hoplon_auth0.api.validate_jwt = (function hoplon_auth0$api$validate_jwt(t,n,cb){
var web_auth = hoplon_auth0.api.web_auth();
return web_auth.validateToken(t,n,cb);
});
var fexpr__22925_22929 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__22920,G__22919,G__22921,G__22918){
if(cljs.core.truth_(G__22918)){
var G__22926 = G__22918;
var G__22927 = G__22920;
var G__22928 = ((function (G__22926,G__22927){
return (function (e,r){
if(cljs.core.truth_(e)){
return (G__22921.cljs$core$IFn$_invoke$arity$0 ? G__22921.cljs$core$IFn$_invoke$arity$0() : G__22921.call(null));
} else {
return null;
}
});})(G__22926,G__22927))
;
return (G__22919.cljs$core$IFn$_invoke$arity$3 ? G__22919.cljs$core$IFn$_invoke$arity$3(G__22926,G__22927,G__22928) : G__22919.call(null,G__22926,G__22927,G__22928));
} else {
return null;
}
}));
(fexpr__22925_22929.cljs$core$IFn$_invoke$arity$4 ? fexpr__22925_22929.cljs$core$IFn$_invoke$arity$4(hoplon_auth0.state.nonce,hoplon_auth0.api.validate_jwt,hoplon_auth0.api.logout_BANG_,hoplon_auth0.state.token) : fexpr__22925_22929.call(null,hoplon_auth0.state.nonce,hoplon_auth0.api.validate_jwt,hoplon_auth0.api.logout_BANG_,hoplon_auth0.state.token));
