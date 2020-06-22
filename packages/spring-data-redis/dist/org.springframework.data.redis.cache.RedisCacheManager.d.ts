declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace cache {
                    /**
                     * {@link org.springframework.cache.CacheManager} backed by a {@link RedisCache Redis} cache.
                     * <p />
                     * This cache manager creates caches by default upon first write. Empty caches are not visible on Redis due to how Redis
                     * represents empty data structures.
                     * <p />
                     * Caches requiring a different {@link RedisCacheConfiguration} than the default configuration can be specified via
                     * {@link RedisCacheManagerBuilder#withInitialCacheConfigurations(Map)}.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     * @see RedisCacheConfiguration
                     * @see RedisCacheWriter
                     */
                    // @ts-ignore
                    class RedisCacheManager extends AbstractTransactionSupportingCacheManager {
                        /**
                         * Creates new {@link RedisCacheManager} using given {@link RedisCacheWriter} and default
                         * {@link RedisCacheConfiguration}.
                         * @param cacheWriter must not be {#literal null}.
                         * @param defaultCacheConfiguration must not be {#literal null}. Maybe just use
                         *           {@link RedisCacheConfiguration#defaultCacheConfig()}.
                         */
                        // @ts-ignore
                        constructor(cacheWriter: org.springframework.data.redis.cache.RedisCacheWriter, defaultCacheConfiguration: org.springframework.data.redis.cache.RedisCacheConfiguration)
                        /**
                         * Creates new {@link RedisCacheManager} using given {@link RedisCacheWriter} and default
                         * {@link RedisCacheConfiguration}.
                         * @param cacheWriter must not be {#literal null}.
                         * @param defaultCacheConfiguration must not be {#literal null}. Maybe just use
                         *           {@link RedisCacheConfiguration#defaultCacheConfig()}.
                         * @param initialCacheNames optional set of known cache names that will be created with given
                         *           {#literal defaultCacheConfiguration}.
                         */
                        // @ts-ignore
                        constructor(cacheWriter: org.springframework.data.redis.cache.RedisCacheWriter, defaultCacheConfiguration: org.springframework.data.redis.cache.RedisCacheConfiguration, ...initialCacheNames: java.lang.String[] | string[])
                        /**
                         * Creates new {@link RedisCacheManager} using given {@link RedisCacheWriter} and default
                         * {@link RedisCacheConfiguration}.
                         * @param cacheWriter must not be {#literal null}.
                         * @param defaultCacheConfiguration must not be {#literal null}. Maybe just use
                         *           {@link RedisCacheConfiguration#defaultCacheConfig()}.
                         * @param allowInFlightCacheCreation if set to {#literal true} no new caches can be acquire at runtime but limited to
                         *           the given list of initial cache names.
                         * @param initialCacheNames optional set of known cache names that will be created with given
                         *           {#literal defaultCacheConfiguration}.
                         * @since 2.0.4
                         */
                        // @ts-ignore
                        constructor(cacheWriter: org.springframework.data.redis.cache.RedisCacheWriter, defaultCacheConfiguration: org.springframework.data.redis.cache.RedisCacheConfiguration, allowInFlightCacheCreation: boolean, ...initialCacheNames: java.lang.String[] | string[])
                        /**
                         * Creates new {@link RedisCacheManager} using given {@link RedisCacheWriter} and default
                         * {@link RedisCacheConfiguration}.
                         * @param cacheWriter must not be {#literal null}.
                         * @param defaultCacheConfiguration must not be {#literal null}. Maybe just use
                         *           {@link RedisCacheConfiguration#defaultCacheConfig()}.
                         * @param initialCacheConfigurations Map of known cache names along with the configuration to use for those caches.
                         *           Must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(cacheWriter: org.springframework.data.redis.cache.RedisCacheWriter, defaultCacheConfiguration: org.springframework.data.redis.cache.RedisCacheConfiguration, initialCacheConfigurations: java.util.Map<java.lang.String | string, org.springframework.data.redis.cache.RedisCacheConfiguration>)
                        /**
                         * Creates new {@link RedisCacheManager} using given {@link RedisCacheWriter} and default
                         * {@link RedisCacheConfiguration}.
                         * @param cacheWriter must not be {#literal null}.
                         * @param defaultCacheConfiguration must not be {#literal null}. Maybe just use
                         *           {@link RedisCacheConfiguration#defaultCacheConfig()}.
                         * @param initialCacheConfigurations Map of known cache names along with the configuration to use for those caches.
                         *           Must not be {#literal null}.
                         * @param allowInFlightCacheCreation if set to {#literal false} this cache manager is limited to the initial cache
                         *           configurations and will not create new caches at runtime.
                         * @since 2.0.4
                         */
                        // @ts-ignore
                        constructor(cacheWriter: org.springframework.data.redis.cache.RedisCacheWriter, defaultCacheConfiguration: org.springframework.data.redis.cache.RedisCacheConfiguration, initialCacheConfigurations: java.util.Map<java.lang.String | string, org.springframework.data.redis.cache.RedisCacheConfiguration>, allowInFlightCacheCreation: boolean)
                        /**
                         * Create a new {@link RedisCacheManager} with defaults applied.
                         * <dl>
                         * <dt>locking</dt>
                         * <dd>disabled</dd>
                         * <dt>cache configuration</dt>
                         * <dd>{@link RedisCacheConfiguration#defaultCacheConfig()}</dd>
                         * <dt>initial caches</dt>
                         * <dd>none</dd>
                         * <dt>transaction aware</dt>
                         * <dd>no</dd>
                         * <dt>in-flight cache creation</dt>
                         * <dd>enabled</dd>
                         * </dl>
                         * @param connectionFactory must not be {#literal null}.
                         * @return new instance of {#link RedisCacheManager}.
                         */
                        // @ts-ignore
                        public static create(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): org.springframework.data.redis.cache.RedisCacheManager
                        /**
                         * Entry point for builder style {@link RedisCacheManager} configuration.
                         * @param connectionFactory must not be {#literal null}.
                         * @return new {#link RedisCacheManagerBuilder}.
                         */
                        // @ts-ignore
                        public static builder(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                        /**
                         * Entry point for builder style {@link RedisCacheManager} configuration.
                         * @param cacheWriter must not be {#literal null}.
                         * @return new {#link RedisCacheManagerBuilder}.
                         */
                        // @ts-ignore
                        public static builder(cacheWriter: org.springframework.data.redis.cache.RedisCacheWriter): org.springframework.data.redis.cache.RedisCacheManager.RedisCacheManagerBuilder
                        // @ts-ignore
                        loadCaches(): Array<org.springframework.data.redis.cache.RedisCache>
                        // @ts-ignore
                        getMissingCache(name: java.lang.String | string): org.springframework.data.redis.cache.RedisCache
                        /**
                         * @return unmodifiable {#link Map} containing cache name / configuration pairs. Never {@literal null}.
                         */
                        // @ts-ignore
                        public getCacheConfigurations(): java.util.Map<java.lang.String | string, org.springframework.data.redis.cache.RedisCacheConfiguration>
                        /**
                         * Configuration hook for creating {@link RedisCache} with given name and {@code cacheConfig}.
                         * @param name must not be {#literal null}.
                         * @param cacheConfig can be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        createRedisCache(name: java.lang.String | string, cacheConfig: org.springframework.data.redis.cache.RedisCacheConfiguration): org.springframework.data.redis.cache.RedisCache
                    }
                }
            }
        }
    }
}
