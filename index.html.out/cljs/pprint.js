// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__9562__auto__ = [];
var len__9555__auto___16219 = arguments.length;
var i__9556__auto___16220 = (0);
while(true){
if((i__9556__auto___16220 < len__9555__auto___16219)){
args__9562__auto__.push((arguments[i__9556__auto___16220]));

var G__16221 = (i__9556__auto___16220 + (1));
i__9556__auto___16220 = G__16221;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((0) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__9563__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq16218){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16218));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9562__auto__ = [];
var len__9555__auto___16223 = arguments.length;
var i__9556__auto___16224 = (0);
while(true){
if((i__9556__auto___16224 < len__9555__auto___16223)){
args__9562__auto__.push((arguments[i__9556__auto___16224]));

var G__16225 = (i__9556__auto___16224 + (1));
i__9556__auto___16224 = G__16225;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((0) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__9563__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq16222){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16222));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__16226 = cljs.core._EQ_;
var expr__16227 = c;
if(cljs.core.truth_((function (){var G__16229 = "\b";
var G__16230 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16229,G__16230) : pred__16226.call(null,G__16229,G__16230));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__16231 = "\t";
var G__16232 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16231,G__16232) : pred__16226.call(null,G__16231,G__16232));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__16233 = "\n";
var G__16234 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16233,G__16234) : pred__16226.call(null,G__16233,G__16234));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__16235 = "\f";
var G__16236 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16235,G__16236) : pred__16226.call(null,G__16235,G__16236));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__16237 = "\r";
var G__16238 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16237,G__16238) : pred__16226.call(null,G__16237,G__16238));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__16239 = "\"";
var G__16240 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16239,G__16240) : pred__16226.call(null,G__16239,G__16240));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__16241 = "\\";
var G__16242 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16241,G__16242) : pred__16226.call(null,G__16241,G__16242));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__9562__auto__ = [];
var len__9555__auto___16244 = arguments.length;
var i__9556__auto___16245 = (0);
while(true){
if((i__9556__auto___16245 < len__9555__auto___16244)){
args__9562__auto__.push((arguments[i__9556__auto___16245]));

var G__16246 = (i__9556__auto___16245 + (1));
i__9556__auto___16245 = G__16246;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((0) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__9563__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq16243){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16243));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9562__auto__ = [];
var len__9555__auto___16248 = arguments.length;
var i__9556__auto___16249 = (0);
while(true){
if((i__9556__auto___16249 < len__9555__auto___16248)){
args__9562__auto__.push((arguments[i__9556__auto___16249]));

var G__16250 = (i__9556__auto___16249 + (1));
i__9556__auto___16249 = G__16250;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((0) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__9563__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq16247){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16247));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__16251 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(1),null);
var G__16254 = new_context;
var G__16255 = remainder;
var G__16256 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16254;
lis__$1 = G__16255;
acc = G__16256;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__16257 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16257,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16257,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__16260 = new_context;
var G__16261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16260;
acc = G__16261;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__16262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16262,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16262,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16262,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__16265 = new_context;
var G__16266 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16265;
acc = G__16266;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9158__auto__ = (function cljs$pprint$unzip_map_$_iter__16267(s__16268){
return (new cljs.core.LazySeq(null,(function (){
var s__16268__$1 = s__16268;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__16268__$1);
if(temp__5535__auto__){
var s__16268__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16268__$2)){
var c__9156__auto__ = cljs.core.chunk_first(s__16268__$2);
var size__9157__auto__ = cljs.core.count(c__9156__auto__);
var b__16270 = cljs.core.chunk_buffer(size__9157__auto__);
if((function (){var i__16269 = (0);
while(true){
if((i__16269 < size__9157__auto__)){
var vec__16271 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9156__auto__,i__16269);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16271,(0),null);
var vec__16274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16271,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16274,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16274,(1),null);
cljs.core.chunk_append(b__16270,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__16299 = (i__16269 + (1));
i__16269 = G__16299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16270),cljs$pprint$unzip_map_$_iter__16267(cljs.core.chunk_rest(s__16268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16270),null);
}
} else {
var vec__16277 = cljs.core.first(s__16268__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16277,(0),null);
var vec__16280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16277,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__16267(cljs.core.rest(s__16268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9158__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9158__auto__ = (function cljs$pprint$unzip_map_$_iter__16283(s__16284){
return (new cljs.core.LazySeq(null,(function (){
var s__16284__$1 = s__16284;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__16284__$1);
if(temp__5535__auto__){
var s__16284__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16284__$2)){
var c__9156__auto__ = cljs.core.chunk_first(s__16284__$2);
var size__9157__auto__ = cljs.core.count(c__9156__auto__);
var b__16286 = cljs.core.chunk_buffer(size__9157__auto__);
if((function (){var i__16285 = (0);
while(true){
if((i__16285 < size__9157__auto__)){
var vec__16287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9156__auto__,i__16285);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16287,(0),null);
var vec__16290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16287,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16290,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16290,(1),null);
cljs.core.chunk_append(b__16286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__16300 = (i__16285 + (1));
i__16285 = G__16300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16286),cljs$pprint$unzip_map_$_iter__16283(cljs.core.chunk_rest(s__16284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16286),null);
}
} else {
var vec__16293 = cljs.core.first(s__16284__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293,(0),null);
var vec__16296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16296,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16296,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__16283(cljs.core.rest(s__16284__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9158__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9158__auto__ = (function cljs$pprint$tuple_map_$_iter__16301(s__16302){
return (new cljs.core.LazySeq(null,(function (){
var s__16302__$1 = s__16302;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__16302__$1);
if(temp__5535__auto__){
var s__16302__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16302__$2)){
var c__9156__auto__ = cljs.core.chunk_first(s__16302__$2);
var size__9157__auto__ = cljs.core.count(c__9156__auto__);
var b__16304 = cljs.core.chunk_buffer(size__9157__auto__);
if((function (){var i__16303 = (0);
while(true){
if((i__16303 < size__9157__auto__)){
var vec__16305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9156__auto__,i__16303);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16305,(1),null);
cljs.core.chunk_append(b__16304,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__16311 = (i__16303 + (1));
i__16303 = G__16311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16304),cljs$pprint$tuple_map_$_iter__16301(cljs.core.chunk_rest(s__16302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16304),null);
}
} else {
var vec__16308 = cljs.core.first(s__16302__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16308,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__16301(cljs.core.rest(s__16302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9158__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__16312 = (n - (1));
n = G__16312;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__16313 = (n + (1));
n = G__16313;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__16315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__16315) : test.call(null,G__16315));
})()))){
return pos;
} else {
var G__16316 = (pos + (1));
pos = G__16316;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__9009__auto__ = (((pp == null))?null:pp);
var m__9010__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__9010__auto__.call(null,pp));
} else {
var m__9010__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__9010__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__16317 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__16317) : sym.call(null,G__16317));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__16320 = arguments.length;
switch (G__16320) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint16321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16321 = (function (writer,max_columns,fields,meta16322){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta16322 = meta16322;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_16323,meta16322__$1){
var self__ = this;
var _16323__$1 = this;
return (new cljs.pprint.t_cljs$pprint16321(self__.writer,self__.max_columns,self__.fields,meta16322__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint16321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_16323){
var self__ = this;
var _16323__$1 = this;
return self__.meta16322;
});})(fields))
;

cljs.pprint.t_cljs$pprint16321.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint16321.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint16321.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16324 = cljs.core._EQ_;
var expr__16325 = cljs.core.type(x);
if(cljs.core.truth_((pred__16324.cljs$core$IFn$_invoke$arity$2 ? pred__16324.cljs$core$IFn$_invoke$arity$2(String,expr__16325) : pred__16324.call(null,String,expr__16325)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__16324,expr__16325,this$__$1,fields){
return (function (p1__16318_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16318_SHARP_,"\n");
});})(s,nl,pred__16324,expr__16325,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__16324.cljs$core$IFn$_invoke$arity$2 ? pred__16324.cljs$core$IFn$_invoke$arity$2(Number,expr__16325) : pred__16324.call(null,Number,expr__16325)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16325)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint16321.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta16322], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint16321.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16321.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16321";

cljs.pprint.t_cljs$pprint16321.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__8947__auto__,writer__8948__auto__,opt__8949__auto__){
return cljs.core._write(writer__8948__auto__,"cljs.pprint/t_cljs$pprint16321");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint16321 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint16321(writer__$1,max_columns__$1,fields__$1,meta16322){
return (new cljs.pprint.t_cljs$pprint16321(writer__$1,max_columns__$1,fields__$1,meta16322));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint16321(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8964__auto__,k__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
return this__8964__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8965__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8966__auto__,k16329,else__8967__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
var G__16333 = k16329;
var G__16333__$1 = (((G__16333 instanceof cljs.core.Keyword))?G__16333.fqn:null);
switch (G__16333__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16329,else__8967__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8978__auto__,writer__8979__auto__,opts__8980__auto__){
var self__ = this;
var this__8978__auto____$1 = this;
var pr_pair__8981__auto__ = ((function (this__8978__auto____$1){
return (function (keyval__8982__auto__){
return cljs.core.pr_sequential_writer(writer__8979__auto__,cljs.core.pr_writer,""," ","",opts__8980__auto__,keyval__8982__auto__);
});})(this__8978__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8979__auto__,pr_pair__8981__auto__,"#cljs.pprint.logical-block{",", ","}",opts__8980__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16328){
var self__ = this;
var G__16328__$1 = this;
return (new cljs.core.RecordIter((0),G__16328__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8962__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8959__auto__){
var self__ = this;
var this__8959__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8968__auto__){
var self__ = this;
var this__8968__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
var h__8732__auto__ = self__.__hash;
if(!((h__8732__auto__ == null))){
return h__8732__auto__;
} else {
var h__8732__auto____$1 = (function (){var fexpr__16334 = ((function (h__8732__auto__,this__8960__auto____$1){
return (function (coll__8961__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__8961__auto__));
});})(h__8732__auto__,this__8960__auto____$1))
;
return fexpr__16334(this__8960__auto____$1);
})();
self__.__hash = h__8732__auto____$1;

return h__8732__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16330,other16331){
var self__ = this;
var this16330__$1 = this;
return (!((other16331 == null))) && ((this16330__$1.constructor === other16331.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.parent,other16331.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.section,other16331.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.start_col,other16331.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.indent,other16331.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.done_nl,other16331.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.intra_block_nl,other16331.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.prefix,other16331.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.per_line_prefix,other16331.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.suffix,other16331.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.logical_block_callback,other16331.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.__extmap,other16331.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8973__auto__,k__8974__auto__){
var self__ = this;
var this__8973__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__8974__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8973__auto____$1),self__.__meta),k__8974__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8974__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8971__auto__,k__8972__auto__,G__16328){
var self__ = this;
var this__8971__auto____$1 = this;
var pred__16335 = cljs.core.keyword_identical_QMARK_;
var expr__16336 = k__8972__auto__;
if(cljs.core.truth_((function (){var G__16338 = cljs.core.cst$kw$parent;
var G__16339 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16338,G__16339) : pred__16335.call(null,G__16338,G__16339));
})())){
return (new cljs.pprint.logical_block(G__16328,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16340 = cljs.core.cst$kw$section;
var G__16341 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16340,G__16341) : pred__16335.call(null,G__16340,G__16341));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__16328,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16342 = cljs.core.cst$kw$start_DASH_col;
var G__16343 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16342,G__16343) : pred__16335.call(null,G__16342,G__16343));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__16328,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16344 = cljs.core.cst$kw$indent;
var G__16345 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16344,G__16345) : pred__16335.call(null,G__16344,G__16345));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__16328,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16346 = cljs.core.cst$kw$done_DASH_nl;
var G__16347 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16346,G__16347) : pred__16335.call(null,G__16346,G__16347));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__16328,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16348 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__16349 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16348,G__16349) : pred__16335.call(null,G__16348,G__16349));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__16328,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16350 = cljs.core.cst$kw$prefix;
var G__16351 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16350,G__16351) : pred__16335.call(null,G__16350,G__16351));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__16328,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16352 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__16353 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16352,G__16353) : pred__16335.call(null,G__16352,G__16353));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__16328,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16354 = cljs.core.cst$kw$suffix;
var G__16355 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16354,G__16355) : pred__16335.call(null,G__16354,G__16355));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__16328,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16356 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__16357 = expr__16336;
return (pred__16335.cljs$core$IFn$_invoke$arity$2 ? pred__16335.cljs$core$IFn$_invoke$arity$2(G__16356,G__16357) : pred__16335.call(null,G__16356,G__16357));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__16328,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8972__auto__,G__16328),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8976__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8963__auto__,G__16328){
var self__ = this;
var this__8963__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__16328,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8969__auto__,entry__8970__auto__){
var self__ = this;
var this__8969__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8970__auto__)){
return this__8969__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8969__auto____$1,entry__8970__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__9002__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__9002__auto__,writer__9003__auto__){
return cljs.core._write(writer__9003__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__16332){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__16332),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__16332),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16332,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__16359 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__16359;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8964__auto__,k__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
return this__8964__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8965__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8966__auto__,k16361,else__8967__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
var G__16365 = k16361;
var G__16365__$1 = (((G__16365 instanceof cljs.core.Keyword))?G__16365.fqn:null);
switch (G__16365__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16361,else__8967__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8978__auto__,writer__8979__auto__,opts__8980__auto__){
var self__ = this;
var this__8978__auto____$1 = this;
var pr_pair__8981__auto__ = ((function (this__8978__auto____$1){
return (function (keyval__8982__auto__){
return cljs.core.pr_sequential_writer(writer__8979__auto__,cljs.core.pr_writer,""," ","",opts__8980__auto__,keyval__8982__auto__);
});})(this__8978__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8979__auto__,pr_pair__8981__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__8980__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16360){
var self__ = this;
var G__16360__$1 = this;
return (new cljs.core.RecordIter((0),G__16360__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8962__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8959__auto__){
var self__ = this;
var this__8959__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8968__auto__){
var self__ = this;
var this__8968__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
var h__8732__auto__ = self__.__hash;
if(!((h__8732__auto__ == null))){
return h__8732__auto__;
} else {
var h__8732__auto____$1 = (function (){var fexpr__16366 = ((function (h__8732__auto__,this__8960__auto____$1){
return (function (coll__8961__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__8961__auto__));
});})(h__8732__auto__,this__8960__auto____$1))
;
return fexpr__16366(this__8960__auto____$1);
})();
self__.__hash = h__8732__auto____$1;

return h__8732__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16362,other16363){
var self__ = this;
var this16362__$1 = this;
return (!((other16363 == null))) && ((this16362__$1.constructor === other16363.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16362__$1.type_tag,other16363.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16362__$1.data,other16363.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16362__$1.trailing_white_space,other16363.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16362__$1.start_pos,other16363.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16362__$1.end_pos,other16363.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16362__$1.__extmap,other16363.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8973__auto__,k__8974__auto__){
var self__ = this;
var this__8973__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__8974__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8973__auto____$1),self__.__meta),k__8974__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8974__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8971__auto__,k__8972__auto__,G__16360){
var self__ = this;
var this__8971__auto____$1 = this;
var pred__16367 = cljs.core.keyword_identical_QMARK_;
var expr__16368 = k__8972__auto__;
if(cljs.core.truth_((function (){var G__16370 = cljs.core.cst$kw$type_DASH_tag;
var G__16371 = expr__16368;
return (pred__16367.cljs$core$IFn$_invoke$arity$2 ? pred__16367.cljs$core$IFn$_invoke$arity$2(G__16370,G__16371) : pred__16367.call(null,G__16370,G__16371));
})())){
return (new cljs.pprint.buffer_blob(G__16360,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16372 = cljs.core.cst$kw$data;
var G__16373 = expr__16368;
return (pred__16367.cljs$core$IFn$_invoke$arity$2 ? pred__16367.cljs$core$IFn$_invoke$arity$2(G__16372,G__16373) : pred__16367.call(null,G__16372,G__16373));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__16360,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16374 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__16375 = expr__16368;
return (pred__16367.cljs$core$IFn$_invoke$arity$2 ? pred__16367.cljs$core$IFn$_invoke$arity$2(G__16374,G__16375) : pred__16367.call(null,G__16374,G__16375));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__16360,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16376 = cljs.core.cst$kw$start_DASH_pos;
var G__16377 = expr__16368;
return (pred__16367.cljs$core$IFn$_invoke$arity$2 ? pred__16367.cljs$core$IFn$_invoke$arity$2(G__16376,G__16377) : pred__16367.call(null,G__16376,G__16377));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__16360,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16378 = cljs.core.cst$kw$end_DASH_pos;
var G__16379 = expr__16368;
return (pred__16367.cljs$core$IFn$_invoke$arity$2 ? pred__16367.cljs$core$IFn$_invoke$arity$2(G__16378,G__16379) : pred__16367.call(null,G__16378,G__16379));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__16360,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8972__auto__,G__16360),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8976__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8963__auto__,G__16360){
var self__ = this;
var this__8963__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__16360,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8969__auto__,entry__8970__auto__){
var self__ = this;
var this__8969__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8970__auto__)){
return this__8969__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8969__auto____$1,entry__8970__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__9002__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__9002__auto__,writer__9003__auto__){
return cljs.core._write(writer__9003__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__16364){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16364),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__16364),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__16364),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16364),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16364),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16364,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__16149__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16149__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8964__auto__,k__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
return this__8964__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8965__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8966__auto__,k16382,else__8967__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
var G__16386 = k16382;
var G__16386__$1 = (((G__16386 instanceof cljs.core.Keyword))?G__16386.fqn:null);
switch (G__16386__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16382,else__8967__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8978__auto__,writer__8979__auto__,opts__8980__auto__){
var self__ = this;
var this__8978__auto____$1 = this;
var pr_pair__8981__auto__ = ((function (this__8978__auto____$1){
return (function (keyval__8982__auto__){
return cljs.core.pr_sequential_writer(writer__8979__auto__,cljs.core.pr_writer,""," ","",opts__8980__auto__,keyval__8982__auto__);
});})(this__8978__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8979__auto__,pr_pair__8981__auto__,"#cljs.pprint.nl-t{",", ","}",opts__8980__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16381){
var self__ = this;
var G__16381__$1 = this;
return (new cljs.core.RecordIter((0),G__16381__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8962__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8959__auto__){
var self__ = this;
var this__8959__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8968__auto__){
var self__ = this;
var this__8968__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
var h__8732__auto__ = self__.__hash;
if(!((h__8732__auto__ == null))){
return h__8732__auto__;
} else {
var h__8732__auto____$1 = (function (){var fexpr__16387 = ((function (h__8732__auto__,this__8960__auto____$1){
return (function (coll__8961__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__8961__auto__));
});})(h__8732__auto__,this__8960__auto____$1))
;
return fexpr__16387(this__8960__auto____$1);
})();
self__.__hash = h__8732__auto____$1;

return h__8732__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16383,other16384){
var self__ = this;
var this16383__$1 = this;
return (!((other16384 == null))) && ((this16383__$1.constructor === other16384.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16383__$1.type_tag,other16384.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16383__$1.type,other16384.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16383__$1.logical_block,other16384.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16383__$1.start_pos,other16384.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16383__$1.end_pos,other16384.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16383__$1.__extmap,other16384.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8973__auto__,k__8974__auto__){
var self__ = this;
var this__8973__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8974__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8973__auto____$1),self__.__meta),k__8974__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8974__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8971__auto__,k__8972__auto__,G__16381){
var self__ = this;
var this__8971__auto____$1 = this;
var pred__16388 = cljs.core.keyword_identical_QMARK_;
var expr__16389 = k__8972__auto__;
if(cljs.core.truth_((function (){var G__16391 = cljs.core.cst$kw$type_DASH_tag;
var G__16392 = expr__16389;
return (pred__16388.cljs$core$IFn$_invoke$arity$2 ? pred__16388.cljs$core$IFn$_invoke$arity$2(G__16391,G__16392) : pred__16388.call(null,G__16391,G__16392));
})())){
return (new cljs.pprint.nl_t(G__16381,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16393 = cljs.core.cst$kw$type;
var G__16394 = expr__16389;
return (pred__16388.cljs$core$IFn$_invoke$arity$2 ? pred__16388.cljs$core$IFn$_invoke$arity$2(G__16393,G__16394) : pred__16388.call(null,G__16393,G__16394));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__16381,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16395 = cljs.core.cst$kw$logical_DASH_block;
var G__16396 = expr__16389;
return (pred__16388.cljs$core$IFn$_invoke$arity$2 ? pred__16388.cljs$core$IFn$_invoke$arity$2(G__16395,G__16396) : pred__16388.call(null,G__16395,G__16396));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__16381,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16397 = cljs.core.cst$kw$start_DASH_pos;
var G__16398 = expr__16389;
return (pred__16388.cljs$core$IFn$_invoke$arity$2 ? pred__16388.cljs$core$IFn$_invoke$arity$2(G__16397,G__16398) : pred__16388.call(null,G__16397,G__16398));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__16381,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16399 = cljs.core.cst$kw$end_DASH_pos;
var G__16400 = expr__16389;
return (pred__16388.cljs$core$IFn$_invoke$arity$2 ? pred__16388.cljs$core$IFn$_invoke$arity$2(G__16399,G__16400) : pred__16388.call(null,G__16399,G__16400));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__16381,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8972__auto__,G__16381),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8976__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8963__auto__,G__16381){
var self__ = this;
var this__8963__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__16381,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8969__auto__,entry__8970__auto__){
var self__ = this;
var this__8969__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8970__auto__)){
return this__8969__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8969__auto____$1,entry__8970__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__9002__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__9002__auto__,writer__9003__auto__){
return cljs.core._write(writer__9003__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__16385){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16385),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__16385),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16385),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16385),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16385),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16385,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__16149__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16149__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8964__auto__,k__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
return this__8964__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8965__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8966__auto__,k16403,else__8967__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
var G__16407 = k16403;
var G__16407__$1 = (((G__16407 instanceof cljs.core.Keyword))?G__16407.fqn:null);
switch (G__16407__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16403,else__8967__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8978__auto__,writer__8979__auto__,opts__8980__auto__){
var self__ = this;
var this__8978__auto____$1 = this;
var pr_pair__8981__auto__ = ((function (this__8978__auto____$1){
return (function (keyval__8982__auto__){
return cljs.core.pr_sequential_writer(writer__8979__auto__,cljs.core.pr_writer,""," ","",opts__8980__auto__,keyval__8982__auto__);
});})(this__8978__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8979__auto__,pr_pair__8981__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__8980__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16402){
var self__ = this;
var G__16402__$1 = this;
return (new cljs.core.RecordIter((0),G__16402__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8962__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8959__auto__){
var self__ = this;
var this__8959__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8968__auto__){
var self__ = this;
var this__8968__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
var h__8732__auto__ = self__.__hash;
if(!((h__8732__auto__ == null))){
return h__8732__auto__;
} else {
var h__8732__auto____$1 = (function (){var fexpr__16408 = ((function (h__8732__auto__,this__8960__auto____$1){
return (function (coll__8961__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__8961__auto__));
});})(h__8732__auto__,this__8960__auto____$1))
;
return fexpr__16408(this__8960__auto____$1);
})();
self__.__hash = h__8732__auto____$1;

return h__8732__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16404,other16405){
var self__ = this;
var this16404__$1 = this;
return (!((other16405 == null))) && ((this16404__$1.constructor === other16405.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16404__$1.type_tag,other16405.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16404__$1.logical_block,other16405.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16404__$1.start_pos,other16405.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16404__$1.end_pos,other16405.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16404__$1.__extmap,other16405.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8973__auto__,k__8974__auto__){
var self__ = this;
var this__8973__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8974__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8973__auto____$1),self__.__meta),k__8974__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8974__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8971__auto__,k__8972__auto__,G__16402){
var self__ = this;
var this__8971__auto____$1 = this;
var pred__16409 = cljs.core.keyword_identical_QMARK_;
var expr__16410 = k__8972__auto__;
if(cljs.core.truth_((function (){var G__16412 = cljs.core.cst$kw$type_DASH_tag;
var G__16413 = expr__16410;
return (pred__16409.cljs$core$IFn$_invoke$arity$2 ? pred__16409.cljs$core$IFn$_invoke$arity$2(G__16412,G__16413) : pred__16409.call(null,G__16412,G__16413));
})())){
return (new cljs.pprint.start_block_t(G__16402,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16414 = cljs.core.cst$kw$logical_DASH_block;
var G__16415 = expr__16410;
return (pred__16409.cljs$core$IFn$_invoke$arity$2 ? pred__16409.cljs$core$IFn$_invoke$arity$2(G__16414,G__16415) : pred__16409.call(null,G__16414,G__16415));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__16402,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16416 = cljs.core.cst$kw$start_DASH_pos;
var G__16417 = expr__16410;
return (pred__16409.cljs$core$IFn$_invoke$arity$2 ? pred__16409.cljs$core$IFn$_invoke$arity$2(G__16416,G__16417) : pred__16409.call(null,G__16416,G__16417));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__16402,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16418 = cljs.core.cst$kw$end_DASH_pos;
var G__16419 = expr__16410;
return (pred__16409.cljs$core$IFn$_invoke$arity$2 ? pred__16409.cljs$core$IFn$_invoke$arity$2(G__16418,G__16419) : pred__16409.call(null,G__16418,G__16419));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16402,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8972__auto__,G__16402),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8976__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8963__auto__,G__16402){
var self__ = this;
var this__8963__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16402,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8969__auto__,entry__8970__auto__){
var self__ = this;
var this__8969__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8970__auto__)){
return this__8969__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8969__auto____$1,entry__8970__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__9002__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__9002__auto__,writer__9003__auto__){
return cljs.core._write(writer__9003__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__16406){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16406),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16406),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16406),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16406),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16406,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__16149__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16149__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8964__auto__,k__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
return this__8964__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8965__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8966__auto__,k16422,else__8967__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
var G__16426 = k16422;
var G__16426__$1 = (((G__16426 instanceof cljs.core.Keyword))?G__16426.fqn:null);
switch (G__16426__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16422,else__8967__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8978__auto__,writer__8979__auto__,opts__8980__auto__){
var self__ = this;
var this__8978__auto____$1 = this;
var pr_pair__8981__auto__ = ((function (this__8978__auto____$1){
return (function (keyval__8982__auto__){
return cljs.core.pr_sequential_writer(writer__8979__auto__,cljs.core.pr_writer,""," ","",opts__8980__auto__,keyval__8982__auto__);
});})(this__8978__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8979__auto__,pr_pair__8981__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__8980__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16421){
var self__ = this;
var G__16421__$1 = this;
return (new cljs.core.RecordIter((0),G__16421__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8962__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8959__auto__){
var self__ = this;
var this__8959__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8968__auto__){
var self__ = this;
var this__8968__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
var h__8732__auto__ = self__.__hash;
if(!((h__8732__auto__ == null))){
return h__8732__auto__;
} else {
var h__8732__auto____$1 = (function (){var fexpr__16427 = ((function (h__8732__auto__,this__8960__auto____$1){
return (function (coll__8961__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__8961__auto__));
});})(h__8732__auto__,this__8960__auto____$1))
;
return fexpr__16427(this__8960__auto____$1);
})();
self__.__hash = h__8732__auto____$1;

return h__8732__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16423,other16424){
var self__ = this;
var this16423__$1 = this;
return (!((other16424 == null))) && ((this16423__$1.constructor === other16424.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16423__$1.type_tag,other16424.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16423__$1.logical_block,other16424.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16423__$1.start_pos,other16424.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16423__$1.end_pos,other16424.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16423__$1.__extmap,other16424.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8973__auto__,k__8974__auto__){
var self__ = this;
var this__8973__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8974__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8973__auto____$1),self__.__meta),k__8974__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8974__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8971__auto__,k__8972__auto__,G__16421){
var self__ = this;
var this__8971__auto____$1 = this;
var pred__16428 = cljs.core.keyword_identical_QMARK_;
var expr__16429 = k__8972__auto__;
if(cljs.core.truth_((function (){var G__16431 = cljs.core.cst$kw$type_DASH_tag;
var G__16432 = expr__16429;
return (pred__16428.cljs$core$IFn$_invoke$arity$2 ? pred__16428.cljs$core$IFn$_invoke$arity$2(G__16431,G__16432) : pred__16428.call(null,G__16431,G__16432));
})())){
return (new cljs.pprint.end_block_t(G__16421,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16433 = cljs.core.cst$kw$logical_DASH_block;
var G__16434 = expr__16429;
return (pred__16428.cljs$core$IFn$_invoke$arity$2 ? pred__16428.cljs$core$IFn$_invoke$arity$2(G__16433,G__16434) : pred__16428.call(null,G__16433,G__16434));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__16421,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16435 = cljs.core.cst$kw$start_DASH_pos;
var G__16436 = expr__16429;
return (pred__16428.cljs$core$IFn$_invoke$arity$2 ? pred__16428.cljs$core$IFn$_invoke$arity$2(G__16435,G__16436) : pred__16428.call(null,G__16435,G__16436));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__16421,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16437 = cljs.core.cst$kw$end_DASH_pos;
var G__16438 = expr__16429;
return (pred__16428.cljs$core$IFn$_invoke$arity$2 ? pred__16428.cljs$core$IFn$_invoke$arity$2(G__16437,G__16438) : pred__16428.call(null,G__16437,G__16438));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16421,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8972__auto__,G__16421),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8976__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8963__auto__,G__16421){
var self__ = this;
var this__8963__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16421,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8969__auto__,entry__8970__auto__){
var self__ = this;
var this__8969__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8970__auto__)){
return this__8969__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8969__auto____$1,entry__8970__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__9002__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__9002__auto__,writer__9003__auto__){
return cljs.core._write(writer__9003__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__16425){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16425),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16425),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16425),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16425),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16425,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__16149__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16149__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8964__auto__,k__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
return this__8964__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8965__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8966__auto__,k16441,else__8967__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
var G__16445 = k16441;
var G__16445__$1 = (((G__16445 instanceof cljs.core.Keyword))?G__16445.fqn:null);
switch (G__16445__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16441,else__8967__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8978__auto__,writer__8979__auto__,opts__8980__auto__){
var self__ = this;
var this__8978__auto____$1 = this;
var pr_pair__8981__auto__ = ((function (this__8978__auto____$1){
return (function (keyval__8982__auto__){
return cljs.core.pr_sequential_writer(writer__8979__auto__,cljs.core.pr_writer,""," ","",opts__8980__auto__,keyval__8982__auto__);
});})(this__8978__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8979__auto__,pr_pair__8981__auto__,"#cljs.pprint.indent-t{",", ","}",opts__8980__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16440){
var self__ = this;
var G__16440__$1 = this;
return (new cljs.core.RecordIter((0),G__16440__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8962__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8959__auto__){
var self__ = this;
var this__8959__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8968__auto__){
var self__ = this;
var this__8968__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
var h__8732__auto__ = self__.__hash;
if(!((h__8732__auto__ == null))){
return h__8732__auto__;
} else {
var h__8732__auto____$1 = (function (){var fexpr__16446 = ((function (h__8732__auto__,this__8960__auto____$1){
return (function (coll__8961__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__8961__auto__));
});})(h__8732__auto__,this__8960__auto____$1))
;
return fexpr__16446(this__8960__auto____$1);
})();
self__.__hash = h__8732__auto____$1;

return h__8732__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16442,other16443){
var self__ = this;
var this16442__$1 = this;
return (!((other16443 == null))) && ((this16442__$1.constructor === other16443.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16442__$1.type_tag,other16443.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16442__$1.logical_block,other16443.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16442__$1.relative_to,other16443.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16442__$1.offset,other16443.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16442__$1.start_pos,other16443.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16442__$1.end_pos,other16443.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16442__$1.__extmap,other16443.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8973__auto__,k__8974__auto__){
var self__ = this;
var this__8973__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8974__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8973__auto____$1),self__.__meta),k__8974__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8974__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8971__auto__,k__8972__auto__,G__16440){
var self__ = this;
var this__8971__auto____$1 = this;
var pred__16447 = cljs.core.keyword_identical_QMARK_;
var expr__16448 = k__8972__auto__;
if(cljs.core.truth_((function (){var G__16450 = cljs.core.cst$kw$type_DASH_tag;
var G__16451 = expr__16448;
return (pred__16447.cljs$core$IFn$_invoke$arity$2 ? pred__16447.cljs$core$IFn$_invoke$arity$2(G__16450,G__16451) : pred__16447.call(null,G__16450,G__16451));
})())){
return (new cljs.pprint.indent_t(G__16440,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16452 = cljs.core.cst$kw$logical_DASH_block;
var G__16453 = expr__16448;
return (pred__16447.cljs$core$IFn$_invoke$arity$2 ? pred__16447.cljs$core$IFn$_invoke$arity$2(G__16452,G__16453) : pred__16447.call(null,G__16452,G__16453));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__16440,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16454 = cljs.core.cst$kw$relative_DASH_to;
var G__16455 = expr__16448;
return (pred__16447.cljs$core$IFn$_invoke$arity$2 ? pred__16447.cljs$core$IFn$_invoke$arity$2(G__16454,G__16455) : pred__16447.call(null,G__16454,G__16455));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__16440,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16456 = cljs.core.cst$kw$offset;
var G__16457 = expr__16448;
return (pred__16447.cljs$core$IFn$_invoke$arity$2 ? pred__16447.cljs$core$IFn$_invoke$arity$2(G__16456,G__16457) : pred__16447.call(null,G__16456,G__16457));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__16440,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16458 = cljs.core.cst$kw$start_DASH_pos;
var G__16459 = expr__16448;
return (pred__16447.cljs$core$IFn$_invoke$arity$2 ? pred__16447.cljs$core$IFn$_invoke$arity$2(G__16458,G__16459) : pred__16447.call(null,G__16458,G__16459));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__16440,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16460 = cljs.core.cst$kw$end_DASH_pos;
var G__16461 = expr__16448;
return (pred__16447.cljs$core$IFn$_invoke$arity$2 ? pred__16447.cljs$core$IFn$_invoke$arity$2(G__16460,G__16461) : pred__16447.call(null,G__16460,G__16461));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__16440,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8972__auto__,G__16440),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8976__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8963__auto__,G__16440){
var self__ = this;
var this__8963__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__16440,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8969__auto__,entry__8970__auto__){
var self__ = this;
var this__8969__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8970__auto__)){
return this__8969__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8969__auto____$1,entry__8970__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__9002__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__9002__auto__,writer__9003__auto__){
return cljs.core._write(writer__9003__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__16444){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16444),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16444),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__16444),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__16444),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16444),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16444),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16444,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__16149__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16149__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9333__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9334__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__,hierarchy__9335__auto__){
return (function (p1__16464_SHARP_,p2__16463_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__16463_SHARP_);
});})(method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__,hierarchy__9335__auto__))
,cljs.core.cst$kw$default,hierarchy__9335__auto__,method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___16466 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___16466)){
var cb_16467 = temp__5535__auto___16466;
var G__16465_16468 = cljs.core.cst$kw$start;
(cb_16467.cljs$core$IFn$_invoke$arity$1 ? cb_16467.cljs$core$IFn$_invoke$arity$1(G__16465_16468) : cb_16467.call(null,G__16465_16468));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5535__auto___16469 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5535__auto___16469)){
var prefix_16470 = temp__5535__auto___16469;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_16470);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___16472 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___16472)){
var cb_16473 = temp__5535__auto___16472;
var G__16471_16474 = cljs.core.cst$kw$end;
(cb_16473.cljs$core$IFn$_invoke$arity$1 ? cb_16473.cljs$core$IFn$_invoke$arity$1(G__16471_16474) : cb_16473.call(null,G__16471_16474));
} else {
}

var temp__5535__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5535__auto__)){
var suffix = temp__5535__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__16475 = cljs.core._EQ_;
var expr__16476 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__16478 = cljs.core.cst$kw$block;
var G__16479 = expr__16476;
return (pred__16475.cljs$core$IFn$_invoke$arity$2 ? pred__16475.cljs$core$IFn$_invoke$arity$2(G__16478,G__16479) : pred__16475.call(null,G__16478,G__16479));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__16480 = cljs.core.cst$kw$current;
var G__16481 = expr__16476;
return (pred__16475.cljs$core$IFn$_invoke$arity$2 ? pred__16475.cljs$core$IFn$_invoke$arity$2(G__16480,G__16481) : pred__16475.call(null,G__16480,G__16481));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16476)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__8276__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__8276__auto__){
return or__8276__auto__;
} else {
var and__8264__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__8264__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__8264__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5533__auto___16482 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___16482)){
var tws_16483 = temp__5533__auto___16482;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16483);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__16484 = cljs.core.seq(tokens);
var chunk__16485 = null;
var count__16486 = (0);
var i__16487 = (0);
while(true){
if((i__16487 < count__16486)){
var token = chunk__16485.cljs$core$IIndexed$_nth$arity$2(null,i__16487);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___16488 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___16488)){
var tws_16489 = temp__5533__auto___16488;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16489);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_16490 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8264__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8264__auto__)){
return tws_16490;
} else {
return and__8264__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16490);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__16491 = seq__16484;
var G__16492 = chunk__16485;
var G__16493 = count__16486;
var G__16494 = (i__16487 + (1));
seq__16484 = G__16491;
chunk__16485 = G__16492;
count__16486 = G__16493;
i__16487 = G__16494;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__16484);
if(temp__5535__auto__){
var seq__16484__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16484__$1)){
var c__9207__auto__ = cljs.core.chunk_first(seq__16484__$1);
var G__16495 = cljs.core.chunk_rest(seq__16484__$1);
var G__16496 = c__9207__auto__;
var G__16497 = cljs.core.count(c__9207__auto__);
var G__16498 = (0);
seq__16484 = G__16495;
chunk__16485 = G__16496;
count__16486 = G__16497;
i__16487 = G__16498;
continue;
} else {
var token = cljs.core.first(seq__16484__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___16499 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___16499)){
var tws_16500 = temp__5533__auto___16499;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16500);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_16501 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8264__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8264__auto__)){
return tws_16501;
} else {
return and__8264__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16501);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__16502 = cljs.core.next(seq__16484__$1);
var G__16503 = null;
var G__16504 = (0);
var G__16505 = (0);
seq__16484 = G__16502;
chunk__16485 = G__16503;
count__16486 = G__16504;
i__16487 = G__16505;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__8276__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__8264__auto__ = miser_width;
if(cljs.core.truth_(and__8264__auto__)){
var and__8264__auto____$1 = maxcol;
if(cljs.core.truth_(and__8264__auto____$1)){
var and__8264__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__8264__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__8264__auto____$2;
}
} else {
return and__8264__auto____$1;
}
} else {
return and__8264__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9333__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9334__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__,hierarchy__9335__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__,hierarchy__9335__auto__))
,cljs.core.cst$kw$default,hierarchy__9335__auto__,method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__8276__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
var or__8276__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__8276__auto____$1){
return or__8276__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__16506_SHARP_){
return cljs.core.not((function (){var and__8264__auto__ = cljs.pprint.nl_t_QMARK_(p1__16506_SHARP_);
if(cljs.core.truth_(and__8264__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__16506_SHARP_),lb);
} else {
return and__8264__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__16507_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__16507_SHARP_);
return cljs.core.not((function (){var and__8264__auto__ = cljs.pprint.nl_t_QMARK_(p1__16507_SHARP_);
if(cljs.core.truth_(and__8264__auto__)){
var or__8276__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__8276__auto__){
return or__8276__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__8264__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__16508 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__16508;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_16509 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_16509);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16510_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__16510_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__16511 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16511,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16511,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__16514 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16514,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16514,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__16517 = newl;
var G__16518 = this$;
var G__16519 = section;
var G__16520 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__16517,G__16518,G__16519,G__16520) : cljs.pprint.emit_nl_QMARK_.call(null,G__16517,G__16518,G__16519,G__16520));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__16521 = new_buffer;
buffer = G__16521;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5533__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto__)){
var buf = temp__5533__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5535__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto__)){
var tws = temp__5535__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_16526 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_16527 = (oldpos_16526 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_16527);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_16526,newpos_16527));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__16522_16528 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__16523_16529 = null;
var count__16524_16530 = (0);
var i__16525_16531 = (0);
while(true){
if((i__16525_16531 < count__16524_16530)){
var l_16532__$1 = chunk__16523_16529.cljs$core$IIndexed$_nth$arity$2(null,i__16525_16531);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_16532__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__16533 = seq__16522_16528;
var G__16534 = chunk__16523_16529;
var G__16535 = count__16524_16530;
var G__16536 = (i__16525_16531 + (1));
seq__16522_16528 = G__16533;
chunk__16523_16529 = G__16534;
count__16524_16530 = G__16535;
i__16525_16531 = G__16536;
continue;
} else {
var temp__5535__auto___16537 = cljs.core.seq(seq__16522_16528);
if(temp__5535__auto___16537){
var seq__16522_16538__$1 = temp__5535__auto___16537;
if(cljs.core.chunked_seq_QMARK_(seq__16522_16538__$1)){
var c__9207__auto___16539 = cljs.core.chunk_first(seq__16522_16538__$1);
var G__16540 = cljs.core.chunk_rest(seq__16522_16538__$1);
var G__16541 = c__9207__auto___16539;
var G__16542 = cljs.core.count(c__9207__auto___16539);
var G__16543 = (0);
seq__16522_16528 = G__16540;
chunk__16523_16529 = G__16541;
count__16524_16530 = G__16542;
i__16525_16531 = G__16543;
continue;
} else {
var l_16544__$1 = cljs.core.first(seq__16522_16538__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_16544__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__16545 = cljs.core.next(seq__16522_16538__$1);
var G__16546 = null;
var G__16547 = (0);
var G__16548 = (0);
seq__16522_16528 = G__16545;
chunk__16523_16529 = G__16546;
count__16524_16530 = G__16547;
i__16525_16531 = G__16548;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint16549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16549 = (function (writer,max_columns,miser_width,lb,fields,meta16550){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta16550 = meta16550;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_16551,meta16550__$1){
var self__ = this;
var _16551__$1 = this;
return (new cljs.pprint.t_cljs$pprint16549(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta16550__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_16551){
var self__ = this;
var _16551__$1 = this;
return self__.meta16550;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16549.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16549.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16552 = cljs.core._EQ_;
var expr__16553 = cljs.core.type(x);
if(cljs.core.truth_((pred__16552.cljs$core$IFn$_invoke$arity$2 ? pred__16552.cljs$core$IFn$_invoke$arity$2(String,expr__16553) : pred__16552.call(null,String,expr__16553)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__16552.cljs$core$IFn$_invoke$arity$2 ? pred__16552.cljs$core$IFn$_invoke$arity$2(Number,expr__16553) : pred__16552.call(null,Number,expr__16553)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16553)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16549.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16549.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint16549.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16549.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta16550], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16549.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16549.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16549";

cljs.pprint.t_cljs$pprint16549.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__8947__auto__,writer__8948__auto__,opt__8949__auto__){
return cljs.core._write(writer__8948__auto__,"cljs.pprint/t_cljs$pprint16549");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint16549 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint16549(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta16550){
return (new cljs.pprint.t_cljs$pprint16549(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta16550));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint16549(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5535__auto___16556 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___16556)){
var cb_16557 = temp__5535__auto___16556;
var G__16555_16558 = cljs.core.cst$kw$start;
(cb_16557.cljs$core$IFn$_invoke$arity$1 ? cb_16557.cljs$core$IFn$_invoke$arity$1(G__16555_16558) : cb_16557.call(null,G__16555_16558));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5535__auto___16560 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___16560)){
var cb_16561 = temp__5535__auto___16560;
var G__16559_16562 = cljs.core.cst$kw$end;
(cb_16561.cljs$core$IFn$_invoke$arity$1 ? cb_16561.cljs$core$IFn$_invoke$arity$1(G__16559_16562) : cb_16561.call(null,G__16559_16562));
} else {
}
} else {
var oldpos_16563 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_16564 = (oldpos_16563 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_16564);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_16563,newpos_16564));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__16565 = cljs.core._EQ_;
var expr__16566 = relative_to;
if(cljs.core.truth_((function (){var G__16568 = cljs.core.cst$kw$block;
var G__16569 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16568,G__16569) : pred__16565.call(null,G__16568,G__16569));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__16570 = cljs.core.cst$kw$current;
var G__16571 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16570,G__16571) : pred__16565.call(null,G__16570,G__16571));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16566)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__16572_SHARP_){
var temp__5535__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__16572_SHARP_));
if(cljs.core.truth_(temp__5535__auto__)){
var v = temp__5535__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__16572_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__8264__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__8264__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__8264__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__8264__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__8264__auto__)){
var and__8264__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__8264__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__8264__auto____$1;
}
} else {
return and__8264__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__9562__auto__ = [];
var len__9555__auto___16591 = arguments.length;
var i__9556__auto___16592 = (0);
while(true){
if((i__9556__auto___16592 < len__9555__auto___16591)){
args__9562__auto__.push((arguments[i__9556__auto___16592]));

var G__16593 = (i__9556__auto___16592 + (1));
i__9556__auto___16592 = G__16593;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((1) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9563__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_16577 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_16578 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_16579 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_16580 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_16581 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_16582 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_16583 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_16584 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_16585 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_16586 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_16587 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_16588 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__16132__auto___16594 = base_writer;
var new_writer__16133__auto___16595 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16132__auto___16594));
var _STAR_out_STAR_16589_16596 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16133__auto___16595)?cljs.pprint.make_pretty_writer(base_writer__16132__auto___16594,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16132__auto___16594);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16589_16596;
}} else {
var _STAR_out_STAR_16590_16597 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16590_16597;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_16588;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_16587;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_16586;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_16585;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_16584;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_16583;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_16582;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_16581;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_16580;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_16579;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_16578;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_16577;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq16575){
var G__16576 = cljs.core.first(seq16575);
var seq16575__$1 = cljs.core.next(seq16575);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__16576,seq16575__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__16599 = arguments.length;
switch (G__16599) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_16600 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16600;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__16132__auto__ = writer;
var new_writer__16133__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16132__auto__));
var _STAR_out_STAR_16601 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16133__auto__)?cljs.pprint.make_pretty_writer(base_writer__16132__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16132__auto__);

