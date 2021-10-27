goog.provide('rdd.db.transformers.tx_transforms');
rdd.db.transformers.tx_transforms.build_uom_tx_data = (function rdd$db$transformers$tx_transforms$build_uom_tx_data(uoms){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_uom_tx_data_$_iter__47324(s__47325){
return (new cljs.core.LazySeq(null,(function (){
var s__47325__$1 = s__47325;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47325__$1);
if(temp__5753__auto__){
var s__47325__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47325__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47325__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47327 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47326 = (0);
while(true){
if((i__47326 < size__4610__auto__)){
var uom = cljs.core._nth(c__4609__auto__,i__47326);
cljs.core.chunk_append(b__47327,(function (){var map__47333 = uom;
var map__47333__$1 = cljs.core.__destructure_map(map__47333);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47333__$1,new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47333__$1,new cljs.core.Keyword("uom","name","uom/name",1843762494));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47333__$1,new cljs.core.Keyword("uom","code","uom/code",1586244771));
var type = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("uom","type","uom/type",1175431839).cljs$core$IFn$_invoke$arity$1(uom));
var system = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("uom","system","uom/system",-28940623).cljs$core$IFn$_invoke$arity$1(uom));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),uuid,new cljs.core.Keyword("uom","name","uom/name",1843762494),name,new cljs.core.Keyword("uom","code","uom/code",1586244771),code,new cljs.core.Keyword("uom","type","uom/type",1175431839),type,new cljs.core.Keyword("uom","system","uom/system",-28940623),system], null);
})());

var G__47546 = (i__47326 + (1));
i__47326 = G__47546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47327),rdd$db$transformers$tx_transforms$build_uom_tx_data_$_iter__47324(cljs.core.chunk_rest(s__47325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47327),null);
}
} else {
var uom = cljs.core.first(s__47325__$2);
return cljs.core.cons((function (){var map__47339 = uom;
var map__47339__$1 = cljs.core.__destructure_map(map__47339);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47339__$1,new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47339__$1,new cljs.core.Keyword("uom","name","uom/name",1843762494));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47339__$1,new cljs.core.Keyword("uom","code","uom/code",1586244771));
var type = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("uom","type","uom/type",1175431839).cljs$core$IFn$_invoke$arity$1(uom));
var system = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("uom","system","uom/system",-28940623).cljs$core$IFn$_invoke$arity$1(uom));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874),uuid,new cljs.core.Keyword("uom","name","uom/name",1843762494),name,new cljs.core.Keyword("uom","code","uom/code",1586244771),code,new cljs.core.Keyword("uom","type","uom/type",1175431839),type,new cljs.core.Keyword("uom","system","uom/system",-28940623),system], null);
})(),rdd$db$transformers$tx_transforms$build_uom_tx_data_$_iter__47324(cljs.core.rest(s__47325__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(uoms);
});
rdd.db.transformers.tx_transforms.build_role_tx_data = (function rdd$db$transformers$tx_transforms$build_role_tx_data(roles){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_role_tx_data_$_iter__47346(s__47347){
return (new cljs.core.LazySeq(null,(function (){
var s__47347__$1 = s__47347;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47347__$1);
if(temp__5753__auto__){
var s__47347__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47347__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47347__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47349 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47348 = (0);
while(true){
if((i__47348 < size__4610__auto__)){
var role = cljs.core._nth(c__4609__auto__,i__47348);
cljs.core.chunk_append(b__47349,(function (){var interval_ident = new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884).cljs$core$IFn$_invoke$arity$1(role);
var prepped = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(role,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("role","name","role/name",1848754355).cljs$core$IFn$_invoke$arity$1(role),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884),interval_ident], 0));
return prepped;
})());

var G__47567 = (i__47348 + (1));
i__47348 = G__47567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47349),rdd$db$transformers$tx_transforms$build_role_tx_data_$_iter__47346(cljs.core.chunk_rest(s__47347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47349),null);
}
} else {
var role = cljs.core.first(s__47347__$2);
return cljs.core.cons((function (){var interval_ident = new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884).cljs$core$IFn$_invoke$arity$1(role);
var prepped = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(role,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("role","name","role/name",1848754355).cljs$core$IFn$_invoke$arity$1(role),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884),interval_ident], 0));
return prepped;
})(),rdd$db$transformers$tx_transforms$build_role_tx_data_$_iter__47346(cljs.core.rest(s__47347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(roles);
});
rdd.db.transformers.tx_transforms.build_labor_tx_data = (function rdd$db$transformers$tx_transforms$build_labor_tx_data(labors){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_labor_tx_data_$_iter__47365(s__47366){
return (new cljs.core.LazySeq(null,(function (){
var s__47366__$1 = s__47366;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47366__$1);
if(temp__5753__auto__){
var s__47366__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47366__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47366__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47368 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47367 = (0);
while(true){
if((i__47367 < size__4610__auto__)){
var labor = cljs.core._nth(c__4609__auto__,i__47367);
cljs.core.chunk_append(b__47368,(function (){var interval_ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884).cljs$core$IFn$_invoke$arity$1(labor));
var labor_role_uuid = new cljs.core.Keyword("role","uuid","role/uuid",2146365455).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("labor","role","labor/role",-772441104).cljs$core$IFn$_invoke$arity$1(labor));
var labor_name = new cljs.core.Keyword("labor","name","labor/name",1610858585).cljs$core$IFn$_invoke$arity$1(labor);
var labor_temp_id = labor_name;
var prepped = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(labor,new cljs.core.Keyword("db","id","db/id",-1388397098),labor_temp_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("labor","role","labor/role",-772441104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("role","uuid","role/uuid",2146365455),labor_role_uuid], null),new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884),interval_ident], 0));
return prepped;
})());

var G__47576 = (i__47367 + (1));
i__47367 = G__47576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47368),rdd$db$transformers$tx_transforms$build_labor_tx_data_$_iter__47365(cljs.core.chunk_rest(s__47366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47368),null);
}
} else {
var labor = cljs.core.first(s__47366__$2);
return cljs.core.cons((function (){var interval_ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884).cljs$core$IFn$_invoke$arity$1(labor));
var labor_role_uuid = new cljs.core.Keyword("role","uuid","role/uuid",2146365455).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("labor","role","labor/role",-772441104).cljs$core$IFn$_invoke$arity$1(labor));
var labor_name = new cljs.core.Keyword("labor","name","labor/name",1610858585).cljs$core$IFn$_invoke$arity$1(labor);
var labor_temp_id = labor_name;
var prepped = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(labor,new cljs.core.Keyword("db","id","db/id",-1388397098),labor_temp_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("labor","role","labor/role",-772441104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("role","uuid","role/uuid",2146365455),labor_role_uuid], null),new cljs.core.Keyword("time","duration-interval","time/duration-interval",1346460884),interval_ident], 0));
return prepped;
})(),rdd$db$transformers$tx_transforms$build_labor_tx_data_$_iter__47365(cljs.core.rest(s__47366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(labors);
});
rdd.db.transformers.tx_transforms.build_process_tx_data = (function rdd$db$transformers$tx_transforms$build_process_tx_data(processes){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_process_tx_data_$_iter__47389(s__47390){
return (new cljs.core.LazySeq(null,(function (){
var s__47390__$1 = s__47390;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47390__$1);
if(temp__5753__auto__){
var s__47390__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47390__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47390__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47392 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47391 = (0);
while(true){
if((i__47391 < size__4610__auto__)){
var process = cljs.core._nth(c__4609__auto__,i__47391);
cljs.core.chunk_append(b__47392,(function (){var process_uuid = new cljs.core.Keyword("process","uuid","process/uuid",1901497866).cljs$core$IFn$_invoke$arity$1(process);
var process_temp_id = process_uuid;
var uom_uuid = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(process));
var labor_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__47391,process_uuid,process_temp_id,uom_uuid,process,c__4609__auto__,size__4610__auto__,b__47392,s__47390__$2,temp__5753__auto__){
return (function (ll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("labor","uuid","labor/uuid",-1983582263),new cljs.core.Keyword("labor","uuid","labor/uuid",-1983582263).cljs$core$IFn$_invoke$arity$1(ll)], null);
});})(i__47391,process_uuid,process_temp_id,uom_uuid,process,c__4609__auto__,size__4610__auto__,b__47392,s__47390__$2,temp__5753__auto__))
,new cljs.core.Keyword("process","labor","process/labor",-1905034288).cljs$core$IFn$_invoke$arity$1(process));
var process_tx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,new cljs.core.Keyword("db","id","db/id",-1388397098),process_temp_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),uom_uuid,new cljs.core.Keyword("process","labor","process/labor",-1905034288),labor_uuids], 0));
return process_tx;
})());

