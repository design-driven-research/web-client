goog.provide('rdd.services.event_bus');
if(cljs.core.not(mount.core.running_noop_QMARK_("#'rdd.services.event-bus/bus"))){
if((typeof rdd !== 'undefined') && (typeof rdd.services !== 'undefined') && (typeof rdd.services.event_bus !== 'undefined') && (typeof rdd.services.event_bus.bus !== 'undefined')){
} else {
rdd.services.event_bus.bus = mount.core.__GT_DerefableState("#'rdd.services.event-bus/bus");
}

mount.core.mount_it(new cljs.core.Var(function(){return rdd.services.event_bus.bus;},new cljs.core.Symbol("rdd.services.event-bus","bus","rdd.services.event-bus/bus",889224991,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rdd.services.event-bus","rdd.services.event-bus",2101988714,null),new cljs.core.Symbol(null,"bus","bus",549657924,null),"rdd/services/event_bus.cljs",14,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(rdd.services.event_bus.bus)?rdd.services.event_bus.bus.cljs$lang$test:null)])),"#'rdd.services.event-bus/bus",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"order","order",-1254677256),(1),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
console.log("Starting event bus");

return c;
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null)], null));
} else {
if((typeof rdd !== 'undefined') && (typeof rdd.services !== 'undefined') && (typeof rdd.services.event_bus !== 'undefined') && (typeof rdd.services.event_bus.bus !== 'undefined')){
} else {
rdd.services.event_bus.bus = mount.core.current_state("#'rdd.services.event-bus/bus");
}
}

new cljs.core.Var(function(){return rdd.services.event_bus.bus;},new cljs.core.Symbol("rdd.services.event-bus","bus","rdd.services.event-bus/bus",889224991,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rdd.services.event-bus","rdd.services.event-bus",2101988714,null),new cljs.core.Symbol(null,"bus","bus",549657924,null),"rdd/services/event_bus.cljs",14,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(rdd.services.event_bus.bus)?rdd.services.event_bus.bus.cljs$lang$test:null)]));
rdd.services.event_bus.subscriptions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
rdd.services.event_bus.unsubscribe_BANG_ = (function rdd$services$event_bus$unsubscribe_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rdd.services.event_bus.subscriptions,(function (subs){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (sub){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub),id);
}),subs);
}));
});
/**
 * Subscribe to a topic on the global event bus. Pass in a topic as a string or keyword.
 * This returns an unsubscribe method
 * 
 * (def unsubscribe (subscribe! :test (fn [] (js/console.log 'Called'))))
 * 
 * (publish! {:topic :test :data {:id 42}})
 * 
 * (unsubscribe)
 * 
 */
