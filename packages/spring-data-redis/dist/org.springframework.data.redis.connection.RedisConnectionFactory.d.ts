declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Thread-safe factory of Redis connections.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface RedisConnectionFactory {
                        /**
                         * Provides a suitable connection for interacting with Redis.
                         * @return connection for interacting with Redis.
                         */
                        // @ts-ignore
                        getConnection(): org.springframework.data.redis.connection.RedisConnection
                        /**
                         * Provides a suitable connection for interacting with Redis Cluster.
                         * @return 
                         * @since 1.7
                         */
                        // @ts-ignore
                        getClusterConnection(): org.springframework.data.redis.connection.RedisClusterConnection
                        /**
                         * Specifies if pipelined results should be converted to the expected data type. If false, results of
                         * {@link RedisConnection#closePipeline()} and {RedisConnection#exec()} will be of the type returned by the underlying
                         * driver This method is mostly for backwards compatibility with 1.0. It is generally always a good idea to allow
                         * results to be converted and deserialized. In fact, this is now the default behavior.
                         * @return Whether or not to convert pipeline and tx results
                         */
                        // @ts-ignore
                        getConvertPipelineAndTxResults(): boolean
                        /**
                         * Provides a suitable connection for interacting with Redis Sentinel.
                         * @return connection for interacting with Redis Sentinel.
                         * @since 1.4
                         */
                        // @ts-ignore
                        getSentinelConnection(): org.springframework.data.redis.connection.RedisSentinelConnection
                    }
                }
            }
        }
    }
}
