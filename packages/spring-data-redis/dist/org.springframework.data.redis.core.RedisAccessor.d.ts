declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Base class for {@link RedisTemplate} defining common properties. Not intended to be used directly.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    class RedisAccessor extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses
                         */
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Returns the connectionFactory.
                         * @return Returns the connectionFactory. Can be {#literal null}
                         */
                        // @ts-ignore
                        public getConnectionFactory(): org.springframework.data.redis.connection.RedisConnectionFactory
                        /**
                         * Returns the required {@link RedisConnectionFactory} or throws {@link IllegalStateException} if the connection
                         * factory is not set.
                         * @return the associated {#link RedisConnectionFactory}.
                         * @throws IllegalStateException if the connection factory is not set.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public getRequiredConnectionFactory(): org.springframework.data.redis.connection.RedisConnectionFactory
                        /**
                         * Sets the connection factory.
                         * @param connectionFactory The connectionFactory to set.
                         */
                        // @ts-ignore
                        public setConnectionFactory(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): void
                    }
                }
            }
        }
    }
}
