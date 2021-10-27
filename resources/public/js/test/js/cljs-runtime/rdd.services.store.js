goog.provide('rdd.services.store');
rdd.services.store.conn = (function rdd$services$store$conn(){
return cljs.core.deref(rdd.db.conn);
});
rdd.services.store.db = (function rdd$services$store$db(){
return datascript.core.db(rdd.services.store.conn());
});
rdd.services.store.item_entity_by_name = (function rdd$services$store$item_entity_by_name(name){
var G__47593 = rdd.services.store.db();
var G__47594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","name","item/name",1849015102),name], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__47593,G__47594) : datascript.core.entity.call(null,G__47593,G__47594));
});
rdd.services.store.get_atomic_items = (function rdd$services$store$get_atomic_items(){
var G__47596 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("item","production-type","item/production-type",-661862113),new cljs.core.Keyword("production.type","ATOM","production.type/ATOM",365207439)], null)], null);
var G__47597 = rdd.services.store.db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__47596,G__47597) : datascript.core.q.call(null,G__47596,G__47597));
});
/**
 * Get all items
 */
rdd.services.store.get_items = (function rdd$services$store$get_items(){
var G__47601 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null)], null);
var G__47602 = rdd.services.store.db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__47601,G__47602) : datascript.core.q.call(null,G__47601,G__47602));
});
/**
 * Get all vendors
 */
rdd.services.store.get_vendors = (function rdd$services$store$get_vendors(){
var G__47603 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("company","uuid","company/uuid",1144826904),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null)], null);
var G__47604 = rdd.services.store.db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__47603,G__47604) : datascript.core.q.call(null,G__47603,G__47604));
});
/**
 * Get all uoms
 */
rdd.services.store.get_uoms = (function rdd$services$store$get_uoms(){
return cljs.core.flatten((function (){var G__47605 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("uom","type","uom/type",1175431839),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("uom","system","uom/system",-28940623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null)], null);
var G__47606 = rdd.services.store.db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__47605,G__47606) : datascript.core.q.call(null,G__47605,G__47606));
})());
});
/**
 * Get uom by uuid
 */
rdd.services.store.get_uom_by_uuid = (function rdd$services$store$get_uom_by_uuid(uuid){
return cljs.core.first((function (){var G__47607 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("uom","type","uom/type",1175431839),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("uom","system","uom/system",-28940623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null)], null))], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null)], null);
var G__47608 = rdd.services.store.db();
var G__47609 = uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47607,G__47608,G__47609) : datascript.core.q.call(null,G__47607,G__47608,G__47609));
})());
});
/**
 * Get all recipe line items
 */
rdd.services.store.get_recipe_line_items = (function rdd$services$store$get_recipe_line_items(){
var G__47610 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null)], null);
var G__47611 = rdd.services.store.db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__47610,G__47611) : datascript.core.q.call(null,G__47610,G__47611));
});
rdd.services.store.get_recipe_line_items();
/**
 * Get standard conversions for weight volume, for both metric and imperial
 */
rdd.services.store.get_standard_conversions = (function rdd$services$store$get_standard_conversions(){
var G__47612 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null),new cljs.core.Symbol(null,"?from-uom-code","?from-uom-code",-1976349563,null),new cljs.core.Symbol(null,"?to-uom-code","?to-uom-code",-1089665628,null),new cljs.core.Symbol(null,"?quantity","?quantity",1461073621,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"conversion-uuid","conversion-uuid",-1574376414,null),new cljs.core.Symbol(null,"from-uom-code","from-uom-code",-582441273,null),new cljs.core.Symbol(null,"to-uom-code","to-uom-code",721894256,null),new cljs.core.Symbol(null,"quantity","quantity",-288519167,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null),new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null),new cljs.core.Keyword("conversion","from","conversion/from",-370915014),new cljs.core.Symbol(null,"?from-uom","?from-uom",2092089542,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null),new cljs.core.Keyword("conversion","to","conversion/to",1982396849),new cljs.core.Symbol(null,"?to-uom","?to-uom",1158058911,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null),new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),new cljs.core.Symbol(null,"?quantity","?quantity",1461073621,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?from-uom","?from-uom",2092089542,null),new cljs.core.Keyword("uom","code","uom/code",1586244771),new cljs.core.Symbol(null,"?from-uom-code","?from-uom-code",-1976349563,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?to-uom","?to-uom",1158058911,null),new cljs.core.Keyword("uom","code","uom/code",1586244771),new cljs.core.Symbol(null,"?to-uom-code","?to-uom-code",-1089665628,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?from-uom","?from-uom",2092089542,null),new cljs.core.Keyword("uom","system","uom/system",-28940623),new cljs.core.Keyword("units.system","IMPERIAL","units.system/IMPERIAL",-1162011464)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?from-uom","?from-uom",2092089542,null),new cljs.core.Keyword("uom","system","uom/system",-28940623),new cljs.core.Keyword("units.system","METRIC","units.system/METRIC",250476212)], null)),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?to-uom","?to-uom",1158058911,null),new cljs.core.Keyword("uom","system","uom/system",-28940623),new cljs.core.Keyword("units.system","IMPERIAL","units.system/IMPERIAL",-1162011464)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?to-uom","?to-uom",1158058911,null),new cljs.core.Keyword("uom","system","uom/system",-28940623),new cljs.core.Keyword("units.system","METRIC","units.system/METRIC",250476212)], null))], null);
var G__47613 = rdd.services.store.db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__47612,G__47613) : datascript.core.q.call(null,G__47612,G__47613));
});
/**
 * Get custom, item specific conversions based on the item uuid
 * 
 * Returns a set of custom conversions
 */
