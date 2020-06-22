declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Specifies that the connection decorates another {@link RedisConnection}.
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    interface DecoratedRedisConnection {
                        /**
                         * Gets the underlying {@link RedisConnection}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        getDelegate(): org.springframework.data.redis.connection.RedisConnection
                    }
                }
            }
        }
    }
}
