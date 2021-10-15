goog.provide('loom.alg');
loom.alg.traverse_all = (function loom$alg$traverse_all(nodes,traverse){
return cljs.core.persistent_BANG_(cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47065,n){
var vec__47067 = p__47065;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47067,(0),null);
var trav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47067,(1),null);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(n) : seen.call(null,n)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,trav], null);
} else {
var ctrav = (traverse.cljs$core$IFn$_invoke$arity$3 ? traverse.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"seen","seen",-518999789),seen) : traverse.call(null,n,new cljs.core.Keyword(null,"seen","seen",-518999789),seen));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(seen,ctrav),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,trav,ctrav)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),nodes)));
});
/**
 * Traverses graph g depth-first from start. Returns a lazy seq of nodes.
 *   When no starting node is provided, traverses the entire graph, connected
 *   or not.
 */
loom.alg.pre_traverse = (function loom$alg$pre_traverse(var_args){
var G__47071 = arguments.length;
switch (G__47071) {
case 1:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg.traverse_all(loom.graph.nodes(g),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.pre_traverse,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g)));
}));

(loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.pre_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
}));

(loom.alg.pre_traverse.cljs$lang$maxFixedArity = 2);

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg.pre_span = (function loom$alg$pre_span(var_args){
var G__47081 = arguments.length;
switch (G__47081) {
case 1:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47083,n){
var vec__47084 = p__47083;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47084,(0),null);
var span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47084,(1),null);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(n) : seen.call(null,n)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,span], null);
} else {
var vec__47087 = loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true], 0));
var cspan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47087,(0),null);
var seen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47087,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([span,cljs.core.PersistentArrayMap.createAsIfByAssoc([n,cljs.core.PersistentVector.EMPTY]),cspan], 0))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes(g)));
}));

(loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.pre_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
}));

(loom.alg.pre_span.cljs$lang$maxFixedArity = 2);

/**
 * Traverses graph g depth-first, post-order from start. Returns a
 *   vector of the nodes.
 */
loom.alg.post_traverse = (function loom$alg$post_traverse(var_args){
var G__47097 = arguments.length;
switch (G__47097) {
case 1:
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___47428 = arguments.length;
var i__4819__auto___47429 = (0);
while(true){
if((i__4819__auto___47429 < len__4818__auto___47428)){
args_arr__4839__auto__.push((arguments[i__4819__auto___47429]));

var G__47430 = (i__4819__auto___47429 + (1));
i__4819__auto___47429 = G__47430;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg.traverse_all(loom.graph.nodes(g),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.post_traverse,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g)));
}));

(loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.post_traverse,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start,opts);
}));

/** @this {Function} */
(loom.alg.post_traverse.cljs$lang$applyTo = (function (seq47093){
var G__47094 = cljs.core.first(seq47093);
var seq47093__$1 = cljs.core.next(seq47093);
var G__47095 = cljs.core.first(seq47093__$1);
var seq47093__$2 = cljs.core.next(seq47093__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47094,G__47095,seq47093__$2);
}));

(loom.alg.post_traverse.cljs$lang$maxFixedArity = (2));

/**
 * Topological sort of a directed acyclic graph (DAG). Returns nil if
 *   g contains any cycles.
 */
loom.alg.topsort = (function loom$alg$topsort(var_args){
var G__47099 = arguments.length;
switch (G__47099) {
case 1:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg.topsort.cljs$core$IFn$_invoke$arity$1 = (function (g){
var seen = cljs.core.PersistentHashSet.EMPTY;
var result = cljs.core.List.EMPTY;
var G__47103 = cljs.core.seq(loom.graph.nodes(g));
var vec__47104 = G__47103;
var seq__47105 = cljs.core.seq(vec__47104);
var first__47106 = cljs.core.first(seq__47105);
var seq__47105__$1 = cljs.core.next(seq__47105);
var n = first__47106;
var ns = seq__47105__$1;
var seen__$1 = seen;
var result__$1 = result;
var G__47103__$1 = G__47103;
while(true){
var seen__$2 = seen__$1;
var result__$2 = result__$1;
var vec__47110 = G__47103__$1;
var seq__47111 = cljs.core.seq(vec__47110);
var first__47112 = cljs.core.first(seq__47111);
var seq__47111__$1 = cljs.core.next(seq__47111);
var n__$1 = first__47112;
var ns__$1 = seq__47111__$1;
if(cljs.core.not(n__$1)){
return result__$2;
} else {
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(n__$1) : seen__$2.call(null,n__$1)))){
var G__47432 = seen__$2;
var G__47433 = result__$2;
var G__47434 = ns__$1;
seen__$1 = G__47432;
result__$1 = G__47433;
G__47103__$1 = G__47434;
continue;
} else {
var temp__5753__auto__ = loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),n__$1,seen__$2,seen__$2);
if(cljs.core.truth_(temp__5753__auto__)){
var cresult = temp__5753__auto__;
var G__47435 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(seen__$2,cresult);
var G__47436 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cresult,result__$2);
var G__47437 = ns__$1;
seen__$1 = G__47435;
result__$1 = G__47436;
G__47103__$1 = G__47437;
continue;
} else {
return null;
}
}
}
break;
}
}));

(loom.alg.topsort.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
}));

(loom.alg.topsort.cljs$lang$maxFixedArity = 2);

/**
 * Traverses graph g breadth-first from start. When option :f is provided,
 *   returns a lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When option :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg.bf_traverse = (function loom$alg$bf_traverse(var_args){
var G__47117 = arguments.length;
switch (G__47117) {
case 1:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___47439 = arguments.length;
var i__4819__auto___47440 = (0);
while(true){
if((i__4819__auto___47440 < len__4818__auto___47439)){
args_arr__4839__auto__.push((arguments[i__4819__auto___47440]));

var G__47441 = (i__4819__auto___47440 + (1));
i__4819__auto___47440 = G__47441;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47118,n){
var vec__47119 = p__47118;
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47119,(0),null);
var predmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47119,(1),null);
if(cljs.core.contains_QMARK_(predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47122,p__47123){
var vec__47124 = p__47122;
var cc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47124,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47124,(1),null);
var vec__47127 = p__47123;
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47127,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47127,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47127,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cc__$1,n__$1),pm], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null),loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector,new cljs.core.Keyword(null,"seen","seen",-518999789),predmap], 0)));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes(g)));
}));

(loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
}));

(loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start,opts);
}));

/** @this {Function} */
(loom.alg.bf_traverse.cljs$lang$applyTo = (function (seq47114){
var G__47115 = cljs.core.first(seq47114);
var seq47114__$1 = cljs.core.next(seq47114);
var G__47116 = cljs.core.first(seq47114__$1);
var seq47114__$2 = cljs.core.next(seq47114__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47115,G__47116,seq47114__$2);
}));

