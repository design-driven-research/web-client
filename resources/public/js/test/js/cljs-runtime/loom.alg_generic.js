goog.provide('loom.alg_generic');
/**
 * Using a map of nodes-to-preds, traces a node's family tree back to the
 *   source. Cycles are not accounted for.
 */
loom.alg_generic.trace_path = (function loom$alg_generic$trace_path(preds,node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(preds,node));
});
/**
 * Returns a lazy seq of all non-looping path vectors starting with
 *   [<start-node>]
 */
loom.alg_generic.paths = (function loom$alg_generic$paths(preds,path){
var this_node = cljs.core.peek(path);
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__41074_SHARP_){
var G__41075 = preds;
var G__41076 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__41074_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__41075,G__41076) : loom.alg_generic.paths.call(null,G__41075,G__41076));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41073_SHARP_){
return cljs.core.not_any_QMARK_((function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__41073_SHARP_], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
}),(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41083_SHARP_){
var G__41093 = cljs.core.peek(p1__41083_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__41093) : preds.call(null,G__41093));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__41094){
var vec__41095 = p__41094;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41095,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41095,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__41098 = p;
var G__41099 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__41098,G__41099) : span.call(null,G__41098,G__41099));
})(),n));
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,preds);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of nodes.
 */
loom.alg_generic.pre_traverse = (function loom$alg_generic$pre_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41458 = arguments.length;
var i__4819__auto___41460 = (0);
while(true){
if((i__4819__auto___41460 < len__4818__auto___41458)){
args__4824__auto__.push((arguments[i__4819__auto___41460]));

var G__41474 = (i__4819__auto___41460 + (1));
i__4819__auto___41460 = G__41474;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41103){
var map__41104 = p__41103;
var map__41104__$1 = cljs.core.__destructure_map(map__41104);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41104__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(stack,seen__$1){
var temp__5753__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5753__auto__)){
var node = temp__5753__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
}),null,null));
}
} else {
return null;
}
});
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
}));

(loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq41100){
var G__41101 = cljs.core.first(seq41100);
var seq41100__$1 = cljs.core.next(seq41100);
var G__41102 = cljs.core.first(seq41100__$1);
var seq41100__$2 = cljs.core.next(seq41100__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41101,G__41102,seq41100__$2);
}));

/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41509 = arguments.length;
var i__4819__auto___41510 = (0);
while(true){
if((i__4819__auto___41510 < len__4818__auto___41509)){
args__4824__auto__.push((arguments[i__4819__auto___41510]));

var G__41511 = (i__4819__auto___41510 + (1));
i__4819__auto___41510 = G__41511;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41108){
var map__41109 = p__41108;
var map__41109__$1 = cljs.core.__destructure_map(map__41109);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41109__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5751__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__41109,map__41109__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__41109,map__41109__$1,seen))
,null,null)));
} else {
var temp__5753__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__41526 = successors__$1;
var G__41527 = parent;
var G__41528 = cljs.core.peek(nbrstack);
var G__41529 = cljs.core.pop(stack);
var G__41530 = cljs.core.pop(nbrstack);
var G__41531 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__41526;
start__$1 = G__41527;
nbrs = G__41528;
stack = G__41529;
nbrstack = G__41530;
seen__$1 = G__41531;
continue;
} else {
return null;
}
}
break;
}
});
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
}));

(loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq41105){
var G__41106 = cljs.core.first(seq41105);
var seq41105__$1 = cljs.core.next(seq41105);
var G__41107 = cljs.core.first(seq41105__$1);
var seq41105__$2 = cljs.core.next(seq41105__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41106,G__41107,seq41105__$2);
}));

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41532 = arguments.length;
var i__4819__auto___41533 = (0);
while(true){
if((i__4819__auto___41533 < len__4818__auto___41532)){
args__4824__auto__.push((arguments[i__4819__auto___41533]));

var G__41534 = (i__4819__auto___41533 + (1));
i__4819__auto___41533 = G__41534;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41113){
var map__41114 = p__41113;
var map__41114__$1 = cljs.core.__destructure_map(map__41114);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41114__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41114__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var preds = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span(preds),seen__$1], null);
} else {
return loom.alg_generic.preds__GT_span(preds);
}
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var temp__5751__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v))));
if(cljs.core.truth_(temp__5751__auto__)){
var u = temp__5751__auto__;
var G__41555 = seen__$2;
var G__41556 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__41557 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__41555;
preds = G__41556;
stack = G__41557;
continue;
} else {
var G__41560 = seen__$2;
var G__41561 = preds;
var G__41562 = cljs.core.pop(stack);
seen__$1 = G__41560;
preds = G__41561;
stack = G__41562;
continue;
}
}
break;
}
}));

(loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq41110){
var G__41111 = cljs.core.first(seq41110);
var seq41110__$1 = cljs.core.next(seq41110);
var G__41112 = cljs.core.first(seq41110__$1);
var seq41110__$2 = cljs.core.next(seq41110__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41111,G__41112,seq41110__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41566 = arguments.length;
var i__4819__auto___41567 = (0);
while(true){
if((i__4819__auto___41567 < len__4818__auto___41566)){
args__4824__auto__.push((arguments[i__4819__auto___41567]));

var G__41569 = (i__4819__auto___41567 + (1));
i__4819__auto___41567 = G__41569;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41118){
var map__41119 = p__41118;
var map__41119__$1 = cljs.core.__destructure_map(map__41119);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41119__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41119__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var result = cljs.core.PersistentVector.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,seen__$1], null);
} else {
return result;
}
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v)));
if(cljs.core.empty_QMARK_(nbrs)){
var G__41576 = seen__$2;
var G__41577 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__41578 = cljs.core.pop(stack);
seen__$1 = G__41576;
result = G__41577;
stack = G__41578;
continue;
} else {
var G__41579 = seen__$2;
var G__41580 = result;
var G__41581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__41579;
result = G__41580;
stack = G__41581;
continue;
}
}
break;
}
}));

(loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq41115){
var G__41116 = cljs.core.first(seq41115);
var seq41115__$1 = cljs.core.next(seq41115);
var G__41117 = cljs.core.first(seq41115__$1);
var seq41115__$2 = cljs.core.next(seq41115__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41116,G__41117,seq41115__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41586 = arguments.length;
var i__4819__auto___41587 = (0);
while(true){
if((i__4819__auto___41587 < len__4818__auto___41586)){
args__4824__auto__.push((arguments[i__4819__auto___41587]));

var G__41588 = (i__4819__auto___41587 + (1));
i__4819__auto___41587 = G__41588;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41123){
var map__41124 = p__41123;
var map__41124__$1 = cljs.core.__destructure_map(map__41124);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41124__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41124__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seen], null);
} else {
return null;
}
} else {
var start__$1 = start;
var nbrs = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start__$1) : successors.call(null,start__$1));
var stack = cljs.core.PersistentVector.EMPTY;
var nbrstack = cljs.core.PersistentVector.EMPTY;
var seen__$1 = seen;
var edges = cljs.core.List.EMPTY;
while(true){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
var temp__5751__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
var G__41597 = start__$1;
var G__41598 = cljs.core.next(nbrs);
var G__41599 = stack;
var G__41600 = nbrstack;
var G__41601 = seen__$2;
var G__41602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__41597;
nbrs = G__41598;
stack = G__41599;
nbrstack = G__41600;
seen__$1 = G__41601;
edges = G__41602;
continue;
} else {
var G__41603 = nbr;
var G__41604 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__41605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__41606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__41607 = seen__$2;
var G__41608 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__41603;
nbrs = G__41604;
stack = G__41605;
nbrstack = G__41606;
seen__$1 = G__41607;
edges = G__41608;
continue;
}
} else {
var temp__5751__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5751__auto____$1)){
var parent = temp__5751__auto____$1;
var G__41609 = parent;
var G__41610 = cljs.core.peek(nbrstack);
var G__41611 = cljs.core.pop(stack);
var G__41612 = cljs.core.pop(nbrstack);
var G__41613 = seen__$2;
var G__41614 = edges;
start__$1 = G__41609;
nbrs = G__41610;
stack = G__41611;
nbrstack = G__41612;
seen__$1 = G__41613;
edges = G__41614;
continue;
} else {
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,seen__$2], null);
} else {
return edges;
}
}
}
break;
}
}
}));

(loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq41120){
var G__41121 = cljs.core.first(seq41120);
var seq41120__$1 = cljs.core.next(seq41120);
var G__41122 = cljs.core.first(seq41120__$1);
var seq41120__$2 = cljs.core.next(seq41120__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41121,G__41122,seq41120__$2);
}));

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__41126 = arguments.length;
switch (G__41126) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = (function (successors,start){
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
}));

(loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
var seen__$1 = seen;
var explored__$1 = explored;
var result = cljs.core.List.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
return result;
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var us = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(explored__$1,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v)));
if(cljs.core.seq(us)){
if(cljs.core.truth_(cljs.core.some(seen__$2,us))){
return null;
} else {
var G__41625 = seen__$2;
var G__41626 = explored__$1;
var G__41627 = result;
var G__41628 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__41625;
explored__$1 = G__41626;
result = G__41627;
stack = G__41628;
continue;
}
} else {
var G__41629 = seen__$2;
var G__41630 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__41631 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__41632 = cljs.core.pop(stack);
seen__$1 = G__41629;
explored__$1 = G__41630;
result = G__41631;
stack = G__41632;
continue;
}
}
break;
}
}));

(loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4);

