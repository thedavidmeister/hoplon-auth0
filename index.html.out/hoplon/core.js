// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');
cljs.core.enable_console_print_BANG_();






hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8276__auto__ = (function (){var and__8264__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8264__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8264__auto__;
}
})();
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
var G__18624 = (i + (1));
var G__18625 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__18624;
ret = G__18625;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__18627 = arguments.length;
switch (G__18627) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var G__18631 = tree;
var vec__18632 = G__18631;
var seq__18633 = cljs.core.seq(vec__18632);
var first__18634 = cljs.core.first(seq__18633);
var seq__18633__$1 = cljs.core.next(seq__18633);
var x = first__18634;
var rst = seq__18633__$1;
var G__18631__$1 = G__18631;
while(true){
var vec__18635 = G__18631__$1;
var seq__18636 = cljs.core.seq(vec__18635);
var first__18637 = cljs.core.first(seq__18636);
var seq__18636__$1 = cljs.core.next(seq__18636);
var x__$1 = first__18637;
var rst__$1 = seq__18636__$1;
if(cljs.core.sequential_QMARK_(x__$1)){
if(cljs.core.seq(x__$1)){
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x__$1,ret);
} else {
}
} else {
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x__$1);
}

if(cljs.core.not(rst__$1)){
return ret;
} else {
var G__18639 = rst__$1;
G__18631__$1 = G__18639;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.remove_nil = (function hoplon$core$remove_nil(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18641_SHARP_,p2__18640_SHARP_){
if(cljs.core.truth_(p2__18640_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__18641_SHARP_,p2__18640_SHARP_);
} else {
return p1__18641_SHARP_;
}
}),cljs.core.PersistentVector.EMPTY,nodes);
});
/**
 * Flattens nested sequencences of elements, removing nil values.
 */
hoplon.core.compact_kids = (function hoplon$core$compact_kids(kids){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,hoplon.core.remove_nil(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids)));
});
/**
 * Sets a DOM element's children to the sequence of children given.
 */