(loom.alg.bf_traverse.cljs$lang$maxFixedArity = (2));

/**
 * Returns a breadth-first spanning tree of the form {node [successors]}
 */
loom.alg.bf_span = (function loom$alg$bf_span(var_args){
var G__47139 = arguments.length;
switch (G__47139) {
case 1:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.preds__GT_span(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (predmap,n){
if(cljs.core.contains_QMARK_(predmap,n)){
return predmap;
} else {
return cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),predmap], 0)));
}
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes(g)));
}));

(loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.bf_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
}));

(loom.alg.bf_span.cljs$lang$maxFixedArity = 2);

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights)
 */
loom.alg.bf_path = (function loom$alg$bf_path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47445 = arguments.length;
var i__4819__auto___47446 = (0);
while(true){
if((i__4819__auto___47446 < len__4818__auto___47445)){
args__4824__auto__.push((arguments[i__4819__auto___47446]));

var G__47447 = (i__4819__auto___47446 + (1));
i__4819__auto___47446 = G__47447;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,end,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(loom.alg_generic.bf_path,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start,end,opts);
}));

(loom.alg.bf_path.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(loom.alg.bf_path.cljs$lang$applyTo = (function (seq47142){
var G__47143 = cljs.core.first(seq47142);
var seq47142__$1 = cljs.core.next(seq47142);
var G__47144 = cljs.core.first(seq47142__$1);
var seq47142__$2 = cljs.core.next(seq47142__$1);
var G__47145 = cljs.core.first(seq47142__$2);
var seq47142__$3 = cljs.core.next(seq47142__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47143,G__47144,G__47145,seq47142__$3);
}));

/**
 * Using a bidirectional breadth-first search, finds a path from start to
 *   end with the fewest hops (i.e. irrespective of edge weights). Can be much
 *   faster than a unidirectional search on certain types of graphs
 */
loom.alg.bf_path_bi = (function loom$alg$bf_path_bi(g,start,end){
if(loom.graph.directed_QMARK_(g)){
return loom.alg_generic.bf_path_bi(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1(g),start,end);
} else {
return loom.alg_generic.bf_path_bi(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start,end);
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in
 *   the format {node [distance predecessor]}. When f is provided,
 *   returns a lazy-seq of (f node state) for each node
 */
loom.alg.dijkstra_traverse = (function loom$alg$dijkstra_traverse(var_args){
var G__47160 = arguments.length;
switch (G__47160) {
case 1:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),cljs.core.first(loom.graph.nodes(g)));
}));

(loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),start,cljs.core.vector);
}));

(loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (g,start,f){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),start,f);
}));

(loom.alg.dijkstra_traverse.cljs$lang$maxFixedArity = 3);

/**
 * Finds all shortest distances from start. Returns a map in the
 *   format {node {successor distance}}
 */
loom.alg.dijkstra_span = (function loom$alg$dijkstra_span(var_args){
var G__47163 = arguments.length;
switch (G__47163) {
case 1:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),cljs.core.first(loom.graph.nodes(g)));
}));

(loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),start);
}));

(loom.alg.dijkstra_span.cljs$lang$maxFixedArity = 2);

/**
 * Finds the shortest path from start to end. Returns a vector:
 *   [path distance]
 */
loom.alg.dijkstra_path_dist = (function loom$alg$dijkstra_path_dist(g,start,end){
return loom.alg_generic.dijkstra_path_dist(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),start,end);
});
/**
 * Finds the shortest path from start to end
 */
loom.alg.dijkstra_path = (function loom$alg$dijkstra_path(g,start,end){
return cljs.core.first(loom.alg.dijkstra_path_dist(g,start,end));
});
/**
 * Tests for whether we can improve the shortest path to v found so far
 * by going through u.
 */
loom.alg.can_relax_edge_QMARK_ = (function loom$alg$can_relax_edge_QMARK_(p__47164,weight,costs){
var vec__47165 = p__47164;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47165,(1),null);
var edge = vec__47165;
var vd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(costs,v);
var ud = cljs.core.get.cljs$core$IFn$_invoke$arity$2(costs,u);
var sum = (ud + weight);
return (vd > sum);
});
/**
 * If there's a shorter path from s to v via u,
 *  update our map of estimated path costs and
 * map of paths from source to vertex v
 */
loom.alg.relax_edge = (function loom$alg$relax_edge(p__47168,weight,p__47169){
var vec__47170 = p__47168;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47170,(1),null);
var edge = vec__47170;
var vec__47173 = p__47169;
var costs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47173,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47173,(1),null);
var estimates = vec__47173;
var ud = cljs.core.get.cljs$core$IFn$_invoke$arity$2(costs,u);
var sum = (ud + weight);
if(loom.alg.can_relax_edge_QMARK_(edge,weight,costs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(costs,v,sum),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,v,u)], null);
} else {
return estimates;
}
});
/**
 * Performs edge relaxation on all edges in weighted directed graph
 */
loom.alg.relax_edges = (function loom$alg$relax_edges(g,start,estimates){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (estimates__$1,p__47176){
var vec__47177 = p__47176;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47177,(1),null);
var edge = vec__47177;
return loom.alg.relax_edge(edge,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g,u,v),estimates__$1);
}),estimates,loom.graph.edges(g));
});
/**
 * Initializes path cost estimates and paths from source to all vertices,
 * for Bellman-Ford algorithm
 */
loom.alg.init_estimates = (function loom$alg$init_estimates(graph,start){
var nodes = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(loom.graph.nodes(graph),start);
var path_costs = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,(0)]);
var paths = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var infinities = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(Infinity);
var nils = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
var init_costs = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,infinities);
var init_paths = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,nils);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,path_costs,init_costs),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,paths,init_paths)], null);
});
/**
 * Given a weighted, directed graph G = (V, E) with source start,
 * the Bellman-Ford algorithm produces map of single source shortest
 * paths and their costs if no negative-weight cycle that is reachable
 * from the source exists, and false otherwise, indicating that no
 * solution exists.
 */
