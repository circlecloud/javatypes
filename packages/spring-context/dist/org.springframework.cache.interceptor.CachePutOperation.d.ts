declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Class describing a cache 'put' operation.
                 * @author Costin Leau
                 * @author Phillip Webb
                 * @author Marcin Kamionowski
                 * @since 3.1
                 */
                // @ts-ignore
                class CachePutOperation extends org.springframework.cache.interceptor.CacheOperation {
                    /**
                     * Create a new {@link CachePutOperation} instance from the given builder.
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(b: org.springframework.cache.interceptor.CachePutOperation.Builder)
                    // @ts-ignore
                    public getUnless(): string
                }
            }
        }
    }
}
