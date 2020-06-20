declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * A simple {@link CacheResolver} that resolves the {@link Cache} instance(s)
                 * based on a configurable {@link CacheManager} and the name of the
                 * cache(s) as provided by {@link BasicOperation#getCacheNames() getCacheNames()}.
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 4.1
                 * @see BasicOperation#getCacheNames()
                 */
                // @ts-ignore
                class SimpleCacheResolver extends org.springframework.cache.interceptor.AbstractCacheResolver {
                    /**
                     * Construct a new {@code SimpleCacheResolver}.
                     * @see #setCacheManager
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new {@code SimpleCacheResolver} for the given {@link CacheManager}.
                     * @param cacheManager the CacheManager to use
                     */
                    // @ts-ignore
                    constructor(cacheManager: org.springframework.cache.CacheManager)
                    // @ts-ignore
                    getCacheNames(context: org.springframework.cache.interceptor.CacheOperationInvocationContext<any>): java.util.Collection<java.lang.String>
                }
            }
        }
    }
}
