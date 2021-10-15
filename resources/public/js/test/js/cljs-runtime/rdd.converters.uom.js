goog.provide('rdd.converters.uom');
/**
 * Takes a set of conversions and generates a lookup table. 
 * 
 * Required keys for each entry: :from-uom-code :to-uom-code :quantity
 * 
 * '#{{:conversion-uuid 'Nhs-KWvQjyf-D2YMZM7bP', :from-uom-code 'kg', :to-uom-code 'gr', :quantity 1000}
 *   {:conversion-uuid 'ZqGv_fqNsZw0Zem7F2mLm', :from-uom-code 'gr', :to-uom-code 'gr', :quantity 1}
 *   {:conversion-uuid 'HrsYuIva9akIEH_0fQiGG', :from-uom-code 'pallet', :to-uom-code 'case', :quantity 50}
 *   {:conversion-uuid 'OciR1EXFmdsYe075q3szn', :from-uom-code 'lb', :to-uom-code 'gr', :quantity 453.1}
 *   {:conversion-uuid '9NpI7YvNXdjqeu9yNM9NT', :from-uom-code 'case', :to-uom-code 'lb', :quantity 25}}'
 * 
 * Returns:
 * 
 * {'gr' {'kg' 0.001, 'gr' 1, 'lb' 0.0022070183182520413}
 *  'kg' {'gr' 1000}
 *  'lb' {'gr' 453.1, 'case' 0.04}
 *  'case' {'lb' 25, 'pallet' 0.02}
 *  'pallet' {'case' 50}}
 * 
 * Example:
 * ```clojure
 * (generate-conversions-lookup-table conversions)
 * ```
 * 
 */
rdd.converters.uom.generate_conversions_lookup_table = (function rdd$converters$uom$generate_conversions_lookup_table(conversions){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52720){
var map__52723 = p__52720;
var map__52723__$1 = cljs.core.__destructure_map(map__52723);
var from_uom_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"from-uom-code","from-uom-code",2071994496));
var to_uom_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"to-uom-code","to-uom-code",-918637271));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
return cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_uom_code,from_uom_code], null),((1) / quantity)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_uom_code,to_uom_code], null),quantity);
}),cljs.core.PersistentArrayMap.EMPTY,conversions);
});
/**
 * Convert quantity from one UOM or a different UOM based on the conversion passed in.
 * 
 * Example: (quantity-in-uom 5 :case :lb conversions)
 * 
 * Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}
 * 
 * Returns error map if no path is found: {:has-error? true, :error-msg 'No path was found between :case and :lbs'}
 */
rdd.converters.uom.quantity_in_uom = (function rdd$converters$uom$quantity_in_uom(quantity,from,to,mapping){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1),new cljs.core.Keyword(null,"total","total",1916810418),quantity], null);
} else {
var graph = loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mapping], 0));
var path = loom.alg.bf_path(graph,from,to);
var missing_path_QMARK_ = (path == null);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52725,cur){
var map__52727 = p__52725;
var map__52727__$1 = cljs.core.__destructure_map(map__52727);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52727__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52727__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var factor__$1 = (cljs.core.truth_(head)?(factor * cljs.core.get.cljs$core$IFn$_invoke$arity$2(head,cur)):(1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"factor","factor",-2103172748),factor__$1,new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.get.cljs$core$IFn$_invoke$arity$2(mapping,cur)], null);
}),cljs.core.PersistentArrayMap.EMPTY,path);
var factor = new cljs.core.Keyword(null,"factor","factor",-2103172748).cljs$core$IFn$_invoke$arity$1(result);
if(missing_path_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-error?","has-error?",1984278765),true,new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),goog.string.format("No path was found between %s and %s",from,to)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"factor","factor",-2103172748),factor,new cljs.core.Keyword(null,"total","total",1916810418),(quantity * factor)], null);
}
}
});
/**
 * Convert quantity from one UOM or a different UOM based on the conversion passed in.
 * 
 * Example: (quantity-in-uom 5 :case :lb conversions)
 * 
 * Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}
 * 
 * Returns error map if no path is found: {:has-error? true, :error-msg 'No path was found between :case and :lbs'}
 */
rdd.converters.uom.has_path_from_to_QMARK_ = (function rdd$converters$uom$has_path_from_to_QMARK_(from,to,mapping){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
return true;
} else {
var graph = loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mapping], 0));
var path = loom.alg.bf_path(graph,from,to);
return cljs.core.boolean$(path);
}
});

//# sourceMappingURL=rdd.converters.uom.js.map