var G__47586 = (i__47391 + (1));
i__47391 = G__47586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47392),rdd$db$transformers$tx_transforms$build_process_tx_data_$_iter__47389(cljs.core.chunk_rest(s__47390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47392),null);
}
} else {
var process = cljs.core.first(s__47390__$2);
return cljs.core.cons((function (){var process_uuid = new cljs.core.Keyword("process","uuid","process/uuid",1901497866).cljs$core$IFn$_invoke$arity$1(process);
var process_temp_id = process_uuid;
var uom_uuid = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(process));
var labor_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (process_uuid,process_temp_id,uom_uuid,process,s__47390__$2,temp__5753__auto__){
return (function (ll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("labor","uuid","labor/uuid",-1983582263),new cljs.core.Keyword("labor","uuid","labor/uuid",-1983582263).cljs$core$IFn$_invoke$arity$1(ll)], null);
});})(process_uuid,process_temp_id,uom_uuid,process,s__47390__$2,temp__5753__auto__))
,new cljs.core.Keyword("process","labor","process/labor",-1905034288).cljs$core$IFn$_invoke$arity$1(process));
var process_tx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,new cljs.core.Keyword("db","id","db/id",-1388397098),process_temp_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),uom_uuid,new cljs.core.Keyword("process","labor","process/labor",-1905034288),labor_uuids], 0));
return process_tx;
})(),rdd$db$transformers$tx_transforms$build_process_tx_data_$_iter__47389(cljs.core.rest(s__47390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(processes);
});
rdd.db.transformers.tx_transforms.build_conversion_tx_data = (function rdd$db$transformers$tx_transforms$build_conversion_tx_data(conversions){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_conversion_tx_data_$_iter__47433(s__47434){
return (new cljs.core.LazySeq(null,(function (){
var s__47434__$1 = s__47434;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47434__$1);
if(temp__5753__auto__){
var s__47434__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47434__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47434__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47436 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47435 = (0);
while(true){
if((i__47435 < size__4610__auto__)){
var conversion = cljs.core._nth(c__4609__auto__,i__47435);
cljs.core.chunk_append(b__47436,(function (){var map__47452 = conversion;
var map__47452__$1 = cljs.core.__destructure_map(map__47452);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47452__$1,new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47452__$1,new cljs.core.Keyword("conversion","from","conversion/from",-370915014));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47452__$1,new cljs.core.Keyword("conversion","to","conversion/to",1982396849));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47452__$1,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030));
var from_uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(from);
var to_uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(to);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639),uuid,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),quantity,new cljs.core.Keyword("conversion","from","conversion/from",-370915014),from_uom_temp_id,new cljs.core.Keyword("conversion","to","conversion/to",1982396849),to_uom_temp_id], null);
})());

var G__47587 = (i__47435 + (1));
i__47435 = G__47587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47436),rdd$db$transformers$tx_transforms$build_conversion_tx_data_$_iter__47433(cljs.core.chunk_rest(s__47434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47436),null);
}
} else {
var conversion = cljs.core.first(s__47434__$2);
return cljs.core.cons((function (){var map__47461 = conversion;
var map__47461__$1 = cljs.core.__destructure_map(map__47461);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47461__$1,new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47461__$1,new cljs.core.Keyword("conversion","from","conversion/from",-370915014));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47461__$1,new cljs.core.Keyword("conversion","to","conversion/to",1982396849));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47461__$1,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030));
var from_uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(from);
var to_uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(to);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639),uuid,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),quantity,new cljs.core.Keyword("conversion","from","conversion/from",-370915014),from_uom_temp_id,new cljs.core.Keyword("conversion","to","conversion/to",1982396849),to_uom_temp_id], null);
})(),rdd$db$transformers$tx_transforms$build_conversion_tx_data_$_iter__47433(cljs.core.rest(s__47434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(conversions);
});
rdd.db.transformers.tx_transforms.build_company_tx_data = (function rdd$db$transformers$tx_transforms$build_company_tx_data(companies){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_company_tx_data_$_iter__47478(s__47479){
return (new cljs.core.LazySeq(null,(function (){
var s__47479__$1 = s__47479;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47479__$1);
if(temp__5753__auto__){
var s__47479__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47479__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47479__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47481 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47480 = (0);
while(true){
if((i__47480 < size__4610__auto__)){
var company = cljs.core._nth(c__4609__auto__,i__47480);
cljs.core.chunk_append(b__47481,(function (){var map__47484 = company;
var map__47484__$1 = cljs.core.__destructure_map(map__47484);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47484__$1,new cljs.core.Keyword("company","uuid","company/uuid",1144826904));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47484__$1,new cljs.core.Keyword("company","name","company/name",-1249706836));
var company_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47484__$1,new cljs.core.Keyword("company","company-items","company/company-items",1118165173));
var company_item_temp_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262),company_items);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("company","uuid","company/uuid",1144826904),uuid,new cljs.core.Keyword("company","name","company/name",-1249706836),name,new cljs.core.Keyword("company","company-items","company/company-items",1118165173),company_item_temp_ids], null);
})());

var G__47588 = (i__47480 + (1));
i__47480 = G__47588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47481),rdd$db$transformers$tx_transforms$build_company_tx_data_$_iter__47478(cljs.core.chunk_rest(s__47479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47481),null);
}
} else {
var company = cljs.core.first(s__47479__$2);
return cljs.core.cons((function (){var map__47493 = company;
var map__47493__$1 = cljs.core.__destructure_map(map__47493);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47493__$1,new cljs.core.Keyword("company","uuid","company/uuid",1144826904));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47493__$1,new cljs.core.Keyword("company","name","company/name",-1249706836));
var company_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47493__$1,new cljs.core.Keyword("company","company-items","company/company-items",1118165173));
var company_item_temp_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262),company_items);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("company","uuid","company/uuid",1144826904),uuid,new cljs.core.Keyword("company","name","company/name",-1249706836),name,new cljs.core.Keyword("company","company-items","company/company-items",1118165173),company_item_temp_ids], null);
})(),rdd$db$transformers$tx_transforms$build_company_tx_data_$_iter__47478(cljs.core.rest(s__47479__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(companies);
});
rdd.db.transformers.tx_transforms.build_item_tx_data = (function rdd$db$transformers$tx_transforms$build_item_tx_data(items){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_item_tx_data_$_iter__47497(s__47498){
return (new cljs.core.LazySeq(null,(function (){
var s__47498__$1 = s__47498;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47498__$1);
if(temp__5753__auto__){
var s__47498__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47498__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47498__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47500 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47499 = (0);
while(true){
if((i__47499 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__47499);
cljs.core.chunk_append(b__47500,(function (){var map__47503 = item;
var map__47503__$1 = cljs.core.__destructure_map(map__47503);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47503__$1,new cljs.core.Keyword("item","uuid","item/uuid",2146626286));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47503__$1,new cljs.core.Keyword("item","name","item/name",1849015102));
var yield$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47503__$1,new cljs.core.Keyword("measurement","yield","measurement/yield",1588004101));
var uom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47503__$1,new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536));
var uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(uom);
var children = new cljs.core.Keyword("composite","contains","composite/contains",2110717577).cljs$core$IFn$_invoke$arity$1(item);
var rli_temp_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),children);
var production_type = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("item","production-type","item/production-type",-661862113).cljs$core$IFn$_invoke$arity$1(item));
var process_uuid = new cljs.core.Keyword("process","uuid","process/uuid",1901497866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("item","process","item/process",1621073255).cljs$core$IFn$_invoke$arity$1(item));
var G__47505 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("item","uuid","item/uuid",2146626286),uuid,new cljs.core.Keyword("item","name","item/name",1849015102),name,new cljs.core.Keyword("item","production-type","item/production-type",-661862113),production_type,new cljs.core.Keyword("measurement","yield","measurement/yield",1588004101),yield$,new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),uom_temp_id,new cljs.core.Keyword("composite","contains","composite/contains",2110717577),rli_temp_ids], null);
if(cljs.core.truth_(process_uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47505,new cljs.core.Keyword("item","process","item/process",1621073255),process_uuid);
} else {
return G__47505;
}
})());