rdd.services.store.get_custom_conversions = (function rdd$services$store$get_custom_conversions(item_uuid){
var G__47614 = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null),new cljs.core.Symbol(null,"?from-uom-code","?from-uom-code",-1976349563,null),new cljs.core.Symbol(null,"?to-uom-code","?to-uom-code",-1089665628,null),new cljs.core.Symbol(null,"?quantity","?quantity",1461073621,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"conversion-uuid","conversion-uuid",-1574376414,null),new cljs.core.Symbol(null,"from-uom-code","from-uom-code",-582441273,null),new cljs.core.Symbol(null,"to-uom-code","to-uom-code",721894256,null),new cljs.core.Symbol(null,"quantity","quantity",-288519167,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?item-uuid","?item-uuid",238747327,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?item","?item",-1098214516,null),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Symbol(null,"?item-uuid","?item-uuid",238747327,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null),new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?company-item","?company-item",-434974053,null),new cljs.core.Keyword("company-item","item","company-item/item",1080388811),new cljs.core.Symbol(null,"?item","?item",-1098214516,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?company-item","?company-item",-434974053,null),new cljs.core.Keyword("uom","conversions","uom/conversions",638040717),new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null),new cljs.core.Keyword("conversion","from","conversion/from",-370915014),new cljs.core.Symbol(null,"?from-uom","?from-uom",2092089542,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null),new cljs.core.Keyword("conversion","to","conversion/to",1982396849),new cljs.core.Symbol(null,"?to-uom","?to-uom",1158058911,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?conversion","?conversion",1694511216,null),new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),new cljs.core.Symbol(null,"?quantity","?quantity",1461073621,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?from-uom","?from-uom",2092089542,null),new cljs.core.Keyword("uom","code","uom/code",1586244771),new cljs.core.Symbol(null,"?from-uom-code","?from-uom-code",-1976349563,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?to-uom","?to-uom",1158058911,null),new cljs.core.Keyword("uom","code","uom/code",1586244771),new cljs.core.Symbol(null,"?to-uom-code","?to-uom-code",-1089665628,null)], null)], null);
var G__47615 = rdd.services.store.db();
var G__47616 = item_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47614,G__47615,G__47616) : datascript.core.q.call(null,G__47614,G__47615,G__47616));
});
/**
 * Get all conversions for the given item uuid.
 * This will return a set with conversions based on standard UOMs as well as 
 * custom conversions specific to this item.
 * 
 */
rdd.services.store.get_conversions_for_item = (function rdd$services$store$get_conversions_for_item(item_uuid){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(rdd.services.store.get_standard_conversions(),rdd.services.store.get_custom_conversions(item_uuid));
});
/**
 * Convert quantity from one UOM or a different UOM based on the conversions passed in.
 * 
 * Example: (quantity-in-uom '1uXwh_BaxU7BaWroGtHXA' 1 'lb' 'gr' vecotr-of-conversions)
 * 
 * Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}
 */
rdd.services.store.quantity_in_uom = (function rdd$services$store$quantity_in_uom(quantity,from,to,conversions){
var mapping = rdd.converters.uom.generate_conversions_lookup_table(conversions);
return rdd.converters.uom.quantity_in_uom(quantity,from,to,mapping);
});
/**
 * Convert quantity from one UOM or a different UOM based on the item-uuid passed in.
 * 
 * Example: (item-quantity-in-uom '1uXwh_BaxU7BaWroGtHXA' 1 'lb' 'gr')
 * 
 * Returns: {:quantity 5, :from :case, :to :lb, :factor 25, :total 125}
 */
rdd.services.store.item_quantity_in_uom = (function rdd$services$store$item_quantity_in_uom(item_uuid,quantity,from,to){
var conversions = rdd.services.store.get_conversions_for_item(item_uuid);
return rdd.services.store.quantity_in_uom(quantity,from,to,conversions);
});
rdd.services.store.has_path_from_to_QMARK_ = (function rdd$services$store$has_path_from_to_QMARK_(from,to,custom_conversions){
var conversions = clojure.set.union.cljs$core$IFn$_invoke$arity$2(rdd.services.store.get_standard_conversions(),custom_conversions);
var mapping = rdd.converters.uom.generate_conversions_lookup_table(conversions);
return rdd.converters.uom.has_path_from_to_QMARK_(from,to,mapping);
});
/**
 * Gets the type and system information for a uom by uuid 
 * Returns: [type system]
 */
rdd.services.store.get_uom_type_info = (function rdd$services$store$get_uom_type_info(uom_uuid){
var G__47617 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?type-ident","?type-ident",-1355222271,null),new cljs.core.Symbol(null,"?system-ident","?system-ident",1125706915,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?uom-uuid","?uom-uuid",-202961168,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uom","?uom",-350076863,null),new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Symbol(null,"?uom-uuid","?uom-uuid",-202961168,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uom","?uom",-350076863,null),new cljs.core.Keyword("uom","type","uom/type",1175431839),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?type","?type",-1287409101,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?type-ident","?type-ident",-1355222271,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uom","?uom",-350076863,null),new cljs.core.Keyword("uom","system","uom/system",-28940623),new cljs.core.Symbol(null,"?system","?system",1058337965,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?system","?system",1058337965,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?system-ident","?system-ident",1125706915,null)], null)], null);
var G__47618 = rdd.services.store.db();
var G__47619 = uom_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47617,G__47618,G__47619) : datascript.core.q.call(null,G__47617,G__47618,G__47619));
});
/**
 * Is the UOM of type standard? Either :units.type/WEIGHT or :units.type/VOLUME
 */
