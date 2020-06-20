declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * An implementation of {@link CachingConfigurer} with empty methods allowing
                 * sub-classes to override only the methods they're interested in.
                 * @author Stephane Nicoll
                 * @since 4.1
                 * @see CachingConfigurer
                 */
                // @ts-ignore
                class CachingConfigurerSupport extends java.lang.Object implements org.springframework.cache.annotation.CachingConfigurer {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    cacheManager(): org.springframework.cache.CacheManager
                    // @ts-ignore
                    cacheResolver(): org.springframework.cache.interceptor.CacheResolver
                    // @ts-ignore
                    keyGenerator(): org.springframework.cache.interceptor.KeyGenerator
                    // @ts-ignore
                    errorHandler(): org.springframework.cache.interceptor.CacheErrorHandler
                }
            }
        }
    }
}
