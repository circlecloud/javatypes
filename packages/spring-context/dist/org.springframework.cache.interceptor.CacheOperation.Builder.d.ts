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
                    abstract class Builder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        // @ts-ignore
                        public setCacheName(cacheName: java.lang.String | string): void
                        // @ts-ignore
                        public setCacheNames(...cacheNames: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public getCacheNames(): Array<java.lang.String | string>
                        // @ts-ignore
                        public setKey(key: java.lang.String | string): void
                        // @ts-ignore
                        public getKey(): string
                        // @ts-ignore
                        public getKeyGenerator(): string
                        // @ts-ignore
                        public getCacheManager(): string
                        // @ts-ignore
                        public getCacheResolver(): string
                        // @ts-ignore
                        public setKeyGenerator(keyGenerator: java.lang.String | string): void
                        // @ts-ignore
                        public setCacheManager(cacheManager: java.lang.String | string): void
                        // @ts-ignore
                        public setCacheResolver(cacheResolver: java.lang.String | string): void
                        // @ts-ignore
                        public setCondition(condition: java.lang.String | string): void
                        /**
                         * Return an identifying description for this caching operation.
                         * <p>Available to subclasses, for inclusion in their {@code toString()} result.
                         */
                        // @ts-ignore
                        getOperationDescription(): java.lang.StringBuilder
                        // @ts-ignore
                        public abstract build(): org.springframework.cache.interceptor.CacheOperation
                    }
                }
            }
        }
    }
}