rdd.services.store.is_standard_uoms_QMARK_ = (function rdd$services$store$is_standard_uoms_QMARK_(uom_uuid){
var vec__47620 = rdd.services.store.get_uom_type_info(uom_uuid);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47620,(0),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("units.type","WEIGHT","units.type/WEIGHT",2881333))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("units.type","VOLUME","units.type/VOLUME",-1534907059))));
});
/**
 * Get all quotes for an item based on uuid
 */
rdd.services.store.item_quotes = (function rdd$services$store$item_quotes(item_uuid){
var G__47623 = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null),new cljs.core.Symbol(null,"?cost","?cost",-567120237,null),new cljs.core.Symbol(null,"?uom-code","?uom-code",-534015231,null),new cljs.core.Symbol(null,"?quantity","?quantity",1461073621,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),new cljs.core.Symbol(null,"cost","cost",545669792,null),new cljs.core.Symbol(null,"uom","uom",78280507,null),new cljs.core.Symbol(null,"quantity","quantity",-288519167,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?item-uuid","?item-uuid",238747327,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?item","?item",-1098214516,null),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Symbol(null,"?item-uuid","?item-uuid",238747327,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?company-item","?company-item",-434974053,null),new cljs.core.Keyword("company-item","item","company-item/item",1080388811),new cljs.core.Symbol(null,"?item","?item",-1098214516,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?company-item","?company-item",-434974053,null),new cljs.core.Keyword("company-item","quotes","company-item/quotes",1629149971),new cljs.core.Symbol(null,"?quote","?quote",-1213937304,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?quote","?quote",-1213937304,null),new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?quote","?quote",-1213937304,null),new cljs.core.Keyword("currency.usd","cost","currency.usd/cost",-1697147324),new cljs.core.Symbol(null,"?cost","?cost",-567120237,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?quote","?quote",-1213937304,null),new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),new cljs.core.Symbol(null,"?quantity","?quantity",1461073621,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?quote","?quote",-1213937304,null),new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),new cljs.core.Symbol(null,"?uom","?uom",-350076863,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uom","?uom",-350076863,null),new cljs.core.Keyword("uom","code","uom/code",1586244771),new cljs.core.Symbol(null,"?uom-code","?uom-code",-534015231,null)], null)], null);
var G__47624 = rdd.services.store.db();
var G__47625 = item_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47623,G__47624,G__47625) : datascript.core.q.call(null,G__47623,G__47624,G__47625));
});
/**
 * Returns a vector of quotes normalized by their uom
 */
