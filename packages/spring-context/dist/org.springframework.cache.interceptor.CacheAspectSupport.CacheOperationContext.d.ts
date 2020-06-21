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
                        constructor(metadata: org.springframework.cache.interceptor.CacheAspectSupport.CacheOperationMetadata, args: java.lang.Object[] | any[], target: java.lang.Object | any)
                        // @ts-ignore
                        public getOperation(): org.springframework.cache.interceptor.CacheOperation
                        // @ts-ignore
                        public getTarget(): any
                        // @ts-ignore
                        public getMethod(): java.lang.reflect.Method
                        // @ts-ignore
                        public getArgs(): any[]
                        // @ts-ignore
                        isConditionPassing(result: java.lang.Object | any): boolean
                        // @ts-ignore
                        canPutToCache(value: java.lang.Object | any): boolean
                        /**
                         * Compute the key for the given caching operation.
                         */
                        // @ts-ignore
                        generateKey(result: java.lang.Object | any): any
                        // @ts-ignore
                        getCaches(): Array<any>
                        // @ts-ignore
                        getCacheNames(): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
