declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                namespace CacheOperation {
                    /**
                     * Base class for builders that can be used to create a {@link CacheOperation}.
                     * @since 4.3
                     */
                    // @ts-ignore
                    class Builder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        setName(name: string): void
                        // @ts-ignore
                        setCacheName(cacheName: string): void
                        // @ts-ignore
                        setCacheNames(...cacheNames: string[]): void
                        // @ts-ignore
                        getCacheNames(): java.util.Set<java.lang.String>
                        // @ts-ignore
                        setKey(key: string): void
                        // @ts-ignore
                        getKey(): java.lang.String
                        // @ts-ignore
                        getKeyGenerator(): java.lang.String
                        // @ts-ignore
                        getCacheManager(): java.lang.String
                        // @ts-ignore
                        getCacheResolver(): java.lang.String
                        // @ts-ignore
                        setKeyGenerator(keyGenerator: string): void
                        // @ts-ignore
                        setCacheManager(cacheManager: string): void
                        // @ts-ignore
                        setCacheResolver(cacheResolver: string): void
                        // @ts-ignore
                        setCondition(condition: string): void
                        /**
                         * Return an identifying description for this caching operation.
                         * <p>Available to subclasses, for inclusion in their {@code toString()} result.
                         */
                        // @ts-ignore
                        getOperationDescription(): java.lang.StringBuilder
                        // @ts-ignore
                        abstract build(): org.springframework.cache.interceptor.CacheOperation
                    }
                }
            }
        }
    }
}
