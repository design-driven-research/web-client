goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44768 = arguments.length;
switch (G__44768) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44773 = (function (f,blockable,meta44774){
this.f = f;
this.blockable = blockable;
this.meta44774 = meta44774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44775,meta44774__$1){
var self__ = this;
var _44775__$1 = this;
return (new cljs.core.async.t_cljs$core$async44773(self__.f,self__.blockable,meta44774__$1));
}));

(cljs.core.async.t_cljs$core$async44773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44775){
var self__ = this;
var _44775__$1 = this;
return self__.meta44774;
}));

(cljs.core.async.t_cljs$core$async44773.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44773.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44774","meta44774",-1324522404,null)], null);
}));

(cljs.core.async.t_cljs$core$async44773.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44773");

(cljs.core.async.t_cljs$core$async44773.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async44773");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44773.
 */
cljs.core.async.__GT_t_cljs$core$async44773 = (function cljs$core$async$__GT_t_cljs$core$async44773(f__$1,blockable__$1,meta44774){
return (new cljs.core.async.t_cljs$core$async44773(f__$1,blockable__$1,meta44774));
});

}

return (new cljs.core.async.t_cljs$core$async44773(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44844 = arguments.length;
switch (G__44844) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44855 = arguments.length;
switch (G__44855) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44860 = arguments.length;
switch (G__44860) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47547 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47547) : fn1.call(null,val_47547));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47547) : fn1.call(null,val_47547));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44874 = arguments.length;
switch (G__44874) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___47554 = n;
var x_47555 = (0);
while(true){
if((x_47555 < n__4695__auto___47554)){
(a[x_47555] = x_47555);

var G__47556 = (x_47555 + (1));
x_47555 = G__47556;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44879 = (function (flag,meta44880){
this.flag = flag;
this.meta44880 = meta44880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44881,meta44880__$1){
var self__ = this;
var _44881__$1 = this;
return (new cljs.core.async.t_cljs$core$async44879(self__.flag,meta44880__$1));
}));

(cljs.core.async.t_cljs$core$async44879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44881){
var self__ = this;
var _44881__$1 = this;
return self__.meta44880;
}));

(cljs.core.async.t_cljs$core$async44879.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44879.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44880","meta44880",-1152497283,null)], null);
}));

(cljs.core.async.t_cljs$core$async44879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44879");

(cljs.core.async.t_cljs$core$async44879.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async44879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44879.
 */
cljs.core.async.__GT_t_cljs$core$async44879 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44879(flag__$1,meta44880){
return (new cljs.core.async.t_cljs$core$async44879(flag__$1,meta44880));
});

}

return (new cljs.core.async.t_cljs$core$async44879(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44889 = (function (flag,cb,meta44890){
this.flag = flag;
this.cb = cb;
this.meta44890 = meta44890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44891,meta44890__$1){
var self__ = this;
var _44891__$1 = this;
return (new cljs.core.async.t_cljs$core$async44889(self__.flag,self__.cb,meta44890__$1));
}));

(cljs.core.async.t_cljs$core$async44889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44891){
var self__ = this;
var _44891__$1 = this;
return self__.meta44890;
}));

(cljs.core.async.t_cljs$core$async44889.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44890","meta44890",-1261220224,null)], null);
}));

(cljs.core.async.t_cljs$core$async44889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44889");

(cljs.core.async.t_cljs$core$async44889.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async44889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44889.
 */
cljs.core.async.__GT_t_cljs$core$async44889 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44889(flag__$1,cb__$1,meta44890){
return (new cljs.core.async.t_cljs$core$async44889(flag__$1,cb__$1,meta44890));
});

}

