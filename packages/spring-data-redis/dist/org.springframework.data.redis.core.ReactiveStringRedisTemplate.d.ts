declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * {@link java.lang.String String-focused} extension of {@link ReactiveRedisTemplate}. As most operations against Redis
                     * are {@link String} based, this class provides a dedicated arrangement that minimizes configuration of its more
                     * generic {@link ReactiveRedisTemplate template} especially in terms of the used {@link RedisSerializationContext}.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    class ReactiveStringRedisTemplate extends org.springframework.data.redis.core.ReactiveRedisTemplate<java.lang.String | string, java.lang.String | string> {
                        /**
                         * Creates new {@link ReactiveRedisTemplate} using given {@link ReactiveRedisConnectionFactory} applying default
                         * {@link String} serialization.
                         * @param connectionFactory must not be {#literal null}.
                         * @see RedisSerializationContext#string()
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.data.redis.connection.ReactiveRedisConnectionFactory)
                        /**
                         * Creates new {@link ReactiveRedisTemplate} using given {@link ReactiveRedisConnectionFactory} and
                         * {@link RedisSerializationContext}.
                         * @param connectionFactory must not be {#literal null}.
                         * @param serializationContext must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.data.redis.connection.ReactiveRedisConnectionFactory, serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<java.lang.String | string, java.lang.String | string>)
                        /**
                         * Creates new {@link ReactiveRedisTemplate} using given {@link ReactiveRedisConnectionFactory} and
                         * {@link RedisSerializationContext}.
                         * @param connectionFactory must not be {#literal null}.
                         * @param serializationContext must not be {#literal null}.
                         * @param exposeConnection flag indicating to expose the connection used.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.data.redis.connection.ReactiveRedisConnectionFactory, serializationContext: org.springframework.data.redis.serializer.RedisSerializationContext<java.lang.String | string, java.lang.String | string>, exposeConnection: boolean)
                    }
                }
            }
        }
    }
}