loom.alg.bellman_ford = (function loom$alg$bellman_ford(g,start){
var initial_estimates = loom.alg.init_estimates(g,start);
var vec__47182 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (estimates,_){
return loom.alg.relax_edges(g,start,estimates);
}),initial_estimates,cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(loom.graph.nodes(g)) - (1))));
var costs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47182,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47182,(1),null);
var edges = loom.graph.edges(g);
if(cljs.core.truth_(cljs.core.some((function (p__47186){
var vec__47187 = p__47186;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187,(1),null);
var edge = vec__47187;
return loom.alg.can_relax_edge_QMARK_(edge,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g,u,v),costs);
}),edges))){
return false;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [costs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (final_paths,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(final_paths,v,(function (){var node = v;
var path = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_(node)){
var G__47450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,node);
var G__47451 = cljs.core.cons(node,path);
node = G__47450;
path = G__47451;
continue;
} else {
return path;
}
break;
}
})());
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47181_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Infinity,cljs.core.get.cljs$core$IFn$_invoke$arity$2(costs,p1__47181_SHARP_));
}),cljs.core.keys(paths)))], null);
}
});
/**
 * Returns true if g is a directed acyclic graph
 */
loom.alg.dag_QMARK_ = (function loom$alg$dag_QMARK_(g){
return cljs.core.boolean$(loom.alg.topsort.cljs$core$IFn$_invoke$arity$1(g));
});
/**
 * Finds the shortest path from start to end in graph g, using Dijkstra's
 *   algorithm if the graph is weighted, breadth-first search otherwise.
 */
loom.alg.shortest_path = (function loom$alg$shortest_path(g,start,end){
if(loom.graph.weighted_QMARK_(g)){
return loom.alg.dijkstra_path(g,start,end);
} else {
return loom.alg.bf_path(g,start,end);
}
});
/**
 * Finds the longest shortest path beginning at start, using Dijkstra's
 *   algorithm if the graph is weighted, breadth-first search otherwise.
 */
loom.alg.longest_shortest_path = (function loom$alg$longest_shortest_path(g,start){
return cljs.core.reverse(((loom.graph.weighted_QMARK_(g))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (path1,p__47191){
var vec__47192 = p__47191;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192,(1),null);
var path2 = loom.alg_generic.trace_path(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.second,state),n);
if((cljs.core.count(path1) < cljs.core.count(path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(g,start,cljs.core.vector)):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (path1,p__47195){
var vec__47196 = p__47195;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47196,(0),null);
var predmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47196,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47196,(2),null);
var path2 = loom.alg_generic.trace_path(predmap,n);
if((cljs.core.count(path1) < cljs.core.count(path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(g,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], 0)))));
});
/**
 * Helper function for Johnson's algorithm. Uses Bellman-Ford to remove negative weights.
 */
loom.alg.bellman_ford_transform = (function loom$alg$bellman_ford_transform(wg){
var q = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.has_node_QMARK_,wg),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var es = (function (){var iter__4611__auto__ = (function loom$alg$bellman_ford_transform_$_iter__47201(s__47202){
return (new cljs.core.LazySeq(null,(function (){
var s__47202__$1 = s__47202;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47202__$1);
if(temp__5753__auto__){
var s__47202__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47202__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47202__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47204 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47203 = (0);
while(true){
if((i__47203 < size__4610__auto__)){
var v = cljs.core._nth(c__4609__auto__,i__47203);
cljs.core.chunk_append(b__47204,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null));

var G__47452 = (i__47203 + (1));
i__47203 = G__47452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47204),loom$alg$bellman_ford_transform_$_iter__47201(cljs.core.chunk_rest(s__47202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47204),null);
}
} else {
var v = cljs.core.first(s__47202__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null),loom$alg$bellman_ford_transform_$_iter__47201(cljs.core.rest(s__47202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(wg));
})();
var bf_results = loom.alg.bellman_ford(loom.graph.add_edges_STAR_(wg,es),q);
if(cljs.core.truth_(bf_results)){
var vec__47206 = bf_results;
var dist_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(1),null);
var new_es = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core.second,(function (p__47209){
var vec__47210 = p__47209;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47210,(1),null);
return (loom.graph.weight.cljs$core$IFn$_invoke$arity$3(wg,u,v) + ((dist_q.cljs$core$IFn$_invoke$arity$1 ? dist_q.cljs$core$IFn$_invoke$arity$1(u) : dist_q.call(null,u)) - (dist_q.cljs$core$IFn$_invoke$arity$1 ? dist_q.cljs$core$IFn$_invoke$arity$1(v) : dist_q.call(null,v))));
})),loom.graph.edges(wg));
return loom.graph.add_edges_STAR_(wg,new_es);
} else {
return false;
}
});
/**
 * Finds all-pairs shortest paths using Bellman-Ford to remove any negative edges before
 *   using Dijkstra's algorithm to find the shortest paths from each vertex to every other.
 *   This algorithm is efficient for sparse graphs.
 * 
 *   If the graph is unweighted, a default weight of 1 will be used. Note that it is more efficient
 *   to use breadth-first spans for a graph with a uniform edge weight rather than Dijkstra's algorithm.
 *   Most callers should use shortest-paths and allow the most efficient implementation be selected
 *   for the graph.
 */
loom.alg.johnson = (function loom$alg$johnson(g){
var g__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = loom.graph.weighted_QMARK_(g);
if(and__4210__auto__){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,(0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),loom.graph.edges(g)));
} else {
return and__4210__auto__;
}
})())?loom.alg.bellman_ford_transform(g):g);
if(g__$1 === false){
return false;
} else {
var dist = ((loom.graph.weighted_QMARK_(g__$1))?loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g__$1):(function (u,v){
if(cljs.core.truth_(loom.graph.has_edge_QMARK_(g__$1,u,v))){
return (1);
} else {
return null;
}
}));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,node,loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),dist,node));
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes(g__$1));
}
});
/**
 * Uses bf-span on each node in the graph.
 */
