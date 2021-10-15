goog.provide('loom.graph');

/**
 * @interface
 */
loom.graph.Graph = function(){};

var loom$graph$Graph$nodes$dyn_47066 = (function (g){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.nodes[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4510__auto__.call(null,g));
} else {
var m__4508__auto__ = (loom.graph.nodes["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4508__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Graph.nodes",g);
}
}
});
/**
 * Returns a collection of the nodes in graph g
 */
loom.graph.nodes = (function loom$graph$nodes(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$nodes$arity$1 == null)))))){
return g.loom$graph$Graph$nodes$arity$1(g);
} else {
return loom$graph$Graph$nodes$dyn_47066(g);
}
});

var loom$graph$Graph$edges$dyn_47072 = (function (g){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.edges[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4510__auto__.call(null,g));
} else {
var m__4508__auto__ = (loom.graph.edges["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4508__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Graph.edges",g);
}
}
});
/**
 * Edges in g. May return each edge twice in an undirected graph
 */
loom.graph.edges = (function loom$graph$edges(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$edges$arity$1 == null)))))){
return g.loom$graph$Graph$edges$arity$1(g);
} else {
return loom$graph$Graph$edges$dyn_47072(g);
}
});

var loom$graph$Graph$has_node_QMARK_$dyn_47073 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4510__auto__.call(null,g,node));
} else {
var m__4508__auto__ = (loom.graph.has_node_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4508__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.has-node?",g);
}
}
});
/**
 * Returns true when node is in g
 */
loom.graph.has_node_QMARK_ = (function loom$graph$has_node_QMARK_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_node_QMARK_$arity$2 == null)))))){
return g.loom$graph$Graph$has_node_QMARK_$arity$2(g,node);
} else {
return loom$graph$Graph$has_node_QMARK_$dyn_47073(g,node);
}
});

var loom$graph$Graph$has_edge_QMARK_$dyn_47074 = (function (g,n1,n2){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4510__auto__.call(null,g,n1,n2));
} else {
var m__4508__auto__ = (loom.graph.has_edge_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4508__auto__.call(null,g,n1,n2));
} else {
throw cljs.core.missing_protocol("Graph.has-edge?",g);
}
}
});
/**
 * Returns true when edge [n1 n2] is in g
 */
loom.graph.has_edge_QMARK_ = (function loom$graph$has_edge_QMARK_(g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_edge_QMARK_$arity$3 == null)))))){
return g.loom$graph$Graph$has_edge_QMARK_$arity$3(g,n1,n2);
} else {
return loom$graph$Graph$has_edge_QMARK_$dyn_47074(g,n1,n2);
}
});

var loom$graph$Graph$successors_STAR_$dyn_47075 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.successors_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4510__auto__.call(null,g,node));
} else {
var m__4508__auto__ = (loom.graph.successors_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4508__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.successors*",g);
}
}
});
/**
 * Returns direct successors of node
 */
loom.graph.successors_STAR_ = (function loom$graph$successors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$successors_STAR_$arity$2 == null)))))){
return g.loom$graph$Graph$successors_STAR_$arity$2(g,node);
} else {
return loom$graph$Graph$successors_STAR_$dyn_47075(g,node);
}
});

var loom$graph$Graph$out_degree$dyn_47076 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.out_degree[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4510__auto__.call(null,g,node));
} else {
var m__4508__auto__ = (loom.graph.out_degree["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4508__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.out-degree",g);
}
}
});
/**
 * Returns the number of outgoing edges of node
 */
loom.graph.out_degree = (function loom$graph$out_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_degree$arity$2 == null)))))){
return g.loom$graph$Graph$out_degree$arity$2(g,node);
} else {
return loom$graph$Graph$out_degree$dyn_47076(g,node);
}
});

var loom$graph$Graph$out_edges$dyn_47077 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.out_edges[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4510__auto__.call(null,g,node));
} else {
var m__4508__auto__ = (loom.graph.out_edges["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4508__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.out-edges",g);
}
}
});
/**
 * Returns all the outgoing edges of node
 */
loom.graph.out_edges = (function loom$graph$out_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_edges$arity$2 == null)))))){
return g.loom$graph$Graph$out_edges$arity$2(g,node);
} else {
return loom$graph$Graph$out_edges$dyn_47077(g,node);
}
});


/**
 * @interface
 */
loom.graph.Digraph = function(){};

var loom$graph$Digraph$predecessors_STAR_$dyn_47078 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.predecessors_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4510__auto__.call(null,g,node));
} else {
var m__4508__auto__ = (loom.graph.predecessors_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4508__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.predecessors*",g);
}
}
});
/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors_STAR_ = (function loom$graph$predecessors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$predecessors_STAR_$arity$2 == null)))))){
return g.loom$graph$Digraph$predecessors_STAR_$arity$2(g,node);
} else {
return loom$graph$Digraph$predecessors_STAR_$dyn_47078(g,node);
}
});

var loom$graph$Digraph$in_degree$dyn_47080 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.in_degree[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4510__auto__.call(null,g,node));
} else {
var m__4508__auto__ = (loom.graph.in_degree["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4508__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.in-degree",g);
}
}
});
/**
 * Returns the number of direct predecessors to node
 */
loom.graph.in_degree = (function loom$graph$in_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_degree$arity$2 == null)))))){
return g.loom$graph$Digraph$in_degree$arity$2(g,node);
} else {
return loom$graph$Digraph$in_degree$dyn_47080(g,node);
}
});

var loom$graph$Digraph$in_edges$dyn_47082 = (function (g,node){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.in_edges[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4510__auto__.call(null,g,node));
} else {
var m__4508__auto__ = (loom.graph.in_edges["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4508__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.in-edges",g);
}
}
});
/**
 * Returns all the incoming edges of node
 */
loom.graph.in_edges = (function loom$graph$in_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_edges$arity$2 == null)))))){
return g.loom$graph$Digraph$in_edges$arity$2(g,node);
} else {
return loom$graph$Digraph$in_edges$dyn_47082(g,node);
}
});

var loom$graph$Digraph$transpose$dyn_47090 = (function (g){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.transpose[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4510__auto__.call(null,g));
} else {
var m__4508__auto__ = (loom.graph.transpose["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4508__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Digraph.transpose",g);
}
}
});
/**
 * Returns a graph with all edges reversed
 */
loom.graph.transpose = (function loom$graph$transpose(g){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$transpose$arity$1 == null)))))){
return g.loom$graph$Digraph$transpose$arity$1(g);
} else {
return loom$graph$Digraph$transpose$dyn_47090(g);
}
});


/**
 * @interface
 */
loom.graph.WeightedGraph = function(){};

var loom$graph$WeightedGraph$weight_STAR_$dyn_47091 = (function() {
var G__47096 = null;
var G__47096__2 = (function (g,e){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,e) : m__4510__auto__.call(null,g,e));
} else {
var m__4508__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,e) : m__4508__auto__.call(null,g,e));
} else {
throw cljs.core.missing_protocol("WeightedGraph.weight*",g);
}
}
});
var G__47096__3 = (function (g,n1,n2){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4510__auto__.call(null,g,n1,n2));
} else {
var m__4508__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4508__auto__.call(null,g,n1,n2));
} else {
throw cljs.core.missing_protocol("WeightedGraph.weight*",g);
}
}
});
G__47096 = function(g,n1,n2){
switch(arguments.length){
case 2:
return G__47096__2.call(this,g,n1);
case 3:
return G__47096__3.call(this,g,n1,n2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47096.cljs$core$IFn$_invoke$arity$2 = G__47096__2;
G__47096.cljs$core$IFn$_invoke$arity$3 = G__47096__3;
return G__47096;
})()
;
/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight_STAR_ = (function loom$graph$weight_STAR_(var_args){
var G__46541 = arguments.length;
switch (G__46541) {
case 2:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$2 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$2(g,e);
} else {
return loom$graph$WeightedGraph$weight_STAR_$dyn_47091(g,e);
}
}));

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$3 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$3(g,n1,n2);
} else {
return loom$graph$WeightedGraph$weight_STAR_$dyn_47091(g,n1,n2);
}
}));

