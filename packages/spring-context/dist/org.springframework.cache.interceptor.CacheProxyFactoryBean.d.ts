declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Proxy factory bean for simplified declarative caching handling.
                 * This is a convenient alternative to a standard AOP
                 * {@link org.springframework.aop.framework.ProxyFactoryBean}
                 * with a separate {@link CacheInterceptor} definition.
                 * <p>This class is designed to facilitate declarative cache demarcation: namely, wrapping
                 * a singleton target object with a caching proxy, proxying all the interfaces that the
                 * target implements. Exists primarily for third-party framework integration.
                 * <strong>Users should favor the {@code cache:} XML namespace
                 * {@link org.springframework.cache.annotation.Cacheable @Cacheable} annotation.</strong>
                 * See the
                 * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/integration.html#cache-annotations">declarative annotation-based caching</a>
                 * section of the Spring reference documentation for more information.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see org.springframework.aop.framework.ProxyFactoryBean
                 * @see CacheInterceptor
                 */
                // @ts-ignore
                class CacheProxyFactoryBean extends AbstractSingletonProxyFactoryBean {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set one or more sources to find cache operations.
                     * @see CacheInterceptor#setCacheOperationSources
                     */
                    // @ts-ignore
                    public setCacheOperationSources(...cacheOperationSources: org.springframework.cache.interceptor.CacheOperationSource[]): void
                    /**
                     * Set the default {@link KeyGenerator} that this cache aspect should delegate to
                     * if no specific key generator has been set for the operation.
                     * <p>The default is a {@link SimpleKeyGenerator}.
                     * @since 5.0.3
                     * @see CacheInterceptor#setKeyGenerator
                     */
                    // @ts-ignore
                    public setKeyGenerator(keyGenerator: org.springframework.cache.interceptor.KeyGenerator): void
                    /**
                     * Set the default {@link CacheResolver} that this cache aspect should delegate
                     * to if no specific cache resolver has been set for the operation.
                     * <p>The default resolver resolves the caches against their names and the
                     * default cache manager.
                     * @since 5.0.3
                     * @see CacheInterceptor#setCacheResolver
                     */
                    // @ts-ignore
                    public setCacheResolver(cacheResolver: org.springframework.cache.interceptor.CacheResolver): void
                    /**
                     * Set the {@link CacheManager} to use to create a default {@link CacheResolver}.
                     * Replace the current {@link CacheResolver}, if any.
                     * @since 5.0.3
                     * @see CacheInterceptor#setCacheManager
                     */
                    // @ts-ignore
                    public setCacheManager(cacheManager: org.springframework.cache.CacheManager): void
                    /**
                     * Set a pointcut, i.e. a bean that triggers conditional invocation of the
                     * {@link CacheInterceptor} depending on the method and attributes passed.
                     * <p>Note: Additional interceptors are always invoked.
                     * @see #setPreInterceptors
                     * @see #setPostInterceptors
                     */
                    // @ts-ignore
                    public setPointcut(pointcut: Pointcut): void
                    // @ts-ignore
                    public setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    public afterSingletonsInstantiated(): void
                    // @ts-ignore
                    createMainInterceptor(): any
                }
            }
        }
    }
}