loom.alg.bf_all_pairs_shortest_paths = (function loom$alg$bf_all_pairs_shortest_paths(g){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (spans,node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spans,node,loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2(g,node));
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes(g));
});
/**
 * Finds all-pairs shortest paths in a graph. Uses Johnson's algorithm for weighted graphs
 *   which is efficient for sparse graphs. Breadth-first spans are used for unweighted graphs.
 */
loom.alg.all_pairs_shortest_paths = (function loom$alg$all_pairs_shortest_paths(g){
if(loom.graph.weighted_QMARK_(g)){
return loom.alg.johnson(g);
} else {
return loom.alg.bf_all_pairs_shortest_paths(g);
}
});
/**
 * Returns the connected components of graph g as a vector of vectors. If g
 *   is directed, returns the weakly-connected components.
 */
loom.alg.connected_components = (function loom$alg$connected_components(g){
var nb = (((!(loom.graph.directed_QMARK_(g))))?loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g):(function (p1__47217_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,p1__47217_SHARP_),loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,p1__47217_SHARP_));
}));
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47218,n){
var vec__47219 = p__47218;
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47219,(0),null);
var predmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47219,(1),null);
if(cljs.core.contains_QMARK_(predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
var vec__47222 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47225,p__47226){
var vec__47227 = p__47225;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47227,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47227,(1),null);
var vec__47230 = p__47226;
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47230,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47230,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47230,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,n__$1),pm], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(nb,n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector,new cljs.core.Keyword(null,"seen","seen",-518999789),predmap], 0)));
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47222,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47222,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cc,c),pm], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes(g)));
});
/**
 * Returns true if g is connected
 */
loom.alg.connected_QMARK_ = (function loom$alg$connected_QMARK_(g){
return (cljs.core.count(cljs.core.first(loom.alg.connected_components(g))) === cljs.core.count(loom.graph.nodes(g)));
});
/**
 * Returns the strongly-connected components of directed graph g as a vector of
 *   vectors. Uses Kosaraju's algorithm.
 */
loom.alg.scc = (function loom$alg$scc(g){
var gt = loom.graph.transpose(g);
var stack = cljs.core.reverse(loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1(g));
var seen = cljs.core.PersistentHashSet.EMPTY;
var cc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(stack)){
return cljs.core.persistent_BANG_(cc);
} else {
if(cljs.core.truth_((function (){var G__47240 = cljs.core.first(stack);
return (seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(G__47240) : seen.call(null,G__47240));
})())){
var G__47453 = cljs.core.rest(stack);
var G__47454 = seen;
var G__47455 = cc;
stack = G__47453;
seen = G__47454;
cc = G__47455;
continue;
} else {
var vec__47241 = loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic(gt,cljs.core.first(stack),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true], 0));
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47241,(0),null);
var seen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47241,(1),null);
var G__47456 = cljs.core.rest(stack);
var G__47457 = seen__$1;
var G__47458 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cc,c);
stack = G__47456;
seen = G__47457;
cc = G__47458;
continue;
}
}
break;
}
});
loom.alg.strongly_connected_QMARK_ = (function loom$alg$strongly_connected_QMARK_(g){
return (cljs.core.count(cljs.core.first(loom.alg.scc(g))) === cljs.core.count(loom.graph.nodes(g)));
});
/**
 * Returns graph g with all connected components connected to each other
 */
loom.alg.connect = (function loom$alg$connect(g){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,loom.alg.connected_components(g))));
});
/**
 * Return the density of graph g
 */
loom.alg.density = (function loom$alg$density(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47460 = arguments.length;
var i__4819__auto___47461 = (0);
while(true){
if((i__4819__auto___47461 < len__4818__auto___47460)){
args__4824__auto__.push((arguments[i__4819__auto___47461]));

var G__47462 = (i__4819__auto___47461 + (1));
i__4819__auto___47461 = G__47462;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.alg.density.cljs$core$IFn$_invoke$arity$variadic = (function (g,p__47248){
var map__47249 = p__47248;
var map__47249__$1 = cljs.core.__destructure_map(map__47249);
var loops = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47249__$1,new cljs.core.Keyword(null,"loops","loops",-1766681555),false);
var order = cljs.core.count(loom.graph.nodes(g));
return (cljs.core.count(loom.graph.edges(g)) / (order * (cljs.core.truth_(loops)?order:(order - (1)))));
}));

(loom.alg.density.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.alg.density.cljs$lang$applyTo = (function (seq47245){
var G__47246 = cljs.core.first(seq47245);
var seq47245__$1 = cljs.core.next(seq47245);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47246,seq47245__$1);
}));

/**
 * Returns nodes with no connections to other nodes (i.e., isolated nodes)
 */
loom.alg.loners = (function loom$alg$loners(g){
var degree_total = ((loom.graph.directed_QMARK_(g))?(function (p1__47252_SHARP_){
return (loom.graph.in_degree(g,p1__47252_SHARP_) + loom.graph.out_degree(g,p1__47252_SHARP_));
}):(function (p1__47253_SHARP_){
return loom.graph.out_degree(g,p1__47253_SHARP_);
}));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,degree_total),loom.graph.nodes(g));
});
/**
 * Returns the distinct edges of g. Only useful for undirected graphs
 */
loom.alg.distinct_edges = (function loom$alg$distinct_edges(g){
if(loom.graph.directed_QMARK_(g)){
return loom.graph.edges(g);
} else {
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47254,e){
var vec__47255 = p__47254;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47255,(0),null);
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47255,(1),null);
var eset = cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),e));
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(eset) : seen.call(null,eset)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,es], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,eset),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,e)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),loom.graph.edges(g)));
}
});
/**
 * Attempts a two-coloring of graph g. When successful, returns a map of
 *   nodes to colors (1 or 0). Otherwise, returns nil.
 */
