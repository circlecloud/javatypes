declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace cache {
                    namespace RedisCacheManager {
                        /**
                         * Configurator for creating {@link RedisCacheManager}.
                         * @author Christoph Strobl
                         * @author Mark Strobl
                         * @author Kezhu Wang
                         * @since 2.0
                         */
                        // @ts-ignore
                        class RedisCacheManagerBuilder extends java.lang.Object {
                            /**
                             * Entry point for builder style {@link RedisCacheManager} configuration.
                             * @param connectionFactory must not be {#literal null}.
                             * @return new {#link RedisCacheManagerBuilder}.
                             */
                            // @ts-ignore
                            public static fromConnectionFactory(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                            /**
                             * Entry point for builder style {@link RedisCacheManager} configuration.
                             * @param cacheWriter must not be {#literal null}.
                             * @return new {#link RedisCacheManagerBuilder}.
                             */
                            // @ts-ignore
                            public static fromCacheWriter(cacheWriter: org.springframework.data.redis.cache.RedisCacheWriter): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                            /**
                             * Define a default {@link RedisCacheConfiguration} applied to dynamically created {@link RedisCache}s.
                             * @param defaultCacheConfiguration must not be {#literal null}.
                             * @return this {#link RedisCacheManagerBuilder}.
                             */
                            // @ts-ignore
                            public cacheDefaults(defaultCacheConfiguration: org.springframework.data.redis.cache.RedisCacheConfiguration): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                            /**
                             * Enable {@link RedisCache}s to synchronize cache put/evict operations with ongoing Spring-managed transactions.
                             * @return this {#link RedisCacheManagerBuilder}.
                             */
                            // @ts-ignore
                            public transactionAware(): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                            /**
                             * Append a {@link Set} of cache names to be pre initialized with current {@link RedisCacheConfiguration}.
                             * <strong>NOTE:</strong> This calls depends on {@link #cacheDefaults(RedisCacheConfiguration)} using whatever
                             * default {@link RedisCacheConfiguration} is present at the time of invoking this method.
                             * @param cacheNames must not be {#literal null}.
                             * @return this {#link RedisCacheManagerBuilder}.
                             */
                            // @ts-ignore
                            public initialCacheNames(cacheNames: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                            /**
                             * Append a {@link Map} of cache name/{@link RedisCacheConfiguration} pairs to be pre initialized.
                             * @param cacheConfigurations must not be {#literal null}.
                             * @return this {#link RedisCacheManagerBuilder}.
                             */
                            // @ts-ignore
                            public withInitialCacheConfigurations(cacheConfigurations: java.util.Map<java.lang.String | string, org.springframework.data.redis.cache.RedisCacheConfiguration>): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                            /**
                             * Disable in-flight {@link org.springframework.cache.Cache} creation for unconfigured caches.
                             * <p />
                             * {@link RedisCacheManager#getMissingCache(String)} returns {@literal null} for any unconfigured
                             * {@link org.springframework.cache.Cache} instead of a new {@link RedisCache} instance. This allows eg.
                             * {@link org.springframework.cache.support.CompositeCacheManager} to chime in.
                             * @return this {#link RedisCacheManagerBuilder}.
                             * @since 2.0.4
                             */
                            // @ts-ignore
                            public disableCreateOnMissingCache(): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                            /**
                             * Create new instance of {@link RedisCacheManager} with configuration options applied.
                             * @return new instance of {#link RedisCacheManager}.
                             */
                            // @ts-ignore
                            public build(): org.springframework.data.redis.cache.RedisCacheManager
                        }
                    }
                }
            }
        }
    }
}