try{var _STAR_print_pretty_STAR_16602_16604 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_16602_16604;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16601;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__8264__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__8264__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__8264__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__9562__auto__ = [];
var len__9555__auto___16608 = arguments.length;
var i__9556__auto___16609 = (0);
while(true){
if((i__9556__auto___16609 < len__9555__auto___16608)){
args__9562__auto__.push((arguments[i__9556__auto___16609]));

var G__16610 = (i__9556__auto___16609 + (1));
i__9556__auto___16609 = G__16610;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((2) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9563__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq16605){
var G__16606 = cljs.core.first(seq16605);
var seq16605__$1 = cljs.core.next(seq16605);
var G__16607 = cljs.core.first(seq16605__$1);
var seq16605__$2 = cljs.core.next(seq16605__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__16606,G__16607,seq16605__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8964__auto__,k__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
return this__8964__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8965__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8966__auto__,k16612,else__8967__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
var G__16616 = k16612;
var G__16616__$1 = (((G__16616 instanceof cljs.core.Keyword))?G__16616.fqn:null);
switch (G__16616__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16612,else__8967__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8978__auto__,writer__8979__auto__,opts__8980__auto__){
var self__ = this;
var this__8978__auto____$1 = this;
var pr_pair__8981__auto__ = ((function (this__8978__auto____$1){
return (function (keyval__8982__auto__){
return cljs.core.pr_sequential_writer(writer__8979__auto__,cljs.core.pr_writer,""," ","",opts__8980__auto__,keyval__8982__auto__);
});})(this__8978__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8979__auto__,pr_pair__8981__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__8980__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16611){
var self__ = this;
var G__16611__$1 = this;
return (new cljs.core.RecordIter((0),G__16611__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8962__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8959__auto__){
var self__ = this;
var this__8959__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8968__auto__){
var self__ = this;
var this__8968__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
var h__8732__auto__ = self__.__hash;
if(!((h__8732__auto__ == null))){
return h__8732__auto__;
} else {
var h__8732__auto____$1 = (function (){var fexpr__16617 = ((function (h__8732__auto__,this__8960__auto____$1){
return (function (coll__8961__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__8961__auto__));
});})(h__8732__auto__,this__8960__auto____$1))
;
return fexpr__16617(this__8960__auto____$1);
})();
self__.__hash = h__8732__auto____$1;

return h__8732__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16613,other16614){
var self__ = this;
var this16613__$1 = this;
return (!((other16614 == null))) && ((this16613__$1.constructor === other16614.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16613__$1.seq,other16614.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16613__$1.rest,other16614.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16613__$1.pos,other16614.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16613__$1.__extmap,other16614.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8973__auto__,k__8974__auto__){
var self__ = this;
var this__8973__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__8974__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8973__auto____$1),self__.__meta),k__8974__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8974__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8971__auto__,k__8972__auto__,G__16611){
var self__ = this;
var this__8971__auto____$1 = this;
var pred__16618 = cljs.core.keyword_identical_QMARK_;
var expr__16619 = k__8972__auto__;
if(cljs.core.truth_((function (){var G__16621 = cljs.core.cst$kw$seq;
var G__16622 = expr__16619;
return (pred__16618.cljs$core$IFn$_invoke$arity$2 ? pred__16618.cljs$core$IFn$_invoke$arity$2(G__16621,G__16622) : pred__16618.call(null,G__16621,G__16622));
})())){
return (new cljs.pprint.arg_navigator(G__16611,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16623 = cljs.core.cst$kw$rest;
var G__16624 = expr__16619;
return (pred__16618.cljs$core$IFn$_invoke$arity$2 ? pred__16618.cljs$core$IFn$_invoke$arity$2(G__16623,G__16624) : pred__16618.call(null,G__16623,G__16624));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__16611,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16625 = cljs.core.cst$kw$pos;
var G__16626 = expr__16619;
return (pred__16618.cljs$core$IFn$_invoke$arity$2 ? pred__16618.cljs$core$IFn$_invoke$arity$2(G__16625,G__16626) : pred__16618.call(null,G__16625,G__16626));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__16611,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8972__auto__,G__16611),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8976__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8963__auto__,G__16611){
var self__ = this;
var this__8963__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__16611,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8969__auto__,entry__8970__auto__){
var self__ = this;
var this__8969__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8970__auto__)){
return this__8969__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8969__auto____$1,entry__8970__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__9002__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__9002__auto__,writer__9003__auto__){
return cljs.core._write(writer__9003__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__16615){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__16615),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__16615),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__16615),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16615,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__16628 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16628,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16628,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__16631 = navigator;
var G__16632 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__16631,G__16632) : cljs.pprint.relative_reposition.call(null,G__16631,G__16632));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8964__auto__,k__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
return this__8964__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8965__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8966__auto__,k16634,else__8967__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
var G__16638 = k16634;
var G__16638__$1 = (((G__16638 instanceof cljs.core.Keyword))?G__16638.fqn:null);
switch (G__16638__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16634,else__8967__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8978__auto__,writer__8979__auto__,opts__8980__auto__){
var self__ = this;
var this__8978__auto____$1 = this;
var pr_pair__8981__auto__ = ((function (this__8978__auto____$1){
return (function (keyval__8982__auto__){
return cljs.core.pr_sequential_writer(writer__8979__auto__,cljs.core.pr_writer,""," ","",opts__8980__auto__,keyval__8982__auto__);
});})(this__8978__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8979__auto__,pr_pair__8981__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__8980__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16633){
var self__ = this;
var G__16633__$1 = this;
return (new cljs.core.RecordIter((0),G__16633__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8962__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8959__auto__){
var self__ = this;
var this__8959__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8968__auto__){
var self__ = this;
var this__8968__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
var h__8732__auto__ = self__.__hash;
if(!((h__8732__auto__ == null))){
return h__8732__auto__;
} else {
var h__8732__auto____$1 = (function (){var fexpr__16639 = ((function (h__8732__auto__,this__8960__auto____$1){
return (function (coll__8961__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__8961__auto__));
});})(h__8732__auto__,this__8960__auto____$1))
;
return fexpr__16639(this__8960__auto____$1);
})();
self__.__hash = h__8732__auto____$1;

return h__8732__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16635,other16636){
var self__ = this;
var this16635__$1 = this;
return (!((other16636 == null))) && ((this16635__$1.constructor === other16636.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16635__$1.func,other16636.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16635__$1.def,other16636.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16635__$1.params,other16636.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16635__$1.offset,other16636.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16635__$1.__extmap,other16636.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8973__auto__,k__8974__auto__){
var self__ = this;
var this__8973__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__8974__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8973__auto____$1),self__.__meta),k__8974__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8974__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8971__auto__,k__8972__auto__,G__16633){
var self__ = this;
var this__8971__auto____$1 = this;
var pred__16640 = cljs.core.keyword_identical_QMARK_;
var expr__16641 = k__8972__auto__;
if(cljs.core.truth_((function (){var G__16643 = cljs.core.cst$kw$func;
var G__16644 = expr__16641;
return (pred__16640.cljs$core$IFn$_invoke$arity$2 ? pred__16640.cljs$core$IFn$_invoke$arity$2(G__16643,G__16644) : pred__16640.call(null,G__16643,G__16644));
})())){
return (new cljs.pprint.compiled_directive(G__16633,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16645 = cljs.core.cst$kw$def;
var G__16646 = expr__16641;
return (pred__16640.cljs$core$IFn$_invoke$arity$2 ? pred__16640.cljs$core$IFn$_invoke$arity$2(G__16645,G__16646) : pred__16640.call(null,G__16645,G__16646));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__16633,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16647 = cljs.core.cst$kw$params;
var G__16648 = expr__16641;
return (pred__16640.cljs$core$IFn$_invoke$arity$2 ? pred__16640.cljs$core$IFn$_invoke$arity$2(G__16647,G__16648) : pred__16640.call(null,G__16647,G__16648));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__16633,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16649 = cljs.core.cst$kw$offset;
var G__16650 = expr__16641;
return (pred__16640.cljs$core$IFn$_invoke$arity$2 ? pred__16640.cljs$core$IFn$_invoke$arity$2(G__16649,G__16650) : pred__16640.call(null,G__16649,G__16650));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__16633,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8972__auto__,G__16633),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8976__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8963__auto__,G__16633){
var self__ = this;
var this__8963__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__16633,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8969__auto__,entry__8970__auto__){
var self__ = this;
var this__8969__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8970__auto__)){
return this__8969__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8970__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8969__auto____$1,entry__8970__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__9002__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__9002__auto__,writer__9003__auto__){
return cljs.core._write(writer__9003__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__16637){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__16637),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__16637),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__16637),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__16637),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16637,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__16652,navigator){
var vec__16653 = p__16652;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16653,(0),null);
var vec__16656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16653,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16656,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16656,(1),null);
var vec__16659 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16659,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16659,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__16662 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16662,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16662,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__8276__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__16665 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(1),null);
var base_output = (function (){var or__8276__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__16668_SHARP_){
if((p1__16668_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__16668_SHARP_,base),cljs.core.quot(p1__16668_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__16669_SHARP_){
if((p1__16669_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__16669_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__16669_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__16671 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_16674 = (arg < (0));
var pos_arg_16675 = ((neg_16674)?(- arg):arg);
var raw_str_16676 = cljs.pprint.opt_base_str(base,pos_arg_16675);
var group_str_16677 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_16674,pos_arg_16675,raw_str_16676,vec__16671,arg,arg_navigator__$1){
return (function (p1__16670_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__16670_SHARP_);
});})(neg_16674,pos_arg_16675,raw_str_16676,vec__16671,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_16676));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_16676);
var signed_str_16678 = ((neg_16674)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_16677)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_16677)].join(''):group_str_16677
));
var padded_str_16679 = (((signed_str_16678.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_16678.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_16678)].join(''):signed_str_16678);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_16679], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__16680 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__16681 = (pos - (1));
var G__16682 = cljs.core.first(remainder);
var G__16683 = cljs.core.next(remainder);
acc = G__16680;
pos = G__16681;
this$ = G__16682;
remainder = G__16683;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__16684 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16684,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16684,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_16687 = (((arg < (0)))?(- arg):arg);
var parts_16688 = cljs.pprint.remainders((1000),abs_arg_16687);
if((cljs.core.count(parts_16688) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_16689 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_16688);
var full_str_16690 = cljs.pprint.add_english_scales(parts_strs_16689,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_16690)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__16691 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_16694 = (((arg < (0)))?(- arg):arg);
var parts_16695 = cljs.pprint.remainders((1000),abs_arg_16694);
if((cljs.core.count(parts_16695) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_16696 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_16695));
var head_str_16697 = cljs.pprint.add_english_scales(parts_strs_16696,(1));
var tail_str_16698 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_16695));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_16697))) && (!(cljs.core.empty_QMARK_(tail_str_16698))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_16697),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_16698)].join(''):((!(cljs.core.empty_QMARK_(head_str_16697)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_16697),"th"].join(''):tail_str_16698
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_16699 = cljs.core.rem(arg,(100));
var not_teens_16700 = (((11) < low_two_digits_16699)) || (((19) > low_two_digits_16699));
var low_digit_16701 = cljs.core.rem(low_two_digits_16699,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_16701 === (1))) && (not_teens_16700))?"st":((((low_digit_16701 === (2))) && (not_teens_16700))?"nd":((((low_digit_16701 === (3))) && (not_teens_16700))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__16702 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16702,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16702,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_16705 = cljs.pprint.remainders((10),arg);
var acc_16706 = cljs.core.PersistentVector.EMPTY;
var pos_16707 = (cljs.core.count(digits_16705) - (1));
var digits_16708__$1 = digits_16705;
while(true){
if(cljs.core.empty_QMARK_(digits_16708__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_16706)], 0));
} else {
var digit_16709 = cljs.core.first(digits_16708__$1);
var G__16710 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_16709))?acc_16706:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_16706,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_16707),(digit_16709 - (1)))));
var G__16711 = (pos_16707 - (1));
var G__16712 = cljs.core.next(digits_16708__$1);
acc_16706 = G__16710;
pos_16707 = G__16711;
digits_16708__$1 = G__16712;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__16713 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16713,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16713,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__16716 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16716,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16716,(1),null);
var pred__16719_16726 = cljs.core._EQ_;
var expr__16720_16727 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__16722 = "o";
var G__16723 = expr__16720_16727;
return (pred__16719_16726.cljs$core$IFn$_invoke$arity$2 ? pred__16719_16726.cljs$core$IFn$_invoke$arity$2(G__16722,G__16723) : pred__16719_16726.call(null,G__16722,G__16723));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__16724 = "u";
var G__16725 = expr__16720_16727;
return (pred__16719_16726.cljs$core$IFn$_invoke$arity$2 ? pred__16719_16726.cljs$core$IFn$_invoke$arity$2(G__16724,G__16725) : pred__16719_16726.call(null,G__16724,G__16725));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__16719_16726.cljs$core$IFn$_invoke$arity$2 ? pred__16719_16726.cljs$core$IFn$_invoke$arity$2(null,expr__16720_16727) : pred__16719_16726.call(null,null,expr__16720_16727)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16720_16727)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__16728 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16728,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16728,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__16731 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16731,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16731,(1),null);
var vec__16734 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16734,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16734,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__16737 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16737,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16737,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__16740 = (i - (1));
i = G__16740;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__8276__auto__ = d;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__8628__auto__ = (2);
var y__8629__auto__ = w;
return ((x__8628__auto__ > y__8629__auto__) ? x__8628__auto__ : y__8629__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__8628__auto__ = (e + (1));
var y__8629__auto__ = (w__$1 - (1));
return ((x__8628__auto__ > y__8629__auto__) ? x__8628__auto__ : y__8629__auto__);
})():(w__$1 + e)
));
var vec__16741 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__16744 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16744,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16744,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__16747 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16747,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16747,(1),null);
var vec__16750 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__16753 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8276__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__16756 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__8264__auto__ = w;
if(cljs.core.truth_(and__8264__auto__)){
var and__8264__auto____$1 = d;
if(cljs.core.truth_(and__8264__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__8264__auto____$1;
}
} else {
return and__8264__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_16759 = cljs.core.count(fixed_repr__$1);
var signed_len_16760 = (cljs.core.truth_(add_sign)?(len_16759 + (1)):len_16759);
var prepend_zero_16761__$1 = (prepend_zero) && (!((signed_len_16760 >= w)));
var append_zero_16762__$1 = (append_zero) && (!((signed_len_16760 >= w)));
var full_len_16763 = (((prepend_zero_16761__$1) || (append_zero_16762__$1))?(signed_len_16760 + (1)):signed_len_16760);
if(cljs.core.truth_((function (){var and__8264__auto__ = (full_len_16763 > w);
if(and__8264__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8264__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_16763),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16761__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16762__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__16764 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16764,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16764,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__16770_16780 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__16771_16781 = G__16770_16780;
var mantissa_16782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16771_16781,(0),null);
var exp_16783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16771_16781,(1),null);
var G__16770_16784__$1 = G__16770_16780;
while(true){
var vec__16774_16785 = G__16770_16784__$1;
var mantissa_16786__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16774_16785,(0),null);
var exp_16787__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16774_16785,(1),null);
var w_16788 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_16789 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_16790 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_16791 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_16792 = (function (){var or__8276__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return "E";
}
})();
var add_sign_16793 = (function (){var or__8276__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_16794 = (k_16791 <= (0));
var scaled_exp_16795 = (exp_16787__$1 - (k_16791 - (1)));
var scaled_exp_str_16796 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_16795))].join('');
var scaled_exp_str_16797__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_16792),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_16795 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_16790)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_16790 - cljs.core.count(scaled_exp_str_16796)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16796)].join('');
var exp_width_16798 = cljs.core.count(scaled_exp_str_16797__$1);
var base_mantissa_width_16799 = cljs.core.count(mantissa_16786__$1);
var scaled_mantissa_16800 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_16791),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_16786__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_16789)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_16789 - (base_mantissa_width_16799 - (1))) - (((k_16791 < (0)))?(- k_16791):(0))),"0")):null))].join('');
var w_mantissa_16801 = (cljs.core.truth_(w_16788)?(w_16788 - exp_width_16798):null);
var vec__16777_16802 = cljs.pprint.round_str(scaled_mantissa_16800,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_16791,(0)))?(d_16789 - (1)):(((k_16791 > (0)))?d_16789:(((k_16791 < (0)))?(d_16789 - (1)):null))),(cljs.core.truth_(w_mantissa_16801)?(w_mantissa_16801 - (cljs.core.truth_(add_sign_16793)?(1):(0))):null));
var rounded_mantissa_16803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777_16802,(0),null);
var __16804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777_16802,(1),null);
var incr_exp_16805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777_16802,(2),null);
var full_mantissa_16806 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_16803,k_16791);
var append_zero_16807 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_16791,cljs.core.count(rounded_mantissa_16803))) && ((d_16789 == null));
if(cljs.core.not(incr_exp_16805)){
if(cljs.core.truth_(w_16788)){
var len_16808 = (cljs.core.count(full_mantissa_16806) + exp_width_16798);
var signed_len_16809 = (cljs.core.truth_(add_sign_16793)?(len_16808 + (1)):len_16808);
var prepend_zero_16810__$1 = (prepend_zero_16794) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_16809,w_16788)));
var full_len_16811 = ((prepend_zero_16810__$1)?(signed_len_16809 + (1)):signed_len_16809);
var append_zero_16812__$1 = (append_zero_16807) && ((full_len_16811 < w_16788));
if(cljs.core.truth_((function (){var and__8264__auto__ = (function (){var or__8276__auto__ = (full_len_16811 > w_16788);
if(or__8276__auto__){
return or__8276__auto__;
} else {
var and__8264__auto__ = e_16790;
if(cljs.core.truth_(and__8264__auto__)){
return ((exp_width_16798 - (2)) > e_16790);
} else {
return and__8264__auto__;
}
}
})();
if(cljs.core.truth_(and__8264__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8264__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_16788,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_16788 - full_len_16811) - ((append_zero_16812__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_16793)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16810__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_16806),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16812__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16797__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_16793)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16794)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_16806),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16807)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16797__$1)].join('')], 0));
}
} else {
var G__16813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_16803,(exp_16787__$1 + (1))], null);
G__16770_16784__$1 = G__16813;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__16814 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16814,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16814,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__16817 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16817,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16817,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__8628__auto__ = cljs.core.count(mantissa);
var y__8629__auto__ = (function (){var x__8635__auto__ = n;
var y__8636__auto__ = (7);
return ((x__8635__auto__ < y__8636__auto__) ? x__8635__auto__ : y__8636__auto__);
})();
return ((x__8628__auto__ > y__8629__auto__) ? x__8628__auto__ : y__8629__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__16820 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16820,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16820,(1),null);
var vec__16823 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16823,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16823,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__8276__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return (arg < (0));
}
})();
var vec__16826 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8264__auto__)){
return add_sign;
} else {
return and__8264__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__8264__auto__){
return add_sign;
} else {
return and__8264__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__16829 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16829,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16829,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__16832 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16832,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16832,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__16835 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16835,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16835,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16838 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16838,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16838,(1),null);
var vec__16841 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16841,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16841,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8276__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8276__auto__){
return or__8276__auto__;
} else {
var and__8264__auto__ = max_count;
if(cljs.core.truth_(and__8264__auto__)){
return (count >= max_count);
} else {
return and__8264__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__16844 = (count + (1));
var G__16845 = iter_result;
var G__16846 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__16844;
args__$1 = G__16845;
last_pos = G__16846;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16847 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(1),null);
var vec__16850 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__8276__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8276__auto__){
return or__8276__auto__;
} else {
var and__8264__auto__ = max_count;
if(cljs.core.truth_(and__8264__auto__)){
return (count >= max_count);
} else {
return and__8264__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__16853 = (count + (1));
var G__16854 = cljs.core.next(arg_list__$1);
count = G__16853;
arg_list__$1 = G__16854;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16855 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16855,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16855,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8276__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8276__auto__){
return or__8276__auto__;
} else {
var and__8264__auto__ = max_count;
if(cljs.core.truth_(and__8264__auto__)){
return (count >= max_count);
} else {
return and__8264__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__16858 = (count + (1));
var G__16859 = iter_result;
var G__16860 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__16858;
navigator__$2 = G__16859;
last_pos = G__16860;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16861 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16861,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16861,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__8276__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8276__auto__){
return or__8276__auto__;
} else {
var and__8264__auto__ = max_count;
if(cljs.core.truth_(and__8264__auto__)){
return (count >= max_count);
} else {
return and__8264__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__16864 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16864,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16864,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__16867 = (count + (1));
var G__16868 = navigator__$3;
count = G__16867;
navigator__$2 = G__16868;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__16869 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_16872 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16872;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__16873 = cljs.core.next(clauses__$1);
var G__16874 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__16875 = iter_result;
clauses__$1 = G__16873;
acc = G__16874;
navigator__$1 = G__16875;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__16876 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var else$ = temp__5535__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__16879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16876,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16879,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16876,(1),null);
var navigator__$1 = (function (){var or__8276__auto__ = new_navigator;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return navigator;
}
})();
var vec__16882 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var p = temp__5535__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16882,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16882,(1),null);
var navigator__$2 = (function (){var or__8276__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__8276__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__8276__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__16885 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16885,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16885,(1),null);
var slots = (function (){var x__8628__auto__ = (1);
var y__8629__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__8628__auto__ > y__8629__auto__) ? x__8628__auto__ : y__8629__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__8628__auto__ = minpad;
var y__8629__auto__ = cljs.core.quot(total_pad,slots);
return ((x__8628__auto__ > y__8629__auto__) ? x__8628__auto__ : y__8629__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__8264__auto__ = eol_str;
if(cljs.core.truth_(and__8264__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__8264__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_16888__$1 = slots;
var extra_pad_16889__$1 = extra_pad;
var strs_16890__$1 = strs;
var pad_only_16891 = (function (){var or__8276__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_16890__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_16890__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_16891))?cljs.core.first(strs_16890__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8276__auto__ = pad_only_16891;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
var or__8276__auto____$1 = cljs.core.next(strs_16890__$1);
if(or__8276__auto____$1){
return or__8276__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_16889__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__16892 = (slots_16888__$1 - (1));
var G__16893 = (extra_pad_16889__$1 - (1));
var G__16894 = (cljs.core.truth_(pad_only_16891)?strs_16890__$1:cljs.core.next(strs_16890__$1));
var G__16895 = false;
slots_16888__$1 = G__16892;
extra_pad_16889__$1 = G__16893;
strs_16890__$1 = G__16894;
pad_only_16891 = G__16895;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint16896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16896 = (function (writer,meta16897){
this.writer = writer;
this.meta16897 = meta16897;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16898,meta16897__$1){
var self__ = this;
var _16898__$1 = this;
return (new cljs.pprint.t_cljs$pprint16896(self__.writer,meta16897__$1));
});

cljs.pprint.t_cljs$pprint16896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16898){
var self__ = this;
var _16898__$1 = this;
return self__.meta16897;
});

cljs.pprint.t_cljs$pprint16896.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint16896.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16899 = cljs.core._EQ_;
var expr__16900 = cljs.core.type(x);
if(cljs.core.truth_((pred__16899.cljs$core$IFn$_invoke$arity$2 ? pred__16899.cljs$core$IFn$_invoke$arity$2(String,expr__16900) : pred__16899.call(null,String,expr__16900)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__16899.cljs$core$IFn$_invoke$arity$2 ? pred__16899.cljs$core$IFn$_invoke$arity$2(Number,expr__16900) : pred__16899.call(null,Number,expr__16900)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16900)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint16896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta16897], null);
});

cljs.pprint.t_cljs$pprint16896.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16896.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16896";

cljs.pprint.t_cljs$pprint16896.cljs$lang$ctorPrWriter = (function (this__8947__auto__,writer__8948__auto__,opt__8949__auto__){
return cljs.core._write(writer__8948__auto__,"cljs.pprint/t_cljs$pprint16896");
});

cljs.pprint.__GT_t_cljs$pprint16896 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint16896(writer__$1,meta16897){
return (new cljs.pprint.t_cljs$pprint16896(writer__$1,meta16897));
});

}

return (new cljs.pprint.t_cljs$pprint16896(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint16902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16902 = (function (writer,meta16903){
this.writer = writer;
this.meta16903 = meta16903;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16904,meta16903__$1){
var self__ = this;
var _16904__$1 = this;
return (new cljs.pprint.t_cljs$pprint16902(self__.writer,meta16903__$1));
});

cljs.pprint.t_cljs$pprint16902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16904){
var self__ = this;
var _16904__$1 = this;
return self__.meta16903;
});

cljs.pprint.t_cljs$pprint16902.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint16902.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16905 = cljs.core._EQ_;
var expr__16906 = cljs.core.type(x);
if(cljs.core.truth_((pred__16905.cljs$core$IFn$_invoke$arity$2 ? pred__16905.cljs$core$IFn$_invoke$arity$2(String,expr__16906) : pred__16905.call(null,String,expr__16906)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__16905.cljs$core$IFn$_invoke$arity$2 ? pred__16905.cljs$core$IFn$_invoke$arity$2(Number,expr__16906) : pred__16905.call(null,Number,expr__16906)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16906)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint16902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta16903], null);
});

