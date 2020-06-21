declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Abstract base {@code @Configuration} class providing common structure
                 * for enabling Spring's annotation-driven cache management capability.
                 * @author Chris Beams
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see EnableCaching
                 */
                // @ts-ignore
                abstract class AbstractCachingConfiguration extends java.lang.Object implements org.springframework.context.annotation.ImportAware {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    enableCaching: AnnotationAttributes
                    // @ts-ignore
                    cacheManager: java.util.function$.Supplier<org.springframework.cache.CacheManager>
                    // @ts-ignore
                    cacheResolver: java.util.function$.Supplier<org.springframework.cache.interceptor.CacheResolver>
                    // @ts-ignore
                    keyGenerator: java.util.function$.Supplier<org.springframework.cache.interceptor.KeyGenerator>
                    // @ts-ignore
                    errorHandler: java.util.function$.Supplier<org.springframework.cache.interceptor.CacheErrorHandler>
                    // @ts-ignore
                    public setImportMetadata(importMetadata: AnnotationMetadata): void
                    /**
                     * Extract the configuration from the nominated {@link CachingConfigurer}.
                     */
                    // @ts-ignore
                    useCachingConfigurer(config: org.springframework.cache.annotation.CachingConfigurer): void
                }
            }
        }
    }
}
