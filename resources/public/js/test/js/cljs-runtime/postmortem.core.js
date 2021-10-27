goog.provide('postmortem.core');
/**
 * Returns true if x is a session.
 */
postmortem.core.session_QMARK_ = (function postmortem$core$session_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.postmortem$protocols$ISession$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(postmortem.protocols.ISession,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(postmortem.protocols.ISession,x);
}
});
/**
 * Creates and returns a new thread-unsafe session.
 *   Updates to a thread-unsafe session won't be synchronized among mulithreads.
 *   If all updates to a session need to be synchronized, use make-session instead.
 *   In ClojureScript, make-unsafe-session is exactly the same as make-session.
 */
postmortem.core.make_unsafe_session = (function postmortem$core$make_unsafe_session(var_args){
var G__47913 = arguments.length;
switch (G__47913) {
case 0:
return postmortem.core.make_unsafe_session.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.make_unsafe_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.make_unsafe_session.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.make_unsafe_session.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
}));

(postmortem.core.make_unsafe_session.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return postmortem.session.__GT_ThreadUnsafeSession(xform,cljs.core.PersistentArrayMap.EMPTY);
}));

(postmortem.core.make_unsafe_session.cljs$lang$maxFixedArity = 1);

/**
 * Creates and returns a new session.
 *   Sessions created by this function are thread-safe and so all updates to them
 *   will be synchronized. Only if it is guaranteed that no more than one updates
 *   never happen simultaneously, make-unsafe-session can be used instead for better
 *   performance.
 *   In ClojureScript, make-session is exactly the same as make-unsafe-session.
 */
postmortem.core.make_session = (function postmortem$core$make_session(var_args){
var G__47934 = arguments.length;
switch (G__47934) {
case 0:
return postmortem.core.make_session.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.make_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.make_session.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.make_session.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
}));

(postmortem.core.make_session.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return postmortem.core.make_unsafe_session.cljs$core$IFn$_invoke$arity$1(xform);
}));

(postmortem.core.make_session.cljs$lang$maxFixedArity = 1);

/**
 * Returns a void session, which logs nothing and never triggers a call
 *   to transducer. It's useful to disable logging entirely.
 */
postmortem.core.void_session = (function (){var session = postmortem.session.void_session();
return (function (){
return session;
});
})();
/**
 * Dynamic var bound to the current session. Don't use this directly, call
 *   (current-session) instead.
 */
postmortem.core._STAR_current_session_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(postmortem.core.make_session.cljs$core$IFn$_invoke$arity$0());
/**
 * Returns the current session.
 */
postmortem.core.current_session = (function postmortem$core$current_session(){
return cljs.core.deref(postmortem.core._STAR_current_session_STAR_);
});
/**
 * Sets the current session to the specified one.
 */
postmortem.core.set_current_session_BANG_ = (function postmortem$core$set_current_session_BANG_(session){
cljs.core.reset_BANG_(postmortem.core._STAR_current_session_STAR_,session);

return null;
});
/**
 * Returns true if the log entry for the specified key has been completed.
 *   If session is omitted, the log entry in the current session will be checked.
 */
postmortem.core.completed_QMARK_ = (function postmortem$core$completed_QMARK_(var_args){
var G__47962 = arguments.length;
switch (G__47962) {
case 1:
return postmortem.core.completed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.core.completed_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.completed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (key){
return postmortem.core.completed_QMARK_.cljs$core$IFn$_invoke$arity$2(postmortem.core.current_session(),key);
}));

(postmortem.core.completed_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (session,key){
return postmortem.protocols._completed_QMARK_(session,key);
}));

(postmortem.core.completed_QMARK_.cljs$lang$maxFixedArity = 2);

postmortem.core.logs_STAR_ = (function postmortem$core$logs_STAR_(var_args){
var G__47973 = arguments.length;
switch (G__47973) {
case 1:
return postmortem.core.logs_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.core.logs_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.logs_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (session){
postmortem.protocols._complete_BANG_(session);

return postmortem.protocols._logs(session);
}));

(postmortem.core.logs_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (session,keys){
postmortem.protocols._complete_BANG_(session,keys);

return postmortem.protocols._logs(session,keys);
}));

