declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * String-focused extension of RedisTemplate. Since most operations against Redis are String based, this class provides
                     * a dedicated class that minimizes configuration of its more generic {@link RedisTemplate template} especially in terms
                     * of serializers.
                     * <p/>
                     * Note that this template exposes the {@link RedisConnection} used by the {@link RedisCallback} as a
                     * {@link StringRedisConnection}.
                     * @author Costin Leau
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class StringRedisTemplate extends org.springframework.data.redis.core.RedisTemplate<java.lang.String | string, java.lang.String | string> {
                        /**
                         * Constructs a new <code>StringRedisTemplate</code> instance. {@link #setConnectionFactory(RedisConnectionFactory)}
                         * and {@link #afterPropertiesSet()} still need to be called.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructs a new <code>StringRedisTemplate</code> instance ready to be used.
                         * @param connectionFactory connection factory for creating new connections
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory)
                        // @ts-ignore
                        preProcessConnection(connection: org.springframework.data.redis.connection.RedisConnection, existingConnection: boolean): org.springframework.data.redis.connection.RedisConnection
                    }
                }
            }
        }
    }
}
