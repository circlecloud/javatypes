declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.5
                         */
                        // @ts-ignore
                        class LettuceSentinelConnection extends java.lang.Object implements org.springframework.data.redis.connection.RedisSentinelConnection {
                            /**
                             * Creates a {@link LettuceSentinelConnection} with a dedicated client for a supplied {@link RedisNode}.
                             * @param sentinel The sentinel to connect to.
                             */
                            // @ts-ignore
                            constructor(sentinel: org.springframework.data.redis.connection.RedisNode)
                            /**
                             * Creates a {@link LettuceSentinelConnection} with a client for the supplied {@code host} and {@code port}.
                             * @param host must not be {#literal null}.
                             * @param port sentinel port.
                             */
                            // @ts-ignore
                            constructor(host: java.lang.String | string, port: number /*int*/)
                            /**
                             * Creates a {@link LettuceSentinelConnection} with a client for the supplied {@code host} and {@code port} and reuse
                             * existing {@link ClientResources}.
                             * @param host must not be {#literal null}.
                             * @param port sentinel port.
                             * @param clientResources must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(host: java.lang.String | string, port: number /*int*/, clientResources: ClientResources)
                            /**
                             * Creates a {@link LettuceSentinelConnection} using a supplied {@link RedisClient}.
                             * @param redisClient must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(redisClient: RedisClient)
                            /**
                             * Creates a {@link LettuceSentinelConnection} using a supplied redis connection.
                             * @param connection native Lettuce connection, must not be {#literal null}
                             */
                            // @ts-ignore
                            constructor(connection: object)
                            // @ts-ignore
                            public failover(master: org.springframework.data.redis.connection.NamedNode): void
                            // @ts-ignore
                            public masters(): Array<org.springframework.data.redis.connection.RedisServer>
                            // @ts-ignore
                            public slaves(master: org.springframework.data.redis.connection.NamedNode): Array<org.springframework.data.redis.connection.RedisServer>
                            /**
                             * @param masterName
                             * @see org.springframework.data.redis.connection.RedisSentinelCommands#slaves(org.springframework.data.redis.connection.NamedNode)
                             * @return 
                             */
                            // @ts-ignore
                            public slaves(masterName: java.lang.String | string): Array<org.springframework.data.redis.connection.RedisServer>
                            // @ts-ignore
                            public remove(master: org.springframework.data.redis.connection.NamedNode): void
                            /**
                             * @param masterName
                             * @see org.springframework.data.redis.connection.RedisSentinelCommands#remove(org.springframework.data.redis.connection.NamedNode)
                             */
                            // @ts-ignore
                            public remove(masterName: java.lang.String | string): void
                            // @ts-ignore
                            public monitor(server: org.springframework.data.redis.connection.RedisServer): void
                            // @ts-ignore
                            public close(): void
                            // @ts-ignore
                            public isOpen(): boolean
                        }
                    }
                }
            }
        }
    }
}
