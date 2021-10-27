goog.provide('rdd.calculators.cost');
rdd.calculators.cost.labor_cost_for_process = (function rdd$calculators$cost$labor_cost_for_process(process){
var quantity = new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030).cljs$core$IFn$_invoke$arity$1(process);
var uom = new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(process);
var uom_code = new cljs.core.Keyword("uom","code","uom/code",1586244771).cljs$core$IFn$_invoke$arity$1(uom);
var labor_lines = new cljs.core.Keyword("process","labor","process/labor",-1905034288).cljs$core$IFn$_invoke$arity$1(process);
var total_labor_cost = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
var labor_duration = new cljs.core.Keyword("time","duration","time/duration",1380494101).cljs$core$IFn$_invoke$arity$1(cur);
var labor_interval_factor = new cljs.core.Keyword("scale","factor","scale/factor",-1188486358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884).cljs$core$IFn$_invoke$arity$1(cur));
var role_cost = new cljs.core.Keyword("currency.usd","cost","currency.usd/cost",-1697147324).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("labor","role","labor/role",-772441104).cljs$core$IFn$_invoke$arity$1(cur));
var role_interval_factor = new cljs.core.Keyword("scale","factor","scale/factor",-1188486358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("labor","role","labor/role",-772441104).cljs$core$IFn$_invoke$arity$1(cur)));
var normalized_role_cost = (role_cost * role_interval_factor);
var normalized = ((normalized_role_cost / labor_interval_factor) * labor_duration);
return (acc + normalized);
}),(0),labor_lines);
var normalized_cost = (total_labor_cost / quantity);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cost","cost",-1094861735),normalized_cost,new cljs.core.Keyword(null,"uom-code","uom-code",2058945992),uom_code], null);
});

//# sourceMappingURL=rdd.calculators.cost.js.map
