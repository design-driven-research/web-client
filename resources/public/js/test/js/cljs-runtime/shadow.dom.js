goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48681 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48681(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48682 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48682(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47675 = coll;
var G__47676 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47675,G__47676) : shadow.dom.lazy_native_coll_seq.call(null,G__47675,G__47676));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47683 = arguments.length;
switch (G__47683) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47688 = arguments.length;
switch (G__47688) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47692 = arguments.length;
switch (G__47692) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47723 = arguments.length;
switch (G__47723) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47803 = arguments.length;
switch (G__47803) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47867 = arguments.length;
switch (G__47867) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47890){if((e47890 instanceof Object)){
var e = e47890;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47890;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47931 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47932 = null;
var count__47933 = (0);
var i__47934 = (0);
while(true){
if((i__47934 < count__47933)){
var el = chunk__47932.cljs$core$IIndexed$_nth$arity$2(null,i__47934);
var handler_48723__$1 = ((function (seq__47931,chunk__47932,count__47933,i__47934,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47931,chunk__47932,count__47933,i__47934,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48723__$1);


var G__48726 = seq__47931;
var G__48727 = chunk__47932;
var G__48728 = count__47933;
var G__48729 = (i__47934 + (1));
seq__47931 = G__48726;
chunk__47932 = G__48727;
count__47933 = G__48728;
i__47934 = G__48729;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47931);
if(temp__5753__auto__){
var seq__47931__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47931__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47931__$1);
var G__48731 = cljs.core.chunk_rest(seq__47931__$1);
var G__48732 = c__4638__auto__;
var G__48733 = cljs.core.count(c__4638__auto__);
var G__48734 = (0);
seq__47931 = G__48731;
chunk__47932 = G__48732;
count__47933 = G__48733;
i__47934 = G__48734;
continue;
} else {
var el = cljs.core.first(seq__47931__$1);
var handler_48735__$1 = ((function (seq__47931,chunk__47932,count__47933,i__47934,el,seq__47931__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47931,chunk__47932,count__47933,i__47934,el,seq__47931__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48735__$1);


var G__48736 = cljs.core.next(seq__47931__$1);
var G__48737 = null;
var G__48738 = (0);
var G__48739 = (0);
seq__47931 = G__48736;
chunk__47932 = G__48737;
count__47933 = G__48738;
i__47934 = G__48739;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47963 = arguments.length;
switch (G__47963) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47975 = cljs.core.seq(events);
var chunk__47976 = null;
var count__47977 = (0);
var i__47978 = (0);
while(true){
if((i__47978 < count__47977)){
var vec__47995 = chunk__47976.cljs$core$IIndexed$_nth$arity$2(null,i__47978);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47995,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48743 = seq__47975;
var G__48744 = chunk__47976;
var G__48745 = count__47977;
var G__48746 = (i__47978 + (1));
seq__47975 = G__48743;
chunk__47976 = G__48744;
count__47977 = G__48745;
i__47978 = G__48746;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47975);
if(temp__5753__auto__){
var seq__47975__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47975__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47975__$1);
var G__48747 = cljs.core.chunk_rest(seq__47975__$1);
var G__48748 = c__4638__auto__;
var G__48749 = cljs.core.count(c__4638__auto__);
var G__48750 = (0);
seq__47975 = G__48747;
chunk__47976 = G__48748;
count__47977 = G__48749;
i__47978 = G__48750;
continue;
} else {
var vec__48003 = cljs.core.first(seq__47975__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48003,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48753 = cljs.core.next(seq__47975__$1);
var G__48754 = null;
var G__48756 = (0);
var G__48757 = (0);
seq__47975 = G__48753;
chunk__47976 = G__48754;
count__47977 = G__48756;
i__47978 = G__48757;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48012 = cljs.core.seq(styles);
var chunk__48013 = null;
var count__48014 = (0);
var i__48015 = (0);
while(true){
if((i__48015 < count__48014)){
var vec__48026 = chunk__48013.cljs$core$IIndexed$_nth$arity$2(null,i__48015);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48026,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48759 = seq__48012;
var G__48760 = chunk__48013;
var G__48761 = count__48014;
var G__48762 = (i__48015 + (1));
seq__48012 = G__48759;
chunk__48013 = G__48760;
count__48014 = G__48761;
i__48015 = G__48762;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48012);
if(temp__5753__auto__){
var seq__48012__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48012__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48012__$1);
var G__48764 = cljs.core.chunk_rest(seq__48012__$1);
var G__48765 = c__4638__auto__;
var G__48766 = cljs.core.count(c__4638__auto__);
var G__48767 = (0);
seq__48012 = G__48764;
chunk__48013 = G__48765;
count__48014 = G__48766;
i__48015 = G__48767;
continue;
} else {
var vec__48030 = cljs.core.first(seq__48012__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48768 = cljs.core.next(seq__48012__$1);
var G__48769 = null;
var G__48770 = (0);
var G__48771 = (0);
seq__48012 = G__48768;
chunk__48013 = G__48769;
count__48014 = G__48770;
i__48015 = G__48771;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48039_48772 = key;
var G__48039_48773__$1 = (((G__48039_48772 instanceof cljs.core.Keyword))?G__48039_48772.fqn:null);
switch (G__48039_48773__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48775 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_48775,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_48775,"aria-");
}
})())){
el.setAttribute(ks_48775,value);
} else {
(el[ks_48775] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48127){
var map__48129 = p__48127;
var map__48129__$1 = cljs.core.__destructure_map(map__48129);
var props = map__48129__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48129__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48132 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48142 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48142,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48142;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48150 = arguments.length;
switch (G__48150) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48162){
var vec__48163 = p__48162;
var seq__48164 = cljs.core.seq(vec__48163);
var first__48165 = cljs.core.first(seq__48164);
var seq__48164__$1 = cljs.core.next(seq__48164);
var nn = first__48165;
var first__48165__$1 = cljs.core.first(seq__48164__$1);
var seq__48164__$2 = cljs.core.next(seq__48164__$1);
var np = first__48165__$1;
var nc = seq__48164__$2;
var node = vec__48163;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48168 = nn;
var G__48169 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48168,G__48169) : create_fn.call(null,G__48168,G__48169));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48171 = nn;
var G__48172 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48171,G__48172) : create_fn.call(null,G__48171,G__48172));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48179 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48179,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48179,(1),null);
var seq__48183_48782 = cljs.core.seq(node_children);
var chunk__48184_48783 = null;
var count__48185_48784 = (0);
var i__48186_48785 = (0);
while(true){
if((i__48186_48785 < count__48185_48784)){
var child_struct_48790 = chunk__48184_48783.cljs$core$IIndexed$_nth$arity$2(null,i__48186_48785);
var children_48791 = shadow.dom.dom_node(child_struct_48790);
if(cljs.core.seq_QMARK_(children_48791)){
var seq__48214_48792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48791));
var chunk__48216_48793 = null;
var count__48217_48794 = (0);
var i__48218_48795 = (0);
while(true){
if((i__48218_48795 < count__48217_48794)){
var child_48796 = chunk__48216_48793.cljs$core$IIndexed$_nth$arity$2(null,i__48218_48795);
if(cljs.core.truth_(child_48796)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48796);


var G__48797 = seq__48214_48792;
var G__48798 = chunk__48216_48793;
var G__48799 = count__48217_48794;
var G__48800 = (i__48218_48795 + (1));
seq__48214_48792 = G__48797;
chunk__48216_48793 = G__48798;
count__48217_48794 = G__48799;
i__48218_48795 = G__48800;
continue;
} else {
var G__48801 = seq__48214_48792;
var G__48802 = chunk__48216_48793;
var G__48803 = count__48217_48794;
var G__48804 = (i__48218_48795 + (1));
seq__48214_48792 = G__48801;
chunk__48216_48793 = G__48802;
count__48217_48794 = G__48803;
i__48218_48795 = G__48804;
continue;
}
} else {
var temp__5753__auto___48805 = cljs.core.seq(seq__48214_48792);
if(temp__5753__auto___48805){
var seq__48214_48806__$1 = temp__5753__auto___48805;
if(cljs.core.chunked_seq_QMARK_(seq__48214_48806__$1)){
var c__4638__auto___48807 = cljs.core.chunk_first(seq__48214_48806__$1);
var G__48808 = cljs.core.chunk_rest(seq__48214_48806__$1);
var G__48809 = c__4638__auto___48807;
var G__48810 = cljs.core.count(c__4638__auto___48807);
var G__48811 = (0);
seq__48214_48792 = G__48808;
chunk__48216_48793 = G__48809;
count__48217_48794 = G__48810;
i__48218_48795 = G__48811;
continue;
} else {
var child_48812 = cljs.core.first(seq__48214_48806__$1);
if(cljs.core.truth_(child_48812)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48812);


var G__48813 = cljs.core.next(seq__48214_48806__$1);
var G__48814 = null;
var G__48815 = (0);
var G__48816 = (0);
seq__48214_48792 = G__48813;
chunk__48216_48793 = G__48814;
count__48217_48794 = G__48815;
i__48218_48795 = G__48816;
continue;
} else {
var G__48817 = cljs.core.next(seq__48214_48806__$1);
var G__48818 = null;
var G__48819 = (0);
var G__48820 = (0);
seq__48214_48792 = G__48817;
chunk__48216_48793 = G__48818;
count__48217_48794 = G__48819;
i__48218_48795 = G__48820;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48791);
}


var G__48821 = seq__48183_48782;
var G__48822 = chunk__48184_48783;
var G__48823 = count__48185_48784;
var G__48824 = (i__48186_48785 + (1));
seq__48183_48782 = G__48821;
chunk__48184_48783 = G__48822;
count__48185_48784 = G__48823;
i__48186_48785 = G__48824;
continue;
} else {
var temp__5753__auto___48825 = cljs.core.seq(seq__48183_48782);
if(temp__5753__auto___48825){
var seq__48183_48826__$1 = temp__5753__auto___48825;
if(cljs.core.chunked_seq_QMARK_(seq__48183_48826__$1)){
var c__4638__auto___48827 = cljs.core.chunk_first(seq__48183_48826__$1);
var G__48828 = cljs.core.chunk_rest(seq__48183_48826__$1);
var G__48829 = c__4638__auto___48827;
var G__48830 = cljs.core.count(c__4638__auto___48827);
var G__48831 = (0);
seq__48183_48782 = G__48828;
chunk__48184_48783 = G__48829;
count__48185_48784 = G__48830;
i__48186_48785 = G__48831;
continue;
} else {
var child_struct_48832 = cljs.core.first(seq__48183_48826__$1);
var children_48833 = shadow.dom.dom_node(child_struct_48832);
if(cljs.core.seq_QMARK_(children_48833)){
var seq__48242_48834 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48833));
var chunk__48244_48835 = null;
var count__48245_48836 = (0);
var i__48246_48837 = (0);
while(true){
if((i__48246_48837 < count__48245_48836)){
var child_48838 = chunk__48244_48835.cljs$core$IIndexed$_nth$arity$2(null,i__48246_48837);
if(cljs.core.truth_(child_48838)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48838);


var G__48839 = seq__48242_48834;
var G__48840 = chunk__48244_48835;
var G__48841 = count__48245_48836;
var G__48842 = (i__48246_48837 + (1));
seq__48242_48834 = G__48839;
chunk__48244_48835 = G__48840;
count__48245_48836 = G__48841;
i__48246_48837 = G__48842;
continue;
} else {
var G__48843 = seq__48242_48834;
var G__48844 = chunk__48244_48835;
var G__48845 = count__48245_48836;
var G__48846 = (i__48246_48837 + (1));
seq__48242_48834 = G__48843;
chunk__48244_48835 = G__48844;
count__48245_48836 = G__48845;
i__48246_48837 = G__48846;
continue;
}
} else {
var temp__5753__auto___48847__$1 = cljs.core.seq(seq__48242_48834);
if(temp__5753__auto___48847__$1){
var seq__48242_48848__$1 = temp__5753__auto___48847__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48242_48848__$1)){
var c__4638__auto___48849 = cljs.core.chunk_first(seq__48242_48848__$1);
var G__48850 = cljs.core.chunk_rest(seq__48242_48848__$1);
var G__48851 = c__4638__auto___48849;
var G__48852 = cljs.core.count(c__4638__auto___48849);
var G__48853 = (0);
seq__48242_48834 = G__48850;
chunk__48244_48835 = G__48851;
count__48245_48836 = G__48852;
i__48246_48837 = G__48853;
continue;
} else {
var child_48854 = cljs.core.first(seq__48242_48848__$1);
if(cljs.core.truth_(child_48854)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48854);


var G__48855 = cljs.core.next(seq__48242_48848__$1);
var G__48856 = null;
var G__48857 = (0);
var G__48858 = (0);
seq__48242_48834 = G__48855;
chunk__48244_48835 = G__48856;
count__48245_48836 = G__48857;
i__48246_48837 = G__48858;
continue;
} else {
var G__48859 = cljs.core.next(seq__48242_48848__$1);
var G__48860 = null;
var G__48861 = (0);
var G__48862 = (0);
seq__48242_48834 = G__48859;
chunk__48244_48835 = G__48860;
count__48245_48836 = G__48861;
i__48246_48837 = G__48862;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48833);
}


var G__48863 = cljs.core.next(seq__48183_48826__$1);
var G__48864 = null;
var G__48865 = (0);
var G__48866 = (0);
seq__48183_48782 = G__48863;
chunk__48184_48783 = G__48864;
count__48185_48784 = G__48865;
i__48186_48785 = G__48866;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48294 = cljs.core.seq(node);
var chunk__48295 = null;
var count__48296 = (0);
var i__48297 = (0);
while(true){
if((i__48297 < count__48296)){
var n = chunk__48295.cljs$core$IIndexed$_nth$arity$2(null,i__48297);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48871 = seq__48294;
var G__48872 = chunk__48295;
var G__48873 = count__48296;
var G__48874 = (i__48297 + (1));
seq__48294 = G__48871;
chunk__48295 = G__48872;
count__48296 = G__48873;
i__48297 = G__48874;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48294);
if(temp__5753__auto__){
var seq__48294__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48294__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48294__$1);
var G__48875 = cljs.core.chunk_rest(seq__48294__$1);
var G__48876 = c__4638__auto__;
var G__48877 = cljs.core.count(c__4638__auto__);
var G__48878 = (0);
seq__48294 = G__48875;
chunk__48295 = G__48876;
count__48296 = G__48877;
i__48297 = G__48878;
continue;
} else {
var n = cljs.core.first(seq__48294__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48879 = cljs.core.next(seq__48294__$1);
var G__48880 = null;
var G__48881 = (0);
var G__48882 = (0);
seq__48294 = G__48879;
chunk__48295 = G__48880;
count__48296 = G__48881;
i__48297 = G__48882;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48315 = arguments.length;
switch (G__48315) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48325 = arguments.length;
switch (G__48325) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48338 = arguments.length;
switch (G__48338) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48889 = arguments.length;
var i__4819__auto___48890 = (0);
while(true){
if((i__4819__auto___48890 < len__4818__auto___48889)){
args__4824__auto__.push((arguments[i__4819__auto___48890]));

var G__48891 = (i__4819__auto___48890 + (1));
i__4819__auto___48890 = G__48891;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48348_48892 = cljs.core.seq(nodes);
var chunk__48349_48893 = null;
var count__48350_48894 = (0);
var i__48351_48895 = (0);
while(true){
if((i__48351_48895 < count__48350_48894)){
var node_48896 = chunk__48349_48893.cljs$core$IIndexed$_nth$arity$2(null,i__48351_48895);
fragment.appendChild(shadow.dom._to_dom(node_48896));


var G__48898 = seq__48348_48892;
var G__48899 = chunk__48349_48893;
var G__48900 = count__48350_48894;
var G__48901 = (i__48351_48895 + (1));
seq__48348_48892 = G__48898;
chunk__48349_48893 = G__48899;
count__48350_48894 = G__48900;
i__48351_48895 = G__48901;
continue;
} else {
var temp__5753__auto___48908 = cljs.core.seq(seq__48348_48892);
if(temp__5753__auto___48908){
var seq__48348_48909__$1 = temp__5753__auto___48908;
if(cljs.core.chunked_seq_QMARK_(seq__48348_48909__$1)){
var c__4638__auto___48910 = cljs.core.chunk_first(seq__48348_48909__$1);
var G__48911 = cljs.core.chunk_rest(seq__48348_48909__$1);
var G__48912 = c__4638__auto___48910;
var G__48913 = cljs.core.count(c__4638__auto___48910);
var G__48914 = (0);
seq__48348_48892 = G__48911;
chunk__48349_48893 = G__48912;
count__48350_48894 = G__48913;
i__48351_48895 = G__48914;
continue;
} else {
var node_48915 = cljs.core.first(seq__48348_48909__$1);
fragment.appendChild(shadow.dom._to_dom(node_48915));


var G__48916 = cljs.core.next(seq__48348_48909__$1);
var G__48917 = null;
var G__48918 = (0);
var G__48919 = (0);
seq__48348_48892 = G__48916;
chunk__48349_48893 = G__48917;
count__48350_48894 = G__48918;
i__48351_48895 = G__48919;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48347){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48347));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48381_48921 = cljs.core.seq(scripts);
var chunk__48382_48922 = null;
var count__48383_48923 = (0);
var i__48384_48924 = (0);
while(true){
if((i__48384_48924 < count__48383_48923)){
var vec__48394_48925 = chunk__48382_48922.cljs$core$IIndexed$_nth$arity$2(null,i__48384_48924);
var script_tag_48926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394_48925,(0),null);
var script_body_48927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394_48925,(1),null);
eval(script_body_48927);


var G__48928 = seq__48381_48921;
var G__48929 = chunk__48382_48922;
var G__48930 = count__48383_48923;
var G__48931 = (i__48384_48924 + (1));
seq__48381_48921 = G__48928;
chunk__48382_48922 = G__48929;
count__48383_48923 = G__48930;
i__48384_48924 = G__48931;
continue;
} else {
var temp__5753__auto___48932 = cljs.core.seq(seq__48381_48921);
if(temp__5753__auto___48932){
var seq__48381_48933__$1 = temp__5753__auto___48932;
if(cljs.core.chunked_seq_QMARK_(seq__48381_48933__$1)){
var c__4638__auto___48934 = cljs.core.chunk_first(seq__48381_48933__$1);
var G__48935 = cljs.core.chunk_rest(seq__48381_48933__$1);
var G__48936 = c__4638__auto___48934;
var G__48937 = cljs.core.count(c__4638__auto___48934);
var G__48938 = (0);
seq__48381_48921 = G__48935;
chunk__48382_48922 = G__48936;
count__48383_48923 = G__48937;
i__48384_48924 = G__48938;
continue;
} else {
var vec__48397_48939 = cljs.core.first(seq__48381_48933__$1);
var script_tag_48940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48397_48939,(0),null);
var script_body_48941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48397_48939,(1),null);
eval(script_body_48941);


var G__48942 = cljs.core.next(seq__48381_48933__$1);
var G__48943 = null;
var G__48944 = (0);
var G__48945 = (0);
seq__48381_48921 = G__48942;
chunk__48382_48922 = G__48943;
count__48383_48923 = G__48944;
i__48384_48924 = G__48945;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48400){
var vec__48401 = p__48400;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48409 = arguments.length;
switch (G__48409) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48418 = cljs.core.seq(style_keys);
var chunk__48419 = null;
var count__48420 = (0);
var i__48421 = (0);
while(true){
if((i__48421 < count__48420)){
var it = chunk__48419.cljs$core$IIndexed$_nth$arity$2(null,i__48421);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48981 = seq__48418;
var G__48982 = chunk__48419;
var G__48983 = count__48420;
var G__48984 = (i__48421 + (1));
seq__48418 = G__48981;
chunk__48419 = G__48982;
count__48420 = G__48983;
i__48421 = G__48984;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48418);
if(temp__5753__auto__){
var seq__48418__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48418__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48418__$1);
var G__48985 = cljs.core.chunk_rest(seq__48418__$1);
var G__48986 = c__4638__auto__;
var G__48987 = cljs.core.count(c__4638__auto__);
var G__48988 = (0);
seq__48418 = G__48985;
chunk__48419 = G__48986;
count__48420 = G__48987;
i__48421 = G__48988;
continue;
} else {
var it = cljs.core.first(seq__48418__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48989 = cljs.core.next(seq__48418__$1);
var G__48990 = null;
var G__48991 = (0);
var G__48992 = (0);
seq__48418 = G__48989;
chunk__48419 = G__48990;
count__48420 = G__48991;
i__48421 = G__48992;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k48425,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__48434 = k48425;
var G__48434__$1 = (((G__48434 instanceof cljs.core.Keyword))?G__48434.fqn:null);
switch (G__48434__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48425,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__48435){
var vec__48436 = p__48435;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48436,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48436,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48424){
var self__ = this;
var G__48424__$1 = this;
return (new cljs.core.RecordIter((0),G__48424__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48426,other48427){
var self__ = this;
var this48426__$1 = this;
return (((!((other48427 == null)))) && ((((this48426__$1.constructor === other48427.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48426__$1.x,other48427.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48426__$1.y,other48427.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48426__$1.__extmap,other48427.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k48425){
var self__ = this;
var this__4468__auto____$1 = this;
var G__48443 = k48425;
var G__48443__$1 = (((G__48443 instanceof cljs.core.Keyword))?G__48443.fqn:null);
switch (G__48443__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48425);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__48424){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__48445 = cljs.core.keyword_identical_QMARK_;
var expr__48446 = k__4470__auto__;
if(cljs.core.truth_((pred__48445.cljs$core$IFn$_invoke$arity$2 ? pred__48445.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48446) : pred__48445.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48446)))){
return (new shadow.dom.Coordinate(G__48424,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48445.cljs$core$IFn$_invoke$arity$2 ? pred__48445.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48446) : pred__48445.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48446)))){
return (new shadow.dom.Coordinate(self__.x,G__48424,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__48424),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__48424){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48424,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48429){
var extmap__4501__auto__ = (function (){var G__48452 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48429,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48429)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48452);
} else {
return G__48452;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48429),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48429),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k48457,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__48461 = k48457;
var G__48461__$1 = (((G__48461 instanceof cljs.core.Keyword))?G__48461.fqn:null);
switch (G__48461__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48457,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__48466){
var vec__48467 = p__48466;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48467,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48467,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48456){
var self__ = this;
var G__48456__$1 = this;
return (new cljs.core.RecordIter((0),G__48456__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48458,other48459){
var self__ = this;
var this48458__$1 = this;
return (((!((other48459 == null)))) && ((((this48458__$1.constructor === other48459.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.w,other48459.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.h,other48459.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.__extmap,other48459.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k48457){
var self__ = this;
var this__4468__auto____$1 = this;
var G__48474 = k48457;
var G__48474__$1 = (((G__48474 instanceof cljs.core.Keyword))?G__48474.fqn:null);
switch (G__48474__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48457);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__48456){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__48477 = cljs.core.keyword_identical_QMARK_;
var expr__48478 = k__4470__auto__;
if(cljs.core.truth_((pred__48477.cljs$core$IFn$_invoke$arity$2 ? pred__48477.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48478) : pred__48477.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48478)))){
return (new shadow.dom.Size(G__48456,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48477.cljs$core$IFn$_invoke$arity$2 ? pred__48477.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48478) : pred__48477.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48478)))){
return (new shadow.dom.Size(self__.w,G__48456,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__48456),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__48456){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48456,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48460){
var extmap__4501__auto__ = (function (){var G__48483 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48460,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48460)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48483);
} else {
return G__48483;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48460),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48460),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__49026 = (i + (1));
var G__49027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49026;
ret = G__49027;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48488){
var vec__48489 = p__48488;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48489,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48494 = arguments.length;
switch (G__48494) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49034 = ps;
var G__49035 = (i + (1));
el__$1 = G__49034;
i = G__49035;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48516 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48516,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48516,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48516,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48525_49039 = cljs.core.seq(props);
var chunk__48526_49040 = null;
var count__48527_49041 = (0);
var i__48528_49042 = (0);
while(true){
if((i__48528_49042 < count__48527_49041)){
var vec__48555_49043 = chunk__48526_49040.cljs$core$IIndexed$_nth$arity$2(null,i__48528_49042);
var k_49044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555_49043,(0),null);
var v_49045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555_49043,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_49044);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49044),v_49045);


var G__49046 = seq__48525_49039;
var G__49047 = chunk__48526_49040;
var G__49048 = count__48527_49041;
var G__49049 = (i__48528_49042 + (1));
seq__48525_49039 = G__49046;
chunk__48526_49040 = G__49047;
count__48527_49041 = G__49048;
i__48528_49042 = G__49049;
continue;
} else {
var temp__5753__auto___49050 = cljs.core.seq(seq__48525_49039);
if(temp__5753__auto___49050){
var seq__48525_49051__$1 = temp__5753__auto___49050;
if(cljs.core.chunked_seq_QMARK_(seq__48525_49051__$1)){
var c__4638__auto___49052 = cljs.core.chunk_first(seq__48525_49051__$1);
var G__49053 = cljs.core.chunk_rest(seq__48525_49051__$1);
var G__49054 = c__4638__auto___49052;
var G__49055 = cljs.core.count(c__4638__auto___49052);
var G__49056 = (0);
seq__48525_49039 = G__49053;
chunk__48526_49040 = G__49054;
count__48527_49041 = G__49055;
i__48528_49042 = G__49056;
continue;
} else {
var vec__48559_49057 = cljs.core.first(seq__48525_49051__$1);
var k_49058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48559_49057,(0),null);
var v_49059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48559_49057,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_49058);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49058),v_49059);


var G__49060 = cljs.core.next(seq__48525_49051__$1);
var G__49061 = null;
var G__49062 = (0);
var G__49063 = (0);
seq__48525_49039 = G__49060;
chunk__48526_49040 = G__49061;
count__48527_49041 = G__49062;
i__48528_49042 = G__49063;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48565 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48565,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48565,(1),null);
var seq__48568_49071 = cljs.core.seq(node_children);
var chunk__48570_49072 = null;
var count__48571_49073 = (0);
var i__48572_49074 = (0);
while(true){
if((i__48572_49074 < count__48571_49073)){
var child_struct_49075 = chunk__48570_49072.cljs$core$IIndexed$_nth$arity$2(null,i__48572_49074);
if((!((child_struct_49075 == null)))){
if(typeof child_struct_49075 === 'string'){
var text_49076 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49076),child_struct_49075].join(''));
} else {
var children_49077 = shadow.dom.svg_node(child_struct_49075);
if(cljs.core.seq_QMARK_(children_49077)){
var seq__48589_49078 = cljs.core.seq(children_49077);
var chunk__48591_49079 = null;
var count__48592_49080 = (0);
var i__48593_49081 = (0);
while(true){
if((i__48593_49081 < count__48592_49080)){
var child_49082 = chunk__48591_49079.cljs$core$IIndexed$_nth$arity$2(null,i__48593_49081);
if(cljs.core.truth_(child_49082)){
node.appendChild(child_49082);


var G__49083 = seq__48589_49078;
var G__49084 = chunk__48591_49079;
var G__49085 = count__48592_49080;
var G__49086 = (i__48593_49081 + (1));
seq__48589_49078 = G__49083;
chunk__48591_49079 = G__49084;
count__48592_49080 = G__49085;
i__48593_49081 = G__49086;
continue;
} else {
var G__49087 = seq__48589_49078;
var G__49088 = chunk__48591_49079;
var G__49089 = count__48592_49080;
var G__49090 = (i__48593_49081 + (1));
seq__48589_49078 = G__49087;
chunk__48591_49079 = G__49088;
count__48592_49080 = G__49089;
i__48593_49081 = G__49090;
continue;
}
} else {
var temp__5753__auto___49091 = cljs.core.seq(seq__48589_49078);
if(temp__5753__auto___49091){
var seq__48589_49092__$1 = temp__5753__auto___49091;
if(cljs.core.chunked_seq_QMARK_(seq__48589_49092__$1)){
var c__4638__auto___49093 = cljs.core.chunk_first(seq__48589_49092__$1);
var G__49094 = cljs.core.chunk_rest(seq__48589_49092__$1);
var G__49095 = c__4638__auto___49093;
var G__49096 = cljs.core.count(c__4638__auto___49093);
var G__49097 = (0);
seq__48589_49078 = G__49094;
chunk__48591_49079 = G__49095;
count__48592_49080 = G__49096;
i__48593_49081 = G__49097;
continue;
} else {
var child_49099 = cljs.core.first(seq__48589_49092__$1);
if(cljs.core.truth_(child_49099)){
node.appendChild(child_49099);


var G__49100 = cljs.core.next(seq__48589_49092__$1);
var G__49101 = null;
var G__49102 = (0);
var G__49103 = (0);
seq__48589_49078 = G__49100;
chunk__48591_49079 = G__49101;
count__48592_49080 = G__49102;
i__48593_49081 = G__49103;
continue;
} else {
var G__49104 = cljs.core.next(seq__48589_49092__$1);
var G__49105 = null;
var G__49106 = (0);
var G__49107 = (0);
seq__48589_49078 = G__49104;
chunk__48591_49079 = G__49105;
count__48592_49080 = G__49106;
i__48593_49081 = G__49107;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49077);
}
}


var G__49108 = seq__48568_49071;
var G__49109 = chunk__48570_49072;
var G__49110 = count__48571_49073;
var G__49111 = (i__48572_49074 + (1));
seq__48568_49071 = G__49108;
chunk__48570_49072 = G__49109;
count__48571_49073 = G__49110;
i__48572_49074 = G__49111;
continue;
} else {
var G__49112 = seq__48568_49071;
var G__49113 = chunk__48570_49072;
var G__49114 = count__48571_49073;
var G__49115 = (i__48572_49074 + (1));
seq__48568_49071 = G__49112;
chunk__48570_49072 = G__49113;
count__48571_49073 = G__49114;
i__48572_49074 = G__49115;
continue;
}
} else {
var temp__5753__auto___49116 = cljs.core.seq(seq__48568_49071);
if(temp__5753__auto___49116){
var seq__48568_49117__$1 = temp__5753__auto___49116;
if(cljs.core.chunked_seq_QMARK_(seq__48568_49117__$1)){
var c__4638__auto___49118 = cljs.core.chunk_first(seq__48568_49117__$1);
var G__49119 = cljs.core.chunk_rest(seq__48568_49117__$1);
var G__49120 = c__4638__auto___49118;
var G__49121 = cljs.core.count(c__4638__auto___49118);
var G__49122 = (0);
seq__48568_49071 = G__49119;
chunk__48570_49072 = G__49120;
count__48571_49073 = G__49121;
i__48572_49074 = G__49122;
continue;
} else {
var child_struct_49123 = cljs.core.first(seq__48568_49117__$1);
if((!((child_struct_49123 == null)))){
if(typeof child_struct_49123 === 'string'){
var text_49124 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49124),child_struct_49123].join(''));
} else {
var children_49125 = shadow.dom.svg_node(child_struct_49123);
if(cljs.core.seq_QMARK_(children_49125)){
var seq__48595_49126 = cljs.core.seq(children_49125);
var chunk__48597_49127 = null;
var count__48598_49128 = (0);
var i__48599_49129 = (0);
while(true){
if((i__48599_49129 < count__48598_49128)){
var child_49130 = chunk__48597_49127.cljs$core$IIndexed$_nth$arity$2(null,i__48599_49129);
if(cljs.core.truth_(child_49130)){
node.appendChild(child_49130);


var G__49131 = seq__48595_49126;
var G__49132 = chunk__48597_49127;
var G__49133 = count__48598_49128;
var G__49135 = (i__48599_49129 + (1));
seq__48595_49126 = G__49131;
chunk__48597_49127 = G__49132;
count__48598_49128 = G__49133;
i__48599_49129 = G__49135;
continue;
} else {
var G__49136 = seq__48595_49126;
var G__49137 = chunk__48597_49127;
var G__49138 = count__48598_49128;
var G__49139 = (i__48599_49129 + (1));
seq__48595_49126 = G__49136;
chunk__48597_49127 = G__49137;
count__48598_49128 = G__49138;
i__48599_49129 = G__49139;
continue;
}
} else {
var temp__5753__auto___49146__$1 = cljs.core.seq(seq__48595_49126);
if(temp__5753__auto___49146__$1){
var seq__48595_49150__$1 = temp__5753__auto___49146__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48595_49150__$1)){
var c__4638__auto___49151 = cljs.core.chunk_first(seq__48595_49150__$1);
var G__49152 = cljs.core.chunk_rest(seq__48595_49150__$1);
var G__49153 = c__4638__auto___49151;
var G__49154 = cljs.core.count(c__4638__auto___49151);
var G__49155 = (0);
seq__48595_49126 = G__49152;
chunk__48597_49127 = G__49153;
count__48598_49128 = G__49154;
i__48599_49129 = G__49155;
continue;
} else {
var child_49156 = cljs.core.first(seq__48595_49150__$1);
if(cljs.core.truth_(child_49156)){
node.appendChild(child_49156);


var G__49157 = cljs.core.next(seq__48595_49150__$1);
var G__49158 = null;
var G__49159 = (0);
var G__49160 = (0);
seq__48595_49126 = G__49157;
chunk__48597_49127 = G__49158;
count__48598_49128 = G__49159;
i__48599_49129 = G__49160;
continue;
} else {
var G__49161 = cljs.core.next(seq__48595_49150__$1);
var G__49162 = null;
var G__49163 = (0);
var G__49164 = (0);
seq__48595_49126 = G__49161;
chunk__48597_49127 = G__49162;
count__48598_49128 = G__49163;
i__48599_49129 = G__49164;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49125);
}
}


var G__49168 = cljs.core.next(seq__48568_49117__$1);
var G__49169 = null;
var G__49170 = (0);
var G__49171 = (0);
seq__48568_49071 = G__49168;
chunk__48570_49072 = G__49169;
count__48571_49073 = G__49170;
i__48572_49074 = G__49171;
continue;
} else {
var G__49172 = cljs.core.next(seq__48568_49117__$1);
var G__49173 = null;
var G__49174 = (0);
var G__49175 = (0);
seq__48568_49071 = G__49172;
chunk__48570_49072 = G__49173;
count__48571_49073 = G__49174;
i__48572_49074 = G__49175;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49180 = arguments.length;
var i__4819__auto___49181 = (0);
while(true){
if((i__4819__auto___49181 < len__4818__auto___49180)){
args__4824__auto__.push((arguments[i__4819__auto___49181]));

var G__49182 = (i__4819__auto___49181 + (1));
i__4819__auto___49181 = G__49182;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48612){
var G__48613 = cljs.core.first(seq48612);
var seq48612__$1 = cljs.core.next(seq48612);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48613,seq48612__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48615 = arguments.length;
switch (G__48615) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__44704__auto___49190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44705__auto__ = (function (){var switch__44435__auto__ = (function (state_48628){
var state_val_48629 = (state_48628[(1)]);
if((state_val_48629 === (1))){
var state_48628__$1 = state_48628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48628__$1,(2),once_or_cleanup);
} else {
if((state_val_48629 === (2))){
var inst_48625 = (state_48628[(2)]);
var inst_48626 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48628__$1 = (function (){var statearr_48633 = state_48628;
(statearr_48633[(7)] = inst_48625);

return statearr_48633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48628__$1,inst_48626);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44436__auto__ = null;
var shadow$dom$state_machine__44436__auto____0 = (function (){
var statearr_48634 = [null,null,null,null,null,null,null,null];
(statearr_48634[(0)] = shadow$dom$state_machine__44436__auto__);

(statearr_48634[(1)] = (1));

return statearr_48634;
});
var shadow$dom$state_machine__44436__auto____1 = (function (state_48628){
while(true){
var ret_value__44437__auto__ = (function (){try{while(true){
var result__44438__auto__ = switch__44435__auto__(state_48628);
if(cljs.core.keyword_identical_QMARK_(result__44438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44438__auto__;
}
break;
}
}catch (e48635){var ex__44439__auto__ = e48635;
var statearr_48636_49200 = state_48628;
(statearr_48636_49200[(2)] = ex__44439__auto__);


if(cljs.core.seq((state_48628[(4)]))){
var statearr_48637_49201 = state_48628;
(statearr_48637_49201[(1)] = cljs.core.first((state_48628[(4)])));

} else {
throw ex__44439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49202 = state_48628;
state_48628 = G__49202;
continue;
} else {
return ret_value__44437__auto__;
}
break;
}
});
shadow$dom$state_machine__44436__auto__ = function(state_48628){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44436__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44436__auto____1.call(this,state_48628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44436__auto____0;
shadow$dom$state_machine__44436__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44436__auto____1;
return shadow$dom$state_machine__44436__auto__;
})()
})();
var state__44706__auto__ = (function (){var statearr_48638 = f__44705__auto__();
(statearr_48638[(6)] = c__44704__auto___49190);

return statearr_48638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44706__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
