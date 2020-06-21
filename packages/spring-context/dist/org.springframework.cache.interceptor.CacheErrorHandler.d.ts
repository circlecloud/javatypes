declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * A strategy for handling cache-related errors. In most cases, any
                 * exception thrown by the provider should simply be thrown back at
                 * the client but, in some circumstances, the infrastructure may need
                 * to handle cache-provider exceptions in a different way.
                 * <p>Typically, failing to retrieve an object from the cache with
                 * a given id can be transparently managed as a cache miss by not
                 * throwing back such exception.
                 * @author Stephane Nicoll
                 * @since 4.1
                 */
                // @ts-ignore
                interface CacheErrorHandler {
                    /**
                     * Handle the given runtime exception thrown by the cache provider when
                     * retrieving an item with the specified {@code key}, possibly
                     * rethrowing it as a fatal exception.
                     * @param exception the exception thrown by the cache provider
                     * @param cache the cache
                     * @param key the key used to get the item
                     * @see Cache#get(Object)
                     */
                    // @ts-ignore
                    handleCacheGetError(exception: java.lang.RuntimeException, cache: org.springframework.cache.Cache, key: java.lang.Object | any): void
                    /**
                     * Handle the given runtime exception thrown by the cache provider when
                     * updating an item with the specified {@code key} and {@code value},
                     * possibly rethrowing it as a fatal exception.
                     * @param exception the exception thrown by the cache provider
                     * @param cache the cache
                     * @param key the key used to update the item
                     * @param value the value to associate with the key
                     * @see Cache#put(Object, Object)
                     */
                    // @ts-ignore
                    handleCachePutError(exception: java.lang.RuntimeException, cache: org.springframework.cache.Cache, key: java.lang.Object | any, value: java.lang.Object | any): void
                    /**
                     * Handle the given runtime exception thrown by the cache provider when
                     * clearing an item with the specified {@code key}, possibly rethrowing
                     * it as a fatal exception.
                     * @param exception the exception thrown by the cache provider
                     * @param cache the cache
                     * @param key the key used to clear the item
                     */
                    // @ts-ignore
                    handleCacheEvictError(exception: java.lang.RuntimeException, cache: org.springframework.cache.Cache, key: java.lang.Object | any): void
                    /**
                     * Handle the given runtime exception thrown by the cache provider when
                     * clearing the specified {@link Cache}, possibly rethrowing it as a
                     * fatal exception.
                     * @param exception the exception thrown by the cache provider
                     * @param cache the cache to clear
                     */
                    // @ts-ignore
                    handleCacheClearError(exception: java.lang.RuntimeException, cache: org.springframework.cache.Cache): void
                }
            }
        }
    }
}