hoplon.core.set_dom_children_BANG_ = (function hoplon$core$set_dom_children_BANG_(elem,new_kids){
var new_kids__$1 = hoplon.core.compact_kids(new_kids);
var new_QMARK_ = cljs.core.set(new_kids__$1);
var G__18648 = new_kids__$1;
var vec__18650 = G__18648;
var seq__18651 = cljs.core.seq(vec__18650);
var first__18652 = cljs.core.first(seq__18651);
var seq__18651__$1 = cljs.core.next(seq__18651);
var new_kid = first__18652;
var nks = seq__18651__$1;
var G__18649 = hoplon.core.child_vec(elem);
var vec__18653 = G__18649;
var seq__18654 = cljs.core.seq(vec__18653);
var first__18655 = cljs.core.first(seq__18654);
var seq__18654__$1 = cljs.core.next(seq__18654);
var old_kid = first__18655;
var oks = seq__18654__$1;
var old_kids = vec__18653;
var G__18648__$1 = G__18648;
var G__18649__$1 = G__18649;
while(true){
var vec__18656 = G__18648__$1;
var seq__18657 = cljs.core.seq(vec__18656);
var first__18658 = cljs.core.first(seq__18657);
var seq__18657__$1 = cljs.core.next(seq__18657);
var new_kid__$1 = first__18658;
var nks__$1 = seq__18657__$1;
var vec__18659 = G__18649__$1;
var seq__18660 = cljs.core.seq(vec__18659);
var first__18661 = cljs.core.first(seq__18660);
var seq__18660__$1 = cljs.core.next(seq__18660);
var old_kid__$1 = first__18661;
var oks__$1 = seq__18660__$1;
var old_kids__$1 = vec__18659;
if(cljs.core.truth_((function (){var or__8276__auto__ = new_kid__$1;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return old_kid__$1;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_kid__$1,old_kid__$1)){
var G__18662 = nks__$1;
var G__18663 = oks__$1;
G__18648__$1 = G__18662;
G__18649__$1 = G__18663;
continue;
} else {
if(cljs.core.not(old_kid__$1)){
elem.appendChild(new_kid__$1);

var G__18664 = nks__$1;
var G__18665 = oks__$1;
G__18648__$1 = G__18664;
G__18649__$1 = G__18665;
continue;
} else {
if(cljs.core.not(new_kid__$1)){
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(old_kid__$1) : new_QMARK_.call(null,old_kid__$1)))){
} else {
elem.removeChild(old_kid__$1);
}

var G__18666 = nks__$1;
var G__18667 = oks__$1;
G__18648__$1 = G__18666;
G__18649__$1 = G__18667;
continue;
} else {
elem.insertBefore(new_kid__$1,old_kid__$1);

var G__18668 = nks__$1;
var G__18669 = old_kids__$1;
G__18648__$1 = G__18668;
G__18649__$1 = G__18669;
continue;

}
}
}
} else {
return null;
}
break;
}
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._elem_BANG_ = (function hoplon$core$_elem_BANG_(elem,this$,value){
return (hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.elem_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__18671 = arguments.length;
switch (G__18671) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__18672_18675 = init;
var G__18673_18676 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18672_18675,G__18673_18676) : f.call(null,G__18672_18675,G__18673_18676));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Class normalization for attribute providers. Converts from strings and
 *   sequences to hashmaps.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__18677_SHARP_){
return cljs.core.zipmap(p1__18677_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__18679 = arguments.length;
switch (G__18679) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

/**
 * Executes a function once an element has been attached to the DOM.
 */
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__18681 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18682 = (0);
return setTimeout(G__18681,G__18682);
} else {
var temp__5533__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5533__auto__)){
var v = temp__5533__auto__;
return v.push(f);
} else {
var G__18683_18701 = this$;
var G__18684_18702 = "_hoplonWhenDom";
var G__18685_18703 = [f];
goog.object.set(G__18683_18701,G__18684_18702,G__18685_18703);

var G__18686 = ((function (temp__5533__auto__){
return (function (){
var fexpr__18694 = ((function (temp__5533__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__18695 = ((function (temp__5533__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5533__auto__))
;
var G__18696 = (20);
return setTimeout(G__18695,G__18696);
} else {
var seq__18697_18704 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__18698_18705 = null;
var count__18699_18706 = (0);
var i__18700_18707 = (0);
while(true){
if((i__18700_18707 < count__18699_18706)){
var f_18708__$1 = chunk__18698_18705.cljs$core$IIndexed$_nth$arity$2(null,i__18700_18707);
(f_18708__$1.cljs$core$IFn$_invoke$arity$0 ? f_18708__$1.cljs$core$IFn$_invoke$arity$0() : f_18708__$1.call(null));

var G__18709 = seq__18697_18704;
var G__18710 = chunk__18698_18705;
var G__18711 = count__18699_18706;
var G__18712 = (i__18700_18707 + (1));
seq__18697_18704 = G__18709;
chunk__18698_18705 = G__18710;
count__18699_18706 = G__18711;
i__18700_18707 = G__18712;
continue;
} else {
var temp__5535__auto___18713 = cljs.core.seq(seq__18697_18704);
if(temp__5535__auto___18713){
var seq__18697_18714__$1 = temp__5535__auto___18713;
if(cljs.core.chunked_seq_QMARK_(seq__18697_18714__$1)){
var c__9207__auto___18715 = cljs.core.chunk_first(seq__18697_18714__$1);
var G__18716 = cljs.core.chunk_rest(seq__18697_18714__$1);
var G__18717 = c__9207__auto___18715;
var G__18718 = cljs.core.count(c__9207__auto___18715);
var G__18719 = (0);
seq__18697_18704 = G__18716;
chunk__18698_18705 = G__18717;
count__18699_18706 = G__18718;
i__18700_18707 = G__18719;
continue;
} else {
var f_18720__$1 = cljs.core.first(seq__18697_18714__$1);
(f_18720__$1.cljs$core$IFn$_invoke$arity$0 ? f_18720__$1.cljs$core$IFn$_invoke$arity$0() : f_18720__$1.call(null));

var G__18721 = cljs.core.next(seq__18697_18714__$1);
var G__18722 = null;
var G__18723 = (0);
var G__18724 = (0);
seq__18697_18704 = G__18721;
chunk__18698_18705 = G__18722;
count__18699_18706 = G__18723;
i__18700_18707 = G__18724;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5533__auto__))
;
return fexpr__18694();
});})(temp__5533__auto__))
;
var G__18687 = (0);
return setTimeout(G__18686,G__18687);
}
}
});
/**
 * Executes a function once the window load event is fired.
 */
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__18725 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18726 = (0);
return setTimeout(G__18725,G__18726);
}));
});
/**
 * Parses a sequence of element arguments into attributes and children.
 */
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__18732 = args;
var vec__18733 = G__18732;
var seq__18734 = cljs.core.seq(vec__18733);
var first__18735 = cljs.core.first(seq__18734);
var seq__18734__$1 = cljs.core.next(seq__18734);
var arg = first__18735;
var args__$1 = seq__18734__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__18732__$1 = G__18732;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__18736 = G__18732__$1;
var seq__18737 = cljs.core.seq(vec__18736);
var first__18738 = cljs.core.first(seq__18737);
var seq__18737__$1 = cljs.core.next(seq__18737);
var arg__$1 = first__18738;
var args__$2 = seq__18737__$1;
if(cljs.core.not((function (){var or__8276__auto__ = arg__$1;
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__18739 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__18740 = kids__$2;
var G__18741 = args__$2;
attr__$1 = G__18739;
kids__$1 = G__18740;
G__18732__$1 = G__18741;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__18742 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__18732__$1,attr__$2,kids__$2,vec__18736,seq__18737,first__18738,seq__18737__$1,arg__$1,args__$2,attr,kids,G__18732,vec__18733,seq__18734,first__18735,seq__18734__$1,arg,args__$1){
return (function (p1__18727_SHARP_,p2__18728_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18727_SHARP_,p2__18728_SHARP_,true);
});})(attr__$1,kids__$1,G__18732__$1,attr__$2,kids__$2,vec__18736,seq__18737,first__18738,seq__18737__$1,arg__$1,args__$2,attr,kids,G__18732,vec__18733,seq__18734,first__18735,seq__18734__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18743 = kids__$2;
var G__18744 = args__$2;
attr__$1 = G__18742;
kids__$1 = G__18743;
G__18732__$1 = G__18744;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__18745 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__18746 = kids__$2;
var G__18747 = cljs.core.rest(args__$2);
attr__$1 = G__18745;
kids__$1 = G__18746;
G__18732__$1 = G__18747;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__18748 = attr__$2;
var G__18749 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18750 = args__$2;
attr__$1 = G__18748;
kids__$1 = G__18749;
G__18732__$1 = G__18750;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__18751 = attr__$2;
var G__18752 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18753 = args__$2;
attr__$1 = G__18751;
kids__$1 = G__18752;
G__18732__$1 = G__18753;
continue;
} else {
var G__18754 = attr__$2;
var G__18755 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__18756 = args__$2;
attr__$1 = G__18754;
kids__$1 = G__18755;
G__18732__$1 = G__18756;
continue;

}
}
}
}
}
}
break;
}
});
/**
 * A multi-method dispatch function.
 * 
 * Will dispatch against three arguments:
 * 
 *   * `elem` - the target DOM Element containing the attribute
 *   * `key` - the attribute keyword or symbol
 *   * `value` - the attribute value
 * 
 * The dispatcher will attempt to dispatch agains the key namespace or key.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/*` otherwise `key`
 */
