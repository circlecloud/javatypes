declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace cache {
                    /**
                     * {@link CacheKeyPrefix} provides a hook for creating custom prefixes prepended to the actual {@literal key} stored in
                     * Redis.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0.4
                     */
                    // @ts-ignore
                    interface CacheKeyPrefix {
                        /**
                         * Compute the prefix for the actual {@literal key} stored in Redis.
                         * @param cacheName will never be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        compute(cacheName: java.lang.String | string): string
                        /**
                         * Creates a default {@link CacheKeyPrefix} scheme that prefixes cache keys with {@code cacheName} followed by double
                         * colons. A cache named {@code myCache} will prefix all cache keys with {@code myCache::}.
                         * @return the default {#link CacheKeyPrefix} scheme.
                         */
                        // @ts-ignore
                        simple(): org.springframework.data.redis.cache.CacheKeyPrefix
                    }
                }
            }
        }
    }
}