loom.alg.bipartite_color = (function loom$alg$bipartite_color(g){
var color_component = (function loom$alg$bipartite_color_$_color_component(coloring,start){
var coloring__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coloring,start,(1));
var queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,start);
while(true){
if(cljs.core.empty_QMARK_(queue)){
return coloring__$1;
} else {
var v = cljs.core.peek(queue);
var color = ((1) - (coloring__$1.cljs$core$IFn$_invoke$arity$1 ? coloring__$1.cljs$core$IFn$_invoke$arity$1(v) : coloring__$1.call(null,v)));
var nbrs = loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,v);
if(cljs.core.truth_(cljs.core.some(((function (coloring__$1,queue,v,color,nbrs){
return (function (p1__47258_SHARP_){
var and__4210__auto__ = (coloring__$1.cljs$core$IFn$_invoke$arity$1 ? coloring__$1.cljs$core$IFn$_invoke$arity$1(p1__47258_SHARP_) : coloring__$1.call(null,p1__47258_SHARP_));
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((coloring__$1.cljs$core$IFn$_invoke$arity$1 ? coloring__$1.cljs$core$IFn$_invoke$arity$1(v) : coloring__$1.call(null,v)),(coloring__$1.cljs$core$IFn$_invoke$arity$1 ? coloring__$1.cljs$core$IFn$_invoke$arity$1(p1__47258_SHARP_) : coloring__$1.call(null,p1__47258_SHARP_)));
} else {
return and__4210__auto__;
}
});})(coloring__$1,queue,v,color,nbrs))
,nbrs))){
return null;
} else {
var nbrs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(coloring__$1,nbrs);
var G__47463 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(coloring__$1,(function (){var iter__4611__auto__ = ((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function loom$alg$bipartite_color_$_color_component_$_iter__47280(s__47281){
return (new cljs.core.LazySeq(null,((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function (){
var s__47281__$1 = s__47281;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47281__$1);
if(temp__5753__auto__){
var s__47281__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47281__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47281__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47283 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47282 = (0);
while(true){
if((i__47282 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__47282);
cljs.core.chunk_append(b__47283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null));

var G__47465 = (i__47282 + (1));
i__47282 = G__47465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47283),loom$alg$bipartite_color_$_color_component_$_iter__47280(cljs.core.chunk_rest(s__47281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47283),null);
}
} else {
var nbr = cljs.core.first(s__47281__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null),loom$alg$bipartite_color_$_color_component_$_iter__47280(cljs.core.rest(s__47281__$2)));
}
} else {
return null;
}
break;
}
});})(coloring__$1,queue,nbrs__$1,v,color,nbrs))
,null,null));
});})(coloring__$1,queue,nbrs__$1,v,color,nbrs))
;
return iter__4611__auto__(nbrs__$1);
})());
var G__47464 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),nbrs__$1);
coloring__$1 = G__47463;
queue = G__47464;
continue;
}
}
break;
}
});
var G__47288 = cljs.core.seq(loom.graph.nodes(g));
var vec__47289 = G__47288;
var seq__47290 = cljs.core.seq(vec__47289);
var first__47291 = cljs.core.first(seq__47290);
var seq__47290__$1 = cljs.core.next(seq__47290);
var node = first__47291;
var nodes = seq__47290__$1;
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var G__47288__$1 = G__47288;
var coloring__$1 = coloring;
while(true){
var vec__47296 = G__47288__$1;
var seq__47297 = cljs.core.seq(vec__47296);
var first__47298 = cljs.core.first(seq__47297);
var seq__47297__$1 = cljs.core.next(seq__47297);
var node__$1 = first__47298;
var nodes__$1 = seq__47297__$1;
var coloring__$2 = coloring__$1;
if(cljs.core.truth_(coloring__$2)){
if((node__$1 == null)){
return coloring__$2;
} else {
if(cljs.core.truth_((coloring__$2.cljs$core$IFn$_invoke$arity$1 ? coloring__$2.cljs$core$IFn$_invoke$arity$1(node__$1) : coloring__$2.call(null,node__$1)))){
var G__47467 = nodes__$1;
var G__47468 = coloring__$2;
G__47288__$1 = G__47467;
coloring__$1 = G__47468;
continue;
} else {
var G__47469 = nodes__$1;
var G__47470 = color_component(coloring__$2,node__$1);
G__47288__$1 = G__47469;
coloring__$1 = G__47470;
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
 * Returns true if g is bipartite
 */
loom.alg.bipartite_QMARK_ = (function loom$alg$bipartite_QMARK_(g){
return cljs.core.boolean$(loom.alg.bipartite_color(g));
});
/**
 * Returns two sets of nodes, one for each color of the bipartite coloring,
 *   or nil if g is not bipartite
 */
loom.alg.bipartite_sets = (function loom$alg$bipartite_sets(g){
var temp__5753__auto__ = loom.alg.bipartite_color(g);
if(cljs.core.truth_(temp__5753__auto__)){
var coloring = temp__5753__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47299,p__47300){
var vec__47301 = p__47299;
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47301,(0),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47301,(1),null);
var vec__47304 = p__47300;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47304,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47304,(1),null);
if((color === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s1,node),s2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s2,node)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),coloring);
} else {
return null;
}
});
/**
 * Given a putative coloring of a graph, returns the colors of all the
 *   neighbors of a given node.
 */
loom.alg.neighbor_colors = (function loom$alg$neighbor_colors(g,node,coloring){
var successors = loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,node);
var neighbors = (((!(loom.graph.directed_QMARK_(g))))?successors:cljs.core.concat.cljs$core$IFn$_invoke$arity$2(successors,loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,node)));
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47307_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coloring,p1__47307_SHARP_);
}),neighbors)));
});
/**
 * Returns true if a map of nodes to colors is a proper coloring of a graph.
 */
loom.alg.coloring_QMARK_ = (function loom$alg$coloring_QMARK_(g,coloring){
var different_colors_QMARK_ = (function loom$alg$coloring_QMARK__$_different_colors_QMARK_(node){
return (!(cljs.core.contains_QMARK_(loom.alg.neighbor_colors(g,node,coloring),(coloring.cljs$core$IFn$_invoke$arity$1 ? coloring.cljs$core$IFn$_invoke$arity$1(node) : coloring.call(null,node)))));
});
return ((cljs.core.every_QMARK_(different_colors_QMARK_,loom.graph.nodes(g))) && (cljs.core.every_QMARK_(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47314_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coloring,p1__47314_SHARP_);
}),loom.graph.nodes(g)))));
});
/**
 * Greedily color the vertices of a graph using the first-fit heuristic.
 *   Returns a map of nodes to colors (0, 1, ...).
 */