(loom.graph.weight_STAR_.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
loom.graph.EditableGraph = function(){};

var loom$graph$EditableGraph$add_nodes_STAR_$dyn_47131 = (function (g,nodes){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4510__auto__.call(null,g,nodes));
} else {
var m__4508__auto__ = (loom.graph.add_nodes_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4508__auto__.call(null,g,nodes));
} else {
throw cljs.core.missing_protocol("EditableGraph.add-nodes*",g);
}
}
});
/**
 * Add nodes to graph g. See add-nodes
 */
loom.graph.add_nodes_STAR_ = (function loom$graph$add_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2(g,nodes);
} else {
return loom$graph$EditableGraph$add_nodes_STAR_$dyn_47131(g,nodes);
}
});

var loom$graph$EditableGraph$add_edges_STAR_$dyn_47132 = (function (g,edges){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4510__auto__.call(null,g,edges));
} else {
var m__4508__auto__ = (loom.graph.add_edges_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4508__auto__.call(null,g,edges));
} else {
throw cljs.core.missing_protocol("EditableGraph.add-edges*",g);
}
}
});
/**
 * Add edges to graph g. See add-edges
 */
loom.graph.add_edges_STAR_ = (function loom$graph$add_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_edges_STAR_$arity$2(g,edges);
} else {
return loom$graph$EditableGraph$add_edges_STAR_$dyn_47132(g,edges);
}
});

var loom$graph$EditableGraph$remove_nodes_STAR_$dyn_47133 = (function (g,nodes){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4510__auto__.call(null,g,nodes));
} else {
var m__4508__auto__ = (loom.graph.remove_nodes_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4508__auto__.call(null,g,nodes));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-nodes*",g);
}
}
});
/**
 * Remove nodes from graph g. See remove-nodes
 */
loom.graph.remove_nodes_STAR_ = (function loom$graph$remove_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2(g,nodes);
} else {
return loom$graph$EditableGraph$remove_nodes_STAR_$dyn_47133(g,nodes);
}
});

var loom$graph$EditableGraph$remove_edges_STAR_$dyn_47134 = (function (g,edges){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4510__auto__.call(null,g,edges));
} else {
var m__4508__auto__ = (loom.graph.remove_edges_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4508__auto__.call(null,g,edges));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-edges*",g);
}
}
});
/**
 * Removes edges from graph g. See remove-edges
 */
loom.graph.remove_edges_STAR_ = (function loom$graph$remove_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2(g,edges);
} else {
return loom$graph$EditableGraph$remove_edges_STAR_$dyn_47134(g,edges);
}
});

var loom$graph$EditableGraph$remove_all$dyn_47135 = (function (g){
var x__4509__auto__ = (((g == null))?null:g);
var m__4510__auto__ = (loom.graph.remove_all[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4510__auto__.call(null,g));
} else {
var m__4508__auto__ = (loom.graph.remove_all["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4508__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-all",g);
}
}
});
/**
 * Removes all nodes and edges from graph g
 */
loom.graph.remove_all = (function loom$graph$remove_all(g){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_all$arity$1 == null)))))){
return g.loom$graph$EditableGraph$remove_all$arity$1(g);
} else {
return loom$graph$EditableGraph$remove_all$dyn_47135(g);
}
});


/**
 * @interface
 */
loom.graph.Edge = function(){};

var loom$graph$Edge$src$dyn_47136 = (function (edge){
var x__4509__auto__ = (((edge == null))?null:edge);
var m__4510__auto__ = (loom.graph.src[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4510__auto__.call(null,edge));
} else {
var m__4508__auto__ = (loom.graph.src["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4508__auto__.call(null,edge));
} else {
throw cljs.core.missing_protocol("Edge.src",edge);
}
}
});
/**
 * Returns the source node of the edge
 */
loom.graph.src = (function loom$graph$src(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$src$arity$1 == null)))))){
return edge.loom$graph$Edge$src$arity$1(edge);
} else {
return loom$graph$Edge$src$dyn_47136(edge);
}
});

var loom$graph$Edge$dest$dyn_47137 = (function (edge){
var x__4509__auto__ = (((edge == null))?null:edge);
var m__4510__auto__ = (loom.graph.dest[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4510__auto__.call(null,edge));
} else {
var m__4508__auto__ = (loom.graph.dest["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4508__auto__.call(null,edge));
} else {
throw cljs.core.missing_protocol("Edge.dest",edge);
}
}
});
/**
 * Returns the dest node of the edge
 */
loom.graph.dest = (function loom$graph$dest(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$dest$arity$1 == null)))))){
return edge.loom$graph$Edge$dest$arity$1(edge);
} else {
return loom$graph$Edge$dest$dyn_47137(edge);
}
});

(cljs.core.PersistentVector.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge__$1,(0));
}));

(cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge__$1,(1));
}));
(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));
/**
 * Returns direct successors of node
 */
loom.graph.successors = (function loom$graph$successors(var_args){
var G__46664 = arguments.length;
switch (G__46664) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__46657_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,p1__46657_SHARP_);
});
}));

(loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.successors_STAR_(g,node);
}));

(loom.graph.successors.cljs$lang$maxFixedArity = 2);

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors = (function loom$graph$predecessors(var_args){
var G__46671 = arguments.length;
switch (G__46671) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__46666_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,p1__46666_SHARP_);
});
}));

(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.predecessors_STAR_(g,node);
}));

(loom.graph.predecessors.cljs$lang$maxFixedArity = 2);

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight = (function loom$graph$weight(var_args){
var G__46675 = arguments.length;
switch (G__46675) {
case 1:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.weight,g);
}));

(loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
return loom.graph.weight_STAR_(g,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
return loom.graph.weight_STAR_(g,n1,n2);
}));

(loom.graph.weight.cljs$lang$maxFixedArity = 3);

/**
 * Adds nodes to graph g. Nodes can be any type of object
 */
loom.graph.add_nodes = (function loom$graph$add_nodes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47147 = arguments.length;
var i__4819__auto___47148 = (0);
while(true){
if((i__4819__auto___47148 < len__4818__auto___47147)){
args__4824__auto__.push((arguments[i__4819__auto___47148]));

var G__47149 = (i__4819__auto___47148 + (1));
i__4819__auto___47148 = G__47149;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_(g,nodes);
}));

(loom.graph.add_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_nodes.cljs$lang$applyTo = (function (seq46677){
var G__46678 = cljs.core.first(seq46677);
var seq46677__$1 = cljs.core.next(seq46677);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46678,seq46677__$1);
}));

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47150 = arguments.length;
var i__4819__auto___47151 = (0);
while(true){
if((i__4819__auto___47151 < len__4818__auto___47150)){
args__4824__auto__.push((arguments[i__4819__auto___47151]));

var G__47152 = (i__4819__auto___47151 + (1));
i__4819__auto___47151 = G__47152;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_(g,edges);
}));

(loom.graph.add_edges.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_edges.cljs$lang$applyTo = (function (seq46679){
var G__46680 = cljs.core.first(seq46679);
var seq46679__$1 = cljs.core.next(seq46679);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46680,seq46679__$1);
}));

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47153 = arguments.length;
var i__4819__auto___47154 = (0);
while(true){
if((i__4819__auto___47154 < len__4818__auto___47153)){
args__4824__auto__.push((arguments[i__4819__auto___47154]));

var G__47155 = (i__4819__auto___47154 + (1));
i__4819__auto___47154 = G__47155;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_(g,nodes);
}));

(loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq46681){
var G__46682 = cljs.core.first(seq46681);
var seq46681__$1 = cljs.core.next(seq46681);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46682,seq46681__$1);
}));

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47156 = arguments.length;
var i__4819__auto___47157 = (0);
while(true){
if((i__4819__auto___47157 < len__4818__auto___47156)){
args__4824__auto__.push((arguments[i__4819__auto___47157]));

var G__47158 = (i__4819__auto___47157 + (1));
i__4819__auto___47157 = G__47158;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_(g,edges);
}));

