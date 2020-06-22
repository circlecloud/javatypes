declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Thread-safe factory of reactive Redis connections.
                     * @author Mark Paluch
                     * @since 2.0
                     * @see reactor.core.publisher.Mono
                     * @see reactor.core.publisher.Flux
                     * @see ReactiveRedisConnection
                     * @see ReactiveRedisClusterConnection
                     */
                    // @ts-ignore
                    interface ReactiveRedisConnectionFactory {
                        /**
                         * @return a reactive Redis connection.
                         * @since 2.0.
                         */
                        // @ts-ignore
                        getReactiveConnection(): org.springframework.data.redis.connection.ReactiveRedisConnection
                        /**
                         * @return a reactive Redis Cluster connection.
                         * @since 2.0
                         */
                        // @ts-ignore
                        getReactiveClusterConnection(): org.springframework.data.redis.connection.ReactiveRedisClusterConnection
                    }
                }
            }
        }
    }
}
