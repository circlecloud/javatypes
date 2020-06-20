declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                namespace CacheAspectSupport {
                    /**
                     * A {@link CacheOperationInvocationContext} context for a {@link CacheOperation}.
                     */
                    // @ts-ignore
                    class CacheOperationContext extends java.lang.Object implements org.springframework.cache.interceptor.CacheOperationInvocationContext<org.springframework.cache.interceptor.CacheOperation> {
                        // @ts-ignore
                        constructor(metadata: org.springframework.cache.interceptor.CacheAspectSupport.CacheOperationMetadata, args: any[], target: any)
                        // @ts-ignore
                        getOperation(): org.springframework.cache.interceptor.CacheOperation
                        // @ts-ignore
                        getTarget(): java.lang.Object
                        // @ts-ignore
                        getMethod(): java.lang.reflect.Method
                        // @ts-ignore
                        getArgs(): java.lang.Object[]
                        // @ts-ignore
                        isConditionPassing(result: any): boolean
                        // @ts-ignore
                        canPutToCache(value: any): boolean
                        /**
                         * Compute the key for the given caching operation.
                         */
                        // @ts-ignore
                        generateKey(result: any): java.lang.Object
                        // @ts-ignore
                        getCaches(): java.util.Collection<? extends org.springframework.cache.Cache>
                        // @ts-ignore
                        getCacheNames(): java.util.Collection<java.lang.String>
                    }
                }
            }
        }
    }
}
