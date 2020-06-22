declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Pool of Lettuce {@link StatefulConnection}s
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @deprecated since 2.0, use pooling via {#link LettucePoolingClientConfiguration}.
                         */
                        // @ts-ignore
                        interface LettucePool extends org.springframework.data.redis.connection.Pool<object> {
                            /**
                             * @return The {#link AbstractRedisClient} used to create pooled connections
                             */
                            // @ts-ignore
                            getClient(): AbstractRedisClient
                        }
                    }
                }
            }
        }
    }
}