loom.alg.greedy_coloring = (function loom$alg$greedy_coloring(g){
var node_seq = loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1(g);
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var colors = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(node_seq)){
return coloring;
} else {
var node = cljs.core.first(node_seq);
var possible_colors = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(colors,loom.alg.neighbor_colors(g,node,coloring));
var node_color = ((cljs.core.empty_QMARK_(possible_colors))?cljs.core.count(colors):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,possible_colors));
var G__47471 = cljs.core.rest(node_seq);
var G__47472 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coloring,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,node_color], null));
var G__47473 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(colors,node_color);
node_seq = G__47471;
coloring = G__47472;
colors = G__47473;
continue;
}
break;
}
});
/**
 * Returns [flow-map flow-value], where flow-map is a weighted adjacency map
 * representing the maximum flow.  The argument should be a weighted digraph,
 * where the edge weights are flow capacities.  Source and sink are the vertices
 * representing the flow source and sink vertices.  Optionally, pass in
 *   :method :algorithm to use.  Currently, the only option is :edmonds-karp .
 */
loom.alg.max_flow = (function loom$alg$max_flow(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47474 = arguments.length;
var i__4819__auto___47475 = (0);
while(true){
if((i__4819__auto___47475 < len__4818__auto___47474)){
args__4824__auto__.push((arguments[i__4819__auto___47475]));

var G__47476 = (i__4819__auto___47475 + (1));
i__4819__auto___47475 = G__47476;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic = (function (g,source,sink,p__47340){
var map__47341 = p__47340;
var map__47341__$1 = cljs.core.__destructure_map(map__47341);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47341__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821));
var method_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821),null], null), null);
var n = loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g);
var i = loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1(g);
var c = loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g);
var s = source;
var t = sink;
var vec__47343 = (function (){var G__47346 = method;
var G__47346__$1 = (((G__47346 instanceof cljs.core.Keyword))?G__47346.fqn:null);
switch (G__47346__$1) {
case "edmonds-karp":
return loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$5(n,i,c,s,t);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Method not found.  Choose from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_set)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method-set","method-set",-2030344221),method_set], null));

}
})();
var flow_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47343,(0),null);
var flow_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47343,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_map,flow_value], null);
}));

(loom.alg.max_flow.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(loom.alg.max_flow.cljs$lang$applyTo = (function (seq47331){
var G__47332 = cljs.core.first(seq47331);
var seq47331__$1 = cljs.core.next(seq47331);
var G__47333 = cljs.core.first(seq47331__$1);
var seq47331__$2 = cljs.core.next(seq47331__$1);
var G__47334 = cljs.core.first(seq47331__$2);
var seq47331__$3 = cljs.core.next(seq47331__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47332,G__47333,G__47334,seq47331__$3);
}));

/**
 * Wrapper function to return edges along with weights for a given graph.
 * For un-weighted graphs a default value of one is produced. The function
 * returns values of the form [[[u v] 10] [[x y] 20] ...]
 */
loom.alg.edge_weights = (function loom$alg$edge_weights(wg,v){
var edge_weight = (function (u,v__$1){
if(loom.graph.weighted_QMARK_(wg)){
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(wg,u,v__$1);
} else {
return (1);
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47363_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47363_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,edge_weight(v,p1__47363_SHARP_)], null)], null));
}),loom.graph.successors.cljs$core$IFn$_invoke$arity$2(wg,v));
});
/**
 * An edge-list of an minimum spanning tree along with weights that
 *   represents an MST of the given graph. Returns the MST edge-list
 *   for un-weighted graphs.
 */
loom.alg.prim_mst_edges = (function loom$alg$prim_mst_edges(var_args){
var G__47370 = arguments.length;
switch (G__47370) {
case 1:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 5:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1 = (function (wg){
if(loom.graph.directed_QMARK_(wg)){
throw Error("Spanning tree only defined for undirected graphs");
} else {
var mst = loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5(wg,loom.graph.nodes(wg),null,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY);
if(loom.graph.weighted_QMARK_(wg)){
return mst;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47364_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(p1__47364_SHARP_),cljs.core.second(p1__47364_SHARP_)], null));
}),mst);
}

}
}));

(loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5 = (function (wg,n,h,visited,acc){
while(true){
if(cljs.core.empty_QMARK_(n)){
return acc;
} else {
if(cljs.core.empty_QMARK_(h)){
var v = cljs.core.first(n);
var h__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.priority_map_keyfn(cljs.core.second),loom.alg.edge_weights(wg,v));
var G__47479 = wg;
var G__47480 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(n,v);
var G__47481 = h__$1;
var G__47482 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,v);
var G__47483 = acc;
wg = G__47479;
n = G__47480;
h = G__47481;
visited = G__47482;
acc = G__47483;
continue;
} else {
var next_edge = cljs.core.peek(h);
var u = cljs.core.first(cljs.core.second(next_edge));
var v = cljs.core.first(next_edge);
var update_dist = ((function (wg,n,h,visited,acc,next_edge,u,v){
return (function (h__$1,p__47371){
var vec__47372 = p__47371;
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(0),null);
var vec__47375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47372,(1),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47375,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47375,(1),null);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(h__$1,v__$1) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h__$1,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,wt], null));
} else {
if((cljs.core.second(cljs.core.get.cljs$core$IFn$_invoke$arity$2(h__$1,v__$1)) > wt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h__$1,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,wt], null));
} else {
return h__$1;

}
}
});})(wg,n,h,visited,acc,next_edge,u,v))
;
var wt = cljs.core.second(cljs.core.second(next_edge));
var visited__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,v);
var h__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_dist,cljs.core.pop(h),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist){
return (function (p1__47365_SHARP_){
return cljs.core.complement(visited__$1)(cljs.core.first(p1__47365_SHARP_));
});})(wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist))
,loom.alg.edge_weights(wg,v)));
var G__47484 = wg;
var G__47485 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(n,v);
var G__47486 = h__$1;
var G__47487 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited__$1,v);
var G__47488 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,wt], null));
wg = G__47484;
n = G__47485;
h = G__47486;
visited = G__47487;
acc = G__47488;
continue;

}
}
break;
}
}));

(loom.alg.prim_mst_edges.cljs$lang$maxFixedArity = 5);