rdd.services.store.normalized_costs_for_item = (function rdd$services$store$normalized_costs_for_item(item_uuid,in_uom_code){
var quotes = rdd.services.store.item_quotes(item_uuid);
var normalized_costs = (function (){var iter__4611__auto__ = (function rdd$services$store$normalized_costs_for_item_$_iter__47626(s__47627){
return (new cljs.core.LazySeq(null,(function (){
var s__47627__$1 = s__47627;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47627__$1);
if(temp__5753__auto__){
var s__47627__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47627__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47627__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47629 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47628 = (0);
while(true){
if((i__47628 < size__4610__auto__)){
var map__47630 = cljs.core._nth(c__4609__auto__,i__47628);
var map__47630__$1 = cljs.core.__destructure_map(map__47630);
var cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"cost","cost",-1094861735));
var uom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"uom","uom",-1562251020));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
cljs.core.chunk_append(b__47629,(function (){var conversion = rdd.services.store.item_quantity_in_uom(item_uuid,(1),uom,in_uom_code);
var factor = new cljs.core.Keyword(null,"factor","factor",-2103172748).cljs$core$IFn$_invoke$arity$1(conversion);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normalized-cost","normalized-cost",-346985681),((cost / quantity) / factor),new cljs.core.Keyword(null,"normalized-uom-code","normalized-uom-code",2044924712),in_uom_code], null);
})());

var G__47670 = (i__47628 + (1));
i__47628 = G__47670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47629),rdd$services$store$normalized_costs_for_item_$_iter__47626(cljs.core.chunk_rest(s__47627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47629),null);
}
} else {
var map__47631 = cljs.core.first(s__47627__$2);
var map__47631__$1 = cljs.core.__destructure_map(map__47631);
var cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47631__$1,new cljs.core.Keyword(null,"cost","cost",-1094861735));
var uom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47631__$1,new cljs.core.Keyword(null,"uom","uom",-1562251020));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47631__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
return cljs.core.cons((function (){var conversion = rdd.services.store.item_quantity_in_uom(item_uuid,(1),uom,in_uom_code);
var factor = new cljs.core.Keyword(null,"factor","factor",-2103172748).cljs$core$IFn$_invoke$arity$1(conversion);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normalized-cost","normalized-cost",-346985681),((cost / quantity) / factor),new cljs.core.Keyword(null,"normalized-uom-code","normalized-uom-code",2044924712),in_uom_code], null);
})(),rdd$services$store$normalized_costs_for_item_$_iter__47626(cljs.core.rest(s__47627__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(quotes);
})();
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"normalized-cost","normalized-cost",-346985681),normalized_costs);
});
/**
 * Get cost for a specific quantity and UOM based on item uuid
 * 
 * Example: (cost-for-qty '1uXwh_BaxU7BaWroGtHXA' 1000 'gr')
 * 
 * 
 */
rdd.services.store.cost_for_qty = (function rdd$services$store$cost_for_qty(item_uuid,to_quantity,to_uom_code){
var normalized_costs = rdd.services.store.normalized_costs_for_item(item_uuid,to_uom_code);
var cheapest_cost = cljs.core.first(normalized_costs);
var map__47632 = cheapest_cost;
var map__47632__$1 = cljs.core.__destructure_map(map__47632);
var normalized_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47632__$1,new cljs.core.Keyword(null,"normalized-cost","normalized-cost",-346985681));
var normalized_uom_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47632__$1,new cljs.core.Keyword(null,"normalized-uom-code","normalized-uom-code",2044924712));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalized_uom_code,to_uom_code)){
return (to_quantity * normalized_cost);
} else {
var conversion = rdd.services.store.item_quantity_in_uom(item_uuid,to_quantity,to_uom_code,normalized_uom_code);
var converted_cost = (new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(conversion) * normalized_cost);
if(cljs.core.truth_(Number.isNaN(converted_cost))){
return null;
} else {
return converted_cost;
}
}
});
rdd.services.store.company_items_for_item = (function rdd$services$store$company_items_for_item(item_uuid){
return cljs.core.flatten((function (){var G__47633 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?company-item","?company-item",-434974053,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("company-item","item","company-item/item",1080388811),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","uuid","item/uuid",2146626286)], null),new cljs.core.Keyword("company-item","quotes","company-item/quotes",1629149971),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307),new cljs.core.Keyword("currency.usd","cost","currency.usd/cost",-1697147324),new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Keyword("uom","code","uom/code",1586244771)], null)], null)], null),new cljs.core.Keyword("uom","conversions","uom/conversions",638040717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("conversion","from","conversion/from",-370915014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Keyword("uom","code","uom/code",1586244771)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("conversion","to","conversion/to",1982396849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Keyword("uom","code","uom/code",1586244771)], null)], null)], null)], null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?item-uuid","?item-uuid",238747327,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?item","?item",-1098214516,null),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Symbol(null,"?item-uuid","?item-uuid",238747327,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?company-item","?company-item",-434974053,null),new cljs.core.Keyword("company-item","item","company-item/item",1080388811),new cljs.core.Symbol(null,"?item","?item",-1098214516,null)], null)], null);
var G__47634 = rdd.services.store.db();
var G__47635 = item_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47633,G__47634,G__47635) : datascript.core.q.call(null,G__47633,G__47634,G__47635));
})());
});
rdd.services.store.get_companies = (function rdd$services$store$get_companies(){
var G__47636 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("company","uuid","company/uuid",1144826904),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null)], null);
var G__47637 = rdd.services.store.db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__47636,G__47637) : datascript.core.q.call(null,G__47636,G__47637));
});
rdd.services.store.get_companies_company_item = (function rdd$services$store$get_companies_company_item(company_uuid){
var G__47638 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?ci","?ci",1412448963,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?company-uuid","?company-uuid",-306405552,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?company","?company",679934999,null),new cljs.core.Keyword("company","uuid","company/uuid",1144826904),new cljs.core.Symbol(null,"?company-uuid","?company-uuid",-306405552,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?company","?company",679934999,null),new cljs.core.Keyword("company","company-items","company/company-items",1118165173),new cljs.core.Symbol(null,"?ci","?ci",1412448963,null)], null)], null);
var G__47639 = rdd.services.store.db();
var G__47640 = company_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47638,G__47639,G__47640) : datascript.core.q.call(null,G__47638,G__47639,G__47640));
});
rdd.services.store.build_atomic_item = (function rdd$services$store$build_atomic_item(item){
var item_uuid = new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(item);
var item_production_type = new cljs.core.Keyword("item","production-type","item/production-type",-661862113).cljs$core$IFn$_invoke$arity$1(item);
var item_name = new cljs.core.Keyword("item","name","item/name",1849015102).cljs$core$IFn$_invoke$arity$1(item);
var item_yield_uom_code = new cljs.core.Keyword("uom","code","uom/code",1586244771).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(item));
var item_cost_per_default_uom = rdd.services.store.cost_for_qty(item_uuid,(1),item_yield_uom_code);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("item","uuid","item/uuid",2146626286),item_uuid,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","production-type","item/production-type",-661862113),item_production_type,new cljs.core.Keyword("item","name","item/name",1849015102),item_name,new cljs.core.Keyword("item","yield-uom-code","item/yield-uom-code",-1730516718),item_yield_uom_code,new cljs.core.Keyword("item","cost-per-default-uom","item/cost-per-default-uom",954432316),item_cost_per_default_uom,new cljs.core.Keyword("item","company-items","item/company-items",991500035),rdd.services.store.company_items_for_item(item_uuid)], null);
});
rdd.services.store.calculate_item_process_cost = (function rdd$services$store$calculate_item_process_cost(item){
var item_uuid = new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(item);
var item_process = new cljs.core.Keyword("item","process","item/process",1621073255).cljs$core$IFn$_invoke$arity$1(item);
var item_yield_uom = new cljs.core.Keyword("uom","code","uom/code",1586244771).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(item));
var total_process_cost = rdd.calculators.cost.labor_cost_for_process(item_process);
var item_labor_cost_per_process_uom = new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(total_process_cost);
var process_qty__GT_item_yield_qty = rdd.services.store.item_quantity_in_uom(item_uuid,(1),new cljs.core.Keyword(null,"uom-code","uom-code",2058945992).cljs$core$IFn$_invoke$arity$1(total_process_cost),item_yield_uom);
var process_uom__GT_yield_uom_factor = new cljs.core.Keyword(null,"factor","factor",-2103172748).cljs$core$IFn$_invoke$arity$1(process_qty__GT_item_yield_qty);
return (item_labor_cost_per_process_uom / process_uom__GT_yield_uom_factor);
});
rdd.services.store.calculate_item_component_cost = (function rdd$services$store$calculate_item_component_cost(item,children){
var item_yield = new cljs.core.Keyword("measurement","yield","measurement/yield",1588004101).cljs$core$IFn$_invoke$arity$1(item);
var total_children_cost = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("recipe-line-item","total-cost","recipe-line-item/total-cost",-1489599048),children));
return (total_children_cost / item_yield);
});
rdd.services.store.process__GT_tree = (function rdd$services$store$process__GT_tree(p__47641){
var map__47642 = p__47641;
var map__47642__$1 = cljs.core.__destructure_map(map__47642);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47642__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var G__47643 = rdd.db.db();
var G__47644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","code","uom/code",1586244771)], null),new cljs.core.Keyword("process","labor","process/labor",-1905034288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("labor","role","labor/role",-772441104),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("role","uuid","role/uuid",2146365455)], null)], null)], null)], null)], null);
var G__47645 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__47643,G__47644,G__47645) : datascript.core.pull.call(null,G__47643,G__47644,G__47645));
});
rdd.services.store.build_composite_item = (function rdd$services$store$build_composite_item(item){
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(rdd.services.store.item__GT_tree_SINGLEQUOTE_,new cljs.core.Keyword("composite","contains","composite/contains",2110717577).cljs$core$IFn$_invoke$arity$1(item));
var item_production_type = new cljs.core.Keyword("item","production-type","item/production-type",-661862113).cljs$core$IFn$_invoke$arity$1(item);
var item_uuid = new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(item);
var item_name = new cljs.core.Keyword("item","name","item/name",1849015102).cljs$core$IFn$_invoke$arity$1(item);
var item_yield = new cljs.core.Keyword("measurement","yield","measurement/yield",1588004101).cljs$core$IFn$_invoke$arity$1(item);
var item_yield_uom = new cljs.core.Keyword("uom","code","uom/code",1586244771).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(item));
var item_component_cost_per_default_uom = rdd.services.store.calculate_item_component_cost(item,children);
var item_labor_cost_per_yield_uom = rdd.services.store.calculate_item_process_cost(item);
var total_cost_per_default_uom = (item_component_cost_per_default_uom + item_labor_cost_per_yield_uom);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("item","process","item/process",1621073255),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Keyword("item","yield-uom-code","item/yield-uom-code",-1730516718),new cljs.core.Keyword("item","yield","item/yield",172467540),new cljs.core.Keyword("item","children","item/children",-945444651),new cljs.core.Keyword("item","labor-cost","item/labor-cost",-1671593770),new cljs.core.Keyword("item","cost-per-default-uom","item/cost-per-default-uom",954432316),new cljs.core.Keyword("item","component-cost","item/component-cost",-1127488195),new cljs.core.Keyword("item","name","item/name",1849015102),new cljs.core.Keyword("item","production-type","item/production-type",-661862113)],[rdd.services.store.process__GT_tree(new cljs.core.Keyword("item","process","item/process",1621073255).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"item","item",249373802),item_uuid,item_yield_uom,item_yield,children,item_labor_cost_per_yield_uom,total_cost_per_default_uom,item_component_cost_per_default_uom,item_name,item_production_type]);
});
rdd.services.store.build_recipe_line_item = (function rdd$services$store$build_recipe_line_item(rli){
var child_item = new cljs.core.Keyword("recipe-line-item","item","recipe-line-item/item",-1593161667).cljs$core$IFn$_invoke$arity$1(rli);
var has_child_QMARK_ = cljs.core.boolean$(child_item);
var item = ((has_child_QMARK_)?(rdd.services.store.item__GT_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? rdd.services.store.item__GT_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(child_item) : rdd.services.store.item__GT_tree_SINGLEQUOTE_.call(null,child_item)):null);
var item_uuid = new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(item);
var recipe_line_item_uuid = new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960).cljs$core$IFn$_invoke$arity$1(rli);
var recipe_line_item_quantity = new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030).cljs$core$IFn$_invoke$arity$1(rli);
var recipe_line_item_quantity_uom_code = new cljs.core.Keyword("uom","code","uom/code",1586244771).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(rli));
var recipe_line_item_position = new cljs.core.Keyword("meta","position","meta/position",-2025172429).cljs$core$IFn$_invoke$arity$1(rli);
var recipe_line_item_company_item = new cljs.core.Keyword("recipe-line-item","company-item","recipe-line-item/company-item",-2126099007).cljs$core$IFn$_invoke$arity$1(rli);
var child_uom__GT_rli_uom_conversion = ((has_child_QMARK_)?new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(rdd.services.store.item_quantity_in_uom(item_uuid,recipe_line_item_quantity,recipe_line_item_quantity_uom_code,new cljs.core.Keyword("item","yield-uom-code","item/yield-uom-code",-1730516718).cljs$core$IFn$_invoke$arity$1(item))):null);
var converted_composite_item_cost = ((has_child_QMARK_)?(new cljs.core.Keyword("item","cost-per-default-uom","item/cost-per-default-uom",954432316).cljs$core$IFn$_invoke$arity$1(item) * child_uom__GT_rli_uom_conversion):null);
var recipe_line_item_total_cost = (function (){var or__4212__auto__ = converted_composite_item_cost;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return rdd.services.store.cost_for_qty(item_uuid,recipe_line_item_quantity,recipe_line_item_quantity_uom_code);
}
})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"recipe-line-item","recipe-line-item",-126360023),new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),recipe_line_item_uuid,new cljs.core.Keyword("recipe-line-item","quantity","recipe-line-item/quantity",-1166794105),recipe_line_item_quantity,new cljs.core.Keyword("recipe-line-item","total-cost","recipe-line-item/total-cost",-1489599048),recipe_line_item_total_cost,new cljs.core.Keyword("recipe-line-item","quantity-uom-code","recipe-line-item/quantity-uom-code",-1065059594),recipe_line_item_quantity_uom_code,new cljs.core.Keyword("recipe-line-item","position","recipe-line-item/position",-580680709),recipe_line_item_position,new cljs.core.Keyword("recipe-line-item","child-item","recipe-line-item/child-item",1642343111),item,new cljs.core.Keyword("recipe-line-item","company-item","recipe-line-item/company-item",-2126099007),recipe_line_item_company_item], null);
});
rdd.services.store.item__GT_tree_SINGLEQUOTE_ = (function rdd$services$store$item__GT_tree_SINGLEQUOTE_(e){
var G__47646 = new cljs.core.Keyword("item","production-type","item/production-type",-661862113).cljs$core$IFn$_invoke$arity$1(e);
var G__47646__$1 = (((G__47646 instanceof cljs.core.Keyword))?G__47646.fqn:null);
switch (G__47646__$1) {
case "production.type/ATOM":
return rdd.services.store.build_atomic_item(e);

break;
case "production.type/COMPOSITE":
return rdd.services.store.build_composite_item(e);

break;
default:
return rdd.services.store.build_recipe_line_item(e);

}
});
/**
 * Convert an item to a tree
 */
