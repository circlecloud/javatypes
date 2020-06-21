declare namespace org {
    namespace springframework {
        namespace cache {
            namespace concurrent {
                /**
                 * {@link CacheManager} implementation that lazily builds {@link ConcurrentMapCache}
                 * instances for each {@link #getCache} request. Also supports a 'static' mode where
                 * the set of cache names is pre-defined through {@link #setCacheNames}, with no
                 * dynamic creation of further cache regions at runtime.
                 * <p>Note: This is by no means a sophisticated CacheManager; it comes with no
                 * cache configuration options. However, it may be useful for testing or simple
                 * caching scenarios. For advanced local caching needs, consider
                 * {@link org.springframework.cache.jcache.JCacheCacheManager},
                 * {@link org.springframework.cache.ehcache.EhCacheCacheManager},
                 * {@link org.springframework.cache.caffeine.CaffeineCacheManager}.
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see ConcurrentMapCache
                 */
                // @ts-ignore
                class ConcurrentMapCacheManager extends java.lang.Object implements org.springframework.cache.CacheManager {
                    /**
                     * Construct a dynamic ConcurrentMapCacheManager,
                     * lazily creating cache instances as they are being requested.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a static ConcurrentMapCacheManager,
                     * managing caches for the specified cache names only.
                     */
                    // @ts-ignore
                    constructor(...cacheNames: java.lang.String[] | string[])
                    /**
                     * Specify the set of cache names for this CacheManager's 'static' mode.
                     * <p>The number of caches and their names will be fixed after a call to this method,
                     * with no creation of further cache regions at runtime.
                     * <p>Calling this with a {@code null} collection argument resets the
                     * mode to 'dynamic', allowing for further creation of caches again.
                     */
                    // @ts-ignore
                    public setCacheNames(cacheNames: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): void
                    /**
                     * Specify whether to accept and convert {@code null} values for all caches
                     * in this cache manager.
                     * <p>Default is "true", despite ConcurrentHashMap itself not supporting {@code null}
                     * values. An internal holder object will be used to store user-level {@code null}s.
                     * <p>Note: A change of the null-value setting will reset all existing caches,
                     * if any, to reconfigure them with the new null-value requirement.
                     */
                    // @ts-ignore
                    public setAllowNullValues(allowNullValues: boolean): void
                    /**
                     * Return whether this cache manager accepts and converts {@code null} values
                     * for all of its caches.
                     */
                    // @ts-ignore
                    public isAllowNullValues(): boolean
                    /**
                     * Specify whether this cache manager stores a copy of each entry ({@code true}
                     * or the reference ({@code false} for all of its caches.
                     * <p>Default is "false" so that the value itself is stored and no serializable
                     * contract is required on cached values.
                     * <p>Note: A change of the store-by-value setting will reset all existing caches,
                     * if any, to reconfigure them with the new store-by-value requirement.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public setStoreByValue(storeByValue: boolean): void
                    /**
                     * Return whether this cache manager stores a copy of each entry or
                     * a reference for all its caches. If store by value is enabled, any
                     * cache entry must be serializable.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public isStoreByValue(): boolean
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public getCacheNames(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getCache(name: java.lang.String | string): org.springframework.cache.Cache
                    /**
                     * Create a new ConcurrentMapCache instance for the specified cache name.
                     * @param name the name of the cache
                     * @return the ConcurrentMapCache (or a decorator thereof)
                     */
                    // @ts-ignore
                    createConcurrentMapCache(name: java.lang.String | string): org.springframework.cache.Cache
                }
            }
        }
    }
}