hoplon.core.dispatcher = (function hoplon$core$dispatcher(elem,key,value){
var temp__5533__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5533__auto__)){
var n = temp__5533__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonNode = function(){};

hoplon.core._node = (function hoplon$core$_node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonNode$_node$arity$1 == null)))){
return this$.hoplon$core$IHoplonNode$_node$arity$1(this$);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._node[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9010__auto__.call(null,this$));
} else {
var m__9010__auto____$1 = (hoplon.core._node["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9010__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonNode.-node",this$);
}
}
}
});

hoplon.core.node_QMARK_ = (function hoplon$core$node_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonNode$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
}
});
goog.object.set(hoplon.core.IHoplonNode,"string",true);

var G__18758_18765 = hoplon.core._node;
var G__18759_18766 = "string";
var G__18760_18767 = ((function (G__18758_18765,G__18759_18766){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__18758_18765,G__18759_18766))
;
goog.object.set(G__18758_18765,G__18759_18766,G__18760_18767);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__18761_18768 = hoplon.core._node;
var G__18762_18769 = "number";
var G__18763_18770 = ((function (G__18761_18768,G__18762_18769){
return (function (this$){
var G__18764 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__18764) : hoplon.core.$text.call(null,G__18764));
});})(G__18761_18768,G__18762_18769))
;
goog.object.set(G__18761_18768,G__18762_18769,G__18763_18770);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(cljs.core.truth_(hoplon.core.node_QMARK_(x))){
return hoplon.core._node(x);
} else {
return x;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attribute_BANG_ = (function hoplon$core$_attribute_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3(this$,elem,value);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9010__auto__.call(null,this$,elem,value));
} else {
var m__9010__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9010__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attribute!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
return hoplon.core._elem_BANG_(elem,this$__$1,value);
});
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts18774_18802 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18774_18802){
return (function (ret__17803__auto__,p__18775){
var vec__18776 = p__18775;
var ___17804__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18776,(0),null);
var f__17805__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18776,(1),null);
var sym__17806__auto__ = (f__17805__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17805__auto__.cljs$core$IFn$_invoke$arity$0() : f__17805__auto__.call(null));
var G__18779 = ret__17803__auto__;
if(cljs.core.truth_(sym__17806__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18779,sym__17806__auto__);
} else {
return G__18779;
}
});})(opts18774_18802))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18774_18802){
return (function (p1__17802__17807__auto__){
var G__18781 = cljs.core.first(p1__17802__17807__auto__);
var fexpr__18780 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18774_18802);
return (fexpr__18780.cljs$core$IFn$_invoke$arity$1 ? fexpr__18780.cljs$core$IFn$_invoke$arity$1(G__18781) : fexpr__18780.call(null,G__18781));
});})(opts18774_18802))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18774_18802){
return (function (){
var checked__17771__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-auth0/6ei/rlxyzj/index.html.out/hoplon/core.cljs",14,1,87,87,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts18774_18802);
if(cljs.core.truth_(checked__17771__auto__)){
hoplon.core._elem_BANG_ = checked__17771__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts18774_18802))
], null)))));

