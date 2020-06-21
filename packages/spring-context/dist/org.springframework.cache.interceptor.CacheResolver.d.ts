declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Determine the {@link Cache} instance(s) to use for an intercepted method invocation.
                 * <p>Implementations must be thread-safe.
                 * @author Stephane Nicoll
                 * @since 4.1
                 */
                // @ts-ignore
                interface CacheResolver {
                    /**
                     * Return the cache(s) to use for the specified invocation.
                     * @param context the context of the particular invocation
                     * @return the cache(s) to use (never {#code null})
                     * @throws IllegalStateException if cache resolution failed
                     */
                    // @ts-ignore
                    resolveCaches(context: org.springframework.cache.interceptor.CacheOperationInvocationContext<any>): Array<any>
                }
            }
        }
    }
}
