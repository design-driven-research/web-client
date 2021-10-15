goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50898 = arguments.length;
var i__4819__auto___50899 = (0);
while(true){
if((i__4819__auto___50899 < len__4818__auto___50898)){
args__4824__auto__.push((arguments[i__4819__auto___50899]));

var G__50900 = (i__4819__auto___50899 + (1));
i__4819__auto___50899 = G__50900;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50677){
var G__50678 = cljs.core.first(seq50677);
var seq50677__$1 = cljs.core.next(seq50677);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50678,seq50677__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50684 = cljs.core.seq(sources);
var chunk__50685 = null;
var count__50686 = (0);
var i__50687 = (0);
while(true){
if((i__50687 < count__50686)){
var map__50695 = chunk__50685.cljs$core$IIndexed$_nth$arity$2(null,i__50687);
var map__50695__$1 = cljs.core.__destructure_map(map__50695);
var src = map__50695__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50697){var e_50901 = e50697;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50901);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50901.message)].join('')));
}

var G__50902 = seq__50684;
var G__50903 = chunk__50685;
var G__50904 = count__50686;
var G__50905 = (i__50687 + (1));
seq__50684 = G__50902;
chunk__50685 = G__50903;
count__50686 = G__50904;
i__50687 = G__50905;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50684);
if(temp__5753__auto__){
var seq__50684__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50684__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50684__$1);
var G__50906 = cljs.core.chunk_rest(seq__50684__$1);
var G__50907 = c__4638__auto__;
var G__50908 = cljs.core.count(c__4638__auto__);
var G__50909 = (0);
seq__50684 = G__50906;
chunk__50685 = G__50907;
count__50686 = G__50908;
i__50687 = G__50909;
continue;
} else {
var map__50698 = cljs.core.first(seq__50684__$1);
var map__50698__$1 = cljs.core.__destructure_map(map__50698);
var src = map__50698__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50698__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50698__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50698__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50698__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50700){var e_50910 = e50700;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50910);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50910.message)].join('')));
}

var G__50911 = cljs.core.next(seq__50684__$1);
var G__50912 = null;
var G__50913 = (0);
var G__50914 = (0);
seq__50684 = G__50911;
chunk__50685 = G__50912;
count__50686 = G__50913;
i__50687 = G__50914;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50706 = cljs.core.seq(js_requires);
var chunk__50707 = null;
var count__50708 = (0);
var i__50709 = (0);
while(true){
if((i__50709 < count__50708)){
var js_ns = chunk__50707.cljs$core$IIndexed$_nth$arity$2(null,i__50709);
var require_str_50915 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50915);


var G__50916 = seq__50706;
var G__50917 = chunk__50707;
var G__50918 = count__50708;
var G__50919 = (i__50709 + (1));
seq__50706 = G__50916;
chunk__50707 = G__50917;
count__50708 = G__50918;
i__50709 = G__50919;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50706);
if(temp__5753__auto__){
var seq__50706__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50706__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50706__$1);
var G__50920 = cljs.core.chunk_rest(seq__50706__$1);
var G__50921 = c__4638__auto__;
var G__50922 = cljs.core.count(c__4638__auto__);
var G__50923 = (0);
seq__50706 = G__50920;
chunk__50707 = G__50921;
count__50708 = G__50922;
i__50709 = G__50923;
continue;
} else {
var js_ns = cljs.core.first(seq__50706__$1);
var require_str_50924 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50924);