/**
 * Minimum spanning tree of given graph. If the graph contains more than one
 * component then returns a spanning forest of minimum spanning trees.
 */
loom.alg.prim_mst = (function loom$alg$prim_mst(wg){
var mst = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.graph.weighted_graph,loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1(wg));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,loom.graph.nodes)(wg),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,loom.graph.nodes)(mst))){
return mst;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.add_nodes,mst,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47378_SHARP_){
return (loom.graph.out_degree(wg,p1__47378_SHARP_) === (0));
}),loom.graph.nodes(wg)));

}
});
/**
 * Returns the shortest path using A* algorithm. Returns a map of predecessors.
 */
loom.alg.astar_path = (function loom$alg$astar_path(var_args){
var G__47380 = arguments.length;
switch (G__47380) {
case 4:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4 = (function (g,src,target,heur){
var heur__$1 = (((heur == null))?(function (x,y){
return (0);
}):heur);
var q = tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null,(0),(0)], null)], 0));
var explored = cljs.core.PersistentHashMap.EMPTY;
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6(g,src,target,heur__$1,q,explored);
}));

(loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6 = (function (g,src,target,heur,q,explored){
while(true){
if(cljs.core.empty_QMARK_(q)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Target not reachable from source",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.peek(q)),target)){
var u = cljs.core.first(cljs.core.peek(q));
var parent = (function (){var fexpr__47381 = cljs.core.second(cljs.core.peek(q));
return (fexpr__47381.cljs$core$IFn$_invoke$arity$1 ? fexpr__47381.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__47381.call(null,(1)));
})();
var explored__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(explored,target,parent);
var path = (function (){var s = target;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((s == null)){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,s,null);
} else {
var G__47490 = (explored__$1.cljs$core$IFn$_invoke$arity$1 ? explored__$1.cljs$core$IFn$_invoke$arity$1(s) : explored__$1.call(null,s));
var G__47491 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,s,(explored__$1.cljs$core$IFn$_invoke$arity$1 ? explored__$1.cljs$core$IFn$_invoke$arity$1(s) : explored__$1.call(null,s)));
s = G__47490;
acc = G__47491;
continue;

}
}
break;
}
})();
return path;
} else {
var curr_node = cljs.core.first(cljs.core.peek(q));
var curr_dist = (function (){var fexpr__47382 = cljs.core.second(cljs.core.peek(q));
return (fexpr__47382.cljs$core$IFn$_invoke$arity$1 ? fexpr__47382.cljs$core$IFn$_invoke$arity$1((2)) : fexpr__47382.call(null,(2)));
})();
var explored__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(explored,curr_node,(function (){var fexpr__47383 = cljs.core.second(cljs.core.peek(q));
return (fexpr__47383.cljs$core$IFn$_invoke$arity$1 ? fexpr__47383.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__47383.call(null,(1)));
})());
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(explored__$1)),loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,curr_node));
var update_dist = ((function (g,src,target,heur,q,explored,curr_node,curr_dist,explored__$1,nbrs){
return (function (curr_node__$1,curr_dist__$1,q__$1,v){
var act = (curr_dist__$1 + ((loom.graph.weighted_QMARK_(g))?loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g,curr_node__$1,v):(1)));
var est = (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,v) == null))?(heur.cljs$core$IFn$_invoke$arity$2 ? heur.cljs$core$IFn$_invoke$arity$2(v,target) : heur.call(null,v,target)):(function (){var fexpr__47384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,v);
return (fexpr__47384.cljs$core$IFn$_invoke$arity$1 ? fexpr__47384.cljs$core$IFn$_invoke$arity$1((3)) : fexpr__47384.call(null,(3)));
})());
if((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,v) == null)) || (((function (){var fexpr__47385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,v);
return (fexpr__47385.cljs$core$IFn$_invoke$arity$1 ? fexpr__47385.cljs$core$IFn$_invoke$arity$1((2)) : fexpr__47385.call(null,(2)));
})() > act)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q__$1,v,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(act + est),curr_node__$1,act,est], null));
} else {
return q__$1;

}
});})(g,src,target,heur,q,explored,curr_node,curr_dist,explored__$1,nbrs))
;
var q__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(update_dist,curr_node,curr_dist),cljs.core.pop(q),nbrs);
var G__47492 = g;
var G__47493 = src;
var G__47494 = target;
var G__47495 = heur;
var G__47496 = q__$1;
var G__47497 = explored__$1;
g = G__47492;
src = G__47493;
target = G__47494;
heur = G__47495;
q = G__47496;
explored = G__47497;
continue;

}
}
break;
}
}));

(loom.alg.astar_path.cljs$lang$maxFixedArity = 6);

/**
 * Returns the length of the shortest path between src and target using
 *  the A* algorithm
 */
loom.alg.astar_dist = (function loom$alg$astar_dist(g,src,target,heur){
var path = loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4(g,src,target,heur);
var dist = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (c,p__47386){
var vec__47387 = p__47386;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387,(1),null);
if((v == null)){
return c;
} else {
return (c + ((loom.graph.weighted_QMARK_(g))?loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g,v,u):(1)));
}
}),(0),path);
return dist;
});
/**
 * Returns sequence of vertices in degeneracy order.
 */
