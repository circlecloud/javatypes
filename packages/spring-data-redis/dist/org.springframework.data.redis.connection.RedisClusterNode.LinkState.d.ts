declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisClusterNode {
                        /**
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class LinkState extends java.lang.Enum<org.springframework.data.redis.connection.RedisClusterNode.LinkState> {
                            // @ts-ignore
                            readonly CONNECTED: org.springframework.data.redis.connection.RedisClusterNode.LinkState
                            // @ts-ignore
                            readonly DISCONNECTED: org.springframework.data.redis.connection.RedisClusterNode.LinkState
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.RedisClusterNode.LinkState[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode.LinkState
                        }
                    }
                }
            }
        }
    }
}
