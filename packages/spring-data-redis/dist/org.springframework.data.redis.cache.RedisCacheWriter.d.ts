declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace cache {
                    /**
                     * {@link RedisCacheWriter} provides low level access to Redis commands ({@code SET, SETNX, GET, EXPIRE,...}) used for
                     * caching. <br />
                     * The {@link RedisCacheWriter} may be shared by multiple cache implementations and is responsible for writing / reading
                     * binary data to / from Redis. The implementation honors potential cache lock flags that might be set.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface RedisCacheWriter {
                        /**
                         * Create new {@link RedisCacheWriter} without locking behavior.
                         * @param connectionFactory must not be {#literal null}.
                         * @return new instance of {#link DefaultRedisCacheWriter}.
                         */
                        // @ts-ignore
                        nonLockingRedisCacheWriter(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): org.springframework.data.redis.cache.RedisCacheWriter
                        /**
                         * Create new {@link RedisCacheWriter} with locking behavior.
                         * @param connectionFactory must not be {#literal null}.
                         * @return new instance of {#link DefaultRedisCacheWriter}.
                         */
                        // @ts-ignore
                        lockingRedisCacheWriter(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): org.springframework.data.redis.cache.RedisCacheWriter
                        /**
                         * Write the given key/value pair to Redis an set the expiration time if defined.
                         * @param name The cache name must not be {#literal null}.
                         * @param key The key for the cache entry. Must not be {#literal null}.
                         * @param value The value stored for the key. Must not be {#literal null}.
                         * @param ttl Optional expiration time. Can be {#literal null}.
                         */
                        // @ts-ignore
                        put(name: java.lang.String | string, key: number /*byte*/[], value: number /*byte*/[], ttl: java.time.Duration): void
                        /**
                         * Get the binary value representation from Redis stored for the given key.
                         * @param name must not be {#literal null}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} if key does not exist.
                         */
                        // @ts-ignore
                        get(name: java.lang.String | string, key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Write the given value to Redis if the key does not already exist.
                         * @param name The cache name must not be {#literal null}.
                         * @param key The key for the cache entry. Must not be {#literal null}.
                         * @param value The value stored for the key. Must not be {#literal null}.
                         * @param ttl Optional expiration time. Can be {#literal null}.
                         * @return {#literal null} if the value has been written, the value stored for the key if it already exists.
                         */
                        // @ts-ignore
                        putIfAbsent(name: java.lang.String | string, key: number /*byte*/[], value: number /*byte*/[], ttl: java.time.Duration): number /*byte*/[]
                        /**
                         * Remove the given key from Redis.
                         * @param name The cache name must not be {#literal null}.
                         * @param key The key for the cache entry. Must not be {#literal null}.
                         */
                        // @ts-ignore
                        remove(name: java.lang.String | string, key: number /*byte*/[]): void
                        /**
                         * Remove all keys following the given pattern.
                         * @param name The cache name must not be {#literal null}.
                         * @param pattern The pattern for the keys to remove. Must not be {#literal null}.
                         */
                        // @ts-ignore
                        clean(name: java.lang.String | string, pattern: number /*byte*/[]): void
                    }
                }
            }
        }
    }
}
