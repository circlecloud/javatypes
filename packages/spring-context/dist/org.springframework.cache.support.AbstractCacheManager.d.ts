declare namespace org {
    namespace springframework {
        namespace cache {
            namespace support {
                /**
                 * Abstract base class implementing the common {@link CacheManager} methods.
                 * Useful for 'static' environments where the backing caches do not change.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 3.1
                 */
                // @ts-ignore
                abstract class AbstractCacheManager extends java.lang.Object implements org.springframework.cache.CacheManager {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Initialize the static configuration of caches.
                     * <p>Triggered on startup through {@link #afterPropertiesSet()};
                     * can also be called to re-initialize at runtime.
                     * @since 4.2.2
                     * @see #loadCaches()
                     */
                    // @ts-ignore
                    public initializeCaches(): void
                    /**
                     * Load the initial caches for this cache manager.
                     * <p>Called by {@link #afterPropertiesSet()} on startup.
                     * The returned collection may be empty but must not be {@code null}.
                     */
                    // @ts-ignore
                    abstract loadCaches(): Array<any>
                    // @ts-ignore
                    public getCache(name: java.lang.String | string): org.springframework.cache.Cache
                    // @ts-ignore
                    public getCacheNames(): Array<java.lang.String | string>
                    /**
                     * Check for a registered cache of the given name.
                     * In contrast to {@link #getCache(String)}, this method does not trigger
                     * the lazy creation of missing caches via {@link #getMissingCache(String)}.
                     * @param name the cache identifier (must not be {#code null})
                     * @return the associated Cache instance, or {#code null} if none found
                     * @since 4.1
                     * @see #getCache(String)
                     * @see #getMissingCache(String)
                     */
                    // @ts-ignore
                    lookupCache(name: java.lang.String | string): org.springframework.cache.Cache
                    /**
                     * Dynamically register an additional Cache with this manager.
                     * @param cache the Cache to register
                     * @deprecated as of Spring 4.3, in favor of {#link #getMissingCache(String)}
                     */
                    // @ts-ignore
                    addCache(cache: org.springframework.cache.Cache): void
                    /**
                     * Decorate the given Cache object if necessary.
                     * @param cache the Cache object to be added to this CacheManager
                     * @return the decorated Cache object to be used instead,
                     *  or simply the passed-in Cache object by default
                     */
                    // @ts-ignore
                    decorateCache(cache: org.springframework.cache.Cache): org.springframework.cache.Cache
                    /**
                     * Return a missing cache with the specified {@code name}, or {@code null} if
                     * such a cache does not exist or could not be created on demand.
                     * <p>Caches may be lazily created at runtime if the native provider supports it.
                     * If a lookup by name does not yield any result, an {@code AbstractCacheManager}
                     * subclass gets a chance to register such a cache at runtime. The returned cache
                     * will be automatically added to this cache manager.
                     * @param name the name of the cache to retrieve
                     * @return the missing cache, or {#code null} if no such cache exists or could be
                     *  created on demand
                     * @since 4.1
                     * @see #getCache(String)
                     */
                    // @ts-ignore
                    getMissingCache(name: java.lang.String | string): org.springframework.cache.Cache
                }
            }
        }
    }
}