var G__50925 = cljs.core.next(seq__50706__$1);
var G__50926 = null;
var G__50927 = (0);
var G__50928 = (0);
seq__50706 = G__50925;
chunk__50707 = G__50926;
count__50708 = G__50927;
i__50709 = G__50928;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50713){
var map__50714 = p__50713;
var map__50714__$1 = cljs.core.__destructure_map(map__50714);
var msg = map__50714__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50714__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50714__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50715(s__50716){
return (new cljs.core.LazySeq(null,(function (){
var s__50716__$1 = s__50716;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50716__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50721 = cljs.core.first(xs__6308__auto__);
var map__50721__$1 = cljs.core.__destructure_map(map__50721);
var src = map__50721__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50721__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50721__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__50716__$1,map__50721,map__50721__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50714,map__50714__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50715_$_iter__50717(s__50718){
return (new cljs.core.LazySeq(null,((function (s__50716__$1,map__50721,map__50721__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50714,map__50714__$1,msg,info,reload_info){
return (function (){
var s__50718__$1 = s__50718;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50718__$1);
if(temp__5753__auto____$1){
var s__50718__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50718__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__50718__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__50720 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__50719 = (0);
while(true){
if((i__50719 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__50719);
cljs.core.chunk_append(b__50720,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50929 = (i__50719 + (1));
i__50719 = G__50929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50720),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50715_$_iter__50717(cljs.core.chunk_rest(s__50718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50720),null);
}
} else {
var warning = cljs.core.first(s__50718__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50715_$_iter__50717(cljs.core.rest(s__50718__$2)));
}
} else {
return null;
}
break;
}
});})(s__50716__$1,map__50721,map__50721__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50714,map__50714__$1,msg,info,reload_info))
,null,null));
});})(s__50716__$1,map__50721,map__50721__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50714,map__50714__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50715(cljs.core.rest(s__50716__$1)));
} else {
var G__50930 = cljs.core.rest(s__50716__$1);
s__50716__$1 = G__50930;
continue;
}
} else {
var G__50931 = cljs.core.rest(s__50716__$1);
s__50716__$1 = G__50931;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50723_50932 = cljs.core.seq(warnings);
var chunk__50724_50933 = null;
var count__50725_50934 = (0);
var i__50726_50935 = (0);
while(true){
if((i__50726_50935 < count__50725_50934)){
var map__50729_50936 = chunk__50724_50933.cljs$core$IIndexed$_nth$arity$2(null,i__50726_50935);
var map__50729_50937__$1 = cljs.core.__destructure_map(map__50729_50936);
var w_50938 = map__50729_50937__$1;
var msg_50939__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729_50937__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729_50937__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729_50937__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729_50937__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50942)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50940),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50941),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50939__$1)].join(''));


var G__50943 = seq__50723_50932;
var G__50944 = chunk__50724_50933;
var G__50945 = count__50725_50934;
var G__50946 = (i__50726_50935 + (1));
seq__50723_50932 = G__50943;
chunk__50724_50933 = G__50944;
count__50725_50934 = G__50945;
i__50726_50935 = G__50946;
continue;
} else {
var temp__5753__auto___50947 = cljs.core.seq(seq__50723_50932);
if(temp__5753__auto___50947){
var seq__50723_50948__$1 = temp__5753__auto___50947;
if(cljs.core.chunked_seq_QMARK_(seq__50723_50948__$1)){
var c__4638__auto___50949 = cljs.core.chunk_first(seq__50723_50948__$1);
var G__50950 = cljs.core.chunk_rest(seq__50723_50948__$1);
var G__50951 = c__4638__auto___50949;
var G__50952 = cljs.core.count(c__4638__auto___50949);
var G__50953 = (0);
seq__50723_50932 = G__50950;
chunk__50724_50933 = G__50951;
count__50725_50934 = G__50952;
i__50726_50935 = G__50953;
continue;
} else {
var map__50730_50954 = cljs.core.first(seq__50723_50948__$1);
var map__50730_50955__$1 = cljs.core.__destructure_map(map__50730_50954);
var w_50956 = map__50730_50955__$1;
var msg_50957__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50730_50955__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50730_50955__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50730_50955__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50730_50955__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50960)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50958),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50959),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50957__$1)].join(''));


