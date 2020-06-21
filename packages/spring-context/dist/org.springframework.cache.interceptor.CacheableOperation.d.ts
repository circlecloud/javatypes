declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Class describing a cache 'cacheable' operation.
                 * @author Costin Leau
                 * @author Phillip Webb
                 * @author Marcin Kamionowski
                 * @since 3.1
                 */
                // @ts-ignore
                class CacheableOperation extends org.springframework.cache.interceptor.CacheOperation {
                    /**
                     * Create a new {@link CacheableOperation} instance from the given builder.
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(b: org.springframework.cache.interceptor.CacheableOperation.Builder)
                    // @ts-ignore
                    public getUnless(): string
                    // @ts-ignore
                    public isSync(): boolean
                }
            }
        }
    }
}
