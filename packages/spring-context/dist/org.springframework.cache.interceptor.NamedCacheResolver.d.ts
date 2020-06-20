declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * A {@link CacheResolver} that forces the resolution to a configurable
                 * collection of name(s) against a given {@link CacheManager}.
                 * @author Stephane Nicoll
                 * @since 4.1
                 */
                // @ts-ignore
                class NamedCacheResolver extends org.springframework.cache.interceptor.AbstractCacheResolver {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(cacheManager: org.springframework.cache.CacheManager, ...cacheNames: string[])
                    /**
                     * Set the cache name(s) that this resolver should use.
                     */
                    // @ts-ignore
                    setCacheNames(cacheNames: Array<java.lang.String>): void
                    // @ts-ignore
                    getCacheNames(context: org.springframework.cache.interceptor.CacheOperationInvocationContext<any>): java.util.Collection<java.lang.String>
                }
            }
        }
    }
}