/**
 * Traverses a graph breadth-first from start, successors being a
 *   function that returns adjacent nodes. When :f is provided, returns a
 *   lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg_generic.bf_traverse = (function loom$alg_generic$bf_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41634 = arguments.length;
var i__4819__auto___41635 = (0);
while(true){
if((i__4819__auto___41635 < len__4818__auto___41634)){
args__4824__auto__.push((arguments[i__4819__auto___41635]));

var G__41639 = (i__4819__auto___41635 + (1));
i__4819__auto___41635 = G__41639;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41134){
var map__41135 = p__41134;
var map__41135__$1 = cljs.core.__destructure_map(map__41135);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41135__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41135__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41135__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4212__auto__ = f;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (n,p,d){
return n;
});
}
})();
var nbr_pred = (function (){var or__4212__auto__ = when;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = (function loom$alg_generic$step(queue,preds){
var temp__5753__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__41146 = temp__5753__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,(function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41128_SHARP_){
var G__41149 = p1__41128_SHARP_;
var G__41150 = node;
var G__41151 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__41149,G__41150,G__41151) : nbr_pred.call(null,G__41149,G__41150,G__41151));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41127_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__41127_SHARP_);
}),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4611__auto__ = (function loom$alg_generic$step_$_iter__41152(s__41153){
return (new cljs.core.LazySeq(null,(function (){
var s__41153__$1 = s__41153;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41153__$1);
if(temp__5753__auto____$1){
var s__41153__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41153__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41153__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41155 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41154 = (0);
while(true){
if((i__41154 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__41154);
cljs.core.chunk_append(b__41155,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__41644 = (i__41154 + (1));
i__41154 = G__41644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41155),loom$alg_generic$step_$_iter__41152(cljs.core.chunk_rest(s__41153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41155),null);
}
} else {
var nbr = cljs.core.first(s__41153__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__41152(cljs.core.rest(s__41153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__41129_SHARP_,p2__41130_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41129_SHARP_,p2__41130_SHARP_,node);
}),preds,nbrs));
}),null,null)));
} else {
return null;
}
});
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4611__auto__ = (function loom$alg_generic$iter__41156(s__41157){
return (new cljs.core.LazySeq(null,(function (){
var s__41157__$1 = s__41157;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41157__$1);
if(temp__5753__auto__){
var s__41157__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41157__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41157__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41159 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41158 = (0);
while(true){
if((i__41158 < size__4610__auto__)){
var s = cljs.core._nth(c__4609__auto__,i__41158);
cljs.core.chunk_append(b__41159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__41645 = (i__41158 + (1));
i__41158 = G__41645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41159),loom$alg_generic$iter__41156(cljs.core.chunk_rest(s__41157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41159),null);
}
} else {
var s = cljs.core.first(s__41157__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__41156(cljs.core.rest(s__41157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(seen);
})())));
}));

(loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq41131){
var G__41132 = cljs.core.first(seq41131);
var seq41131__$1 = cljs.core.next(seq41131);
var G__41133 = cljs.core.first(seq41131__$1);
var seq41131__$2 = cljs.core.next(seq41131__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41132,G__41133,seq41131__$2);
}));

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41647 = arguments.length;
var i__4819__auto___41649 = (0);
while(true){
if((i__4819__auto___41649 < len__4818__auto___41647)){
args__4824__auto__.push((arguments[i__4819__auto___41649]));

var G__41650 = (i__4819__auto___41649 + (1));
i__4819__auto___41649 = G__41650;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41163){
var map__41164 = p__41163;
var map__41164__$1 = cljs.core.__destructure_map(map__41164);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41164__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
}));

(loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq41160){
var G__41161 = cljs.core.first(seq41160);
var seq41160__$1 = cljs.core.next(seq41160);
var G__41162 = cljs.core.first(seq41160__$1);
var seq41160__$2 = cljs.core.next(seq41160__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41161,G__41162,seq41160__$2);
}));

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41663 = arguments.length;
var i__4819__auto___41664 = (0);
while(true){
if((i__4819__auto___41664 < len__4818__auto___41663)){
args__4824__auto__.push((arguments[i__4819__auto___41664]));

var G__41665 = (i__4819__auto___41664 + (1));
i__4819__auto___41664 = G__41665;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__41169){
var map__41170 = p__41169;
var map__41170__$1 = cljs.core.__destructure_map(map__41170);
var opts = map__41170__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5753__auto__ = cljs.core.some((function (p__41171){
var vec__41172 = p__41171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41172,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41172,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41172,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__5753__auto__)){
var preds = temp__5753__auto__;
return cljs.core.reverse(loom.alg_generic.trace_path(preds,end));
} else {
return null;
}
}));

(loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq41165){
var G__41166 = cljs.core.first(seq41165);
var seq41165__$1 = cljs.core.next(seq41165);
var G__41167 = cljs.core.first(seq41165__$1);
var seq41165__$2 = cljs.core.next(seq41165__$1);
var G__41168 = cljs.core.first(seq41165__$2);
var seq41165__$3 = cljs.core.next(seq41165__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41166,G__41167,G__41168,seq41165__$3);
}));

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__41675 = m2;
var G__41676 = m1;
m1 = G__41675;
m2 = G__41676;
continue;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,m2),cljs.core.keys(m1));
}
break;
}
});
loom.alg_generic.bf_path_bi = (function loom$alg_generic$bf_path_bi(outgoing,predecessors,start,end){
throw (new Error("Unsupported operation `bf-path-bi`"));
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__4611__auto__ = (function loom$alg_generic$reverse_edges_$_iter__41176(s__41177){
return (new cljs.core.LazySeq(null,(function (){
var s__41177__$1 = s__41177;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41177__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var node = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__41177__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__41176_$_iter__41178(s__41179){
return (new cljs.core.LazySeq(null,((function (s__41177__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__41179__$1 = s__41179;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41179__$1);
if(temp__5753__auto____$1){
var s__41179__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41179__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41179__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41181 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41180 = (0);
while(true){
if((i__41180 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__41180);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__41181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__41692 = (i__41180 + (1));
i__41180 = G__41692;
continue;
} else {
var G__41696 = (i__41180 + (1));
i__41180 = G__41696;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41181),loom$alg_generic$reverse_edges_$_iter__41176_$_iter__41178(cljs.core.chunk_rest(s__41179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41181),null);
}
} else {
var nbr = cljs.core.first(s__41179__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__41176_$_iter__41178(cljs.core.rest(s__41179__$2)));
} else {
var G__41698 = cljs.core.rest(s__41179__$2);
s__41179__$1 = G__41698;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__41177__$1,node,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__41177__$1,node,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$alg_generic$reverse_edges_$_iter__41176(cljs.core.rest(s__41177__$1)));
} else {
var G__41701 = cljs.core.rest(s__41177__$1);
s__41177__$1 = G__41701;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__4611__auto__ = (function loom$alg_generic$conj_paths_$_iter__41182(s__41183){
return (new cljs.core.LazySeq(null,(function (){
var s__41183__$1 = s__41183;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41183__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__41183__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__41182_$_iter__41184(s__41185){
return (new cljs.core.LazySeq(null,((function (s__41183__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__41185__$1 = s__41185;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41185__$1);
if(temp__5753__auto____$1){
var xs__6308__auto____$1 = temp__5753__auto____$1;
var from = cljs.core.first(xs__6308__auto____$1);
var iterys__4607__auto__ = ((function (s__41185__$1,s__41183__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__41182_$_iter__41184_$_iter__41186(s__41187){
return (new cljs.core.LazySeq(null,((function (s__41185__$1,s__41183__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__41187__$1 = s__41187;
while(true){
var temp__5753__auto____$2 = cljs.core.seq(s__41187__$1);
if(temp__5753__auto____$2){
var s__41187__$2 = temp__5753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__41187__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41187__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41189 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41188 = (0);
while(true){
if((i__41188 < size__4610__auto__)){
var to = cljs.core._nth(c__4609__auto__,i__41188);
cljs.core.chunk_append(b__41189,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__41703 = (i__41188 + (1));
i__41188 = G__41703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41189),loom$alg_generic$conj_paths_$_iter__41182_$_iter__41184_$_iter__41186(cljs.core.chunk_rest(s__41187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41189),null);
}
} else {
var to = cljs.core.first(s__41187__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__41182_$_iter__41184_$_iter__41186(cljs.core.rest(s__41187__$2)));
}
} else {
return null;
}
break;
}
});})(s__41185__$1,s__41183__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__41185__$1,s__41183__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$alg_generic$conj_paths_$_iter__41182_$_iter__41184(cljs.core.rest(s__41185__$1)));
} else {
var G__41706 = cljs.core.rest(s__41185__$1);
s__41185__$1 = G__41706;
continue;
}
} else {
return null;
}
break;
}
});})(s__41183__$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__41183__$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$alg_generic$conj_paths_$_iter__41182(cljs.core.rest(s__41183__$1)));
} else {
var G__41709 = cljs.core.rest(s__41183__$1);
s__41183__$1 = G__41709;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,predecessors);
var overlaps = (function (coll,q){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41190_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__41190_SHARP_);
}),q));
});
var map_set_pairs = (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (map__$1,p__41191){
var vec__41192 = p__41191;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192,(1),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
}),cljs.core.transient$(map),pairs));
});
var outgoing = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var incoming = cljs.core.PersistentArrayMap.createAsIfByAssoc([end,null]);
var q1 = (new cljs.core.List(null,start,null,(1),null));
var q2 = (new cljs.core.List(null,end,null,(1),null));
while(true){
if(((cljs.core.seq(q1)) && (cljs.core.seq(q2)))){
if((cljs.core.count(q1) <= cljs.core.count(q2))){
var pairs = find_succs(q1,outgoing);
var outgoing__$1 = map_set_pairs(outgoing,pairs);
var q1__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5751__auto__ = overlaps(incoming,q1__$1);
if(temp__5751__auto__){
var all = temp__5751__auto__;
return loom.alg_generic.conj_paths(outgoing__$1,incoming,cljs.core.set(all));
} else {
var G__41716 = outgoing__$1;
var G__41717 = incoming;
var G__41718 = q1__$1;
var G__41719 = q2;
outgoing = G__41716;
incoming = G__41717;
q1 = G__41718;
q2 = G__41719;
continue;
}
} else {
var pairs = find_preds(q2,incoming);
var incoming__$1 = map_set_pairs(incoming,pairs);
var q2__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5751__auto__ = overlaps(outgoing,q2__$1);
if(temp__5751__auto__){
var all = temp__5751__auto__;
return loom.alg_generic.conj_paths(outgoing,incoming__$1,cljs.core.set(all));
} else {
var G__41720 = outgoing;
var G__41721 = incoming__$1;
var G__41722 = q1;
var G__41723 = q2__$1;
outgoing = G__41720;
incoming = G__41721;
q1 = G__41722;
q2 = G__41723;
continue;
}
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in the
 *   format {node [distance predecessor]}. When f is provided, returns
 *   a lazy-seq of (f node state) for each node
 */
