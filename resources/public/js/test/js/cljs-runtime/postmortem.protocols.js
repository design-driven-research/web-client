goog.provide('postmortem.protocols');

/**
 * @interface
 */
postmortem.protocols.ISession = function(){};


/**
 * @interface
 */
postmortem.protocols.ILogStorage = function(){};

var postmortem$protocols$ILogStorage$_add_item_BANG_$dyn_47695 = (function (this$,id,xform,item){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._add_item_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,xform,item) : m__4510__auto__.call(null,this$,id,xform,item));
} else {
var m__4508__auto__ = (postmortem.protocols._add_item_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,xform,item) : m__4508__auto__.call(null,this$,id,xform,item));
} else {
throw cljs.core.missing_protocol("ILogStorage.-add-item!",this$);
}
}
});
postmortem.protocols._add_item_BANG_ = (function postmortem$protocols$_add_item_BANG_(this$,id,xform,item){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ILogStorage$_add_item_BANG_$arity$4 == null)))))){
return this$.postmortem$protocols$ILogStorage$_add_item_BANG_$arity$4(this$,id,xform,item);
} else {
return postmortem$protocols$ILogStorage$_add_item_BANG_$dyn_47695(this$,id,xform,item);
}
});

var postmortem$protocols$ILogStorage$_keys$dyn_47699 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._keys[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (postmortem.protocols._keys["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILogStorage.-keys",this$);
}
}
});
postmortem.protocols._keys = (function postmortem$protocols$_keys(this$){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ILogStorage$_keys$arity$1 == null)))))){
return this$.postmortem$protocols$ILogStorage$_keys$arity$1(this$);
} else {
return postmortem$protocols$ILogStorage$_keys$dyn_47699(this$);
}
});

var postmortem$protocols$ILogStorage$_logs$dyn_47701 = (function() {
var G__47702 = null;
var G__47702__1 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._logs[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (postmortem.protocols._logs["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILogStorage.-logs",this$);
}
}
});
var G__47702__2 = (function (this$,keys){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._logs[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,keys) : m__4510__auto__.call(null,this$,keys));
} else {
var m__4508__auto__ = (postmortem.protocols._logs["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,keys) : m__4508__auto__.call(null,this$,keys));
} else {
throw cljs.core.missing_protocol("ILogStorage.-logs",this$);
}
}
});
G__47702 = function(this$,keys){
switch(arguments.length){
case 1:
return G__47702__1.call(this,this$);
case 2:
return G__47702__2.call(this,this$,keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47702.cljs$core$IFn$_invoke$arity$1 = G__47702__1;
G__47702.cljs$core$IFn$_invoke$arity$2 = G__47702__2;
return G__47702;
})()
;
postmortem.protocols._logs = (function postmortem$protocols$_logs(var_args){
var G__47639 = arguments.length;
switch (G__47639) {
case 1:
return postmortem.protocols._logs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.protocols._logs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.protocols._logs.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ILogStorage$_logs$arity$1 == null)))))){
return this$.postmortem$protocols$ILogStorage$_logs$arity$1(this$);
} else {
return postmortem$protocols$ILogStorage$_logs$dyn_47701(this$);
}
}));

(postmortem.protocols._logs.cljs$core$IFn$_invoke$arity$2 = (function (this$,keys){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ILogStorage$_logs$arity$2 == null)))))){
return this$.postmortem$protocols$ILogStorage$_logs$arity$2(this$,keys);
} else {
return postmortem$protocols$ILogStorage$_logs$dyn_47701(this$,keys);
}
}));

(postmortem.protocols._logs.cljs$lang$maxFixedArity = 2);