var G__50961 = cljs.core.next(seq__50723_50948__$1);
var G__50962 = null;
var G__50963 = (0);
var G__50964 = (0);
seq__50723_50932 = G__50961;
chunk__50724_50933 = G__50962;
count__50725_50934 = G__50963;
i__50726_50935 = G__50964;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50712_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50712_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50731){
var map__50732 = p__50731;
var map__50732__$1 = cljs.core.__destructure_map(map__50732);
var msg = map__50732__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50732__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50733 = cljs.core.seq(updates);
var chunk__50735 = null;
var count__50736 = (0);
var i__50737 = (0);
while(true){
if((i__50737 < count__50736)){
var path = chunk__50735.cljs$core$IIndexed$_nth$arity$2(null,i__50737);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50848_50965 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50852_50966 = null;
var count__50853_50967 = (0);
var i__50854_50968 = (0);
while(true){
if((i__50854_50968 < count__50853_50967)){
var node_50969 = chunk__50852_50966.cljs$core$IIndexed$_nth$arity$2(null,i__50854_50968);
if(cljs.core.not(node_50969.shadow$old)){
var path_match_50970 = shadow.cljs.devtools.client.browser.match_paths(node_50969.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50970)){
var new_link_50971 = (function (){var G__50860 = node_50969.cloneNode(true);
G__50860.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50970),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50860;
})();
(node_50969.shadow$old = true);

(new_link_50971.onload = ((function (seq__50848_50965,chunk__50852_50966,count__50853_50967,i__50854_50968,seq__50733,chunk__50735,count__50736,i__50737,new_link_50971,path_match_50970,node_50969,path,map__50732,map__50732__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50969);
});})(seq__50848_50965,chunk__50852_50966,count__50853_50967,i__50854_50968,seq__50733,chunk__50735,count__50736,i__50737,new_link_50971,path_match_50970,node_50969,path,map__50732,map__50732__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50970], 0));

goog.dom.insertSiblingAfter(new_link_50971,node_50969);


var G__50972 = seq__50848_50965;
var G__50973 = chunk__50852_50966;
var G__50974 = count__50853_50967;
var G__50975 = (i__50854_50968 + (1));
seq__50848_50965 = G__50972;
chunk__50852_50966 = G__50973;
count__50853_50967 = G__50974;
i__50854_50968 = G__50975;
continue;
} else {
var G__50976 = seq__50848_50965;
var G__50977 = chunk__50852_50966;
var G__50978 = count__50853_50967;
var G__50979 = (i__50854_50968 + (1));
seq__50848_50965 = G__50976;
chunk__50852_50966 = G__50977;
count__50853_50967 = G__50978;
i__50854_50968 = G__50979;
continue;
}
} else {
var G__50980 = seq__50848_50965;
var G__50981 = chunk__50852_50966;
var G__50982 = count__50853_50967;
var G__50983 = (i__50854_50968 + (1));
seq__50848_50965 = G__50980;
chunk__50852_50966 = G__50981;
count__50853_50967 = G__50982;
i__50854_50968 = G__50983;
continue;
}
} else {
var temp__5753__auto___50984 = cljs.core.seq(seq__50848_50965);
if(temp__5753__auto___50984){
var seq__50848_50985__$1 = temp__5753__auto___50984;
if(cljs.core.chunked_seq_QMARK_(seq__50848_50985__$1)){
var c__4638__auto___50986 = cljs.core.chunk_first(seq__50848_50985__$1);
var G__50987 = cljs.core.chunk_rest(seq__50848_50985__$1);
var G__50988 = c__4638__auto___50986;
var G__50989 = cljs.core.count(c__4638__auto___50986);
var G__50990 = (0);
seq__50848_50965 = G__50987;
chunk__50852_50966 = G__50988;
count__50853_50967 = G__50989;
i__50854_50968 = G__50990;
continue;
} else {
var node_50991 = cljs.core.first(seq__50848_50985__$1);
if(cljs.core.not(node_50991.shadow$old)){
var path_match_50992 = shadow.cljs.devtools.client.browser.match_paths(node_50991.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50992)){
var new_link_50993 = (function (){var G__50861 = node_50991.cloneNode(true);
G__50861.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50992),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50861;
})();
(node_50991.shadow$old = true);

(new_link_50993.onload = ((function (seq__50848_50965,chunk__50852_50966,count__50853_50967,i__50854_50968,seq__50733,chunk__50735,count__50736,i__50737,new_link_50993,path_match_50992,node_50991,seq__50848_50985__$1,temp__5753__auto___50984,path,map__50732,map__50732__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50991);
});})(seq__50848_50965,chunk__50852_50966,count__50853_50967,i__50854_50968,seq__50733,chunk__50735,count__50736,i__50737,new_link_50993,path_match_50992,node_50991,seq__50848_50985__$1,temp__5753__auto___50984,path,map__50732,map__50732__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50992], 0));

goog.dom.insertSiblingAfter(new_link_50993,node_50991);


var G__50994 = cljs.core.next(seq__50848_50985__$1);
var G__50995 = null;
var G__50996 = (0);
var G__50997 = (0);
seq__50848_50965 = G__50994;
chunk__50852_50966 = G__50995;
count__50853_50967 = G__50996;
i__50854_50968 = G__50997;
continue;
} else {
var G__50998 = cljs.core.next(seq__50848_50985__$1);
var G__50999 = null;
var G__51000 = (0);
var G__51001 = (0);
seq__50848_50965 = G__50998;
chunk__50852_50966 = G__50999;
count__50853_50967 = G__51000;
i__50854_50968 = G__51001;
continue;
}
} else {
var G__51002 = cljs.core.next(seq__50848_50985__$1);
var G__51003 = null;
var G__51004 = (0);
var G__51005 = (0);
seq__50848_50965 = G__51002;
chunk__50852_50966 = G__51003;
count__50853_50967 = G__51004;
i__50854_50968 = G__51005;
continue;
}
}
} else {
}
}
break;
}


