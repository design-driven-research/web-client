goog.provide('rdd.db');
rdd.db.item_schema = (function rdd$db$item_schema(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("item","name","item/name",1849015102),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("item","uuid","item/uuid",2146626286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("item","process","item/process",1621073255),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null)], null);
});
rdd.db.company_schema = (function rdd$db$company_schema(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("company","uuid","company/uuid",1144826904),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("company","name","company/name",-1249706836),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("company","company-items","company/company-items",1118165173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
});
rdd.db.role_schema = (function rdd$db$role_schema(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("role","uuid","role/uuid",2146365455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("role","name","role/name",1848754355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
});
rdd.db.labor_schema = (function rdd$db$labor_schema(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("labor","uuid","labor/uuid",-1983582263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("labor","role","labor/role",-772441104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null)], null);
});
rdd.db.process_schema = (function rdd$db$process_schema(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("process","uuid","process/uuid",1901497866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("process","labor","process/labor",-1905034288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
});
rdd.db.company_item_schema = (function rdd$db$company_item_schema(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("company-item","sku","company-item/sku",144977443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("company-item","item","company-item/item",1080388811),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("company-item","quotes","company-item/quotes",1629149971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
});
rdd.db.quote_schema = (function rdd$db$quote_schema(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
});
rdd.db.recipe_line_item_schema = (function rdd$db$recipe_line_item_schema(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("recipe-line-item","item","recipe-line-item/item",-1593161667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("recipe-line-item","company-item","recipe-line-item/company-item",-2126099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null)], null);
});
rdd.db.uom_schema = (function rdd$db$uom_schema(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("uom","name","uom/name",1843762494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("uom","code","uom/code",1586244771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("uom","type","uom/type",1175431839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("uom","system","uom/system",-28940623),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("uom","conversions","uom/conversions",638040717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
});
rdd.db.measurement_schema = (function rdd$db$measurement_schema(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
});
rdd.db.conversions_schema = (function rdd$db$conversions_schema(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("conversion","from","conversion/from",-370915014),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("conversion","to","conversion/to",1982396849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null)], null);
});
rdd.db.composite_schema = (function rdd$db$composite_schema(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("composite","contains","composite/contains",2110717577),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
});
rdd.db.schema = (function rdd$db$schema(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rdd.db.uom_schema(),rdd.db.role_schema(),rdd.db.conversions_schema(),rdd.db.item_schema(),rdd.db.labor_schema(),rdd.db.process_schema(),rdd.db.recipe_line_item_schema(),rdd.db.company_schema(),rdd.db.company_item_schema(),rdd.db.quote_schema(),rdd.db.measurement_schema(),rdd.db.composite_schema(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("schema","version","schema/version",1396190655),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),"0.0.1",new cljs.core.Keyword(null,"doc","doc",1913296891),"Main schema"], null)], null)], 0));
});
/**
 * System of units data prepped as datoms for insert
 */
rdd.db.enum_data = (function rdd$db$enum_data(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("production.type","ATOM","production.type/ATOM",365207439)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("production.type","COMPOSITE","production.type/COMPOSITE",-1939078427)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("units.system","IMPERIAL","units.system/IMPERIAL",-1162011464)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("units.system","METRIC","units.system/METRIC",250476212)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("units.system","CUSTOM","units.system/CUSTOM",678652561)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("units.type","WEIGHT","units.type/WEIGHT",2881333)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("units.type","VOLUME","units.type/VOLUME",-1534907059)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("units.type","CUSTOM","units.type/CUSTOM",-1999838914)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("time.interval","SECOND","time.interval/SECOND",-535288448)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("time.interval","MINUTE","time.interval/MINUTE",1383940390)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("time.interval","HOUR","time.interval/HOUR",-1756907572)], null)], null);
});


