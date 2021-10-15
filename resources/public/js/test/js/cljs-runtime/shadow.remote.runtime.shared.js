goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__46323,res){
var map__46324 = p__46323;
var map__46324__$1 = cljs.core.__destructure_map(map__46324);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46324__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46324__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46325 = res;
var G__46325__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46325,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46325);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46325__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46325__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46330 = arguments.length;
switch (G__46330) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46331,msg,handlers,timeout_after_ms){
var map__46332 = p__46331;
var map__46332__$1 = cljs.core.__destructure_map(map__46332);
var runtime = map__46332__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46332__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46564 = arguments.length;
var i__4819__auto___46565 = (0);
while(true){
if((i__4819__auto___46565 < len__4818__auto___46564)){
args__4824__auto__.push((arguments[i__4819__auto___46565]));

var G__46566 = (i__4819__auto___46565 + (1));
i__4819__auto___46565 = G__46566;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46347,ev,args){
var map__46348 = p__46347;
var map__46348__$1 = cljs.core.__destructure_map(map__46348);
var runtime = map__46348__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46348__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46355 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46358 = null;
var count__46359 = (0);
var i__46360 = (0);
while(true){
if((i__46360 < count__46359)){
var ext = chunk__46358.cljs$core$IIndexed$_nth$arity$2(null,i__46360);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46567 = seq__46355;
var G__46568 = chunk__46358;
var G__46569 = count__46359;
var G__46570 = (i__46360 + (1));
seq__46355 = G__46567;
chunk__46358 = G__46568;
count__46359 = G__46569;
i__46360 = G__46570;
continue;
} else {
var G__46571 = seq__46355;
var G__46572 = chunk__46358;
var G__46573 = count__46359;
var G__46574 = (i__46360 + (1));
seq__46355 = G__46571;
chunk__46358 = G__46572;
count__46359 = G__46573;
i__46360 = G__46574;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46355);
if(temp__5753__auto__){
var seq__46355__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46355__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46355__$1);
var G__46575 = cljs.core.chunk_rest(seq__46355__$1);
var G__46576 = c__4638__auto__;
var G__46577 = cljs.core.count(c__4638__auto__);
var G__46578 = (0);
seq__46355 = G__46575;
chunk__46358 = G__46576;
count__46359 = G__46577;
i__46360 = G__46578;
continue;
} else {
var ext = cljs.core.first(seq__46355__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46581 = cljs.core.next(seq__46355__$1);
var G__46582 = null;
var G__46583 = (0);
var G__46584 = (0);
seq__46355 = G__46581;
chunk__46358 = G__46582;
count__46359 = G__46583;
i__46360 = G__46584;
continue;
} else {
var G__46587 = cljs.core.next(seq__46355__$1);
var G__46588 = null;
var G__46589 = (0);
var G__46590 = (0);
seq__46355 = G__46587;
chunk__46358 = G__46588;
count__46359 = G__46589;
i__46360 = G__46590;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46342){
var G__46343 = cljs.core.first(seq46342);
var seq46342__$1 = cljs.core.next(seq46342);
var G__46344 = cljs.core.first(seq46342__$1);
var seq46342__$2 = cljs.core.next(seq46342__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46343,G__46344,seq46342__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46394,p__46395){
var map__46396 = p__46394;
var map__46396__$1 = cljs.core.__destructure_map(map__46396);
var runtime = map__46396__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46397 = p__46395;
var map__46397__$1 = cljs.core.__destructure_map(map__46397);
var msg = map__46397__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46397__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46406 = cljs.core.deref(state_ref);
var map__46406__$1 = cljs.core.__destructure_map(map__46406);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46406__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46406__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46409){
var map__46410 = p__46409;
var map__46410__$1 = cljs.core.__destructure_map(map__46410);
var runtime = map__46410__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46410__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46411,msg){
var map__46412 = p__46411;
var map__46412__$1 = cljs.core.__destructure_map(map__46412);
var runtime = map__46412__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46412__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46448,key,p__46449){
var map__46450 = p__46448;
var map__46450__$1 = cljs.core.__destructure_map(map__46450);
var state = map__46450__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46450__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46451 = p__46449;
var map__46451__$1 = cljs.core.__destructure_map(map__46451);
var spec = map__46451__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46451__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46466,key,spec){
var map__46473 = p__46466;
var map__46473__$1 = cljs.core.__destructure_map(map__46473);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46473__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46478_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46478_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46479_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46479_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46480_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46480_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46481_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46481_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46482_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46482_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46483,key){
var map__46484 = p__46483;
var map__46484__$1 = cljs.core.__destructure_map(map__46484);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46508,msg){
var map__46509 = p__46508;
var map__46509__$1 = cljs.core.__destructure_map(map__46509);
var runtime = map__46509__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46509__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46526,p__46527){
var map__46528 = p__46526;
var map__46528__$1 = cljs.core.__destructure_map(map__46528);
var runtime = map__46528__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46528__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46529 = p__46527;
var map__46529__$1 = cljs.core.__destructure_map(map__46529);
var msg = map__46529__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46534 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46536 = null;
var count__46538 = (0);
var i__46539 = (0);
while(true){
if((i__46539 < count__46538)){
var map__46555 = chunk__46536.cljs$core$IIndexed$_nth$arity$2(null,i__46539);
var map__46555__$1 = cljs.core.__destructure_map(map__46555);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46555__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46600 = seq__46534;
var G__46601 = chunk__46536;
var G__46602 = count__46538;
var G__46603 = (i__46539 + (1));
seq__46534 = G__46600;
chunk__46536 = G__46601;
count__46538 = G__46602;
i__46539 = G__46603;
continue;
} else {
var G__46604 = seq__46534;
var G__46605 = chunk__46536;
var G__46606 = count__46538;
var G__46607 = (i__46539 + (1));
seq__46534 = G__46604;
chunk__46536 = G__46605;
count__46538 = G__46606;
i__46539 = G__46607;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46534);
if(temp__5753__auto__){
var seq__46534__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46534__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46534__$1);
var G__46608 = cljs.core.chunk_rest(seq__46534__$1);
var G__46609 = c__4638__auto__;
var G__46610 = cljs.core.count(c__4638__auto__);
var G__46611 = (0);
seq__46534 = G__46608;
chunk__46536 = G__46609;
count__46538 = G__46610;
i__46539 = G__46611;
continue;
} else {
var map__46557 = cljs.core.first(seq__46534__$1);
var map__46557__$1 = cljs.core.__destructure_map(map__46557);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46557__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46612 = cljs.core.next(seq__46534__$1);
var G__46613 = null;
var G__46614 = (0);
var G__46615 = (0);
seq__46534 = G__46612;
chunk__46536 = G__46613;
count__46538 = G__46614;
i__46539 = G__46615;
continue;
} else {
var G__46616 = cljs.core.next(seq__46534__$1);
var G__46617 = null;
var G__46618 = (0);
var G__46619 = (0);
seq__46534 = G__46616;
chunk__46536 = G__46617;
count__46538 = G__46618;
i__46539 = G__46619;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