rdd.services.store.item__GT_tree = (function rdd$services$store$item__GT_tree(name){
var item_entity = rdd.services.store.item_entity_by_name(name);
if(cljs.core.truth_(item_entity)){
return rdd.services.store.item__GT_tree_SINGLEQUOTE_(item_entity);
} else {
return null;
}
});
rdd.services.store.update_recipe_line_item_quantity_BANG_ = (function rdd$services$store$update_recipe_line_item_quantity_BANG_(recipe_line_item_uuid,qty){
var parsed_quantity = parseFloat(qty);
var prepped_quantity = ((((typeof parsed_quantity === 'number') && ((parsed_quantity >= (0)))))?parsed_quantity:(0));
var has_recipe_line_item_uuid_QMARK_ = recipe_line_item_uuid;
if(cljs.core.truth_(has_recipe_line_item_uuid_QMARK_)){
var tx = rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),recipe_line_item_uuid], null),new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),prepped_quantity], null)], null)], 0));
var new_db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx);
return new_db;
} else {
return null;
}
});
rdd.services.store.update_item_yield_BANG_ = (function rdd$services$store$update_item_yield_BANG_(item_uuid,yield$){
var parsed_yield = parseFloat(yield$);
var prepped_yield = ((((typeof parsed_yield === 'number') && ((parsed_yield >= (0)))))?parsed_yield:(0));
var has_item_uuid_QMARK_ = item_uuid;
if(cljs.core.truth_(has_item_uuid_QMARK_)){
var tx = rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","uuid","item/uuid",2146626286),item_uuid], null),new cljs.core.Keyword("measurement","yield","measurement/yield",1588004101),prepped_yield], null)], null)], 0));
var new_db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx);
rdd.services.event_bus.publish_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword("update","item","update/item",-992355519),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"yield","yield",177875009),prepped_yield,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),item_uuid], null)], null));