cljs.pprint.t_cljs$pprint16902.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16902.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16902";

cljs.pprint.t_cljs$pprint16902.cljs$lang$ctorPrWriter = (function (this__8947__auto__,writer__8948__auto__,opt__8949__auto__){
return cljs.core._write(writer__8948__auto__,"cljs.pprint/t_cljs$pprint16902");
});

cljs.pprint.__GT_t_cljs$pprint16902 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint16902(writer__$1,meta16903){
return (new cljs.pprint.t_cljs$pprint16902(writer__$1,meta16903));
});

}

return (new cljs.pprint.t_cljs$pprint16902(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__8264__auto__ = first_QMARK_;
if(cljs.core.truth_(and__8264__auto__)){
var and__8264__auto____$1 = f;
if(cljs.core.truth_(and__8264__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__8264__auto____$1;
}
} else {
return and__8264__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__8264__auto__ = m;
if(cljs.core.truth_(and__8264__auto__)){
return (m.index + (1));
} else {
return and__8264__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint16908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16908 = (function (writer,last_was_whitespace_QMARK_,meta16909){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta16909 = meta16909;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_16910,meta16909__$1){
var self__ = this;
var _16910__$1 = this;
return (new cljs.pprint.t_cljs$pprint16908(self__.writer,self__.last_was_whitespace_QMARK_,meta16909__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_16910){
var self__ = this;
var _16910__$1 = this;
return self__.meta16909;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16908.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16908.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16911 = cljs.core._EQ_;
var expr__16912 = cljs.core.type(x);
if(cljs.core.truth_((pred__16911.cljs$core$IFn$_invoke$arity$2 ? pred__16911.cljs$core$IFn$_invoke$arity$2(String,expr__16912) : pred__16911.call(null,String,expr__16912)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__16914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__16914);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__16911.cljs$core$IFn$_invoke$arity$2 ? pred__16911.cljs$core$IFn$_invoke$arity$2(Number,expr__16912) : pred__16911.call(null,Number,expr__16912)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16912)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16908.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta16909], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16908.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16908.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16908";

cljs.pprint.t_cljs$pprint16908.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__8947__auto__,writer__8948__auto__,opt__8949__auto__){
return cljs.core._write(writer__8948__auto__,"cljs.pprint/t_cljs$pprint16908");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint16908 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint16908(writer__$1,last_was_whitespace_QMARK___$1,meta16909){
return (new cljs.pprint.t_cljs$pprint16908(writer__$1,last_was_whitespace_QMARK___$1,meta16909));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint16908(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint16915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16915 = (function (writer,capped,meta16916){
this.writer = writer;
this.capped = capped;
this.meta16916 = meta16916;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_16917,meta16916__$1){
var self__ = this;
var _16917__$1 = this;
return (new cljs.pprint.t_cljs$pprint16915(self__.writer,self__.capped,meta16916__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint16915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_16917){
var self__ = this;
var _16917__$1 = this;
return self__.meta16916;
});})(capped))
;

cljs.pprint.t_cljs$pprint16915.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint16915.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16918 = cljs.core._EQ_;
var expr__16919 = cljs.core.type(x);
if(cljs.core.truth_((pred__16918.cljs$core$IFn$_invoke$arity$2 ? pred__16918.cljs$core$IFn$_invoke$arity$2(String,expr__16919) : pred__16918.call(null,String,expr__16919)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__8264__auto__ = m;
if(cljs.core.truth_(and__8264__auto__)){
return m.index;
} else {
return and__8264__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__16918.cljs$core$IFn$_invoke$arity$2 ? pred__16918.cljs$core$IFn$_invoke$arity$2(Number,expr__16919) : pred__16918.call(null,Number,expr__16919)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__8264__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__8264__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16919)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint16915.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta16916], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint16915.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16915.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16915";

cljs.pprint.t_cljs$pprint16915.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__8947__auto__,writer__8948__auto__,opt__8949__auto__){
return cljs.core._write(writer__8948__auto__,"cljs.pprint/t_cljs$pprint16915");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint16915 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint16915(writer__$1,capped__$1,meta16916){
return (new cljs.pprint.t_cljs$pprint16915(writer__$1,capped__$1,meta16916));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint16915(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_16921 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16921;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_16923 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_16924 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_16925 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_16926 = (((current_16925 < colnum_16923))?(colnum_16923 - current_16925):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_16924,(0)))?(0):(colinc_16924 - cljs.core.rem((current_16925 - colnum_16923),colinc_16924))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_16926," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_16927 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_16928 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_16929 = (colrel_16927 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_16930 = (((colinc_16928 > (0)))?cljs.core.rem(start_col_16929,colinc_16928):(0));
var space_count_16931 = (colrel_16927 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_16930))?(0):(colinc_16928 - offset_16930)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_16931," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__16932 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16932,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16932,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16935_16937 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16936_16938 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16936_16938;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16935_16937;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16939_SHARP_,p2__16940_SHARP_,p3__16941_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__16939_SHARP_,p2__16940_SHARP_,p3__16941_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16942_SHARP_,p2__16943_SHARP_,p3__16944_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__16942_SHARP_,p2__16943_SHARP_,p3__16944_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16945_SHARP_,p2__16946_SHARP_,p3__16947_SHARP_){
return cljs.pprint.format_integer((10),p1__16945_SHARP_,p2__16946_SHARP_,p3__16947_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16948_SHARP_,p2__16949_SHARP_,p3__16950_SHARP_){
return cljs.pprint.format_integer((2),p1__16948_SHARP_,p2__16949_SHARP_,p3__16950_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16951_SHARP_,p2__16952_SHARP_,p3__16953_SHARP_){
return cljs.pprint.format_integer((8),p1__16951_SHARP_,p2__16952_SHARP_,p3__16953_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16954_SHARP_,p2__16955_SHARP_,p3__16956_SHARP_){
return cljs.pprint.format_integer((16),p1__16954_SHARP_,p2__16955_SHARP_,p3__16956_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__16957_SHARP_,p2__16958_SHARP_,p3__16959_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__16957_SHARP_),p1__16957_SHARP_,p2__16958_SHARP_,p3__16959_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8264__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8264__auto__;
}
})())){
return (function (p1__16960_SHARP_,p2__16961_SHARP_,p3__16962_SHARP_){
return cljs.pprint.format_old_roman(p1__16960_SHARP_,p2__16961_SHARP_,p3__16962_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__16963_SHARP_,p2__16964_SHARP_,p3__16965_SHARP_){
return cljs.pprint.format_new_roman(p1__16963_SHARP_,p2__16964_SHARP_,p3__16965_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__16966_SHARP_,p2__16967_SHARP_,p3__16968_SHARP_){
return cljs.pprint.format_ordinal_english(p1__16966_SHARP_,p2__16967_SHARP_,p3__16968_SHARP_);
});
} else {
return (function (p1__16969_SHARP_,p2__16970_SHARP_,p3__16971_SHARP_){
return cljs.pprint.format_cardinal_english(p1__16969_SHARP_,p2__16970_SHARP_,p3__16971_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__16981 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16981,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16981,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9321__auto___16999 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17000 = (0);
while(true){
if((i_17000 < n__9321__auto___16999)){
cljs.pprint.prn();

var G__17001 = (i_17000 + (1));
i_17000 = G__17001;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_17002 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_17002 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9321__auto___17003 = (cnt_17002 - (1));
var i_17004 = (0);
while(true){
if((i_17004 < n__9321__auto___17003)){
cljs.pprint.prn();

var G__17005 = (i_17004 + (1));
i_17004 = G__17005;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9321__auto___17006 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17007 = (0);
while(true){
if((i_17007 < n__9321__auto___17006)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__17008 = (i_17007 + (1));
i_17007 = G__17008;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__16972_SHARP_,p2__16973_SHARP_,p3__16974_SHARP_){
return cljs.pprint.relative_tabulation(p1__16972_SHARP_,p2__16973_SHARP_,p3__16974_SHARP_);
});
} else {
return (function (p1__16975_SHARP_,p2__16976_SHARP_,p3__16977_SHARP_){
return cljs.pprint.absolute_tabulation(p1__16975_SHARP_,p2__16976_SHARP_,p3__16977_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__16984 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16984,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16984,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__16987 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16987,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16987,(1),null);
var vec__16990 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16990,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16990,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8264__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8264__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__16978_SHARP_,p2__16979_SHARP_,p3__16980_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__16978_SHARP_,p2__16979_SHARP_,p3__16980_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8264__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8264__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__8264__auto__ = arg1;
if(cljs.core.truth_(and__8264__auto__)){
var and__8264__auto____$1 = arg2;
if(cljs.core.truth_(and__8264__auto____$1)){
return arg3;
} else {
return and__8264__auto____$1;
}
} else {
return and__8264__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__8264__auto__ = arg1;
if(cljs.core.truth_(and__8264__auto__)){
return arg2;
} else {
return and__8264__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__8276__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__16993 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16993,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16993,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__16996 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16996,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16996,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__17009){
var vec__17010 = p__17009;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17010,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17010,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17010,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__17013){
var vec__17014 = p__17013;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17014,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17014,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__17017){
var vec__17018 = p__17017;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17018,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17018,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17018,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8264__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8264__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8264__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8264__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8264__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8264__auto__){
var and__8264__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__8264__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8264__auto____$1;
}
} else {
return and__8264__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__8635__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__8636__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__8635__auto__ < y__8636__auto__) ? x__8635__auto__ : y__8636__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__17021_SHARP_,p2__17022_SHARP_){
var val = cljs.core.first(p1__17021_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__17022_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__17022_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__17021_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__9158__auto__ = (function cljs$pprint$map_params_$_iter__17026(s__17027){
return (new cljs.core.LazySeq(null,(function (){
var s__17027__$1 = s__17027;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17027__$1);
if(temp__5535__auto__){
var s__17027__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17027__$2)){
var c__9156__auto__ = cljs.core.chunk_first(s__17027__$2);
var size__9157__auto__ = cljs.core.count(c__9156__auto__);
var b__17029 = cljs.core.chunk_buffer(size__9157__auto__);
if((function (){var i__17028 = (0);
while(true){
if((i__17028 < size__9157__auto__)){
var vec__17030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9156__auto__,i__17028);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17030,(0),null);
var vec__17033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17030,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17033,(0),null);
cljs.core.chunk_append(b__17029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__17042 = (i__17028 + (1));
i__17028 = G__17042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17029),cljs$pprint$map_params_$_iter__17026(cljs.core.chunk_rest(s__17027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17029),null);
}
} else {
var vec__17036 = cljs.core.first(s__17027__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17036,(0),null);
var vec__17039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17036,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17039,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__17026(cljs.core.rest(s__17027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9158__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17023_SHARP_,p2__17024_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__17023_SHARP_,p2__17024_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17025_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__17025_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__17043 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17043,(0),null);
var vec__17046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17043,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17046,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17046,(1),null);
var vec__17049 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17049,(0),null);
var vec__17052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17049,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17052,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17052,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17052,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__17055 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__17055.cljs$core$IFn$_invoke$arity$2 ? fexpr__17055.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__17055.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__8264__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__8264__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__8264__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__17056 = (function (){var G__17059 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__17060 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__17061 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__17059,G__17060,G__17061) : cljs.pprint.collect_clauses.call(null,G__17059,G__17060,G__17061));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17056,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17056,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__17062){
var vec__17063 = p__17062;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063,(2),null);
var vec__17066 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17066,(0),null);
var vec__17069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17066,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_17072 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_17072){
return (function (p__17073){
var vec__17074 = p__17073;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17074,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17074,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_17072))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_17072;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__8276__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
var or__8276__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__8276__auto____$1)){
return or__8276__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__17077 = cljs.core.next(format__$1);
format__$1 = G__17077;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__17079 = arguments.length;
switch (G__17079) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__8264__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__8264__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__8264__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_17080 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17080;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__17081 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17081,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17081,(1),null);
var vec__17084 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17084,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17084,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__17088 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__17088) : cljs.pprint.reader_macros.call(null,G__17088));
})();
if(cljs.core.truth_((function (){var and__8264__auto__ = macro_char;
if(cljs.core.truth_(and__8264__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__8264__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17089_17092 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17090_17093 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count17091_17094 = (0);
var alis_17095__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17091_17094 < cljs.core._STAR_print_length_STAR_))){
if(alis_17095__$1){
cljs.pprint.write_out(cljs.core.first(alis_17095__$1));

if(cljs.core.next(alis_17095__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17096 = (length_count17091_17094 + (1));
var G__17097 = cljs.core.next(alis_17095__$1);
length_count17091_17094 = G__17096;
alis_17095__$1 = G__17097;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17090_17093;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17089_17092;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17098_17101 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17099_17102 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17100_17103 = (0);
var aseq_17104 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17100_17103 < cljs.core._STAR_print_length_STAR_))){
if(aseq_17104){
cljs.pprint.write_out(cljs.core.first(aseq_17104));

if(cljs.core.next(aseq_17104)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17105 = (length_count17100_17103 + (1));
var G__17106 = cljs.core.next(aseq_17104);
length_count17100_17103 = G__17105;
aseq_17104 = G__17106;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17099_17102;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17098_17101;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__16197__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17107__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17107 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17108__i = 0, G__17108__a = new Array(arguments.length -  0);
while (G__17108__i < G__17108__a.length) {G__17108__a[G__17108__i] = arguments[G__17108__i + 0]; ++G__17108__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17108__a,0,null);
} 
return G__17107__delegate.call(this,args__16199__auto__);};
G__17107.cljs$lang$maxFixedArity = 0;
G__17107.cljs$lang$applyTo = (function (arglist__17109){
var args__16199__auto__ = cljs.core.seq(arglist__17109);
return G__17107__delegate(args__16199__auto__);
});
G__17107.cljs$core$IFn$_invoke$arity$variadic = G__17107__delegate;
return G__17107;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__17110 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__17113 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9841,9841,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__17113.cljs$core$IFn$_invoke$arity$1 ? fexpr__17113.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__17113.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17110,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17110,(1),null);
var amap__$1 = (function (){var or__8276__auto__ = lift_map;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17114_17119 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17115_17120 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count17116_17121 = (0);
var aseq_17122 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17116_17121 < cljs.core._STAR_print_length_STAR_))){
if(aseq_17122){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17117_17123 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17118_17124 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_17122));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_17122)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17118_17124;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17117_17123;
}}


if(cljs.core.next(aseq_17122)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17125 = (length_count17116_17121 + (1));
var G__17126 = cljs.core.next(aseq_17122);
length_count17116_17121 = G__17125;
aseq_17122 = G__17126;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17115_17120;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17114_17119;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__16197__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17127__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17127 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17128__i = 0, G__17128__a = new Array(arguments.length -  0);
while (G__17128__i < G__17128__a.length) {G__17128__a[G__17128__i] = arguments[G__17128__i + 0]; ++G__17128__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17128__a,0,null);
} 
return G__17127__delegate.call(this,args__16199__auto__);};
G__17127.cljs$lang$maxFixedArity = 0;
G__17127.cljs$lang$applyTo = (function (arglist__17129){
var args__16199__auto__ = cljs.core.seq(arglist__17129);
return G__17127__delegate(args__16199__auto__);
});
G__17127.cljs$core$IFn$_invoke$arity$variadic = G__17127__delegate;
return G__17127;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__8276__auto__ = (function (){var temp__5535__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5535__auto__)){
var match = temp__5535__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17130_17134 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17131_17135 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__8264__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__8264__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__8264__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17131_17135;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17130_17134;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__16197__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17136__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17136 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17137__i = 0, G__17137__a = new Array(arguments.length -  0);
while (G__17137__i < G__17137__a.length) {G__17137__a[G__17137__i] = arguments[G__17137__i + 0]; ++G__17137__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17137__a,0,null);
} 
return G__17136__delegate.call(this,args__16199__auto__);};
G__17136.cljs$lang$maxFixedArity = 0;
G__17136.cljs$lang$applyTo = (function (arglist__17138){
var args__16199__auto__ = cljs.core.seq(arglist__17138);
return G__17136__delegate(args__16199__auto__);
});
G__17136.cljs$core$IFn$_invoke$arity$variadic = G__17136__delegate;
return G__17136;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9333__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9334__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9335__auto__,method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__17140 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17140,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17140,(1),null);
var vec__17143 = reference;
var seq__17144 = cljs.core.seq(vec__17143);
var first__17145 = cljs.core.first(seq__17144);
var seq__17144__$1 = cljs.core.next(seq__17144);
var keyw = first__17145;
var args = seq__17144__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17146_17162 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17147_17163 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__17148_17164 = (function (){var format_in__16197__auto__ = "~w~:i";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args){
return (function() { 
var G__17165__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17165 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17166__i = 0, G__17166__a = new Array(arguments.length -  0);
while (G__17166__i < G__17166__a.length) {G__17166__a[G__17166__i] = arguments[G__17166__i + 0]; ++G__17166__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17166__a,0,null);
} 
return G__17165__delegate.call(this,args__16199__auto__);};
G__17165.cljs$lang$maxFixedArity = 0;
G__17165.cljs$lang$applyTo = (function (arglist__17167){
var args__16199__auto__ = cljs.core.seq(arglist__17167);
return G__17165__delegate(args__16199__auto__);
});
G__17165.cljs$core$IFn$_invoke$arity$variadic = G__17165__delegate;
return G__17165;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args))
})();
(fexpr__17148_17164.cljs$core$IFn$_invoke$arity$1 ? fexpr__17148_17164.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__17148_17164.call(null,keyw));

var args_17168__$1 = args;
while(true){
if(cljs.core.seq(args_17168__$1)){
var fexpr__17149_17169 = (function (){var format_in__16197__auto__ = " ";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (args_17168__$1,format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args){
return (function() { 
var G__17170__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17170 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17171__i = 0, G__17171__a = new Array(arguments.length -  0);
while (G__17171__i < G__17171__a.length) {G__17171__a[G__17171__i] = arguments[G__17171__i + 0]; ++G__17171__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17171__a,0,null);
} 
return G__17170__delegate.call(this,args__16199__auto__);};
G__17170.cljs$lang$maxFixedArity = 0;
G__17170.cljs$lang$applyTo = (function (arglist__17172){
var args__16199__auto__ = cljs.core.seq(arglist__17172);
return G__17170__delegate(args__16199__auto__);
});
G__17170.cljs$core$IFn$_invoke$arity$variadic = G__17170__delegate;
return G__17170;
})()
;
;})(args_17168__$1,format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args))
})();
(fexpr__17149_17169.cljs$core$IFn$_invoke$arity$0 ? fexpr__17149_17169.cljs$core$IFn$_invoke$arity$0() : fexpr__17149_17169.call(null));

var arg_17173 = cljs.core.first(args_17168__$1);
if(cljs.core.sequential_QMARK_(arg_17173)){
var vec__17150_17174 = cljs.pprint.brackets(arg_17173);
var start_17175__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17150_17174,(0),null);
var end_17176__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17150_17174,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17153_17177 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17154_17178 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_17175__$1,null,end_17176__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_17173),(3))) && ((cljs.core.second(arg_17173) instanceof cljs.core.Keyword))){
var vec__17155_17179 = arg_17173;
var ns_17180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17155_17179,(0),null);
var kw_17181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17155_17179,(1),null);
var lis_17182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17155_17179,(2),null);
var fexpr__17158_17183 = (function (){var format_in__16197__auto__ = "~w ~w ";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (args_17168__$1,format_in__16197__auto__,cf__16198__auto__,vec__17155_17179,ns_17180,kw_17181,lis_17182,_STAR_current_level_STAR_17153_17177,_STAR_current_length_STAR_17154_17178,vec__17150_17174,start_17175__$1,end_17176__$1,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args){
return (function() { 
var G__17184__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17184 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17185__i = 0, G__17185__a = new Array(arguments.length -  0);
while (G__17185__i < G__17185__a.length) {G__17185__a[G__17185__i] = arguments[G__17185__i + 0]; ++G__17185__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17185__a,0,null);
} 
return G__17184__delegate.call(this,args__16199__auto__);};
G__17184.cljs$lang$maxFixedArity = 0;
G__17184.cljs$lang$applyTo = (function (arglist__17186){
var args__16199__auto__ = cljs.core.seq(arglist__17186);
return G__17184__delegate(args__16199__auto__);
});
G__17184.cljs$core$IFn$_invoke$arity$variadic = G__17184__delegate;
return G__17184;
})()
;
;})(args_17168__$1,format_in__16197__auto__,cf__16198__auto__,vec__17155_17179,ns_17180,kw_17181,lis_17182,_STAR_current_level_STAR_17153_17177,_STAR_current_length_STAR_17154_17178,vec__17150_17174,start_17175__$1,end_17176__$1,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args))
})();
(fexpr__17158_17183.cljs$core$IFn$_invoke$arity$2 ? fexpr__17158_17183.cljs$core$IFn$_invoke$arity$2(ns_17180,kw_17181) : fexpr__17158_17183.call(null,ns_17180,kw_17181));

if(cljs.core.sequential_QMARK_(lis_17182)){
var fexpr__17159_17187 = (function (){var format_in__16197__auto__ = ((cljs.core.vector_QMARK_(lis_17182))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (args_17168__$1,format_in__16197__auto__,cf__16198__auto__,vec__17155_17179,ns_17180,kw_17181,lis_17182,_STAR_current_level_STAR_17153_17177,_STAR_current_length_STAR_17154_17178,vec__17150_17174,start_17175__$1,end_17176__$1,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args){
return (function() { 
var G__17188__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17188 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17189__i = 0, G__17189__a = new Array(arguments.length -  0);
while (G__17189__i < G__17189__a.length) {G__17189__a[G__17189__i] = arguments[G__17189__i + 0]; ++G__17189__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17189__a,0,null);
} 
return G__17188__delegate.call(this,args__16199__auto__);};
G__17188.cljs$lang$maxFixedArity = 0;
G__17188.cljs$lang$applyTo = (function (arglist__17190){
var args__16199__auto__ = cljs.core.seq(arglist__17190);
return G__17188__delegate(args__16199__auto__);
});
G__17188.cljs$core$IFn$_invoke$arity$variadic = G__17188__delegate;
return G__17188;
})()
;
;})(args_17168__$1,format_in__16197__auto__,cf__16198__auto__,vec__17155_17179,ns_17180,kw_17181,lis_17182,_STAR_current_level_STAR_17153_17177,_STAR_current_length_STAR_17154_17178,vec__17150_17174,start_17175__$1,end_17176__$1,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args))
})();
(fexpr__17159_17187.cljs$core$IFn$_invoke$arity$1 ? fexpr__17159_17187.cljs$core$IFn$_invoke$arity$1(lis_17182) : fexpr__17159_17187.call(null,lis_17182));
} else {
cljs.pprint.write_out(lis_17182);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__16197__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (args_17168__$1,format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17153_17177,_STAR_current_length_STAR_17154_17178,vec__17150_17174,start_17175__$1,end_17176__$1,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args){
return (function() { 
var G__17191__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17191 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17192__i = 0, G__17192__a = new Array(arguments.length -  0);
while (G__17192__i < G__17192__a.length) {G__17192__a[G__17192__i] = arguments[G__17192__i + 0]; ++G__17192__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17192__a,0,null);
} 
return G__17191__delegate.call(this,args__16199__auto__);};
G__17191.cljs$lang$maxFixedArity = 0;
G__17191.cljs$lang$applyTo = (function (arglist__17193){
var args__16199__auto__ = cljs.core.seq(arglist__17193);
return G__17191__delegate(args__16199__auto__);
});
G__17191.cljs$core$IFn$_invoke$arity$variadic = G__17191__delegate;
return G__17191;
})()
;
;})(args_17168__$1,format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17153_17177,_STAR_current_length_STAR_17154_17178,vec__17150_17174,start_17175__$1,end_17176__$1,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args))
})(),arg_17173);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17154_17178;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17153_17177;
}}


