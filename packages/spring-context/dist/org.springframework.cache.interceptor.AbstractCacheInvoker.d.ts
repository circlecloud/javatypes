declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * A base component for invoking {@link Cache} operations and using a
                 * configurable {@link CacheErrorHandler} when an exception occurs.
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 4.1
                 * @see org.springframework.cache.interceptor.CacheErrorHandler
                 */
                // @ts-ignore
                class AbstractCacheInvoker extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(errorHandler: org.springframework.cache.interceptor.CacheErrorHandler)
                    // @ts-ignore
                    errorHandler: object
                    /**
                     * Set the {@link CacheErrorHandler} instance to use to handle errors
                     * thrown by the cache provider. By default, a {@link SimpleCacheErrorHandler}
                     * is used who throws any exception as is.
                     */
                    // @ts-ignore
                    setErrorHandler(errorHandler: org.springframework.cache.interceptor.CacheErrorHandler): void
                    /**
                     * Return the {@link CacheErrorHandler} to use.
                     */
                    // @ts-ignore
                    getErrorHandler(): org.springframework.cache.interceptor.CacheErrorHandler
                    /**
                     * Execute {@link Cache#get(Object)} on the specified {@link Cache} and
                     * invoke the error handler if an exception occurs. Return {@code null}
                     * if the handler does not throw any exception, which simulates a cache
                     * miss in case of error.
                     * @see Cache#get(Object)
                     */
                    // @ts-ignore
                    doGet(cache: org.springframework.cache.Cache, key: any): org.springframework.cache.Cache.ValueWrapper
                    /**
                     * Execute {@link Cache#put(Object, Object)} on the specified {@link Cache}
                     * and invoke the error handler if an exception occurs.
                     */
                    // @ts-ignore
                    doPut(cache: org.springframework.cache.Cache, key: any, result: any): void
                    /**
                     * Execute {@link Cache#evict(Object)}/{@link Cache#evictIfPresent(Object)} on the
                     * specified {@link Cache} and invoke the error handler if an exception occurs.
                     */
                    // @ts-ignore
                    doEvict(cache: org.springframework.cache.Cache, key: any, immediate: boolean): void
                    /**
                     * Execute {@link Cache#clear()} on the specified {@link Cache} and
                     * invoke the error handler if an exception occurs.
                     */
                    // @ts-ignore
                    doClear(cache: org.springframework.cache.Cache, immediate: boolean): void
                }
            }
        }
    }
}
