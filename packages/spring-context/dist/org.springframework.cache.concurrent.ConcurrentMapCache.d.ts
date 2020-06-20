declare namespace org {
    namespace springframework {
        namespace cache {
            namespace concurrent {
                /**
                 * Simple {@link org.springframework.cache.Cache} implementation based on the
                 * core JDK {@code java.util.concurrent} package.
                 * <p>Useful for testing or simple caching scenarios, typically in combination
                 * with {@link org.springframework.cache.support.SimpleCacheManager} or
                 * dynamically through {@link ConcurrentMapCacheManager}.
                 * <p><b>Note:</b> As {@link ConcurrentHashMap} (the default implementation used)
                 * does not allow for {@code null} values to be stored, this class will replace
                 * them with a predefined internal object. This behavior can be changed through the
                 * {@link #ConcurrentMapCache(String, ConcurrentMap, boolean)} constructor.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 3.1
                 */
                // @ts-ignore
                class ConcurrentMapCache extends org.springframework.cache.support.AbstractValueAdaptingCache {
                    /**
                     * Create a new ConcurrentMapCache with the specified name.
                     * @param name the name of the cache
                     */
                    // @ts-ignore
                    constructor(name: string)
                    /**
                     * Create a new ConcurrentMapCache with the specified name.
                     * @param name the name of the cache
                     * @param allowNullValues whether to accept and convert {#code null}
                     *  values for this cache
                     */
                    // @ts-ignore
                    constructor(name: string, allowNullValues: boolean)
                    /**
                     * Create a new ConcurrentMapCache with the specified name and the
                     * given internal {@link ConcurrentMap} to use.
                     * @param name the name of the cache
                     * @param store the ConcurrentMap to use as an internal store
                     * @param allowNullValues whether to allow {#code null} values
                     *  (adapting them to an internal null holder value)
                     */
                    // @ts-ignore
                    constructor(name: string, store: java.util.concurrent.ConcurrentMap<java.lang.Object, java.lang.Object>, allowNullValues: boolean)
                    /**
                     * Create a new ConcurrentMapCache with the specified name and the
                     * given internal {@link ConcurrentMap} to use. If the
                     * {@link SerializationDelegate} is specified,
                     * {@link #isStoreByValue() store-by-value} is enabled
                     * @param name the name of the cache
                     * @param store the ConcurrentMap to use as an internal store
                     * @param allowNullValues whether to allow {#code null} values
                     *  (adapting them to an internal null holder value)
                     * @param serialization the {#link SerializationDelegate} to use
                     *  to serialize cache entry or {@code null} to store the reference
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(name: string, store: java.util.concurrent.ConcurrentMap<java.lang.Object, java.lang.Object>, allowNullValues: boolean, serialization: SerializationDelegate)
                    /**
                     * Return whether this cache stores a copy of each entry ({@code true}) or
                     * a reference ({@code false}, default). If store by value is enabled, each
                     * entry in the cache must be serializable.
                     * @since 4.3
                     */
                    // @ts-ignore
                    isStoreByValue(): boolean
                    // @ts-ignore
                    getName(): java.lang.String
                    // @ts-ignore
                    getNativeCache(): java.util.concurrent.ConcurrentMap<java.lang.Object, java.lang.Object>
                    // @ts-ignore
                    lookup(key: any): java.lang.Object
                    // @ts-ignore
                    get<T>(key: any, valueLoader: java.util.concurrent.Callable<T>): T
                    // @ts-ignore
                    put(key: any, value: any): void
                    // @ts-ignore
                    putIfAbsent(key: any, value: any): org.springframework.cache.Cache.ValueWrapper
                    // @ts-ignore
                    evict(key: any): void
                    // @ts-ignore
                    evictIfPresent(key: any): boolean
                    // @ts-ignore
                    clear(): void
                    // @ts-ignore
                    invalidate(): boolean
                    // @ts-ignore
                    toStoreValue(userValue: any): java.lang.Object
                    // @ts-ignore
                    fromStoreValue(storeValue: any): java.lang.Object
                }
            }
        }
    }
}
