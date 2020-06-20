declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Class describing a cache 'evict' operation.
                 * @author Costin Leau
                 * @author Marcin Kamionowski
                 * @since 3.1
                 */
                // @ts-ignore
                class CacheEvictOperation extends org.springframework.cache.interceptor.CacheOperation {
                    /**
                     * Create a new {@link CacheEvictOperation} instance from the given builder.
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(b: org.springframework.cache.interceptor.CacheEvictOperation.Builder)
                    // @ts-ignore
                    isCacheWide(): boolean
                    // @ts-ignore
                    isBeforeInvocation(): boolean
                }
            }
        }
    }
}
