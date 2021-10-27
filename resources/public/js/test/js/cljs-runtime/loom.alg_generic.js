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
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__41456_SHARP_){
var G__41470 = preds;
var G__41471 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__41456_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__41470,G__41471) : loom.alg_generic.paths.call(null,G__41470,G__41471));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41453_SHARP_){
return cljs.core.not_any_QMARK_((function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__41453_SHARP_], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
}),(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41472_SHARP_){
var G__41473 = cljs.core.peek(p1__41472_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__41473) : preds.call(null,G__41473));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__41474){
var vec__41475 = p__41474;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41475,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41475,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__41478 = p;
var G__41479 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__41478,G__41479) : span.call(null,G__41478,G__41479));
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
var len__4818__auto___42445 = arguments.length;
var i__4819__auto___42447 = (0);
while(true){
if((i__4819__auto___42447 < len__4818__auto___42445)){
args__4824__auto__.push((arguments[i__4819__auto___42447]));

var G__42448 = (i__4819__auto___42447 + (1));
i__4819__auto___42447 = G__42448;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41483){
var map__41484 = p__41483;
var map__41484__$1 = cljs.core.__destructure_map(map__41484);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41484__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
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
(loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq41480){
var G__41481 = cljs.core.first(seq41480);
var seq41480__$1 = cljs.core.next(seq41480);
var G__41482 = cljs.core.first(seq41480__$1);
var seq41480__$2 = cljs.core.next(seq41480__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41481,G__41482,seq41480__$2);
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
var len__4818__auto___42461 = arguments.length;
var i__4819__auto___42462 = (0);
while(true){
if((i__4819__auto___42462 < len__4818__auto___42461)){
args__4824__auto__.push((arguments[i__4819__auto___42462]));

var G__42464 = (i__4819__auto___42462 + (1));
i__4819__auto___42462 = G__42464;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41488){
var map__41489 = p__41488;
var map__41489__$1 = cljs.core.__destructure_map(map__41489);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41489__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5751__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__41489,map__41489__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__41489,map__41489__$1,seen))
,null,null)));
} else {
var temp__5753__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__42487 = successors__$1;
var G__42488 = parent;
var G__42489 = cljs.core.peek(nbrstack);
var G__42490 = cljs.core.pop(stack);
var G__42491 = cljs.core.pop(nbrstack);
var G__42492 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__42487;
start__$1 = G__42488;
nbrs = G__42489;
stack = G__42490;
nbrstack = G__42491;
seen__$1 = G__42492;
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
(loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq41485){
var G__41486 = cljs.core.first(seq41485);
var seq41485__$1 = cljs.core.next(seq41485);
var G__41487 = cljs.core.first(seq41485__$1);
var seq41485__$2 = cljs.core.next(seq41485__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41486,G__41487,seq41485__$2);
}));

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42494 = arguments.length;
var i__4819__auto___42495 = (0);
while(true){
if((i__4819__auto___42495 < len__4818__auto___42494)){
args__4824__auto__.push((arguments[i__4819__auto___42495]));

var G__42506 = (i__4819__auto___42495 + (1));
i__4819__auto___42495 = G__42506;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41493){
var map__41494 = p__41493;
var map__41494__$1 = cljs.core.__destructure_map(map__41494);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41494__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41494__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__42522 = seen__$2;
var G__42523 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__42524 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__42522;
preds = G__42523;
stack = G__42524;
continue;
} else {
var G__42525 = seen__$2;
var G__42526 = preds;
var G__42527 = cljs.core.pop(stack);
seen__$1 = G__42525;
preds = G__42526;
stack = G__42527;
continue;
}
}
break;
}
}));

(loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq41490){
var G__41491 = cljs.core.first(seq41490);
var seq41490__$1 = cljs.core.next(seq41490);
var G__41492 = cljs.core.first(seq41490__$1);
var seq41490__$2 = cljs.core.next(seq41490__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41491,G__41492,seq41490__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42545 = arguments.length;
var i__4819__auto___42546 = (0);
while(true){
if((i__4819__auto___42546 < len__4818__auto___42545)){
args__4824__auto__.push((arguments[i__4819__auto___42546]));

var G__42548 = (i__4819__auto___42546 + (1));
i__4819__auto___42546 = G__42548;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41498){
var map__41499 = p__41498;
var map__41499__$1 = cljs.core.__destructure_map(map__41499);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41499__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41499__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__42554 = seen__$2;
var G__42555 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__42556 = cljs.core.pop(stack);
seen__$1 = G__42554;
result = G__42555;
stack = G__42556;
continue;
} else {
var G__42557 = seen__$2;
var G__42558 = result;
var G__42559 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__42557;
result = G__42558;
stack = G__42559;
continue;
}
}
break;
}
}));

(loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq41495){
var G__41496 = cljs.core.first(seq41495);
var seq41495__$1 = cljs.core.next(seq41495);
var G__41497 = cljs.core.first(seq41495__$1);
var seq41495__$2 = cljs.core.next(seq41495__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41496,G__41497,seq41495__$2);
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
var len__4818__auto___42571 = arguments.length;
var i__4819__auto___42572 = (0);
while(true){
if((i__4819__auto___42572 < len__4818__auto___42571)){
args__4824__auto__.push((arguments[i__4819__auto___42572]));

var G__42573 = (i__4819__auto___42572 + (1));
i__4819__auto___42572 = G__42573;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41503){
var map__41504 = p__41503;
var map__41504__$1 = cljs.core.__destructure_map(map__41504);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41504__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__42579 = start__$1;
var G__42580 = cljs.core.next(nbrs);
var G__42581 = stack;
var G__42582 = nbrstack;
var G__42583 = seen__$2;
var G__42584 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__42579;
nbrs = G__42580;
stack = G__42581;
nbrstack = G__42582;
seen__$1 = G__42583;
edges = G__42584;
continue;
} else {
var G__42586 = nbr;
var G__42587 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__42588 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__42589 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__42590 = seen__$2;
var G__42591 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__42586;
nbrs = G__42587;
stack = G__42588;
nbrstack = G__42589;
seen__$1 = G__42590;
edges = G__42591;
continue;
}
} else {
var temp__5751__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5751__auto____$1)){
var parent = temp__5751__auto____$1;
var G__42595 = parent;
var G__42596 = cljs.core.peek(nbrstack);
var G__42597 = cljs.core.pop(stack);
var G__42598 = cljs.core.pop(nbrstack);
var G__42599 = seen__$2;
var G__42600 = edges;
start__$1 = G__42595;
nbrs = G__42596;
stack = G__42597;
nbrstack = G__42598;
seen__$1 = G__42599;
edges = G__42600;
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
(loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq41500){
var G__41501 = cljs.core.first(seq41500);
var seq41500__$1 = cljs.core.next(seq41500);
var G__41502 = cljs.core.first(seq41500__$1);
var seq41500__$2 = cljs.core.next(seq41500__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41501,G__41502,seq41500__$2);
}));

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__41506 = arguments.length;
switch (G__41506) {
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
var G__42647 = seen__$2;
var G__42648 = explored__$1;
var G__42649 = result;
var G__42650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__42647;
explored__$1 = G__42648;
result = G__42649;
stack = G__42650;
continue;
}
} else {
var G__42651 = seen__$2;
var G__42652 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__42653 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__42654 = cljs.core.pop(stack);
seen__$1 = G__42651;
explored__$1 = G__42652;
result = G__42653;
stack = G__42654;
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
var len__4818__auto___42655 = arguments.length;
var i__4819__auto___42656 = (0);
while(true){
if((i__4819__auto___42656 < len__4818__auto___42655)){
args__4824__auto__.push((arguments[i__4819__auto___42656]));

var G__42659 = (i__4819__auto___42656 + (1));
i__4819__auto___42656 = G__42659;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41514){
var map__41515 = p__41514;
var map__41515__$1 = cljs.core.__destructure_map(map__41515);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41515__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41515__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41515__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
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
var vec__41526 = temp__5753__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41526,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41526,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,(function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41508_SHARP_){
var G__41529 = p1__41508_SHARP_;
var G__41530 = node;
var G__41531 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__41529,G__41530,G__41531) : nbr_pred.call(null,G__41529,G__41530,G__41531));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41507_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__41507_SHARP_);
}),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4611__auto__ = (function loom$alg_generic$step_$_iter__41532(s__41533){
return (new cljs.core.LazySeq(null,(function (){
var s__41533__$1 = s__41533;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41533__$1);
if(temp__5753__auto____$1){
var s__41533__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41533__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41533__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41535 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41534 = (0);
while(true){
if((i__41534 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__41534);
cljs.core.chunk_append(b__41535,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__42662 = (i__41534 + (1));
i__41534 = G__42662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41535),loom$alg_generic$step_$_iter__41532(cljs.core.chunk_rest(s__41533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41535),null);
}
} else {
var nbr = cljs.core.first(s__41533__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__41532(cljs.core.rest(s__41533__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__41509_SHARP_,p2__41510_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41509_SHARP_,p2__41510_SHARP_,node);
}),preds,nbrs));
}),null,null)));
} else {
return null;
}
});
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4611__auto__ = (function loom$alg_generic$iter__41554(s__41555){
return (new cljs.core.LazySeq(null,(function (){
var s__41555__$1 = s__41555;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41555__$1);
if(temp__5753__auto__){
var s__41555__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41555__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41555__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41557 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41556 = (0);
while(true){
if((i__41556 < size__4610__auto__)){
var s = cljs.core._nth(c__4609__auto__,i__41556);
cljs.core.chunk_append(b__41557,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__42668 = (i__41556 + (1));
i__41556 = G__42668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41557),loom$alg_generic$iter__41554(cljs.core.chunk_rest(s__41555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41557),null);
}
} else {
var s = cljs.core.first(s__41555__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__41554(cljs.core.rest(s__41555__$2)));
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
(loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq41511){
var G__41512 = cljs.core.first(seq41511);
var seq41511__$1 = cljs.core.next(seq41511);
var G__41513 = cljs.core.first(seq41511__$1);
var seq41511__$2 = cljs.core.next(seq41511__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41512,G__41513,seq41511__$2);
}));

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42669 = arguments.length;
var i__4819__auto___42670 = (0);
while(true){
if((i__4819__auto___42670 < len__4818__auto___42669)){
args__4824__auto__.push((arguments[i__4819__auto___42670]));

var G__42671 = (i__4819__auto___42670 + (1));
i__4819__auto___42670 = G__42671;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41593){
var map__41595 = p__41593;
var map__41595__$1 = cljs.core.__destructure_map(map__41595);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41595__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
}));

(loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq41585){
var G__41586 = cljs.core.first(seq41585);
var seq41585__$1 = cljs.core.next(seq41585);
var G__41587 = cljs.core.first(seq41585__$1);
var seq41585__$2 = cljs.core.next(seq41585__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41586,G__41587,seq41585__$2);
}));

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42676 = arguments.length;
var i__4819__auto___42677 = (0);
while(true){
if((i__4819__auto___42677 < len__4818__auto___42676)){
args__4824__auto__.push((arguments[i__4819__auto___42677]));

var G__42678 = (i__4819__auto___42677 + (1));
i__4819__auto___42677 = G__42678;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__41606){
var map__41607 = p__41606;
var map__41607__$1 = cljs.core.__destructure_map(map__41607);
var opts = map__41607__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5753__auto__ = cljs.core.some((function (p__41608){
var vec__41609 = p__41608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41609,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41609,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41609,(2),null);
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
(loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq41602){
var G__41603 = cljs.core.first(seq41602);
var seq41602__$1 = cljs.core.next(seq41602);
var G__41604 = cljs.core.first(seq41602__$1);
var seq41602__$2 = cljs.core.next(seq41602__$1);
var G__41605 = cljs.core.first(seq41602__$2);
var seq41602__$3 = cljs.core.next(seq41602__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41603,G__41604,G__41605,seq41602__$3);
}));

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__42688 = m2;
var G__42689 = m1;
m1 = G__42688;
m2 = G__42689;
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
var iter__4611__auto__ = (function loom$alg_generic$reverse_edges_$_iter__41662(s__41663){
return (new cljs.core.LazySeq(null,(function (){
var s__41663__$1 = s__41663;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41663__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var node = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__41663__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__41662_$_iter__41664(s__41665){
return (new cljs.core.LazySeq(null,((function (s__41663__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__41665__$1 = s__41665;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41665__$1);
if(temp__5753__auto____$1){
var s__41665__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41665__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41665__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41667 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41666 = (0);
while(true){
if((i__41666 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__41666);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__41667,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__42690 = (i__41666 + (1));
i__41666 = G__42690;
continue;
} else {
var G__42691 = (i__41666 + (1));
i__41666 = G__42691;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41667),loom$alg_generic$reverse_edges_$_iter__41662_$_iter__41664(cljs.core.chunk_rest(s__41665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41667),null);
}
} else {
var nbr = cljs.core.first(s__41665__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__41662_$_iter__41664(cljs.core.rest(s__41665__$2)));
} else {
var G__42695 = cljs.core.rest(s__41665__$2);
s__41665__$1 = G__42695;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__41663__$1,node,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__41663__$1,node,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$alg_generic$reverse_edges_$_iter__41662(cljs.core.rest(s__41663__$1)));
} else {
var G__42696 = cljs.core.rest(s__41663__$1);
s__41663__$1 = G__42696;
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
var iter__4611__auto__ = (function loom$alg_generic$conj_paths_$_iter__41758(s__41759){
return (new cljs.core.LazySeq(null,(function (){
var s__41759__$1 = s__41759;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41759__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__41759__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__41758_$_iter__41760(s__41761){
return (new cljs.core.LazySeq(null,((function (s__41759__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__41761__$1 = s__41761;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41761__$1);
if(temp__5753__auto____$1){
var xs__6308__auto____$1 = temp__5753__auto____$1;
var from = cljs.core.first(xs__6308__auto____$1);
var iterys__4607__auto__ = ((function (s__41761__$1,s__41759__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__41758_$_iter__41760_$_iter__41762(s__41763){
return (new cljs.core.LazySeq(null,((function (s__41761__$1,s__41759__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__41763__$1 = s__41763;
while(true){
var temp__5753__auto____$2 = cljs.core.seq(s__41763__$1);
if(temp__5753__auto____$2){
var s__41763__$2 = temp__5753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__41763__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41763__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41765 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41764 = (0);
while(true){
if((i__41764 < size__4610__auto__)){
var to = cljs.core._nth(c__4609__auto__,i__41764);
cljs.core.chunk_append(b__41765,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__42698 = (i__41764 + (1));
i__41764 = G__42698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41765),loom$alg_generic$conj_paths_$_iter__41758_$_iter__41760_$_iter__41762(cljs.core.chunk_rest(s__41763__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41765),null);
}
} else {
var to = cljs.core.first(s__41763__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__41758_$_iter__41760_$_iter__41762(cljs.core.rest(s__41763__$2)));
}
} else {
return null;
}
break;
}
});})(s__41761__$1,s__41759__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__41761__$1,s__41759__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$alg_generic$conj_paths_$_iter__41758_$_iter__41760(cljs.core.rest(s__41761__$1)));
} else {
var G__42702 = cljs.core.rest(s__41761__$1);
s__41761__$1 = G__42702;
continue;
}
} else {
return null;
}
break;
}
});})(s__41759__$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__41759__$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$alg_generic$conj_paths_$_iter__41758(cljs.core.rest(s__41759__$1)));
} else {
var G__42704 = cljs.core.rest(s__41759__$1);
s__41759__$1 = G__42704;
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
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41823_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__41823_SHARP_);
}),q));
});
var map_set_pairs = (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (map__$1,p__41871){
var vec__41872 = p__41871;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41872,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41872,(1),null);
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
var G__42706 = outgoing__$1;
var G__42707 = incoming;
var G__42708 = q1__$1;
var G__42709 = q2;
outgoing = G__42706;
incoming = G__42707;
q1 = G__42708;
q2 = G__42709;
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
var G__42710 = outgoing;
var G__42711 = incoming__$1;
var G__42712 = q1;
var G__42713 = q2__$1;
outgoing = G__42710;
incoming = G__42711;
q1 = G__42712;
q2 = G__42713;
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
var G__41920 = arguments.length;
switch (G__41920) {
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
var step = (function loom$alg_generic$step(p__41954){
var vec__41959 = p__41954;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41959,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41959,(1),null);
var temp__5753__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__41963 = temp__5753__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41963,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41963,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41963,(2),null);
var fpq = vec__41963;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,(function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41977,v){
var vec__41978 = p__41977;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__41996){
var vec__41998 = p__41996;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41998,(0),null);
var vec__42001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41998,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42001,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42001,(1),null);
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
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42007){
var vec__42008 = p__42007;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42008,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42008,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__42013 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42013,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42013,(1),null);
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
var len__4818__auto___42770 = arguments.length;
var i__4819__auto___42772 = (0);
while(true){
if((i__4819__auto___42772 < len__4818__auto___42770)){
args__4824__auto__.push((arguments[i__4819__auto___42772]));

var G__42773 = (i__4819__auto___42772 + (1));
i__4819__auto___42772 = G__42773;
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
var seq__42116_42779 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__42123_42780 = null;
var count__42124_42781 = (0);
var i__42125_42782 = (0);
while(true){
if((i__42125_42782 < count__42124_42781)){
var bitmap_42783 = chunk__42123_42780.cljs$core$IIndexed$_nth$arity$2(null,i__42125_42782);
var seq__42126_42796 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_42783));
var chunk__42128_42797 = null;
var count__42129_42798 = (0);
var i__42130_42799 = (0);
while(true){
if((i__42130_42799 < count__42129_42798)){
var vec__42259_42802 = chunk__42128_42797.cljs$core$IIndexed$_nth$arity$2(null,i__42130_42799);
var idx_42803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42259_42802,(0),null);
var value_42804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42259_42802,(1),null);
var masked_value_42811 = (value_42804 | (new_bitmap[idx_42803]));
(new_bitmap[idx_42803] = masked_value_42811);


var G__42815 = seq__42126_42796;
var G__42816 = chunk__42128_42797;
var G__42817 = count__42129_42798;
var G__42818 = (i__42130_42799 + (1));
seq__42126_42796 = G__42815;
chunk__42128_42797 = G__42816;
count__42129_42798 = G__42817;
i__42130_42799 = G__42818;
continue;
} else {
var temp__5753__auto___42819 = cljs.core.seq(seq__42126_42796);
if(temp__5753__auto___42819){
var seq__42126_42821__$1 = temp__5753__auto___42819;
if(cljs.core.chunked_seq_QMARK_(seq__42126_42821__$1)){
var c__4638__auto___42822 = cljs.core.chunk_first(seq__42126_42821__$1);
var G__42823 = cljs.core.chunk_rest(seq__42126_42821__$1);
var G__42824 = c__4638__auto___42822;
var G__42825 = cljs.core.count(c__4638__auto___42822);
var G__42826 = (0);
seq__42126_42796 = G__42823;
chunk__42128_42797 = G__42824;
count__42129_42798 = G__42825;
i__42130_42799 = G__42826;
continue;
} else {
var vec__42264_42837 = cljs.core.first(seq__42126_42821__$1);
var idx_42838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42264_42837,(0),null);
var value_42839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42264_42837,(1),null);
var masked_value_42841 = (value_42839 | (new_bitmap[idx_42838]));
(new_bitmap[idx_42838] = masked_value_42841);


var G__42844 = cljs.core.next(seq__42126_42821__$1);
var G__42845 = null;
var G__42846 = (0);
var G__42847 = (0);
seq__42126_42796 = G__42844;
chunk__42128_42797 = G__42845;
count__42129_42798 = G__42846;
i__42130_42799 = G__42847;
continue;
}
} else {
}
}
break;
}

var G__42850 = seq__42116_42779;
var G__42851 = chunk__42123_42780;
var G__42852 = count__42124_42781;
var G__42853 = (i__42125_42782 + (1));
seq__42116_42779 = G__42850;
chunk__42123_42780 = G__42851;
count__42124_42781 = G__42852;
i__42125_42782 = G__42853;
continue;
} else {
var temp__5753__auto___42854 = cljs.core.seq(seq__42116_42779);
if(temp__5753__auto___42854){
var seq__42116_42855__$1 = temp__5753__auto___42854;
if(cljs.core.chunked_seq_QMARK_(seq__42116_42855__$1)){
var c__4638__auto___42856 = cljs.core.chunk_first(seq__42116_42855__$1);
var G__42857 = cljs.core.chunk_rest(seq__42116_42855__$1);
var G__42858 = c__4638__auto___42856;
var G__42859 = cljs.core.count(c__4638__auto___42856);
var G__42860 = (0);
seq__42116_42779 = G__42857;
chunk__42123_42780 = G__42858;
count__42124_42781 = G__42859;
i__42125_42782 = G__42860;
continue;
} else {
var bitmap_42862 = cljs.core.first(seq__42116_42855__$1);
var seq__42117_42863 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_42862));
var chunk__42119_42864 = null;
var count__42120_42865 = (0);
var i__42121_42866 = (0);
while(true){
if((i__42121_42866 < count__42120_42865)){
var vec__42312_42871 = chunk__42119_42864.cljs$core$IIndexed$_nth$arity$2(null,i__42121_42866);
var idx_42872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42312_42871,(0),null);
var value_42873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42312_42871,(1),null);
var masked_value_42880 = (value_42873 | (new_bitmap[idx_42872]));
(new_bitmap[idx_42872] = masked_value_42880);


var G__42881 = seq__42117_42863;
var G__42882 = chunk__42119_42864;
var G__42883 = count__42120_42865;
var G__42884 = (i__42121_42866 + (1));
seq__42117_42863 = G__42881;
chunk__42119_42864 = G__42882;
count__42120_42865 = G__42883;
i__42121_42866 = G__42884;
continue;
} else {
var temp__5753__auto___42885__$1 = cljs.core.seq(seq__42117_42863);
if(temp__5753__auto___42885__$1){
var seq__42117_42886__$1 = temp__5753__auto___42885__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42117_42886__$1)){
var c__4638__auto___42887 = cljs.core.chunk_first(seq__42117_42886__$1);
var G__42888 = cljs.core.chunk_rest(seq__42117_42886__$1);
var G__42889 = c__4638__auto___42887;
var G__42890 = cljs.core.count(c__4638__auto___42887);
var G__42891 = (0);
seq__42117_42863 = G__42888;
chunk__42119_42864 = G__42889;
count__42120_42865 = G__42890;
i__42121_42866 = G__42891;
continue;
} else {
var vec__42319_42892 = cljs.core.first(seq__42117_42886__$1);
var idx_42893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42319_42892,(0),null);
var value_42894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42319_42892,(1),null);
var masked_value_42898 = (value_42894 | (new_bitmap[idx_42893]));
(new_bitmap[idx_42893] = masked_value_42898);


var G__42937 = cljs.core.next(seq__42117_42886__$1);
var G__42938 = null;
var G__42939 = (0);
var G__42940 = (0);
seq__42117_42863 = G__42937;
chunk__42119_42864 = G__42938;
count__42120_42865 = G__42939;
i__42121_42866 = G__42940;
continue;
}
} else {
}
}
break;
}

var G__42950 = cljs.core.next(seq__42116_42855__$1);
var G__42951 = null;
var G__42952 = (0);
var G__42953 = (0);
seq__42116_42779 = G__42950;
chunk__42123_42780 = G__42951;
count__42124_42781 = G__42952;
i__42125_42782 = G__42953;
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
(loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq42070){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42070));
}));

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4611__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__42325(s__42326){
return (new cljs.core.LazySeq(null,(function (){
var s__42326__$1 = s__42326;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42326__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var chunk = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__42326__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__42325_$_iter__42327(s__42328){
return (new cljs.core.LazySeq(null,((function (s__42326__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__42328__$1 = s__42328;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__42328__$1);
if(temp__5753__auto____$1){
var s__42328__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42328__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42328__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42330 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42329 = (0);
while(true){
if((i__42329 < size__4610__auto__)){
var offset = cljs.core._nth(c__4609__auto__,i__42329);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__42330,idx);

var G__42961 = (i__42329 + (1));
i__42329 = G__42961;
continue;
} else {
var G__42962 = (i__42329 + (1));
i__42329 = G__42962;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42330),loom$alg_generic$bm_get_indicies_$_iter__42325_$_iter__42327(cljs.core.chunk_rest(s__42328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42330),null);
}
} else {
var offset = cljs.core.first(s__42328__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__42325_$_iter__42327(cljs.core.rest(s__42328__$2)));
} else {
var G__42963 = cljs.core.rest(s__42328__$2);
s__42328__$1 = G__42963;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__42326__$1,chunk,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__42326__$1,chunk,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$alg_generic$bm_get_indicies_$_iter__42325(cljs.core.rest(s__42326__$1)));
} else {
var G__42964 = cljs.core.rest(s__42326__$1);
s__42326__$1 = G__42964;
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

(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k42332,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__42348 = k42332;
var G__42348__$1 = (((G__42348 instanceof cljs.core.Keyword))?G__42348.fqn:null);
switch (G__42348__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42332,else__4464__auto__);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__42351){
var vec__42353 = p__42351;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42353,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42353,(1),null);
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42331){
var self__ = this;
var G__42331__$1 = this;
return (new cljs.core.RecordIter((0),G__42331__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42333,other42334){
var self__ = this;
var this42333__$1 = this;
return (((!((other42334 == null)))) && ((((this42333__$1.constructor === other42334.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42333__$1.node__GT_idx,other42334.node__GT_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42333__$1.idx__GT_node,other42334.idx__GT_node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42333__$1.bitmaps,other42334.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42333__$1.__extmap,other42334.__extmap)))))))))));
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k42332){
var self__ = this;
var this__4468__auto____$1 = this;
var G__42390 = k42332;
var G__42390__$1 = (((G__42390 instanceof cljs.core.Keyword))?G__42390.fqn:null);
switch (G__42390__$1) {
case "node->idx":
case "idx->node":
case "bitmaps":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42332);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__42331){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__42395 = cljs.core.keyword_identical_QMARK_;
var expr__42396 = k__4470__auto__;
if(cljs.core.truth_((pred__42395.cljs$core$IFn$_invoke$arity$2 ? pred__42395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__42396) : pred__42395.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__42396)))){
return (new loom.alg_generic.Ancestry(G__42331,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42395.cljs$core$IFn$_invoke$arity$2 ? pred__42395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__42396) : pred__42395.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__42396)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__42331,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42395.cljs$core$IFn$_invoke$arity$2 ? pred__42395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__42396) : pred__42395.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__42396)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__42331,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__42331),null));
}
}
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__42331){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__42331,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__42337){
var extmap__4501__auto__ = (function (){var G__42413 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42337,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__42337)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42413);
} else {
return G__42413;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__42337),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__42337),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__42337),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var len__4818__auto___43014 = arguments.length;
var i__4819__auto___43015 = (0);
while(true){
if((i__4819__auto___43015 < len__4818__auto___43014)){
args__4824__auto__.push((arguments[i__4819__auto___43015]));

var G__43016 = (i__4819__auto___43015 + (1));
i__4819__auto___43015 = G__43016;
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
var map__42418 = ancestry;
var map__42418__$1 = cljs.core.__destructure_map(map__42418);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42418__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42418__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42418__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
(loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq42414){
var G__42415 = cljs.core.first(seq42414);
var seq42414__$1 = cljs.core.next(seq42414);
var G__42416 = cljs.core.first(seq42414__$1);
var seq42414__$2 = cljs.core.next(seq42414__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42415,G__42416,seq42414__$2);
}));

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__42424 = ancestry;
var map__42424__$1 = cljs.core.__destructure_map(map__42424);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__42427 = ancestry;
var map__42427__$1 = cljs.core.__destructure_map(map__42427);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
