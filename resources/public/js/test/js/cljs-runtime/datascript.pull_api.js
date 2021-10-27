goog.provide('datascript.pull_api');
datascript.pull_api.into_BANG_ = (function datascript$pull_api$into_BANG_(transient_coll,items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,transient_coll,items);
});
datascript.pull_api._PLUS_default_limit_PLUS_ = (1000);
datascript.pull_api.initial_frame = (function datascript$pull_api$initial_frame(pattern,eids,multi_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"multi?","multi?",-749311069),new cljs.core.Keyword(null,"eids","eids",1546550700),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"kvps","kvps",65308317),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"results","results",-1134170113)],[multi_QMARK_,eids,new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.seq(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),pattern,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)]);
});
datascript.pull_api.subpattern_frame = (function datascript$pull_api$subpattern_frame(pattern,eids,multi_QMARK_,attr){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.initial_frame(pattern,eids,multi_QMARK_),new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
});
datascript.pull_api.reset_frame = (function datascript$pull_api$reset_frame(frame,eids,kvps){
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.seq(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__47864 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__47864,kvps);
} else {
return G__47864;
}
})()], 0));
});
datascript.pull_api.push_recursion = (function datascript$pull_api$push_recursion(rec,attr,eid){
var map__47887 = rec;
var map__47887__$1 = cljs.core.__destructure_map(map__47887);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47887__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47887__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.update.cljs$core$IFn$_invoke$arity$3(depth,attr,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,eid)], 0));
});
datascript.pull_api.seen_eid_QMARK_ = (function datascript$pull_api$seen_eid_QMARK_(frame,eid){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"seen","seen",-518999789)], null),cljs.core.PersistentHashSet.EMPTY),eid);
});
datascript.pull_api.pull_seen_eid = (function datascript$pull_api$pull_seen_eid(frame,frames,eid){
if(datascript.pull_api.seen_eid_QMARK_(frame,eid)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$4(frame,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)));
} else {
return null;
}
});
datascript.pull_api.single_frame_result = (function datascript$pull_api$single_frame_result(key,frame){
var G__47901 = new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame);
var G__47901__$1 = (((G__47901 == null))?null:cljs.core.persistent_BANG_(G__47901));
if((G__47901__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__47901__$1,key);
}
});
datascript.pull_api.recursion_result = (function datascript$pull_api$recursion_result(frame){
return datascript.pull_api.single_frame_result(new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534),frame);
});
datascript.pull_api.recursion_frame = (function datascript$pull_api$recursion_frame(parent,eid){
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(parent);
var rec = datascript.pull_api.push_recursion(new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534)),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});
datascript.pull_api.pull_recursion_frame = (function datascript$pull_api$pull_recursion_frame(db,p__47925){
var vec__47926 = p__47925;
var seq__47927 = cljs.core.seq(vec__47926);
var first__47928 = cljs.core.first(seq__47927);
var seq__47927__$1 = cljs.core.next(seq__47927);
var frame = first__47928;
var frames = seq__47927__$1;
var temp__5751__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5751__auto__){
var eids = temp__5751__auto__;
var frame__$1 = datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),datascript.pull_api.recursion_result(frame));
var eid = cljs.core.first(eids);
var or__4212__auto__ = datascript.pull_api.pull_seen_eid(frame__$1,frames,eid);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.recursion_frame(frame__$1,eid)], 0));
}
} else {
var kvps = datascript.pull_api.recursion_result(frame);
var results = (function (){var G__47930 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__47930,kvps);
} else {
return G__47930;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),results], 0)));
}
});
datascript.pull_api.recurse_attr = (function datascript$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__47931 = parent;
var map__47931__$1 = cljs.core.__destructure_map(map__47931);
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47931__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47931__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recursion,new cljs.core.Keyword(null,"depth","depth",1768663640)),attr,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,parent);
} else {
return datascript.pull_api.pull_recursion_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"multi?","multi?",-749311069),multi_QMARK_,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"recursion","recursion",-749738765),recursion,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null)], 0)));
}
});
var pattern_48082 = (new datascript.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datascript.pull_api.expand_frame = (function datascript$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datascript.pull_api.push_recursion(new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(pattern_48082,eids,multi_QMARK_,attr_key),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});
datascript.pull_api.pull_attr_datoms = (function datascript$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__47938){
var vec__47940 = p__47938;
var seq__47941 = cljs.core.seq(vec__47940);
var first__47942 = cljs.core.first(seq__47941);
var seq__47941__$1 = cljs.core.next(seq__47941);
var parent = first__47942;
var frames = seq__47941__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"limit","limit",-1355822363),(1000));
var attr_key__$1 = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return attr_key;
}
})();
var found = cljs.core.not_empty((function (){var G__47953 = datoms;
if(cljs.core.truth_(limit)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(limit),G__47953);
} else {
return G__47953;
}
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datascript.db.ref_QMARK_(db,attr);
var component_QMARK_ = ((ref_QMARK_) && (datascript.db.component_QMARK_(db,attr)));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datascript.db.multival_QMARK_(db,attr):(!(component_QMARK_)));
var datom_val = (cljs.core.truth_(forward_QMARK_)?(function (d){
return d.v;
}):(function (d){
return d.e;
}));
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"subpattern","subpattern",45002743))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.subpattern_frame(new cljs.core.Keyword(null,"subpattern","subpattern",45002743).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),multi_QMARK_,attr_key__$1)], 0));
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"recursion","recursion",-749738765))){
return datascript.pull_api.recurse_attr(db,attr_key__$1,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = component_QMARK_;
if(and__4210__auto__){
return forward_QMARK_;
} else {
return and__4210__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.expand_frame(parent,eid,attr_key__$1,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found))], 0));
} else {
var as_value = (function (){var G__47963 = datom_val;
if(ref_QMARK_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__47937_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","id","db/id",-1388397098)],[p1__47937_SHARP_]);
}),G__47963);
} else {
return G__47963;
}
})();
var single_QMARK_ = (!(multi_QMARK_));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$5(parent,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key__$1,(function (){var G__47967 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(as_value),found);
if(single_QMARK_){
return cljs.core.first(G__47967);
} else {
return G__47967;
}
})()));

}
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,(function (){var G__47968 = parent;
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__47968,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key__$1,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__47968;
}
})());
}
});
datascript.pull_api.pull_attr = (function datascript$pull_api$pull_attr(db,spec,eid,frames){
var vec__47970 = spec;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47970,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47970,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr_key)){
if(cljs.core.truth_(cljs.core.not_empty(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.first(frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword("db","id","db/id",-1388397098),eid));
} else {
return frames;
}
} else {
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(opts);
var forward_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_key,attr);
var results = ((forward_QMARK_)?datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr], null)):datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,eid], null)));
return datascript.pull_api.pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,results,opts,frames);
}
});
datascript.pull_api.filter_reverse_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__47974){
var vec__47975 = p__47974;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(v));
}));
datascript.pull_api.expand_reverse_subpattern_frame = (function datascript$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datascript.pull_api.subpattern_frame(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),rattrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459));
});
datascript.pull_api.expand_result = (function datascript$pull_api$expand_result(frames,kvps){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.first(frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),datascript.pull_api.into_BANG_,cljs.core.persistent_BANG_(kvps)));
});
datascript.pull_api.pull_expand_reverse_frame = (function datascript$pull_api$pull_expand_reverse_frame(db,p__47986){
var vec__47987 = p__47986;
var seq__47988 = cljs.core.seq(vec__47987);
var first__47989 = cljs.core.first(seq__47988);
var seq__47988__$1 = cljs.core.next(seq__47988);
var frame = first__47989;
var frames = seq__47988__$1;
return datascript.pull_api.expand_result(frames,datascript.pull_api.into_BANG_(new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154).cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__4212__auto__ = datascript.pull_api.single_frame_result(new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459),frame);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datascript.pull_api.pull_expand_frame = (function datascript$pull_api$pull_expand_frame(db,p__47994){
var vec__47998 = p__47994;
var seq__47999 = cljs.core.seq(vec__47998);
var first__48000 = cljs.core.first(seq__47999);
var seq__47999__$1 = cljs.core.next(seq__47999);
var frame = first__48000;
var frames = seq__47999__$1;
var temp__5751__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5751__auto__){
var datoms_by_attr = temp__5751__auto__;
var vec__48001 = cljs.core.first(datoms_by_attr);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48001,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48001,(1),null);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null)),attr,cljs.core.PersistentArrayMap.EMPTY);
return datascript.pull_api.pull_attr_datoms(db,attr,attr,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame),true,datoms,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.rest)));
} else {
var temp__5751__auto____$1 = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,datascript.pull_api.filter_reverse_attrs,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null))));
if(cljs.core.truth_(temp__5751__auto____$1)){
var rattrs = temp__5751__auto____$1;
var frame__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand-rev","expand-rev",1249112650),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154),new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.expand_reverse_subpattern_frame(frame__$1,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame__$1),rattrs)], 0));
} else {
return datascript.pull_api.expand_result(frames,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame));
}
}
});
datascript.pull_api.pull_wildcard_expand = (function datascript$pull_api$pull_wildcard_expand(db,frame,frames,eid,pattern){
var datoms = cljs.core.group_by((function (d){
return d.a;
}),datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));
var map__48010 = frame;
var map__48010__$1 = cljs.core.__destructure_map(map__48010);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48010__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48010__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var rec = (function (){var G__48011 = recursion;
if((!((attr == null)))){
return datascript.pull_api.push_recursion(G__48011,attr,eid);
} else {
return G__48011;
}
})();
return datascript.pull_api.pull_expand_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)),new cljs.core.Keyword(null,"eid","eid",559519930),eid,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.seq(datoms),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec], null)], 0)));
});
datascript.pull_api.pull_wildcard = (function datascript$pull_api$pull_wildcard(db,frame,frames){
var map__48012 = frame;
var map__48012__$1 = cljs.core.__destructure_map(map__48012);
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var or__4212__auto__ = datascript.pull_api.pull_seen_eid(frame,frames,eid);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return datascript.pull_api.pull_wildcard_expand(db,frame,frames,eid,pattern);
}
});
datascript.pull_api.pull_pattern_frame = (function datascript$pull_api$pull_pattern_frame(db,p__48022){
while(true){
var vec__48023 = p__48022;
var seq__48024 = cljs.core.seq(vec__48023);
var first__48025 = cljs.core.first(seq__48024);
var seq__48024__$1 = cljs.core.next(seq__48024);
var frame = first__48025;
var frames = seq__48024__$1;
var temp__5751__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5751__auto__){
var eids = temp__5751__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(frame))){
return datascript.pull_api.pull_wildcard(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eid","eid",559519930),cljs.core.first(eids),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false], 0)),frames);
} else {
var temp__5751__auto____$1 = cljs.core.seq(new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5751__auto____$1){
var specs = temp__5751__auto____$1;
var spec = cljs.core.first(specs);
var new_frames = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.rest(specs)));
if(cljs.core.truth_(cljs.core.first(eids))){
return datascript.pull_api.pull_attr(db,spec,cljs.core.first(eids),new_frames);
} else {
return null;
}
} else {
var G__48111 = db;
var G__48112 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),cljs.core.not_empty(cljs.core.persistent_BANG_(new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__48111;
p__48022 = G__48112;
continue;
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188)));
}
break;
}
});
datascript.pull_api.pull_pattern = (function datascript$pull_api$pull_pattern(db,frames){
while(true){
var G__48030 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames));
var G__48030__$1 = (((G__48030 instanceof cljs.core.Keyword))?G__48030.fqn:null);
switch (G__48030__$1) {
case "expand":
var G__48121 = db;
var G__48122 = datascript.pull_api.pull_expand_frame(db,frames);
db = G__48121;
frames = G__48122;
continue;

break;
case "expand-rev":
var G__48123 = db;
var G__48124 = datascript.pull_api.pull_expand_reverse_frame(db,frames);
db = G__48123;
frames = G__48124;
continue;

break;
case "pattern":
var G__48125 = db;
var G__48126 = datascript.pull_api.pull_pattern_frame(db,frames);
db = G__48125;
frames = G__48126;
continue;

break;
case "recursion":
var G__48127 = db;
var G__48128 = datascript.pull_api.pull_recursion_frame(db,frames);
db = G__48127;
frames = G__48128;
continue;

break;
case "done":
var vec__48032 = frames;
var seq__48033 = cljs.core.seq(vec__48032);
var first__48034 = cljs.core.first(seq__48033);
var seq__48033__$1 = cljs.core.next(seq__48033);
var f = first__48034;
var remaining = seq__48033__$1;
var result = (function (){var G__48038 = cljs.core.persistent_BANG_(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(f));
if(cljs.core.not(new cljs.core.Keyword(null,"multi?","multi?",-749311069).cljs$core$IFn$_invoke$arity$1(f))){
return cljs.core.first(G__48038);
} else {
return G__48038;
}
})();
if(cljs.core.seq(remaining)){
var G__48129 = db;
var G__48130 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(remaining),(function (){var G__48039 = cljs.core.first(remaining);
if(cljs.core.seq(result)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__48039,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(f),result);
} else {
return G__48039;
}
})());
db = G__48129;
frames = G__48130;
continue;
} else {
return result;
}

break;
default:
return null;

}
break;
}
});
datascript.pull_api.pull_spec = (function datascript$pull_api$pull_spec(db,pattern,eid,multi_QMARK_){
return datascript.pull_api.pull_pattern(db,(new cljs.core.List(null,datascript.pull_api.initial_frame(pattern,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.db.entid(db,eid)], null),multi_QMARK_),null,(1),null)));
});
datascript.pull_api.pull = (function datascript$pull_api$pull(db,selector,eid){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec(db,datascript.pull_parser.parse_pull(selector),eid,false);
});
datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(db,selector,eids){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48058_SHARP_){
return datascript.pull_api.pull_spec(db,datascript.pull_parser.parse_pull(selector),p1__48058_SHARP_,false);
}),eids);
});

//# sourceMappingURL=datascript.pull_api.js.map
