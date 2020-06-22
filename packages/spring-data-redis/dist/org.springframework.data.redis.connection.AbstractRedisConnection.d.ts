declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.4
                     */
                    // @ts-ignore
                    abstract class AbstractRedisConnection extends java.lang.Object implements org.springframework.data.redis.connection.DefaultedRedisConnection {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getSentinelConnection(): org.springframework.data.redis.connection.RedisSentinelConnection
                        // @ts-ignore
                        public setSentinelConfiguration(sentinelConfiguration: org.springframework.data.redis.connection.RedisSentinelConfiguration): void
                        // @ts-ignore
                        public hasRedisSentinelConfigured(): boolean
                        /**
                         * Check if node is active by sending ping.
                         * @param node
                         * @return 
                         */
                        // @ts-ignore
                        isActive(node: org.springframework.data.redis.connection.RedisNode): boolean
                        /**
                         * Get {@link RedisSentinelCommands} connected to given node.
                         * @param sentinel
                         * @return 
                         */
                        // @ts-ignore
                        getSentinelConnection(sentinel: org.springframework.data.redis.connection.RedisNode): org.springframework.data.redis.connection.RedisSentinelConnection
                        // @ts-ignore
                        public close(): void
                    }
                }
            }
        }
    }
}
