goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49406){
var map__49411 = p__49406;
var map__49411__$1 = cljs.core.__destructure_map(map__49411);
var m = map__49411__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49411__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49417_49917 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49418_49918 = null;
var count__49419_49919 = (0);
var i__49420_49920 = (0);
while(true){
if((i__49420_49920 < count__49419_49919)){
var f_49921 = chunk__49418_49918.cljs$core$IIndexed$_nth$arity$2(null,i__49420_49920);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49921], 0));


var G__49922 = seq__49417_49917;
var G__49923 = chunk__49418_49918;
var G__49924 = count__49419_49919;
var G__49925 = (i__49420_49920 + (1));
seq__49417_49917 = G__49922;
chunk__49418_49918 = G__49923;
count__49419_49919 = G__49924;
i__49420_49920 = G__49925;
continue;
} else {
var temp__5753__auto___49926 = cljs.core.seq(seq__49417_49917);
if(temp__5753__auto___49926){
var seq__49417_49927__$1 = temp__5753__auto___49926;
if(cljs.core.chunked_seq_QMARK_(seq__49417_49927__$1)){
var c__4638__auto___49928 = cljs.core.chunk_first(seq__49417_49927__$1);
var G__49929 = cljs.core.chunk_rest(seq__49417_49927__$1);
var G__49930 = c__4638__auto___49928;
var G__49931 = cljs.core.count(c__4638__auto___49928);
var G__49932 = (0);
seq__49417_49917 = G__49929;
chunk__49418_49918 = G__49930;
count__49419_49919 = G__49931;
i__49420_49920 = G__49932;
continue;
} else {
var f_49933 = cljs.core.first(seq__49417_49927__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49933], 0));


var G__49934 = cljs.core.next(seq__49417_49927__$1);
var G__49935 = null;
var G__49936 = (0);
var G__49937 = (0);
seq__49417_49917 = G__49934;
chunk__49418_49918 = G__49935;
count__49419_49919 = G__49936;
i__49420_49920 = G__49937;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49938 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49938], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49938)))?cljs.core.second(arglists_49938):arglists_49938)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49466_49939 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49467_49940 = null;
var count__49468_49941 = (0);
var i__49469_49942 = (0);
while(true){
if((i__49469_49942 < count__49468_49941)){
var vec__49564_49943 = chunk__49467_49940.cljs$core$IIndexed$_nth$arity$2(null,i__49469_49942);
var name_49944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49564_49943,(0),null);
var map__49567_49945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49564_49943,(1),null);
var map__49567_49946__$1 = cljs.core.__destructure_map(map__49567_49945);
var doc_49947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49567_49946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49567_49946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49944], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49948], 0));

if(cljs.core.truth_(doc_49947)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49947], 0));
} else {
}


var G__49949 = seq__49466_49939;
var G__49950 = chunk__49467_49940;
var G__49951 = count__49468_49941;
var G__49952 = (i__49469_49942 + (1));
seq__49466_49939 = G__49949;
chunk__49467_49940 = G__49950;
count__49468_49941 = G__49951;
i__49469_49942 = G__49952;
continue;
} else {
var temp__5753__auto___49953 = cljs.core.seq(seq__49466_49939);
if(temp__5753__auto___49953){
var seq__49466_49954__$1 = temp__5753__auto___49953;
if(cljs.core.chunked_seq_QMARK_(seq__49466_49954__$1)){
var c__4638__auto___49955 = cljs.core.chunk_first(seq__49466_49954__$1);
var G__49956 = cljs.core.chunk_rest(seq__49466_49954__$1);
var G__49957 = c__4638__auto___49955;
var G__49958 = cljs.core.count(c__4638__auto___49955);
var G__49959 = (0);
seq__49466_49939 = G__49956;
chunk__49467_49940 = G__49957;
count__49468_49941 = G__49958;
i__49469_49942 = G__49959;
continue;
} else {
var vec__49579_49960 = cljs.core.first(seq__49466_49954__$1);
var name_49961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49579_49960,(0),null);
var map__49582_49962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49579_49960,(1),null);
var map__49582_49963__$1 = cljs.core.__destructure_map(map__49582_49962);
var doc_49964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49582_49963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49582_49963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49961], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49965], 0));

if(cljs.core.truth_(doc_49964)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49964], 0));
} else {
}


var G__49966 = cljs.core.next(seq__49466_49954__$1);
var G__49967 = null;
var G__49968 = (0);
var G__49969 = (0);
seq__49466_49939 = G__49966;
chunk__49467_49940 = G__49967;
count__49468_49941 = G__49968;
i__49469_49942 = G__49969;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49591 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49592 = null;
var count__49593 = (0);
var i__49594 = (0);
while(true){
if((i__49594 < count__49593)){
var role = chunk__49592.cljs$core$IIndexed$_nth$arity$2(null,i__49594);
var temp__5753__auto___49970__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49970__$1)){
var spec_49971 = temp__5753__auto___49970__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49971)], 0));
} else {
}


