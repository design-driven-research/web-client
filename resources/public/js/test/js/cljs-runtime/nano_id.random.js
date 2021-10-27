goog.provide('nano_id.random');
nano_id.random.secure_random = crypto;
/**
 * Returns a random byte sequence of the specified size.
 */
nano_id.random.random_bytes = (function nano_id$random$random_bytes(size){
var seed = (new Uint8Array(size));
nano_id.random.secure_random.getRandomValues(seed);

return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(seed);
});

//# sourceMappingURL=nano_id.random.js.map
