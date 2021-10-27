goog.provide('rdd.utils.general');
/**
 * Removes nil keys from a collection of maps or a single map
 */
rdd.utils.general.de_nill = (function rdd$utils$general$de_nill(data){
var remove_nils_fn = (function (m){
var valid_keys = (function (){var iter__4611__auto__ = (function rdd$utils$general$de_nill_$_iter__47958(s__47959){
return (new cljs.core.LazySeq(null,(function (){
var s__47959__$1 = s__47959;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47959__$1);
if(temp__5753__auto__){
var s__47959__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47959__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47959__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47961 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47960 = (0);
while(true){
if((i__47960 < size__4610__auto__)){
var vec__47964 = cljs.core._nth(c__4609__auto__,i__47960);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47964,(1),null);
if((!((v == null)))){
cljs.core.chunk_append(b__47961,k);

var G__48042 = (i__47960 + (1));
i__47960 = G__48042;
continue;
} else {
var G__48043 = (i__47960 + (1));
i__47960 = G__48043;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47961),rdd$utils$general$de_nill_$_iter__47958(cljs.core.chunk_rest(s__47959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47961),null);
}
} else {
var vec__47980 = cljs.core.first(s__47959__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47980,(1),null);
if((!((v == null)))){
return cljs.core.cons(k,rdd$utils$general$de_nill_$_iter__47958(cljs.core.rest(s__47959__$2)));
} else {
var G__48057 = cljs.core.rest(s__47959__$2);
s__47959__$1 = G__48057;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(m);
})();
return cljs.core.select_keys(m,valid_keys);
});
if(cljs.core.truth_(data)){
if(cljs.core.map_QMARK_(data)){
return remove_nils_fn(data);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_nils_fn,data);
}
} else {
return null;
}
});
rdd.utils.general.generate_lookup_table = (function rdd$utils$general$generate_lookup_table(key,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__47996_SHARP_,p2__47997_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__47996_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([(key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(p2__47997_SHARP_) : key.call(null,p2__47997_SHARP_)),p2__47997_SHARP_])], 0));
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});

//# sourceMappingURL=rdd.utils.general.js.map
