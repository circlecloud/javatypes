declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * @author Christoph Strobl
                         * @since 1.4
                         */
                        // @ts-ignore
                        class JedisSentinelConnection extends java.lang.Object implements org.springframework.data.redis.connection.RedisSentinelConnection {
                            // @ts-ignore
                            constructor(sentinel: org.springframework.data.redis.connection.RedisNode)
                            // @ts-ignore
                            constructor(host: java.lang.String | string, port: number /*int*/)
                            // @ts-ignore
                            constructor(jedis: Jedis)
                            // @ts-ignore
                            public failover(master: org.springframework.data.redis.connection.NamedNode): void
                            // @ts-ignore
                            public masters(): Array<org.springframework.data.redis.connection.RedisServer>
                            // @ts-ignore
                            public slaves(master: org.springframework.data.redis.connection.NamedNode): Array<org.springframework.data.redis.connection.RedisServer>
                            /**
                             * @param masterName
                             * @see RedisSentinelCommands#slaves(NamedNode)
                             * @return 
                             */
                            // @ts-ignore
                            public slaves(masterName: java.lang.String | string): Array<org.springframework.data.redis.connection.RedisServer>
                            // @ts-ignore
                            public remove(master: org.springframework.data.redis.connection.NamedNode): void
                            /**
                             * @param masterName
                             * @see RedisSentinelCommands#remove(NamedNode)
                             */
                            // @ts-ignore
                            public remove(masterName: java.lang.String | string): void
                            // @ts-ignore
                            public monitor(server: org.springframework.data.redis.connection.RedisServer): void
                            // @ts-ignore
                            public close(): void
                            /**
                             * Do what ever is required to establish the connection to redis.
                             * @param jedis
                             */
                            // @ts-ignore
                            doInit(jedis: Jedis): void
                            // @ts-ignore
                            public isOpen(): boolean
                        }
                    }
                }
            }
        }
    }
}