loom.alg.degeneracy_ordering = (function loom$alg$degeneracy_ordering(g){
var ordered_nodes = cljs.core.PersistentVector.EMPTY;
var node_degs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.priority_map(),cljs.core.zipmap(loom.graph.nodes(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.out_degree,g),loom.graph.nodes(g))));
var k = (0);
while(true){
if(cljs.core.empty_QMARK_(node_degs)){
return ordered_nodes;
} else {
var vec__47397 = cljs.core.first(node_degs);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47397,(0),null);
var deg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47397,(1),null);
var updated_degs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.second)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,node_degs),loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,n)))));
var G__47498 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ordered_nodes,n);
var G__47499 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ordered_nodes,node_degs,k,vec__47397,n,deg,updated_degs){
return (function (n_ds,p__47400){
var vec__47401 = p__47400;
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47401,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47401,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n_ds,n__$1,d);
});})(ordered_nodes,node_degs,k,vec__47397,n,deg,updated_degs))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_degs,n),updated_degs);
var G__47500 = (function (){var x__4295__auto__ = k;
var y__4296__auto__ = deg;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
ordered_nodes = G__47498;
node_degs = G__47499;
k = G__47500;
continue;
}
break;
}
});
loom.alg.bk_gen = (function loom$alg$bk_gen(g,p__47404,stack){
var vec__47405 = p__47404;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47405,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47405,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47405,(2),null);
var v_pivot = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max_key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.out_degree,g)),p);
var v = v_pivot;
var p__$1 = cljs.core.set(p);
var x__$1 = cljs.core.set(x);
var stack__$1 = stack;
while(true){
if((v == null)){
return stack__$1;
} else {
var succ_v = cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,v));
var G__47501 = cljs.core.first(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p__$1,v),cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,v_pivot))));
var G__47502 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p__$1,v);
var G__47503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x__$1,v);
var G__47504 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,v),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(p__$1,succ_v),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(x__$1,succ_v)], null));
v = G__47501;
p__$1 = G__47502;
x__$1 = G__47503;
stack__$1 = G__47504;
continue;
}
break;
}
});
/**
 * An iterative implementation of Bron-Kerbosch using degeneracy ordering
 *   at the outer loop and max-degree vertex pivoting in the inner loop.
 */
loom.alg.bk = (function loom$alg$bk(g){
var vs = loom.alg.degeneracy_ordering(g);
var max_clqs = cljs.core.seq(cljs.core.PersistentVector.EMPTY);
var p = cljs.core.set(loom.graph.nodes(g));
var x = cljs.core.PersistentHashSet.EMPTY;
var stack = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_(stack)) && (cljs.core.empty_QMARK_(vs)))){
return max_clqs;
} else {
if(cljs.core.empty_QMARK_(stack)){
var v = cljs.core.first(vs);
var succ_v = cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,v));
var G__47505 = cljs.core.rest(vs);
var G__47506 = max_clqs;
var G__47507 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p,v);
var G__47508 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,v);
var G__47509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([v]),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(p,succ_v),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(x,succ_v)], null)], null);
vs = G__47505;
max_clqs = G__47506;
p = G__47507;
x = G__47508;
stack = G__47509;
continue;
} else {
var vec__47411 = cljs.core.peek(stack);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47411,(0),null);
var s_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47411,(1),null);
var s_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47411,(2),null);
if(((cljs.core.empty_QMARK_(s_p)) && (cljs.core.empty_QMARK_(s_x)))){
var G__47510 = vs;
var G__47511 = cljs.core.cons(r,max_clqs);
var G__47512 = p;
var G__47513 = x;
var G__47514 = cljs.core.pop(stack);
vs = G__47510;
max_clqs = G__47511;
p = G__47512;
x = G__47513;
stack = G__47514;
continue;
} else {
if(cljs.core.empty_QMARK_(s_p)){
var G__47515 = vs;
var G__47516 = max_clqs;
var G__47517 = p;
var G__47518 = x;
var G__47519 = cljs.core.pop(stack);
vs = G__47515;
max_clqs = G__47516;
p = G__47517;
x = G__47518;
stack = G__47519;
continue;
} else {
var G__47520 = vs;
var G__47521 = max_clqs;
var G__47522 = p;
var G__47523 = x;
var G__47524 = loom.alg.bk_gen(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,s_p,s_x], null),cljs.core.pop(stack));
vs = G__47520;
max_clqs = G__47521;
p = G__47522;
x = G__47523;
stack = G__47524;
continue;

}
}

}
}
break;
}
});
/**
 * Enumerate the maximal cliques using Bron-Kerbosch.
 */
loom.alg.maximal_cliques = (function loom$alg$maximal_cliques(g){
return loom.alg.bk(g);
});
/**
 * Returns true iff g1 is a subgraph of g2. An undirected graph is never
 *   considered as a subgraph of a directed graph and vice versa.
 */
loom.alg.subgraph_QMARK_ = (function loom$alg$subgraph_QMARK_(g1,g2){
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loom.graph.directed_QMARK_(g1),loom.graph.directed_QMARK_(g2));
if(and__4210__auto__){
var edge_test_fn = ((loom.graph.directed_QMARK_(g1))?loom.graph.has_edge_QMARK_:(function (g,x,y){
var or__4212__auto__ = loom.graph.has_edge_QMARK_(g,x,y);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return loom.graph.has_edge_QMARK_(g,y,x);
}
}));
return ((cljs.core.every_QMARK_((function (p1__47414_SHARP_){
return loom.graph.has_node_QMARK_(g2,p1__47414_SHARP_);
}),loom.graph.nodes(g1))) && (cljs.core.every_QMARK_((function (p__47415){
var vec__47416 = p__47415;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(1),null);
return (edge_test_fn.cljs$core$IFn$_invoke$arity$3 ? edge_test_fn.cljs$core$IFn$_invoke$arity$3(g2,x,y) : edge_test_fn.call(null,g2,x,y));
}),loom.graph.edges(g1))));
} else {
return and__4210__auto__;
}
});
/**
 * Returns true iff g1 is a subgraph of g2 and g2 is a subgraph of g1
 */
loom.alg.eql_QMARK_ = (function loom$alg$eql_QMARK_(g1,g2){
return ((loom.alg.subgraph_QMARK_(g1,g2)) && (loom.alg.subgraph_QMARK_(g2,g1)));
});
/**
 * Given a mapping phi between the vertices of two graphs, determine
 *   if the mapping is an isomorphism, e.g., {(phi x), (phi y)} connected
 *   in g2 iff {x, y} are connected in g1.
 */
loom.alg.isomorphism_QMARK_ = (function loom$alg$isomorphism_QMARK_(g1,g2,phi){
return loom.alg.eql_QMARK_(g2,loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(((loom.graph.directed_QMARK_(g1))?loom.graph.digraph():loom.graph.graph()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(phi,loom.graph.nodes(g1))),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47419){
var vec__47420 = p__47419;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47420,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47420,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(phi.cljs$core$IFn$_invoke$arity$1 ? phi.cljs$core$IFn$_invoke$arity$1(x) : phi.call(null,x)),(phi.cljs$core$IFn$_invoke$arity$1 ? phi.cljs$core$IFn$_invoke$arity$1(y) : phi.call(null,y))], null);
}),loom.graph.edges(g1))));
});

//# sourceMappingURL=loom.alg.js.map