var G__51006 = seq__50733;
var G__51007 = chunk__50735;
var G__51008 = count__50736;
var G__51009 = (i__50737 + (1));
seq__50733 = G__51006;
chunk__50735 = G__51007;
count__50736 = G__51008;
i__50737 = G__51009;
continue;
} else {
var G__51010 = seq__50733;
var G__51011 = chunk__50735;
var G__51012 = count__50736;
var G__51013 = (i__50737 + (1));
seq__50733 = G__51010;
chunk__50735 = G__51011;
count__50736 = G__51012;
i__50737 = G__51013;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50733);
if(temp__5753__auto__){
var seq__50733__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50733__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50733__$1);
var G__51014 = cljs.core.chunk_rest(seq__50733__$1);
var G__51015 = c__4638__auto__;
var G__51016 = cljs.core.count(c__4638__auto__);
var G__51017 = (0);
seq__50733 = G__51014;
chunk__50735 = G__51015;
count__50736 = G__51016;
i__50737 = G__51017;
continue;
} else {
var path = cljs.core.first(seq__50733__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50862_51018 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50866_51019 = null;
var count__50867_51020 = (0);
var i__50868_51021 = (0);
while(true){
if((i__50868_51021 < count__50867_51020)){
var node_51022 = chunk__50866_51019.cljs$core$IIndexed$_nth$arity$2(null,i__50868_51021);
if(cljs.core.not(node_51022.shadow$old)){
var path_match_51023 = shadow.cljs.devtools.client.browser.match_paths(node_51022.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51023)){
var new_link_51024 = (function (){var G__50874 = node_51022.cloneNode(true);
G__50874.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51023),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50874;
})();
(node_51022.shadow$old = true);

(new_link_51024.onload = ((function (seq__50862_51018,chunk__50866_51019,count__50867_51020,i__50868_51021,seq__50733,chunk__50735,count__50736,i__50737,new_link_51024,path_match_51023,node_51022,path,seq__50733__$1,temp__5753__auto__,map__50732,map__50732__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51022);
});})(seq__50862_51018,chunk__50866_51019,count__50867_51020,i__50868_51021,seq__50733,chunk__50735,count__50736,i__50737,new_link_51024,path_match_51023,node_51022,path,seq__50733__$1,temp__5753__auto__,map__50732,map__50732__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51023], 0));

goog.dom.insertSiblingAfter(new_link_51024,node_51022);


var G__51025 = seq__50862_51018;
var G__51026 = chunk__50866_51019;
var G__51027 = count__50867_51020;
var G__51028 = (i__50868_51021 + (1));
seq__50862_51018 = G__51025;
chunk__50866_51019 = G__51026;
count__50867_51020 = G__51027;
i__50868_51021 = G__51028;
continue;
} else {
var G__51029 = seq__50862_51018;
var G__51030 = chunk__50866_51019;
var G__51031 = count__50867_51020;
var G__51032 = (i__50868_51021 + (1));
seq__50862_51018 = G__51029;
chunk__50866_51019 = G__51030;
count__50867_51020 = G__51031;
i__50868_51021 = G__51032;
continue;
}
} else {
var G__51033 = seq__50862_51018;
var G__51034 = chunk__50866_51019;
var G__51035 = count__50867_51020;
var G__51036 = (i__50868_51021 + (1));
seq__50862_51018 = G__51033;
chunk__50866_51019 = G__51034;
count__50867_51020 = G__51035;
i__50868_51021 = G__51036;
continue;
}
} else {
var temp__5753__auto___51037__$1 = cljs.core.seq(seq__50862_51018);
if(temp__5753__auto___51037__$1){
var seq__50862_51038__$1 = temp__5753__auto___51037__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50862_51038__$1)){
var c__4638__auto___51039 = cljs.core.chunk_first(seq__50862_51038__$1);
var G__51040 = cljs.core.chunk_rest(seq__50862_51038__$1);
var G__51041 = c__4638__auto___51039;
var G__51042 = cljs.core.count(c__4638__auto___51039);
var G__51043 = (0);
seq__50862_51018 = G__51040;
chunk__50866_51019 = G__51041;
count__50867_51020 = G__51042;
i__50868_51021 = G__51043;
continue;
} else {
var node_51044 = cljs.core.first(seq__50862_51038__$1);
if(cljs.core.not(node_51044.shadow$old)){
var path_match_51045 = shadow.cljs.devtools.client.browser.match_paths(node_51044.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51045)){
var new_link_51046 = (function (){var G__50875 = node_51044.cloneNode(true);
G__50875.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51045),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50875;
})();
(node_51044.shadow$old = true);

(new_link_51046.onload = ((function (seq__50862_51018,chunk__50866_51019,count__50867_51020,i__50868_51021,seq__50733,chunk__50735,count__50736,i__50737,new_link_51046,path_match_51045,node_51044,seq__50862_51038__$1,temp__5753__auto___51037__$1,path,seq__50733__$1,temp__5753__auto__,map__50732,map__50732__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51044);
});})(seq__50862_51018,chunk__50866_51019,count__50867_51020,i__50868_51021,seq__50733,chunk__50735,count__50736,i__50737,new_link_51046,path_match_51045,node_51044,seq__50862_51038__$1,temp__5753__auto___51037__$1,path,seq__50733__$1,temp__5753__auto__,map__50732,map__50732__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51045], 0));

