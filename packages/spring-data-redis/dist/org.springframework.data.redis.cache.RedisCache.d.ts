declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace cache {
                    /**
                     * {@link org.springframework.cache.Cache} implementation using for Redis as underlying store.
                     * <p/>
                     * Use {@link RedisCacheManager} to create {@link RedisCache} instances.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @see RedisCacheConfiguration
                     * @see RedisCacheWriter
                     * @since 2.0
                     */
                    // @ts-ignore
                    class RedisCache extends AbstractValueAdaptingCache {
                        /**
                         * Create new {@link RedisCache}.
                         * @param name must not be {#literal null}.
                         * @param cacheWriter must not be {#literal null}.
                         * @param cacheConfig must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, cacheWriter: org.springframework.data.redis.cache.RedisCacheWriter, cacheConfig: org.springframework.data.redis.cache.RedisCacheConfiguration)
                        // @ts-ignore
                        lookup(key: java.lang.Object | any): any
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public getNativeCache(): org.springframework.data.redis.cache.RedisCacheWriter
                        // @ts-ignore
                        public get<T>(key: java.lang.Object | any, valueLoader: java.util.concurrent.Callable<T>): T
                        // @ts-ignore
                        public put(key: java.lang.Object | any, value: java.lang.Object | any): void
                        // @ts-ignore
                        public putIfAbsent(key: java.lang.Object | any, value: java.lang.Object | any): ValueWrapper
                        // @ts-ignore
                        public evict(key: java.lang.Object | any): void
                        // @ts-ignore
                        public clear(): void
                        /**
                         * Get {@link RedisCacheConfiguration} used.
                         * @return immutable {#link RedisCacheConfiguration}. Never {@literal null}.
                         */
                        // @ts-ignore
                        public getCacheConfiguration(): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Customization hook called before passing object to
                         * {@link org.springframework.data.redis.serializer.RedisSerializer}.
                         * @param value can be {#literal null}.
                         * @return preprocessed value. Can be {#literal null}.
                         */
                        // @ts-ignore
                        preProcessCacheValue(value: java.lang.Object | any): any
                        /**
                         * Serialize the key.
                         * @param cacheKey must not be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        serializeCacheKey(cacheKey: java.lang.String | string): number /*byte*/[]
                        /**
                         * Serialize the value to cache.
                         * @param value must not be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        serializeCacheValue(value: java.lang.Object | any): number /*byte*/[]
                        /**
                         * Deserialize the given value to the actual cache value.
                         * @param value must not be {#literal null}.
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        deserializeCacheValue(value: number /*byte*/[]): any
                        /**
                         * Customization hook for creating cache key before it gets serialized.
                         * @param key will never be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        createCacheKey(key: java.lang.Object | any): string
                        /**
                         * Convert {@code key} to a {@link String} representation used for cache key creation.
                         * @param key will never be {#literal null}.
                         * @return never {#literal null}.
                         * @throws IllegalStateException if {#code key} cannot be converted to {@link String}.
                         */
                        // @ts-ignore
                        convertKey(key: java.lang.Object | any): string
                    }
                }
            }
        }
    }
}
