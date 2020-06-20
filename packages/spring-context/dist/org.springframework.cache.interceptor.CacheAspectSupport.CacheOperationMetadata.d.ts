declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                namespace CacheAspectSupport {
                    /**
                     * Metadata of a cache operation that does not depend on a particular invocation
                     * which makes it a good candidate for caching.
                     */
                    // @ts-ignore
                    class CacheOperationMetadata extends java.lang.Object {
                        // @ts-ignore
                        constructor(operation: org.springframework.cache.interceptor.CacheOperation, method: java.lang.reflect.Method, targetClass: java.lang.Class<any>, keyGenerator: org.springframework.cache.interceptor.KeyGenerator, cacheResolver: org.springframework.cache.interceptor.CacheResolver)
                    }
                }
            }
        }
    }
}