return new_db;
} else {
return null;
}
});
rdd.services.store.get_item_uuid_by_eid = (function rdd$services$store$get_item_uuid_by_eid(db,eid){
return cljs.core.first((function (){var G__47647 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null)], null);
var G__47648 = db;
var G__47649 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47647,G__47648,G__47649) : datascript.core.q.call(null,G__47647,G__47648,G__47649));
})());
});
rdd.services.store.get_rli_uuid_by_eid = (function rdd$services$store$get_rli_uuid_by_eid(db,eid){
return cljs.core.first((function (){var G__47650 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null)], null);
var G__47651 = db;
var G__47652 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47650,G__47651,G__47652) : datascript.core.q.call(null,G__47650,G__47651,G__47652));
})());
});
rdd.services.store.update_item_yield_uom_BANG_ = (function rdd$services$store$update_item_yield_uom_BANG_(item_uuid,uom_uuid){
var has_item_uuid_QMARK_ = item_uuid;
if(cljs.core.truth_(has_item_uuid_QMARK_)){
var tx = rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","uuid","item/uuid",2146626286),item_uuid], null),new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),uom_uuid], null)], null)], null)], 0));
var new_db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx);
return new_db;
} else {
return null;
}
});
rdd.services.store.update_recipe_line_item_quantity_uom_BANG_ = (function rdd$services$store$update_recipe_line_item_quantity_uom_BANG_(rli_uuid,uom_uuid){
var has_recipe_line_item_uuid_QMARK_ = rli_uuid;
if(cljs.core.truth_(has_recipe_line_item_uuid_QMARK_)){
var tx = rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),rli_uuid], null),new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),uom_uuid], null)], null)], null)], 0));
var new_db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx);
return new_db;
} else {
return null;
}
});
rdd.services.store.get_rli_parent_item = (function rdd$services$store$get_rli_parent_item(db,rli_uuid){
return cljs.core.first((function (){var G__47653 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?item-uuid","?item-uuid",238747327,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?rli-uuid","?rli-uuid",2010620252,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?rli","?rli",1656855506,null),new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),new cljs.core.Symbol(null,"?rli-uuid","?rli-uuid",2010620252,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?item","?item",-1098214516,null),new cljs.core.Keyword("composite","contains","composite/contains",2110717577),new cljs.core.Symbol(null,"?rli","?rli",1656855506,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?item","?item",-1098214516,null),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Symbol(null,"?item-uuid","?item-uuid",238747327,null)], null)], null);
var G__47654 = db;
var G__47655 = rli_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47653,G__47654,G__47655) : datascript.core.q.call(null,G__47653,G__47654,G__47655));
})());
});
rdd.services.store.get_rli_position = (function rdd$services$store$get_rli_position(db,rli_uuid){
return cljs.core.first((function (){var G__47656 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?position","?position",-1576193716,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?rli-uuid","?rli-uuid",2010620252,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?rli","?rli",1656855506,null),new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),new cljs.core.Symbol(null,"?rli-uuid","?rli-uuid",2010620252,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?rli","?rli",1656855506,null),new cljs.core.Keyword("meta","position","meta/position",-2025172429),new cljs.core.Symbol(null,"?position","?position",-1576193716,null)], null)], null);
var G__47657 = db;
var G__47658 = rli_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47656,G__47657,G__47658) : datascript.core.q.call(null,G__47656,G__47657,G__47658));
})());
});
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"above","above",-1286866470),(0),new cljs.core.Keyword(null,"this","this",-611633625),(100),new cljs.core.Keyword(null,"below","below",-926774883),(1000)], null);
rdd.services.store.get_rli_siblings = (function rdd$services$store$get_rli_siblings(db,rli_uuid){
var positions = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var G__47659 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?sibling-uuid","?sibling-uuid",1160274717,null),new cljs.core.Symbol(null,"?position","?position",-1576193716,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),new cljs.core.Symbol(null,"position","position",-371200385,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?rli-uuid","?rli-uuid",2010620252,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?rli","?rli",1656855506,null),new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),new cljs.core.Symbol(null,"?rli-uuid","?rli-uuid",2010620252,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent-item","?parent-item",-502472327,null),new cljs.core.Keyword("composite","contains","composite/contains",2110717577),new cljs.core.Symbol(null,"?rli","?rli",1656855506,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent-item","?parent-item",-502472327,null),new cljs.core.Keyword("composite","contains","composite/contains",2110717577),new cljs.core.Symbol(null,"?siblings","?siblings",-1344596547,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?siblings","?siblings",-1344596547,null),new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),new cljs.core.Symbol(null,"?sibling-uuid","?sibling-uuid",1160274717,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?siblings","?siblings",-1344596547,null),new cljs.core.Keyword("meta","position","meta/position",-2025172429),new cljs.core.Symbol(null,"?position","?position",-1576193716,null)], null)], null);
var G__47660 = db;
var G__47661 = rli_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__47659,G__47660,G__47661) : datascript.core.q.call(null,G__47659,G__47660,G__47661));
})());
return positions;
});
/**
 * Returns the center point between two numbers
 * Will return a long
 * Example: (center-between-int 0 100) => 50
 * 
 */