var opts18784_18803 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18784_18803){
return (function (ret__17803__auto__,p__18785){
var vec__18786 = p__18785;
var ___17804__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18786,(0),null);
var f__17805__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18786,(1),null);
var sym__17806__auto__ = (f__17805__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17805__auto__.cljs$core$IFn$_invoke$arity$0() : f__17805__auto__.call(null));
var G__18789 = ret__17803__auto__;
if(cljs.core.truth_(sym__17806__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18789,sym__17806__auto__);
} else {
return G__18789;
}
});})(opts18784_18803))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18784_18803){
return (function (p1__17802__17807__auto__){
var G__18791 = cljs.core.first(p1__17802__17807__auto__);
var fexpr__18790 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18784_18803);
return (fexpr__18790.cljs$core$IFn$_invoke$arity$1 ? fexpr__18790.cljs$core$IFn$_invoke$arity$1(G__18791) : fexpr__18790.call(null,G__18791));
});})(opts18784_18803))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18784_18803){
return (function (){
var checked__17771__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-auth0/6ei/rlxyzj/index.html.out/hoplon/core.cljs",12,1,77,77,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts18784_18803);
if(cljs.core.truth_(checked__17771__auto__)){
hoplon.core._do_BANG_ = checked__17771__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts18784_18803))
], null)))));

var opts18794 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18794){
return (function (ret__17803__auto__,p__18795){
var vec__18796 = p__18795;
var ___17804__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18796,(0),null);
var f__17805__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18796,(1),null);
var sym__17806__auto__ = (f__17805__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17805__auto__.cljs$core$IFn$_invoke$arity$0() : f__17805__auto__.call(null));
var G__18799 = ret__17803__auto__;
if(cljs.core.truth_(sym__17806__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18799,sym__17806__auto__);
} else {
return G__18799;
}
});})(opts18794))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18794){
return (function (p1__17802__17807__auto__){
var G__18801 = cljs.core.first(p1__17802__17807__auto__);
var fexpr__18800 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18794);
return (fexpr__18800.cljs$core$IFn$_invoke$arity$1 ? fexpr__18800.cljs$core$IFn$_invoke$arity$1(G__18801) : fexpr__18800.call(null,G__18801));
});})(opts18794))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18794){
return (function (){
var checked__17771__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-auth0/6ei/rlxyzj/index.html.out/hoplon/core.cljs",12,1,82,82,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts18794);
if(cljs.core.truth_(checked__17771__auto__)){
hoplon.core._on_BANG_ = checked__17771__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts18794))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

/**
 * Sets attributes on a managed element using native functionality.
 */
hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9010__auto__.call(null,this$,kvs));
} else {
var m__9010__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9010__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

/**
 * Sets styles on a managed element using native functionality.
 */
hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9010__auto__.call(null,this$,kvs));
} else {
var m__9010__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9010__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

/**
 * Returns the hoplon managed kids atom, or creates it if missing.
 */
hoplon.core._hoplon_kids = (function hoplon$core$_hoplon_kids(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 == null)))){
return this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1(this$);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9010__auto__.call(null,this$));
} else {
var m__9010__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9010__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-hoplon-kids",this$);
}
}
}
});

/**
 * Appends `child` to `this` for the case of `this` being a managed element.
 */
hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9010__auto__.call(null,this$,child));
} else {
var m__9010__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9010__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

/**
 * Removes `child` from `this` for the case of `this` being a managed element.
 */
hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9010__auto__.call(null,this$,child));
} else {
var m__9010__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9010__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

/**
 * Replaces `existing` with `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9010__auto__.call(null,this$,new$,existing));
} else {
var m__9010__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9010__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

/**
 * Inserts `existing` before `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9010__auto__.call(null,this$,new$,existing));
} else {
var m__9010__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9010__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon and implement the IHoplonElement protocol.
 */
hoplon.core.element_QMARK_ = (function hoplon$core$element_QMARK_(this$){
var and__8264__auto__ = (this$ instanceof Element);
if(and__8264__auto__){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonElement$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
}
} else {
return and__8264__auto__;
}
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon, and have not been extended with IHoplonElement.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && (cljs.core.not(hoplon.core.element_QMARK_(elem)));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){

return ((node instanceof Node)) && (cljs.core.not(hoplon.core.element_QMARK_(node)));
});
hoplon.core.hoplonify_BANG_ = (function hoplon$core$hoplonify_BANG_(elem){
var x18814 = elem;
x18814.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x18814.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x18814){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x18814))
;

x18814.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x18814.cljs$core$ILookup$_lookup$arity$2 = ((function (x18814){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__18815 = this$__$1.children;
var G__18816 = k;
return goog.object.get(G__18815,G__18816);
}
});})(x18814))
;

x18814.cljs$core$ILookup$_lookup$arity$3 = ((function (x18814){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__8276__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return not_found;
}
});})(x18814))
;

x18814.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x18814.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x18814){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__18817 = cljs.core.seq(kvs);
var chunk__18819 = null;
var count__18820 = (0);
var i__18821 = (0);
while(true){
if((i__18821 < count__18820)){
var vec__18823 = chunk__18819.cljs$core$IIndexed$_nth$arity$2(null,i__18821);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18823,(1),null);
var k_18845__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18845__$1);
} else {
e.setAttribute(k_18845__$1,((v === true)?k_18845__$1:v));
}