return (new cljs.core.async.t_cljs$core$async44889(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44898_SHARP_){
var G__44900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44898_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44900) : fret.call(null,G__44900));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44899_SHARP_){
var G__44904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44899_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44904) : fret.call(null,G__44904));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47567 = (i + (1));
i = G__47567;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47572 = arguments.length;
var i__4819__auto___47573 = (0);
while(true){
if((i__4819__auto___47573 < len__4818__auto___47572)){
args__4824__auto__.push((arguments[i__4819__auto___47573]));

var G__47574 = (i__4819__auto___47573 + (1));
i__4819__auto___47573 = G__47574;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44910){
var map__44911 = p__44910;
var map__44911__$1 = cljs.core.__destructure_map(map__44911);
var opts = map__44911__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44908){
var G__44909 = cljs.core.first(seq44908);
var seq44908__$1 = cljs.core.next(seq44908);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44909,seq44908__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44916 = arguments.length;
switch (G__44916) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44704__auto___47583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_44986){
var state_val_44987 = (state_44986[(1)]);
if((state_val_44987 === (7))){
var inst_44982 = (state_44986[(2)]);
var state_44986__$1 = state_44986;
var statearr_44991_47584 = state_44986__$1;
(statearr_44991_47584[(2)] = inst_44982);

(statearr_44991_47584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (1))){
var state_44986__$1 = state_44986;
var statearr_44992_47585 = state_44986__$1;
(statearr_44992_47585[(2)] = null);

(statearr_44992_47585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (4))){
var inst_44962 = (state_44986[(7)]);
var inst_44962__$1 = (state_44986[(2)]);
var inst_44966 = (inst_44962__$1 == null);
var state_44986__$1 = (function (){var statearr_44993 = state_44986;
(statearr_44993[(7)] = inst_44962__$1);

return statearr_44993;
})();
if(cljs.core.truth_(inst_44966)){
var statearr_44994_47586 = state_44986__$1;
(statearr_44994_47586[(1)] = (5));

} else {
var statearr_44995_47587 = state_44986__$1;
(statearr_44995_47587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (13))){
var state_44986__$1 = state_44986;
var statearr_44996_47588 = state_44986__$1;
(statearr_44996_47588[(2)] = null);

(statearr_44996_47588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (6))){
var inst_44962 = (state_44986[(7)]);
var state_44986__$1 = state_44986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44986__$1,(11),to,inst_44962);
} else {
if((state_val_44987 === (3))){
var inst_44984 = (state_44986[(2)]);
var state_44986__$1 = state_44986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44986__$1,inst_44984);
} else {
if((state_val_44987 === (12))){
var state_44986__$1 = state_44986;
var statearr_44997_47592 = state_44986__$1;
(statearr_44997_47592[(2)] = null);

(statearr_44997_47592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (2))){
var state_44986__$1 = state_44986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44986__$1,(4),from);
} else {
if((state_val_44987 === (11))){
var inst_44975 = (state_44986[(2)]);
var state_44986__$1 = state_44986;
if(cljs.core.truth_(inst_44975)){
var statearr_44998_47593 = state_44986__$1;
(statearr_44998_47593[(1)] = (12));

} else {
var statearr_44999_47594 = state_44986__$1;
(statearr_44999_47594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (9))){
var state_44986__$1 = state_44986;
var statearr_45000_47596 = state_44986__$1;
(statearr_45000_47596[(2)] = null);

(statearr_45000_47596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (5))){
var state_44986__$1 = state_44986;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45001_47597 = state_44986__$1;
(statearr_45001_47597[(1)] = (8));

} else {
var statearr_45002_47598 = state_44986__$1;
(statearr_45002_47598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (14))){
var inst_44980 = (state_44986[(2)]);
var state_44986__$1 = state_44986;
var statearr_45003_47599 = state_44986__$1;
(statearr_45003_47599[(2)] = inst_44980);

(statearr_45003_47599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (10))){
var inst_44972 = (state_44986[(2)]);
var state_44986__$1 = state_44986;
var statearr_45004_47600 = state_44986__$1;
(statearr_45004_47600[(2)] = inst_44972);

(statearr_45004_47600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44987 === (8))){
var inst_44969 = cljs.core.async.close_BANG_(to);
var state_44986__$1 = state_44986;
var statearr_45005_47601 = state_44986__$1;
(statearr_45005_47601[(2)] = inst_44969);

(statearr_45005_47601[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_45006 = [null,null,null,null,null,null,null,null];
(statearr_45006[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_45006[(1)] = (1));

return statearr_45006;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_44986){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_44986);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45007){var ex__44439__auto__ = e45007;
var statearr_45008_47609 = state_44986;
(statearr_45008_47609[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_44986[(4)]))){
var statearr_45009_47610 = state_44986;
(statearr_45009_47610[(1)] = cljs.core.first((state_44986[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47612 = state_44986;
state_44986 = G__47612;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_44986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_44986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45019 = f__44705__auto__();
(statearr_45019[(6)] = c__44704__auto___47583);

return statearr_45019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45020){
var vec__45021 = p__45020;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45021,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45021,(1),null);
var job = vec__45021;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44704__auto___47639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_45028){
var state_val_45029 = (state_45028[(1)]);
if((state_val_45029 === (1))){
var state_45028__$1 = state_45028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45028__$1,(2),res,v);
} else {
if((state_val_45029 === (2))){
var inst_45025 = (state_45028[(2)]);
var inst_45026 = cljs.core.async.close_BANG_(res);
var state_45028__$1 = (function (){var statearr_45030 = state_45028;
(statearr_45030[(7)] = inst_45025);

return statearr_45030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45028__$1,inst_45026);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0 = (function (){
var statearr_45031 = [null,null,null,null,null,null,null,null];
(statearr_45031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__);

(statearr_45031[(1)] = (1));

return statearr_45031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1 = (function (state_45028){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45028);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45032){var ex__44439__auto__ = e45032;
var statearr_45033_47642 = state_45028;
(statearr_45033_47642[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45028[(4)]))){
var statearr_45034_47644 = state_45028;
(statearr_45034_47644[(1)] = cljs.core.first((state_45028[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47647 = state_45028;
state_45028 = G__47647;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = function(state_45028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1.call(this,state_45028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45035 = f__44705__auto__();
(statearr_45035[(6)] = c__44704__auto___47639);

return statearr_45035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45036){
var vec__45037 = p__45036;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45037,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45037,(1),null);
var job = vec__45037;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___47663 = n;
var __47665 = (0);
while(true){
if((__47665 < n__4695__auto___47663)){
var G__45046_47666 = type;
var G__45046_47667__$1 = (((G__45046_47666 instanceof cljs.core.Keyword))?G__45046_47666.fqn:null);
switch (G__45046_47667__$1) {
case "compute":
var c__44704__auto___47672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47665,c__44704__auto___47672,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async){
return (function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = ((function (__47665,c__44704__auto___47672,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async){
return (function (state_45059){
var state_val_45060 = (state_45059[(1)]);
if((state_val_45060 === (1))){
var state_45059__$1 = state_45059;
var statearr_45065_47673 = state_45059__$1;
(statearr_45065_47673[(2)] = null);

(statearr_45065_47673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45060 === (2))){
var state_45059__$1 = state_45059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45059__$1,(4),jobs);
} else {
if((state_val_45060 === (3))){
var inst_45057 = (state_45059[(2)]);
var state_45059__$1 = state_45059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45059__$1,inst_45057);
} else {
if((state_val_45060 === (4))){
var inst_45049 = (state_45059[(2)]);
var inst_45050 = process(inst_45049);
var state_45059__$1 = state_45059;
if(cljs.core.truth_(inst_45050)){
var statearr_45066_47685 = state_45059__$1;
(statearr_45066_47685[(1)] = (5));

} else {
var statearr_45067_47686 = state_45059__$1;
(statearr_45067_47686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45060 === (5))){
var state_45059__$1 = state_45059;
var statearr_45068_47693 = state_45059__$1;
(statearr_45068_47693[(2)] = null);

(statearr_45068_47693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45060 === (6))){
var state_45059__$1 = state_45059;
var statearr_45069_47694 = state_45059__$1;
(statearr_45069_47694[(2)] = null);

(statearr_45069_47694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45060 === (7))){
var inst_45055 = (state_45059[(2)]);
var state_45059__$1 = state_45059;
var statearr_45070_47696 = state_45059__$1;
(statearr_45070_47696[(2)] = inst_45055);

(statearr_45070_47696[(1)] = (3));


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
});})(__47665,c__44704__auto___47672,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async))
;
return ((function (__47665,switch__44435__auto__,c__44704__auto___47672,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0 = (function (){
var statearr_45071 = [null,null,null,null,null,null,null];
(statearr_45071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__);

(statearr_45071[(1)] = (1));

return statearr_45071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1 = (function (state_45059){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45059);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45072){var ex__44439__auto__ = e45072;
var statearr_45073_47705 = state_45059;
(statearr_45073_47705[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45059[(4)]))){
var statearr_45074_47715 = state_45059;
(statearr_45074_47715[(1)] = cljs.core.first((state_45059[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47725 = state_45059;
state_45059 = G__47725;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = function(state_45059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1.call(this,state_45059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__;
})()
;})(__47665,switch__44435__auto__,c__44704__auto___47672,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async))
})();
var state__44706__auto__ = (function (){var statearr_45075 = f__44705__auto__();
(statearr_45075[(6)] = c__44704__auto___47672);

return statearr_45075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
});})(__47665,c__44704__auto___47672,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async))
);


break;
case "async":
var c__44704__auto___47729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47665,c__44704__auto___47729,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async){
return (function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = ((function (__47665,c__44704__auto___47729,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async){
return (function (state_45088){
var state_val_45089 = (state_45088[(1)]);
if((state_val_45089 === (1))){
var state_45088__$1 = state_45088;
var statearr_45090_47733 = state_45088__$1;
(statearr_45090_47733[(2)] = null);

(statearr_45090_47733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45089 === (2))){
var state_45088__$1 = state_45088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45088__$1,(4),jobs);
} else {
if((state_val_45089 === (3))){
var inst_45086 = (state_45088[(2)]);
var state_45088__$1 = state_45088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45088__$1,inst_45086);
} else {
if((state_val_45089 === (4))){
var inst_45078 = (state_45088[(2)]);
var inst_45079 = async(inst_45078);
var state_45088__$1 = state_45088;
if(cljs.core.truth_(inst_45079)){
var statearr_45091_47734 = state_45088__$1;
(statearr_45091_47734[(1)] = (5));

} else {
var statearr_45092_47735 = state_45088__$1;
(statearr_45092_47735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45089 === (5))){
var state_45088__$1 = state_45088;
var statearr_45093_47736 = state_45088__$1;
(statearr_45093_47736[(2)] = null);

(statearr_45093_47736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45089 === (6))){
var state_45088__$1 = state_45088;
var statearr_45094_47737 = state_45088__$1;
(statearr_45094_47737[(2)] = null);

(statearr_45094_47737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45089 === (7))){
var inst_45084 = (state_45088[(2)]);
var state_45088__$1 = state_45088;
var statearr_45095_47738 = state_45088__$1;
(statearr_45095_47738[(2)] = inst_45084);

(statearr_45095_47738[(1)] = (3));


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
});})(__47665,c__44704__auto___47729,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async))
;
return ((function (__47665,switch__44435__auto__,c__44704__auto___47729,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0 = (function (){
var statearr_45097 = [null,null,null,null,null,null,null];
(statearr_45097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__);

(statearr_45097[(1)] = (1));

return statearr_45097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1 = (function (state_45088){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45088);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45101){var ex__44439__auto__ = e45101;
var statearr_45102_47739 = state_45088;
(statearr_45102_47739[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45088[(4)]))){
var statearr_45103_47740 = state_45088;
(statearr_45103_47740[(1)] = cljs.core.first((state_45088[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47741 = state_45088;
state_45088 = G__47741;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = function(state_45088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1.call(this,state_45088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__;
})()
;})(__47665,switch__44435__auto__,c__44704__auto___47729,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async))
})();
var state__44706__auto__ = (function (){var statearr_45104 = f__44705__auto__();
(statearr_45104[(6)] = c__44704__auto___47729);

return statearr_45104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
});})(__47665,c__44704__auto___47729,G__45046_47666,G__45046_47667__$1,n__4695__auto___47663,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45046_47667__$1)].join('')));

}

var G__47742 = (__47665 + (1));
__47665 = G__47742;
continue;
} else {
}
break;
}

var c__44704__auto___47743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_45126){
var state_val_45127 = (state_45126[(1)]);
if((state_val_45127 === (7))){
var inst_45122 = (state_45126[(2)]);
var state_45126__$1 = state_45126;
var statearr_45132_47744 = state_45126__$1;
(statearr_45132_47744[(2)] = inst_45122);

(statearr_45132_47744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (1))){
var state_45126__$1 = state_45126;
var statearr_45133_47745 = state_45126__$1;
(statearr_45133_47745[(2)] = null);

(statearr_45133_47745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (4))){
var inst_45107 = (state_45126[(7)]);
var inst_45107__$1 = (state_45126[(2)]);
var inst_45108 = (inst_45107__$1 == null);
var state_45126__$1 = (function (){var statearr_45134 = state_45126;
(statearr_45134[(7)] = inst_45107__$1);

return statearr_45134;
})();
if(cljs.core.truth_(inst_45108)){
var statearr_45139_47746 = state_45126__$1;
(statearr_45139_47746[(1)] = (5));

} else {
var statearr_45140_47747 = state_45126__$1;
(statearr_45140_47747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (6))){
var inst_45107 = (state_45126[(7)]);
var inst_45112 = (state_45126[(8)]);
var inst_45112__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45114 = [inst_45107,inst_45112__$1];
var inst_45115 = (new cljs.core.PersistentVector(null,2,(5),inst_45113,inst_45114,null));
var state_45126__$1 = (function (){var statearr_45142 = state_45126;
(statearr_45142[(8)] = inst_45112__$1);

return statearr_45142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45126__$1,(8),jobs,inst_45115);
} else {
if((state_val_45127 === (3))){
var inst_45124 = (state_45126[(2)]);
var state_45126__$1 = state_45126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45126__$1,inst_45124);
} else {
if((state_val_45127 === (2))){
var state_45126__$1 = state_45126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45126__$1,(4),from);
} else {
if((state_val_45127 === (9))){
var inst_45119 = (state_45126[(2)]);
var state_45126__$1 = (function (){var statearr_45147 = state_45126;
(statearr_45147[(9)] = inst_45119);

return statearr_45147;
})();
var statearr_45148_47748 = state_45126__$1;
(statearr_45148_47748[(2)] = null);

(statearr_45148_47748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (5))){
var inst_45110 = cljs.core.async.close_BANG_(jobs);
var state_45126__$1 = state_45126;
var statearr_45149_47749 = state_45126__$1;
(statearr_45149_47749[(2)] = inst_45110);

(statearr_45149_47749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (8))){
var inst_45112 = (state_45126[(8)]);
var inst_45117 = (state_45126[(2)]);
var state_45126__$1 = (function (){var statearr_45154 = state_45126;
(statearr_45154[(10)] = inst_45117);

return statearr_45154;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45126__$1,(9),results,inst_45112);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0 = (function (){
var statearr_45155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__);

(statearr_45155[(1)] = (1));

return statearr_45155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1 = (function (state_45126){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45126);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45156){var ex__44439__auto__ = e45156;
var statearr_45157_47751 = state_45126;
(statearr_45157_47751[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45126[(4)]))){
var statearr_45158_47752 = state_45126;
(statearr_45158_47752[(1)] = cljs.core.first((state_45126[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47753 = state_45126;
state_45126 = G__47753;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = function(state_45126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1.call(this,state_45126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45159 = f__44705__auto__();
(statearr_45159[(6)] = c__44704__auto___47743);

return statearr_45159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


var c__44704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_45203){
var state_val_45204 = (state_45203[(1)]);
if((state_val_45204 === (7))){
var inst_45199 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45211_47754 = state_45203__$1;
(statearr_45211_47754[(2)] = inst_45199);

(statearr_45211_47754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (20))){
var state_45203__$1 = state_45203;
var statearr_45212_47755 = state_45203__$1;
(statearr_45212_47755[(2)] = null);

(statearr_45212_47755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (1))){
var state_45203__$1 = state_45203;
var statearr_45213_47756 = state_45203__$1;
(statearr_45213_47756[(2)] = null);

(statearr_45213_47756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (4))){
var inst_45162 = (state_45203[(7)]);
var inst_45162__$1 = (state_45203[(2)]);
var inst_45163 = (inst_45162__$1 == null);
var state_45203__$1 = (function (){var statearr_45214 = state_45203;
(statearr_45214[(7)] = inst_45162__$1);

return statearr_45214;
})();
if(cljs.core.truth_(inst_45163)){
var statearr_45215_47757 = state_45203__$1;
(statearr_45215_47757[(1)] = (5));

} else {
var statearr_45216_47758 = state_45203__$1;
(statearr_45216_47758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (15))){
var inst_45175 = (state_45203[(8)]);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45203__$1,(18),to,inst_45175);
} else {
if((state_val_45204 === (21))){
var inst_45194 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45217_47759 = state_45203__$1;
(statearr_45217_47759[(2)] = inst_45194);

(statearr_45217_47759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (13))){
var inst_45196 = (state_45203[(2)]);
var state_45203__$1 = (function (){var statearr_45230 = state_45203;
(statearr_45230[(9)] = inst_45196);

return statearr_45230;
})();
var statearr_45233_47760 = state_45203__$1;
(statearr_45233_47760[(2)] = null);

(statearr_45233_47760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (6))){
var inst_45162 = (state_45203[(7)]);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45203__$1,(11),inst_45162);
} else {
if((state_val_45204 === (17))){
var inst_45189 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45189)){
var statearr_45234_47761 = state_45203__$1;
(statearr_45234_47761[(1)] = (19));

} else {
var statearr_45235_47762 = state_45203__$1;
(statearr_45235_47762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (3))){
var inst_45201 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45203__$1,inst_45201);
} else {
if((state_val_45204 === (12))){
var inst_45172 = (state_45203[(10)]);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45203__$1,(14),inst_45172);
} else {
if((state_val_45204 === (2))){
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45203__$1,(4),results);
} else {
if((state_val_45204 === (19))){
var state_45203__$1 = state_45203;
var statearr_45237_47763 = state_45203__$1;
(statearr_45237_47763[(2)] = null);

(statearr_45237_47763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (11))){
var inst_45172 = (state_45203[(2)]);
var state_45203__$1 = (function (){var statearr_45238 = state_45203;
(statearr_45238[(10)] = inst_45172);

return statearr_45238;
})();
var statearr_45239_47764 = state_45203__$1;
(statearr_45239_47764[(2)] = null);

(statearr_45239_47764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (9))){
var state_45203__$1 = state_45203;
var statearr_45240_47765 = state_45203__$1;
(statearr_45240_47765[(2)] = null);

(statearr_45240_47765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (5))){
var state_45203__$1 = state_45203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45241_47766 = state_45203__$1;
(statearr_45241_47766[(1)] = (8));

} else {
var statearr_45242_47767 = state_45203__$1;
(statearr_45242_47767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (14))){
var inst_45180 = (state_45203[(11)]);
var inst_45175 = (state_45203[(8)]);
var inst_45175__$1 = (state_45203[(2)]);
var inst_45179 = (inst_45175__$1 == null);
var inst_45180__$1 = cljs.core.not(inst_45179);
var state_45203__$1 = (function (){var statearr_45243 = state_45203;
(statearr_45243[(11)] = inst_45180__$1);

(statearr_45243[(8)] = inst_45175__$1);

return statearr_45243;
})();
if(inst_45180__$1){
var statearr_45244_47768 = state_45203__$1;
(statearr_45244_47768[(1)] = (15));

} else {
var statearr_45245_47769 = state_45203__$1;
(statearr_45245_47769[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (16))){
var inst_45180 = (state_45203[(11)]);
var state_45203__$1 = state_45203;
var statearr_45246_47770 = state_45203__$1;
(statearr_45246_47770[(2)] = inst_45180);

(statearr_45246_47770[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (10))){
var inst_45169 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45247_47771 = state_45203__$1;
(statearr_45247_47771[(2)] = inst_45169);

(statearr_45247_47771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (18))){
var inst_45186 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45248_47772 = state_45203__$1;
(statearr_45248_47772[(2)] = inst_45186);

(statearr_45248_47772[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (8))){
var inst_45166 = cljs.core.async.close_BANG_(to);
var state_45203__$1 = state_45203;
var statearr_45249_47773 = state_45203__$1;
(statearr_45249_47773[(2)] = inst_45166);

(statearr_45249_47773[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0 = (function (){
var statearr_45250 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__);

(statearr_45250[(1)] = (1));

return statearr_45250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1 = (function (state_45203){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45203);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45254){var ex__44439__auto__ = e45254;
var statearr_45255_47774 = state_45203;
(statearr_45255_47774[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45203[(4)]))){
var statearr_45256_47775 = state_45203;
(statearr_45256_47775[(1)] = cljs.core.first((state_45203[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47776 = state_45203;
state_45203 = G__47776;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__ = function(state_45203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1.call(this,state_45203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45257 = f__44705__auto__();
(statearr_45257[(6)] = c__44704__auto__);

return statearr_45257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));

return c__44704__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45269 = arguments.length;
switch (G__45269) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45271 = arguments.length;
switch (G__45271) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45283 = arguments.length;
switch (G__45283) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44704__auto___47780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_45309){
var state_val_45310 = (state_45309[(1)]);
if((state_val_45310 === (7))){
var inst_45305 = (state_45309[(2)]);
var state_45309__$1 = state_45309;
var statearr_45313_47781 = state_45309__$1;
(statearr_45313_47781[(2)] = inst_45305);

(statearr_45313_47781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (1))){
var state_45309__$1 = state_45309;
var statearr_45314_47782 = state_45309__$1;
(statearr_45314_47782[(2)] = null);

(statearr_45314_47782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (4))){
var inst_45286 = (state_45309[(7)]);
var inst_45286__$1 = (state_45309[(2)]);
var inst_45287 = (inst_45286__$1 == null);
var state_45309__$1 = (function (){var statearr_45315 = state_45309;
(statearr_45315[(7)] = inst_45286__$1);

return statearr_45315;
})();
if(cljs.core.truth_(inst_45287)){
var statearr_45316_47783 = state_45309__$1;
(statearr_45316_47783[(1)] = (5));

} else {
var statearr_45317_47784 = state_45309__$1;
(statearr_45317_47784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (13))){
var state_45309__$1 = state_45309;
var statearr_45318_47785 = state_45309__$1;
(statearr_45318_47785[(2)] = null);

(statearr_45318_47785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (6))){
var inst_45286 = (state_45309[(7)]);
var inst_45292 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45286) : p.call(null,inst_45286));
var state_45309__$1 = state_45309;
if(cljs.core.truth_(inst_45292)){
var statearr_45321_47786 = state_45309__$1;
(statearr_45321_47786[(1)] = (9));

} else {
var statearr_45322_47787 = state_45309__$1;
(statearr_45322_47787[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (3))){
var inst_45307 = (state_45309[(2)]);
var state_45309__$1 = state_45309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45309__$1,inst_45307);
} else {
if((state_val_45310 === (12))){
var state_45309__$1 = state_45309;
var statearr_45323_47788 = state_45309__$1;
(statearr_45323_47788[(2)] = null);

(statearr_45323_47788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (2))){
var state_45309__$1 = state_45309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45309__$1,(4),ch);
} else {
if((state_val_45310 === (11))){
var inst_45286 = (state_45309[(7)]);
var inst_45296 = (state_45309[(2)]);
var state_45309__$1 = state_45309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45309__$1,(8),inst_45296,inst_45286);
} else {
if((state_val_45310 === (9))){
var state_45309__$1 = state_45309;
var statearr_45334_47789 = state_45309__$1;
(statearr_45334_47789[(2)] = tc);

(statearr_45334_47789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (5))){
var inst_45289 = cljs.core.async.close_BANG_(tc);
var inst_45290 = cljs.core.async.close_BANG_(fc);
var state_45309__$1 = (function (){var statearr_45335 = state_45309;
(statearr_45335[(8)] = inst_45289);

return statearr_45335;
})();
var statearr_45336_47790 = state_45309__$1;
(statearr_45336_47790[(2)] = inst_45290);

(statearr_45336_47790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (14))){
var inst_45303 = (state_45309[(2)]);
var state_45309__$1 = state_45309;
var statearr_45337_47791 = state_45309__$1;
(statearr_45337_47791[(2)] = inst_45303);

(statearr_45337_47791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (10))){
var state_45309__$1 = state_45309;
var statearr_45338_47792 = state_45309__$1;
(statearr_45338_47792[(2)] = fc);

(statearr_45338_47792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45310 === (8))){
var inst_45298 = (state_45309[(2)]);
var state_45309__$1 = state_45309;
if(cljs.core.truth_(inst_45298)){
var statearr_45339_47793 = state_45309__$1;
(statearr_45339_47793[(1)] = (12));

} else {
var statearr_45340_47794 = state_45309__$1;
(statearr_45340_47794[(1)] = (13));

}

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_45341 = [null,null,null,null,null,null,null,null,null];
(statearr_45341[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_45341[(1)] = (1));

return statearr_45341;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_45309){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45309);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45343){var ex__44439__auto__ = e45343;
var statearr_45344_47795 = state_45309;
(statearr_45344_47795[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45309[(4)]))){
var statearr_45345_47796 = state_45309;
(statearr_45345_47796[(1)] = cljs.core.first((state_45309[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47797 = state_45309;
state_45309 = G__47797;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_45309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_45309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45350 = f__44705__auto__();
(statearr_45350[(6)] = c__44704__auto___47780);

return statearr_45350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_45377){
var state_val_45378 = (state_45377[(1)]);
if((state_val_45378 === (7))){
var inst_45373 = (state_45377[(2)]);
var state_45377__$1 = state_45377;
var statearr_45379_47804 = state_45377__$1;
(statearr_45379_47804[(2)] = inst_45373);

(statearr_45379_47804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (1))){
var inst_45356 = init;
var inst_45357 = inst_45356;
var state_45377__$1 = (function (){var statearr_45380 = state_45377;
(statearr_45380[(7)] = inst_45357);

return statearr_45380;
})();
var statearr_45381_47805 = state_45377__$1;
(statearr_45381_47805[(2)] = null);

(statearr_45381_47805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (4))){
var inst_45360 = (state_45377[(8)]);
var inst_45360__$1 = (state_45377[(2)]);
var inst_45361 = (inst_45360__$1 == null);
var state_45377__$1 = (function (){var statearr_45382 = state_45377;
(statearr_45382[(8)] = inst_45360__$1);

return statearr_45382;
})();
if(cljs.core.truth_(inst_45361)){
var statearr_45383_47806 = state_45377__$1;
(statearr_45383_47806[(1)] = (5));

} else {
var statearr_45384_47807 = state_45377__$1;
(statearr_45384_47807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (6))){
var inst_45364 = (state_45377[(9)]);
var inst_45357 = (state_45377[(7)]);
var inst_45360 = (state_45377[(8)]);
var inst_45364__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45357,inst_45360) : f.call(null,inst_45357,inst_45360));
var inst_45365 = cljs.core.reduced_QMARK_(inst_45364__$1);
var state_45377__$1 = (function (){var statearr_45385 = state_45377;
(statearr_45385[(9)] = inst_45364__$1);

return statearr_45385;
})();
if(inst_45365){
var statearr_45386_47811 = state_45377__$1;
(statearr_45386_47811[(1)] = (8));

} else {
var statearr_45392_47812 = state_45377__$1;
(statearr_45392_47812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (3))){
var inst_45375 = (state_45377[(2)]);
var state_45377__$1 = state_45377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45377__$1,inst_45375);
} else {
if((state_val_45378 === (2))){
var state_45377__$1 = state_45377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45377__$1,(4),ch);
} else {
if((state_val_45378 === (9))){
var inst_45364 = (state_45377[(9)]);
var inst_45357 = inst_45364;
var state_45377__$1 = (function (){var statearr_45393 = state_45377;
(statearr_45393[(7)] = inst_45357);

return statearr_45393;
})();
var statearr_45394_47813 = state_45377__$1;
(statearr_45394_47813[(2)] = null);

(statearr_45394_47813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (5))){
var inst_45357 = (state_45377[(7)]);
var state_45377__$1 = state_45377;
var statearr_45398_47815 = state_45377__$1;
(statearr_45398_47815[(2)] = inst_45357);

(statearr_45398_47815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (10))){
var inst_45371 = (state_45377[(2)]);
var state_45377__$1 = state_45377;
var statearr_45399_47816 = state_45377__$1;
(statearr_45399_47816[(2)] = inst_45371);

(statearr_45399_47816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45378 === (8))){
var inst_45364 = (state_45377[(9)]);
var inst_45367 = cljs.core.deref(inst_45364);
var state_45377__$1 = state_45377;
var statearr_45400_47817 = state_45377__$1;
(statearr_45400_47817[(2)] = inst_45367);

(statearr_45400_47817[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44436__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44436__auto____0 = (function (){
var statearr_45401 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45401[(0)] = cljs$core$async$reduce_$_state_machine__44436__auto__);

(statearr_45401[(1)] = (1));

return statearr_45401;
});
var cljs$core$async$reduce_$_state_machine__44436__auto____1 = (function (state_45377){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45377);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45402){var ex__44439__auto__ = e45402;
var statearr_45403_47818 = state_45377;
(statearr_45403_47818[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45377[(4)]))){
var statearr_45404_47819 = state_45377;
(statearr_45404_47819[(1)] = cljs.core.first((state_45377[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47820 = state_45377;
state_45377 = G__47820;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44436__auto__ = function(state_45377){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44436__auto____1.call(this,state_45377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44436__auto____0;
cljs$core$async$reduce_$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44436__auto____1;
return cljs$core$async$reduce_$_state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45405 = f__44705__auto__();
(statearr_45405[(6)] = c__44704__auto__);

return statearr_45405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));

return c__44704__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_45411){
var state_val_45412 = (state_45411[(1)]);
if((state_val_45412 === (1))){
var inst_45406 = cljs.core.async.reduce(f__$1,init,ch);
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45411__$1,(2),inst_45406);
} else {
if((state_val_45412 === (2))){
var inst_45408 = (state_45411[(2)]);
var inst_45409 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45408) : f__$1.call(null,inst_45408));
var state_45411__$1 = state_45411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45411__$1,inst_45409);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44436__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44436__auto____0 = (function (){
var statearr_45418 = [null,null,null,null,null,null,null];
(statearr_45418[(0)] = cljs$core$async$transduce_$_state_machine__44436__auto__);

(statearr_45418[(1)] = (1));

return statearr_45418;
});
var cljs$core$async$transduce_$_state_machine__44436__auto____1 = (function (state_45411){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45411);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45420){var ex__44439__auto__ = e45420;
var statearr_45421_47825 = state_45411;
(statearr_45421_47825[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45411[(4)]))){
var statearr_45422_47826 = state_45411;
(statearr_45422_47826[(1)] = cljs.core.first((state_45411[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47827 = state_45411;
state_45411 = G__47827;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44436__auto__ = function(state_45411){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44436__auto____1.call(this,state_45411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44436__auto____0;
cljs$core$async$transduce_$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44436__auto____1;
return cljs$core$async$transduce_$_state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45424 = f__44705__auto__();
(statearr_45424[(6)] = c__44704__auto__);

return statearr_45424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));

return c__44704__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45427 = arguments.length;
switch (G__45427) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_45456){
var state_val_45457 = (state_45456[(1)]);
if((state_val_45457 === (7))){
var inst_45438 = (state_45456[(2)]);
var state_45456__$1 = state_45456;
var statearr_45458_47829 = state_45456__$1;
(statearr_45458_47829[(2)] = inst_45438);

(statearr_45458_47829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (1))){
var inst_45432 = cljs.core.seq(coll);
var inst_45433 = inst_45432;
var state_45456__$1 = (function (){var statearr_45459 = state_45456;
(statearr_45459[(7)] = inst_45433);

return statearr_45459;
})();
var statearr_45460_47830 = state_45456__$1;
(statearr_45460_47830[(2)] = null);

(statearr_45460_47830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (4))){
var inst_45433 = (state_45456[(7)]);
var inst_45436 = cljs.core.first(inst_45433);
var state_45456__$1 = state_45456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45456__$1,(7),ch,inst_45436);
} else {
if((state_val_45457 === (13))){
var inst_45450 = (state_45456[(2)]);
var state_45456__$1 = state_45456;
var statearr_45461_47831 = state_45456__$1;
(statearr_45461_47831[(2)] = inst_45450);

(statearr_45461_47831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (6))){
var inst_45441 = (state_45456[(2)]);
var state_45456__$1 = state_45456;
if(cljs.core.truth_(inst_45441)){
var statearr_45462_47832 = state_45456__$1;
(statearr_45462_47832[(1)] = (8));

} else {
var statearr_45464_47833 = state_45456__$1;
(statearr_45464_47833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (3))){
var inst_45454 = (state_45456[(2)]);
var state_45456__$1 = state_45456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45456__$1,inst_45454);
} else {
if((state_val_45457 === (12))){
var state_45456__$1 = state_45456;
var statearr_45465_47834 = state_45456__$1;
(statearr_45465_47834[(2)] = null);

(statearr_45465_47834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (2))){
var inst_45433 = (state_45456[(7)]);
var state_45456__$1 = state_45456;
if(cljs.core.truth_(inst_45433)){
var statearr_45467_47835 = state_45456__$1;
(statearr_45467_47835[(1)] = (4));

} else {
var statearr_45468_47836 = state_45456__$1;
(statearr_45468_47836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (11))){
var inst_45447 = cljs.core.async.close_BANG_(ch);
var state_45456__$1 = state_45456;
var statearr_45469_47837 = state_45456__$1;
(statearr_45469_47837[(2)] = inst_45447);

(statearr_45469_47837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (9))){
var state_45456__$1 = state_45456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45474_47838 = state_45456__$1;
(statearr_45474_47838[(1)] = (11));

} else {
var statearr_45475_47839 = state_45456__$1;
(statearr_45475_47839[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (5))){
var inst_45433 = (state_45456[(7)]);
var state_45456__$1 = state_45456;
var statearr_45476_47840 = state_45456__$1;
(statearr_45476_47840[(2)] = inst_45433);

(statearr_45476_47840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (10))){
var inst_45452 = (state_45456[(2)]);
var state_45456__$1 = state_45456;
var statearr_45478_47841 = state_45456__$1;
(statearr_45478_47841[(2)] = inst_45452);

(statearr_45478_47841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45457 === (8))){
var inst_45433 = (state_45456[(7)]);
var inst_45443 = cljs.core.next(inst_45433);
var inst_45433__$1 = inst_45443;
var state_45456__$1 = (function (){var statearr_45479 = state_45456;
(statearr_45479[(7)] = inst_45433__$1);

return statearr_45479;
})();
var statearr_45480_47842 = state_45456__$1;
(statearr_45480_47842[(2)] = null);

(statearr_45480_47842[(1)] = (2));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_45481 = [null,null,null,null,null,null,null,null];
(statearr_45481[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_45481[(1)] = (1));

return statearr_45481;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_45456){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45456);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45482){var ex__44439__auto__ = e45482;
var statearr_45483_47843 = state_45456;
(statearr_45483_47843[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45456[(4)]))){
var statearr_45484_47844 = state_45456;
(statearr_45484_47844[(1)] = cljs.core.first((state_45456[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47845 = state_45456;
state_45456 = G__47845;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_45456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_45456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45485 = f__44705__auto__();
(statearr_45485[(6)] = c__44704__auto__);

return statearr_45485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));

return c__44704__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45498 = arguments.length;
switch (G__45498) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47847 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47847(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47848 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47848(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47852 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47852(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47853 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47853(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45531 = (function (ch,cs,meta45532){
this.ch = ch;
this.cs = cs;
this.meta45532 = meta45532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45533,meta45532__$1){
var self__ = this;
var _45533__$1 = this;
return (new cljs.core.async.t_cljs$core$async45531(self__.ch,self__.cs,meta45532__$1));
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45533){
var self__ = this;
var _45533__$1 = this;
return self__.meta45532;
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45532","meta45532",357685130,null)], null);
}));

(cljs.core.async.t_cljs$core$async45531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45531");

(cljs.core.async.t_cljs$core$async45531.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45531.
 */
cljs.core.async.__GT_t_cljs$core$async45531 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45531(ch__$1,cs__$1,meta45532){
return (new cljs.core.async.t_cljs$core$async45531(ch__$1,cs__$1,meta45532));
});

}

return (new cljs.core.async.t_cljs$core$async45531(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44704__auto___47855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_45702){
var state_val_45707 = (state_45702[(1)]);
if((state_val_45707 === (7))){
var inst_45698 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45708_47856 = state_45702__$1;
(statearr_45708_47856[(2)] = inst_45698);

(statearr_45708_47856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (20))){
var inst_45580 = (state_45702[(7)]);
var inst_45611 = cljs.core.first(inst_45580);
var inst_45612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45611,(0),null);
var inst_45613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45611,(1),null);
var state_45702__$1 = (function (){var statearr_45709 = state_45702;
(statearr_45709[(8)] = inst_45612);

return statearr_45709;
})();
if(cljs.core.truth_(inst_45613)){
var statearr_45714_47860 = state_45702__$1;
(statearr_45714_47860[(1)] = (22));

} else {
var statearr_45715_47861 = state_45702__$1;
(statearr_45715_47861[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (27))){
var inst_45643 = (state_45702[(9)]);
var inst_45549 = (state_45702[(10)]);
var inst_45648 = (state_45702[(11)]);
var inst_45641 = (state_45702[(12)]);
var inst_45648__$1 = cljs.core._nth(inst_45641,inst_45643);
var inst_45649 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45648__$1,inst_45549,done);
var state_45702__$1 = (function (){var statearr_45722 = state_45702;
(statearr_45722[(11)] = inst_45648__$1);

return statearr_45722;
})();
if(cljs.core.truth_(inst_45649)){
var statearr_45723_47862 = state_45702__$1;
(statearr_45723_47862[(1)] = (30));

} else {
var statearr_45724_47863 = state_45702__$1;
(statearr_45724_47863[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (1))){
var state_45702__$1 = state_45702;
var statearr_45725_47865 = state_45702__$1;
(statearr_45725_47865[(2)] = null);

(statearr_45725_47865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (24))){
var inst_45580 = (state_45702[(7)]);
var inst_45618 = (state_45702[(2)]);
var inst_45619 = cljs.core.next(inst_45580);
var inst_45558 = inst_45619;
var inst_45559 = null;
var inst_45560 = (0);
var inst_45561 = (0);
var state_45702__$1 = (function (){var statearr_45726 = state_45702;
(statearr_45726[(13)] = inst_45618);

(statearr_45726[(14)] = inst_45561);

(statearr_45726[(15)] = inst_45560);

(statearr_45726[(16)] = inst_45558);

(statearr_45726[(17)] = inst_45559);

return statearr_45726;
})();
var statearr_45728_47868 = state_45702__$1;
(statearr_45728_47868[(2)] = null);

(statearr_45728_47868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (39))){
var state_45702__$1 = state_45702;
var statearr_45753_47869 = state_45702__$1;
(statearr_45753_47869[(2)] = null);

(statearr_45753_47869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (4))){
var inst_45549 = (state_45702[(10)]);
var inst_45549__$1 = (state_45702[(2)]);
var inst_45550 = (inst_45549__$1 == null);
var state_45702__$1 = (function (){var statearr_45754 = state_45702;
(statearr_45754[(10)] = inst_45549__$1);

return statearr_45754;
})();
if(cljs.core.truth_(inst_45550)){
var statearr_45755_47870 = state_45702__$1;
(statearr_45755_47870[(1)] = (5));

} else {
var statearr_45756_47871 = state_45702__$1;
(statearr_45756_47871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (15))){
var inst_45561 = (state_45702[(14)]);
var inst_45560 = (state_45702[(15)]);
var inst_45558 = (state_45702[(16)]);
var inst_45559 = (state_45702[(17)]);
var inst_45576 = (state_45702[(2)]);
var inst_45577 = (inst_45561 + (1));
var tmp45745 = inst_45560;
var tmp45746 = inst_45558;
var tmp45747 = inst_45559;
var inst_45558__$1 = tmp45746;
var inst_45559__$1 = tmp45747;
var inst_45560__$1 = tmp45745;
var inst_45561__$1 = inst_45577;
var state_45702__$1 = (function (){var statearr_45757 = state_45702;
(statearr_45757[(14)] = inst_45561__$1);

(statearr_45757[(15)] = inst_45560__$1);

(statearr_45757[(18)] = inst_45576);

(statearr_45757[(16)] = inst_45558__$1);

(statearr_45757[(17)] = inst_45559__$1);

return statearr_45757;
})();
var statearr_45758_47873 = state_45702__$1;
(statearr_45758_47873[(2)] = null);

(statearr_45758_47873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (21))){
var inst_45622 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45762_47881 = state_45702__$1;
(statearr_45762_47881[(2)] = inst_45622);

(statearr_45762_47881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (31))){
var inst_45648 = (state_45702[(11)]);
var inst_45652 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45648);
var state_45702__$1 = state_45702;
var statearr_45767_47883 = state_45702__$1;
(statearr_45767_47883[(2)] = inst_45652);

(statearr_45767_47883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (32))){
var inst_45642 = (state_45702[(19)]);
var inst_45643 = (state_45702[(9)]);
var inst_45640 = (state_45702[(20)]);
var inst_45641 = (state_45702[(12)]);
var inst_45654 = (state_45702[(2)]);
var inst_45655 = (inst_45643 + (1));
var tmp45759 = inst_45642;
var tmp45760 = inst_45640;
var tmp45761 = inst_45641;
var inst_45640__$1 = tmp45760;
var inst_45641__$1 = tmp45761;
var inst_45642__$1 = tmp45759;
var inst_45643__$1 = inst_45655;
var state_45702__$1 = (function (){var statearr_45768 = state_45702;
(statearr_45768[(19)] = inst_45642__$1);

(statearr_45768[(21)] = inst_45654);

(statearr_45768[(9)] = inst_45643__$1);

(statearr_45768[(20)] = inst_45640__$1);

(statearr_45768[(12)] = inst_45641__$1);

return statearr_45768;
})();
var statearr_45769_47884 = state_45702__$1;
(statearr_45769_47884[(2)] = null);

(statearr_45769_47884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (40))){
var inst_45671 = (state_45702[(22)]);
var inst_45675 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45671);
var state_45702__$1 = state_45702;
var statearr_45771_47885 = state_45702__$1;
(statearr_45771_47885[(2)] = inst_45675);

(statearr_45771_47885[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (33))){
var inst_45658 = (state_45702[(23)]);
var inst_45660 = cljs.core.chunked_seq_QMARK_(inst_45658);
var state_45702__$1 = state_45702;
if(inst_45660){
var statearr_45772_47886 = state_45702__$1;
(statearr_45772_47886[(1)] = (36));

} else {
var statearr_45773_47887 = state_45702__$1;
(statearr_45773_47887[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (13))){
var inst_45570 = (state_45702[(24)]);
var inst_45573 = cljs.core.async.close_BANG_(inst_45570);
var state_45702__$1 = state_45702;
var statearr_45774_47888 = state_45702__$1;
(statearr_45774_47888[(2)] = inst_45573);

(statearr_45774_47888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (22))){
var inst_45612 = (state_45702[(8)]);
var inst_45615 = cljs.core.async.close_BANG_(inst_45612);
var state_45702__$1 = state_45702;
var statearr_45782_47889 = state_45702__$1;
(statearr_45782_47889[(2)] = inst_45615);

(statearr_45782_47889[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (36))){
var inst_45658 = (state_45702[(23)]);
var inst_45666 = cljs.core.chunk_first(inst_45658);
var inst_45667 = cljs.core.chunk_rest(inst_45658);
var inst_45668 = cljs.core.count(inst_45666);
var inst_45640 = inst_45667;
var inst_45641 = inst_45666;
var inst_45642 = inst_45668;
var inst_45643 = (0);
var state_45702__$1 = (function (){var statearr_45783 = state_45702;
(statearr_45783[(19)] = inst_45642);

(statearr_45783[(9)] = inst_45643);

(statearr_45783[(20)] = inst_45640);

(statearr_45783[(12)] = inst_45641);

return statearr_45783;
})();
var statearr_45784_47891 = state_45702__$1;
(statearr_45784_47891[(2)] = null);

(statearr_45784_47891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (41))){
var inst_45658 = (state_45702[(23)]);
var inst_45677 = (state_45702[(2)]);
var inst_45678 = cljs.core.next(inst_45658);
var inst_45640 = inst_45678;
var inst_45641 = null;
var inst_45642 = (0);
var inst_45643 = (0);
var state_45702__$1 = (function (){var statearr_45785 = state_45702;
(statearr_45785[(19)] = inst_45642);

(statearr_45785[(25)] = inst_45677);

(statearr_45785[(9)] = inst_45643);

(statearr_45785[(20)] = inst_45640);

(statearr_45785[(12)] = inst_45641);

return statearr_45785;
})();
var statearr_45786_47892 = state_45702__$1;
(statearr_45786_47892[(2)] = null);

(statearr_45786_47892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (43))){
var state_45702__$1 = state_45702;
var statearr_45787_47893 = state_45702__$1;
(statearr_45787_47893[(2)] = null);

(statearr_45787_47893[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (29))){
var inst_45686 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45788_47894 = state_45702__$1;
(statearr_45788_47894[(2)] = inst_45686);

(statearr_45788_47894[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (44))){
var inst_45695 = (state_45702[(2)]);
var state_45702__$1 = (function (){var statearr_45789 = state_45702;
(statearr_45789[(26)] = inst_45695);

return statearr_45789;
})();
var statearr_45790_47895 = state_45702__$1;
(statearr_45790_47895[(2)] = null);

(statearr_45790_47895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (6))){
var inst_45632 = (state_45702[(27)]);
var inst_45631 = cljs.core.deref(cs);
var inst_45632__$1 = cljs.core.keys(inst_45631);
var inst_45633 = cljs.core.count(inst_45632__$1);
var inst_45634 = cljs.core.reset_BANG_(dctr,inst_45633);
var inst_45639 = cljs.core.seq(inst_45632__$1);
var inst_45640 = inst_45639;
var inst_45641 = null;
var inst_45642 = (0);
var inst_45643 = (0);
var state_45702__$1 = (function (){var statearr_45791 = state_45702;
(statearr_45791[(19)] = inst_45642);

(statearr_45791[(27)] = inst_45632__$1);

(statearr_45791[(9)] = inst_45643);

(statearr_45791[(20)] = inst_45640);

(statearr_45791[(12)] = inst_45641);

(statearr_45791[(28)] = inst_45634);

return statearr_45791;
})();
var statearr_45792_47896 = state_45702__$1;
(statearr_45792_47896[(2)] = null);

(statearr_45792_47896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (28))){
var inst_45640 = (state_45702[(20)]);
var inst_45658 = (state_45702[(23)]);
var inst_45658__$1 = cljs.core.seq(inst_45640);
var state_45702__$1 = (function (){var statearr_45793 = state_45702;
(statearr_45793[(23)] = inst_45658__$1);

return statearr_45793;
})();
if(inst_45658__$1){
var statearr_45794_47897 = state_45702__$1;
(statearr_45794_47897[(1)] = (33));

} else {
var statearr_45795_47898 = state_45702__$1;
(statearr_45795_47898[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (25))){
var inst_45642 = (state_45702[(19)]);
var inst_45643 = (state_45702[(9)]);
var inst_45645 = (inst_45643 < inst_45642);
var inst_45646 = inst_45645;
var state_45702__$1 = state_45702;
if(cljs.core.truth_(inst_45646)){
var statearr_45796_47899 = state_45702__$1;
(statearr_45796_47899[(1)] = (27));

} else {
var statearr_45797_47900 = state_45702__$1;
(statearr_45797_47900[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (34))){
var state_45702__$1 = state_45702;
var statearr_45798_47901 = state_45702__$1;
(statearr_45798_47901[(2)] = null);

(statearr_45798_47901[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (17))){
var state_45702__$1 = state_45702;
var statearr_45799_47902 = state_45702__$1;
(statearr_45799_47902[(2)] = null);

(statearr_45799_47902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (3))){
var inst_45700 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45702__$1,inst_45700);
} else {
if((state_val_45707 === (12))){
var inst_45627 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45800_47903 = state_45702__$1;
(statearr_45800_47903[(2)] = inst_45627);

(statearr_45800_47903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (2))){
var state_45702__$1 = state_45702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45702__$1,(4),ch);
} else {
if((state_val_45707 === (23))){
var state_45702__$1 = state_45702;
var statearr_45808_47904 = state_45702__$1;
(statearr_45808_47904[(2)] = null);

(statearr_45808_47904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (35))){
var inst_45684 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45827_47905 = state_45702__$1;
(statearr_45827_47905[(2)] = inst_45684);

(statearr_45827_47905[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (19))){
var inst_45580 = (state_45702[(7)]);
var inst_45584 = cljs.core.chunk_first(inst_45580);
var inst_45585 = cljs.core.chunk_rest(inst_45580);
var inst_45605 = cljs.core.count(inst_45584);
var inst_45558 = inst_45585;
var inst_45559 = inst_45584;
var inst_45560 = inst_45605;
var inst_45561 = (0);
var state_45702__$1 = (function (){var statearr_45833 = state_45702;
(statearr_45833[(14)] = inst_45561);

(statearr_45833[(15)] = inst_45560);

(statearr_45833[(16)] = inst_45558);

(statearr_45833[(17)] = inst_45559);

return statearr_45833;
})();
var statearr_45850_47906 = state_45702__$1;
(statearr_45850_47906[(2)] = null);

(statearr_45850_47906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (11))){
var inst_45580 = (state_45702[(7)]);
var inst_45558 = (state_45702[(16)]);
var inst_45580__$1 = cljs.core.seq(inst_45558);
var state_45702__$1 = (function (){var statearr_45851 = state_45702;
(statearr_45851[(7)] = inst_45580__$1);

return statearr_45851;
})();
if(inst_45580__$1){
var statearr_45861_47907 = state_45702__$1;
(statearr_45861_47907[(1)] = (16));

} else {
var statearr_45862_47908 = state_45702__$1;
(statearr_45862_47908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (9))){
var inst_45629 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45868_47909 = state_45702__$1;
(statearr_45868_47909[(2)] = inst_45629);

(statearr_45868_47909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (5))){
var inst_45556 = cljs.core.deref(cs);
var inst_45557 = cljs.core.seq(inst_45556);
var inst_45558 = inst_45557;
var inst_45559 = null;
var inst_45560 = (0);
var inst_45561 = (0);
var state_45702__$1 = (function (){var statearr_45876 = state_45702;
(statearr_45876[(14)] = inst_45561);

(statearr_45876[(15)] = inst_45560);

(statearr_45876[(16)] = inst_45558);

(statearr_45876[(17)] = inst_45559);

return statearr_45876;
})();
var statearr_45882_47910 = state_45702__$1;
(statearr_45882_47910[(2)] = null);

(statearr_45882_47910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (14))){
var state_45702__$1 = state_45702;
var statearr_45883_47911 = state_45702__$1;
(statearr_45883_47911[(2)] = null);

(statearr_45883_47911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (45))){
var inst_45692 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45884_47912 = state_45702__$1;
(statearr_45884_47912[(2)] = inst_45692);

(statearr_45884_47912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (26))){
var inst_45632 = (state_45702[(27)]);
var inst_45688 = (state_45702[(2)]);
var inst_45689 = cljs.core.seq(inst_45632);
var state_45702__$1 = (function (){var statearr_45885 = state_45702;
(statearr_45885[(29)] = inst_45688);

return statearr_45885;
})();
if(inst_45689){
var statearr_45886_47913 = state_45702__$1;
(statearr_45886_47913[(1)] = (42));

} else {
var statearr_45887_47914 = state_45702__$1;
(statearr_45887_47914[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (16))){
var inst_45580 = (state_45702[(7)]);
var inst_45582 = cljs.core.chunked_seq_QMARK_(inst_45580);
var state_45702__$1 = state_45702;
if(inst_45582){
var statearr_45888_47915 = state_45702__$1;
(statearr_45888_47915[(1)] = (19));

} else {
var statearr_45889_47916 = state_45702__$1;
(statearr_45889_47916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (38))){
var inst_45681 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45890_47917 = state_45702__$1;
(statearr_45890_47917[(2)] = inst_45681);

(statearr_45890_47917[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (30))){
var state_45702__$1 = state_45702;
var statearr_45891_47918 = state_45702__$1;
(statearr_45891_47918[(2)] = null);

(statearr_45891_47918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (10))){
var inst_45561 = (state_45702[(14)]);
var inst_45559 = (state_45702[(17)]);
var inst_45569 = cljs.core._nth(inst_45559,inst_45561);
var inst_45570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45569,(0),null);
var inst_45571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45569,(1),null);
var state_45702__$1 = (function (){var statearr_45892 = state_45702;
(statearr_45892[(24)] = inst_45570);

return statearr_45892;
})();
if(cljs.core.truth_(inst_45571)){
var statearr_45893_47919 = state_45702__$1;
(statearr_45893_47919[(1)] = (13));

} else {
var statearr_45894_47920 = state_45702__$1;
(statearr_45894_47920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (18))){
var inst_45625 = (state_45702[(2)]);
var state_45702__$1 = state_45702;
var statearr_45895_47921 = state_45702__$1;
(statearr_45895_47921[(2)] = inst_45625);

(statearr_45895_47921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (42))){
var state_45702__$1 = state_45702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45702__$1,(45),dchan);
} else {
if((state_val_45707 === (37))){
var inst_45549 = (state_45702[(10)]);
var inst_45671 = (state_45702[(22)]);
var inst_45658 = (state_45702[(23)]);
var inst_45671__$1 = cljs.core.first(inst_45658);
var inst_45672 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45671__$1,inst_45549,done);
var state_45702__$1 = (function (){var statearr_45896 = state_45702;
(statearr_45896[(22)] = inst_45671__$1);

return statearr_45896;
})();
if(cljs.core.truth_(inst_45672)){
var statearr_45897_47922 = state_45702__$1;
(statearr_45897_47922[(1)] = (39));

} else {
var statearr_45898_47923 = state_45702__$1;
(statearr_45898_47923[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (8))){
var inst_45561 = (state_45702[(14)]);
var inst_45560 = (state_45702[(15)]);
var inst_45563 = (inst_45561 < inst_45560);
var inst_45564 = inst_45563;
var state_45702__$1 = state_45702;
if(cljs.core.truth_(inst_45564)){
var statearr_45899_47924 = state_45702__$1;
(statearr_45899_47924[(1)] = (10));

} else {
var statearr_45900_47925 = state_45702__$1;
(statearr_45900_47925[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44436__auto__ = null;
var cljs$core$async$mult_$_state_machine__44436__auto____0 = (function (){
var statearr_45901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45901[(0)] = cljs$core$async$mult_$_state_machine__44436__auto__);

(statearr_45901[(1)] = (1));

return statearr_45901;
});
var cljs$core$async$mult_$_state_machine__44436__auto____1 = (function (state_45702){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_45702);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e45906){var ex__44439__auto__ = e45906;
var statearr_45907_47930 = state_45702;
(statearr_45907_47930[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_45702[(4)]))){
var statearr_45908_47935 = state_45702;
(statearr_45908_47935[(1)] = cljs.core.first((state_45702[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47936 = state_45702;
state_45702 = G__47936;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44436__auto__ = function(state_45702){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44436__auto____1.call(this,state_45702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44436__auto____0;
cljs$core$async$mult_$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44436__auto____1;
return cljs$core$async$mult_$_state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_45910 = f__44705__auto__();
(statearr_45910[(6)] = c__44704__auto___47855);

return statearr_45910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45913 = arguments.length;
switch (G__45913) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47946 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47946(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47947 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47947(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47957 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47957(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47968 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47968(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47974 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47974(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47993 = arguments.length;
var i__4819__auto___47994 = (0);
while(true){
if((i__4819__auto___47994 < len__4818__auto___47993)){
args__4824__auto__.push((arguments[i__4819__auto___47994]));

var G__48001 = (i__4819__auto___47994 + (1));
i__4819__auto___47994 = G__48001;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45964){
var map__45965 = p__45964;
var map__45965__$1 = cljs.core.__destructure_map(map__45965);
var opts = map__45965__$1;
var statearr_45966_48006 = state;
(statearr_45966_48006[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45967_48007 = state;
(statearr_45967_48007[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45968_48008 = state;
(statearr_45968_48008[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45953){
var G__45957 = cljs.core.first(seq45953);
var seq45953__$1 = cljs.core.next(seq45953);
var G__45958 = cljs.core.first(seq45953__$1);
var seq45953__$2 = cljs.core.next(seq45953__$1);
var G__45959 = cljs.core.first(seq45953__$2);
var seq45953__$3 = cljs.core.next(seq45953__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45957,G__45958,G__45959,seq45953__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45981 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45982){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45982 = meta45982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45983,meta45982__$1){
var self__ = this;
var _45983__$1 = this;
return (new cljs.core.async.t_cljs$core$async45981(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45982__$1));
}));

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45983){
var self__ = this;
var _45983__$1 = this;
return self__.meta45982;
}));

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45981.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45982","meta45982",456457779,null)], null);
}));

(cljs.core.async.t_cljs$core$async45981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45981");

(cljs.core.async.t_cljs$core$async45981.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45981.
 */
cljs.core.async.__GT_t_cljs$core$async45981 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45981(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45982){
return (new cljs.core.async.t_cljs$core$async45981(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45982));
});

}

return (new cljs.core.async.t_cljs$core$async45981(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44704__auto___48016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_46067){
var state_val_46068 = (state_46067[(1)]);
if((state_val_46068 === (7))){
var inst_46026 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
if(cljs.core.truth_(inst_46026)){
var statearr_46069_48021 = state_46067__$1;
(statearr_46069_48021[(1)] = (8));

} else {
var statearr_46070_48022 = state_46067__$1;
(statearr_46070_48022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (20))){
var inst_46019 = (state_46067[(7)]);
var state_46067__$1 = state_46067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46067__$1,(23),out,inst_46019);
} else {
if((state_val_46068 === (1))){
var inst_46002 = calc_state();
var inst_46003 = cljs.core.__destructure_map(inst_46002);
var inst_46004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46003,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46003,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46003,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46007 = inst_46002;
var state_46067__$1 = (function (){var statearr_46072 = state_46067;
(statearr_46072[(8)] = inst_46005);

(statearr_46072[(9)] = inst_46006);

(statearr_46072[(10)] = inst_46007);

(statearr_46072[(11)] = inst_46004);

return statearr_46072;
})();
var statearr_46073_48029 = state_46067__$1;
(statearr_46073_48029[(2)] = null);

(statearr_46073_48029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (24))){
var inst_46010 = (state_46067[(12)]);
var inst_46007 = inst_46010;
var state_46067__$1 = (function (){var statearr_46074 = state_46067;
(statearr_46074[(10)] = inst_46007);

return statearr_46074;
})();
var statearr_46075_48033 = state_46067__$1;
(statearr_46075_48033[(2)] = null);

(statearr_46075_48033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (4))){
var inst_46019 = (state_46067[(7)]);
var inst_46021 = (state_46067[(13)]);
var inst_46018 = (state_46067[(2)]);
var inst_46019__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46018,(0),null);
var inst_46020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46018,(1),null);
var inst_46021__$1 = (inst_46019__$1 == null);
var state_46067__$1 = (function (){var statearr_46076 = state_46067;
(statearr_46076[(14)] = inst_46020);

(statearr_46076[(7)] = inst_46019__$1);

(statearr_46076[(13)] = inst_46021__$1);

return statearr_46076;
})();
if(cljs.core.truth_(inst_46021__$1)){
var statearr_46077_48038 = state_46067__$1;
(statearr_46077_48038[(1)] = (5));

} else {
var statearr_46078_48040 = state_46067__$1;
(statearr_46078_48040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (15))){
var inst_46040 = (state_46067[(15)]);
var inst_46011 = (state_46067[(16)]);
var inst_46040__$1 = cljs.core.empty_QMARK_(inst_46011);
var state_46067__$1 = (function (){var statearr_46079 = state_46067;
(statearr_46079[(15)] = inst_46040__$1);

return statearr_46079;
})();
if(inst_46040__$1){
var statearr_46080_48041 = state_46067__$1;
(statearr_46080_48041[(1)] = (17));

} else {
var statearr_46081_48042 = state_46067__$1;
(statearr_46081_48042[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (21))){
var inst_46010 = (state_46067[(12)]);
var inst_46007 = inst_46010;
var state_46067__$1 = (function (){var statearr_46082 = state_46067;
(statearr_46082[(10)] = inst_46007);

return statearr_46082;
})();
var statearr_46083_48043 = state_46067__$1;
(statearr_46083_48043[(2)] = null);

(statearr_46083_48043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (13))){
var inst_46033 = (state_46067[(2)]);
var inst_46034 = calc_state();
var inst_46007 = inst_46034;
var state_46067__$1 = (function (){var statearr_46084 = state_46067;
(statearr_46084[(10)] = inst_46007);

(statearr_46084[(17)] = inst_46033);

return statearr_46084;
})();
var statearr_46085_48044 = state_46067__$1;
(statearr_46085_48044[(2)] = null);

(statearr_46085_48044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (22))){
var inst_46060 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
var statearr_46086_48045 = state_46067__$1;
(statearr_46086_48045[(2)] = inst_46060);

(statearr_46086_48045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (6))){
var inst_46020 = (state_46067[(14)]);
var inst_46024 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46020,change);
var state_46067__$1 = state_46067;
var statearr_46087_48046 = state_46067__$1;
(statearr_46087_48046[(2)] = inst_46024);

(statearr_46087_48046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (25))){
var state_46067__$1 = state_46067;
var statearr_46088_48047 = state_46067__$1;
(statearr_46088_48047[(2)] = null);

(statearr_46088_48047[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (17))){
var inst_46020 = (state_46067[(14)]);
var inst_46012 = (state_46067[(18)]);
var inst_46042 = (inst_46012.cljs$core$IFn$_invoke$arity$1 ? inst_46012.cljs$core$IFn$_invoke$arity$1(inst_46020) : inst_46012.call(null,inst_46020));
var inst_46043 = cljs.core.not(inst_46042);
var state_46067__$1 = state_46067;
var statearr_46089_48048 = state_46067__$1;
(statearr_46089_48048[(2)] = inst_46043);

(statearr_46089_48048[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (3))){
var inst_46064 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46067__$1,inst_46064);
} else {
if((state_val_46068 === (12))){
var state_46067__$1 = state_46067;
var statearr_46090_48049 = state_46067__$1;
(statearr_46090_48049[(2)] = null);

(statearr_46090_48049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (2))){
var inst_46007 = (state_46067[(10)]);
var inst_46010 = (state_46067[(12)]);
var inst_46010__$1 = cljs.core.__destructure_map(inst_46007);
var inst_46011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46010__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46010__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46010__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46067__$1 = (function (){var statearr_46091 = state_46067;
(statearr_46091[(16)] = inst_46011);

(statearr_46091[(12)] = inst_46010__$1);

(statearr_46091[(18)] = inst_46012);

return statearr_46091;
})();
return cljs.core.async.ioc_alts_BANG_(state_46067__$1,(4),inst_46013);
} else {
if((state_val_46068 === (23))){
var inst_46051 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
if(cljs.core.truth_(inst_46051)){
var statearr_46092_48050 = state_46067__$1;
(statearr_46092_48050[(1)] = (24));

} else {
var statearr_46093_48051 = state_46067__$1;
(statearr_46093_48051[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (19))){
var inst_46046 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
var statearr_46094_48052 = state_46067__$1;
(statearr_46094_48052[(2)] = inst_46046);

(statearr_46094_48052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (11))){
var inst_46020 = (state_46067[(14)]);
var inst_46030 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46020);
var state_46067__$1 = state_46067;
var statearr_46095_48053 = state_46067__$1;
(statearr_46095_48053[(2)] = inst_46030);

(statearr_46095_48053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (9))){
var inst_46020 = (state_46067[(14)]);
var inst_46037 = (state_46067[(19)]);
var inst_46011 = (state_46067[(16)]);
var inst_46037__$1 = (inst_46011.cljs$core$IFn$_invoke$arity$1 ? inst_46011.cljs$core$IFn$_invoke$arity$1(inst_46020) : inst_46011.call(null,inst_46020));
var state_46067__$1 = (function (){var statearr_46098 = state_46067;
(statearr_46098[(19)] = inst_46037__$1);

return statearr_46098;
})();
if(cljs.core.truth_(inst_46037__$1)){
var statearr_46099_48054 = state_46067__$1;
(statearr_46099_48054[(1)] = (14));

} else {
var statearr_46102_48055 = state_46067__$1;
(statearr_46102_48055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (5))){
var inst_46021 = (state_46067[(13)]);
var state_46067__$1 = state_46067;
var statearr_46103_48056 = state_46067__$1;
(statearr_46103_48056[(2)] = inst_46021);

(statearr_46103_48056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (14))){
var inst_46037 = (state_46067[(19)]);
var state_46067__$1 = state_46067;
var statearr_46112_48057 = state_46067__$1;
(statearr_46112_48057[(2)] = inst_46037);

(statearr_46112_48057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (26))){
var inst_46056 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
var statearr_46114_48058 = state_46067__$1;
(statearr_46114_48058[(2)] = inst_46056);

(statearr_46114_48058[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (16))){
var inst_46048 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
if(cljs.core.truth_(inst_46048)){
var statearr_46115_48059 = state_46067__$1;
(statearr_46115_48059[(1)] = (20));

} else {
var statearr_46116_48060 = state_46067__$1;
(statearr_46116_48060[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (10))){
var inst_46062 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
var statearr_46118_48061 = state_46067__$1;
(statearr_46118_48061[(2)] = inst_46062);

(statearr_46118_48061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (18))){
var inst_46040 = (state_46067[(15)]);
var state_46067__$1 = state_46067;
var statearr_46119_48062 = state_46067__$1;
(statearr_46119_48062[(2)] = inst_46040);

(statearr_46119_48062[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (8))){
var inst_46019 = (state_46067[(7)]);
var inst_46028 = (inst_46019 == null);
var state_46067__$1 = state_46067;
if(cljs.core.truth_(inst_46028)){
var statearr_46121_48063 = state_46067__$1;
(statearr_46121_48063[(1)] = (11));

} else {
var statearr_46122_48064 = state_46067__$1;
(statearr_46122_48064[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44436__auto__ = null;
var cljs$core$async$mix_$_state_machine__44436__auto____0 = (function (){
var statearr_46123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46123[(0)] = cljs$core$async$mix_$_state_machine__44436__auto__);

(statearr_46123[(1)] = (1));

return statearr_46123;
});
var cljs$core$async$mix_$_state_machine__44436__auto____1 = (function (state_46067){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_46067);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e46126){var ex__44439__auto__ = e46126;
var statearr_46132_48065 = state_46067;
(statearr_46132_48065[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_46067[(4)]))){
var statearr_46133_48066 = state_46067;
(statearr_46133_48066[(1)] = cljs.core.first((state_46067[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48067 = state_46067;
state_46067 = G__48067;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44436__auto__ = function(state_46067){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44436__auto____1.call(this,state_46067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44436__auto____0;
cljs$core$async$mix_$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44436__auto____1;
return cljs$core$async$mix_$_state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_46134 = f__44705__auto__();
(statearr_46134[(6)] = c__44704__auto___48016);

return statearr_46134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48072 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48072(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48073 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48073(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48074 = (function() {
var G__48075 = null;
var G__48075__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48075__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48075 = function(p,v){
switch(arguments.length){
case 1:
return G__48075__1.call(this,p);
case 2:
return G__48075__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48075.cljs$core$IFn$_invoke$arity$1 = G__48075__1;
G__48075.cljs$core$IFn$_invoke$arity$2 = G__48075__2;
return G__48075;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46153 = arguments.length;
switch (G__46153) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48074(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48074(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46164 = arguments.length;
switch (G__46164) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46161_SHARP_){
if(cljs.core.truth_((p1__46161_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46161_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46161_SHARP_.call(null,topic)))){
return p1__46161_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46161_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46167 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46168){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46168 = meta46168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46169,meta46168__$1){
var self__ = this;
var _46169__$1 = this;
return (new cljs.core.async.t_cljs$core$async46167(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46168__$1));
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46169){
var self__ = this;
var _46169__$1 = this;
return self__.meta46168;
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46168","meta46168",1746898207,null)], null);
}));

(cljs.core.async.t_cljs$core$async46167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46167");

(cljs.core.async.t_cljs$core$async46167.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46167.
 */
cljs.core.async.__GT_t_cljs$core$async46167 = (function cljs$core$async$__GT_t_cljs$core$async46167(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46168){
return (new cljs.core.async.t_cljs$core$async46167(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46168));
});

}

return (new cljs.core.async.t_cljs$core$async46167(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44704__auto___48079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_46271){
var state_val_46272 = (state_46271[(1)]);
if((state_val_46272 === (7))){
var inst_46267 = (state_46271[(2)]);
var state_46271__$1 = state_46271;
var statearr_46274_48080 = state_46271__$1;
(statearr_46274_48080[(2)] = inst_46267);

(statearr_46274_48080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (20))){
var state_46271__$1 = state_46271;
var statearr_46275_48081 = state_46271__$1;
(statearr_46275_48081[(2)] = null);

(statearr_46275_48081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (1))){
var state_46271__$1 = state_46271;
var statearr_46277_48082 = state_46271__$1;
(statearr_46277_48082[(2)] = null);

(statearr_46277_48082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (24))){
var inst_46249 = (state_46271[(7)]);
var inst_46259 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46249);
var state_46271__$1 = state_46271;
var statearr_46278_48083 = state_46271__$1;
(statearr_46278_48083[(2)] = inst_46259);

(statearr_46278_48083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (4))){
var inst_46182 = (state_46271[(8)]);
var inst_46182__$1 = (state_46271[(2)]);
var inst_46183 = (inst_46182__$1 == null);
var state_46271__$1 = (function (){var statearr_46279 = state_46271;
(statearr_46279[(8)] = inst_46182__$1);

return statearr_46279;
})();
if(cljs.core.truth_(inst_46183)){
var statearr_46280_48084 = state_46271__$1;
(statearr_46280_48084[(1)] = (5));

} else {
var statearr_46281_48085 = state_46271__$1;
(statearr_46281_48085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (15))){
var inst_46243 = (state_46271[(2)]);
var state_46271__$1 = state_46271;
var statearr_46282_48086 = state_46271__$1;
(statearr_46282_48086[(2)] = inst_46243);

(statearr_46282_48086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (21))){
var inst_46264 = (state_46271[(2)]);
var state_46271__$1 = (function (){var statearr_46283 = state_46271;
(statearr_46283[(9)] = inst_46264);

return statearr_46283;
})();
var statearr_46284_48087 = state_46271__$1;
(statearr_46284_48087[(2)] = null);

(statearr_46284_48087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (13))){
var inst_46208 = (state_46271[(10)]);
var inst_46217 = cljs.core.chunked_seq_QMARK_(inst_46208);
var state_46271__$1 = state_46271;
if(inst_46217){
var statearr_46285_48088 = state_46271__$1;
(statearr_46285_48088[(1)] = (16));

} else {
var statearr_46286_48089 = state_46271__$1;
(statearr_46286_48089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (22))){
var inst_46256 = (state_46271[(2)]);
var state_46271__$1 = state_46271;
if(cljs.core.truth_(inst_46256)){
var statearr_46288_48090 = state_46271__$1;
(statearr_46288_48090[(1)] = (23));

} else {
var statearr_46289_48091 = state_46271__$1;
(statearr_46289_48091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (6))){
var inst_46249 = (state_46271[(7)]);
var inst_46182 = (state_46271[(8)]);
var inst_46251 = (state_46271[(11)]);
var inst_46249__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46182) : topic_fn.call(null,inst_46182));
var inst_46250 = cljs.core.deref(mults);
var inst_46251__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46250,inst_46249__$1);
var state_46271__$1 = (function (){var statearr_46290 = state_46271;
(statearr_46290[(7)] = inst_46249__$1);

(statearr_46290[(11)] = inst_46251__$1);

return statearr_46290;
})();
if(cljs.core.truth_(inst_46251__$1)){
var statearr_46291_48092 = state_46271__$1;
(statearr_46291_48092[(1)] = (19));

} else {
var statearr_46292_48093 = state_46271__$1;
(statearr_46292_48093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (25))){
var inst_46261 = (state_46271[(2)]);
var state_46271__$1 = state_46271;
var statearr_46293_48094 = state_46271__$1;
(statearr_46293_48094[(2)] = inst_46261);

(statearr_46293_48094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (17))){
var inst_46208 = (state_46271[(10)]);
var inst_46234 = cljs.core.first(inst_46208);
var inst_46235 = cljs.core.async.muxch_STAR_(inst_46234);
var inst_46236 = cljs.core.async.close_BANG_(inst_46235);
var inst_46237 = cljs.core.next(inst_46208);
var inst_46192 = inst_46237;
var inst_46193 = null;
var inst_46194 = (0);
var inst_46195 = (0);
var state_46271__$1 = (function (){var statearr_46294 = state_46271;
(statearr_46294[(12)] = inst_46236);

(statearr_46294[(13)] = inst_46192);

(statearr_46294[(14)] = inst_46195);

(statearr_46294[(15)] = inst_46193);

(statearr_46294[(16)] = inst_46194);

return statearr_46294;
})();
var statearr_46295_48095 = state_46271__$1;
(statearr_46295_48095[(2)] = null);

(statearr_46295_48095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (3))){
var inst_46269 = (state_46271[(2)]);
var state_46271__$1 = state_46271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46271__$1,inst_46269);
} else {
if((state_val_46272 === (12))){
var inst_46245 = (state_46271[(2)]);
var state_46271__$1 = state_46271;
var statearr_46296_48096 = state_46271__$1;
(statearr_46296_48096[(2)] = inst_46245);

(statearr_46296_48096[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (2))){
var state_46271__$1 = state_46271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46271__$1,(4),ch);
} else {
if((state_val_46272 === (23))){
var state_46271__$1 = state_46271;
var statearr_46297_48097 = state_46271__$1;
(statearr_46297_48097[(2)] = null);

(statearr_46297_48097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (19))){
var inst_46182 = (state_46271[(8)]);
var inst_46251 = (state_46271[(11)]);
var inst_46254 = cljs.core.async.muxch_STAR_(inst_46251);
var state_46271__$1 = state_46271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46271__$1,(22),inst_46254,inst_46182);
} else {
if((state_val_46272 === (11))){
var inst_46192 = (state_46271[(13)]);
var inst_46208 = (state_46271[(10)]);
var inst_46208__$1 = cljs.core.seq(inst_46192);
var state_46271__$1 = (function (){var statearr_46298 = state_46271;
(statearr_46298[(10)] = inst_46208__$1);

return statearr_46298;
})();
if(inst_46208__$1){
var statearr_46299_48098 = state_46271__$1;
(statearr_46299_48098[(1)] = (13));

} else {
var statearr_46300_48099 = state_46271__$1;
(statearr_46300_48099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (9))){
var inst_46247 = (state_46271[(2)]);
var state_46271__$1 = state_46271;
var statearr_46301_48100 = state_46271__$1;
(statearr_46301_48100[(2)] = inst_46247);

(statearr_46301_48100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (5))){
var inst_46189 = cljs.core.deref(mults);
var inst_46190 = cljs.core.vals(inst_46189);
var inst_46191 = cljs.core.seq(inst_46190);
var inst_46192 = inst_46191;
var inst_46193 = null;
var inst_46194 = (0);
var inst_46195 = (0);
var state_46271__$1 = (function (){var statearr_46302 = state_46271;
(statearr_46302[(13)] = inst_46192);

(statearr_46302[(14)] = inst_46195);

(statearr_46302[(15)] = inst_46193);

(statearr_46302[(16)] = inst_46194);

return statearr_46302;
})();
var statearr_46303_48101 = state_46271__$1;
(statearr_46303_48101[(2)] = null);

(statearr_46303_48101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (14))){
var state_46271__$1 = state_46271;
var statearr_46308_48102 = state_46271__$1;
(statearr_46308_48102[(2)] = null);

(statearr_46308_48102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (16))){
var inst_46208 = (state_46271[(10)]);
var inst_46229 = cljs.core.chunk_first(inst_46208);
var inst_46230 = cljs.core.chunk_rest(inst_46208);
var inst_46231 = cljs.core.count(inst_46229);
var inst_46192 = inst_46230;
var inst_46193 = inst_46229;
var inst_46194 = inst_46231;
var inst_46195 = (0);
var state_46271__$1 = (function (){var statearr_46310 = state_46271;
(statearr_46310[(13)] = inst_46192);

(statearr_46310[(14)] = inst_46195);

(statearr_46310[(15)] = inst_46193);

(statearr_46310[(16)] = inst_46194);

return statearr_46310;
})();
var statearr_46311_48103 = state_46271__$1;
(statearr_46311_48103[(2)] = null);

(statearr_46311_48103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (10))){
var inst_46192 = (state_46271[(13)]);
var inst_46195 = (state_46271[(14)]);
var inst_46193 = (state_46271[(15)]);
var inst_46194 = (state_46271[(16)]);
var inst_46200 = cljs.core._nth(inst_46193,inst_46195);
var inst_46201 = cljs.core.async.muxch_STAR_(inst_46200);
var inst_46202 = cljs.core.async.close_BANG_(inst_46201);
var inst_46203 = (inst_46195 + (1));
var tmp46304 = inst_46192;
var tmp46305 = inst_46193;
var tmp46306 = inst_46194;
var inst_46192__$1 = tmp46304;
var inst_46193__$1 = tmp46305;
var inst_46194__$1 = tmp46306;
var inst_46195__$1 = inst_46203;
var state_46271__$1 = (function (){var statearr_46312 = state_46271;
(statearr_46312[(13)] = inst_46192__$1);

(statearr_46312[(14)] = inst_46195__$1);

(statearr_46312[(15)] = inst_46193__$1);

(statearr_46312[(16)] = inst_46194__$1);

(statearr_46312[(17)] = inst_46202);

return statearr_46312;
})();
var statearr_46313_48104 = state_46271__$1;
(statearr_46313_48104[(2)] = null);

(statearr_46313_48104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (18))){
var inst_46240 = (state_46271[(2)]);
var state_46271__$1 = state_46271;
var statearr_46314_48105 = state_46271__$1;
(statearr_46314_48105[(2)] = inst_46240);

(statearr_46314_48105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46272 === (8))){
var inst_46195 = (state_46271[(14)]);
var inst_46194 = (state_46271[(16)]);
var inst_46197 = (inst_46195 < inst_46194);
var inst_46198 = inst_46197;
var state_46271__$1 = state_46271;
if(cljs.core.truth_(inst_46198)){
var statearr_46315_48106 = state_46271__$1;
(statearr_46315_48106[(1)] = (10));

} else {
var statearr_46316_48107 = state_46271__$1;
(statearr_46316_48107[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_46317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46317[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_46317[(1)] = (1));

return statearr_46317;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_46271){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_46271);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e46320){var ex__44439__auto__ = e46320;
var statearr_46321_48109 = state_46271;
(statearr_46321_48109[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_46271[(4)]))){
var statearr_46322_48110 = state_46271;
(statearr_46322_48110[(1)] = cljs.core.first((state_46271[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48111 = state_46271;
state_46271 = G__48111;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_46271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_46271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_46326 = f__44705__auto__();
(statearr_46326[(6)] = c__44704__auto___48079);

return statearr_46326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46328 = arguments.length;
switch (G__46328) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46341 = arguments.length;
switch (G__46341) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46346 = arguments.length;
switch (G__46346) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44704__auto___48116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_46485){
var state_val_46486 = (state_46485[(1)]);
if((state_val_46486 === (7))){
var state_46485__$1 = state_46485;
var statearr_46487_48117 = state_46485__$1;
(statearr_46487_48117[(2)] = null);

(statearr_46487_48117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (1))){
var state_46485__$1 = state_46485;
var statearr_46488_48118 = state_46485__$1;
(statearr_46488_48118[(2)] = null);

(statearr_46488_48118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (4))){
var inst_46391 = (state_46485[(7)]);
var inst_46392 = (state_46485[(8)]);
var inst_46404 = (inst_46392 < inst_46391);
var state_46485__$1 = state_46485;
if(cljs.core.truth_(inst_46404)){
var statearr_46490_48119 = state_46485__$1;
(statearr_46490_48119[(1)] = (6));

} else {
var statearr_46491_48120 = state_46485__$1;
(statearr_46491_48120[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (15))){
var inst_46434 = (state_46485[(9)]);
var inst_46439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46434);
var state_46485__$1 = state_46485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46485__$1,(17),out,inst_46439);
} else {
if((state_val_46486 === (13))){
var inst_46434 = (state_46485[(9)]);
var inst_46434__$1 = (state_46485[(2)]);
var inst_46435 = cljs.core.some(cljs.core.nil_QMARK_,inst_46434__$1);
var state_46485__$1 = (function (){var statearr_46492 = state_46485;
(statearr_46492[(9)] = inst_46434__$1);

return statearr_46492;
})();
if(cljs.core.truth_(inst_46435)){
var statearr_46493_48121 = state_46485__$1;
(statearr_46493_48121[(1)] = (14));

} else {
var statearr_46494_48122 = state_46485__$1;
(statearr_46494_48122[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (6))){
var state_46485__$1 = state_46485;
var statearr_46495_48123 = state_46485__$1;
(statearr_46495_48123[(2)] = null);

(statearr_46495_48123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (17))){
var inst_46441 = (state_46485[(2)]);
var state_46485__$1 = (function (){var statearr_46497 = state_46485;
(statearr_46497[(10)] = inst_46441);

return statearr_46497;
})();
var statearr_46499_48124 = state_46485__$1;
(statearr_46499_48124[(2)] = null);

(statearr_46499_48124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (3))){
var inst_46446 = (state_46485[(2)]);
var state_46485__$1 = state_46485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46485__$1,inst_46446);
} else {
if((state_val_46486 === (12))){
var _ = (function (){var statearr_46500 = state_46485;
(statearr_46500[(4)] = cljs.core.rest((state_46485[(4)])));

return statearr_46500;
})();
var state_46485__$1 = state_46485;
var ex46496 = (state_46485__$1[(2)]);
var statearr_46501_48125 = state_46485__$1;
(statearr_46501_48125[(5)] = ex46496);


if((ex46496 instanceof Object)){
var statearr_46503_48126 = state_46485__$1;
(statearr_46503_48126[(1)] = (11));

(statearr_46503_48126[(5)] = null);

} else {
throw ex46496;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (2))){
var inst_46390 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46391 = cnt;
var inst_46392 = (0);
var state_46485__$1 = (function (){var statearr_46510 = state_46485;
(statearr_46510[(11)] = inst_46390);

(statearr_46510[(7)] = inst_46391);

(statearr_46510[(8)] = inst_46392);

return statearr_46510;
})();
var statearr_46512_48128 = state_46485__$1;
(statearr_46512_48128[(2)] = null);

(statearr_46512_48128[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (11))){
var inst_46413 = (state_46485[(2)]);
var inst_46414 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46485__$1 = (function (){var statearr_46518 = state_46485;
(statearr_46518[(12)] = inst_46413);

return statearr_46518;
})();
var statearr_46519_48130 = state_46485__$1;
(statearr_46519_48130[(2)] = inst_46414);

(statearr_46519_48130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (9))){
var inst_46392 = (state_46485[(8)]);
var _ = (function (){var statearr_46520 = state_46485;
(statearr_46520[(4)] = cljs.core.cons((12),(state_46485[(4)])));

return statearr_46520;
})();
var inst_46420 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46392) : chs__$1.call(null,inst_46392));
var inst_46421 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46392) : done.call(null,inst_46392));
var inst_46422 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46420,inst_46421);
var ___$1 = (function (){var statearr_46521 = state_46485;
(statearr_46521[(4)] = cljs.core.rest((state_46485[(4)])));

return statearr_46521;
})();
var state_46485__$1 = state_46485;
var statearr_46522_48131 = state_46485__$1;
(statearr_46522_48131[(2)] = inst_46422);

(statearr_46522_48131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (5))){
var inst_46432 = (state_46485[(2)]);
var state_46485__$1 = (function (){var statearr_46524 = state_46485;
(statearr_46524[(13)] = inst_46432);

return statearr_46524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46485__$1,(13),dchan);
} else {
if((state_val_46486 === (14))){
var inst_46437 = cljs.core.async.close_BANG_(out);
var state_46485__$1 = state_46485;
var statearr_46525_48135 = state_46485__$1;
(statearr_46525_48135[(2)] = inst_46437);

(statearr_46525_48135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (16))){
var inst_46444 = (state_46485[(2)]);
var state_46485__$1 = state_46485;
var statearr_46530_48136 = state_46485__$1;
(statearr_46530_48136[(2)] = inst_46444);

(statearr_46530_48136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (10))){
var inst_46392 = (state_46485[(8)]);
var inst_46425 = (state_46485[(2)]);
var inst_46426 = (inst_46392 + (1));
var inst_46392__$1 = inst_46426;
var state_46485__$1 = (function (){var statearr_46531 = state_46485;
(statearr_46531[(14)] = inst_46425);

(statearr_46531[(8)] = inst_46392__$1);

return statearr_46531;
})();
var statearr_46532_48137 = state_46485__$1;
(statearr_46532_48137[(2)] = null);

(statearr_46532_48137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46486 === (8))){
var inst_46430 = (state_46485[(2)]);
var state_46485__$1 = state_46485;
var statearr_46533_48138 = state_46485__$1;
(statearr_46533_48138[(2)] = inst_46430);

(statearr_46533_48138[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_46544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46544[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_46544[(1)] = (1));

return statearr_46544;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_46485){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_46485);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e46546){var ex__44439__auto__ = e46546;
var statearr_46547_48139 = state_46485;
(statearr_46547_48139[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_46485[(4)]))){
var statearr_46548_48140 = state_46485;
(statearr_46548_48140[(1)] = cljs.core.first((state_46485[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48141 = state_46485;
state_46485 = G__48141;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_46485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_46485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_46551 = f__44705__auto__();
(statearr_46551[(6)] = c__44704__auto___48116);

return statearr_46551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46559 = arguments.length;
switch (G__46559) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44704__auto___48144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_46656){
var state_val_46657 = (state_46656[(1)]);
if((state_val_46657 === (7))){
var inst_46632 = (state_46656[(7)]);
var inst_46633 = (state_46656[(8)]);
var inst_46632__$1 = (state_46656[(2)]);
var inst_46633__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46632__$1,(0),null);
var inst_46634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46632__$1,(1),null);
var inst_46636 = (inst_46633__$1 == null);
var state_46656__$1 = (function (){var statearr_46658 = state_46656;
(statearr_46658[(9)] = inst_46634);

(statearr_46658[(7)] = inst_46632__$1);

(statearr_46658[(8)] = inst_46633__$1);

return statearr_46658;
})();
if(cljs.core.truth_(inst_46636)){
var statearr_46659_48145 = state_46656__$1;
(statearr_46659_48145[(1)] = (8));

} else {
var statearr_46660_48146 = state_46656__$1;
(statearr_46660_48146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (1))){
var inst_46622 = cljs.core.vec(chs);
var inst_46623 = inst_46622;
var state_46656__$1 = (function (){var statearr_46661 = state_46656;
(statearr_46661[(10)] = inst_46623);

return statearr_46661;
})();
var statearr_46662_48147 = state_46656__$1;
(statearr_46662_48147[(2)] = null);

(statearr_46662_48147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (4))){
var inst_46623 = (state_46656[(10)]);
var state_46656__$1 = state_46656;
return cljs.core.async.ioc_alts_BANG_(state_46656__$1,(7),inst_46623);
} else {
if((state_val_46657 === (6))){
var inst_46651 = (state_46656[(2)]);
var state_46656__$1 = state_46656;
var statearr_46664_48149 = state_46656__$1;
(statearr_46664_48149[(2)] = inst_46651);

(statearr_46664_48149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (3))){
var inst_46653 = (state_46656[(2)]);
var state_46656__$1 = state_46656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46656__$1,inst_46653);
} else {
if((state_val_46657 === (2))){
var inst_46623 = (state_46656[(10)]);
var inst_46625 = cljs.core.count(inst_46623);
var inst_46626 = (inst_46625 > (0));
var state_46656__$1 = state_46656;
if(cljs.core.truth_(inst_46626)){
var statearr_46666_48151 = state_46656__$1;
(statearr_46666_48151[(1)] = (4));

} else {
var statearr_46667_48152 = state_46656__$1;
(statearr_46667_48152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (11))){
var inst_46623 = (state_46656[(10)]);
var inst_46643 = (state_46656[(2)]);
var tmp46665 = inst_46623;
var inst_46623__$1 = tmp46665;
var state_46656__$1 = (function (){var statearr_46675 = state_46656;
(statearr_46675[(10)] = inst_46623__$1);

(statearr_46675[(11)] = inst_46643);

return statearr_46675;
})();
var statearr_46676_48153 = state_46656__$1;
(statearr_46676_48153[(2)] = null);

(statearr_46676_48153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (9))){
var inst_46633 = (state_46656[(8)]);
var state_46656__$1 = state_46656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46656__$1,(11),out,inst_46633);
} else {
if((state_val_46657 === (5))){
var inst_46649 = cljs.core.async.close_BANG_(out);
var state_46656__$1 = state_46656;
var statearr_46678_48154 = state_46656__$1;
(statearr_46678_48154[(2)] = inst_46649);

(statearr_46678_48154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (10))){
var inst_46646 = (state_46656[(2)]);
var state_46656__$1 = state_46656;
var statearr_46679_48155 = state_46656__$1;
(statearr_46679_48155[(2)] = inst_46646);

(statearr_46679_48155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (8))){
var inst_46623 = (state_46656[(10)]);
var inst_46634 = (state_46656[(9)]);
var inst_46632 = (state_46656[(7)]);
var inst_46633 = (state_46656[(8)]);
var inst_46638 = (function (){var cs = inst_46623;
var vec__46628 = inst_46632;
var v = inst_46633;
var c = inst_46634;
return (function (p1__46556_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46556_SHARP_);
});
})();
var inst_46639 = cljs.core.filterv(inst_46638,inst_46623);
var inst_46623__$1 = inst_46639;
var state_46656__$1 = (function (){var statearr_46681 = state_46656;
(statearr_46681[(10)] = inst_46623__$1);

return statearr_46681;
})();
var statearr_46682_48156 = state_46656__$1;
(statearr_46682_48156[(2)] = null);

(statearr_46682_48156[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_46689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46689[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_46689[(1)] = (1));

return statearr_46689;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_46656){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_46656);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e46692){var ex__44439__auto__ = e46692;
var statearr_46693_48157 = state_46656;
(statearr_46693_48157[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_46656[(4)]))){
var statearr_46694_48158 = state_46656;
(statearr_46694_48158[(1)] = cljs.core.first((state_46656[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48159 = state_46656;
state_46656 = G__48159;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_46656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_46656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_46696 = f__44705__auto__();
(statearr_46696[(6)] = c__44704__auto___48144);

return statearr_46696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46706 = arguments.length;
switch (G__46706) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44704__auto___48161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_46777){
var state_val_46778 = (state_46777[(1)]);
if((state_val_46778 === (7))){
var inst_46738 = (state_46777[(7)]);
var inst_46738__$1 = (state_46777[(2)]);
var inst_46750 = (inst_46738__$1 == null);
var inst_46756 = cljs.core.not(inst_46750);
var state_46777__$1 = (function (){var statearr_46786 = state_46777;
(statearr_46786[(7)] = inst_46738__$1);

return statearr_46786;
})();
if(inst_46756){
var statearr_46787_48166 = state_46777__$1;
(statearr_46787_48166[(1)] = (8));

} else {
var statearr_46788_48167 = state_46777__$1;
(statearr_46788_48167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (1))){
var inst_46729 = (0);
var state_46777__$1 = (function (){var statearr_46789 = state_46777;
(statearr_46789[(8)] = inst_46729);

return statearr_46789;
})();
var statearr_46790_48170 = state_46777__$1;
(statearr_46790_48170[(2)] = null);

(statearr_46790_48170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (4))){
var state_46777__$1 = state_46777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46777__$1,(7),ch);
} else {
if((state_val_46778 === (6))){
var inst_46771 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46791_48173 = state_46777__$1;
(statearr_46791_48173[(2)] = inst_46771);

(statearr_46791_48173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (3))){
var inst_46773 = (state_46777[(2)]);
var inst_46774 = cljs.core.async.close_BANG_(out);
var state_46777__$1 = (function (){var statearr_46792 = state_46777;
(statearr_46792[(9)] = inst_46773);

return statearr_46792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46777__$1,inst_46774);
} else {
if((state_val_46778 === (2))){
var inst_46729 = (state_46777[(8)]);
var inst_46731 = (inst_46729 < n);
var state_46777__$1 = state_46777;
if(cljs.core.truth_(inst_46731)){
var statearr_46794_48174 = state_46777__$1;
(statearr_46794_48174[(1)] = (4));

} else {
var statearr_46795_48175 = state_46777__$1;
(statearr_46795_48175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (11))){
var inst_46729 = (state_46777[(8)]);
var inst_46763 = (state_46777[(2)]);
var inst_46764 = (inst_46729 + (1));
var inst_46729__$1 = inst_46764;
var state_46777__$1 = (function (){var statearr_46796 = state_46777;
(statearr_46796[(10)] = inst_46763);

(statearr_46796[(8)] = inst_46729__$1);

return statearr_46796;
})();
var statearr_46797_48176 = state_46777__$1;
(statearr_46797_48176[(2)] = null);

(statearr_46797_48176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (9))){
var state_46777__$1 = state_46777;
var statearr_46798_48177 = state_46777__$1;
(statearr_46798_48177[(2)] = null);

(statearr_46798_48177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (5))){
var state_46777__$1 = state_46777;
var statearr_46799_48178 = state_46777__$1;
(statearr_46799_48178[(2)] = null);

(statearr_46799_48178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (10))){
var inst_46768 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46800_48182 = state_46777__$1;
(statearr_46800_48182[(2)] = inst_46768);

(statearr_46800_48182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (8))){
var inst_46738 = (state_46777[(7)]);
var state_46777__$1 = state_46777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46777__$1,(11),out,inst_46738);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_46801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46801[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_46801[(1)] = (1));

return statearr_46801;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_46777){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_46777);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e46802){var ex__44439__auto__ = e46802;
var statearr_46803_48187 = state_46777;
(statearr_46803_48187[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_46777[(4)]))){
var statearr_46805_48188 = state_46777;
(statearr_46805_48188[(1)] = cljs.core.first((state_46777[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48189 = state_46777;
state_46777 = G__48189;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_46777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_46777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_46806 = f__44705__auto__();
(statearr_46806[(6)] = c__44704__auto___48161);

return statearr_46806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46808 = (function (f,ch,meta46809){
this.f = f;
this.ch = ch;
this.meta46809 = meta46809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46810,meta46809__$1){
var self__ = this;
var _46810__$1 = this;
return (new cljs.core.async.t_cljs$core$async46808(self__.f,self__.ch,meta46809__$1));
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46810){
var self__ = this;
var _46810__$1 = this;
return self__.meta46809;
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46817 = (function (f,ch,meta46809,_,fn1,meta46818){
this.f = f;
this.ch = ch;
this.meta46809 = meta46809;
this._ = _;
this.fn1 = fn1;
this.meta46818 = meta46818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46819,meta46818__$1){
var self__ = this;
var _46819__$1 = this;
return (new cljs.core.async.t_cljs$core$async46817(self__.f,self__.ch,self__.meta46809,self__._,self__.fn1,meta46818__$1));
}));

(cljs.core.async.t_cljs$core$async46817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46819){
var self__ = this;
var _46819__$1 = this;
return self__.meta46818;
}));

(cljs.core.async.t_cljs$core$async46817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46807_SHARP_){
var G__46829 = (((p1__46807_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46807_SHARP_) : self__.f.call(null,p1__46807_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46829) : f1.call(null,G__46829));
});
}));

(cljs.core.async.t_cljs$core$async46817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46809","meta46809",1961571688,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46808","cljs.core.async/t_cljs$core$async46808",-370094851,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46818","meta46818",611045506,null)], null);
}));

(cljs.core.async.t_cljs$core$async46817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46817");

(cljs.core.async.t_cljs$core$async46817.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46817.
 */
cljs.core.async.__GT_t_cljs$core$async46817 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46817(f__$1,ch__$1,meta46809__$1,___$2,fn1__$1,meta46818){
return (new cljs.core.async.t_cljs$core$async46817(f__$1,ch__$1,meta46809__$1,___$2,fn1__$1,meta46818));
});

}

return (new cljs.core.async.t_cljs$core$async46817(self__.f,self__.ch,self__.meta46809,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46831 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46831) : self__.f.call(null,G__46831));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46809","meta46809",1961571688,null)], null);
}));

(cljs.core.async.t_cljs$core$async46808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46808");

(cljs.core.async.t_cljs$core$async46808.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46808.
 */
cljs.core.async.__GT_t_cljs$core$async46808 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46808(f__$1,ch__$1,meta46809){
return (new cljs.core.async.t_cljs$core$async46808(f__$1,ch__$1,meta46809));
});

}

return (new cljs.core.async.t_cljs$core$async46808(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46841 = (function (f,ch,meta46842){
this.f = f;
this.ch = ch;
this.meta46842 = meta46842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46843,meta46842__$1){
var self__ = this;
var _46843__$1 = this;
return (new cljs.core.async.t_cljs$core$async46841(self__.f,self__.ch,meta46842__$1));
}));

(cljs.core.async.t_cljs$core$async46841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46843){
var self__ = this;
var _46843__$1 = this;
return self__.meta46842;
}));

(cljs.core.async.t_cljs$core$async46841.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46841.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46841.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46842","meta46842",1562124902,null)], null);
}));

(cljs.core.async.t_cljs$core$async46841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46841");

(cljs.core.async.t_cljs$core$async46841.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46841.
 */
cljs.core.async.__GT_t_cljs$core$async46841 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46841(f__$1,ch__$1,meta46842){
return (new cljs.core.async.t_cljs$core$async46841(f__$1,ch__$1,meta46842));
});

}

return (new cljs.core.async.t_cljs$core$async46841(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46846 = (function (p,ch,meta46847){
this.p = p;
this.ch = ch;
this.meta46847 = meta46847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46848,meta46847__$1){
var self__ = this;
var _46848__$1 = this;
return (new cljs.core.async.t_cljs$core$async46846(self__.p,self__.ch,meta46847__$1));
}));

(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46848){
var self__ = this;
var _46848__$1 = this;
return self__.meta46847;
}));

(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46847","meta46847",-1939128792,null)], null);
}));

(cljs.core.async.t_cljs$core$async46846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46846");

(cljs.core.async.t_cljs$core$async46846.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46846.
 */
cljs.core.async.__GT_t_cljs$core$async46846 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46846(p__$1,ch__$1,meta46847){
return (new cljs.core.async.t_cljs$core$async46846(p__$1,ch__$1,meta46847));
});

}

return (new cljs.core.async.t_cljs$core$async46846(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46865 = arguments.length;
switch (G__46865) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44704__auto___48205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_46887){
var state_val_46888 = (state_46887[(1)]);
if((state_val_46888 === (7))){
var inst_46883 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
var statearr_46889_48206 = state_46887__$1;
(statearr_46889_48206[(2)] = inst_46883);

(statearr_46889_48206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (1))){
var state_46887__$1 = state_46887;
var statearr_46891_48207 = state_46887__$1;
(statearr_46891_48207[(2)] = null);

(statearr_46891_48207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (4))){
var inst_46869 = (state_46887[(7)]);
var inst_46869__$1 = (state_46887[(2)]);
var inst_46870 = (inst_46869__$1 == null);
var state_46887__$1 = (function (){var statearr_46892 = state_46887;
(statearr_46892[(7)] = inst_46869__$1);

return statearr_46892;
})();
if(cljs.core.truth_(inst_46870)){
var statearr_46893_48208 = state_46887__$1;
(statearr_46893_48208[(1)] = (5));

} else {
var statearr_46894_48209 = state_46887__$1;
(statearr_46894_48209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (6))){
var inst_46869 = (state_46887[(7)]);
var inst_46874 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46869) : p.call(null,inst_46869));
var state_46887__$1 = state_46887;
if(cljs.core.truth_(inst_46874)){
var statearr_46895_48210 = state_46887__$1;
(statearr_46895_48210[(1)] = (8));

} else {
var statearr_46896_48211 = state_46887__$1;
(statearr_46896_48211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (3))){
var inst_46885 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46887__$1,inst_46885);
} else {
if((state_val_46888 === (2))){
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46887__$1,(4),ch);
} else {
if((state_val_46888 === (11))){
var inst_46877 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
var statearr_46897_48212 = state_46887__$1;
(statearr_46897_48212[(2)] = inst_46877);

(statearr_46897_48212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (9))){
var state_46887__$1 = state_46887;
var statearr_46898_48213 = state_46887__$1;
(statearr_46898_48213[(2)] = null);

(statearr_46898_48213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (5))){
var inst_46872 = cljs.core.async.close_BANG_(out);
var state_46887__$1 = state_46887;
var statearr_46899_48220 = state_46887__$1;
(statearr_46899_48220[(2)] = inst_46872);

(statearr_46899_48220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (10))){
var inst_46880 = (state_46887[(2)]);
var state_46887__$1 = (function (){var statearr_46900 = state_46887;
(statearr_46900[(8)] = inst_46880);

return statearr_46900;
})();
var statearr_46901_48221 = state_46887__$1;
(statearr_46901_48221[(2)] = null);

(statearr_46901_48221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (8))){
var inst_46869 = (state_46887[(7)]);
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46887__$1,(11),out,inst_46869);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_46903 = [null,null,null,null,null,null,null,null,null];
(statearr_46903[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_46903[(1)] = (1));

return statearr_46903;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_46887){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_46887);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e46910){var ex__44439__auto__ = e46910;
var statearr_46912_48222 = state_46887;
(statearr_46912_48222[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_46887[(4)]))){
var statearr_46913_48223 = state_46887;
(statearr_46913_48223[(1)] = cljs.core.first((state_46887[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48224 = state_46887;
state_46887 = G__48224;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_46887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_46887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_46915 = f__44705__auto__();
(statearr_46915[(6)] = c__44704__auto___48205);

return statearr_46915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46920 = arguments.length;
switch (G__46920) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_46983){
var state_val_46984 = (state_46983[(1)]);
if((state_val_46984 === (7))){
var inst_46979 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
var statearr_46985_48228 = state_46983__$1;
(statearr_46985_48228[(2)] = inst_46979);

(statearr_46985_48228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (20))){
var inst_46949 = (state_46983[(7)]);
var inst_46960 = (state_46983[(2)]);
var inst_46961 = cljs.core.next(inst_46949);
var inst_46935 = inst_46961;
var inst_46936 = null;
var inst_46937 = (0);
var inst_46938 = (0);
var state_46983__$1 = (function (){var statearr_46986 = state_46983;
(statearr_46986[(8)] = inst_46960);

(statearr_46986[(9)] = inst_46937);

(statearr_46986[(10)] = inst_46935);

(statearr_46986[(11)] = inst_46936);

(statearr_46986[(12)] = inst_46938);

return statearr_46986;
})();
var statearr_46987_48229 = state_46983__$1;
(statearr_46987_48229[(2)] = null);

(statearr_46987_48229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (1))){
var state_46983__$1 = state_46983;
var statearr_46988_48230 = state_46983__$1;
(statearr_46988_48230[(2)] = null);

(statearr_46988_48230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (4))){
var inst_46924 = (state_46983[(13)]);
var inst_46924__$1 = (state_46983[(2)]);
var inst_46925 = (inst_46924__$1 == null);
var state_46983__$1 = (function (){var statearr_46989 = state_46983;
(statearr_46989[(13)] = inst_46924__$1);

return statearr_46989;
})();
if(cljs.core.truth_(inst_46925)){
var statearr_46991_48231 = state_46983__$1;
(statearr_46991_48231[(1)] = (5));

} else {
var statearr_46992_48232 = state_46983__$1;
(statearr_46992_48232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (15))){
var state_46983__$1 = state_46983;
var statearr_46996_48233 = state_46983__$1;
(statearr_46996_48233[(2)] = null);

(statearr_46996_48233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (21))){
var state_46983__$1 = state_46983;
var statearr_46997_48234 = state_46983__$1;
(statearr_46997_48234[(2)] = null);

(statearr_46997_48234[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (13))){
var inst_46937 = (state_46983[(9)]);
var inst_46935 = (state_46983[(10)]);
var inst_46936 = (state_46983[(11)]);
var inst_46938 = (state_46983[(12)]);
var inst_46945 = (state_46983[(2)]);
var inst_46946 = (inst_46938 + (1));
var tmp46993 = inst_46937;
var tmp46994 = inst_46935;
var tmp46995 = inst_46936;
var inst_46935__$1 = tmp46994;
var inst_46936__$1 = tmp46995;
var inst_46937__$1 = tmp46993;
var inst_46938__$1 = inst_46946;
var state_46983__$1 = (function (){var statearr_46999 = state_46983;
(statearr_46999[(14)] = inst_46945);

(statearr_46999[(9)] = inst_46937__$1);

(statearr_46999[(10)] = inst_46935__$1);

(statearr_46999[(11)] = inst_46936__$1);

(statearr_46999[(12)] = inst_46938__$1);

return statearr_46999;
})();
var statearr_47000_48235 = state_46983__$1;
(statearr_47000_48235[(2)] = null);

(statearr_47000_48235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (22))){
var state_46983__$1 = state_46983;
var statearr_47001_48236 = state_46983__$1;
(statearr_47001_48236[(2)] = null);

(statearr_47001_48236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (6))){
var inst_46924 = (state_46983[(13)]);
var inst_46933 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46924) : f.call(null,inst_46924));
var inst_46934 = cljs.core.seq(inst_46933);
var inst_46935 = inst_46934;
var inst_46936 = null;
var inst_46937 = (0);
var inst_46938 = (0);
var state_46983__$1 = (function (){var statearr_47002 = state_46983;
(statearr_47002[(9)] = inst_46937);

(statearr_47002[(10)] = inst_46935);

(statearr_47002[(11)] = inst_46936);

(statearr_47002[(12)] = inst_46938);

return statearr_47002;
})();
var statearr_47003_48237 = state_46983__$1;
(statearr_47003_48237[(2)] = null);

(statearr_47003_48237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (17))){
var inst_46949 = (state_46983[(7)]);
var inst_46953 = cljs.core.chunk_first(inst_46949);
var inst_46954 = cljs.core.chunk_rest(inst_46949);
var inst_46955 = cljs.core.count(inst_46953);
var inst_46935 = inst_46954;
var inst_46936 = inst_46953;
var inst_46937 = inst_46955;
var inst_46938 = (0);
var state_46983__$1 = (function (){var statearr_47004 = state_46983;
(statearr_47004[(9)] = inst_46937);

(statearr_47004[(10)] = inst_46935);

(statearr_47004[(11)] = inst_46936);

(statearr_47004[(12)] = inst_46938);

return statearr_47004;
})();
var statearr_47006_48238 = state_46983__$1;
(statearr_47006_48238[(2)] = null);

(statearr_47006_48238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (3))){
var inst_46981 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46983__$1,inst_46981);
} else {
if((state_val_46984 === (12))){
var inst_46969 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
var statearr_47007_48239 = state_46983__$1;
(statearr_47007_48239[(2)] = inst_46969);

(statearr_47007_48239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (2))){
var state_46983__$1 = state_46983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46983__$1,(4),in$);
} else {
if((state_val_46984 === (23))){
var inst_46977 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
var statearr_47008_48240 = state_46983__$1;
(statearr_47008_48240[(2)] = inst_46977);

(statearr_47008_48240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (19))){
var inst_46964 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
var statearr_47009_48241 = state_46983__$1;
(statearr_47009_48241[(2)] = inst_46964);

(statearr_47009_48241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (11))){
var inst_46949 = (state_46983[(7)]);
var inst_46935 = (state_46983[(10)]);
var inst_46949__$1 = cljs.core.seq(inst_46935);
var state_46983__$1 = (function (){var statearr_47010 = state_46983;
(statearr_47010[(7)] = inst_46949__$1);

return statearr_47010;
})();
if(inst_46949__$1){
var statearr_47011_48248 = state_46983__$1;
(statearr_47011_48248[(1)] = (14));

} else {
var statearr_47012_48249 = state_46983__$1;
(statearr_47012_48249[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (9))){
var inst_46971 = (state_46983[(2)]);
var inst_46972 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46983__$1 = (function (){var statearr_47013 = state_46983;
(statearr_47013[(15)] = inst_46971);

return statearr_47013;
})();
if(cljs.core.truth_(inst_46972)){
var statearr_47014_48250 = state_46983__$1;
(statearr_47014_48250[(1)] = (21));

} else {
var statearr_47016_48251 = state_46983__$1;
(statearr_47016_48251[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (5))){
var inst_46927 = cljs.core.async.close_BANG_(out);
var state_46983__$1 = state_46983;
var statearr_47019_48252 = state_46983__$1;
(statearr_47019_48252[(2)] = inst_46927);

(statearr_47019_48252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (14))){
var inst_46949 = (state_46983[(7)]);
var inst_46951 = cljs.core.chunked_seq_QMARK_(inst_46949);
var state_46983__$1 = state_46983;
if(inst_46951){
var statearr_47021_48253 = state_46983__$1;
(statearr_47021_48253[(1)] = (17));

} else {
var statearr_47022_48254 = state_46983__$1;
(statearr_47022_48254[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (16))){
var inst_46967 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
var statearr_47023_48255 = state_46983__$1;
(statearr_47023_48255[(2)] = inst_46967);

(statearr_47023_48255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (10))){
var inst_46936 = (state_46983[(11)]);
var inst_46938 = (state_46983[(12)]);
var inst_46943 = cljs.core._nth(inst_46936,inst_46938);
var state_46983__$1 = state_46983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46983__$1,(13),out,inst_46943);
} else {
if((state_val_46984 === (18))){
var inst_46949 = (state_46983[(7)]);
var inst_46958 = cljs.core.first(inst_46949);
var state_46983__$1 = state_46983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46983__$1,(20),out,inst_46958);
} else {
if((state_val_46984 === (8))){
var inst_46937 = (state_46983[(9)]);
var inst_46938 = (state_46983[(12)]);
var inst_46940 = (inst_46938 < inst_46937);
var inst_46941 = inst_46940;
var state_46983__$1 = state_46983;
if(cljs.core.truth_(inst_46941)){
var statearr_47024_48257 = state_46983__$1;
(statearr_47024_48257[(1)] = (10));

} else {
var statearr_47025_48258 = state_46983__$1;
(statearr_47025_48258[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44436__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44436__auto____0 = (function (){
var statearr_47027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47027[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44436__auto__);

(statearr_47027[(1)] = (1));

return statearr_47027;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44436__auto____1 = (function (state_46983){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_46983);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e47028){var ex__44439__auto__ = e47028;
var statearr_47029_48260 = state_46983;
(statearr_47029_48260[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_46983[(4)]))){
var statearr_47030_48261 = state_46983;
(statearr_47030_48261[(1)] = cljs.core.first((state_46983[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48262 = state_46983;
state_46983 = G__48262;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44436__auto__ = function(state_46983){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44436__auto____1.call(this,state_46983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44436__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44436__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_47031 = f__44705__auto__();
(statearr_47031[(6)] = c__44704__auto__);

return statearr_47031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));

return c__44704__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47036 = arguments.length;
switch (G__47036) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47071 = arguments.length;
switch (G__47071) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47092 = arguments.length;
switch (G__47092) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44704__auto___48266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_47189){
var state_val_47190 = (state_47189[(1)]);
if((state_val_47190 === (7))){
var inst_47180 = (state_47189[(2)]);
var state_47189__$1 = state_47189;
var statearr_47200_48267 = state_47189__$1;
(statearr_47200_48267[(2)] = inst_47180);

(statearr_47200_48267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47190 === (1))){
var inst_47120 = null;
var state_47189__$1 = (function (){var statearr_47201 = state_47189;
(statearr_47201[(7)] = inst_47120);

return statearr_47201;
})();
var statearr_47202_48268 = state_47189__$1;
(statearr_47202_48268[(2)] = null);

(statearr_47202_48268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47190 === (4))){
var inst_47137 = (state_47189[(8)]);
var inst_47137__$1 = (state_47189[(2)]);
var inst_47152 = (inst_47137__$1 == null);
var inst_47156 = cljs.core.not(inst_47152);
var state_47189__$1 = (function (){var statearr_47209 = state_47189;
(statearr_47209[(8)] = inst_47137__$1);

return statearr_47209;
})();
if(inst_47156){
var statearr_47210_48269 = state_47189__$1;
(statearr_47210_48269[(1)] = (5));

} else {
var statearr_47215_48270 = state_47189__$1;
(statearr_47215_48270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47190 === (6))){
var state_47189__$1 = state_47189;
var statearr_47216_48271 = state_47189__$1;
(statearr_47216_48271[(2)] = null);

(statearr_47216_48271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47190 === (3))){
var inst_47182 = (state_47189[(2)]);
var inst_47183 = cljs.core.async.close_BANG_(out);
var state_47189__$1 = (function (){var statearr_47217 = state_47189;
(statearr_47217[(9)] = inst_47182);

return statearr_47217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47189__$1,inst_47183);
} else {
if((state_val_47190 === (2))){
var state_47189__$1 = state_47189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47189__$1,(4),ch);
} else {
if((state_val_47190 === (11))){
var inst_47137 = (state_47189[(8)]);
var inst_47174 = (state_47189[(2)]);
var inst_47120 = inst_47137;
var state_47189__$1 = (function (){var statearr_47220 = state_47189;
(statearr_47220[(7)] = inst_47120);

(statearr_47220[(10)] = inst_47174);

return statearr_47220;
})();
var statearr_47222_48272 = state_47189__$1;
(statearr_47222_48272[(2)] = null);

(statearr_47222_48272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47190 === (9))){
var inst_47137 = (state_47189[(8)]);
var state_47189__$1 = state_47189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47189__$1,(11),out,inst_47137);
} else {
if((state_val_47190 === (5))){
var inst_47120 = (state_47189[(7)]);
var inst_47137 = (state_47189[(8)]);
var inst_47168 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47137,inst_47120);
var state_47189__$1 = state_47189;
if(inst_47168){
var statearr_47231_48273 = state_47189__$1;
(statearr_47231_48273[(1)] = (8));

} else {
var statearr_47233_48274 = state_47189__$1;
(statearr_47233_48274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47190 === (10))){
var inst_47177 = (state_47189[(2)]);
var state_47189__$1 = state_47189;
var statearr_47236_48275 = state_47189__$1;
(statearr_47236_48275[(2)] = inst_47177);

(statearr_47236_48275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47190 === (8))){
var inst_47120 = (state_47189[(7)]);
var tmp47227 = inst_47120;
var inst_47120__$1 = tmp47227;
var state_47189__$1 = (function (){var statearr_47240 = state_47189;
(statearr_47240[(7)] = inst_47120__$1);

return statearr_47240;
})();
var statearr_47241_48276 = state_47189__$1;
(statearr_47241_48276[(2)] = null);

(statearr_47241_48276[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_47252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47252[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_47252[(1)] = (1));

return statearr_47252;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_47189){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_47189);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e47255){var ex__44439__auto__ = e47255;
var statearr_47256_48277 = state_47189;
(statearr_47256_48277[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_47189[(4)]))){
var statearr_47261_48278 = state_47189;
(statearr_47261_48278[(1)] = cljs.core.first((state_47189[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48279 = state_47189;
state_47189 = G__48279;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_47189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_47189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_47268 = f__44705__auto__();
(statearr_47268[(6)] = c__44704__auto___48266);

return statearr_47268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47276 = arguments.length;
switch (G__47276) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44704__auto___48281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_47315){
var state_val_47316 = (state_47315[(1)]);
if((state_val_47316 === (7))){
var inst_47311 = (state_47315[(2)]);
var state_47315__$1 = state_47315;
var statearr_47317_48282 = state_47315__$1;
(statearr_47317_48282[(2)] = inst_47311);

(statearr_47317_48282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (1))){
var inst_47278 = (new Array(n));
var inst_47279 = inst_47278;
var inst_47280 = (0);
var state_47315__$1 = (function (){var statearr_47318 = state_47315;
(statearr_47318[(7)] = inst_47279);

(statearr_47318[(8)] = inst_47280);

return statearr_47318;
})();
var statearr_47319_48283 = state_47315__$1;
(statearr_47319_48283[(2)] = null);

(statearr_47319_48283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (4))){
var inst_47283 = (state_47315[(9)]);
var inst_47283__$1 = (state_47315[(2)]);
var inst_47284 = (inst_47283__$1 == null);
var inst_47285 = cljs.core.not(inst_47284);
var state_47315__$1 = (function (){var statearr_47320 = state_47315;
(statearr_47320[(9)] = inst_47283__$1);

return statearr_47320;
})();
if(inst_47285){
var statearr_47321_48284 = state_47315__$1;
(statearr_47321_48284[(1)] = (5));

} else {
var statearr_47322_48285 = state_47315__$1;
(statearr_47322_48285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (15))){
var inst_47305 = (state_47315[(2)]);
var state_47315__$1 = state_47315;
var statearr_47323_48286 = state_47315__$1;
(statearr_47323_48286[(2)] = inst_47305);

(statearr_47323_48286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (13))){
var state_47315__$1 = state_47315;
var statearr_47325_48287 = state_47315__$1;
(statearr_47325_48287[(2)] = null);

(statearr_47325_48287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (6))){
var inst_47280 = (state_47315[(8)]);
var inst_47301 = (inst_47280 > (0));
var state_47315__$1 = state_47315;
if(cljs.core.truth_(inst_47301)){
var statearr_47326_48288 = state_47315__$1;
(statearr_47326_48288[(1)] = (12));

} else {
var statearr_47328_48289 = state_47315__$1;
(statearr_47328_48289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (3))){
var inst_47313 = (state_47315[(2)]);
var state_47315__$1 = state_47315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47315__$1,inst_47313);
} else {
if((state_val_47316 === (12))){
var inst_47279 = (state_47315[(7)]);
var inst_47303 = cljs.core.vec(inst_47279);
var state_47315__$1 = state_47315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47315__$1,(15),out,inst_47303);
} else {
if((state_val_47316 === (2))){
var state_47315__$1 = state_47315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47315__$1,(4),ch);
} else {
if((state_val_47316 === (11))){
var inst_47295 = (state_47315[(2)]);
var inst_47296 = (new Array(n));
var inst_47279 = inst_47296;
var inst_47280 = (0);
var state_47315__$1 = (function (){var statearr_47339 = state_47315;
(statearr_47339[(10)] = inst_47295);

(statearr_47339[(7)] = inst_47279);

(statearr_47339[(8)] = inst_47280);

return statearr_47339;
})();
var statearr_47341_48290 = state_47315__$1;
(statearr_47341_48290[(2)] = null);

(statearr_47341_48290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (9))){
var inst_47279 = (state_47315[(7)]);
var inst_47293 = cljs.core.vec(inst_47279);
var state_47315__$1 = state_47315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47315__$1,(11),out,inst_47293);
} else {
if((state_val_47316 === (5))){
var inst_47283 = (state_47315[(9)]);
var inst_47279 = (state_47315[(7)]);
var inst_47280 = (state_47315[(8)]);
var inst_47288 = (state_47315[(11)]);
var inst_47287 = (inst_47279[inst_47280] = inst_47283);
var inst_47288__$1 = (inst_47280 + (1));
var inst_47289 = (inst_47288__$1 < n);
var state_47315__$1 = (function (){var statearr_47344 = state_47315;
(statearr_47344[(11)] = inst_47288__$1);

(statearr_47344[(12)] = inst_47287);

return statearr_47344;
})();
if(cljs.core.truth_(inst_47289)){
var statearr_47345_48292 = state_47315__$1;
(statearr_47345_48292[(1)] = (8));

} else {
var statearr_47346_48293 = state_47315__$1;
(statearr_47346_48293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (14))){
var inst_47308 = (state_47315[(2)]);
var inst_47309 = cljs.core.async.close_BANG_(out);
var state_47315__$1 = (function (){var statearr_47348 = state_47315;
(statearr_47348[(13)] = inst_47308);

return statearr_47348;
})();
var statearr_47349_48298 = state_47315__$1;
(statearr_47349_48298[(2)] = inst_47309);

(statearr_47349_48298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (10))){
var inst_47299 = (state_47315[(2)]);
var state_47315__$1 = state_47315;
var statearr_47350_48299 = state_47315__$1;
(statearr_47350_48299[(2)] = inst_47299);

(statearr_47350_48299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47316 === (8))){
var inst_47279 = (state_47315[(7)]);
var inst_47288 = (state_47315[(11)]);
var tmp47347 = inst_47279;
var inst_47279__$1 = tmp47347;
var inst_47280 = inst_47288;
var state_47315__$1 = (function (){var statearr_47351 = state_47315;
(statearr_47351[(7)] = inst_47279__$1);

(statearr_47351[(8)] = inst_47280);

return statearr_47351;
})();
var statearr_47352_48300 = state_47315__$1;
(statearr_47352_48300[(2)] = null);

(statearr_47352_48300[(1)] = (2));


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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_47353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47353[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_47353[(1)] = (1));

return statearr_47353;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_47315){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_47315);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e47354){var ex__44439__auto__ = e47354;
var statearr_47355_48301 = state_47315;
(statearr_47355_48301[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_47315[(4)]))){
var statearr_47358_48302 = state_47315;
(statearr_47358_48302[(1)] = cljs.core.first((state_47315[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48303 = state_47315;
state_47315 = G__48303;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_47315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_47315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_47359 = f__44705__auto__();
(statearr_47359[(6)] = c__44704__auto___48281);

return statearr_47359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47361 = arguments.length;
switch (G__47361) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44704__auto___48305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_47407){
var state_val_47408 = (state_47407[(1)]);
if((state_val_47408 === (7))){
var inst_47402 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
var statearr_47410_48306 = state_47407__$1;
(statearr_47410_48306[(2)] = inst_47402);

(statearr_47410_48306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (1))){
var inst_47362 = [];
var inst_47363 = inst_47362;
var inst_47364 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47407__$1 = (function (){var statearr_47411 = state_47407;
(statearr_47411[(7)] = inst_47364);

(statearr_47411[(8)] = inst_47363);

return statearr_47411;
})();
var statearr_47412_48307 = state_47407__$1;
(statearr_47412_48307[(2)] = null);

(statearr_47412_48307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (4))){
var inst_47367 = (state_47407[(9)]);
var inst_47367__$1 = (state_47407[(2)]);
var inst_47368 = (inst_47367__$1 == null);
var inst_47369 = cljs.core.not(inst_47368);
var state_47407__$1 = (function (){var statearr_47413 = state_47407;
(statearr_47413[(9)] = inst_47367__$1);

return statearr_47413;
})();
if(inst_47369){
var statearr_47414_48308 = state_47407__$1;
(statearr_47414_48308[(1)] = (5));

} else {
var statearr_47415_48309 = state_47407__$1;
(statearr_47415_48309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (15))){
var inst_47363 = (state_47407[(8)]);
var inst_47394 = cljs.core.vec(inst_47363);
var state_47407__$1 = state_47407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47407__$1,(18),out,inst_47394);
} else {
if((state_val_47408 === (13))){
var inst_47389 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
var statearr_47416_48310 = state_47407__$1;
(statearr_47416_48310[(2)] = inst_47389);

(statearr_47416_48310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (6))){
var inst_47363 = (state_47407[(8)]);
var inst_47391 = inst_47363.length;
var inst_47392 = (inst_47391 > (0));
var state_47407__$1 = state_47407;
if(cljs.core.truth_(inst_47392)){
var statearr_47417_48311 = state_47407__$1;
(statearr_47417_48311[(1)] = (15));

} else {
var statearr_47418_48312 = state_47407__$1;
(statearr_47418_48312[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (17))){
var inst_47399 = (state_47407[(2)]);
var inst_47400 = cljs.core.async.close_BANG_(out);
var state_47407__$1 = (function (){var statearr_47419 = state_47407;
(statearr_47419[(10)] = inst_47399);

return statearr_47419;
})();
var statearr_47420_48314 = state_47407__$1;
(statearr_47420_48314[(2)] = inst_47400);

(statearr_47420_48314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (3))){
var inst_47404 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47407__$1,inst_47404);
} else {
if((state_val_47408 === (12))){
var inst_47363 = (state_47407[(8)]);
var inst_47382 = cljs.core.vec(inst_47363);
var state_47407__$1 = state_47407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47407__$1,(14),out,inst_47382);
} else {
if((state_val_47408 === (2))){
var state_47407__$1 = state_47407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47407__$1,(4),ch);
} else {
if((state_val_47408 === (11))){
var inst_47367 = (state_47407[(9)]);
var inst_47363 = (state_47407[(8)]);
var inst_47371 = (state_47407[(11)]);
var inst_47379 = inst_47363.push(inst_47367);
var tmp47421 = inst_47363;
var inst_47363__$1 = tmp47421;
var inst_47364 = inst_47371;
var state_47407__$1 = (function (){var statearr_47423 = state_47407;
(statearr_47423[(12)] = inst_47379);

(statearr_47423[(7)] = inst_47364);

(statearr_47423[(8)] = inst_47363__$1);

return statearr_47423;
})();
var statearr_47424_48316 = state_47407__$1;
(statearr_47424_48316[(2)] = null);

(statearr_47424_48316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (9))){
var inst_47364 = (state_47407[(7)]);
var inst_47375 = cljs.core.keyword_identical_QMARK_(inst_47364,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47407__$1 = state_47407;
var statearr_47425_48317 = state_47407__$1;
(statearr_47425_48317[(2)] = inst_47375);

(statearr_47425_48317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (5))){
var inst_47364 = (state_47407[(7)]);
var inst_47372 = (state_47407[(13)]);
var inst_47367 = (state_47407[(9)]);
var inst_47371 = (state_47407[(11)]);
var inst_47371__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47367) : f.call(null,inst_47367));
var inst_47372__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47371__$1,inst_47364);
var state_47407__$1 = (function (){var statearr_47426 = state_47407;
(statearr_47426[(13)] = inst_47372__$1);

(statearr_47426[(11)] = inst_47371__$1);

return statearr_47426;
})();
if(inst_47372__$1){
var statearr_47427_48319 = state_47407__$1;
(statearr_47427_48319[(1)] = (8));

} else {
var statearr_47428_48320 = state_47407__$1;
(statearr_47428_48320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (14))){
var inst_47367 = (state_47407[(9)]);
var inst_47371 = (state_47407[(11)]);
var inst_47384 = (state_47407[(2)]);
var inst_47385 = [];
var inst_47386 = inst_47385.push(inst_47367);
var inst_47363 = inst_47385;
var inst_47364 = inst_47371;
var state_47407__$1 = (function (){var statearr_47429 = state_47407;
(statearr_47429[(7)] = inst_47364);

(statearr_47429[(14)] = inst_47384);

(statearr_47429[(15)] = inst_47386);

(statearr_47429[(8)] = inst_47363);

return statearr_47429;
})();
var statearr_47430_48321 = state_47407__$1;
(statearr_47430_48321[(2)] = null);

(statearr_47430_48321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (16))){
var state_47407__$1 = state_47407;
var statearr_47433_48324 = state_47407__$1;
(statearr_47433_48324[(2)] = null);

(statearr_47433_48324[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (10))){
var inst_47377 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
if(cljs.core.truth_(inst_47377)){
var statearr_47435_48326 = state_47407__$1;
(statearr_47435_48326[(1)] = (11));

} else {
var statearr_47436_48327 = state_47407__$1;
(statearr_47436_48327[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (18))){
var inst_47396 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
var statearr_47438_48328 = state_47407__$1;
(statearr_47438_48328[(2)] = inst_47396);

(statearr_47438_48328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (8))){
var inst_47372 = (state_47407[(13)]);
var state_47407__$1 = state_47407;
var statearr_47441_48329 = state_47407__$1;
(statearr_47441_48329[(2)] = inst_47372);

(statearr_47441_48329[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44436__auto__ = null;
var cljs$core$async$state_machine__44436__auto____0 = (function (){
var statearr_47445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47445[(0)] = cljs$core$async$state_machine__44436__auto__);

(statearr_47445[(1)] = (1));

return statearr_47445;
});
var cljs$core$async$state_machine__44436__auto____1 = (function (state_47407){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_47407);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e47446){var ex__44439__auto__ = e47446;
var statearr_47447_48330 = state_47407;
(statearr_47447_48330[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_47407[(4)]))){
var statearr_47449_48331 = state_47407;
(statearr_47449_48331[(1)] = cljs.core.first((state_47407[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48332 = state_47407;
state_47407 = G__48332;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
cljs$core$async$state_machine__44436__auto__ = function(state_47407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44436__auto____1.call(this,state_47407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44436__auto____0;
cljs$core$async$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44436__auto____1;
return cljs$core$async$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_47483 = f__44705__auto__();
(statearr_47483[(6)] = c__44704__auto___48305);

return statearr_47483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
