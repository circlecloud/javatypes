declare namespace org {
    namespace springframework {
        namespace cache {
            namespace support {
                /**
                 * A basic, no operation {@link CacheManager} implementation suitable
                 * for disabling caching, typically used for backing cache declarations
                 * without an actual backing store.
                 * <p>Will simply accept any items into the cache not actually storing them.
                 * @author Costin Leau
                 * @author Stephane Nicoll
                 * @since 3.1
                 * @see CompositeCacheManager
                 */
                // @ts-ignore
                class NoOpCacheManager extends java.lang.Object implements org.springframework.cache.CacheManager {
                    // @ts-ignore
                    constructor()
                    /**
                     * This implementation always returns a {@link Cache} implementation that will not store items.
                     * Additionally, the request cache will be remembered by the manager for consistency.
                     */
                    // @ts-ignore
                    public getCache(name: java.lang.String | string): org.springframework.cache.Cache
                    /**
                     * This implementation returns the name of the caches previously requested.
                     */
                    // @ts-ignore
                    public getCacheNames(): Array<java.lang.String | string>
                }
            }
        }
    }
}
