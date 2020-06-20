declare namespace org {
    namespace springframework {
        namespace cache {
            namespace support {
                /**
                 * Composite {@link CacheManager} implementation that iterates over
                 * a given collection of delegate {@link CacheManager} instances.
                 * <p>Allows {@link NoOpCacheManager} to be automatically added to the end of
                 * the list for handling cache declarations without a backing store. Otherwise,
                 * any custom {@link CacheManager} may play that role of the last delegate as
                 * well, lazily creating cache regions for any requested name.
                 * <p>Note: Regular CacheManagers that this composite manager delegates to need
                 * to return {@code null} from {@link #getCache(String)} if they are unaware of
                 * the specified cache name, allowing for iteration to the next delegate in line.
                 * However, most {@link CacheManager} implementations fall back to lazy creation
                 * of named caches once requested; check out the specific configuration details
                 * for a 'static' mode with fixed cache names, if available.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see #setFallbackToNoOpCache
                 * @see org.springframework.cache.concurrent.ConcurrentMapCacheManager#setCacheNames
                 */
                // @ts-ignore
                class CompositeCacheManager extends java.lang.Object implements org.springframework.cache.CacheManager {
                    /**
                     * Construct an empty CompositeCacheManager, with delegate CacheManagers to
                     * be added via the {@link #setCacheManagers "cacheManagers"} property.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a CompositeCacheManager from the given delegate CacheManagers.
                     * @param cacheManagers the CacheManagers to delegate to
                     */
                    // @ts-ignore
                    constructor(...cacheManagers: org.springframework.cache.CacheManager[])
                    /**
                     * Specify the CacheManagers to delegate to.
                     */
                    // @ts-ignore
                    setCacheManagers(cacheManagers: Array<org.springframework.cache.CacheManager>): void
                    /**
                     * Indicate whether a {@link NoOpCacheManager} should be added at the end of the delegate list.
                     * In this case, any {@code getCache} requests not handled by the configured CacheManagers will
                     * be automatically handled by the {@link NoOpCacheManager} (and hence never return {@code null}).
                     */
                    // @ts-ignore
                    setFallbackToNoOpCache(fallbackToNoOpCache: boolean): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    getCache(name: string): org.springframework.cache.Cache
                    // @ts-ignore
                    getCacheNames(): java.util.Collection<java.lang.String>
                }
            }
        }
    }
}
