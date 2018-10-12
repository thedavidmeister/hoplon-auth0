// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon_auth0.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon_auth0.api');
hoplon_auth0.hoplon.handle_login_BANG_ = (function hoplon_auth0$hoplon$handle_login_BANG_(el,v){
var G__22932 = cljs.core.cst$kw$click;
var G__22933 = ((function (G__22932){
return (function (){
if(cljs.core.truth_(v)){
return hoplon_auth0.api.authorize.cljs$core$IFn$_invoke$arity$1(v);
} else {
return null;
}
});})(G__22932))
;
return (el.cljs$core$IFn$_invoke$arity$2 ? el.cljs$core$IFn$_invoke$arity$2(G__22932,G__22933) : el.call(null,G__22932,G__22933));
});
hoplon_auth0.hoplon.handle_logout_BANG_ = (function hoplon_auth0$hoplon$handle_logout_BANG_(el,v){
var G__22934 = cljs.core.cst$kw$click;
var G__22935 = ((function (G__22934){
return (function (){
if(cljs.core.truth_(v)){
return hoplon_auth0.api.logout_BANG_.cljs$core$IFn$_invoke$arity$1(v);
} else {
return null;
}
});})(G__22934))
;
return (el.cljs$core$IFn$_invoke$arity$2 ? el.cljs$core$IFn$_invoke$arity$2(G__22934,G__22935) : el.call(null,G__22934,G__22935));
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$logout_BANG_,(function (el,k,v){
return hoplon_auth0.hoplon.handle_logout_BANG_(el,v);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$logout_BANG_,(function (el,k,v){
return hoplon_auth0.hoplon.handle_logout_BANG_(el,v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$login_BANG_,(function (el,k,v){
return hoplon_auth0.hoplon.handle_login_BANG_(el,v);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$login_BANG_,(function (el,k,v){
return hoplon_auth0.hoplon.handle_login_BANG_(el,v);
}));