loom.alg_generic.dijkstra_traverse = (function loom$alg_generic$dijkstra_traverse(var_args){
var G__41198 = arguments.length;
switch (G__41198) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(successors,dist,start,cljs.core.vector);
}));

(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__41210){
var vec__41211 = p__41210;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41211,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41211,(1),null);
var temp__5753__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__41214 = temp__5753__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41214,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41214,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41214,(2),null);
var fpq = vec__41214;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,(function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41217,v){
var vec__41218 = p__41217;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218,(1),null);
var dist_suv = (dist_su + (dist.cljs$core$IFn$_invoke$arity$2 ? dist.cljs$core$IFn$_invoke$arity$2(u,v) : dist.call(null,u,v)));
var dist_sv = cljs.core.first((state__$1.cljs$core$IFn$_invoke$arity$1 ? state__$1.cljs$core$IFn$_invoke$arity$1(v) : state__$1.call(null,v)));
if(cljs.core.truth_((function (){var and__4210__auto__ = dist_sv;
if(cljs.core.truth_(and__4210__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash(v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash(v),v], null))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
}),null,null)));
} else {
return null;
}
});
return step(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)]),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash(start),start], null)], 0))], null));
}));

(loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4);

/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__41221){
var vec__41222 = p__41221;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41222,(0),null);
var vec__41225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41222,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41225,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41225,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc_in(span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n], null),d);
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.second(cljs.core.last(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start))));
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a vector: [path distance]
 */