if(cljs.core.next(args_17168__$1)){
var fexpr__17160_17194 = (function (){var format_in__16197__auto__ = "~_";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (args_17168__$1,format_in__16197__auto__,cf__16198__auto__,vec__17150_17174,start_17175__$1,end_17176__$1,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args){
return (function() { 
var G__17195__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17195 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17196__i = 0, G__17196__a = new Array(arguments.length -  0);
while (G__17196__i < G__17196__a.length) {G__17196__a[G__17196__i] = arguments[G__17196__i + 0]; ++G__17196__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17196__a,0,null);
} 
return G__17195__delegate.call(this,args__16199__auto__);};
G__17195.cljs$lang$maxFixedArity = 0;
G__17195.cljs$lang$applyTo = (function (arglist__17197){
var args__16199__auto__ = cljs.core.seq(arglist__17197);
return G__17195__delegate(args__16199__auto__);
});
G__17195.cljs$core$IFn$_invoke$arity$variadic = G__17195__delegate;
return G__17195;
})()
;
;})(args_17168__$1,format_in__16197__auto__,cf__16198__auto__,vec__17150_17174,start_17175__$1,end_17176__$1,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args))
})();
(fexpr__17160_17194.cljs$core$IFn$_invoke$arity$0 ? fexpr__17160_17194.cljs$core$IFn$_invoke$arity$0() : fexpr__17160_17194.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_17173);

