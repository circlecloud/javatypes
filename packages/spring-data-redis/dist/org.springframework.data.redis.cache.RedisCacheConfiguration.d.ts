declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace cache {
                    /**
                     * Immutable {@link RedisCacheConfiguration} helps customizing {@link RedisCache} behaviour such as caching
                     * {@literal null} values, cache key prefixes and binary serialization. <br />
                     * Start with {@link RedisCacheConfiguration#defaultCacheConfig()} and customize {@link RedisCache} behaviour from there
                     * on.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    class RedisCacheConfiguration extends java.lang.Object {
                        /**
                         * Default {@link RedisCacheConfiguration} using the following:
                         * <dl>
                         * <dt>key expiration</dt>
                         * <dd>eternal</dd>
                         * <dt>cache null values</dt>
                         * <dd>yes</dd>
                         * <dt>prefix cache keys</dt>
                         * <dd>yes</dd>
                         * <dt>default prefix</dt>
                         * <dd>[the actual cache name]</dd>
                         * <dt>key serializer</dt>
                         * <dd>{@link org.springframework.data.redis.serializer.StringRedisSerializer}</dd>
                         * <dt>value serializer</dt>
                         * <dd>{@link org.springframework.data.redis.serializer.JdkSerializationRedisSerializer}</dd>
                         * <dt>conversion service</dt>
                         * <dd>{@link DefaultFormattingConversionService} with {@link #registerDefaultConverters(ConverterRegistry) default}
                         * cache key converters</dd>
                         * </dl>
                         * @return new {#link RedisCacheConfiguration}.
                         */
                        // @ts-ignore
                        public static defaultCacheConfig(): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Create default {@link RedisCacheConfiguration} given {@link ClassLoader} using the following:
                         * <dl>
                         * <dt>key expiration</dt>
                         * <dd>eternal</dd>
                         * <dt>cache null values</dt>
                         * <dd>yes</dd>
                         * <dt>prefix cache keys</dt>
                         * <dd>yes</dd>
                         * <dt>default prefix</dt>
                         * <dd>[the actual cache name]</dd>
                         * <dt>key serializer</dt>
                         * <dd>{@link org.springframework.data.redis.serializer.StringRedisSerializer}</dd>
                         * <dt>value serializer</dt>
                         * <dd>{@link org.springframework.data.redis.serializer.JdkSerializationRedisSerializer}</dd>
                         * <dt>conversion service</dt>
                         * <dd>{@link DefaultFormattingConversionService} with {@link #registerDefaultConverters(ConverterRegistry) default}
                         * cache key converters</dd>
                         * </dl>
                         * @param classLoader the {#link ClassLoader} used for deserialization by the
                         *           {@link org.springframework.data.redis.serializer.JdkSerializationRedisSerializer}.
                         * @return new {#link RedisCacheConfiguration}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static defaultCacheConfig(classLoader: java.lang.ClassLoader): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Set the ttl to apply for cache entries. Use {@link Duration#ZERO} to declare an eternal cache.
                         * @param ttl must not be {#literal null}.
                         * @return new {#link RedisCacheConfiguration}.
                         */
                        // @ts-ignore
                        public entryTtl(ttl: java.time.Duration): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Use the given prefix instead of the default one.
                         * @param prefix must not be {#literal null}.
                         * @return new {#link RedisCacheConfiguration}.
                         */
                        // @ts-ignore
                        public prefixKeysWith(prefix: java.lang.String | string): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Use the given {@link CacheKeyPrefix} to compute the prefix for the actual Redis {@literal key} on the
                         * {@literal cache name}.
                         * @param cacheKeyPrefix must not be {#literal null}.
                         * @return new {#link RedisCacheConfiguration}.
                         * @since 2.0.4
                         */
                        // @ts-ignore
                        public computePrefixWith(cacheKeyPrefix: org.springframework.data.redis.cache.CacheKeyPrefix): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Disable caching {@literal null} values. <br />
                         * <strong>NOTE</strong> any {@link org.springframework.cache.Cache#put(Object, Object)} operation involving
                         * {@literal null} value will error. Nothing will be written to Redis, nothing will be removed. An already existing
                         * key will still be there afterwards with the very same value as before.
                         * @return new {#link RedisCacheConfiguration}.
                         */
                        // @ts-ignore
                        public disableCachingNullValues(): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Disable using cache key prefixes. <br />
                         * <strong>NOTE</strong>: {@link Cache#clear()} might result in unintended removal of {@literal key}s in Redis. Make
                         * sure to use a dedicated Redis instance when disabling prefixes.
                         * @return new {#link RedisCacheConfiguration}.
                         */
                        // @ts-ignore
                        public disableKeyPrefix(): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Define the {@link ConversionService} used for cache key to {@link String} conversion.
                         * @param conversionService must not be {#literal null}.
                         * @return new {#link RedisCacheConfiguration}.
                         */
                        // @ts-ignore
                        public withConversionService(conversionService: ConversionService): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Define the {@link SerializationPair} used for de-/serializing cache keys.
                         * @param keySerializationPair must not be {#literal null}.
                         * @return new {#link RedisCacheConfiguration}.
                         */
                        // @ts-ignore
                        public serializeKeysWith(keySerializationPair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<java.lang.String | string>): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * Define the {@link SerializationPair} used for de-/serializing cache values.
                         * @param valueSerializationPair must not be {#literal null}.
                         * @return new {#link RedisCacheConfiguration}.
                         */
                        // @ts-ignore
                        public serializeValuesWith(valueSerializationPair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<any>): org.springframework.data.redis.cache.RedisCacheConfiguration
                        /**
                         * @return never {#literal null}.
                         * @deprecated since 2.0.4. Please use {#link #getKeyPrefixFor(String)}.
                         */
                        // @ts-ignore
                        public getKeyPrefix(): java.util.Optional<java.lang.String | string>
                        /**
                         * Get the computed {@literal key} prefix for a given {@literal cacheName}.
                         * @return never {#literal null}.
                         * @since 2.0.4
                         */
                        // @ts-ignore
                        public getKeyPrefixFor(cacheName: java.lang.String | string): string
                        /**
                         * @return {#literal true} if cache keys need to be prefixed with the {@link #getKeyPrefixFor(String)} if present or
                         *          the default which resolves to {@link Cache#getName()}.
                         */
                        // @ts-ignore
                        public usePrefix(): boolean
                        /**
                         * @return {#literal true} if caching {@literal null} is allowed.
                         */
                        // @ts-ignore
                        public getAllowCacheNullValues(): boolean
                        /**
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getKeySerializationPair(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<java.lang.String | string>
                        /**
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getValueSerializationPair(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<java.lang.Object | any>
                        /**
                         * @return The expiration time (ttl) for cache entries. Never {#literal null}.
                         */
                        // @ts-ignore
                        public getTtl(): java.time.Duration
                        /**
                         * @return The {#link ConversionService} used for cache key to {@link String} conversion. Never {@literal null}.
                         */
                        // @ts-ignore
                        public getConversionService(): ConversionService
                        /**
                         * Add a {@link Converter} for extracting the {@link String} representation of a cache key if no suitable
                         * {@link Object#toString()} method is present.
                         * @param cacheKeyConverter
                         * @throws IllegalStateException if {#link #getConversionService()} does not allow converter registration.
                         * @since 2.1.11
                         */
                        // @ts-ignore
                        public addCacheKeyConverter(cacheKeyConverter: object): void
                        /**
                         * Configure the underlying conversion system used to extract the cache key.
                         * @param registryConsumer never {#literal null}.
                         * @throws IllegalStateException if {#link #getConversionService()} does not allow converter registration.
                         * @since 2.1.11
                         */
                        // @ts-ignore
                        public configureKeyConverters(registryConsumer: java.util.function$.Consumer<ConverterRegistry>): void
                        /**
                         * Registers default cache key converters. The following converters get registered:
                         * <ul>
                         * <li>{@link String} to {@link byte byte[]} using UTF-8 encoding.</li>
                         * <li>{@link SimpleKey} to {@link String}</li>
                         * @param registry must not be {#literal null}.
                         */
                        // @ts-ignore
                        public static registerDefaultConverters(registry: ConverterRegistry): void
                    }
                }
            }
        }
    }
}
