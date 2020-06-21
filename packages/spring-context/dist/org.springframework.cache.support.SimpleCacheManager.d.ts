declare namespace org {
    namespace springframework {
        namespace cache {
            namespace support {
                /**
                 * Simple cache manager working against a given collection of caches.
                 * Useful for testing or simple caching declarations.
                 * @author Costin Leau
                 * @since 3.1
                 */
                // @ts-ignore
                class SimpleCacheManager extends org.springframework.cache.support.AbstractCacheManager {
                    // @ts-ignore
                    constructor()
                    /**
                     * Specify the collection of Cache instances to use for this CacheManager.
                     */
                    // @ts-ignore
                    public setCaches(caches: java.util.Collection<any> | Array<any>): void
                    // @ts-ignore
                    loadCaches(): Array<any>
                }
            }
        }
    }
}