var postmortem$protocols$ILogStorage$_reset_BANG_$dyn_47743 = (function() {
var G__47745 = null;
var G__47745__1 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._reset_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (postmortem.protocols._reset_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILogStorage.-reset!",this$);
}
}
});
var G__47745__2 = (function (this$,keys){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._reset_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,keys) : m__4510__auto__.call(null,this$,keys));
} else {
var m__4508__auto__ = (postmortem.protocols._reset_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,keys) : m__4508__auto__.call(null,this$,keys));
} else {
throw cljs.core.missing_protocol("ILogStorage.-reset!",this$);
}
}
});
G__47745 = function(this$,keys){
switch(arguments.length){
case 1:
return G__47745__1.call(this,this$);
case 2:
return G__47745__2.call(this,this$,keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47745.cljs$core$IFn$_invoke$arity$1 = G__47745__1;
G__47745.cljs$core$IFn$_invoke$arity$2 = G__47745__2;
return G__47745;
})()
;
postmortem.protocols._reset_BANG_ = (function postmortem$protocols$_reset_BANG_(var_args){
var G__47650 = arguments.length;
switch (G__47650) {
case 1:
return postmortem.protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ILogStorage$_reset_BANG_$arity$1 == null)))))){
return this$.postmortem$protocols$ILogStorage$_reset_BANG_$arity$1(this$);
} else {
return postmortem$protocols$ILogStorage$_reset_BANG_$dyn_47743(this$);
}
}));

(postmortem.protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,keys){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ILogStorage$_reset_BANG_$arity$2 == null)))))){
return this$.postmortem$protocols$ILogStorage$_reset_BANG_$arity$2(this$,keys);
} else {
return postmortem$protocols$ILogStorage$_reset_BANG_$dyn_47743(this$,keys);
}
}));

(postmortem.protocols._reset_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
postmortem.protocols.ICompletable = function(){};

var postmortem$protocols$ICompletable$_completed_QMARK_$dyn_47754 = (function (this$,key){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._completed_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__4510__auto__.call(null,this$,key));
} else {
var m__4508__auto__ = (postmortem.protocols._completed_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__4508__auto__.call(null,this$,key));
} else {
throw cljs.core.missing_protocol("ICompletable.-completed?",this$);
}
}
});
postmortem.protocols._completed_QMARK_ = (function postmortem$protocols$_completed_QMARK_(this$,key){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ICompletable$_completed_QMARK_$arity$2 == null)))))){
return this$.postmortem$protocols$ICompletable$_completed_QMARK_$arity$2(this$,key);
} else {
return postmortem$protocols$ICompletable$_completed_QMARK_$dyn_47754(this$,key);
}
});

var postmortem$protocols$ICompletable$_complete_BANG_$dyn_47759 = (function() {
var G__47760 = null;
var G__47760__1 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._complete_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (postmortem.protocols._complete_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICompletable.-complete!",this$);
}
}
});
var G__47760__2 = (function (this$,keys){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (postmortem.protocols._complete_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,keys) : m__4510__auto__.call(null,this$,keys));
} else {
var m__4508__auto__ = (postmortem.protocols._complete_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,keys) : m__4508__auto__.call(null,this$,keys));
} else {
throw cljs.core.missing_protocol("ICompletable.-complete!",this$);
}
}
});
G__47760 = function(this$,keys){
switch(arguments.length){
case 1:
return G__47760__1.call(this,this$);
case 2:
return G__47760__2.call(this,this$,keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47760.cljs$core$IFn$_invoke$arity$1 = G__47760__1;
G__47760.cljs$core$IFn$_invoke$arity$2 = G__47760__2;
return G__47760;
})()
;
postmortem.protocols._complete_BANG_ = (function postmortem$protocols$_complete_BANG_(var_args){
var G__47678 = arguments.length;
switch (G__47678) {
case 1:
return postmortem.protocols._complete_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return postmortem.protocols._complete_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(postmortem.protocols._complete_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ICompletable$_complete_BANG_$arity$1 == null)))))){
return this$.postmortem$protocols$ICompletable$_complete_BANG_$arity$1(this$);
} else {
return postmortem$protocols$ICompletable$_complete_BANG_$dyn_47759(this$);
}
}));

(postmortem.protocols._complete_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,keys){
if((((!((this$ == null)))) && ((!((this$.postmortem$protocols$ICompletable$_complete_BANG_$arity$2 == null)))))){
return this$.postmortem$protocols$ICompletable$_complete_BANG_$arity$2(this$,keys);
} else {
return postmortem$protocols$ICompletable$_complete_BANG_$dyn_47759(this$,keys);
}
}));

(postmortem.protocols._complete_BANG_.cljs$lang$maxFixedArity = 2);



//# sourceMappingURL=postmortem.protocols.js.map
