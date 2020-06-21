declare namespace org {
    namespace springframework {
        namespace cache {
            /**
             * Interface that defines common cache operations.
             * <b>Note:</b> Due to the generic use of caching, it is recommended that
             * implementations allow storage of <tt>null</tt> values (for example to
             * cache methods that return {@code null}).
             * @author Costin Leau
             * @author Juergen Hoeller
             * @author Stephane Nicoll
             * @since 3.1
             */
            // @ts-ignore
            interface Cache {
                /**
                 * Return the cache name.
                 */
                // @ts-ignore
                getName(): string
                /**
                 * Return the underlying native cache provider.
                 */
                // @ts-ignore
                getNativeCache(): any
                /**
                 * Return the value to which this cache maps the specified key.
                 * <p>Returns {@code null} if the cache contains no mapping for this key;
                 * otherwise, the cached value (which may be {@code null} itself) will
                 * be returned in a {@link ValueWrapper}.
                 * @param key the key whose associated value is to be returned
                 * @return the value to which this cache maps the specified key,
                 *  contained within a {#link ValueWrapper} which may also hold
                 *  a cached {@code null} value. A straight {@code null} being
                 *  returned means that the cache contains no mapping for this key.
                 * @see #get(Object, Class)
                 * @see #get(Object, Callable)
                 */
                // @ts-ignore
                get(key: java.lang.Object | any): org.springframework.cache.Cache.ValueWrapper
                /**
                 * Return the value to which this cache maps the specified key,
                 * generically specifying a type that return value will be cast to.
                 * <p>Note: This variant of {@code get} does not allow for differentiating
                 * between a cached {@code null} value and no cache entry found at all.
                 * Use the standard {@link #get(Object)} variant for that purpose instead.
                 * @param key the key whose associated value is to be returned
                 * @param type the required type of the returned value (may be
                 *  {#code null} to bypass a type check; in case of a {@code null}
                 *  value found in the cache, the specified type is irrelevant)
                 * @return the value to which this cache maps the specified key
                 *  (which may be {#code null} itself), or also {@code null} if
                 *  the cache contains no mapping for this key
                 * @throws IllegalStateException if a cache entry has been found
                 *  but failed to match the specified type
                 * @since 4.0
                 * @see #get(Object)
                 */
                // @ts-ignore
                get<T>(key: java.lang.Object | any, type: java.lang.Class<T>): T
                /**
                 * Return the value to which this cache maps the specified key, obtaining
                 * that value from {@code valueLoader} if necessary. This method provides
                 * a simple substitute for the conventional "if cached, return; otherwise
                 * create, cache and return" pattern.
                 * <p>If possible, implementations should ensure that the loading operation
                 * is synchronized so that the specified {@code valueLoader} is only called
                 * once in case of concurrent access on the same key.
                 * <p>If the {@code valueLoader} throws an exception, it is wrapped in
                 * a {@link ValueRetrievalException}
                 * @param key the key whose associated value is to be returned
                 * @return the value to which this cache maps the specified key
                 * @throws ValueRetrievalException if the {#code valueLoader} throws an exception
                 * @since 4.3
                 * @see #get(Object)
                 */
                // @ts-ignore
                get<T>(key: java.lang.Object | any, valueLoader: java.util.concurrent.Callable<T>): T
                /**
                 * Associate the specified value with the specified key in this cache.
                 * <p>If the cache previously contained a mapping for this key, the old
                 * value is replaced by the specified value.
                 * <p>Actual registration may be performed in an asynchronous or deferred
                 * fashion, with subsequent lookups possibly not seeing the entry yet.
                 * This may for example be the case with transactional cache decorators.
                 * Use {@link #putIfAbsent} for guaranteed immediate registration.
                 * @param key the key with which the specified value is to be associated
                 * @param value the value to be associated with the specified key
                 * @see #putIfAbsent(Object, Object)
                 */
                // @ts-ignore
                put(key: java.lang.Object | any, value: java.lang.Object | any): void
                /**
                 * Atomically associate the specified value with the specified key in this cache
                 * if it is not set already.
                 * <p>This is equivalent to:
                 * <pre><code>
                 * ValueWrapper existingValue = cache.get(key);
                 * if (existingValue == null) {
                 * cache.put(key, value);
                 * }
                 * return existingValue;
                 * </code></pre>
                 * except that the action is performed atomically. While all out-of-the-box
                 * {@link CacheManager} implementations are able to perform the put atomically,
                 * the operation may also be implemented in two steps, e.g. with a check for
                 * presence and a subsequent put, in a non-atomic way. Check the documentation
                 * of the native cache implementation that you are using for more details.
                 * <p>The default implementation delegates to {@link #get(Object)} and
                 * {@link #put(Object, Object)} along the lines of the code snippet above.
                 * @param key the key with which the specified value is to be associated
                 * @param value the value to be associated with the specified key
                 * @return the value to which this cache maps the specified key (which may be
                 *  {#code null} itself), or also {@code null} if the cache did not contain any
                 *  mapping for that key prior to this call. Returning {@code null} is therefore
                 *  an indicator that the given {@code value} has been associated with the key.
                 * @since 4.1
                 * @see #put(Object, Object)
                 */
                // @ts-ignore
                putIfAbsent(key: java.lang.Object | any, value: java.lang.Object | any): org.springframework.cache.Cache.ValueWrapper
                /**
                 * Evict the mapping for this key from this cache if it is present.
                 * <p>Actual eviction may be performed in an asynchronous or deferred
                 * fashion, with subsequent lookups possibly still seeing the entry.
                 * This may for example be the case with transactional cache decorators.
                 * Use {@link #evictIfPresent} for guaranteed immediate removal.
                 * @param key the key whose mapping is to be removed from the cache
                 * @see #evictIfPresent(Object)
                 */
                // @ts-ignore
                evict(key: java.lang.Object | any): void
                /**
                 * Evict the mapping for this key from this cache if it is present,
                 * expecting the key to be immediately invisible for subsequent lookups.
                 * <p>The default implementation delegates to {@link #evict(Object)},
                 * returning {@code false} for not-determined prior presence of the key.
                 * Cache providers and in particular cache decorators are encouraged
                 * to perform immediate eviction if possible (e.g. in case of generally
                 * deferred cache operations within a transaction) and to reliably
                 * determine prior presence of the given key.
                 * @param key the key whose mapping is to be removed from the cache
                 * @return {#code true} if the cache was known to have a mapping for
                 *  this key before, {@code false} if it did not (or if prior presence
                 *  could not be determined)
                 * @since 5.2
                 * @see #evict(Object)
                 */
                // @ts-ignore
                evictIfPresent(key: java.lang.Object | any): boolean
                /**
                 * Clear the cache through removing all mappings.
                 * <p>Actual clearing may be performed in an asynchronous or deferred
                 * fashion, with subsequent lookups possibly still seeing the entries.
                 * This may for example be the case with transactional cache decorators.
                 * Use {@link #invalidate()} for guaranteed immediate removal of entries.
                 * @see #invalidate()
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Invalidate the cache through removing all mappings, expecting all
                 * entries to be immediately invisible for subsequent lookups.
                 * @return {#code true} if the cache was known to have mappings before,
                 *  {@code false} if it did not (or if prior presence of entries could
                 *  not be determined)
                 * @since 5.2
                 * @see #clear()
                 */
                // @ts-ignore
                invalidate(): boolean
            }
        }
    }
}