var G__18846 = seq__18817;
var G__18847 = chunk__18819;
var G__18848 = count__18820;
var G__18849 = (i__18821 + (1));
seq__18817 = G__18846;
chunk__18819 = G__18847;
count__18820 = G__18848;
i__18821 = G__18849;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__18817);
if(temp__5535__auto__){
var seq__18817__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18817__$1)){
var c__9207__auto__ = cljs.core.chunk_first(seq__18817__$1);
var G__18850 = cljs.core.chunk_rest(seq__18817__$1);
var G__18851 = c__9207__auto__;
var G__18852 = cljs.core.count(c__9207__auto__);
var G__18853 = (0);
seq__18817 = G__18850;
chunk__18819 = G__18851;
count__18820 = G__18852;
i__18821 = G__18853;
continue;
} else {
var vec__18826 = cljs.core.first(seq__18817__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18826,(1),null);
var k_18854__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18854__$1);
} else {
e.setAttribute(k_18854__$1,((v === true)?k_18854__$1:v));
}

var G__18855 = cljs.core.next(seq__18817__$1);
var G__18856 = null;
var G__18857 = (0);
var G__18858 = (0);
seq__18817 = G__18855;
chunk__18819 = G__18856;
count__18820 = G__18857;
i__18821 = G__18858;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18814))
;

x18814.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x18814){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__18829 = cljs.core.seq(kvs);
var chunk__18830 = null;
var count__18831 = (0);
var i__18832 = (0);
while(true){
if((i__18832 < count__18831)){
var vec__18833 = chunk__18830.cljs$core$IIndexed$_nth$arity$2(null,i__18832);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(1),null);
var G__18836_18859 = e.style;
var G__18837_18860 = cljs.core.name(k);
var G__18838_18861 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18836_18859,G__18837_18860,G__18838_18861);

var G__18862 = seq__18829;
var G__18863 = chunk__18830;
var G__18864 = count__18831;
var G__18865 = (i__18832 + (1));
seq__18829 = G__18862;
chunk__18830 = G__18863;
count__18831 = G__18864;
i__18832 = G__18865;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__18829);
if(temp__5535__auto__){
var seq__18829__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18829__$1)){
var c__9207__auto__ = cljs.core.chunk_first(seq__18829__$1);
var G__18866 = cljs.core.chunk_rest(seq__18829__$1);
var G__18867 = c__9207__auto__;
var G__18868 = cljs.core.count(c__9207__auto__);
var G__18869 = (0);
seq__18829 = G__18866;
chunk__18830 = G__18867;
count__18831 = G__18868;
i__18832 = G__18869;
continue;
} else {
var vec__18839 = cljs.core.first(seq__18829__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(1),null);
var G__18842_18870 = e.style;
var G__18843_18871 = cljs.core.name(k);
var G__18844_18872 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18842_18870,G__18843_18871,G__18844_18872);

var G__18873 = cljs.core.next(seq__18829__$1);
var G__18874 = null;
var G__18875 = (0);
var G__18876 = (0);
seq__18829 = G__18873;
chunk__18830 = G__18874;
count__18831 = G__18875;
i__18832 = G__18876;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18814))
;

x18814.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x18814){
return (function (this$){
var this$__$1 = this;
var temp__5533__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5533__auto__)){
var hl_kids = temp__5533__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,((function (kids,temp__5533__auto__,this$__$1,x18814){
return (function (p1__18807_SHARP_,p2__18806_SHARP_){
return hoplon.core.set_dom_children_BANG_(this$__$1,p2__18806_SHARP_);
});})(kids,temp__5533__auto__,this$__$1,x18814))
);

return kids;
}
});})(x18814))
;

x18814.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x18814){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_18877 = hoplon.core._hoplon_kids(this$__$1);
var i_18878 = cljs.core.count(cljs.core.deref(kids_18877));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_18877,i_18878,child__$1,this$__$1,x18814){
return (function (p1__18809_SHARP_,p2__18808_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18877,cljs.core.assoc,i_18878,p2__18808_SHARP_);
});})(kids_18877,i_18878,child__$1,this$__$1,x18814))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18877,cljs.core.assoc,i_18878,child__$1);
}

return child__$1;
});})(x18814))
;

x18814.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x18814){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_18879 = hoplon.core._hoplon_kids(this$__$1);
var before_count_18880 = cljs.core.count(cljs.core.deref(kids_18879));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_18879,((function (kids_18879,before_count_18880,child__$1,this$__$1,x18814){
return (function (p1__18810_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__18810_SHARP_));
});})(kids_18879,before_count_18880,child__$1,this$__$1,x18814))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_18879,((function (kids_18879,before_count_18880,child__$1,this$__$1,x18814){
return (function (p1__18811_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__18811_SHARP_));
});})(kids_18879,before_count_18880,child__$1,this$__$1,x18814))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_18879)),(before_count_18880 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x18814))
;

x18814.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x18814){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x18814){
return (function (p1__18812_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x18814){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x18814))
,p1__18812_SHARP_);
});})(existing__$1,this$__$1,x18814))
);

return existing__$1;
});})(x18814))
;

x18814.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x18814){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x18814){
return (function (p1__18813_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x18814){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x18814))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18813_SHARP_], 0)));
});})(new$__$1,this$__$1,x18814))
);
} else {
}
}

