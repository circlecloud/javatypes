declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Base class for caching aspects, such as the {@link CacheInterceptor} or an
                 * AspectJ aspect.
                 * <p>This enables the underlying Spring caching infrastructure to be used easily
                 * to implement an aspect for any aspect system.
                 * <p>Subclasses are responsible for calling relevant methods in the correct order.
                 * <p>Uses the <b>Strategy</b> design pattern. A {@link CacheOperationSource} is
                 * used for determining caching operations, a {@link KeyGenerator} will build the
                 * cache keys, and a {@link CacheResolver} will resolve the actual cache(s) to use.
                 * <p>Note: A cache aspect is serializable but does not perform any actual caching
                 * after deserialization.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @author Sam Brannen
                 * @author Stephane Nicoll
                 * @since 3.1
                 */
                // @ts-ignore
                abstract class CacheAspectSupport extends org.springframework.cache.interceptor.AbstractCacheInvoker {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Configure this aspect with the given error handler, key generator and cache resolver/manager
                     * suppliers, applying the corresponding default if a supplier is not resolvable.
                     * @since 5.1
                     */
                    // @ts-ignore
                    public configure(errorHandler: java.util.function$.Supplier<org.springframework.cache.interceptor.CacheErrorHandler>, keyGenerator: java.util.function$.Supplier<org.springframework.cache.interceptor.KeyGenerator>, cacheResolver: java.util.function$.Supplier<org.springframework.cache.interceptor.CacheResolver>, cacheManager: java.util.function$.Supplier<org.springframework.cache.CacheManager>): void
                    /**
                     * Set one or more cache operation sources which are used to find the cache
                     * attributes. If more than one source is provided, they will be aggregated
                     * using a {@link CompositeCacheOperationSource}.
                     * @see #setCacheOperationSource
                     */
                    // @ts-ignore
                    public setCacheOperationSources(...cacheOperationSources: org.springframework.cache.interceptor.CacheOperationSource[]): void
                    /**
                     * Set the CacheOperationSource for this cache aspect.
                     * @since 5.1
                     * @see #setCacheOperationSources
                     */
                    // @ts-ignore
                    public setCacheOperationSource(cacheOperationSource: org.springframework.cache.interceptor.CacheOperationSource): void
                    /**
                     * Return the CacheOperationSource for this cache aspect.
                     */
                    // @ts-ignore
                    public getCacheOperationSource(): org.springframework.cache.interceptor.CacheOperationSource
                    /**
                     * Set the default {@link KeyGenerator} that this cache aspect should delegate to
                     * if no specific key generator has been set for the operation.
                     * <p>The default is a {@link SimpleKeyGenerator}.
                     */
                    // @ts-ignore
                    public setKeyGenerator(keyGenerator: org.springframework.cache.interceptor.KeyGenerator): void
                    /**
                     * Return the default {@link KeyGenerator} that this cache aspect delegates to.
                     */
                    // @ts-ignore
                    public getKeyGenerator(): org.springframework.cache.interceptor.KeyGenerator
                    /**
                     * Set the default {@link CacheResolver} that this cache aspect should delegate
                     * to if no specific cache resolver has been set for the operation.
                     * <p>The default resolver resolves the caches against their names and the
                     * default cache manager.
                     * @see #setCacheManager
                     * @see SimpleCacheResolver
                     */
                    // @ts-ignore
                    public setCacheResolver(cacheResolver: org.springframework.cache.interceptor.CacheResolver): void
                    /**
                     * Return the default {@link CacheResolver} that this cache aspect delegates to.
                     */
                    // @ts-ignore
                    public getCacheResolver(): org.springframework.cache.interceptor.CacheResolver
                    /**
                     * Set the {@link CacheManager} to use to create a default {@link CacheResolver}.
                     * Replace the current {@link CacheResolver}, if any.
                     * @see #setCacheResolver
                     * @see SimpleCacheResolver
                     */
                    // @ts-ignore
                    public setCacheManager(cacheManager: org.springframework.cache.CacheManager): void
                    /**
                     * Set the containing {@link BeanFactory} for {@link CacheManager} and other
                     * service lookups.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public afterSingletonsInstantiated(): void
                    /**
                     * Convenience method to return a String representation of this Method
                     * for use in logging. Can be overridden in subclasses to provide a
                     * different identifier for the given method.
                     * @param method the method we're interested in
                     * @param targetClass class the method is on
                     * @return log message identifying this method
                     * @see org.springframework.util.ClassUtils#getQualifiedMethodName
                     */
                    // @ts-ignore
                    methodIdentification(method: java.lang.reflect.Method, targetClass: java.lang.Class<any>): string
                    // @ts-ignore
                    getCaches(context: org.springframework.cache.interceptor.CacheOperationInvocationContext<org.springframework.cache.interceptor.CacheOperation>, cacheResolver: org.springframework.cache.interceptor.CacheResolver): Array<any>
                    // @ts-ignore
                    getOperationContext(operation: org.springframework.cache.interceptor.CacheOperation, method: java.lang.reflect.Method, args: java.lang.Object[] | any[], target: java.lang.Object | any, targetClass: java.lang.Class<any>): org.springframework.cache.interceptor.CacheAspectSupport.CacheOperationContext
                    /**
                     * Return the {@link CacheOperationMetadata} for the specified operation.
                     * <p>Resolve the {@link CacheResolver} and the {@link KeyGenerator} to be
                     * used for the operation.
                     * @param operation the operation
                     * @param method the method on which the operation is invoked
                     * @param targetClass the target type
                     * @return the resolved metadata for the operation
                     */
                    // @ts-ignore
                    getCacheOperationMetadata(operation: org.springframework.cache.interceptor.CacheOperation, method: java.lang.reflect.Method, targetClass: java.lang.Class<any>): org.springframework.cache.interceptor.CacheAspectSupport.CacheOperationMetadata
                    /**
                     * Return a bean with the specified name and type. Used to resolve services that
                     * are referenced by name in a {@link CacheOperation}.
                     * @param beanName the name of the bean, as defined by the operation
                     * @param expectedType type for the bean
                     * @return the bean matching that name
                     * @throws org.springframework.beans.factory.NoSuchBeanDefinitionException if such bean does not exist
                     * @see CacheOperation#getKeyGenerator()
                     * @see CacheOperation#getCacheManager()
                     * @see CacheOperation#getCacheResolver()
                     */
                    // @ts-ignore
                    getBean<T>(beanName: java.lang.String | string, expectedType: java.lang.Class<T>): T
                    /**
                     * Clear the cached metadata.
                     */
                    // @ts-ignore
                    clearMetadataCache(): void
                    // @ts-ignore
                    execute(invoker: org.springframework.cache.interceptor.CacheOperationInvoker, target: java.lang.Object | any, method: java.lang.reflect.Method, args: java.lang.Object[] | any[]): any
                    /**
                     * Execute the underlying operation (typically in case of cache miss) and return
                     * the result of the invocation. If an exception occurs it will be wrapped in a
                     * {@link CacheOperationInvoker.ThrowableWrapper}: the exception can be handled
                     * or modified but it <em>must</em> be wrapped in a
                     * {@link CacheOperationInvoker.ThrowableWrapper} as well.
                     * @param invoker the invoker handling the operation being cached
                     * @return the result of the invocation
                     * @see CacheOperationInvoker#invoke()
                     */
                    // @ts-ignore
                    invokeOperation(invoker: org.springframework.cache.interceptor.CacheOperationInvoker): any
                }
            }
        }
    }
}