rdd.services.store.center_between_int = (function rdd$services$store$center_between_int(a,b){
var high = (function (){var x__4295__auto__ = a;
var y__4296__auto__ = b;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var low = (function (){var x__4298__auto__ = a;
var y__4299__auto__ = b;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
var diff = (high - low);
var half_diff = (diff / (2));
return cljs.core.long$((low + half_diff));
});
rdd.services.store.position_info = (function rdd$services$store$position_info(rli_uuid,positions){
var current_rli = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47662_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__47662_SHARP_),rli_uuid);
}),positions));
var current_rli_index = positions.indexOf(current_rli);
var is_first_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),current_rli_index);
var is_last_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_rli_index,(cljs.core.count(positions) - (1)));
var previous_rli = ((is_first_QMARK_)?null:cljs.core.nth.cljs$core$IFn$_invoke$arity$2(positions,(current_rli_index - (1))));
var next_rli = ((is_last_QMARK_)?null:cljs.core.nth.cljs$core$IFn$_invoke$arity$2(positions,(current_rli_index + (1))));
var current_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(current_rli);
var previous_rli_position = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(previous_rli);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})();
var next_rli_position = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(next_rli);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (9007199254740991);
}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"next-position-after","next-position-after",300518757),new cljs.core.Keyword(null,"previous-rli-position","previous-rli-position",-2132069370),new cljs.core.Keyword(null,"previous-rli","previous-rli",-782228848),new cljs.core.Keyword(null,"next-position-before","next-position-before",1962152631),new cljs.core.Keyword(null,"next-rli-position","next-rli-position",-2147276232),new cljs.core.Keyword(null,"current-rli","current-rli",-726526342),new cljs.core.Keyword(null,"current-rli-index","current-rli-index",-1241338693),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"next-rli","next-rli",837390047)],[rdd.services.store.center_between_int(current_position,next_rli_position),previous_rli_position,previous_rli,rdd.services.store.center_between_int(current_position,previous_rli_position),next_rli_position,current_rli,current_rli_index,current_position,next_rli]);
});
rdd.services.store.create_sibling_recipe_line_item_BANG_ = (function rdd$services$store$create_sibling_recipe_line_item_BANG_(origin_rli_uuid,insert_type){
var new_uuid = nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$0();
var parent_item_uuid = rdd.services.store.get_rli_parent_item(rdd.services.store.db(),origin_rli_uuid);
var rli_siblings = rdd.services.store.get_rli_siblings(rdd.services.store.db(),origin_rli_uuid);
var position_info = rdd.services.store.position_info(origin_rli_uuid,rli_siblings);
var next_position = (function (){var G__47663 = insert_type;
var G__47663__$1 = (((G__47663 instanceof cljs.core.Keyword))?G__47663.fqn:null);
switch (G__47663__$1) {
case "before":
return new cljs.core.Keyword(null,"next-position-before","next-position-before",1962152631).cljs$core$IFn$_invoke$arity$1(position_info);

break;
case "after":
return new cljs.core.Keyword(null,"next-position-after","next-position-after",300518757).cljs$core$IFn$_invoke$arity$1(position_info);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47663__$1)].join('')));

}
})();
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),new_uuid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("meta","position","meta/position",-2025172429),next_position], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","uuid","item/uuid",2146626286),parent_item_uuid], null),new cljs.core.Keyword("composite","contains","composite/contains",2110717577),(-1)], null)], null)], 0));
});
rdd.services.store.update_recipe_line_item_item_BANG_ = (function rdd$services$store$update_recipe_line_item_item_BANG_(rli_uuid,item_uuid){
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),rli_uuid], null),new cljs.core.Keyword("recipe-line-item","item","recipe-line-item/item",-1593161667),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","uuid","item/uuid",2146626286),item_uuid], null)], null)], null)], 0));
});
rdd.services.store.update_recipe_line_company_item_BANG_ = (function rdd$services$store$update_recipe_line_company_item_BANG_(rli_uuid,company_item_uuid){
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),rli_uuid], null),new cljs.core.Keyword("recipe-line-item","company-item","recipe-line-item/company-item",-2126099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262),company_item_uuid], null)], null)], null)], 0));
});
rdd.services.store.delete_recipe_line_item_BANG_ = (function rdd$services$store$delete_recipe_line_item_BANG_(uuid){
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),uuid], null)], null)], null)], 0));
});
rdd.services.store.create_company_BANG_ = (function rdd$services$store$create_company_BANG_(p__47664){
var map__47665 = p__47664;
var map__47665__$1 = cljs.core.__destructure_map(map__47665);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47665__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("company","uuid","company/uuid",1144826904),uuid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("company","name","company/name",-1249706836),name], null)], null)], 0));
});
rdd.services.store.create_uom_BANG_ = (function rdd$services$store$create_uom_BANG_(p__47666){
var map__47667 = p__47666;
var map__47667__$1 = cljs.core.__destructure_map(map__47667);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),uuid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("uom","name","uom/name",1843762494),name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("uom","code","uom/code",1586244771),code], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("uom","system","uom/system",-28940623),system], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("uom","type","uom/type",1175431839),type], null)], null)], 0));
});
rdd.services.store.create_and_link_item_BANG_ = (function rdd$services$store$create_and_link_item_BANG_(p__47668){
var map__47669 = p__47668;
var map__47669__$1 = cljs.core.__destructure_map(map__47669);
var rli_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47669__$1,new cljs.core.Keyword(null,"rli-uuid","rli-uuid",1223138149));
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47669__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var item_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47669__$1,new cljs.core.Keyword(null,"item-type","item-type",-73995695));
var item_default_uom_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47669__$1,new cljs.core.Keyword(null,"item-default-uom-code","item-default-uom-code",-1341112222));
var item_yield = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47669__$1,new cljs.core.Keyword(null,"item-yield","item-yield",-1331104702));
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("item","name","item/name",1849015102),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","code","uom/code",1586244771),item_default_uom_code], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("measurement","yield","measurement/yield",1588004101),(function (){var or__4212__auto__ = item_yield;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("item","production-type","item/production-type",-661862113),item_type], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),rli_uuid], null),new cljs.core.Keyword("recipe-line-item","item","recipe-line-item/item",-1593161667),(-1)], null)], null)], 0));
});
rdd.services.store.create_company_item_BANG_ = (function rdd$services$store$create_company_item_BANG_(request){
var company_item_tx = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262),new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("company-item","name","company-item/name",460060302),new cljs.core.Keyword("company-item","name","company-item/name",460060302).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("company-item","sku","company-item/sku",144977443),new cljs.core.Keyword("company-item","sku","company-item/sku",144977443).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("company-item","item","company-item/item",1080388811),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(request)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("company-item","quotes","company-item/quotes",1629149971),(-2)], null)], null);
var company_tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("company","uuid","company/uuid",1144826904),new cljs.core.Keyword("company","uuid","company/uuid",1144826904).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.Keyword("company","company-items","company/company-items",1118165173),(-1)], null)], null);
var quote_tx = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-2),new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307),nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-2),new cljs.core.Keyword("currency.usd","cost","currency.usd/cost",-1697147324),new cljs.core.Keyword("quote","price","quote/price",52785568).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-2),new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),new cljs.core.Keyword("quote","quantity","quote/quantity",-2036709514).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-2),new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Keyword("quote","uom-uuid","quote/uom-uuid",-1176399221).cljs$core$IFn$_invoke$arity$1(request)], null)], null)], null);
var conversions_tx = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (c){
var temp_id = nano_id.core.nano_id.cljs$core$IFn$_invoke$arity$0();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),temp_id,new cljs.core.Keyword("conversion","from","conversion/from",-370915014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Keyword(null,"from-uom-uuid","from-uom-uuid",-599332728).cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),temp_id,new cljs.core.Keyword("conversion","to","conversion/to",1982396849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.Keyword(null,"to-uom-uuid","to-uom-uuid",-1465978335).cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),temp_id,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("uom","conversions","uom/conversions",638040717),temp_id], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"conversions","conversions",638257140).cljs$core$IFn$_invoke$arity$1(request)], 0));
var all_tx = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(company_item_tx,company_tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quote_tx,conversions_tx], 0));
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx], 0));
});

//# sourceMappingURL=rdd.services.store.js.map