if(cljs.core.next(args_17168__$1)){
var fexpr__17161_17198 = (function (){var format_in__16197__auto__ = "~:_";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (args_17168__$1,format_in__16197__auto__,cf__16198__auto__,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args){
return (function() { 
var G__17199__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17199 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17200__i = 0, G__17200__a = new Array(arguments.length -  0);
while (G__17200__i < G__17200__a.length) {G__17200__a[G__17200__i] = arguments[G__17200__i + 0]; ++G__17200__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17200__a,0,null);
} 
return G__17199__delegate.call(this,args__16199__auto__);};
G__17199.cljs$lang$maxFixedArity = 0;
G__17199.cljs$lang$applyTo = (function (arglist__17201){
var args__16199__auto__ = cljs.core.seq(arglist__17201);
return G__17199__delegate(args__16199__auto__);
});
G__17199.cljs$core$IFn$_invoke$arity$variadic = G__17199__delegate;
return G__17199;
})()
;
;})(args_17168__$1,format_in__16197__auto__,cf__16198__auto__,arg_17173,_STAR_current_level_STAR_17146_17162,_STAR_current_length_STAR_17147_17163,vec__17140,start,end,vec__17143,seq__17144,first__17145,seq__17144__$1,keyw,args))
})();
(fexpr__17161_17198.cljs$core$IFn$_invoke$arity$0 ? fexpr__17161_17198.cljs$core$IFn$_invoke$arity$0() : fexpr__17161_17198.call(null));
} else {
}
}