return new$__$1;
});})(x18814))
;

return x18814;
});
hoplon.core.__GT_hoplon = (function hoplon$core$__GT_hoplon(elem){
if(cljs.core.truth_(hoplon.core.element_QMARK_(elem))){
return elem;
} else {
var _ = elem;
hoplon.core.hoplonify_BANG_(elem);

return _;
}
});
hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__18886 = arguments.length;
switch (G__18886) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9578__auto__ = [];
var len__9555__auto___18888 = arguments.length;
var i__9556__auto___18889 = (0);
while(true){
if((i__9556__auto___18889 < len__9555__auto___18888)){
args_arr__9578__auto__.push((arguments[i__9556__auto___18889]));

var G__18890 = (i__9556__auto___18889 + (1));
i__9556__auto___18889 = G__18890;
continue;
} else {
}
break;
}

var argseq__9579__auto__ = (new cljs.core.IndexedSeq(args_arr__9578__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9579__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq18882){
var G__18883 = cljs.core.first(seq18882);
var seq18882__$1 = cljs.core.next(seq18882);
var G__18884 = cljs.core.first(seq18882__$1);
var seq18882__$2 = cljs.core.next(seq18882__$1);
var G__18885 = cljs.core.first(seq18882__$2);
var seq18882__$3 = cljs.core.next(seq18882__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18883,G__18884,G__18885,seq18882__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__18896 = arguments.length;
switch (G__18896) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9578__auto__ = [];
var len__9555__auto___18898 = arguments.length;
var i__9556__auto___18899 = (0);
while(true){
if((i__9556__auto___18899 < len__9555__auto___18898)){
args_arr__9578__auto__.push((arguments[i__9556__auto___18899]));

var G__18900 = (i__9556__auto___18899 + (1));
i__9556__auto___18899 = G__18900;
continue;
} else {
}
break;
}

var argseq__9579__auto__ = (new cljs.core.IndexedSeq(args_arr__9578__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9579__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq18892){
var G__18893 = cljs.core.first(seq18892);
var seq18892__$1 = cljs.core.next(seq18892);
var G__18894 = cljs.core.first(seq18892__$1);
var seq18892__$2 = cljs.core.next(seq18892__$1);
var G__18895 = cljs.core.first(seq18892__$2);
var seq18892__$3 = cljs.core.next(seq18892__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18893,G__18894,G__18895,seq18892__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__18902_SHARP_,p2__18901_SHARP_,p3__18903_SHARP_){
hoplon.core._attribute_BANG_(p2__18901_SHARP_,p1__18902_SHARP_,p3__18903_SHARP_);

return p1__18902_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__18904){
var vec__18905 = p__18904;
var seq__18906 = cljs.core.seq(vec__18905);
var first__18907 = cljs.core.first(seq__18906);
var seq__18906__$1 = cljs.core.next(seq__18906);
var child_cell = first__18907;
var _ = seq__18906__$1;
var kids = vec__18905;
var this$__$1 = this$;
var seq__18908_18912 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__18909_18913 = null;
var count__18910_18914 = (0);
var i__18911_18915 = (0);
while(true){
if((i__18911_18915 < count__18910_18914)){
var x_18916 = chunk__18909_18913.cljs$core$IIndexed$_nth$arity$2(null,i__18911_18915);
var temp__5535__auto___18917 = hoplon.core.__GT_node(x_18916);
if(cljs.core.truth_(temp__5535__auto___18917)){
var x_18918__$1 = temp__5535__auto___18917;
hoplon.core._append_child_BANG_(this$__$1,x_18918__$1);
} else {
}

var G__18919 = seq__18908_18912;
var G__18920 = chunk__18909_18913;
var G__18921 = count__18910_18914;
var G__18922 = (i__18911_18915 + (1));
seq__18908_18912 = G__18919;
chunk__18909_18913 = G__18920;
count__18910_18914 = G__18921;
i__18911_18915 = G__18922;
continue;
} else {
var temp__5535__auto___18923 = cljs.core.seq(seq__18908_18912);
if(temp__5535__auto___18923){
var seq__18908_18924__$1 = temp__5535__auto___18923;
if(cljs.core.chunked_seq_QMARK_(seq__18908_18924__$1)){
var c__9207__auto___18925 = cljs.core.chunk_first(seq__18908_18924__$1);
var G__18926 = cljs.core.chunk_rest(seq__18908_18924__$1);
var G__18927 = c__9207__auto___18925;
var G__18928 = cljs.core.count(c__9207__auto___18925);
var G__18929 = (0);
seq__18908_18912 = G__18926;
chunk__18909_18913 = G__18927;
count__18910_18914 = G__18928;
i__18911_18915 = G__18929;
continue;
} else {
var x_18930 = cljs.core.first(seq__18908_18924__$1);
var temp__5535__auto___18931__$1 = hoplon.core.__GT_node(x_18930);
if(cljs.core.truth_(temp__5535__auto___18931__$1)){
var x_18932__$1 = temp__5535__auto___18931__$1;
hoplon.core._append_child_BANG_(this$__$1,x_18932__$1);
} else {
}

var G__18933 = cljs.core.next(seq__18908_18924__$1);
var G__18934 = null;
var G__18935 = (0);
var G__18936 = (0);
seq__18908_18912 = G__18933;
chunk__18909_18913 = G__18934;
count__18910_18914 = G__18935;
i__18911_18915 = G__18936;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$),cljs.core.empty);
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9562__auto__ = [];
var len__9555__auto___18943 = arguments.length;
var i__9556__auto___18944 = (0);
while(true){
if((i__9556__auto___18944 < len__9555__auto___18943)){
args__9562__auto__.push((arguments[i__9556__auto___18944]));

var G__18945 = (i__9556__auto___18944 + (1));
i__9556__auto___18944 = G__18945;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((1) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9563__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__18939 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18939,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18939,(1),null);
var G__18942 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__18942,attr);

hoplon.core.add_children_BANG_(G__18942,kids);

return G__18942;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq18937){
var G__18938 = cljs.core.first(seq18937);
var seq18937__$1 = cljs.core.next(seq18937);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18938,seq18937__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__18947 = null;
var G__18947__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__18947__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__18947__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__18947__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__18947__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__18947__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__18947__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__18947__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__18947__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__18947__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__18947__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__18947__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__18947__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__18947__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__18947__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__18947__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__18947__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__18947__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__18947__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__18947__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__18947__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__18947__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__18947 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__18947__1.call(this,self__);
case 2:
return G__18947__2.call(this,self__,a);
case 3:
return G__18947__3.call(this,self__,a,b);
case 4:
return G__18947__4.call(this,self__,a,b,c);
case 5:
return G__18947__5.call(this,self__,a,b,c,d);
case 6:
return G__18947__6.call(this,self__,a,b,c,d,e);
case 7:
return G__18947__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__18947__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__18947__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__18947__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__18947__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__18947__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__18947__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__18947__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__18947__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__18947__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__18947__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__18947__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__18947__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__18947__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__18947__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__18947__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__18947.cljs$core$IFn$_invoke$arity$1 = G__18947__1;
G__18947.cljs$core$IFn$_invoke$arity$2 = G__18947__2;
G__18947.cljs$core$IFn$_invoke$arity$3 = G__18947__3;
G__18947.cljs$core$IFn$_invoke$arity$4 = G__18947__4;
G__18947.cljs$core$IFn$_invoke$arity$5 = G__18947__5;
G__18947.cljs$core$IFn$_invoke$arity$6 = G__18947__6;
G__18947.cljs$core$IFn$_invoke$arity$7 = G__18947__7;
G__18947.cljs$core$IFn$_invoke$arity$8 = G__18947__8;
G__18947.cljs$core$IFn$_invoke$arity$9 = G__18947__9;
G__18947.cljs$core$IFn$_invoke$arity$10 = G__18947__10;
G__18947.cljs$core$IFn$_invoke$arity$11 = G__18947__11;
G__18947.cljs$core$IFn$_invoke$arity$12 = G__18947__12;
G__18947.cljs$core$IFn$_invoke$arity$13 = G__18947__13;
G__18947.cljs$core$IFn$_invoke$arity$14 = G__18947__14;
G__18947.cljs$core$IFn$_invoke$arity$15 = G__18947__15;
G__18947.cljs$core$IFn$_invoke$arity$16 = G__18947__16;
G__18947.cljs$core$IFn$_invoke$arity$17 = G__18947__17;
G__18947.cljs$core$IFn$_invoke$arity$18 = G__18947__18;
G__18947.cljs$core$IFn$_invoke$arity$19 = G__18947__19;
G__18947.cljs$core$IFn$_invoke$arity$20 = G__18947__20;
G__18947.cljs$core$IFn$_invoke$arity$21 = G__18947__21;
G__18947.cljs$core$IFn$_invoke$arity$22 = G__18947__22;
return G__18947;
})()
;

Element.prototype.apply = (function (self__,args18946){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18946)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){

return (function() { 
var G__18954__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__18948_18955 = document;
var G__18949_18956 = elem;
var G__18950_18957 = document.createElement(elem);
goog.object.set(G__18948_18955,G__18949_18956,G__18950_18957);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__18951_18958 = hoplon.core.parse_args(args);
var attrs_18959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951_18958,(0),null);
var kids_18960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951_18958,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_18959))){
} else {
hoplon.core.remove_all_kids_BANG_(helem);

hoplon.core.add_attributes_BANG_(helem,attrs_18959);

hoplon.core.add_children_BANG_(helem,kids_18960);
}

return helem;
};
var G__18954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18961__i = 0, G__18961__a = new Array(arguments.length -  0);
while (G__18961__i < G__18961__a.length) {G__18961__a[G__18961__i] = arguments[G__18961__i + 0]; ++G__18961__i;}
  args = new cljs.core.IndexedSeq(G__18961__a,0,null);
} 
return G__18954__delegate.call(this,args);};
G__18954.cljs$lang$maxFixedArity = 0;
G__18954.cljs$lang$applyTo = (function (arglist__18962){
var args = cljs.core.seq(arglist__18962);
return G__18954__delegate(args);
});
G__18954.cljs$core$IFn$_invoke$arity$variadic = G__18954__delegate;
return G__18954;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__18966__delegate = function (args){
var vec__18963 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18963,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18963,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__18966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18967__i = 0, G__18967__a = new Array(arguments.length -  0);
while (G__18967__i < G__18967__a.length) {G__18967__a[G__18967__i] = arguments[G__18967__i + 0]; ++G__18967__i;}
  args = new cljs.core.IndexedSeq(G__18967__a,0,null);
} 
return G__18966__delegate.call(this,args);};
G__18966.cljs$lang$maxFixedArity = 0;
G__18966.cljs$lang$applyTo = (function (arglist__18968){
var args = cljs.core.seq(arglist__18968);
return G__18966__delegate(args);
});
G__18966.cljs$core$IFn$_invoke$arity$variadic = G__18966__delegate;
return G__18966;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9562__auto__ = [];
var len__9555__auto___18970 = arguments.length;
var i__9556__auto___18971 = (0);
while(true){
if((i__9556__auto___18971 < len__9555__auto___18970)){
args__9562__auto__.push((arguments[i__9556__auto___18971]));

var G__18972 = (i__9556__auto___18971 + (1));
i__9556__auto___18971 = G__18972;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((0) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9563__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq18969){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18969));
});

/**
 * Updates and returns the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton("head");
/**
 * Updates and returns the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton("body");
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__18973_SHARP_){
return document.createTextNode(p1__18973_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__18974_SHARP_){
return document.createComment(p1__18974_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if(typeof hoplon.core.elem_BANG_ !== 'undefined'){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9333__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9334__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9335__auto__,method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__18976_SHARP_,p2__18975_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__18975_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9333__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9334__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9335__auto__,method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__18977 = elem;
var G__18978 = cljs.core.cst$kw$attr;
var G__18979 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18977,G__18978,G__18979) : hoplon.core.do_BANG_.call(null,G__18977,G__18978,G__18979));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9333__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9334__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9335__auto__,method_table__9331__auto__,prefer_table__9332__auto__,method_cache__9333__auto__,cached_hierarchy__9334__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template `tpl` is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__18984 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__18982,G__18983){
return (G__18982.cljs$core$IFn$_invoke$arity$1 ? G__18982.cljs$core$IFn$_invoke$arity$1(G__18983) : G__18982.call(null,G__18983));
});})(on_deck))
);
return (fexpr__18984.cljs$core$IFn$_invoke$arity$2 ? fexpr__18984.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__18984.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__18980_SHARP_){
var fexpr__18988 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__18986,G__18985,G__18987){
return (G__18985.cljs$core$IFn$_invoke$arity$3 ? G__18985.cljs$core$IFn$_invoke$arity$3(G__18986,G__18987,null) : G__18985.call(null,G__18986,G__18987,null));
});})(on_deck,items_seq))
);
return (fexpr__18988.cljs$core$IFn$_invoke$arity$3 ? fexpr__18988.cljs$core$IFn$_invoke$arity$3(items_seq,cljs.core.nth,p1__18980_SHARP_) : fexpr__18988.call(null,items_seq,cljs.core.nth,p1__18980_SHARP_));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__18981_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__18981_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__18981_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__18989 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__18990 = null;
var count__18991 = (0);
var i__18992 = (0);
while(true){
if((i__18992 < count__18991)){
var i = chunk__18990.cljs$core$IIndexed$_nth$arity$2(null,i__18992);
var e_18995 = (function (){var or__8276__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
var G__18993 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__18993) : tpl.call(null,G__18993));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_18995);

var G__18996 = seq__18989;
var G__18997 = chunk__18990;
var G__18998 = count__18991;
var G__18999 = (i__18992 + (1));
seq__18989 = G__18996;
chunk__18990 = G__18997;
count__18991 = G__18998;
i__18992 = G__18999;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__18989);
if(temp__5535__auto__){
var seq__18989__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18989__$1)){
var c__9207__auto__ = cljs.core.chunk_first(seq__18989__$1);
var G__19000 = cljs.core.chunk_rest(seq__18989__$1);
var G__19001 = c__9207__auto__;
var G__19002 = cljs.core.count(c__9207__auto__);
var G__19003 = (0);
seq__18989 = G__19000;
chunk__18990 = G__19001;
count__18991 = G__19002;
i__18992 = G__19003;
continue;
} else {
var i = cljs.core.first(seq__18989__$1);
var e_19004 = (function (){var or__8276__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
var G__18994 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__18994) : tpl.call(null,G__18994));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19004);

var G__19005 = cljs.core.next(seq__18989__$1);
var G__19006 = null;
var G__19007 = (0);
var G__19008 = (0);
seq__18989 = G__19005;
chunk__18990 = G__19006;
count__18991 = G__19007;
i__18992 = G__19008;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9321__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9321__auto__)){
var e_19009 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19009);

var G__19010 = (_ + (1));
_ = G__19010;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