if(cljs.core.not(mount.core.running_noop_QMARK_("#'rdd.db/conn"))){
if((typeof rdd !== 'undefined') && (typeof rdd.db !== 'undefined') && (typeof rdd.db.conn !== 'undefined')){
} else {
rdd.db.conn = mount.core.__GT_DerefableState("#'rdd.db/conn");
}

mount.core.mount_it(new cljs.core.Var(function(){return rdd.db.conn;},new cljs.core.Symbol("rdd.db","conn","rdd.db/conn",974576864,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"on-reload","on-reload",869927793),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rdd.db","rdd.db",-284573553,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null),"rdd/db.cljs",35,1,new cljs.core.Keyword(null,"noop","noop",-673731258),133,133,cljs.core.List.EMPTY,null,(cljs.core.truth_(rdd.db.conn)?rdd.db.conn.cljs$lang$test:null)])),"#'rdd.db/conn",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"order","order",-1254677256),(2),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
console.log("Recreating dsdb");

var db_conn = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic((function (){var G__47570 = rdd.db.schema();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__47570) : datascript.core.empty_db.call(null,G__47570));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
(rdd.db.reset_db_BANG_.cljs$core$IFn$_invoke$arity$1 ? rdd.db.reset_db_BANG_.cljs$core$IFn$_invoke$arity$1(db_conn) : rdd.db.reset_db_BANG_.call(null,db_conn));

(rdd.db.setup_listeners.cljs$core$IFn$_invoke$arity$1 ? rdd.db.setup_listeners.cljs$core$IFn$_invoke$arity$1(db_conn) : rdd.db.setup_listeners.call(null,db_conn));

return db_conn;
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null)], null));
} else {
if((typeof rdd !== 'undefined') && (typeof rdd.db !== 'undefined') && (typeof rdd.db.conn !== 'undefined')){
} else {
rdd.db.conn = mount.core.current_state("#'rdd.db/conn");
}
}

new cljs.core.Var(function(){return rdd.db.conn;},new cljs.core.Symbol("rdd.db","conn","rdd.db/conn",974576864,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"on-reload","on-reload",869927793),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rdd.db","rdd.db",-284573553,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null),"rdd/db.cljs",35,1,new cljs.core.Keyword(null,"noop","noop",-673731258),133,133,cljs.core.List.EMPTY,null,(cljs.core.truth_(rdd.db.conn)?rdd.db.conn.cljs$lang$test:null)]));
/**
 * A snapshot of the current db
 */
rdd.db.db = (function rdd$db$db(){
return datascript.core.db(cljs.core.deref(rdd.db.conn));
});
/**
 * Seed the db with data
 */
rdd.db.seed_db = (function rdd$db$seed_db(db){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,rdd.db.enum_data());
});
rdd.db.reset_db_BANG_ = (function rdd$db$reset_db_BANG_(conn){
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(conn,(function (){var G__47573 = rdd.db.schema();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__47573) : datascript.core.empty_db.call(null,G__47573));
})());

return rdd.db.seed_db(conn);
});
rdd.db.setup_listeners = (function rdd$db$setup_listeners(conn){
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.Keyword(null,"default","default",-1987822328),(function (db){
return rdd.services.event_bus.publish_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"db-updated","db-updated",191502358),new cljs.core.Keyword(null,"data","data",-232669377),db], null));
}));
});
rdd.db.transact_from_local_BANG_ = (function rdd$db$transact_from_local_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47598 = arguments.length;
var i__4819__auto___47599 = (0);
while(true){
if((i__4819__auto___47599 < len__4818__auto___47598)){
args__4824__auto__.push((arguments[i__4819__auto___47599]));

var G__47600 = (i__4819__auto___47599 + (1));
i__4819__auto___47599 = G__47600;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(rdd.db.transact_from_local_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47584){
var map__47585 = p__47584;
var map__47585__$1 = cljs.core.__destructure_map(map__47585);
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47585__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var db_conn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47585__$1,new cljs.core.Keyword(null,"db-conn","db-conn",479627805),cljs.core.deref(rdd.db.conn));
var result = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db_conn,tx_data);
rdd.services.event_bus.publish_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"local-transaction-update","local-transaction-update",-962857219),new cljs.core.Keyword(null,"data","data",-232669377),tx_data], null));

return result;
}));

(rdd.db.transact_from_local_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rdd.db.transact_from_local_BANG_.cljs$lang$applyTo = (function (seq47577){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47577));
}));

/**
 * Push an initial data load into the db
 */
rdd.db.initial_data__GT_db_BANG_ = (function rdd$db$initial_data__GT_db_BANG_(raw_data){
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(raw_data));
var tx_data = rdd.db.transformers.tx_transforms.initial_remote__GT_tx_data(data);
cljs.core.tap_GT_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data], null));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rdd.db.conn),tx_data);

return rdd.services.event_bus.publish_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"remote-db-loaded","remote-db-loaded",-1405356803)], null));
});

//# sourceMappingURL=rdd.db.js.map