var G__17202 = cljs.core.next(args_17168__$1);
args_17168__$1 = G__17202;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17147_17163;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17146_17162;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__17203 = alis;
var seq__17204 = cljs.core.seq(vec__17203);
var first__17205 = cljs.core.first(seq__17204);
var seq__17204__$1 = cljs.core.next(seq__17204);
var ns_sym = first__17205;
var first__17205__$1 = cljs.core.first(seq__17204__$1);
var seq__17204__$2 = cljs.core.next(seq__17204__$1);
var ns_name = first__17205__$1;
var stuff = seq__17204__$2;
var vec__17206 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17206,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17206,(1),null);
var vec__17209 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17209,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17209,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17212_17219 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17213_17220 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__17214_17221 = (function (){var format_in__16197__auto__ = "~w ~1I~@_~w";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17212_17219,_STAR_current_length_STAR_17213_17220,vec__17203,seq__17204,first__17205,seq__17204__$1,ns_sym,first__17205__$1,seq__17204__$2,ns_name,stuff,vec__17206,doc_str,stuff__$1,vec__17209,attr_map,references){
return (function() { 
var G__17222__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17222 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17223__i = 0, G__17223__a = new Array(arguments.length -  0);
while (G__17223__i < G__17223__a.length) {G__17223__a[G__17223__i] = arguments[G__17223__i + 0]; ++G__17223__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17223__a,0,null);
} 
return G__17222__delegate.call(this,args__16199__auto__);};
G__17222.cljs$lang$maxFixedArity = 0;
G__17222.cljs$lang$applyTo = (function (arglist__17224){
var args__16199__auto__ = cljs.core.seq(arglist__17224);
return G__17222__delegate(args__16199__auto__);
});
G__17222.cljs$core$IFn$_invoke$arity$variadic = G__17222__delegate;
return G__17222;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17212_17219,_STAR_current_length_STAR_17213_17220,vec__17203,seq__17204,first__17205,seq__17204__$1,ns_sym,first__17205__$1,seq__17204__$2,ns_name,stuff,vec__17206,doc_str,stuff__$1,vec__17209,attr_map,references))
})();
(fexpr__17214_17221.cljs$core$IFn$_invoke$arity$2 ? fexpr__17214_17221.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__17214_17221.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__8276__auto__ = doc_str;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
var or__8276__auto____$1 = attr_map;
if(cljs.core.truth_(or__8276__auto____$1)){
return or__8276__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__17215_17225 = (function (){var format_in__16197__auto__ = "~@:_";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17212_17219,_STAR_current_length_STAR_17213_17220,vec__17203,seq__17204,first__17205,seq__17204__$1,ns_sym,first__17205__$1,seq__17204__$2,ns_name,stuff,vec__17206,doc_str,stuff__$1,vec__17209,attr_map,references){
return (function() { 
var G__17226__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17226 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17227__i = 0, G__17227__a = new Array(arguments.length -  0);
while (G__17227__i < G__17227__a.length) {G__17227__a[G__17227__i] = arguments[G__17227__i + 0]; ++G__17227__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17227__a,0,null);
} 
return G__17226__delegate.call(this,args__16199__auto__);};
G__17226.cljs$lang$maxFixedArity = 0;
G__17226.cljs$lang$applyTo = (function (arglist__17228){
var args__16199__auto__ = cljs.core.seq(arglist__17228);
return G__17226__delegate(args__16199__auto__);
});
G__17226.cljs$core$IFn$_invoke$arity$variadic = G__17226__delegate;
return G__17226;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17212_17219,_STAR_current_length_STAR_17213_17220,vec__17203,seq__17204,first__17205,seq__17204__$1,ns_sym,first__17205__$1,seq__17204__$2,ns_name,stuff,vec__17206,doc_str,stuff__$1,vec__17209,attr_map,references))
})();
(fexpr__17215_17225.cljs$core$IFn$_invoke$arity$0 ? fexpr__17215_17225.cljs$core$IFn$_invoke$arity$0() : fexpr__17215_17225.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__8276__auto__ = attr_map;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__17217_17229 = attr_map;
var G__17218_17230 = cljs.core.seq(references);
var fexpr__17216_17231 = (function (){var format_in__16197__auto__ = "~w~:[~;~:@_~]";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,G__17217_17229,G__17218_17230,_STAR_current_level_STAR_17212_17219,_STAR_current_length_STAR_17213_17220,vec__17203,seq__17204,first__17205,seq__17204__$1,ns_sym,first__17205__$1,seq__17204__$2,ns_name,stuff,vec__17206,doc_str,stuff__$1,vec__17209,attr_map,references){
return (function() { 
var G__17232__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17232 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17233__i = 0, G__17233__a = new Array(arguments.length -  0);
while (G__17233__i < G__17233__a.length) {G__17233__a[G__17233__i] = arguments[G__17233__i + 0]; ++G__17233__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17233__a,0,null);
} 
return G__17232__delegate.call(this,args__16199__auto__);};
G__17232.cljs$lang$maxFixedArity = 0;
G__17232.cljs$lang$applyTo = (function (arglist__17234){
var args__16199__auto__ = cljs.core.seq(arglist__17234);
return G__17232__delegate(args__16199__auto__);
});
G__17232.cljs$core$IFn$_invoke$arity$variadic = G__17232__delegate;
return G__17232;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,G__17217_17229,G__17218_17230,_STAR_current_level_STAR_17212_17219,_STAR_current_length_STAR_17213_17220,vec__17203,seq__17204,first__17205,seq__17204__$1,ns_sym,first__17205__$1,seq__17204__$2,ns_name,stuff,vec__17206,doc_str,stuff__$1,vec__17209,attr_map,references))
})();
(fexpr__17216_17231.cljs$core$IFn$_invoke$arity$2 ? fexpr__17216_17231.cljs$core$IFn$_invoke$arity$2(G__17217_17229,G__17218_17230) : fexpr__17216_17231.call(null,G__17217_17229,G__17218_17230));
} else {
}