loom.alg_generic.dijkstra_path_dist = (function loom$alg_generic$dijkstra_path_dist(successors,dist,start,end){
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41228){
var vec__41229 = p__41228;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41229,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41229,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__41232 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41232,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41232,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse(loom.alg_generic.trace_path(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.second,end_state),end)),cljs.core.first((end_state.cljs$core$IFn$_invoke$arity$1 ? end_state.cljs$core$IFn$_invoke$arity$1(end) : end_state.call(null,end)))], null);
} else {
return null;
}
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2)
 */
loom.alg_generic.dijkstra_path = (function loom$alg_generic$dijkstra_path(successors,dist,start,end){
return cljs.core.first(loom.alg_generic.dijkstra_path_dist(successors,dist,start,end));
});
loom.alg_generic.bits_per_long = cljs.core.long$((32));
/**
 * Returns the number of longs required to store bits count bits in a bitmap.
 */
loom.alg_generic.bm_longs = (function loom$alg_generic$bm_longs(bits){
return cljs.core.long$(Math.ceil((bits / loom.alg_generic.bits_per_long)));
});
/**
 * Create new empty bitmap.
 */
loom.alg_generic.bm_new = (function loom$alg_generic$bm_new(){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((1));
});
loom.alg_generic.bm_copy = (function loom$alg_generic$bm_copy(bm,size){
return bm.slice((0),size);
});
/**
 * Set boolean state of bit in 'bitmap at 'idx to true.
 */
