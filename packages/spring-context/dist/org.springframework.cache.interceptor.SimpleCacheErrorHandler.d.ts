declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * A simple {@link CacheErrorHandler} that does not handle the
                 * exception at all, simply throwing it back at the client.
                 * @author Stephane Nicoll
                 * @since 4.1
                 */
                // @ts-ignore
                class SimpleCacheErrorHandler extends java.lang.Object implements org.springframework.cache.interceptor.CacheErrorHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public handleCacheGetError(exception: java.lang.RuntimeException, cache: org.springframework.cache.Cache, key: java.lang.Object | any): void
                    // @ts-ignore
                    public handleCachePutError(exception: java.lang.RuntimeException, cache: org.springframework.cache.Cache, key: java.lang.Object | any, value: java.lang.Object | any): void
                    // @ts-ignore
                    public handleCacheEvictError(exception: java.lang.RuntimeException, cache: org.springframework.cache.Cache, key: java.lang.Object | any): void
                    // @ts-ignore
                    public handleCacheClearError(exception: java.lang.RuntimeException, cache: org.springframework.cache.Cache): void
                }
            }
        }
    }
}
