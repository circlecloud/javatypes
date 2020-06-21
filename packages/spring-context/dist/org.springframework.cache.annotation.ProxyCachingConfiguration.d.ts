declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * {@code @Configuration} class that registers the Spring infrastructure beans necessary
                 * to enable proxy-based annotation-driven cache management.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see EnableCaching
                 * @see CachingConfigurationSelector
                 */
                // @ts-ignore
                class ProxyCachingConfiguration extends org.springframework.cache.annotation.AbstractCachingConfiguration {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public cacheAdvisor(): org.springframework.cache.interceptor.BeanFactoryCacheOperationSourceAdvisor
                    // @ts-ignore
                    public cacheOperationSource(): org.springframework.cache.interceptor.CacheOperationSource
                    // @ts-ignore
                    public cacheInterceptor(): org.springframework.cache.interceptor.CacheInterceptor
                }
            }
        }
    }
}