var references_17235__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_17235__$1));

var temp__5535__auto___17236 = cljs.core.next(references_17235__$1);
if(temp__5535__auto___17236){
var references_17237__$2 = temp__5535__auto___17236;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17238 = references_17237__$2;
references_17235__$1 = G__17238;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17213_17220;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17212_17219;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__16197__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17239__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17239 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17240__i = 0, G__17240__a = new Array(arguments.length -  0);
while (G__17240__i < G__17240__a.length) {G__17240__a[G__17240__i] = arguments[G__17240__i + 0]; ++G__17240__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17240__a,0,null);
} 
return G__17239__delegate.call(this,args__16199__auto__);};
G__17239.cljs$lang$maxFixedArity = 0;
G__17239.cljs$lang$applyTo = (function (arglist__17241){
var args__16199__auto__ = cljs.core.seq(arglist__17241);
return G__17239__delegate(args__16199__auto__);
});
G__17239.cljs$core$IFn$_invoke$arity$variadic = G__17239__delegate;
return G__17239;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__17242_17245 = (function (){var format_in__16197__auto__ = " ~_";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17246__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17246 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17247__i = 0, G__17247__a = new Array(arguments.length -  0);
while (G__17247__i < G__17247__a.length) {G__17247__a[G__17247__i] = arguments[G__17247__i + 0]; ++G__17247__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17247__a,0,null);
} 
return G__17246__delegate.call(this,args__16199__auto__);};
G__17246.cljs$lang$maxFixedArity = 0;
G__17246.cljs$lang$applyTo = (function (arglist__17248){
var args__16199__auto__ = cljs.core.seq(arglist__17248);
return G__17246__delegate(args__16199__auto__);
});
G__17246.cljs$core$IFn$_invoke$arity$variadic = G__17246__delegate;
return G__17246;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
(fexpr__17242_17245.cljs$core$IFn$_invoke$arity$0 ? fexpr__17242_17245.cljs$core$IFn$_invoke$arity$0() : fexpr__17242_17245.call(null));
} else {
var fexpr__17243_17249 = (function (){var format_in__16197__auto__ = " ~@_";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17250__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17250 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17251__i = 0, G__17251__a = new Array(arguments.length -  0);
while (G__17251__i < G__17251__a.length) {G__17251__a[G__17251__i] = arguments[G__17251__i + 0]; ++G__17251__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17251__a,0,null);
} 
return G__17250__delegate.call(this,args__16199__auto__);};
G__17250.cljs$lang$maxFixedArity = 0;
G__17250.cljs$lang$applyTo = (function (arglist__17252){
var args__16199__auto__ = cljs.core.seq(arglist__17252);
return G__17250__delegate(args__16199__auto__);
});
G__17250.cljs$core$IFn$_invoke$arity$variadic = G__17250__delegate;
return G__17250;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
(fexpr__17243_17249.cljs$core$IFn$_invoke$arity$0 ? fexpr__17243_17249.cljs$core$IFn$_invoke$arity$0() : fexpr__17243_17249.call(null));
}

var fexpr__17244 = (function (){var format_in__16197__auto__ = "~{~w~^ ~_~}";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17253__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17253 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17254__i = 0, G__17254__a = new Array(arguments.length -  0);
while (G__17254__i < G__17254__a.length) {G__17254__a[G__17254__i] = arguments[G__17254__i + 0]; ++G__17254__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17254__a,0,null);
} 
return G__17253__delegate.call(this,args__16199__auto__);};
G__17253.cljs$lang$maxFixedArity = 0;
G__17253.cljs$lang$applyTo = (function (arglist__17255){
var args__16199__auto__ = cljs.core.seq(arglist__17255);
return G__17253__delegate(args__16199__auto__);
});
G__17253.cljs$core$IFn$_invoke$arity$variadic = G__17253__delegate;
return G__17253;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
return (fexpr__17244.cljs$core$IFn$_invoke$arity$1 ? fexpr__17244.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__17244.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__17256 = (function (){var format_in__16197__auto__ = " ~_~{~w~^ ~_~}";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17257__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17257 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17258__i = 0, G__17258__a = new Array(arguments.length -  0);
while (G__17258__i < G__17258__a.length) {G__17258__a[G__17258__i] = arguments[G__17258__i + 0]; ++G__17258__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17258__a,0,null);
} 
return G__17257__delegate.call(this,args__16199__auto__);};
G__17257.cljs$lang$maxFixedArity = 0;
G__17257.cljs$lang$applyTo = (function (arglist__17259){
var args__16199__auto__ = cljs.core.seq(arglist__17259);
return G__17257__delegate(args__16199__auto__);
});
G__17257.cljs$core$IFn$_invoke$arity$variadic = G__17257__delegate;
return G__17257;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
return (fexpr__17256.cljs$core$IFn$_invoke$arity$1 ? fexpr__17256.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__17256.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__17260 = alis;
var seq__17261 = cljs.core.seq(vec__17260);
var first__17262 = cljs.core.first(seq__17261);
var seq__17261__$1 = cljs.core.next(seq__17261);
var defn_sym = first__17262;
var first__17262__$1 = cljs.core.first(seq__17261__$1);
var seq__17261__$2 = cljs.core.next(seq__17261__$1);
var defn_name = first__17262__$1;
var stuff = seq__17261__$2;
var vec__17263 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17263,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17263,(1),null);
var vec__17266 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17266,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17266,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17269_17274 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17270_17275 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__17271_17276 = (function (){var format_in__16197__auto__ = "~w ~1I~@_~w";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17269_17274,_STAR_current_length_STAR_17270_17275,vec__17260,seq__17261,first__17262,seq__17261__$1,defn_sym,first__17262__$1,seq__17261__$2,defn_name,stuff,vec__17263,doc_str,stuff__$1,vec__17266,attr_map,stuff__$2){
return (function() { 
var G__17277__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17277 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17278__i = 0, G__17278__a = new Array(arguments.length -  0);
while (G__17278__i < G__17278__a.length) {G__17278__a[G__17278__i] = arguments[G__17278__i + 0]; ++G__17278__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17278__a,0,null);
} 
return G__17277__delegate.call(this,args__16199__auto__);};
G__17277.cljs$lang$maxFixedArity = 0;
G__17277.cljs$lang$applyTo = (function (arglist__17279){
var args__16199__auto__ = cljs.core.seq(arglist__17279);
return G__17277__delegate(args__16199__auto__);
});
G__17277.cljs$core$IFn$_invoke$arity$variadic = G__17277__delegate;
return G__17277;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17269_17274,_STAR_current_length_STAR_17270_17275,vec__17260,seq__17261,first__17262,seq__17261__$1,defn_sym,first__17262__$1,seq__17261__$2,defn_name,stuff,vec__17263,doc_str,stuff__$1,vec__17266,attr_map,stuff__$2))
})();
(fexpr__17271_17276.cljs$core$IFn$_invoke$arity$2 ? fexpr__17271_17276.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__17271_17276.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__17272_17280 = (function (){var format_in__16197__auto__ = " ~_~w";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17269_17274,_STAR_current_length_STAR_17270_17275,vec__17260,seq__17261,first__17262,seq__17261__$1,defn_sym,first__17262__$1,seq__17261__$2,defn_name,stuff,vec__17263,doc_str,stuff__$1,vec__17266,attr_map,stuff__$2){
return (function() { 
var G__17281__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17281 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17282__i = 0, G__17282__a = new Array(arguments.length -  0);
while (G__17282__i < G__17282__a.length) {G__17282__a[G__17282__i] = arguments[G__17282__i + 0]; ++G__17282__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17282__a,0,null);
} 
return G__17281__delegate.call(this,args__16199__auto__);};
G__17281.cljs$lang$maxFixedArity = 0;
G__17281.cljs$lang$applyTo = (function (arglist__17283){
var args__16199__auto__ = cljs.core.seq(arglist__17283);
return G__17281__delegate(args__16199__auto__);
});
G__17281.cljs$core$IFn$_invoke$arity$variadic = G__17281__delegate;
return G__17281;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17269_17274,_STAR_current_length_STAR_17270_17275,vec__17260,seq__17261,first__17262,seq__17261__$1,defn_sym,first__17262__$1,seq__17261__$2,defn_name,stuff,vec__17263,doc_str,stuff__$1,vec__17266,attr_map,stuff__$2))
})();
(fexpr__17272_17280.cljs$core$IFn$_invoke$arity$1 ? fexpr__17272_17280.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__17272_17280.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__17273_17284 = (function (){var format_in__16197__auto__ = " ~_~w";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17269_17274,_STAR_current_length_STAR_17270_17275,vec__17260,seq__17261,first__17262,seq__17261__$1,defn_sym,first__17262__$1,seq__17261__$2,defn_name,stuff,vec__17263,doc_str,stuff__$1,vec__17266,attr_map,stuff__$2){
return (function() { 
var G__17285__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17285 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17286__i = 0, G__17286__a = new Array(arguments.length -  0);
while (G__17286__i < G__17286__a.length) {G__17286__a[G__17286__i] = arguments[G__17286__i + 0]; ++G__17286__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17286__a,0,null);
} 
return G__17285__delegate.call(this,args__16199__auto__);};
G__17285.cljs$lang$maxFixedArity = 0;
G__17285.cljs$lang$applyTo = (function (arglist__17287){
var args__16199__auto__ = cljs.core.seq(arglist__17287);
return G__17285__delegate(args__16199__auto__);
});
G__17285.cljs$core$IFn$_invoke$arity$variadic = G__17285__delegate;
return G__17285;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17269_17274,_STAR_current_length_STAR_17270_17275,vec__17260,seq__17261,first__17262,seq__17261__$1,defn_sym,first__17262__$1,seq__17261__$2,defn_name,stuff,vec__17263,doc_str,stuff__$1,vec__17266,attr_map,stuff__$2))
})();
(fexpr__17273_17284.cljs$core$IFn$_invoke$arity$1 ? fexpr__17273_17284.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__17273_17284.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__8276__auto__ = doc_str;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__8276__auto__ = doc_str;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17270_17275;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17269_17274;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17288_17293 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17289_17294 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17290_17295 = (0);
var binding_17296 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17290_17295 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_17296)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17291_17297 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17292_17298 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_17296));

