// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon_auth0.hoplon');
goog.require('hoplon_auth0.api');
goog.require('hoplon_auth0.state');
hoplon_auth0.api.login_from_url.cljs$core$IFn$_invoke$arity$0();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__22938 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Hoplon Auth0") : hoplon.core.title.call(null,"Hoplon Auth0"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__22938) : hoplon.core.head.call(null,G__22938));
})(),(function (){var G__22939 = (function (){var G__22940 = "Hi, click a button to login!";
var G__22941 = (function (){var G__22952 = (function (){var G__22955 = cljs.core.cst$kw$login_BANG_;
var G__22956 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$connection,"google-oauth2"], null);
var G__22957 = "Login with google";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__22955,G__22956,G__22957) : hoplon.core.button.call(null,G__22955,G__22956,G__22957));
})();
var G__22953 = (function (){var G__22958 = cljs.core.cst$kw$login_BANG_;
var G__22959 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$connection,"facebook"], null);
var G__22960 = "Login with facebook";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__22958,G__22959,G__22960) : hoplon.core.button.call(null,G__22958,G__22959,G__22960));
})();
var G__22954 = (function (){var G__22961 = cljs.core.cst$kw$logout_BANG_;
var G__22962 = ((function (G__22961,G__22952,G__22953,G__22940){
return (function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["logout callback!"], 0));
});})(G__22961,G__22952,G__22953,G__22940))
;
var G__22963 = "Logout";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__22961,G__22962,G__22963) : hoplon.core.button.call(null,G__22961,G__22962,G__22963));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__22952,G__22953,G__22954) : hoplon.core.div.call(null,G__22952,G__22953,G__22954));
})();
var G__22942 = "Access token:";
var G__22943 = (function (){var G__22964 = (function (){var fexpr__22967 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__22940,G__22941,G__22942){
return (function (G__22965,G__22966){
return (G__22965.cljs$core$IFn$_invoke$arity$1 ? G__22965.cljs$core$IFn$_invoke$arity$1(G__22966) : G__22965.call(null,G__22966));
});})(G__22940,G__22941,G__22942))
);
return (fexpr__22967.cljs$core$IFn$_invoke$arity$2 ? fexpr__22967.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,hoplon_auth0.state.access_token) : fexpr__22967.call(null,cljs.core.pr_str,hoplon_auth0.state.access_token));
})();
return (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(G__22964) : hoplon.core.pre.call(null,G__22964));
})();
var G__22944 = "User profile:";
var G__22945 = (function (){var G__22968 = (function (){var fexpr__22971 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__22940,G__22941,G__22942,G__22943,G__22944){
return (function (G__22969,G__22970){
return (G__22969.cljs$core$IFn$_invoke$arity$1 ? G__22969.cljs$core$IFn$_invoke$arity$1(G__22970) : G__22969.call(null,G__22970));
});})(G__22940,G__22941,G__22942,G__22943,G__22944))
);
return (fexpr__22971.cljs$core$IFn$_invoke$arity$2 ? fexpr__22971.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,hoplon_auth0.state.user_profile) : fexpr__22971.call(null,cljs.core.pr_str,hoplon_auth0.state.user_profile));
})();
return (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(G__22968) : hoplon.core.pre.call(null,G__22968));
})();
var G__22946 = "State:";
var G__22947 = (function (){var G__22972 = (function (){var fexpr__22975 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__22940,G__22941,G__22942,G__22943,G__22944,G__22945,G__22946){
return (function (G__22973,G__22974){
return (G__22973.cljs$core$IFn$_invoke$arity$1 ? G__22973.cljs$core$IFn$_invoke$arity$1(G__22974) : G__22973.call(null,G__22974));
});})(G__22940,G__22941,G__22942,G__22943,G__22944,G__22945,G__22946))
);
return (fexpr__22975.cljs$core$IFn$_invoke$arity$2 ? fexpr__22975.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,hoplon_auth0.state.state) : fexpr__22975.call(null,cljs.core.pr_str,hoplon_auth0.state.state));
})();
return (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(G__22972) : hoplon.core.pre.call(null,G__22972));
})();
var G__22948 = "Nonce:";
var G__22949 = (function (){var G__22976 = (function (){var fexpr__22979 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__22940,G__22941,G__22942,G__22943,G__22944,G__22945,G__22946,G__22947,G__22948){
return (function (G__22978,G__22977){
return (G__22977.cljs$core$IFn$_invoke$arity$1 ? G__22977.cljs$core$IFn$_invoke$arity$1(G__22978) : G__22977.call(null,G__22978));
});})(G__22940,G__22941,G__22942,G__22943,G__22944,G__22945,G__22946,G__22947,G__22948))
);
return (fexpr__22979.cljs$core$IFn$_invoke$arity$2 ? fexpr__22979.cljs$core$IFn$_invoke$arity$2(hoplon_auth0.state.nonce,cljs.core.pr_str) : fexpr__22979.call(null,hoplon_auth0.state.nonce,cljs.core.pr_str));
})();
return (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(G__22976) : hoplon.core.pre.call(null,G__22976));
})();
var G__22950 = "JWT Token:";
var G__22951 = (function (){var G__22980 = (function (){var fexpr__22983 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__22940,G__22941,G__22942,G__22943,G__22944,G__22945,G__22946,G__22947,G__22948,G__22949,G__22950){
return (function (G__22981,G__22982){
return (G__22981.cljs$core$IFn$_invoke$arity$1 ? G__22981.cljs$core$IFn$_invoke$arity$1(G__22982) : G__22981.call(null,G__22982));
});})(G__22940,G__22941,G__22942,G__22943,G__22944,G__22945,G__22946,G__22947,G__22948,G__22949,G__22950))
);
return (fexpr__22983.cljs$core$IFn$_invoke$arity$2 ? fexpr__22983.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,hoplon_auth0.state.token) : fexpr__22983.call(null,cljs.core.pr_str,hoplon_auth0.state.token));
})();
return (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(G__22980) : hoplon.core.pre.call(null,G__22980));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$12(G__22940,G__22941,G__22942,G__22943,G__22944,G__22945,G__22946,G__22947,G__22948,G__22949,G__22950,G__22951) : hoplon.core.div.call(null,G__22940,G__22941,G__22942,G__22943,G__22944,G__22945,G__22946,G__22947,G__22948,G__22949,G__22950,G__22951));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__22939) : hoplon.core.body.call(null,G__22939));
})()], 0));
