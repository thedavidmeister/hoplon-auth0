// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon_auth0.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.storage_atom');
goog.require('clojure.walk');
goog.require('javelin.core');
if(typeof hoplon_auth0.state.access_token !== 'undefined'){
} else {
hoplon_auth0.state.access_token = hoplon.storage_atom.local_storage(javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$hoplon_DASH_auth0$state_SLASH_access_DASH_token);
}
if(typeof hoplon_auth0.state.user_profile !== 'undefined'){
} else {
hoplon_auth0.state.user_profile = (function (){var p = (function (){var G__22876 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var G__22877 = cljs.core.cst$kw$hoplon_DASH_auth0$state_SLASH_user_DASH_profile;
return hoplon.storage_atom.local_storage(G__22876,G__22877);
})();
var c__14300__auto__ = (function (){var fexpr__22880 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (p){
return (function (G__22878,G__22879){
if(cljs.core.truth_(G__22878)){
return (G__22879.cljs$core$IFn$_invoke$arity$1 ? G__22879.cljs$core$IFn$_invoke$arity$1(G__22878) : G__22879.call(null,G__22878));
} else {
return null;
}
});})(p))
);
return (fexpr__22880.cljs$core$IFn$_invoke$arity$2 ? fexpr__22880.cljs$core$IFn$_invoke$arity$2(p,clojure.walk.keywordize_keys) : fexpr__22880.call(null,p,clojure.walk.keywordize_keys));
})();
c__14300__auto__.update = ((function (c__14300__auto__,p){
return (function (p1__22875_SHARP_){
return cljs.core.reset_BANG_(p,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__22875_SHARP_));
});})(c__14300__auto__,p))
;

return c__14300__auto__;
})();
}
if(typeof hoplon_auth0.state.state !== 'undefined'){
} else {
hoplon_auth0.state.state = hoplon.storage_atom.local_storage(javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$hoplon_DASH_auth0$state_SLASH_state);
}
if(typeof hoplon_auth0.state.nonce !== 'undefined'){
} else {
hoplon_auth0.state.nonce = hoplon.storage_atom.local_storage(javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$hoplon_DASH_auth0$state_SLASH_nonce);
}
if(typeof hoplon_auth0.state.token !== 'undefined'){
} else {
hoplon_auth0.state.token = hoplon.storage_atom.local_storage(javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$hoplon_DASH_auth0$state_SLASH_token);
}
if(typeof hoplon_auth0.state.logged_in_QMARK_ !== 'undefined'){
} else {
hoplon_auth0.state.logged_in_QMARK_ = (function (){var fexpr__22884 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__22881,G__22883,G__22882){
return ((G__22881.cljs$core$IFn$_invoke$arity$1 ? G__22881.cljs$core$IFn$_invoke$arity$1(G__22882) : G__22881.call(null,G__22882))) && ((G__22881.cljs$core$IFn$_invoke$arity$1 ? G__22881.cljs$core$IFn$_invoke$arity$1(G__22883) : G__22881.call(null,G__22883)));
}));
return (fexpr__22884.cljs$core$IFn$_invoke$arity$3 ? fexpr__22884.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,hoplon_auth0.state.token,hoplon_auth0.state.user_profile) : fexpr__22884.call(null,cljs.core.boolean$,hoplon_auth0.state.token,hoplon_auth0.state.user_profile));
})();
}
hoplon_auth0.state.flush_state_BANG_ = (function hoplon_auth0$state$flush_state_BANG_(){
return javelin.core.dosync_STAR_((function (){
cljs.core.reset_BANG_(hoplon_auth0.state.access_token,null);

cljs.core.reset_BANG_(hoplon_auth0.state.user_profile,null);

cljs.core.reset_BANG_(hoplon_auth0.state.token,null);

cljs.core.reset_BANG_(hoplon_auth0.state.state,null);

return cljs.core.reset_BANG_(hoplon_auth0.state.nonce,null);
}));
});
