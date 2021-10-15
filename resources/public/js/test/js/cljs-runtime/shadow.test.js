goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__50535){
var vec__50536 = p__50535;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50536,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50536,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__50571 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__50571__$1 = (((G__50571 instanceof cljs.core.Keyword))?G__50571.fqn:null);
switch (G__50571__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__50577 = (function (){
var seq__50580 = cljs.core.seq(vars__$1);
var chunk__50581 = null;
var count__50582 = (0);
var i__50583 = (0);
while(true){
if((i__50583 < count__50582)){
var v = chunk__50581.cljs$core$IIndexed$_nth$arity$2(null,i__50583);
var temp__5753__auto___50758 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___50758)){
var t_50759 = temp__5753__auto___50758;
var G__50591_50760 = ((function (seq__50580,chunk__50581,count__50582,i__50583,t_50759,temp__5753__auto___50758,v,each_fixture_fn,G__50571,G__50571__$1,env,once_fixtures,each_fixtures,vec__50536,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_50759)));
});})(seq__50580,chunk__50581,count__50582,i__50583,t_50759,temp__5753__auto___50758,v,each_fixture_fn,G__50571,G__50571__$1,env,once_fixtures,each_fixtures,vec__50536,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__50591_50760) : each_fixture_fn.call(null,G__50591_50760));
} else {
}


var G__50761 = seq__50580;
var G__50762 = chunk__50581;
var G__50763 = count__50582;
var G__50764 = (i__50583 + (1));
seq__50580 = G__50761;
chunk__50581 = G__50762;
count__50582 = G__50763;
i__50583 = G__50764;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50580);
if(temp__5753__auto__){
var seq__50580__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50580__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50580__$1);
var G__50765 = cljs.core.chunk_rest(seq__50580__$1);
var G__50766 = c__4638__auto__;
var G__50767 = cljs.core.count(c__4638__auto__);
var G__50768 = (0);
seq__50580 = G__50765;
chunk__50581 = G__50766;
count__50582 = G__50767;
i__50583 = G__50768;
continue;
} else {
var v = cljs.core.first(seq__50580__$1);
var temp__5753__auto___50769__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___50769__$1)){
var t_50770 = temp__5753__auto___50769__$1;
var G__50592_50771 = ((function (seq__50580,chunk__50581,count__50582,i__50583,t_50770,temp__5753__auto___50769__$1,v,seq__50580__$1,temp__5753__auto__,each_fixture_fn,G__50571,G__50571__$1,env,once_fixtures,each_fixtures,vec__50536,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_50770)));
});})(seq__50580,chunk__50581,count__50582,i__50583,t_50770,temp__5753__auto___50769__$1,v,seq__50580__$1,temp__5753__auto__,each_fixture_fn,G__50571,G__50571__$1,env,once_fixtures,each_fixtures,vec__50536,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__50592_50771) : each_fixture_fn.call(null,G__50592_50771));
} else {
}


var G__50772 = cljs.core.next(seq__50580__$1);
var G__50773 = null;
var G__50774 = (0);
var G__50775 = (0);
seq__50580 = G__50772;
chunk__50581 = G__50773;
count__50582 = G__50774;
i__50583 = G__50775;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__50576 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__50576.cljs$core$IFn$_invoke$arity$1 ? fexpr__50576.cljs$core$IFn$_invoke$arity$1(G__50577) : fexpr__50576.call(null,G__50577));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50571__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__50534_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__50534_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__50611 = shadow.test.env.get_test_ns_info(ns);
var map__50611__$1 = cljs.core.__destructure_map(map__50611);
var test_ns = map__50611__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50611__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__50617,vars){
var map__50618 = p__50617;
var map__50618__$1 = cljs.core.__destructure_map(map__50618);
var env = map__50618__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__50620_50776 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__50622_50777 = null;
var count__50623_50778 = (0);
var i__50624_50779 = (0);
while(true){
if((i__50624_50779 < count__50623_50778)){
var vec__50645_50780 = chunk__50622_50777.cljs$core$IIndexed$_nth$arity$2(null,i__50624_50779);
var test_ns_50781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50645_50780,(0),null);
var ns_info_50782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50645_50780,(1),null);
var map__50648_50783 = ns_info_50782;
var map__50648_50784__$1 = cljs.core.__destructure_map(map__50648_50783);
var fixtures_50785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50648_50784__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___50787 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_50785);
if(cljs.core.truth_(temp__5753__auto___50787)){
var fix_50788 = temp__5753__auto___50787;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_50781,fix_50788], 0));
} else {
}

var temp__5753__auto___50789 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_50785);
if(cljs.core.truth_(temp__5753__auto___50789)){
var fix_50790 = temp__5753__auto___50789;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_50781,fix_50790], 0));
} else {
}


var G__50791 = seq__50620_50776;
var G__50792 = chunk__50622_50777;
var G__50793 = count__50623_50778;
var G__50794 = (i__50624_50779 + (1));
seq__50620_50776 = G__50791;
chunk__50622_50777 = G__50792;
count__50623_50778 = G__50793;
i__50624_50779 = G__50794;
continue;
} else {
var temp__5753__auto___50795 = cljs.core.seq(seq__50620_50776);
if(temp__5753__auto___50795){
var seq__50620_50796__$1 = temp__5753__auto___50795;
if(cljs.core.chunked_seq_QMARK_(seq__50620_50796__$1)){
var c__4638__auto___50797 = cljs.core.chunk_first(seq__50620_50796__$1);
var G__50798 = cljs.core.chunk_rest(seq__50620_50796__$1);
var G__50799 = c__4638__auto___50797;
var G__50800 = cljs.core.count(c__4638__auto___50797);
var G__50801 = (0);
seq__50620_50776 = G__50798;
chunk__50622_50777 = G__50799;
count__50623_50778 = G__50800;
i__50624_50779 = G__50801;
continue;
} else {
var vec__50649_50802 = cljs.core.first(seq__50620_50796__$1);
var test_ns_50803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50649_50802,(0),null);
var ns_info_50804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50649_50802,(1),null);
var map__50652_50805 = ns_info_50804;
var map__50652_50806__$1 = cljs.core.__destructure_map(map__50652_50805);
var fixtures_50807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50652_50806__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___50808__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_50807);
if(cljs.core.truth_(temp__5753__auto___50808__$1)){
var fix_50809 = temp__5753__auto___50808__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_50803,fix_50809], 0));
} else {
}

var temp__5753__auto___50810__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_50807);
if(cljs.core.truth_(temp__5753__auto___50810__$1)){
var fix_50811 = temp__5753__auto___50810__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_50803,fix_50811], 0));
} else {
}


var G__50812 = cljs.core.next(seq__50620_50796__$1);
var G__50813 = null;
var G__50814 = (0);
var G__50815 = (0);
seq__50620_50776 = G__50812;
chunk__50622_50777 = G__50813;
count__50623_50778 = G__50814;
i__50624_50779 = G__50815;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50616_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__50616_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__50666 = cljs.test.get_current_env();
var map__50666__$1 = cljs.core.__destructure_map(map__50666);
var env = map__50666__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50666__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50666__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__50668 = arguments.length;
switch (G__50668) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__50674 = arguments.length;
switch (G__50674) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__50676 = shadow.test.env.get_test_ns_info(ns);
var map__50676__$1 = cljs.core.__destructure_map(map__50676);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50676__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__50682 = arguments.length;
switch (G__50682) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50679_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__50679_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__50751 = arguments.length;
switch (G__50751) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50689_SHARP_){
var or__4212__auto__ = (re == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50689_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
