goog.provide('postmortem.session');
postmortem.session.xf__GT_rf = (function postmortem$session$xf__GT_rf(var_args){
var G__47808 = arguments.length;
switch (G__47808) {
case 1:
return postmortem.session.xf__GT_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.session.xf__GT_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.session.xf__GT_rf.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return postmortem.session.xf__GT_rf.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.conj);
}));

(postmortem.session.xf__GT_rf.cljs$core$IFn$_invoke$arity$2 = (function (xform,rf){
var rf__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf));
var finished_QMARK_ = cljs.core.volatile_BANG_(false);
return (function() {
var G__47867 = null;
var G__47867__0 = (function (){
return (rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null));
});
var G__47867__1 = (function (result){
cljs.core.vreset_BANG_(finished_QMARK_,true);

return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(result) : rf__$1.call(null,result));
});
var G__47867__2 = (function (acc,item){
if(cljs.core.truth_(cljs.core.deref(finished_QMARK_))){
return acc;
} else {
var ret = (rf__$1.cljs$core$IFn$_invoke$arity$2 ? rf__$1.cljs$core$IFn$_invoke$arity$2(acc,item) : rf__$1.call(null,acc,item));
if(cljs.core.reduced_QMARK_(ret)){
cljs.core.vreset_BANG_(finished_QMARK_,true);
} else {
}

return cljs.core.unreduced(ret);
}
});
G__47867 = function(acc,item){
switch(arguments.length){
case 0:
return G__47867__0.call(this);
case 1:
return G__47867__1.call(this,acc);
case 2:
return G__47867__2.call(this,acc,item);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47867.cljs$core$IFn$_invoke$arity$0 = G__47867__0;
G__47867.cljs$core$IFn$_invoke$arity$1 = G__47867__1;
G__47867.cljs$core$IFn$_invoke$arity$2 = G__47867__2;
return G__47867;
})()
}));

(postmortem.session.xf__GT_rf.cljs$lang$maxFixedArity = 2);

postmortem.session.enqueue_BANG_ = (function postmortem$session$enqueue_BANG_(logs,key,base_xform,xform,item){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(logs,key);
if(cljs.core.truth_(temp__5751__auto__)){
var map__47822 = temp__5751__auto__;
var map__47822__$1 = cljs.core.__destructure_map(map__47822);
var entry = map__47822__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47822__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var items_SINGLEQUOTE_ = (function (){var fexpr__47823 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(entry);
return (fexpr__47823.cljs$core$IFn$_invoke$arity$2 ? fexpr__47823.cljs$core$IFn$_invoke$arity$2(items,item) : fexpr__47823.call(null,items,item));
})();
if((items === items_SINGLEQUOTE_)){
return logs;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logs,key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"items","items",1031954938),items_SINGLEQUOTE_));
}
} else {
var rf = postmortem.session.xf__GT_rf.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(base_xform,xform));
var entry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),(function (){var G__47824 = (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
var G__47825 = item;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__47824,G__47825) : rf.call(null,G__47824,G__47825));
})(),new cljs.core.Keyword(null,"fn","fn",-1175266204),rf,new cljs.core.Keyword(null,"completed?","completed?",946828354),false], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logs,key,entry);
}
});
postmortem.session.complete_log_entry_BANG_ = (function postmortem$session$complete_log_entry_BANG_(entry){
if(cljs.core.truth_(new cljs.core.Keyword(null,"completed?","completed?",946828354).cljs$core$IFn$_invoke$arity$1(entry))){
return entry;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(entry)),new cljs.core.Keyword(null,"completed?","completed?",946828354),true);
}
});
postmortem.session.complete_logs_BANG_ = (function postmortem$session$complete_logs_BANG_(logs,keys){
return cljs.core.reduce_kv((function (m,key,entry){
if(cljs.core.contains_QMARK_(keys,key)){
var entry_SINGLEQUOTE_ = postmortem.session.complete_log_entry_BANG_(entry);
if((entry === entry_SINGLEQUOTE_)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,entry_SINGLEQUOTE_);
}
} else {
return m;
}
}),logs,logs);
});
postmortem.session.collect_logs = (function postmortem$session$collect_logs(logs,keys){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(logs,k),new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.truth_(temp__5751__auto__)){
var items = temp__5751__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,items);
} else {
return m;
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),keys));
});