var G__47589 = (i__47499 + (1));
i__47499 = G__47589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47500),rdd$db$transformers$tx_transforms$build_item_tx_data_$_iter__47497(cljs.core.chunk_rest(s__47498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47500),null);
}
} else {
var item = cljs.core.first(s__47498__$2);
return cljs.core.cons((function (){var map__47506 = item;
var map__47506__$1 = cljs.core.__destructure_map(map__47506);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47506__$1,new cljs.core.Keyword("item","uuid","item/uuid",2146626286));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47506__$1,new cljs.core.Keyword("item","name","item/name",1849015102));
var yield$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47506__$1,new cljs.core.Keyword("measurement","yield","measurement/yield",1588004101));
var uom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47506__$1,new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536));
var uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(uom);
var children = new cljs.core.Keyword("composite","contains","composite/contains",2110717577).cljs$core$IFn$_invoke$arity$1(item);
var rli_temp_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),children);
var production_type = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("item","production-type","item/production-type",-661862113).cljs$core$IFn$_invoke$arity$1(item));
var process_uuid = new cljs.core.Keyword("process","uuid","process/uuid",1901497866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("item","process","item/process",1621073255).cljs$core$IFn$_invoke$arity$1(item));
var G__47507 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("item","uuid","item/uuid",2146626286),uuid,new cljs.core.Keyword("item","name","item/name",1849015102),name,new cljs.core.Keyword("item","production-type","item/production-type",-661862113),production_type,new cljs.core.Keyword("measurement","yield","measurement/yield",1588004101),yield$,new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),uom_temp_id,new cljs.core.Keyword("composite","contains","composite/contains",2110717577),rli_temp_ids], null);
if(cljs.core.truth_(process_uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47507,new cljs.core.Keyword("item","process","item/process",1621073255),process_uuid);
} else {
return G__47507;
}
})(),rdd$db$transformers$tx_transforms$build_item_tx_data_$_iter__47497(cljs.core.rest(s__47498__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(items);
});
rdd.db.transformers.tx_transforms.build_company_item_tx_data = (function rdd$db$transformers$tx_transforms$build_company_item_tx_data(company_items){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_company_item_tx_data_$_iter__47508(s__47509){
return (new cljs.core.LazySeq(null,(function (){
var s__47509__$1 = s__47509;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47509__$1);
if(temp__5753__auto__){
var s__47509__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47509__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47509__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47511 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47510 = (0);
while(true){
if((i__47510 < size__4610__auto__)){
var company_item = cljs.core._nth(c__4609__auto__,i__47510);
cljs.core.chunk_append(b__47511,(function (){var map__47512 = company_item;
var map__47512__$1 = cljs.core.__destructure_map(map__47512);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword("company-item","name","company-item/name",460060302));
var sku = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword("company-item","sku","company-item/sku",144977443));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword("company-item","item","company-item/item",1080388811));
var quotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword("company-item","quotes","company-item/quotes",1629149971));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword("info","description","info/description",-1431606738));
var conversions = new cljs.core.Keyword("uom","conversions","uom/conversions",638040717).cljs$core$IFn$_invoke$arity$1(company_item);
var item_temp_id = new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(item);
var company_quotes_temp_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307),quotes);
var conversion_temp_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639),conversions);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262),uuid,new cljs.core.Keyword("company-item","name","company-item/name",460060302),name,new cljs.core.Keyword("info","description","info/description",-1431606738),description,new cljs.core.Keyword("company-item","sku","company-item/sku",144977443),sku,new cljs.core.Keyword("company-item","item","company-item/item",1080388811),item_temp_id,new cljs.core.Keyword("company-item","quotes","company-item/quotes",1629149971),company_quotes_temp_ids,new cljs.core.Keyword("uom","conversions","uom/conversions",638040717),conversion_temp_ids], null);
})());

