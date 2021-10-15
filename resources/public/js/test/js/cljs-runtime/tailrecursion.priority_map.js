goog.provide('tailrecursion.priority_map');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4611__auto__ = (function tailrecursion$priority_map$iter__46355(s__46356){
return (new cljs.core.LazySeq(null,(function (){
var s__46356__$1 = s__46356;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46356__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__46365 = cljs.core.first(xs__6308__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46365,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46365,(1),null);
var iterys__4607__auto__ = ((function (s__46356__$1,vec__46365,priority,item_set,xs__6308__auto__,temp__5753__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__46355_$_iter__46361(s__46362){
return (new cljs.core.LazySeq(null,((function (s__46356__$1,vec__46365,priority,item_set,xs__6308__auto__,temp__5753__auto__,coll__$1){
return (function (){
var s__46362__$1 = s__46362;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46362__$1);
if(temp__5753__auto____$1){
var s__46362__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46362__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46362__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46364 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46363 = (0);
while(true){
if((i__46363 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__46363);
cljs.core.chunk_append(b__46364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__46571 = (i__46363 + (1));
i__46363 = G__46571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46364),tailrecursion$priority_map$iter__46355_$_iter__46361(cljs.core.chunk_rest(s__46362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46364),null);
}
} else {
var item = cljs.core.first(s__46362__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__46355_$_iter__46361(cljs.core.rest(s__46362__$2)));
}
} else {
return null;
}
break;
}
});})(s__46356__$1,vec__46365,priority,item_set,xs__6308__auto__,temp__5753__auto__,coll__$1))
,null,null));
});})(s__46356__$1,vec__46365,priority,item_set,xs__6308__auto__,temp__5753__auto__,coll__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(item_set));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,tailrecursion$priority_map$iter__46355(cljs.core.rest(s__46356__$1)));
} else {
var G__46572 = cljs.core.rest(s__46356__$1);
s__46356__$1 = G__46572;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__4611__auto__ = (function tailrecursion$priority_map$iter__46370(s__46371){
return (new cljs.core.LazySeq(null,(function (){
var s__46371__$1 = s__46371;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46371__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__46380 = cljs.core.first(xs__6308__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46380,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46380,(1),null);
var iterys__4607__auto__ = ((function (s__46371__$1,vec__46380,priority,item_set,xs__6308__auto__,temp__5753__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__46370_$_iter__46372(s__46373){
return (new cljs.core.LazySeq(null,((function (s__46371__$1,vec__46380,priority,item_set,xs__6308__auto__,temp__5753__auto__,coll__$1){
return (function (){
var s__46373__$1 = s__46373;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46373__$1);
if(temp__5753__auto____$1){
var s__46373__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46373__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46373__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46375 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46374 = (0);
while(true){
if((i__46374 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__46374);
cljs.core.chunk_append(b__46375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__46574 = (i__46374 + (1));
i__46374 = G__46574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46375),tailrecursion$priority_map$iter__46370_$_iter__46372(cljs.core.chunk_rest(s__46373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46375),null);
}
} else {
var item = cljs.core.first(s__46373__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__46370_$_iter__46372(cljs.core.rest(s__46373__$2)));
}
} else {
return null;
}
break;
}
});})(s__46371__$1,vec__46380,priority,item_set,xs__6308__auto__,temp__5753__auto__,coll__$1))
,null,null));
});})(s__46371__$1,vec__46380,priority,item_set,xs__6308__auto__,temp__5753__auto__,coll__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(item_set));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,tailrecursion$priority_map$iter__46370(cljs.core.rest(s__46371__$1)));
} else {
var G__46575 = cljs.core.rest(s__46371__$1);
s__46371__$1 = G__46575;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)) : self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5751__auto__)){
var current_priority = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4611__auto__ = (function tailrecursion$priority_map$iter__46393(s__46394){
return (new cljs.core.LazySeq(null,(function (){
var s__46394__$1 = s__46394;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46394__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__46400 = cljs.core.first(xs__6308__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46400,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46400,(1),null);
var iterys__4607__auto__ = ((function (s__46394__$1,vec__46400,priority,item_set,xs__6308__auto__,temp__5753__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__46393_$_iter__46395(s__46396){
return (new cljs.core.LazySeq(null,((function (s__46394__$1,vec__46400,priority,item_set,xs__6308__auto__,temp__5753__auto__,this$__$1){
return (function (){
var s__46396__$1 = s__46396;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46396__$1);
if(temp__5753__auto____$1){
var s__46396__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46396__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46396__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46398 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46397 = (0);
while(true){
if((i__46397 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__46397);
cljs.core.chunk_append(b__46398,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__46576 = (i__46397 + (1));
i__46397 = G__46576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46398),tailrecursion$priority_map$iter__46393_$_iter__46395(cljs.core.chunk_rest(s__46396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46398),null);
}
} else {
var item = cljs.core.first(s__46396__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__46393_$_iter__46395(cljs.core.rest(s__46396__$2)));
}
} else {
return null;
}
break;
}
});})(s__46394__$1,vec__46400,priority,item_set,xs__6308__auto__,temp__5753__auto__,this$__$1))
,null,null));
});})(s__46394__$1,vec__46400,priority,item_set,xs__6308__auto__,temp__5753__auto__,this$__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(item_set));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,tailrecursion$priority_map$iter__46393(cljs.core.rest(s__46394__$1)));
} else {
var G__46577 = cljs.core.rest(s__46394__$1);
s__46394__$1 = G__46577;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__4611__auto__ = (function tailrecursion$priority_map$iter__46403(s__46404){
return (new cljs.core.LazySeq(null,(function (){
var s__46404__$1 = s__46404;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46404__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__46410 = cljs.core.first(xs__6308__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46410,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46410,(1),null);
var iterys__4607__auto__ = ((function (s__46404__$1,vec__46410,priority,item_set,xs__6308__auto__,temp__5753__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__46403_$_iter__46405(s__46406){
return (new cljs.core.LazySeq(null,((function (s__46404__$1,vec__46410,priority,item_set,xs__6308__auto__,temp__5753__auto__,this$__$1){
return (function (){
var s__46406__$1 = s__46406;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46406__$1);
if(temp__5753__auto____$1){
var s__46406__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46406__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46406__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46408 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46407 = (0);
while(true){
if((i__46407 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__46407);
cljs.core.chunk_append(b__46408,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__46581 = (i__46407 + (1));
i__46407 = G__46581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46408),tailrecursion$priority_map$iter__46403_$_iter__46405(cljs.core.chunk_rest(s__46406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46408),null);
}
} else {
var item = cljs.core.first(s__46406__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__46403_$_iter__46405(cljs.core.rest(s__46406__$2)));
}
} else {
return null;
}
break;
}
});})(s__46404__$1,vec__46410,priority,item_set,xs__6308__auto__,temp__5753__auto__,this$__$1))
,null,null));
});})(s__46404__$1,vec__46410,priority,item_set,xs__6308__auto__,temp__5753__auto__,this$__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(item_set));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,tailrecursion$priority_map$iter__46403(cljs.core.rest(s__46404__$1)));
} else {
var G__46586 = cljs.core.rest(s__46404__$1);
s__46404__$1 = G__46586;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(self__.priority__GT_set_of_items);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function (unused__10790__auto__){
var self__ = this;
var self__ = this;
var G__46417 = (arguments.length - (1));
switch (G__46417) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args46299){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46299)));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__46419 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__46419.cljs$core$IFn$_invoke$arity$1 ? fexpr__46419.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__46419.call(null,this$__$1));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4611__auto__ = (function tailrecursion$priority_map$iter__46426(s__46427){
return (new cljs.core.LazySeq(null,(function (){
var s__46427__$1 = s__46427;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46427__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__46432 = cljs.core.first(xs__6308__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46432,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46432,(1),null);
var iterys__4607__auto__ = ((function (s__46427__$1,vec__46432,priority,item_set,xs__6308__auto__,temp__5753__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__46426_$_iter__46428(s__46429){
return (new cljs.core.LazySeq(null,((function (s__46427__$1,vec__46432,priority,item_set,xs__6308__auto__,temp__5753__auto__,sets,this$__$1){
return (function (){
var s__46429__$1 = s__46429;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46429__$1);
if(temp__5753__auto____$1){
var s__46429__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46429__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46429__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46431 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46430 = (0);
while(true){
if((i__46430 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__46430);
cljs.core.chunk_append(b__46431,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__46616 = (i__46430 + (1));
i__46430 = G__46616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46431),tailrecursion$priority_map$iter__46426_$_iter__46428(cljs.core.chunk_rest(s__46429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46431),null);
}
} else {
var item = cljs.core.first(s__46429__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__46426_$_iter__46428(cljs.core.rest(s__46429__$2)));
}
} else {
return null;
}
break;
}
});})(s__46427__$1,vec__46432,priority,item_set,xs__6308__auto__,temp__5753__auto__,sets,this$__$1))
,null,null));
});})(s__46427__$1,vec__46432,priority,item_set,xs__6308__auto__,temp__5753__auto__,sets,this$__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(item_set));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,tailrecursion$priority_map$iter__46426(cljs.core.rest(s__46427__$1)));
} else {
var G__46633 = cljs.core.rest(s__46427__$1);
s__46427__$1 = G__46633;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__4611__auto__ = (function tailrecursion$priority_map$iter__46441(s__46442){
return (new cljs.core.LazySeq(null,(function (){
var s__46442__$1 = s__46442;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46442__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__46447 = cljs.core.first(xs__6308__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46447,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46447,(1),null);
var iterys__4607__auto__ = ((function (s__46442__$1,vec__46447,priority,item_set,xs__6308__auto__,temp__5753__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__46441_$_iter__46443(s__46444){
return (new cljs.core.LazySeq(null,((function (s__46442__$1,vec__46447,priority,item_set,xs__6308__auto__,temp__5753__auto__,sets,this$__$1){
return (function (){
var s__46444__$1 = s__46444;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46444__$1);
if(temp__5753__auto____$1){
var s__46444__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46444__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46444__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46446 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46445 = (0);
while(true){
if((i__46445 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__46445);
cljs.core.chunk_append(b__46446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__46663 = (i__46445 + (1));
i__46445 = G__46663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46446),tailrecursion$priority_map$iter__46441_$_iter__46443(cljs.core.chunk_rest(s__46444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46446),null);
}
} else {
var item = cljs.core.first(s__46444__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__46441_$_iter__46443(cljs.core.rest(s__46444__$2)));
}
} else {
return null;
}
break;
}
});})(s__46442__$1,vec__46447,priority,item_set,xs__6308__auto__,temp__5753__auto__,sets,this$__$1))
,null,null));
});})(s__46442__$1,vec__46447,priority,item_set,xs__6308__auto__,temp__5753__auto__,sets,this$__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(item_set));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,tailrecursion$priority_map$iter__46441(cljs.core.rest(s__46442__$1)));
} else {
var G__46665 = cljs.core.rest(s__46442__$1);
s__46442__$1 = G__46665;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(sets);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__46469 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__46469) : self__.keyfn.call(null,G__46469));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
}));

(tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true);

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap");

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
}));

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

(tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null)));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__46516 = arguments.length;
switch (G__46516) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2);

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46683 = arguments.length;
var i__4819__auto___46684 = (0);
while(true){
if((i__4819__auto___46684 < len__4818__auto___46683)){
args__4824__auto__.push((arguments[i__4819__auto___46684]));

var G__46685 = (i__4819__auto___46684 + (1));
i__4819__auto___46684 = G__46685;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__46686 = cljs.core.nnext(in$);
var G__46687 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__46686;
out = G__46687;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq46523){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46523));
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46694 = arguments.length;
var i__4819__auto___46695 = (0);
while(true){
if((i__4819__auto___46695 < len__4818__auto___46694)){
args__4824__auto__.push((arguments[i__4819__auto___46695]));

var G__46696 = (i__4819__auto___46695 + (1));
i__4819__auto___46695 = G__46696;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__46698 = cljs.core.nnext(in$);
var G__46699 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__46698;
out = G__46699;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq46531){
var G__46532 = cljs.core.first(seq46531);
var seq46531__$1 = cljs.core.next(seq46531);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46532,seq46531__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46701 = arguments.length;
var i__4819__auto___46702 = (0);
while(true){
if((i__4819__auto___46702 < len__4818__auto___46701)){
args__4824__auto__.push((arguments[i__4819__auto___46702]));

var G__46703 = (i__4819__auto___46702 + (1));
i__4819__auto___46702 = G__46703;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__46704 = cljs.core.nnext(in$);
var G__46705 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__46704;
out = G__46705;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq46538){
var G__46539 = cljs.core.first(seq46538);
var seq46538__$1 = cljs.core.next(seq46538);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46539,seq46538__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46707 = arguments.length;
var i__4819__auto___46708 = (0);
while(true){
if((i__4819__auto___46708 < len__4818__auto___46707)){
args__4824__auto__.push((arguments[i__4819__auto___46708]));

var G__46709 = (i__4819__auto___46708 + (1));
i__4819__auto___46708 = G__46709;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__46710 = cljs.core.nnext(in$);
var G__46711 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__46710;
out = G__46711;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq46546){
var G__46547 = cljs.core.first(seq46546);
var seq46546__$1 = cljs.core.next(seq46546);
var G__46548 = cljs.core.first(seq46546__$1);
var seq46546__$2 = cljs.core.next(seq46546__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46547,G__46548,seq46546__$2);
}));


//# sourceMappingURL=tailrecursion.priority_map.js.map