/**
* @constructor
 * @implements {postmortem.protocols.ISession}
 * @implements {postmortem.protocols.ILogStorage}
 * @implements {postmortem.protocols.ICompletable}
*/
postmortem.session.ThreadUnsafeSession = (function (xform,logs){
this.xform = xform;
this.logs = logs;
});
(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ISession$ = cljs.core.PROTOCOL_SENTINEL);

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ILogStorage$ = cljs.core.PROTOCOL_SENTINEL);

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ILogStorage$_add_item_BANG_$arity$4 = (function (this$,key,xform_SINGLEQUOTE_,item){
var self__ = this;
var this$__$1 = this;
return (self__.logs = postmortem.session.enqueue_BANG_(self__.logs,key,self__.xform,xform_SINGLEQUOTE_,item));
}));

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ILogStorage$_keys$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.keys(self__.logs);
}));

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ILogStorage$_logs$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return postmortem.session.collect_logs(self__.logs,cljs.core.keys(self__.logs));
}));

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ILogStorage$_logs$arity$2 = (function (this$,keys){
var self__ = this;
var this$__$1 = this;
return postmortem.session.collect_logs(self__.logs,keys);
}));

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ILogStorage$_reset_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.logs = cljs.core.PersistentArrayMap.EMPTY);
}));

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ILogStorage$_reset_BANG_$arity$2 = (function (this$,keys){
var self__ = this;
var this$__$1 = this;
return (self__.logs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,self__.logs,keys));
}));

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ICompletable$_completed_QMARK_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.logs,key),new cljs.core.Keyword(null,"completed?","completed?",946828354));
}));

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ICompletable$_complete_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.logs = postmortem.session.complete_logs_BANG_(self__.logs,cljs.core.set(cljs.core.keys(self__.logs))));
}));

(postmortem.session.ThreadUnsafeSession.prototype.postmortem$protocols$ICompletable$_complete_BANG_$arity$2 = (function (this$,keys){
var self__ = this;
var this$__$1 = this;
return (self__.logs = postmortem.session.complete_logs_BANG_(self__.logs,keys));
}));

(postmortem.session.ThreadUnsafeSession.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",-85179481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"logs","logs",-1586287761,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
}));

(postmortem.session.ThreadUnsafeSession.cljs$lang$type = true);

(postmortem.session.ThreadUnsafeSession.cljs$lang$ctorStr = "postmortem.session/ThreadUnsafeSession");

(postmortem.session.ThreadUnsafeSession.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"postmortem.session/ThreadUnsafeSession");
}));

/**
 * Positional factory function for postmortem.session/ThreadUnsafeSession.
 */
postmortem.session.__GT_ThreadUnsafeSession = (function postmortem$session$__GT_ThreadUnsafeSession(xform,logs){
return (new postmortem.session.ThreadUnsafeSession(xform,logs));
});

postmortem.session.void_session = (function postmortem$session$void_session(){
if((typeof postmortem !== 'undefined') && (typeof postmortem.session !== 'undefined') && (typeof postmortem.session.t_postmortem$session47850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {postmortem.protocols.ISession}
 * @implements {cljs.core.IMeta}
 * @implements {postmortem.protocols.ILogStorage}
 * @implements {postmortem.protocols.ICompletable}
 * @implements {cljs.core.IWithMeta}
*/
postmortem.session.t_postmortem$session47850 = (function (meta47851){
this.meta47851 = meta47851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(postmortem.session.t_postmortem$session47850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47852,meta47851__$1){
var self__ = this;
var _47852__$1 = this;
return (new postmortem.session.t_postmortem$session47850(meta47851__$1));
}));

(postmortem.session.t_postmortem$session47850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47852){
var self__ = this;
var _47852__$1 = this;
return self__.meta47851;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ISession$ = cljs.core.PROTOCOL_SENTINEL);

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ILogStorage$ = cljs.core.PROTOCOL_SENTINEL);

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ILogStorage$_add_item_BANG_$arity$4 = (function (this$,key,xform,item){
var self__ = this;
var this$__$1 = this;
return null;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ILogStorage$_keys$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ILogStorage$_logs$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ILogStorage$_logs$arity$2 = (function (this$,keys){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ILogStorage$_reset_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ILogStorage$_reset_BANG_$arity$2 = (function (this$,keys){
var self__ = this;
var this$__$1 = this;
return null;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ICompletable$_completed_QMARK_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return true;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ICompletable$_complete_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(postmortem.session.t_postmortem$session47850.prototype.postmortem$protocols$ICompletable$_complete_BANG_$arity$2 = (function (this$,keys){
var self__ = this;
var this$__$1 = this;
return null;
}));

(postmortem.session.t_postmortem$session47850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47851","meta47851",-519860281,null)], null);
}));

(postmortem.session.t_postmortem$session47850.cljs$lang$type = true);

(postmortem.session.t_postmortem$session47850.cljs$lang$ctorStr = "postmortem.session/t_postmortem$session47850");

(postmortem.session.t_postmortem$session47850.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"postmortem.session/t_postmortem$session47850");
}));

/**
 * Positional factory function for postmortem.session/t_postmortem$session47850.
 */
postmortem.session.__GT_t_postmortem$session47850 = (function postmortem$session$void_session_$___GT_t_postmortem$session47850(meta47851){
return (new postmortem.session.t_postmortem$session47850(meta47851));
});

}

return (new postmortem.session.t_postmortem$session47850(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=postmortem.session.js.map
