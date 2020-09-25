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
                            public static readonly MYSELF: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public static readonly MASTER: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public static readonly SLAVE: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public static readonly FAIL: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public static readonly PFAIL: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public static readonly HANDSHAKE: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public static readonly NOADDR: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public static readonly NOFLAGS: org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public static values(): org.springframework.data.redis.connection.RedisClusterNode.Flag[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode.Flag
                            // @ts-ignore
                            public getRaw(): string
                        }
                    }
                }
            }
        }
    }
}