var G__47591 = (i__47510 + (1));
i__47510 = G__47591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47511),rdd$db$transformers$tx_transforms$build_company_item_tx_data_$_iter__47508(cljs.core.chunk_rest(s__47509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47511),null);
}
} else {
var company_item = cljs.core.first(s__47509__$2);
return cljs.core.cons((function (){var map__47513 = company_item;
var map__47513__$1 = cljs.core.__destructure_map(map__47513);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47513__$1,new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47513__$1,new cljs.core.Keyword("company-item","name","company-item/name",460060302));
var sku = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47513__$1,new cljs.core.Keyword("company-item","sku","company-item/sku",144977443));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47513__$1,new cljs.core.Keyword("company-item","item","company-item/item",1080388811));
var quotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47513__$1,new cljs.core.Keyword("company-item","quotes","company-item/quotes",1629149971));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47513__$1,new cljs.core.Keyword("info","description","info/description",-1431606738));
var conversions = new cljs.core.Keyword("uom","conversions","uom/conversions",638040717).cljs$core$IFn$_invoke$arity$1(company_item);
var item_temp_id = new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(item);
var company_quotes_temp_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307),quotes);
var conversion_temp_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("conversion","uuid","conversion/uuid",89830639),conversions);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262),uuid,new cljs.core.Keyword("company-item","name","company-item/name",460060302),name,new cljs.core.Keyword("info","description","info/description",-1431606738),description,new cljs.core.Keyword("company-item","sku","company-item/sku",144977443),sku,new cljs.core.Keyword("company-item","item","company-item/item",1080388811),item_temp_id,new cljs.core.Keyword("company-item","quotes","company-item/quotes",1629149971),company_quotes_temp_ids,new cljs.core.Keyword("uom","conversions","uom/conversions",638040717),conversion_temp_ids], null);
})(),rdd$db$transformers$tx_transforms$build_company_item_tx_data_$_iter__47508(cljs.core.rest(s__47509__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(company_items);
});
rdd.db.transformers.tx_transforms.build_recipe_line_items_tx_data = (function rdd$db$transformers$tx_transforms$build_recipe_line_items_tx_data(recipe_line_items){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_recipe_line_items_tx_data_$_iter__47514(s__47515){
return (new cljs.core.LazySeq(null,(function (){
var s__47515__$1 = s__47515;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47515__$1);
if(temp__5753__auto__){
var s__47515__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47515__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47515__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47517 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47516 = (0);
while(true){
if((i__47516 < size__4610__auto__)){
var rli = cljs.core._nth(c__4609__auto__,i__47516);
cljs.core.chunk_append(b__47517,(function (){var uuid = new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960).cljs$core$IFn$_invoke$arity$1(rli);
var quantity = new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030).cljs$core$IFn$_invoke$arity$1(rli);
var uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(rli));
var child_temp_id = new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recipe-line-item","item","recipe-line-item/item",-1593161667).cljs$core$IFn$_invoke$arity$1(rli));
var company_item_temp_id = new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recipe-line-item","company-item","recipe-line-item/company-item",-2126099007).cljs$core$IFn$_invoke$arity$1(rli));
var position = new cljs.core.Keyword("meta","position","meta/position",-2025172429).cljs$core$IFn$_invoke$arity$1(rli);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),uuid,new cljs.core.Keyword("meta","position","meta/position",-2025172429),position,new cljs.core.Keyword("recipe-line-item","item","recipe-line-item/item",-1593161667),child_temp_id,new cljs.core.Keyword("recipe-line-item","company-item","recipe-line-item/company-item",-2126099007),company_item_temp_id,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),quantity,new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),uom_temp_id], null);
})());

var G__47592 = (i__47516 + (1));
i__47516 = G__47592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47517),rdd$db$transformers$tx_transforms$build_recipe_line_items_tx_data_$_iter__47514(cljs.core.chunk_rest(s__47515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47517),null);
}
} else {
var rli = cljs.core.first(s__47515__$2);
return cljs.core.cons((function (){var uuid = new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960).cljs$core$IFn$_invoke$arity$1(rli);
var quantity = new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030).cljs$core$IFn$_invoke$arity$1(rli);
var uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(rli));
var child_temp_id = new cljs.core.Keyword("item","uuid","item/uuid",2146626286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recipe-line-item","item","recipe-line-item/item",-1593161667).cljs$core$IFn$_invoke$arity$1(rli));
var company_item_temp_id = new cljs.core.Keyword("company-item","uuid","company-item/uuid",1521227262).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recipe-line-item","company-item","recipe-line-item/company-item",-2126099007).cljs$core$IFn$_invoke$arity$1(rli));
var position = new cljs.core.Keyword("meta","position","meta/position",-2025172429).cljs$core$IFn$_invoke$arity$1(rli);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("recipe-line-item","uuid","recipe-line-item/uuid",-1110223960),uuid,new cljs.core.Keyword("meta","position","meta/position",-2025172429),position,new cljs.core.Keyword("recipe-line-item","item","recipe-line-item/item",-1593161667),child_temp_id,new cljs.core.Keyword("recipe-line-item","company-item","recipe-line-item/company-item",-2126099007),company_item_temp_id,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),quantity,new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),uom_temp_id], null);
})(),rdd$db$transformers$tx_transforms$build_recipe_line_items_tx_data_$_iter__47514(cljs.core.rest(s__47515__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(recipe_line_items);
});
rdd.db.transformers.tx_transforms.build_quote_tx_data = (function rdd$db$transformers$tx_transforms$build_quote_tx_data(quotes){
var iter__4611__auto__ = (function rdd$db$transformers$tx_transforms$build_quote_tx_data_$_iter__47518(s__47519){
return (new cljs.core.LazySeq(null,(function (){
var s__47519__$1 = s__47519;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47519__$1);
if(temp__5753__auto__){
var s__47519__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47519__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47519__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47521 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47520 = (0);
while(true){
if((i__47520 < size__4610__auto__)){
var quote = cljs.core._nth(c__4609__auto__,i__47520);
cljs.core.chunk_append(b__47521,(function (){var uuid = new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307).cljs$core$IFn$_invoke$arity$1(quote);
var quantity = new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030).cljs$core$IFn$_invoke$arity$1(quote);
var uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(quote));
var cost = new cljs.core.Keyword("currency.usd","cost","currency.usd/cost",-1697147324).cljs$core$IFn$_invoke$arity$1(quote);
var valid_from = new cljs.core.Keyword("date","valid-from","date/valid-from",1836831738).cljs$core$IFn$_invoke$arity$1(quote);
var valid_to = new cljs.core.Keyword("date","valid-to","date/valid-to",13357755).cljs$core$IFn$_invoke$arity$1(quote);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307),uuid,new cljs.core.Keyword("currency.usd","cost","currency.usd/cost",-1697147324),cost,new cljs.core.Keyword("date","valid-from","date/valid-from",1836831738),valid_from,new cljs.core.Keyword("date","valid-to","date/valid-to",13357755),valid_to,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),quantity,new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),uom_temp_id], null);
})());

var G__47595 = (i__47520 + (1));
i__47520 = G__47595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47521),rdd$db$transformers$tx_transforms$build_quote_tx_data_$_iter__47518(cljs.core.chunk_rest(s__47519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47521),null);
}
} else {
var quote = cljs.core.first(s__47519__$2);
return cljs.core.cons((function (){var uuid = new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307).cljs$core$IFn$_invoke$arity$1(quote);
var quantity = new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030).cljs$core$IFn$_invoke$arity$1(quote);
var uom_temp_id = new cljs.core.Keyword("uom","uuid","uom/uuid",-2145241874).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536).cljs$core$IFn$_invoke$arity$1(quote));
var cost = new cljs.core.Keyword("currency.usd","cost","currency.usd/cost",-1697147324).cljs$core$IFn$_invoke$arity$1(quote);
var valid_from = new cljs.core.Keyword("date","valid-from","date/valid-from",1836831738).cljs$core$IFn$_invoke$arity$1(quote);
var valid_to = new cljs.core.Keyword("date","valid-to","date/valid-to",13357755).cljs$core$IFn$_invoke$arity$1(quote);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),uuid,new cljs.core.Keyword("quote","uuid","quote/uuid",-2034979307),uuid,new cljs.core.Keyword("currency.usd","cost","currency.usd/cost",-1697147324),cost,new cljs.core.Keyword("date","valid-from","date/valid-from",1836831738),valid_from,new cljs.core.Keyword("date","valid-to","date/valid-to",13357755),valid_to,new cljs.core.Keyword("measurement","quantity","measurement/quantity",420879030),quantity,new cljs.core.Keyword("measurement","uom","measurement/uom",1322255536),uom_temp_id], null);
})(),rdd$db$transformers$tx_transforms$build_quote_tx_data_$_iter__47518(cljs.core.rest(s__47519__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(quotes);
});
/**
 * Build tx-data from initial data payload across all entity types
 */