loom.alg_generic.bm_set = (function loom$alg_generic$bm_set(bitmap,idx){
var size = (function (){var x__4295__auto__ = cljs.core.count(bitmap);
var y__4296__auto__ = loom.alg_generic.bm_longs((idx + (1)));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var new_bitmap = loom.alg_generic.bm_copy(bitmap,size);
var chunk = cljs.core.quot(idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod(idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (new_bitmap[chunk]);
var new_value = (value | mask);
(new_bitmap[chunk] = new_value);

return new_bitmap;
});
/**
 * Get boolean state of bit in 'bitmap at 'idx.
 */
loom.alg_generic.bm_get = (function loom$alg_generic$bm_get(bitmap,idx){
if((loom.alg_generic.bm_longs((idx + (1))) <= cljs.core.count(bitmap))){
var chunk = cljs.core.quot(idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod(idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (bitmap[chunk]);
var masked_value = (value & mask);
return (!((masked_value === (0))));
} else {
return null;
}
});
/**
 * Logically OR 'bitmaps together.
 */
loom.alg_generic.bm_or = (function loom$alg_generic$bm_or(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41784 = arguments.length;
var i__4819__auto___41785 = (0);
while(true){
if((i__4819__auto___41785 < len__4818__auto___41784)){
args__4824__auto__.push((arguments[i__4819__auto___41785]));

var G__41786 = (i__4819__auto___41785 + (1));
i__4819__auto___41785 = G__41786;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_(bitmaps)){
return loom.alg_generic.bm_new();
} else {
var size = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,bitmaps));
var new_bitmap = loom.alg_generic.bm_copy(cljs.core.first(bitmaps),size);
var seq__41239_41788 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__41246_41789 = null;
var count__41247_41790 = (0);
var i__41248_41791 = (0);
while(true){
if((i__41248_41791 < count__41247_41790)){
var bitmap_41792 = chunk__41246_41789.cljs$core$IIndexed$_nth$arity$2(null,i__41248_41791);
var seq__41249_41797 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_41792));
var chunk__41251_41798 = null;
var count__41252_41799 = (0);
var i__41253_41800 = (0);
while(true){
if((i__41253_41800 < count__41252_41799)){
var vec__41285_41801 = chunk__41251_41798.cljs$core$IIndexed$_nth$arity$2(null,i__41253_41800);
var idx_41802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41285_41801,(0),null);
var value_41803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41285_41801,(1),null);
var masked_value_41804 = (value_41803 | (new_bitmap[idx_41802]));
(new_bitmap[idx_41802] = masked_value_41804);


var G__41805 = seq__41249_41797;
var G__41806 = chunk__41251_41798;
var G__41807 = count__41252_41799;
var G__41808 = (i__41253_41800 + (1));
seq__41249_41797 = G__41805;
chunk__41251_41798 = G__41806;
count__41252_41799 = G__41807;
i__41253_41800 = G__41808;
continue;
} else {
var temp__5753__auto___41809 = cljs.core.seq(seq__41249_41797);
if(temp__5753__auto___41809){
var seq__41249_41810__$1 = temp__5753__auto___41809;
if(cljs.core.chunked_seq_QMARK_(seq__41249_41810__$1)){
var c__4638__auto___41811 = cljs.core.chunk_first(seq__41249_41810__$1);
var G__41812 = cljs.core.chunk_rest(seq__41249_41810__$1);
var G__41813 = c__4638__auto___41811;
var G__41814 = cljs.core.count(c__4638__auto___41811);
var G__41815 = (0);
seq__41249_41797 = G__41812;
chunk__41251_41798 = G__41813;
count__41252_41799 = G__41814;
i__41253_41800 = G__41815;
continue;
} else {
var vec__41288_41816 = cljs.core.first(seq__41249_41810__$1);
var idx_41817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41288_41816,(0),null);
var value_41818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41288_41816,(1),null);
var masked_value_41819 = (value_41818 | (new_bitmap[idx_41817]));
(new_bitmap[idx_41817] = masked_value_41819);


var G__41820 = cljs.core.next(seq__41249_41810__$1);
var G__41821 = null;
var G__41822 = (0);
var G__41823 = (0);
seq__41249_41797 = G__41820;
chunk__41251_41798 = G__41821;
count__41252_41799 = G__41822;
i__41253_41800 = G__41823;
continue;
}
} else {
}
}
break;
}

var G__41824 = seq__41239_41788;
var G__41825 = chunk__41246_41789;
var G__41826 = count__41247_41790;
var G__41827 = (i__41248_41791 + (1));
seq__41239_41788 = G__41824;
chunk__41246_41789 = G__41825;
count__41247_41790 = G__41826;
i__41248_41791 = G__41827;
continue;
} else {
var temp__5753__auto___41828 = cljs.core.seq(seq__41239_41788);
if(temp__5753__auto___41828){
var seq__41239_41829__$1 = temp__5753__auto___41828;
if(cljs.core.chunked_seq_QMARK_(seq__41239_41829__$1)){
var c__4638__auto___41830 = cljs.core.chunk_first(seq__41239_41829__$1);
var G__41831 = cljs.core.chunk_rest(seq__41239_41829__$1);
var G__41832 = c__4638__auto___41830;
var G__41833 = cljs.core.count(c__4638__auto___41830);
var G__41834 = (0);
seq__41239_41788 = G__41831;
chunk__41246_41789 = G__41832;
count__41247_41790 = G__41833;
i__41248_41791 = G__41834;
continue;
} else {
var bitmap_41835 = cljs.core.first(seq__41239_41829__$1);
var seq__41240_41836 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_41835));
var chunk__41242_41837 = null;
var count__41243_41838 = (0);
var i__41244_41839 = (0);
while(true){
if((i__41244_41839 < count__41243_41838)){
var vec__41297_41840 = chunk__41242_41837.cljs$core$IIndexed$_nth$arity$2(null,i__41244_41839);
var idx_41841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41297_41840,(0),null);
var value_41842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41297_41840,(1),null);
var masked_value_41845 = (value_41842 | (new_bitmap[idx_41841]));
(new_bitmap[idx_41841] = masked_value_41845);


var G__41846 = seq__41240_41836;
var G__41847 = chunk__41242_41837;
var G__41848 = count__41243_41838;
var G__41849 = (i__41244_41839 + (1));
seq__41240_41836 = G__41846;
chunk__41242_41837 = G__41847;
count__41243_41838 = G__41848;
i__41244_41839 = G__41849;
continue;
} else {
var temp__5753__auto___41850__$1 = cljs.core.seq(seq__41240_41836);
if(temp__5753__auto___41850__$1){
var seq__41240_41851__$1 = temp__5753__auto___41850__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41240_41851__$1)){
var c__4638__auto___41852 = cljs.core.chunk_first(seq__41240_41851__$1);
var G__41853 = cljs.core.chunk_rest(seq__41240_41851__$1);
var G__41854 = c__4638__auto___41852;
var G__41855 = cljs.core.count(c__4638__auto___41852);
var G__41856 = (0);
seq__41240_41836 = G__41853;
chunk__41242_41837 = G__41854;
count__41243_41838 = G__41855;
i__41244_41839 = G__41856;
continue;
} else {
var vec__41300_41857 = cljs.core.first(seq__41240_41851__$1);
var idx_41858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41300_41857,(0),null);
var value_41859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41300_41857,(1),null);
var masked_value_41860 = (value_41859 | (new_bitmap[idx_41858]));
(new_bitmap[idx_41858] = masked_value_41860);


var G__41864 = cljs.core.next(seq__41240_41851__$1);
var G__41865 = null;
var G__41866 = (0);
var G__41867 = (0);
seq__41240_41836 = G__41864;
chunk__41242_41837 = G__41865;
count__41243_41838 = G__41866;
i__41244_41839 = G__41867;
continue;
}
} else {
}
}
break;
}

