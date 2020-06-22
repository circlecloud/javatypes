declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveRedisClusterConnection extends org.springframework.data.redis.connection.ReactiveRedisConnection {
                        // @ts-ignore
                        keyCommands(): org.springframework.data.redis.connection.ReactiveClusterKeyCommands
                        // @ts-ignore
                        stringCommands(): org.springframework.data.redis.connection.ReactiveClusterStringCommands
                        // @ts-ignore
                        numberCommands(): org.springframework.data.redis.connection.ReactiveClusterNumberCommands
                        // @ts-ignore
                        listCommands(): org.springframework.data.redis.connection.ReactiveClusterListCommands
                        // @ts-ignore
                        setCommands(): org.springframework.data.redis.connection.ReactiveClusterSetCommands
                        // @ts-ignore
                        zSetCommands(): org.springframework.data.redis.connection.ReactiveClusterZSetCommands
                        // @ts-ignore
                        hashCommands(): org.springframework.data.redis.connection.ReactiveClusterHashCommands
                        // @ts-ignore
                        geoCommands(): org.springframework.data.redis.connection.ReactiveClusterGeoCommands
                        // @ts-ignore
                        hyperLogLogCommands(): org.springframework.data.redis.connection.ReactiveClusterHyperLogLogCommands
                        // @ts-ignore
                        serverCommands(): org.springframework.data.redis.connection.ReactiveClusterServerCommands
                        /**
                         * Test the connection to a specific Redis cluster node.
                         * @param node must not be {#literal null}.
                         * @return {#link Mono} wrapping server response message - usually {@literal PONG}.
                         * @throws IllegalArgumentException when {#code node} is {@literal null}.
                         * @see RedisConnectionCommands#ping()
                         */
                        // @ts-ignore
                        ping(node: org.springframework.data.redis.connection.RedisClusterNode): object
                    }
                }
            }
        }
    }
}
