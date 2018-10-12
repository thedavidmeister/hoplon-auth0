// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.storage_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');

/**
 * Represents a storage resource.
 * @interface
 */
hoplon.storage_atom.IStorageBackend = function(){};

hoplon.storage_atom._get = (function hoplon$storage_atom$_get(this$,not_found){
if((!((this$ == null))) && (!((this$.hoplon$storage_atom$IStorageBackend$_get$arity$2 == null)))){
return this$.hoplon$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.storage_atom._get[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__9010__auto__.call(null,this$,not_found));
} else {
var m__9010__auto____$1 = (hoplon.storage_atom._get["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__9010__auto____$1.call(null,this$,not_found));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-get",this$);
}
}
}
});

/**
 * Commit value to storage at location.
 */
hoplon.storage_atom._commit_BANG_ = (function hoplon$storage_atom$_commit_BANG_(this$,value){
if((!((this$ == null))) && (!((this$.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2 == null)))){
return this$.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else {
var x__9009__auto__ = (((this$ == null))?null:this$);
var m__9010__auto__ = (hoplon.storage_atom._commit_BANG_[goog.typeOf(x__9009__auto__)]);
if(!((m__9010__auto__ == null))){
return (m__9010__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__9010__auto__.call(null,this$,value));
} else {
var m__9010__auto____$1 = (hoplon.storage_atom._commit_BANG_["_"]);
if(!((m__9010__auto____$1 == null))){
return (m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9010__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__9010__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-commit!",this$);
}
}
}
});


/**
* @constructor
 * @implements {hoplon.storage_atom.IStorageBackend}
*/
hoplon.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
});
hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$ = cljs.core.PROTOCOL_SENTINEL;

hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){
var self__ = this;
var this$__$1 = this;
var temp__5533__auto__ = self__.store.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.key], 0)));
if(cljs.core.truth_(temp__5533__auto__)){
var existing = temp__5533__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(existing);
} else {
return not_found;
}
});

hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.store.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});

hoplon.storage_atom.StorageBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$store,cljs.core.cst$sym$key], null);
});

hoplon.storage_atom.StorageBackend.cljs$lang$type = true;

hoplon.storage_atom.StorageBackend.cljs$lang$ctorStr = "hoplon.storage-atom/StorageBackend";

hoplon.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__8947__auto__,writer__8948__auto__,opt__8949__auto__){
return cljs.core._write(writer__8948__auto__,"hoplon.storage-atom/StorageBackend");
});

hoplon.storage_atom.__GT_StorageBackend = (function hoplon$storage_atom$__GT_StorageBackend(store,key){
return (new hoplon.storage_atom.StorageBackend(store,key));
});