var G__41869 = cljs.core.next(seq__41239_41829__$1);
var G__41870 = null;
var G__41871 = (0);
var G__41872 = (0);
seq__41239_41788 = G__41869;
chunk__41246_41789 = G__41870;
count__41247_41790 = G__41871;
i__41248_41791 = G__41872;
continue;
}
} else {
}
}
break;
}

return new_bitmap;
}
}));

(loom.alg_generic.bm_or.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq41238){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41238));
}));

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4611__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__41303(s__41304){
return (new cljs.core.LazySeq(null,(function (){
var s__41304__$1 = s__41304;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41304__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var chunk = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__41304__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__41303_$_iter__41305(s__41306){
return (new cljs.core.LazySeq(null,((function (s__41304__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__41306__$1 = s__41306;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41306__$1);
if(temp__5753__auto____$1){
var s__41306__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41306__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41306__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41308 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41307 = (0);
while(true){
if((i__41307 < size__4610__auto__)){
var offset = cljs.core._nth(c__4609__auto__,i__41307);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__41308,idx);

var G__41879 = (i__41307 + (1));
i__41307 = G__41879;
continue;
} else {
var G__41880 = (i__41307 + (1));
i__41307 = G__41880;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41308),loom$alg_generic$bm_get_indicies_$_iter__41303_$_iter__41305(cljs.core.chunk_rest(s__41306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41308),null);
}
} else {
var offset = cljs.core.first(s__41306__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__41303_$_iter__41305(cljs.core.rest(s__41306__$2)));
} else {
var G__41881 = cljs.core.rest(s__41306__$2);
s__41306__$1 = G__41881;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__41304__$1,chunk,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__41304__$1,chunk,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$alg_generic$bm_get_indicies_$_iter__41303(cljs.core.rest(s__41304__$1)));
} else {
var G__41887 = cljs.core.rest(s__41304__$1);
s__41304__$1 = G__41887;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(bitmap)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
loom.alg_generic.Ancestry = (function (node__GT_idx,idx__GT_node,bitmaps,__meta,__extmap,__hash){
this.node__GT_idx = node__GT_idx;
this.idx__GT_node = idx__GT_node;
this.bitmaps = bitmaps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k41310,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__41314 = k41310;
var G__41314__$1 = (((G__41314 instanceof cljs.core.Keyword))?G__41314.fqn:null);
switch (G__41314__$1) {
case "node->idx":
return self__.node__GT_idx;

break;
case "idx->node":
return self__.idx__GT_node;

break;
case "bitmaps":
return self__.bitmaps;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41310,else__4464__auto__);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__41325){
var vec__41326 = p__41325;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41326,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41326,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41309){
var self__ = this;
var G__41309__$1 = this;
return (new cljs.core.RecordIter((0),G__41309__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41311,other41312){
var self__ = this;
var this41311__$1 = this;
return (((!((other41312 == null)))) && ((((this41311__$1.constructor === other41312.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41311__$1.node__GT_idx,other41312.node__GT_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41311__$1.idx__GT_node,other41312.idx__GT_node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41311__$1.bitmaps,other41312.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41311__$1.__extmap,other41312.__extmap)))))))))));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k41310){
var self__ = this;
var this__4468__auto____$1 = this;
var G__41351 = k41310;
var G__41351__$1 = (((G__41351 instanceof cljs.core.Keyword))?G__41351.fqn:null);
switch (G__41351__$1) {
case "node->idx":
case "idx->node":
case "bitmaps":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41310);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__41309){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__41353 = cljs.core.keyword_identical_QMARK_;
var expr__41354 = k__4470__auto__;
if(cljs.core.truth_((pred__41353.cljs$core$IFn$_invoke$arity$2 ? pred__41353.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__41354) : pred__41353.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__41354)))){
return (new loom.alg_generic.Ancestry(G__41309,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41353.cljs$core$IFn$_invoke$arity$2 ? pred__41353.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__41354) : pred__41353.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__41354)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__41309,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41353.cljs$core$IFn$_invoke$arity$2 ? pred__41353.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__41354) : pred__41353.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__41354)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__41309,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__41309),null));
}
}
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__41309){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__41309,self__.__extmap,self__.__hash));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
}));