(loom.graph.remove_edges.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.remove_edges.cljs$lang$applyTo = (function (seq46688){
var G__46689 = cljs.core.first(seq46688);
var seq46688__$1 = cljs.core.next(seq46688);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46689,seq46688__$1);
}));


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
loom.graph.BasicEditableGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46691,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46706 = k46691;
var G__46706__$1 = (((G__46706 instanceof cljs.core.Keyword))?G__46706.fqn:null);
switch (G__46706__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46691,else__4464__auto__);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46715){
var vec__46716 = p__46715;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46716,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46716,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46690){
var self__ = this;
var G__46690__$1 = this;
return (new cljs.core.RecordIter((0),G__46690__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (446662859 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46692,other46693){
var self__ = this;
var this46692__$1 = this;
return (((!((other46693 == null)))) && ((((this46692__$1.constructor === other46693.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46692__$1.nodeset,other46693.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46692__$1.adj,other46693.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46692__$1.__extmap,other46693.__extmap)))))))));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46691){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46719 = k46691;
var G__46719__$1 = (((G__46719 instanceof cljs.core.Keyword))?G__46719.fqn:null);
switch (G__46719__$1) {
case "nodeset":
case "adj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46691);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46690){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46720 = cljs.core.keyword_identical_QMARK_;
var expr__46721 = k__4470__auto__;
if(cljs.core.truth_((pred__46720.cljs$core$IFn$_invoke$arity$2 ? pred__46720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__46721) : pred__46720.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__46721)))){
return (new loom.graph.BasicEditableGraph(G__46690,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46720.cljs$core$IFn$_invoke$arity$2 ? pred__46720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__46721) : pred__46720.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__46721)))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__46690,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46690),null));
}
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46690){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__46690,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
}));

(loom.graph.BasicEditableGraph.cljs$lang$type = true);

(loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableGraph",null,(1),null));
}));

(loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.graph/BasicEditableGraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableGraph.
 */
loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__46700){
var extmap__4501__auto__ = (function (){var G__46723 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46700,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__46700)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46723);
} else {
return G__46723;
}
})();
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__46700),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__46700),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
loom.graph.BasicEditableDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46725,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46729 = k46725;
var G__46729__$1 = (((G__46729 instanceof cljs.core.Keyword))?G__46729.fqn:null);
switch (G__46729__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46725,else__4464__auto__);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46730){
var vec__46731 = p__46730;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46731,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46731,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46724){
var self__ = this;
var G__46724__$1 = this;
return (new cljs.core.RecordIter((0),G__46724__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (324724442 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46726,other46727){
var self__ = this;
var this46726__$1 = this;
return (((!((other46727 == null)))) && ((((this46726__$1.constructor === other46727.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46726__$1.nodeset,other46727.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46726__$1.adj,other46727.adj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46726__$1.in,other46727.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46726__$1.__extmap,other46727.__extmap)))))))))));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46725){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46734 = k46725;
var G__46734__$1 = (((G__46734 instanceof cljs.core.Keyword))?G__46734.fqn:null);
switch (G__46734__$1) {
case "nodeset":
case "adj":
case "in":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46725);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46724){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46735 = cljs.core.keyword_identical_QMARK_;
var expr__46736 = k__4470__auto__;
if(cljs.core.truth_((pred__46735.cljs$core$IFn$_invoke$arity$2 ? pred__46735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__46736) : pred__46735.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__46736)))){
return (new loom.graph.BasicEditableDigraph(G__46724,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46735.cljs$core$IFn$_invoke$arity$2 ? pred__46735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__46736) : pred__46735.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__46736)))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__46724,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46735.cljs$core$IFn$_invoke$arity$2 ? pred__46735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__46736) : pred__46735.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__46736)))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__46724,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46724),null));
}
}
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46724){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__46724,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
}));

(loom.graph.BasicEditableDigraph.cljs$lang$type = true);

(loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableDigraph",null,(1),null));
}));

(loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.graph/BasicEditableDigraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableDigraph.
 */
loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__46728){
var extmap__4501__auto__ = (function (){var G__46738 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46728,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__46728)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46738);
} else {
return G__46738;
}
})();
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__46728),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__46728),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__46728),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
loom.graph.BasicEditableWeightedGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46740,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46744 = k46740;
var G__46744__$1 = (((G__46744 instanceof cljs.core.Keyword))?G__46744.fqn:null);
switch (G__46744__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46740,else__4464__auto__);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46745){
var vec__46746 = p__46745;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46746,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46746,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46739){
var self__ = this;
var G__46739__$1 = this;
return (new cljs.core.RecordIter((0),G__46739__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-212297308 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46741,other46742){
var self__ = this;
var this46741__$1 = this;
return (((!((other46742 == null)))) && ((((this46741__$1.constructor === other46742.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46741__$1.nodeset,other46742.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46741__$1.adj,other46742.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46741__$1.__extmap,other46742.__extmap)))))))));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46740){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46749 = k46740;
var G__46749__$1 = (((G__46749 instanceof cljs.core.Keyword))?G__46749.fqn:null);
switch (G__46749__$1) {
case "nodeset":
case "adj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46740);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46739){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46750 = cljs.core.keyword_identical_QMARK_;
var expr__46751 = k__4470__auto__;
if(cljs.core.truth_((pred__46750.cljs$core$IFn$_invoke$arity$2 ? pred__46750.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__46751) : pred__46750.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__46751)))){
return (new loom.graph.BasicEditableWeightedGraph(G__46739,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46750.cljs$core$IFn$_invoke$arity$2 ? pred__46750.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__46751) : pred__46750.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__46751)))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__46739,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46739),null));
}
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46739){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__46739,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
}));

(loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true);

(loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedGraph",null,(1),null));
}));

(loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.graph/BasicEditableWeightedGraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableWeightedGraph.
 */
loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__46743){
var extmap__4501__auto__ = (function (){var G__46753 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46743,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__46743)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46753);
} else {
return G__46753;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__46743),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__46743),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
loom.graph.BasicEditableWeightedDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46755,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46759 = k46755;
var G__46759__$1 = (((G__46759 instanceof cljs.core.Keyword))?G__46759.fqn:null);
switch (G__46759__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46755,else__4464__auto__);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46760){
var vec__46761 = p__46760;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46761,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46761,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46754){
var self__ = this;
var G__46754__$1 = this;
return (new cljs.core.RecordIter((0),G__46754__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1110931322 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46756,other46757){
var self__ = this;
var this46756__$1 = this;
return (((!((other46757 == null)))) && ((((this46756__$1.constructor === other46757.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46756__$1.nodeset,other46757.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46756__$1.adj,other46757.adj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46756__$1.in,other46757.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46756__$1.__extmap,other46757.__extmap)))))))))));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46755){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46764 = k46755;
var G__46764__$1 = (((G__46764 instanceof cljs.core.Keyword))?G__46764.fqn:null);
switch (G__46764__$1) {
case "nodeset":
case "adj":
case "in":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46755);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46754){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46765 = cljs.core.keyword_identical_QMARK_;
var expr__46766 = k__4470__auto__;
if(cljs.core.truth_((pred__46765.cljs$core$IFn$_invoke$arity$2 ? pred__46765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__46766) : pred__46765.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__46766)))){
return (new loom.graph.BasicEditableWeightedDigraph(G__46754,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46765.cljs$core$IFn$_invoke$arity$2 ? pred__46765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__46766) : pred__46765.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__46766)))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__46754,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46765.cljs$core$IFn$_invoke$arity$2 ? pred__46765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__46766) : pred__46765.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__46766)))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__46754,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46754),null));
}
}
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46754){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__46754,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
}));

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true);

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedDigraph",null,(1),null));
}));

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.graph/BasicEditableWeightedDigraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableWeightedDigraph.
 */
loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__46758){
var extmap__4501__auto__ = (function (){var G__46768 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46758,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__46758)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46768);
} else {
return G__46768;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__46758),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__46758),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__46758),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,n){
if(cljs.core.truth_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(n) : m__$1.call(null,n)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__46769_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(remove_fn,p1__46769_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,nodes),adjacents);
});
(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46772(s__46773){
return (new cljs.core.LazySeq(null,(function (){
var s__46773__$1 = s__46773;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46773__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__46773__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__46772_$_iter__46774(s__46775){
return (new cljs.core.LazySeq(null,((function (s__46773__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__46775__$1 = s__46775;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46775__$1);
if(temp__5753__auto____$1){
var s__46775__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46775__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46775__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46777 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46776 = (0);
while(true){
if((i__46776 < size__4610__auto__)){
var e = cljs.core._nth(c__4609__auto__,i__46776);
cljs.core.chunk_append(b__46777,e);

var G__47214 = (i__46776 + (1));
i__46776 = G__47214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46777),loom$graph$iter__46772_$_iter__46774(cljs.core.chunk_rest(s__46775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46777),null);
}
} else {
var e = cljs.core.first(s__46775__$2);
return cljs.core.cons(e,loom$graph$iter__46772_$_iter__46774(cljs.core.rest(s__46775__$2)));
}
} else {
return null;
}
break;
}
});})(s__46773__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__46773__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$iter__46772(cljs.core.rest(s__46773__$1)));
} else {
var G__47215 = cljs.core.rest(s__46773__$1);
s__46773__$1 = G__47215;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46778(s__46779){
return (new cljs.core.LazySeq(null,(function (){
var s__46779__$1 = s__46779;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46779__$1);
if(temp__5753__auto__){
var s__46779__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46779__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46779__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46781 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46780 = (0);
while(true){
if((i__46780 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46780);
cljs.core.chunk_append(b__46781,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__47216 = (i__46780 + (1));
i__46780 = G__47216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46781),loom$graph$iter__46778(cljs.core.chunk_rest(s__46779__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46781),null);
}
} else {
var n2 = cljs.core.first(s__46779__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__46778(cljs.core.rest(s__46779__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__46782){
var vec__46783 = p__46782;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46783,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46783,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46770_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__46770_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__46771_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__46771_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,nbrs,cljs.core.disj));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__46786){
var vec__46787 = p__46786;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46787,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46787,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY], 0));
}));
(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46793(s__46794){
return (new cljs.core.LazySeq(null,(function (){
var s__46794__$1 = s__46794;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46794__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__46794__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__46793_$_iter__46795(s__46796){
return (new cljs.core.LazySeq(null,((function (s__46794__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__46796__$1 = s__46796;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46796__$1);
if(temp__5753__auto____$1){
var s__46796__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46796__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46796__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46798 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46797 = (0);
while(true){
if((i__46797 < size__4610__auto__)){
var e = cljs.core._nth(c__4609__auto__,i__46797);
cljs.core.chunk_append(b__46798,e);

var G__47233 = (i__46797 + (1));
i__46797 = G__47233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46798),loom$graph$iter__46793_$_iter__46795(cljs.core.chunk_rest(s__46796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46798),null);
}
} else {
var e = cljs.core.first(s__46796__$2);
return cljs.core.cons(e,loom$graph$iter__46793_$_iter__46795(cljs.core.rest(s__46796__$2)));
}
} else {
return null;
}
break;
}
});})(s__46794__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__46794__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$iter__46793(cljs.core.rest(s__46794__$1)));
} else {
var G__47234 = cljs.core.rest(s__46794__$1);
s__46794__$1 = G__47234;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46799(s__46800){
return (new cljs.core.LazySeq(null,(function (){
var s__46800__$1 = s__46800;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46800__$1);
if(temp__5753__auto__){
var s__46800__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46800__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46800__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46802 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46801 = (0);
while(true){
if((i__46801 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46801);
cljs.core.chunk_append(b__46802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__47235 = (i__46801 + (1));
i__46801 = G__47235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46802),loom$graph$iter__46799(cljs.core.chunk_rest(s__46800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46802),null);
}
} else {
var n2 = cljs.core.first(s__46800__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__46799(cljs.core.rest(s__46800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__46803){
var vec__46804 = p__46803;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46804,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46804,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46790_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__46790_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46791_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__46791_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__46792_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__46792_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__46807){
var vec__46808 = p__46807;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46808,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46808,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46811(s__46812){
return (new cljs.core.LazySeq(null,(function (){
var s__46812__$1 = s__46812;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46812__$1);
if(temp__5753__auto__){
var s__46812__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46812__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46812__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46814 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46813 = (0);
while(true){
if((i__46813 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46813);
cljs.core.chunk_append(b__46814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__47244 = (i__46813 + (1));
i__46813 = G__47244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46814),loom$graph$iter__46811(cljs.core.chunk_rest(s__46812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46814),null);
}
} else {
var n2 = cljs.core.first(s__46812__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__46811(cljs.core.rest(s__46812__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),g__$1.in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),g__$1.adj], 0));
}));
(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46817(s__46818){
return (new cljs.core.LazySeq(null,(function (){
var s__46818__$1 = s__46818;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46818__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__46818__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__46817_$_iter__46819(s__46820){
return (new cljs.core.LazySeq(null,((function (s__46818__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__46820__$1 = s__46820;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46820__$1);
if(temp__5753__auto____$1){
var s__46820__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46820__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46820__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46822 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46821 = (0);
while(true){
if((i__46821 < size__4610__auto__)){
var e = cljs.core._nth(c__4609__auto__,i__46821);
cljs.core.chunk_append(b__46822,e);

var G__47247 = (i__46821 + (1));
i__46821 = G__47247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46822),loom$graph$iter__46817_$_iter__46819(cljs.core.chunk_rest(s__46820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46822),null);
}
} else {
var e = cljs.core.first(s__46820__$2);
return cljs.core.cons(e,loom$graph$iter__46817_$_iter__46819(cljs.core.rest(s__46820__$2)));
}
} else {
return null;
}
break;
}
});})(s__46818__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__46818__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$iter__46817(cljs.core.rest(s__46818__$1)));
} else {
var G__47250 = cljs.core.rest(s__46818__$1);
s__46818__$1 = G__47250;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46823(s__46824){
return (new cljs.core.LazySeq(null,(function (){
var s__46824__$1 = s__46824;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46824__$1);
if(temp__5753__auto__){
var s__46824__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46824__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46824__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46826 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46825 = (0);
while(true){
if((i__46825 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46825);
cljs.core.chunk_append(b__46826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__47251 = (i__46825 + (1));
i__46825 = G__47251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46826),loom$graph$iter__46823(cljs.core.chunk_rest(s__46824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46826),null);
}
} else {
var n2 = cljs.core.first(s__46824__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__46823(cljs.core.rest(s__46824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__46827){
var vec__46828 = p__46827;
var seq__46829 = cljs.core.seq(vec__46828);
var first__46830 = cljs.core.first(seq__46829);
var seq__46829__$1 = cljs.core.next(seq__46829);
var n1 = first__46830;
var first__46830__$1 = cljs.core.first(seq__46829__$1);
var seq__46829__$2 = cljs.core.next(seq__46829__$1);
var n2 = first__46830__$1;
var vec__46831 = seq__46829__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46831,(0),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4212__auto__ = w;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__4212__auto__ = w;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})());
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46815_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__46815_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__46816_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__46816_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,nbrs,cljs.core.dissoc));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__46834){
var vec__46835 = p__46834;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46835,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46835,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
}));
(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46841(s__46842){
return (new cljs.core.LazySeq(null,(function (){
var s__46842__$1 = s__46842;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46842__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__46842__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__46841_$_iter__46843(s__46844){
return (new cljs.core.LazySeq(null,((function (s__46842__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__46844__$1 = s__46844;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46844__$1);
if(temp__5753__auto____$1){
var s__46844__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46844__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46844__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46846 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46845 = (0);
while(true){
if((i__46845 < size__4610__auto__)){
var e = cljs.core._nth(c__4609__auto__,i__46845);
cljs.core.chunk_append(b__46846,e);

var G__47259 = (i__46845 + (1));
i__46845 = G__47259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46846),loom$graph$iter__46841_$_iter__46843(cljs.core.chunk_rest(s__46844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46846),null);
}
} else {
var e = cljs.core.first(s__46844__$2);
return cljs.core.cons(e,loom$graph$iter__46841_$_iter__46843(cljs.core.rest(s__46844__$2)));
}
} else {
return null;
}
break;
}
});})(s__46842__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__46842__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$iter__46841(cljs.core.rest(s__46842__$1)));
} else {
var G__47260 = cljs.core.rest(s__46842__$1);
s__46842__$1 = G__47260;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46847(s__46848){
return (new cljs.core.LazySeq(null,(function (){
var s__46848__$1 = s__46848;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46848__$1);
if(temp__5753__auto__){
var s__46848__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46848__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46848__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46850 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46849 = (0);
while(true){
if((i__46849 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46849);
cljs.core.chunk_append(b__46850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__47261 = (i__46849 + (1));
i__46849 = G__47261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46850),loom$graph$iter__46847(cljs.core.chunk_rest(s__46848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46850),null);
}
} else {
var n2 = cljs.core.first(s__46848__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__46847(cljs.core.rest(s__46848__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__46851){
var vec__46852 = p__46851;
var seq__46853 = cljs.core.seq(vec__46852);
var first__46854 = cljs.core.first(seq__46853);
var seq__46853__$1 = cljs.core.next(seq__46853);
var n1 = first__46854;
var first__46854__$1 = cljs.core.first(seq__46853__$1);
var seq__46853__$2 = cljs.core.next(seq__46853__$1);
var n2 = first__46854__$1;
var vec__46855 = seq__46853__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46855,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4212__auto__ = w;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46838_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__46838_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46839_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__46839_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__46840_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__46840_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__46858){
var vec__46859 = p__46858;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46859,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46859,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46862(s__46863){
return (new cljs.core.LazySeq(null,(function (){
var s__46863__$1 = s__46863;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46863__$1);
if(temp__5753__auto__){
var s__46863__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46863__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46863__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46865 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46864 = (0);
while(true){
if((i__46864 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46864);
cljs.core.chunk_append(b__46865,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__47266 = (i__46864 + (1));
i__46864 = G__47266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46865),loom$graph$iter__46862(cljs.core.chunk_rest(s__46863__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46865),null);
}
} else {
var n2 = cljs.core.first(s__46863__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__46862(cljs.core.rest(s__46863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tg,p__46866){
var vec__46867 = p__46866;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46867,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46867,(1),null);
return loom.graph.add_edges_STAR_(tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,n1,n2)], null)], null));
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0)),loom.graph.edges(g__$1));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
}));
loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47267 = arguments.length;
var i__4819__auto___47268 = (0);
while(true){
if((i__4819__auto___47268 < len__4818__auto___47267)){
args__4824__auto__.push((arguments[i__4819__auto___47268]));

var G__47269 = (i__4819__auto___47268 + (1));
i__4819__auto___47268 = G__47269;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return f;
}
}));

(loom.graph.call_or_return.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.call_or_return.cljs$lang$applyTo = (function (seq46870){
var G__46871 = cljs.core.first(seq46870);
var seq46870__$1 = cljs.core.next(seq46870);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46871,seq46870__$1);
}));


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
loom.graph.FlyGraph = (function (fnodes,fedges,fsuccessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46873,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46877 = k46873;
var G__46877__$1 = (((G__46877 instanceof cljs.core.Keyword))?G__46877.fqn:null);
switch (G__46877__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46873,else__4464__auto__);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46878){
var vec__46879 = p__46878;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46879,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46879,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.FlyGraph{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46872){
var self__ = this;
var G__46872__$1 = this;
return (new cljs.core.RecordIter((0),G__46872__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1546683162 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46874,other46875){
var self__ = this;
var this46874__$1 = this;
return (((!((other46875 == null)))) && ((((this46874__$1.constructor === other46875.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46874__$1.fnodes,other46875.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46874__$1.fedges,other46875.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46874__$1.fsuccessors,other46875.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46874__$1.start,other46875.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46874__$1.__extmap,other46875.__extmap)))))))))))));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46873){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46882 = k46873;
var G__46882__$1 = (((G__46882 instanceof cljs.core.Keyword))?G__46882.fqn:null);
switch (G__46882__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46873);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46872){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46883 = cljs.core.keyword_identical_QMARK_;
var expr__46884 = k__4470__auto__;
if(cljs.core.truth_((pred__46883.cljs$core$IFn$_invoke$arity$2 ? pred__46883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__46884) : pred__46883.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__46884)))){
return (new loom.graph.FlyGraph(G__46872,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46883.cljs$core$IFn$_invoke$arity$2 ? pred__46883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__46884) : pred__46883.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__46884)))){
return (new loom.graph.FlyGraph(self__.fnodes,G__46872,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46883.cljs$core$IFn$_invoke$arity$2 ? pred__46883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__46884) : pred__46883.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__46884)))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__46872,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46883.cljs$core$IFn$_invoke$arity$2 ? pred__46883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__46884) : pred__46883.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__46884)))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__46872,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46872),null));
}
}
}
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46872){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__46872,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.FlyGraph.cljs$lang$type = true);

(loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/FlyGraph",null,(1),null));
}));

(loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.graph/FlyGraph");
}));

/**
 * Positional factory function for loom.graph/FlyGraph.
 */
loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__46876){
var extmap__4501__auto__ = (function (){var G__46886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46876,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__46876)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46886);
} else {
return G__46886;
}
})();
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__46876),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__46876),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__46876),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__46876),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
loom.graph.FlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46888,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46892 = k46888;
var G__46892__$1 = (((G__46892 instanceof cljs.core.Keyword))?G__46892.fqn:null);
switch (G__46892__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46888,else__4464__auto__);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46893){
var vec__46894 = p__46893;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46894,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46894,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46887){
var self__ = this;
var G__46887__$1 = this;
return (new cljs.core.RecordIter((0),G__46887__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (1981361804 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46889,other46890){
var self__ = this;
var this46889__$1 = this;
return (((!((other46890 == null)))) && ((((this46889__$1.constructor === other46890.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46889__$1.fnodes,other46890.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46889__$1.fedges,other46890.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46889__$1.fsuccessors,other46890.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46889__$1.fpredecessors,other46890.fpredecessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46889__$1.start,other46890.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46889__$1.__extmap,other46890.__extmap)))))))))))))));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46888){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46897 = k46888;
var G__46897__$1 = (((G__46897 instanceof cljs.core.Keyword))?G__46897.fqn:null);
switch (G__46897__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fpredecessors":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46888);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46887){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46898 = cljs.core.keyword_identical_QMARK_;
var expr__46899 = k__4470__auto__;
if(cljs.core.truth_((pred__46898.cljs$core$IFn$_invoke$arity$2 ? pred__46898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__46899) : pred__46898.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__46899)))){
return (new loom.graph.FlyDigraph(G__46887,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46898.cljs$core$IFn$_invoke$arity$2 ? pred__46898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__46899) : pred__46898.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__46899)))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__46887,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46898.cljs$core$IFn$_invoke$arity$2 ? pred__46898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__46899) : pred__46898.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__46899)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__46887,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46898.cljs$core$IFn$_invoke$arity$2 ? pred__46898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__46899) : pred__46898.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__46899)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__46887,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46898.cljs$core$IFn$_invoke$arity$2 ? pred__46898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__46899) : pred__46898.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__46899)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__46887,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46887),null));
}
}
}
}
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46887){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__46887,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.FlyDigraph.cljs$lang$type = true);

(loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/FlyDigraph",null,(1),null));
}));

(loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.graph/FlyDigraph");
}));

/**
 * Positional factory function for loom.graph/FlyDigraph.
 */
loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__46891){
var extmap__4501__auto__ = (function (){var G__46901 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46891,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__46891)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46901);
} else {
return G__46901;
}
})();
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__46891),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__46891),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__46891),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__46891),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__46891),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
loom.graph.WeightedFlyGraph = (function (fnodes,fedges,fsuccessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46903,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46907 = k46903;
var G__46907__$1 = (((G__46907 instanceof cljs.core.Keyword))?G__46907.fqn:null);
switch (G__46907__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46903,else__4464__auto__);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46908){
var vec__46909 = p__46908;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46909,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46909,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46902){
var self__ = this;
var G__46902__$1 = this;
return (new cljs.core.RecordIter((0),G__46902__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1357917791 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46904,other46905){
var self__ = this;
var this46904__$1 = this;
return (((!((other46905 == null)))) && ((((this46904__$1.constructor === other46905.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46904__$1.fnodes,other46905.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46904__$1.fedges,other46905.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46904__$1.fsuccessors,other46905.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46904__$1.fweight,other46905.fweight)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46904__$1.start,other46905.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46904__$1.__extmap,other46905.__extmap)))))))))))))));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46903){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46912 = k46903;
var G__46912__$1 = (((G__46912 instanceof cljs.core.Keyword))?G__46912.fqn:null);
switch (G__46912__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fweight":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46903);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46902){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46913 = cljs.core.keyword_identical_QMARK_;
var expr__46914 = k__4470__auto__;
if(cljs.core.truth_((pred__46913.cljs$core$IFn$_invoke$arity$2 ? pred__46913.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__46914) : pred__46913.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__46914)))){
return (new loom.graph.WeightedFlyGraph(G__46902,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46913.cljs$core$IFn$_invoke$arity$2 ? pred__46913.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__46914) : pred__46913.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__46914)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__46902,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46913.cljs$core$IFn$_invoke$arity$2 ? pred__46913.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__46914) : pred__46913.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__46914)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__46902,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46913.cljs$core$IFn$_invoke$arity$2 ? pred__46913.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__46914) : pred__46913.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__46914)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__46902,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46913.cljs$core$IFn$_invoke$arity$2 ? pred__46913.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__46914) : pred__46913.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__46914)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__46902,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46902),null));
}
}
}
}
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46902){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__46902,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.WeightedFlyGraph.cljs$lang$type = true);

(loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyGraph",null,(1),null));
}));

(loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.graph/WeightedFlyGraph");
}));

/**
 * Positional factory function for loom.graph/WeightedFlyGraph.
 */
loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__46906){
var extmap__4501__auto__ = (function (){var G__46916 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46906,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__46906)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46916);
} else {
return G__46916;
}
})();
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__46906),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__46906),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__46906),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__46906),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__46906),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
loom.graph.WeightedFlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46918,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46922 = k46918;
var G__46922__$1 = (((G__46922 instanceof cljs.core.Keyword))?G__46922.fqn:null);
switch (G__46922__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46918,else__4464__auto__);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46923){
var vec__46924 = p__46923;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46924,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46924,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46917){
var self__ = this;
var G__46917__$1 = this;
return (new cljs.core.RecordIter((0),G__46917__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (788097524 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46919,other46920){
var self__ = this;
var this46919__$1 = this;
return (((!((other46920 == null)))) && ((((this46919__$1.constructor === other46920.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46919__$1.fnodes,other46920.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46919__$1.fedges,other46920.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46919__$1.fsuccessors,other46920.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46919__$1.fpredecessors,other46920.fpredecessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46919__$1.fweight,other46920.fweight)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46919__$1.start,other46920.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46919__$1.__extmap,other46920.__extmap)))))))))))))))));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46918){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46927 = k46918;
var G__46927__$1 = (((G__46927 instanceof cljs.core.Keyword))?G__46927.fqn:null);
switch (G__46927__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fpredecessors":
case "fweight":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46918);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46917){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46928 = cljs.core.keyword_identical_QMARK_;
var expr__46929 = k__4470__auto__;
if(cljs.core.truth_((pred__46928.cljs$core$IFn$_invoke$arity$2 ? pred__46928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__46929) : pred__46928.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__46929)))){
return (new loom.graph.WeightedFlyDigraph(G__46917,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46928.cljs$core$IFn$_invoke$arity$2 ? pred__46928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__46929) : pred__46928.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__46929)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__46917,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46928.cljs$core$IFn$_invoke$arity$2 ? pred__46928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__46929) : pred__46928.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__46929)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__46917,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46928.cljs$core$IFn$_invoke$arity$2 ? pred__46928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__46929) : pred__46928.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__46929)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__46917,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46928.cljs$core$IFn$_invoke$arity$2 ? pred__46928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__46929) : pred__46928.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__46929)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__46917,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46928.cljs$core$IFn$_invoke$arity$2 ? pred__46928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__46929) : pred__46928.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__46929)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__46917,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46917),null));
}
}
}
}
}
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46917){
var self__ = this;
var this__4460__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__46917,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.WeightedFlyDigraph.cljs$lang$type = true);

(loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyDigraph",null,(1),null));
}));

(loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"loom.graph/WeightedFlyDigraph");
}));

/**
 * Positional factory function for loom.graph/WeightedFlyDigraph.
 */
loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__46921){
var extmap__4501__auto__ = (function (){var G__46931 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46921,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__46921)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46931);
} else {
return G__46931;
}
})();
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__46921),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__46921),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__46921),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__46921),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__46921),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__46921),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