rdd.db.transformers.tx_transforms.initial_remote__GT_tx_data = (function rdd$db$transformers$tx_transforms$initial_remote__GT_tx_data(data){
postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),data);

return rdd.utils.general.de_nill(cljs.core.flatten(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [rdd.db.transformers.tx_transforms.build_uom_tx_data(new cljs.core.Keyword(null,"uoms","uoms",-1131064053).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_role_tx_data(new cljs.core.Keyword(null,"roles","roles",143379530).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_conversion_tx_data(new cljs.core.Keyword(null,"conversions","conversions",638257140).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_item_tx_data(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_labor_tx_data(new cljs.core.Keyword(null,"labor","labor",1623628377).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_process_tx_data(new cljs.core.Keyword(null,"processes","processes",-546984164).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_recipe_line_items_tx_data(new cljs.core.Keyword(null,"recipe-line-items","recipe-line-items",-1853534143).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_quote_tx_data(new cljs.core.Keyword(null,"quotes","quotes",-844987790).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_company_tx_data(new cljs.core.Keyword(null,"companies","companies",-447793417).cljs$core$IFn$_invoke$arity$1(data)),rdd.db.transformers.tx_transforms.build_company_item_tx_data(new cljs.core.Keyword(null,"company-items","company-items",997102642).cljs$core$IFn$_invoke$arity$1(data))], null)));
});

//# sourceMappingURL=rdd.db.transformers.tx_transforms.js.map