(loom.alg_generic.Ancestry.cljs$lang$type = true);

(loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.alg-generic/Ancestry",null,(1),null));
}));

(loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.alg-generic/Ancestry");
}));

/**
 * Positional factory function for loom.alg-generic/Ancestry.
 */
loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

/**
 * Factory function for loom.alg-generic/Ancestry, taking a map of keywords to field values.
 */
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__41313){
var extmap__4501__auto__ = (function (){var G__41368 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41313,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__41313)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41368);
} else {
return G__41368;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__41313),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__41313),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__41313),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Create a new, empty Ancestry cache.
 */
loom.alg_generic.ancestry_new = (function loom$alg_generic$ancestry_new(){
return loom.alg_generic.__GT_Ancestry(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Finds if a 'node is contained in the 'ancestry cache.
 */
loom.alg_generic.ancestry_contains_QMARK_ = (function loom$alg_generic$ancestry_contains_QMARK_(ancestry,node){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41942 = arguments.length;
var i__4819__auto___41943 = (0);
while(true){
if((i__4819__auto___41943 < len__4818__auto___41942)){
args__4824__auto__.push((arguments[i__4819__auto___41943]));

var G__41946 = (i__4819__auto___41943 + (1));
i__4819__auto___41943 = G__41946;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(loom.alg_generic.ancestry_contains_QMARK_(ancestry,node)){
return ancestry;
} else {
var map__41372 = ancestry;
var map__41372__$1 = cljs.core.__destructure_map(map__41372);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41372__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41372__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41372__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var nid = cljs.core.count(node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx__GT_node,nid,node);
var pidxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_(pidxs))?loom.alg_generic.bm_new():cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.bm_or,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry(node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
}));

(loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq41369){
var G__41370 = cljs.core.first(seq41369);
var seq41369__$1 = cljs.core.next(seq41369);
var G__41371 = cljs.core.first(seq41369__$1);
var seq41369__$2 = cljs.core.next(seq41369__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41370,G__41371,seq41369__$2);
}));

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__41373 = ancestry;
var map__41373__$1 = cljs.core.__destructure_map(map__41373);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41373__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41373__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(childer) : node__GT_idx.call(null,childer));
var pidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(parenter) : node__GT_idx.call(null,parenter));
return cljs.core.boolean$((cljs.core.truth_((function (){var and__4210__auto__ = cidx;
if(cljs.core.truth_(and__4210__auto__)){
return pidx;
} else {
return and__4210__auto__;
}
})())?loom.alg_generic.bm_get(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__41380 = ancestry;
var map__41380__$1 = cljs.core.__destructure_map(map__41380);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41380__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41380__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41380__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(child) : node__GT_idx.call(null,child));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(idx__GT_node,loom.alg_generic.bm_get_indicies(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=loom.alg_generic.js.map