(postmortem.core.logs_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Completes log entry for the specified key and returns a vector of logged
 *   items in the entry.
 *   If session is omitted, the log will be pulled from the current session.
 */
postmortem.core.log_for = (function postmortem$core$log_for(var_args){
var G__47979 = arguments.length;
switch (G__47979) {
case 1:
return postmortem.core.log_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.core.log_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.log_for.cljs$core$IFn$_invoke$arity$1 = (function (key){
return postmortem.core.log_for.cljs$core$IFn$_invoke$arity$2(postmortem.core.current_session(),key);
}));

(postmortem.core.log_for.cljs$core$IFn$_invoke$arity$2 = (function (session,key){
if(postmortem.core.session_QMARK_(session)){
} else {
throw (new Error(["Assert failed: ","Invalid session specified","\n","(session? session)"].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(postmortem.core.logs_STAR_.cljs$core$IFn$_invoke$arity$2(session,cljs.core.PersistentHashSet.createAsIfByAssoc([key])),key);
}));

(postmortem.core.log_for.cljs$lang$maxFixedArity = 2);

postmortem.core.last_item = (function postmortem$core$last_item(entry){
var G__47985 = entry;
var G__47985__$1 = (((G__47985 == null))?null:cljs.core.rseq(G__47985));
if((G__47985__$1 == null)){
return null;
} else {
return cljs.core.first(G__47985__$1);
}
});
/**
 * Completes log entry for the specified key and returns the last item in
 *   the entry.
 *   If session is omitted, the log will be pulled from the current session.
 */
postmortem.core.last_log_for = (function postmortem$core$last_log_for(var_args){
var G__47991 = arguments.length;
switch (G__47991) {
case 1:
return postmortem.core.last_log_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.core.last_log_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.last_log_for.cljs$core$IFn$_invoke$arity$1 = (function (key){
return postmortem.core.last_log_for.cljs$core$IFn$_invoke$arity$2(postmortem.core.current_session(),key);
}));

(postmortem.core.last_log_for.cljs$core$IFn$_invoke$arity$2 = (function (session,key){
return postmortem.core.last_item(postmortem.core.log_for.cljs$core$IFn$_invoke$arity$2(session,key));
}));

(postmortem.core.last_log_for.cljs$lang$maxFixedArity = 2);

/**
 * Completes log entries for the specified keys and returns a map of key to
 *   vector of logged items.
 *   If session is omitted, the logs will be pulled from the current session.
 */
postmortem.core.logs_for = (function postmortem$core$logs_for(var_args){
var G__48007 = arguments.length;
switch (G__48007) {
case 1:
return postmortem.core.logs_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.core.logs_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.logs_for.cljs$core$IFn$_invoke$arity$1 = (function (keys){
return postmortem.core.logs_for.cljs$core$IFn$_invoke$arity$2(postmortem.core.current_session(),keys);
}));

(postmortem.core.logs_for.cljs$core$IFn$_invoke$arity$2 = (function (session,keys){
if(postmortem.core.session_QMARK_(session)){
} else {
throw (new Error(["Assert failed: ","Invalid session specified","\n","(session? session)"].join('')));
}

if(cljs.core.coll_QMARK_(keys)){
} else {
throw (new Error(["Assert failed: ","keys must be a collection","\n","(coll? keys)"].join('')));
}

return postmortem.core.logs_STAR_.cljs$core$IFn$_invoke$arity$2(session,cljs.core.set(keys));
}));

(postmortem.core.logs_for.cljs$lang$maxFixedArity = 2);

/**
 * Completes all log entries and returns a map of key to vector of logged items.
 *   If session is omitted, the logs will be pulled from the current session.
 */
postmortem.core.logs = (function postmortem$core$logs(var_args){
var G__48021 = arguments.length;
switch (G__48021) {
case 0:
return postmortem.core.logs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.logs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.logs.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.logs.cljs$core$IFn$_invoke$arity$1(postmortem.core.current_session());
}));

(postmortem.core.logs.cljs$core$IFn$_invoke$arity$1 = (function (session){
if(postmortem.core.session_QMARK_(session)){
} else {
throw (new Error(["Assert failed: ","Invalid session specified","\n","(session? session)"].join('')));
}

return postmortem.core.logs_STAR_.cljs$core$IFn$_invoke$arity$1(session);
}));

(postmortem.core.logs.cljs$lang$maxFixedArity = 1);

/**
 * Returns all the log entry keys that the session contains.
 *   If session is ommited, the keys will be pulled from the current session.
 */
postmortem.core.keys = (function postmortem$core$keys(var_args){
var G__48029 = arguments.length;
switch (G__48029) {
case 0:
return postmortem.core.keys.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.keys.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.keys.cljs$core$IFn$_invoke$arity$1(postmortem.core.current_session());
}));

(postmortem.core.keys.cljs$core$IFn$_invoke$arity$1 = (function (session){
if(postmortem.core.session_QMARK_(session)){
} else {
throw (new Error(["Assert failed: ","Invalid session specified","\n","(session? session)"].join('')));
}

return cljs.core.set(postmortem.protocols._keys(session));
}));

(postmortem.core.keys.cljs$lang$maxFixedArity = 1);

/**
 * Returns a stats map, which is a map of log entry key to a number
 *   that indicates how many log items have been logged for the log entry.
 *   If session is omitted, stats for the current session will be
 *   returned.
 */
postmortem.core.stats = (function postmortem$core$stats(var_args){
var G__48041 = arguments.length;
switch (G__48041) {
case 0:
return postmortem.core.stats.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.stats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.stats.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.stats.cljs$core$IFn$_invoke$arity$1(postmortem.core.current_session());
}));

(postmortem.core.stats.cljs$core$IFn$_invoke$arity$1 = (function (session){
if(postmortem.core.session_QMARK_(session)){
} else {
throw (new Error(["Assert failed: ","Invalid session specified","\n","(session? session)"].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48045){
var vec__48046 = p__48045;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48046,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48046,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count(xs)], null);
})),postmortem.core.logs_STAR_.cljs$core$IFn$_invoke$arity$1(session));
}));

(postmortem.core.stats.cljs$lang$maxFixedArity = 1);

/**
 * Alias for `stats`. See the docstring for `stats` for details.
 */
postmortem.core.frequencies = (function postmortem$core$frequencies(var_args){
var G__48050 = arguments.length;
switch (G__48050) {
case 0:
return postmortem.core.frequencies.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.frequencies.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.frequencies.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.stats.cljs$core$IFn$_invoke$arity$1(postmortem.core.current_session());
}));

(postmortem.core.frequencies.cljs$core$IFn$_invoke$arity$1 = (function (session){
return postmortem.core.stats.cljs$core$IFn$_invoke$arity$1(session);
}));

(postmortem.core.frequencies.cljs$lang$maxFixedArity = 1);

/**
 * Resets log entry for the specified key.
 *   If session is omitted, the entries in the current session will be reset.
 */
postmortem.core.reset_key_BANG_ = (function postmortem$core$reset_key_BANG_(var_args){
var G__48052 = arguments.length;
switch (G__48052) {
case 1:
return postmortem.core.reset_key_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.core.reset_key_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.reset_key_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (key){
return postmortem.core.reset_key_BANG_.cljs$core$IFn$_invoke$arity$2(postmortem.core.current_session(),key);
}));

(postmortem.core.reset_key_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (session,key){
if(postmortem.core.session_QMARK_(session)){
} else {
throw (new Error(["Assert failed: ","Invalid session specified","\n","(session? session)"].join('')));
}

postmortem.protocols._reset_BANG_(session,cljs.core.PersistentHashSet.createAsIfByAssoc([key]));

return null;
}));

(postmortem.core.reset_key_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Resets log entries for the specified keys.
 *   If session is omitted, the entries in the current session will be reset.
 */
postmortem.core.reset_keys_BANG_ = (function postmortem$core$reset_keys_BANG_(var_args){
var G__48063 = arguments.length;
switch (G__48063) {
case 1:
return postmortem.core.reset_keys_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.core.reset_keys_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.reset_keys_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (keys){
return postmortem.core.reset_keys_BANG_.cljs$core$IFn$_invoke$arity$2(postmortem.core.current_session(),keys);
}));

(postmortem.core.reset_keys_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (session,keys){
if(postmortem.core.session_QMARK_(session)){
} else {
throw (new Error(["Assert failed: ","Invalid session specified","\n","(session? session)"].join('')));
}

if(cljs.core.coll_QMARK_(keys)){
} else {
throw (new Error(["Assert failed: ","keys must be a collection","\n","(coll? keys)"].join('')));
}

postmortem.protocols._reset_BANG_(session,cljs.core.set(keys));

return null;
}));

(postmortem.core.reset_keys_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Resets all the log entries.
 *   If session is omitted, the entries in the current session will be reset.
 */
postmortem.core.reset_BANG_ = (function postmortem$core$reset_BANG_(var_args){
var G__48075 = arguments.length;
switch (G__48075) {
case 0:
return postmortem.core.reset_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.reset_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.reset_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.reset_BANG_.cljs$core$IFn$_invoke$arity$1(postmortem.core.current_session());
}));

(postmortem.core.reset_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (session){
if(postmortem.core.session_QMARK_(session)){
} else {
throw (new Error(["Assert failed: ","Invalid session specified","\n","(session? session)"].join('')));
}

postmortem.protocols._reset_BANG_(session);

return null;
}));

(postmortem.core.reset_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Saves a value to the log entry corresponding to the specified key and returns
 *   the value as-is.
 *   If a transducer xform is specified, it will be applied when adding
 *   the value to the log entry. Defaults to clojure.core/identity.
 *   If session is specified, the value will be added to the log entry in that
 *   session. Otherwise, the value will be added to the log entry in the current
 *   session.
 *   spy> is intended to be used in combination with thread-first macros.
 *   In thread-last contexts, use spy>> instead.
 */
postmortem.core.spy_GT_ = (function postmortem$core$spy_GT_(var_args){
var G__48085 = arguments.length;
switch (G__48085) {
case 2:
return postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,key){
return postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$3(x,key,cljs.core.identity);
}));

(postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$3 = (function (x,key,xform){
return postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$4(x,postmortem.core.current_session(),key,xform);
}));

(postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$4 = (function (x,session,key,xform){
postmortem.protocols._add_item_BANG_(session,key,xform,x);

return x;
}));

(postmortem.core.spy_GT_.cljs$lang$maxFixedArity = 4);

/**
 * A version of spy> intended to be used in combination with thread-last macros.
 *   See the docstring of spy> for more details.
 */
postmortem.core.spy_GT__GT_ = (function postmortem$core$spy_GT__GT_(var_args){
var G__48089 = arguments.length;
switch (G__48089) {
case 2:
return postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$2 = (function (key,x){
return postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$3(key,cljs.core.identity,x);
}));

(postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$3 = (function (key,xform,x){
return postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$4(postmortem.core.current_session(),key,xform,x);
}));

(postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$4 = (function (session,key,xform,x){
return postmortem.core.spy_GT_.cljs$core$IFn$_invoke$arity$4(x,session,key,xform);
}));

(postmortem.core.spy_GT__GT_.cljs$lang$maxFixedArity = 4);

/**
 * Creates a simple logger.
 * 
 *   A simple logger is a function with two arities that closes over
 *   an implicit session. If called with one argument, it acts like
 *   `(spy>> :key <arg>)` on the implicit session. If called with
 *   no argument, it acts like `(log-for :key)`.
 * 
 *   If a transducer is passed as the optional argument, it will be attached
 *   to the implicit session.
 */
postmortem.core.make_logger = (function postmortem$core$make_logger(var_args){
var G__48099 = arguments.length;
switch (G__48099) {
case 0:
return postmortem.core.make_logger.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.make_logger.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.make_logger.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.make_logger.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
}));

(postmortem.core.make_logger.cljs$core$IFn$_invoke$arity$1 = (function (xform){
var sess = postmortem.core.make_session.cljs$core$IFn$_invoke$arity$0();
return (function() {
var G__48174 = null;
var G__48174__0 = (function (){
return postmortem.core.log_for.cljs$core$IFn$_invoke$arity$2(sess,new cljs.core.Keyword(null,"key","key",-1516042587));
});
var G__48174__1 = (function (val){
return postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$4(sess,new cljs.core.Keyword(null,"key","key",-1516042587),xform,val);
});
G__48174 = function(val){
switch(arguments.length){
case 0:
return G__48174__0.call(this);
case 1:
return G__48174__1.call(this,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48174.cljs$core$IFn$_invoke$arity$0 = G__48174__0;
G__48174.cljs$core$IFn$_invoke$arity$1 = G__48174__1;
return G__48174;
})()
}));

(postmortem.core.make_logger.cljs$lang$maxFixedArity = 1);

/**
 * Creates a multi logger.
 *   
 *   A multi logger is a variant of the simple logger. If called with
 *   two arguments, it acts like `(spy>> <arg1> <arg2>)` on the implicit
 *   session. If called with one argument, it acts like (log-for <arg>)`.
 *   If called with no argument, it acts like `(logs)`.
 * 
 *   If a transducer is passed as the optional argument, it will be attached
 *   to the implicit session.
 */
postmortem.core.make_multi_logger = (function postmortem$core$make_multi_logger(var_args){
var G__48103 = arguments.length;
switch (G__48103) {
case 0:
return postmortem.core.make_multi_logger.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return postmortem.core.make_multi_logger.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.core.make_multi_logger.cljs$core$IFn$_invoke$arity$0 = (function (){
return postmortem.core.make_multi_logger.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
}));

(postmortem.core.make_multi_logger.cljs$core$IFn$_invoke$arity$1 = (function (xform){
var sess = postmortem.core.make_session.cljs$core$IFn$_invoke$arity$0();
return (function() {
var G__48186 = null;
var G__48186__0 = (function (){
return postmortem.core.logs.cljs$core$IFn$_invoke$arity$1(sess);
});
var G__48186__1 = (function (key){
return postmortem.core.log_for.cljs$core$IFn$_invoke$arity$2(sess,key);
});
var G__48186__2 = (function (key,val){
return postmortem.core.spy_GT__GT_.cljs$core$IFn$_invoke$arity$4(sess,key,xform,val);
});
G__48186 = function(key,val){
switch(arguments.length){
case 0:
return G__48186__0.call(this);
case 1:
return G__48186__1.call(this,key);
case 2:
return G__48186__2.call(this,key,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48186.cljs$core$IFn$_invoke$arity$0 = G__48186__0;
G__48186.cljs$core$IFn$_invoke$arity$1 = G__48186__1;
G__48186.cljs$core$IFn$_invoke$arity$2 = G__48186__2;
return G__48186;
})()
}));

(postmortem.core.make_multi_logger.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=postmortem.core.js.map
