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
                        class Flag extends java.lang.Enum<org.springframework.data.redis.connection.RedisClusterNode.Flag> {
                            // @ts-ignore
                            readonly MYSELF: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            readonly MASTER: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            readonly SLAVE: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            readonly FAIL: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            readonly PFAIL: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            readonly HANDSHAKE: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            readonly NOADDR: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            readonly NOFLAGS: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.RedisClusterNode.Flag[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            getRaw(): string
                        }
                    }
                }
            }
        }
    }
}