rdd.services.event_bus.subscribe_BANG_ = (function rdd$services$event_bus$subscribe_BANG_(topic,handler){
var id = cljs.core.random_uuid();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rdd.services.event_bus.subscriptions,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rdd.services.event_bus.unsubscribe_BANG_,id);
});
rdd.services.event_bus.filter_by_topic = (function rdd$services$event_bus$filter_by_topic(topic){
return (function (sub){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(sub),topic);
});
});
rdd.services.event_bus.process_queue = (function rdd$services$event_bus$process_queue(p__46796){
var map__46797 = p__46796;
var map__46797__$1 = cljs.core.__destructure_map(map__46797);
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46797__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46797__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var filtered_subs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(rdd.services.event_bus.filter_by_topic(topic),cljs.core.deref(rdd.services.event_bus.subscriptions));
var seq__46798 = cljs.core.seq(filtered_subs);
var chunk__46799 = null;
var count__46800 = (0);
var i__46801 = (0);
while(true){
if((i__46801 < count__46800)){
var map__46804 = chunk__46799.cljs$core$IIndexed$_nth$arity$2(null,i__46801);
var map__46804__$1 = cljs.core.__destructure_map(map__46804);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46804__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(data) : handler.call(null,data));


var G__46832 = seq__46798;
var G__46833 = chunk__46799;
var G__46834 = count__46800;
var G__46835 = (i__46801 + (1));
seq__46798 = G__46832;
chunk__46799 = G__46833;
count__46800 = G__46834;
i__46801 = G__46835;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46798);
if(temp__5753__auto__){
var seq__46798__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46798__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46798__$1);
var G__46836 = cljs.core.chunk_rest(seq__46798__$1);
var G__46837 = c__4638__auto__;
var G__46838 = cljs.core.count(c__4638__auto__);
var G__46839 = (0);
seq__46798 = G__46836;
chunk__46799 = G__46837;
count__46800 = G__46838;
i__46801 = G__46839;
continue;
} else {
var map__46805 = cljs.core.first(seq__46798__$1);
var map__46805__$1 = cljs.core.__destructure_map(map__46805);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46805__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(data) : handler.call(null,data));


var G__46840 = cljs.core.next(seq__46798__$1);
var G__46841 = null;
var G__46842 = (0);
var G__46843 = (0);
seq__46798 = G__46840;
chunk__46799 = G__46841;
count__46800 = G__46842;
i__46801 = G__46843;
continue;
}
} else {
return null;
}
}
break;
}
});
rdd.services.event_bus.start_queue = (function rdd$services$event_bus$start_queue(c){
var c__41327__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41328__auto__ = (function (){var switch__41257__auto__ = (function (state_46818){
var state_val_46819 = (state_46818[(1)]);
if((state_val_46819 === (1))){
var state_46818__$1 = state_46818;
var statearr_46820_46844 = state_46818__$1;
(statearr_46820_46844[(2)] = null);

(statearr_46820_46844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46819 === (2))){
var state_46818__$1 = state_46818;
var statearr_46821_46845 = state_46818__$1;
(statearr_46821_46845[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46819 === (3))){
var inst_46816 = (state_46818[(2)]);
var state_46818__$1 = state_46818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46818__$1,inst_46816);
} else {
if((state_val_46819 === (4))){
var state_46818__$1 = state_46818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46818__$1,(7),c);
} else {
if((state_val_46819 === (5))){
var state_46818__$1 = state_46818;
var statearr_46823_46846 = state_46818__$1;
(statearr_46823_46846[(2)] = null);

(statearr_46823_46846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46819 === (6))){
var inst_46814 = (state_46818[(2)]);
var state_46818__$1 = state_46818;
var statearr_46824_46847 = state_46818__$1;
(statearr_46824_46847[(2)] = inst_46814);

(statearr_46824_46847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46819 === (7))){
var inst_46809 = (state_46818[(2)]);
var inst_46810 = rdd.services.event_bus.process_queue(inst_46809);
var state_46818__$1 = (function (){var statearr_46825 = state_46818;
(statearr_46825[(7)] = inst_46810);

return statearr_46825;
})();
var statearr_46826_46848 = state_46818__$1;
(statearr_46826_46848[(2)] = null);

(statearr_46826_46848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var rdd$services$event_bus$start_queue_$_state_machine__41258__auto__ = null;
var rdd$services$event_bus$start_queue_$_state_machine__41258__auto____0 = (function (){
var statearr_46827 = [null,null,null,null,null,null,null,null];
(statearr_46827[(0)] = rdd$services$event_bus$start_queue_$_state_machine__41258__auto__);

(statearr_46827[(1)] = (1));

return statearr_46827;
});
var rdd$services$event_bus$start_queue_$_state_machine__41258__auto____1 = (function (state_46818){
while(true){
var ret_value__41259__auto__ = (function (){try{while(true){
var result__41260__auto__ = switch__41257__auto__(state_46818);
if(cljs.core.keyword_identical_QMARK_(result__41260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41260__auto__;
}
break;
}
}catch (e46828){var ex__41261__auto__ = e46828;
var statearr_46829_46849 = state_46818;
(statearr_46829_46849[(2)] = ex__41261__auto__);


if(cljs.core.seq((state_46818[(4)]))){
var statearr_46830_46851 = state_46818;
(statearr_46830_46851[(1)] = cljs.core.first((state_46818[(4)])));

} else {
throw ex__41261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46852 = state_46818;
state_46818 = G__46852;
continue;
} else {
return ret_value__41259__auto__;
}
break;
}
});
rdd$services$event_bus$start_queue_$_state_machine__41258__auto__ = function(state_46818){
switch(arguments.length){
case 0:
return rdd$services$event_bus$start_queue_$_state_machine__41258__auto____0.call(this);
case 1:
return rdd$services$event_bus$start_queue_$_state_machine__41258__auto____1.call(this,state_46818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rdd$services$event_bus$start_queue_$_state_machine__41258__auto__.cljs$core$IFn$_invoke$arity$0 = rdd$services$event_bus$start_queue_$_state_machine__41258__auto____0;
rdd$services$event_bus$start_queue_$_state_machine__41258__auto__.cljs$core$IFn$_invoke$arity$1 = rdd$services$event_bus$start_queue_$_state_machine__41258__auto____1;
return rdd$services$event_bus$start_queue_$_state_machine__41258__auto__;
})()
})();
var state__41329__auto__ = (function (){var statearr_46831 = f__41328__auto__();
(statearr_46831[(6)] = c__41327__auto__);

return statearr_46831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41329__auto__);
}));

return c__41327__auto__;
});
rdd.services.event_bus.start_queue(cljs.core.deref(rdd.services.event_bus.bus));
/**
 * Publish a payload, {:topic :db-updated :data {}}
 */
rdd.services.event_bus.publish_BANG_ = (function rdd$services$event_bus$publish_BANG_(data){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rdd.services.event_bus.bus),data);
});

//# sourceMappingURL=rdd.services.event_bus.js.map
