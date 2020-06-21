declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Composite {@link CacheOperationSource} implementation that iterates
                 * over a given array of {@code CacheOperationSource} instances.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                class CompositeCacheOperationSource extends java.lang.Object implements org.springframework.cache.interceptor.CacheOperationSource, java.io.Serializable {
                    /**
                     * Create a new CompositeCacheOperationSource for the given sources.
                     * @param cacheOperationSources the CacheOperationSource instances to combine
                     */
                    // @ts-ignore
                    constructor(...cacheOperationSources: org.springframework.cache.interceptor.CacheOperationSource[])
                    /**
                     * Return the {@code CacheOperationSource} instances that this
                     * {@code CompositeCacheOperationSource} combines.
                     */
                    // @ts-ignore
                    public getCacheOperationSources(): org.springframework.cache.interceptor.CacheOperationSource[]
                    // @ts-ignore
                    public isCandidateClass(targetClass: java.lang.Class<any>): boolean
                    // @ts-ignore
                    public getCacheOperations(method: java.lang.reflect.Method, targetClass: java.lang.Class<any>): Array<org.springframework.cache.interceptor.CacheOperation>
                }
            }
        }
    }
}