(loom.graph.FlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4212__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4611__auto__ = (function loom$graph$iter__46932(s__46933){
return (new cljs.core.LazySeq(null,(function (){
var s__46933__$1 = s__46933;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46933__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__46933__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__46932_$_iter__46934(s__46935){
return (new cljs.core.LazySeq(null,((function (s__46933__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__46935__$1 = s__46935;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46935__$1);
if(temp__5753__auto____$1){
var s__46935__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46935__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46935__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46937 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46936 = (0);
while(true){
if((i__46936 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__46936);
cljs.core.chunk_append(b__46937,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__47312 = (i__46936 + (1));
i__46936 = G__47312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46937),loom$graph$iter__46932_$_iter__46934(cljs.core.chunk_rest(s__46935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46937),null);
}
} else {
var nbr = cljs.core.first(s__46935__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__46932_$_iter__46934(cljs.core.rest(s__46935__$2)));
}
} else {
return null;
}
break;
}
});})(s__46933__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__46933__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$iter__46932(cljs.core.rest(s__46933__$1)));
} else {
var G__47313 = cljs.core.rest(s__46933__$1);
s__46933__$1 = G__47313;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46938(s__46939){
return (new cljs.core.LazySeq(null,(function (){
var s__46939__$1 = s__46939;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46939__$1);
if(temp__5753__auto__){
var s__46939__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46939__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46939__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46941 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46940 = (0);
while(true){
if((i__46940 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46940);
cljs.core.chunk_append(b__46941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__47315 = (i__46940 + (1));
i__46940 = G__47315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46941),loom$graph$iter__46938(cljs.core.chunk_rest(s__46939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46941),null);
}
} else {
var n2 = cljs.core.first(s__46939__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__46938(cljs.core.rest(s__46939__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));
(loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4212__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4611__auto__ = (function loom$graph$iter__46942(s__46943){
return (new cljs.core.LazySeq(null,(function (){
var s__46943__$1 = s__46943;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46943__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__46943__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__46942_$_iter__46944(s__46945){
return (new cljs.core.LazySeq(null,((function (s__46943__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__46945__$1 = s__46945;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46945__$1);
if(temp__5753__auto____$1){
var s__46945__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46945__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46945__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46947 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46946 = (0);
while(true){
if((i__46946 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__46946);
cljs.core.chunk_append(b__46947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__47316 = (i__46946 + (1));
i__46946 = G__47316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46947),loom$graph$iter__46942_$_iter__46944(cljs.core.chunk_rest(s__46945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46947),null);
}
} else {
var nbr = cljs.core.first(s__46945__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__46942_$_iter__46944(cljs.core.rest(s__46945__$2)));
}
} else {
return null;
}
break;
}
});})(s__46943__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__46943__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$iter__46942(cljs.core.rest(s__46943__$1)));
} else {
var G__47317 = cljs.core.rest(s__46943__$1);
s__46943__$1 = G__47317;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46948(s__46949){
return (new cljs.core.LazySeq(null,(function (){
var s__46949__$1 = s__46949;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46949__$1);
if(temp__5753__auto__){
var s__46949__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46949__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46949__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46951 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46950 = (0);
while(true){
if((i__46950 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46950);
cljs.core.chunk_append(b__46951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__47318 = (i__46950 + (1));
i__46950 = G__47318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46951),loom$graph$iter__46948(cljs.core.chunk_rest(s__46949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46951),null);
}
} else {
var n2 = cljs.core.first(s__46949__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__46948(cljs.core.rest(s__46949__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fpredecessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46952(s__46953){
return (new cljs.core.LazySeq(null,(function (){
var s__46953__$1 = s__46953;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46953__$1);
if(temp__5753__auto__){
var s__46953__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46953__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46953__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46955 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46954 = (0);
while(true){
if((i__46954 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46954);
cljs.core.chunk_append(b__46955,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__47319 = (i__46954 + (1));
i__46954 = G__47319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46955),loom$graph$iter__46952(cljs.core.chunk_rest(s__46953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46955),null);
}
} else {
var n2 = cljs.core.first(s__46953__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__46952(cljs.core.rest(s__46953__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));
(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4212__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4611__auto__ = (function loom$graph$iter__46956(s__46957){
return (new cljs.core.LazySeq(null,(function (){
var s__46957__$1 = s__46957;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46957__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__46957__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__46956_$_iter__46958(s__46959){
return (new cljs.core.LazySeq(null,((function (s__46957__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__46959__$1 = s__46959;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46959__$1);
if(temp__5753__auto____$1){
var s__46959__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46959__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46959__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46961 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46960 = (0);
while(true){
if((i__46960 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__46960);
cljs.core.chunk_append(b__46961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__47320 = (i__46960 + (1));
i__46960 = G__47320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46961),loom$graph$iter__46956_$_iter__46958(cljs.core.chunk_rest(s__46959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46961),null);
}
} else {
var nbr = cljs.core.first(s__46959__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__46956_$_iter__46958(cljs.core.rest(s__46959__$2)));
}
} else {
return null;
}
break;
}
});})(s__46957__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__46957__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$iter__46956(cljs.core.rest(s__46957__$1)));
} else {
var G__47321 = cljs.core.rest(s__46957__$1);
s__46957__$1 = G__47321;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46962(s__46963){
return (new cljs.core.LazySeq(null,(function (){
var s__46963__$1 = s__46963;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46963__$1);
if(temp__5753__auto__){
var s__46963__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46963__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46963__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46965 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46964 = (0);
while(true){
if((i__46964 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46964);
cljs.core.chunk_append(b__46965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__47322 = (i__46964 + (1));
i__46964 = G__47322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46965),loom$graph$iter__46962(cljs.core.chunk_rest(s__46963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46965),null);
}
} else {
var n2 = cljs.core.first(s__46963__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__46962(cljs.core.rest(s__46963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fweight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
}));
(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4212__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4611__auto__ = (function loom$graph$iter__46966(s__46967){
return (new cljs.core.LazySeq(null,(function (){
var s__46967__$1 = s__46967;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46967__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__46967__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__46966_$_iter__46968(s__46969){
return (new cljs.core.LazySeq(null,((function (s__46967__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__46969__$1 = s__46969;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46969__$1);
if(temp__5753__auto____$1){
var s__46969__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46969__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46969__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46971 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46970 = (0);
while(true){
if((i__46970 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__46970);
cljs.core.chunk_append(b__46971,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__47323 = (i__46970 + (1));
i__46970 = G__47323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46971),loom$graph$iter__46966_$_iter__46968(cljs.core.chunk_rest(s__46969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46971),null);
}
} else {
var nbr = cljs.core.first(s__46969__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__46966_$_iter__46968(cljs.core.rest(s__46969__$2)));
}
} else {
return null;
}
break;
}
});})(s__46967__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__46967__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$iter__46966(cljs.core.rest(s__46967__$1)));
} else {
var G__47324 = cljs.core.rest(s__46967__$1);
s__46967__$1 = G__47324;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46972(s__46973){
return (new cljs.core.LazySeq(null,(function (){
var s__46973__$1 = s__46973;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46973__$1);
if(temp__5753__auto__){
var s__46973__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46973__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46973__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46975 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46974 = (0);
while(true){
if((i__46974 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46974);
cljs.core.chunk_append(b__46975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__47325 = (i__46974 + (1));
i__46974 = G__47325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46975),loom$graph$iter__46972(cljs.core.chunk_rest(s__46973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46975),null);
}
} else {
var n2 = cljs.core.first(s__46973__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__46972(cljs.core.rest(s__46973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fpredecessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4611__auto__ = (function loom$graph$iter__46976(s__46977){
return (new cljs.core.LazySeq(null,(function (){
var s__46977__$1 = s__46977;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46977__$1);
if(temp__5753__auto__){
var s__46977__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46977__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46977__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46979 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46978 = (0);
while(true){
if((i__46978 < size__4610__auto__)){
var n2 = cljs.core._nth(c__4609__auto__,i__46978);
cljs.core.chunk_append(b__46979,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__47326 = (i__46978 + (1));
i__46978 = G__47326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46979),loom$graph$iter__46976(cljs.core.chunk_rest(s__46977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46979),null);
}
} else {
var n2 = cljs.core.first(s__46977__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__46976(cljs.core.rest(s__46977__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fweight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
}));
/**
 * Returns a graph with only the given nodes
 */
loom.graph.subgraph = (function loom$graph$subgraph(g,ns){
return loom.graph.remove_nodes_STAR_(g,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ns),loom.graph.nodes(g)));
});
/**
 * Adds a path of edges connecting the given nodes in order
 */
loom.graph.add_path = (function loom$graph$add_path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47327 = arguments.length;
var i__4819__auto___47328 = (0);
while(true){
if((i__4819__auto___47328 < len__4818__auto___47327)){
args__4824__auto__.push((arguments[i__4819__auto___47328]));

var G__47329 = (i__4819__auto___47328 + (1));
i__4819__auto___47328 = G__47329;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_(g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
}));

(loom.graph.add_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_path.cljs$lang$applyTo = (function (seq46980){
var G__46981 = cljs.core.first(seq46980);
var seq46980__$1 = cljs.core.next(seq46980);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46981,seq46980__$1);
}));

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47330 = arguments.length;
var i__4819__auto___47335 = (0);
while(true){
if((i__4819__auto___47335 < len__4818__auto___47330)){
args__4824__auto__.push((arguments[i__4819__auto___47335]));

var G__47336 = (i__4819__auto___47335 + (1));
i__4819__auto___47335 = G__47336;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_(g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(nodes)], null))));
}));

(loom.graph.add_cycle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_cycle.cljs$lang$applyTo = (function (seq46982){
var G__46983 = cljs.core.first(seq46982);
var seq46982__$1 = cljs.core.next(seq46982);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46983,seq46982__$1);
}));

/**
 * Returns true if g satisfies the Graph protocol
 */
loom.graph.graph_QMARK_ = (function loom$graph$graph_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Graph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(loom.graph.Graph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.Graph,g);
}
});
/**
 * Returns true if g satisfies the Digraph protocol
 */
loom.graph.directed_QMARK_ = (function loom$graph$directed_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Digraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(loom.graph.Digraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.Digraph,g);
}
});
/**
 * Returns true if g satisfies the WeightedGraph protocol
 */
loom.graph.weighted_QMARK_ = (function loom$graph$weighted_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$WeightedGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(loom.graph.WeightedGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.WeightedGraph,g);
}
});
/**
 * Returns true if g satisfies the EditableGraph protocol
 */
loom.graph.editable_QMARK_ = (function loom$graph$editable_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$EditableGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(loom.graph.EditableGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.EditableGraph,g);
}
});
/**
 * Builds up a graph (i.e. adds edges and nodes) from any combination of
 *   other graphs, adjacency maps, edges, or nodes.
 */
loom.graph.build_graph = (function loom$graph$build_graph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47337 = arguments.length;
var i__4819__auto___47338 = (0);
while(true){
if((i__4819__auto___47338 < len__4818__auto___47337)){
args__4824__auto__.push((arguments[i__4819__auto___47338]));

var G__47339 = (i__4819__auto___47338 + (1));
i__4819__auto___47338 = G__47339;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(loom.graph.graph_QMARK_(init)){
if(((loom.graph.weighted_QMARK_(g__$1)) && (loom.graph.weighted_QMARK_(init)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),(function (){var iter__4611__auto__ = (function loom$graph$build_$_iter__47024(s__47025){
return (new cljs.core.LazySeq(null,(function (){
var s__47025__$1 = s__47025;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47025__$1);
if(temp__5753__auto__){
var s__47025__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47025__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47025__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47027 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47026 = (0);
while(true){
if((i__47026 < size__4610__auto__)){
var vec__47028 = cljs.core._nth(c__4609__auto__,i__47026);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47028,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47028,(1),null);
cljs.core.chunk_append(b__47027,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null));

var G__47342 = (i__47026 + (1));
i__47026 = G__47342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47027),loom$graph$build_$_iter__47024(cljs.core.chunk_rest(s__47025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47027),null);
}
} else {
var vec__47031 = cljs.core.first(s__47025__$2);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null),loom$graph$build_$_iter__47024(cljs.core.rest(s__47025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(loom.graph.edges(init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),loom.graph.edges(init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)], 0)));
}
} else {
if(cljs.core.map_QMARK_(init)){
var es = ((cljs.core.map_QMARK_(cljs.core.val(cljs.core.first(init))))?(function (){var iter__4611__auto__ = (function loom$graph$build_$_iter__47034(s__47035){
return (new cljs.core.LazySeq(null,(function (){
var s__47035__$1 = s__47035;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47035__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__47040 = cljs.core.first(xs__6308__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47040,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47040,(1),null);
var iterys__4607__auto__ = ((function (s__47035__$1,vec__47040,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function loom$graph$build_$_iter__47034_$_iter__47036(s__47037){
return (new cljs.core.LazySeq(null,((function (s__47035__$1,vec__47040,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__47037__$1 = s__47037;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47037__$1);
if(temp__5753__auto____$1){
var s__47037__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47037__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47037__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47039 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47038 = (0);
while(true){
if((i__47038 < size__4610__auto__)){
var vec__47043 = cljs.core._nth(c__4609__auto__,i__47038);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47043,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47043,(1),null);
cljs.core.chunk_append(b__47039,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__47347 = (i__47038 + (1));
i__47038 = G__47347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47039),loom$graph$build_$_iter__47034_$_iter__47036(cljs.core.chunk_rest(s__47037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47039),null);
}
} else {
var vec__47046 = cljs.core.first(s__47037__$2);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__47034_$_iter__47036(cljs.core.rest(s__47037__$2)));
}
} else {
return null;
}
break;
}
});})(s__47035__$1,vec__47040,n,nbrs,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__47035__$1,vec__47040,n,nbrs,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(nbrs));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$build_$_iter__47034(cljs.core.rest(s__47035__$1)));
} else {
var G__47348 = cljs.core.rest(s__47035__$1);
s__47035__$1 = G__47348;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(init);
})():(function (){var iter__4611__auto__ = (function loom$graph$build_$_iter__47049(s__47050){
return (new cljs.core.LazySeq(null,(function (){
var s__47050__$1 = s__47050;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47050__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__47055 = cljs.core.first(xs__6308__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47055,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47055,(1),null);
var iterys__4607__auto__ = ((function (s__47050__$1,vec__47055,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function loom$graph$build_$_iter__47049_$_iter__47051(s__47052){
return (new cljs.core.LazySeq(null,((function (s__47050__$1,vec__47055,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__47052__$1 = s__47052;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47052__$1);
if(temp__5753__auto____$1){
var s__47052__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47052__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47052__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47054 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47053 = (0);
while(true){
if((i__47053 < size__4610__auto__)){
var nbr = cljs.core._nth(c__4609__auto__,i__47053);
cljs.core.chunk_append(b__47054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__47349 = (i__47053 + (1));
i__47053 = G__47349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47054),loom$graph$build_$_iter__47049_$_iter__47051(cljs.core.chunk_rest(s__47052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47054),null);
}
} else {
var nbr = cljs.core.first(s__47052__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__47049_$_iter__47051(cljs.core.rest(s__47052__$2)));
}
} else {
return null;
}
break;
}
});})(s__47050__$1,vec__47055,n,nbrs,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__47050__$1,vec__47055,n,nbrs,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(nbrs));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,loom$graph$build_$_iter__47049(cljs.core.rest(s__47050__$1)));
} else {
var G__47350 = cljs.core.rest(s__47050__$1);
s__47050__$1 = G__47350;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(init);
})());
return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,cljs.core.keys(init)),es);
} else {
if(cljs.core.sequential_QMARK_(init)){
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([init], 0));
} else {
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([init], 0));

}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(build,g,inits);
}));

(loom.graph.build_graph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.build_graph.cljs$lang$applyTo = (function (seq46988){
var G__46989 = cljs.core.first(seq46988);
var seq46988__$1 = cljs.core.next(seq46988);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46989,seq46988__$1);
}));

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47351 = arguments.length;
var i__4819__auto___47352 = (0);
while(true){
if((i__4819__auto___47352 < len__4818__auto___47351)){
args__4824__auto__.push((arguments[i__4819__auto___47352]));

var G__47353 = (i__4819__auto___47352 + (1));
i__4819__auto___47352 = G__47353;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.graph.cljs$lang$applyTo = (function (seq47058){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47058));
}));

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47354 = arguments.length;
var i__4819__auto___47355 = (0);
while(true){
if((i__4819__auto___47355 < len__4818__auto___47354)){
args__4824__auto__.push((arguments[i__4819__auto___47355]));

var G__47356 = (i__4819__auto___47355 + (1));
i__4819__auto___47355 = G__47356;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.digraph.cljs$lang$applyTo = (function (seq47059){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47059));
}));

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47357 = arguments.length;
var i__4819__auto___47358 = (0);
while(true){
if((i__4819__auto___47358 < len__4818__auto___47357)){
args__4824__auto__.push((arguments[i__4819__auto___47358]));

var G__47359 = (i__4819__auto___47358 + (1));
i__4819__auto___47358 = G__47359;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq47060){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47060));
}));

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47360 = arguments.length;
var i__4819__auto___47361 = (0);
while(true){
if((i__4819__auto___47361 < len__4818__auto___47360)){
args__4824__auto__.push((arguments[i__4819__auto___47361]));

var G__47362 = (i__4819__auto___47361 + (1));
i__4819__auto___47361 = G__47362;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq47061){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47061));
}));

/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47366 = arguments.length;
var i__4819__auto___47367 = (0);
while(true){
if((i__4819__auto___47367 < len__4818__auto___47366)){
args__4824__auto__.push((arguments[i__4819__auto___47367]));

var G__47369 = (i__4819__auto___47367 + (1));
i__4819__auto___47367 = G__47369;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__47063){
var map__47064 = p__47063;
var map__47064__$1 = cljs.core.__destructure_map(map__47064);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47064__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47064__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47064__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47064__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47064__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47064__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__4210__auto__ = predecessors;
if(cljs.core.truth_(and__4210__auto__)){
return weight;
} else {
return and__4210__auto__;
}
})())){
return (new loom.graph.WeightedFlyDigraph(nodes,edges,successors,predecessors,weight,start,null,null,null));
} else {
if(cljs.core.truth_(predecessors)){
return (new loom.graph.FlyDigraph(nodes,edges,successors,predecessors,start,null,null,null));
} else {
if(cljs.core.truth_(weight)){
return (new loom.graph.WeightedFlyGraph(nodes,edges,successors,weight,start,null,null,null));
} else {
return (new loom.graph.FlyGraph(nodes,edges,successors,start,null,null,null));

}
}
}
}));

(loom.graph.fly_graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.fly_graph.cljs$lang$applyTo = (function (seq47062){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47062));
}));


//# sourceMappingURL=loom.graph.js.map