goog.dom.insertSiblingAfter(new_link_51046,node_51044);


var G__51047 = cljs.core.next(seq__50862_51038__$1);
var G__51048 = null;
var G__51049 = (0);
var G__51050 = (0);
seq__50862_51018 = G__51047;
chunk__50866_51019 = G__51048;
count__50867_51020 = G__51049;
i__50868_51021 = G__51050;
continue;
} else {
var G__51051 = cljs.core.next(seq__50862_51038__$1);
var G__51052 = null;
var G__51053 = (0);
var G__51054 = (0);
seq__50862_51018 = G__51051;
chunk__50866_51019 = G__51052;
count__50867_51020 = G__51053;
i__50868_51021 = G__51054;
continue;
}
} else {
var G__51055 = cljs.core.next(seq__50862_51038__$1);
var G__51056 = null;
var G__51057 = (0);
var G__51058 = (0);
seq__50862_51018 = G__51055;
chunk__50866_51019 = G__51056;
count__50867_51020 = G__51057;
i__50868_51021 = G__51058;
continue;
}
}
} else {
}
}
break;
}


var G__51059 = cljs.core.next(seq__50733__$1);
var G__51060 = null;
var G__51061 = (0);
var G__51062 = (0);
seq__50733 = G__51059;
chunk__50735 = G__51060;
count__50736 = G__51061;
i__50737 = G__51062;
continue;
} else {
var G__51063 = cljs.core.next(seq__50733__$1);
var G__51064 = null;
var G__51065 = (0);
var G__51066 = (0);
seq__50733 = G__51063;
chunk__50735 = G__51064;
count__50736 = G__51065;
i__50737 = G__51066;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50876){
var map__50877 = p__50876;
var map__50877__$1 = cljs.core.__destructure_map(map__50877);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50877__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50878){
var map__50879 = p__50878;
var map__50879__$1 = cljs.core.__destructure_map(map__50879);
var _ = map__50879__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50879__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50880,done,error){
var map__50881 = p__50880;
var map__50881__$1 = cljs.core.__destructure_map(map__50881);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50881__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50882,done,error){
var map__50883 = p__50882;
var map__50883__$1 = cljs.core.__destructure_map(map__50883);
var msg = map__50883__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50883__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50883__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50883__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50884){
var map__50885 = p__50884;
var map__50885__$1 = cljs.core.__destructure_map(map__50885);
var src = map__50885__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50885__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50886 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50886) : done.call(null,G__50886));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50887){
var map__50888 = p__50887;
var map__50888__$1 = cljs.core.__destructure_map(map__50888);
var msg__$1 = map__50888__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50888__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50889){var ex = e50889;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50890){
var map__50891 = p__50890;
var map__50891__$1 = cljs.core.__destructure_map(map__50891);
var env = map__50891__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50891__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__50892){
var map__50893 = p__50892;
var map__50893__$1 = cljs.core.__destructure_map(map__50893);
var msg = map__50893__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50893__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50894){
var map__50895 = p__50894;
var map__50895__$1 = cljs.core.__destructure_map(map__50895);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50896){
var map__50897 = p__50896;
var map__50897__$1 = cljs.core.__destructure_map(map__50897);
var svc = map__50897__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50897__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
