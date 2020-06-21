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
                    constructor(name: java.lang.String | string)
                    /**
                     * Create a new ConcurrentMapCache with the specified name.
                     * @param name the name of the cache
                     * @param allowNullValues whether to accept and convert {#code null}
                     *  values for this cache
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, allowNullValues: boolean)
                    /**
                     * Create a new ConcurrentMapCache with the specified name and the
                     * given internal {@link ConcurrentMap} to use.
                     * @param name the name of the cache
                     * @param store the ConcurrentMap to use as an internal store
                     * @param allowNullValues whether to allow {#code null} values
                     *  (adapting them to an internal null holder value)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, store: java.util.concurrent.ConcurrentMap<java.lang.Object | any, java.lang.Object | any>, allowNullValues: boolean)
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
                    constructor(name: java.lang.String | string, store: java.util.concurrent.ConcurrentMap<java.lang.Object | any, java.lang.Object | any>, allowNullValues: boolean, serialization: SerializationDelegate)
                    /**
                     * Return whether this cache stores a copy of each entry ({@code true}) or
                     * a reference ({@code false}, default). If store by value is enabled, each
                     * entry in the cache must be serializable.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public isStoreByValue(): boolean
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getNativeCache(): java.util.concurrent.ConcurrentMap<java.lang.Object | any, java.lang.Object | any>
                    // @ts-ignore
                    lookup(key: java.lang.Object | any): any
                    // @ts-ignore
                    public get<T>(key: java.lang.Object | any, valueLoader: java.util.concurrent.Callable<T>): T
                    // @ts-ignore
                    public put(key: java.lang.Object | any, value: java.lang.Object | any): void
                    // @ts-ignore
                    public putIfAbsent(key: java.lang.Object | any, value: java.lang.Object | any): org.springframework.cache.Cache.ValueWrapper
                    // @ts-ignore
                    public evict(key: java.lang.Object | any): void
                    // @ts-ignore
                    public evictIfPresent(key: java.lang.Object | any): boolean
                    // @ts-ignore
                    public clear(): void
                    // @ts-ignore
                    public invalidate(): boolean
                    // @ts-ignore
                    toStoreValue(userValue: java.lang.Object | any): any
                    // @ts-ignore
                    fromStoreValue(storeValue: java.lang.Object | any): any
                }
            }
        }
    }
}