if(cljs.core.next(binding_17296)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_17296));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17292_17298;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17291_17297;
}}


if(cljs.core.next(cljs.core.rest(binding_17296))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17299 = (length_count17290_17295 + (1));
var G__17300 = cljs.core.next(cljs.core.rest(binding_17296));
length_count17290_17295 = G__17299;
binding_17296 = G__17300;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17289_17294;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17288_17293;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17301_17306 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17302_17307 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__17303_17308 = (function (){var format_in__16197__auto__ = "~w ~1I~@_";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17301_17306,_STAR_current_length_STAR_17302_17307,base_sym){
return (function() { 
var G__17309__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17309 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17310__i = 0, G__17310__a = new Array(arguments.length -  0);
while (G__17310__i < G__17310__a.length) {G__17310__a[G__17310__i] = arguments[G__17310__i + 0]; ++G__17310__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17310__a,0,null);
} 
return G__17309__delegate.call(this,args__16199__auto__);};
G__17309.cljs$lang$maxFixedArity = 0;
G__17309.cljs$lang$applyTo = (function (arglist__17311){
var args__16199__auto__ = cljs.core.seq(arglist__17311);
return G__17309__delegate(args__16199__auto__);
});
G__17309.cljs$core$IFn$_invoke$arity$variadic = G__17309__delegate;
return G__17309;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17301_17306,_STAR_current_length_STAR_17302_17307,base_sym))
})();
(fexpr__17303_17308.cljs$core$IFn$_invoke$arity$1 ? fexpr__17303_17308.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__17303_17308.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__17305_17312 = cljs.core.next(cljs.core.rest(alis));
var fexpr__17304_17313 = (function (){var format_in__16197__auto__ = " ~_~{~w~^ ~_~}";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,G__17305_17312,_STAR_current_level_STAR_17301_17306,_STAR_current_length_STAR_17302_17307,base_sym){
return (function() { 
var G__17314__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17314 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17315__i = 0, G__17315__a = new Array(arguments.length -  0);
while (G__17315__i < G__17315__a.length) {G__17315__a[G__17315__i] = arguments[G__17315__i + 0]; ++G__17315__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17315__a,0,null);
} 
return G__17314__delegate.call(this,args__16199__auto__);};
G__17314.cljs$lang$maxFixedArity = 0;
G__17314.cljs$lang$applyTo = (function (arglist__17316){
var args__16199__auto__ = cljs.core.seq(arglist__17316);
return G__17314__delegate(args__16199__auto__);
});
G__17314.cljs$core$IFn$_invoke$arity$variadic = G__17314__delegate;
return G__17314;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,G__17305_17312,_STAR_current_level_STAR_17301_17306,_STAR_current_length_STAR_17302_17307,base_sym))
})();
(fexpr__17304_17313.cljs$core$IFn$_invoke$arity$1 ? fexpr__17304_17313.cljs$core$IFn$_invoke$arity$1(G__17305_17312) : fexpr__17304_17313.call(null,G__17305_17312));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17302_17307;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17301_17306;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__16197__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__){
return (function() { 
var G__17317__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17317 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17318__i = 0, G__17318__a = new Array(arguments.length -  0);
while (G__17318__i < G__17318__a.length) {G__17318__a[G__17318__i] = arguments[G__17318__i + 0]; ++G__17318__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17318__a,0,null);
} 
return G__17317__delegate.call(this,args__16199__auto__);};
G__17317.cljs$lang$maxFixedArity = 0;
G__17317.cljs$lang$applyTo = (function (arglist__17319){
var args__16199__auto__ = cljs.core.seq(arglist__17319);
return G__17317__delegate(args__16199__auto__);
});
G__17317.cljs$core$IFn$_invoke$arity$variadic = G__17317__delegate;
return G__17317;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17320_17325 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17321_17326 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count17322_17327 = (0);
var alis_17328__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17322_17327 < cljs.core._STAR_print_length_STAR_))){
if(alis_17328__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17323_17329 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17324_17330 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_17328__$1));

if(cljs.core.next(alis_17328__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_17328__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17324_17330;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17323_17329;
}}


if(cljs.core.next(cljs.core.rest(alis_17328__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17331 = (length_count17322_17327 + (1));
var G__17332 = cljs.core.next(cljs.core.rest(alis_17328__$1));
length_count17322_17327 = G__17331;
alis_17328__$1 = G__17332;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17321_17326;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17320_17325;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17333_17338 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17334_17339 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__16197__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17333_17338,_STAR_current_length_STAR_17334_17339){
return (function() { 
var G__17340__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17340 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17341__i = 0, G__17341__a = new Array(arguments.length -  0);
while (G__17341__i < G__17341__a.length) {G__17341__a[G__17341__i] = arguments[G__17341__i + 0]; ++G__17341__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17341__a,0,null);
} 
return G__17340__delegate.call(this,args__16199__auto__);};
G__17340.cljs$lang$maxFixedArity = 0;
G__17340.cljs$lang$applyTo = (function (arglist__17342){
var args__16199__auto__ = cljs.core.seq(arglist__17342);
return G__17340__delegate(args__16199__auto__);
});
G__17340.cljs$core$IFn$_invoke$arity$variadic = G__17340__delegate;
return G__17340;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_current_level_STAR_17333_17338,_STAR_current_length_STAR_17334_17339))
})(),alis);

var length_count17335_17343 = (0);
var alis_17344__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17335_17343 < cljs.core._STAR_print_length_STAR_))){
if(alis_17344__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17336_17345 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17337_17346 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_17344__$1));

if(cljs.core.next(alis_17344__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_17344__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17337_17346;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17336_17345;
}}


if(cljs.core.next(cljs.core.rest(alis_17344__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17347 = (length_count17335_17343 + (1));
var G__17348 = cljs.core.next(cljs.core.rest(alis_17344__$1));
length_count17335_17343 = G__17347;
alis_17344__$1 = G__17348;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17334_17339;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17333_17338;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_17351 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_17351,args,nlis){
return (function (p1__17349_SHARP_,p2__17350_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__17349_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17350_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_17351,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__17352 = (function (){var format_in__16197__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__16198__auto__ = ((typeof format_in__16197__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16197__auto__) : cljs.pprint.cached_compile.call(null,format_in__16197__auto__)):format_in__16197__auto__);
return ((function (format_in__16197__auto__,cf__16198__auto__,_STAR_symbol_map_STAR_17351,args,nlis){
return (function() { 
var G__17353__delegate = function (args__16199__auto__){
var navigator__16200__auto__ = cljs.pprint.init_navigator(args__16199__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16198__auto__,navigator__16200__auto__);
};
var G__17353 = function (var_args){
var args__16199__auto__ = null;
if (arguments.length > 0) {
var G__17354__i = 0, G__17354__a = new Array(arguments.length -  0);
while (G__17354__i < G__17354__a.length) {G__17354__a[G__17354__i] = arguments[G__17354__i + 0]; ++G__17354__i;}
  args__16199__auto__ = new cljs.core.IndexedSeq(G__17354__a,0,null);
} 
return G__17353__delegate.call(this,args__16199__auto__);};
G__17353.cljs$lang$maxFixedArity = 0;
G__17353.cljs$lang$applyTo = (function (arglist__17355){
var args__16199__auto__ = cljs.core.seq(arglist__17355);
return G__17353__delegate(args__16199__auto__);
});
G__17353.cljs$core$IFn$_invoke$arity$variadic = G__17353__delegate;
return G__17353;
})()
;
;})(format_in__16197__auto__,cf__16198__auto__,_STAR_symbol_map_STAR_17351,args,nlis))
})();
return (fexpr__17352.cljs$core$IFn$_invoke$arity$1 ? fexpr__17352.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__17352.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_17351;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17356_17359 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17357_17360 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count17358_17361 = (0);
var alis_17362__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17358_17361 < cljs.core._STAR_print_length_STAR_))){
if(alis_17362__$1){
cljs.pprint.write_out(cljs.core.first(alis_17362__$1));

if(cljs.core.next(alis_17362__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17363 = (length_count17358_17361 + (1));
var G__17364 = cljs.core.next(alis_17362__$1);
length_count17358_17361 = G__17363;
alis_17362__$1 = G__17364;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17357_17360;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17356_17359;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9158__auto__ = (function cljs$pprint$two_forms_$_iter__17365(s__17366){
return (new cljs.core.LazySeq(null,(function (){
var s__17366__$1 = s__17366;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17366__$1);
if(temp__5535__auto__){
var s__17366__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17366__$2)){
var c__9156__auto__ = cljs.core.chunk_first(s__17366__$2);
var size__9157__auto__ = cljs.core.count(c__9156__auto__);
var b__17368 = cljs.core.chunk_buffer(size__9157__auto__);
if((function (){var i__17367 = (0);
while(true){
if((i__17367 < size__9157__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9156__auto__,i__17367);
cljs.core.chunk_append(b__17368,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__17369 = (i__17367 + (1));
i__17367 = G__17369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17368),cljs$pprint$two_forms_$_iter__17365(cljs.core.chunk_rest(s__17366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17368),null);
}
} else {
var x = cljs.core.first(s__17366__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__17365(cljs.core.rest(s__17366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9158__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__17370_SHARP_){
var vec__17371 = p1__17370_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17371,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17371,(1),null);
if(cljs.core.not((function (){var or__8276__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__17370_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5533__auto__ = (function (){var G__17374 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__17374) : cljs.pprint._STAR_code_table_STAR_.call(null,G__17374));
})();
if(cljs.core.truth_(temp__5533__auto__)){
var special_form = temp__5533__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5533__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5533__auto__)){
var arg_num = temp__5533__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9333__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9334__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9335__auto__,method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__8628__auto__ = (0);
var y__8629__auto__ = (width - cljs.core.count(s));
return ((x__8628__auto__ > y__8629__auto__) ? x__8628__auto__ : y__8629__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__17379 = arguments.length;
switch (G__17379) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_17380 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_17380){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_17380){
return (function (p1__17375_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__17375_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_17380))
,rows));
});})(_STAR_print_newline_STAR_17380))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_17380){
return (function (p1__17376_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__17376_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_17380))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_17380){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__9158__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_17380){
return (function cljs$pprint$iter__17381(s__17382){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_17380){
return (function (){
var s__17382__$1 = s__17382;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17382__$1);
if(temp__5535__auto__){
var s__17382__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17382__$2)){
var c__9156__auto__ = cljs.core.chunk_first(s__17382__$2);
var size__9157__auto__ = cljs.core.count(c__9156__auto__);
var b__17384 = cljs.core.chunk_buffer(size__9157__auto__);
if((function (){var i__17383 = (0);
while(true){
if((i__17383 < size__9157__auto__)){
var vec__17385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9156__auto__,i__17383);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17385,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17385,(1),null);
cljs.core.chunk_append(b__17384,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__17396 = (i__17383 + (1));
i__17383 = G__17396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17384),cljs$pprint$iter__17381(cljs.core.chunk_rest(s__17382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17384),null);
}
} else {
var vec__17388 = cljs.core.first(s__17382__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17388,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17388,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__17381(cljs.core.rest(s__17382__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_17380))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_17380))
;
return iter__9158__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__9158__auto__,widths,spacers,_STAR_print_newline_STAR_17380){
return (function (p1__17377_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__17377_SHARP_);
});})(iter__9158__auto__,widths,spacers,_STAR_print_newline_STAR_17380))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_17380))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__17391 = cljs.core.seq(rows);
var chunk__17392 = null;
var count__17393 = (0);
var i__17394 = (0);
while(true){
if((i__17394 < count__17393)){
var row = chunk__17392.cljs$core$IIndexed$_nth$arity$2(null,i__17394);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__17397 = seq__17391;
var G__17398 = chunk__17392;
var G__17399 = count__17393;
var G__17400 = (i__17394 + (1));
seq__17391 = G__17397;
chunk__17392 = G__17398;
count__17393 = G__17399;
i__17394 = G__17400;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__17391);
if(temp__5535__auto__){
var seq__17391__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17391__$1)){
var c__9207__auto__ = cljs.core.chunk_first(seq__17391__$1);
var G__17401 = cljs.core.chunk_rest(seq__17391__$1);
var G__17402 = c__9207__auto__;
var G__17403 = cljs.core.count(c__9207__auto__);
var G__17404 = (0);
seq__17391 = G__17401;
chunk__17392 = G__17402;
count__17393 = G__17403;
i__17394 = G__17404;
continue;
} else {
var row = cljs.core.first(seq__17391__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__17405 = cljs.core.next(seq__17391__$1);
var G__17406 = null;
var G__17407 = (0);
var G__17408 = (0);
seq__17391 = G__17405;
chunk__17392 = G__17406;
count__17393 = G__17407;
i__17394 = G__17408;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17380;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