var G__49972 = seq__49591;
var G__49973 = chunk__49592;
var G__49974 = count__49593;
var G__49975 = (i__49594 + (1));
seq__49591 = G__49972;
chunk__49592 = G__49973;
count__49593 = G__49974;
i__49594 = G__49975;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49591);
if(temp__5753__auto____$1){
var seq__49591__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49591__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49591__$1);
var G__49976 = cljs.core.chunk_rest(seq__49591__$1);
var G__49977 = c__4638__auto__;
var G__49978 = cljs.core.count(c__4638__auto__);
var G__49979 = (0);
seq__49591 = G__49976;
chunk__49592 = G__49977;
count__49593 = G__49978;
i__49594 = G__49979;
continue;
} else {
var role = cljs.core.first(seq__49591__$1);
var temp__5753__auto___49980__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49980__$2)){
var spec_49981 = temp__5753__auto___49980__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49981)], 0));
} else {
}


var G__49982 = cljs.core.next(seq__49591__$1);
var G__49983 = null;
var G__49984 = (0);
var G__49985 = (0);
seq__49591 = G__49982;
chunk__49592 = G__49983;
count__49593 = G__49984;
i__49594 = G__49985;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__49993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49994 = cljs.core.ex_cause(t);
via = G__49993;
t = G__49994;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49644 = datafied_throwable;
var map__49644__$1 = cljs.core.__destructure_map(map__49644);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49644__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49644__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49644__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49645 = cljs.core.last(via);
var map__49645__$1 = cljs.core.__destructure_map(map__49645);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49645__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49645__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49645__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49646 = data;
var map__49646__$1 = cljs.core.__destructure_map(map__49646);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49647 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49647__$1 = cljs.core.__destructure_map(map__49647);
var top_data = map__49647__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49647__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49659 = phase;
var G__49659__$1 = (((G__49659 instanceof cljs.core.Keyword))?G__49659.fqn:null);
switch (G__49659__$1) {
case "read-source":
var map__49663 = data;
var map__49663__$1 = cljs.core.__destructure_map(map__49663);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49663__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49663__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49664 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49664__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49664,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49664);
var G__49664__$2 = (cljs.core.truth_((function (){var fexpr__49725 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49725.cljs$core$IFn$_invoke$arity$1 ? fexpr__49725.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49725.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49664__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49664__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49664__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49664__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49770 = top_data;
var G__49770__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49770,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49770);
var G__49770__$2 = (cljs.core.truth_((function (){var fexpr__49790 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49790.cljs$core$IFn$_invoke$arity$1 ? fexpr__49790.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49790.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49770__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49770__$1);
var G__49770__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49770__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49770__$2);
var G__49770__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49770__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49770__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49770__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49770__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49808 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49808,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49808,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49808,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49808,(3),null);
var G__49811 = top_data;
var G__49811__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49811,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49811);
var G__49811__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49811__$1);
var G__49811__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49811__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49811__$2);
var G__49811__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49811__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49811__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49811__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49811__$4;
}

break;
case "execution":
var vec__49845 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49619_SHARP_){
var or__4212__auto__ = (p1__49619_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__49848 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49848.cljs$core$IFn$_invoke$arity$1 ? fexpr__49848.cljs$core$IFn$_invoke$arity$1(p1__49619_SHARP_) : fexpr__49848.call(null,p1__49619_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__49849 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49849__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49849,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49849);
var G__49849__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49849__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49849__$1);
var G__49849__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49849__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49849__$2);
var G__49849__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49849__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49849__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49849__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49849__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49659__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49866){
var map__49867 = p__49866;
var map__49867__$1 = cljs.core.__destructure_map(map__49867);
var triage_data = map__49867__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49874 = phase;
var G__49874__$1 = (((G__49874 instanceof cljs.core.Keyword))?G__49874.fqn:null);
switch (G__49874__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49875 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49876 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49877 = loc;
var G__49878 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49879_50010 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49880_50011 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49881_50012 = true;
var _STAR_print_fn_STAR__temp_val__49882_50013 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49881_50012);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49882_50013);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49859_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49859_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49880_50011);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49879_50010);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49875,G__49876,G__49877,G__49878) : format.call(null,G__49875,G__49876,G__49877,G__49878));

break;
case "macroexpansion":
var G__49883 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49884 = cause_type;
var G__49885 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49886 = loc;
var G__49887 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49883,G__49884,G__49885,G__49886,G__49887) : format.call(null,G__49883,G__49884,G__49885,G__49886,G__49887));

break;
case "compile-syntax-check":
var G__49888 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49889 = cause_type;
var G__49890 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49891 = loc;
var G__49892 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49888,G__49889,G__49890,G__49891,G__49892) : format.call(null,G__49888,G__49889,G__49890,G__49891,G__49892));

break;
case "compilation":
var G__49893 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49894 = cause_type;
var G__49895 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49896 = loc;
var G__49897 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49893,G__49894,G__49895,G__49896,G__49897) : format.call(null,G__49893,G__49894,G__49895,G__49896,G__49897));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49898 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49899 = symbol;
var G__49900 = loc;
var G__49901 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49903_50017 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49904_50018 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49905_50019 = true;
var _STAR_print_fn_STAR__temp_val__49906_50020 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49905_50019);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49906_50020);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49862_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49862_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49904_50018);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49903_50017);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49898,G__49899,G__49900,G__49901) : format.call(null,G__49898,G__49899,G__49900,G__49901));
} else {
var G__49907 = "Execution error%s at %s(%s).\n%s\n";
var G__49908 = cause_type;
var G__49909 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49910 = loc;
var G__49911 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49907,G__49908,G__49909,G__49910,G__49911) : format.call(null,G__49907,G__49908,G__49909,G__49910,G__49911));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49874__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
