declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * A base {@link CacheResolver} implementation that requires the concrete
                 * implementation to provide the collection of cache name(s) based on the
                 * invocation context.
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 4.1
                 */
                // @ts-ignore
                class AbstractCacheResolver extends java.lang.Object implements org.springframework.cache.interceptor.CacheResolver {
                    /**
                     * Construct a new {@code AbstractCacheResolver}.
                     * @see #setCacheManager
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new {@code AbstractCacheResolver} for the given {@link CacheManager}.
                     * @param cacheManager the CacheManager to use
                     */
                    // @ts-ignore
                    constructor(cacheManager: org.springframework.cache.CacheManager)
                    /**
                     * Set the {@link CacheManager} that this instance should use.
                     */
                    // @ts-ignore
                    setCacheManager(cacheManager: org.springframework.cache.CacheManager): void
                    /**
                     * Return the {@link CacheManager} that this instance uses.
                     */
                    // @ts-ignore
                    getCacheManager(): org.springframework.cache.CacheManager
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    resolveCaches(context: org.springframework.cache.interceptor.CacheOperationInvocationContext<any>): java.util.Collection<? extends org.springframework.cache.Cache>
                    /**
                     * Provide the name of the cache(s) to resolve against the current cache manager.
                     * <p>It is acceptable to return {@code null} to indicate that no cache could
                     * be resolved for this invocation.
                     * @param context the context of the particular invocation
                     * @return the cache name(s) to resolve, or {#code null} if no cache should be resolved
                     */
                    // @ts-ignore
                    abstract getCacheNames(context: org.springframework.cache.interceptor.CacheOperationInvocationContext<any>): java.util.Collection<java.lang.String>
                }
            }
        }
    }
}