hoplon.storage_atom.store = (function hoplon$storage_atom$store(var_args){
var args__9562__auto__ = [];
var len__9555__auto___22842 = arguments.length;
var i__9556__auto___22843 = (0);
while(true){
if((i__9556__auto___22843 < len__9555__auto___22842)){
args__9562__auto__.push((arguments[i__9556__auto___22843]));

var G__22844 = (i__9556__auto___22843 + (1));
i__9556__auto___22843 = G__22844;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((2) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9563__auto__);
});

hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic = (function (atom,backend,p__22838){
var map__22839 = p__22838;
var map__22839__$1 = ((((!((map__22839 == null)))?((((map__22839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22839):map__22839);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22839__$1,cljs.core.cst$kw$ignore_DASH_existing);
var existing = (function (){var or__8276__auto__ = (function (){var and__8264__auto__ = ignore_existing;
if(cljs.core.truth_(and__8264__auto__)){
return cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none;
} else {
return and__8264__auto__;
}
})();
if(cljs.core.truth_(or__8276__auto__)){
return or__8276__auto__;
} else {
return hoplon.storage_atom._get(backend,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none,existing)){
hoplon.storage_atom._commit_BANG_(backend,cljs.core.deref(atom));
} else {
cljs.core.reset_BANG_(atom,existing);
}

var G__22841 = atom;
cljs.core.add_watch(G__22841,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__22841,existing,map__22839,map__22839__$1,ignore_existing){
return (function (p1__22832_SHARP_,p2__22833_SHARP_,p3__22834_SHARP_,p4__22831_SHARP_){
return hoplon.storage_atom._commit_BANG_(backend,p4__22831_SHARP_);
});})(G__22841,existing,map__22839,map__22839__$1,ignore_existing))
);

return G__22841;
});

hoplon.storage_atom.store.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.store.cljs$lang$applyTo = (function (seq22835){
var G__22836 = cljs.core.first(seq22835);
var seq22835__$1 = cljs.core.next(seq22835);
var G__22837 = cljs.core.first(seq22835__$1);
var seq22835__$2 = cljs.core.next(seq22835__$1);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(G__22836,G__22837,seq22835__$2);
});

hoplon.storage_atom.html_storage = (function hoplon$storage_atom$html_storage(var_args){
var args__9562__auto__ = [];
var len__9555__auto___22852 = arguments.length;
var i__9556__auto___22853 = (0);
while(true){
if((i__9556__auto___22853 < len__9555__auto___22852)){
args__9562__auto__.push((arguments[i__9556__auto___22853]));

var G__22854 = (i__9556__auto___22853 + (1));
i__9556__auto___22853 = G__22854;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((3) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((3)),(0),null)):null);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9563__auto__);
});

hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,storage,k,p__22849){
var map__22850 = p__22849;
var map__22850__$1 = ((((!((map__22850 == null)))?((((map__22850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22850):map__22850);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(atom,(new hoplon.storage_atom.StorageBackend(storage,k)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.html_storage.cljs$lang$maxFixedArity = (3);

hoplon.storage_atom.html_storage.cljs$lang$applyTo = (function (seq22845){
var G__22846 = cljs.core.first(seq22845);
var seq22845__$1 = cljs.core.next(seq22845);
var G__22847 = cljs.core.first(seq22845__$1);
var seq22845__$2 = cljs.core.next(seq22845__$1);
var G__22848 = cljs.core.first(seq22845__$2);
var seq22845__$3 = cljs.core.next(seq22845__$2);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(G__22846,G__22847,G__22848,seq22845__$3);
});

hoplon.storage_atom.local_storage = (function hoplon$storage_atom$local_storage(var_args){
var args__9562__auto__ = [];
var len__9555__auto___22861 = arguments.length;
var i__9556__auto___22862 = (0);
while(true){
if((i__9556__auto___22862 < len__9555__auto___22861)){
args__9562__auto__.push((arguments[i__9556__auto___22862]));

var G__22863 = (i__9556__auto___22862 + (1));
i__9556__auto___22862 = G__22863;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((2) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9563__auto__);
});

hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__22858){
var map__22859 = p__22858;
var map__22859__$1 = ((((!((map__22859 == null)))?((((map__22859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22859):map__22859);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22859__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,localStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.local_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.local_storage.cljs$lang$applyTo = (function (seq22855){
var G__22856 = cljs.core.first(seq22855);
var seq22855__$1 = cljs.core.next(seq22855);
var G__22857 = cljs.core.first(seq22855__$1);
var seq22855__$2 = cljs.core.next(seq22855__$1);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic(G__22856,G__22857,seq22855__$2);
});

hoplon.storage_atom.session_storage = (function hoplon$storage_atom$session_storage(var_args){
var args__9562__auto__ = [];
var len__9555__auto___22870 = arguments.length;
var i__9556__auto___22871 = (0);
while(true){
if((i__9556__auto___22871 < len__9555__auto___22870)){
args__9562__auto__.push((arguments[i__9556__auto___22871]));

var G__22872 = (i__9556__auto___22871 + (1));
i__9556__auto___22871 = G__22872;
continue;
} else {
}
break;
}

var argseq__9563__auto__ = ((((2) < args__9562__auto__.length))?(new cljs.core.IndexedSeq(args__9562__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9563__auto__);
});

hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__22867){
var map__22868 = p__22867;
var map__22868__$1 = ((((!((map__22868 == null)))?((((map__22868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22868):map__22868);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22868__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,sessionStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.session_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.session_storage.cljs$lang$applyTo = (function (seq22864){
var G__22865 = cljs.core.first(seq22864);
var seq22864__$1 = cljs.core.next(seq22864);
var G__22866 = cljs.core.first(seq22864__$1);
var seq22864__$2 = cljs.core.next(seq22864__$1);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic(G__22865,G__22866,seq22864__$2);
});

