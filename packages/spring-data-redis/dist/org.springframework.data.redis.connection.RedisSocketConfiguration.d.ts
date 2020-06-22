declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Configuration class used for setting up {@link RedisConnection} via {@link RedisConnectionFactory} connecting to
                     * single <a href="https://redis.io/">Redis</a> using a local unix domain socket.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    class RedisSocketConfiguration extends java.lang.Object implements org.springframework.data.redis.connection.RedisConfiguration, org.springframework.data.redis.connection.RedisConfiguration.DomainSocketConfiguration {
                        /**
                         * Create a new default {@link RedisSocketConfiguration}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@link RedisSocketConfiguration} given {@code socket}.
                         * @param socket must not be {#literal null} or empty.
                         */
                        // @ts-ignore
                        constructor(socket: java.lang.String | string)
                        // @ts-ignore
                        public getSocket(): string
                        // @ts-ignore
                        public setSocket(socket: java.lang.String | string): void
                        // @ts-ignore
                        public getDatabase(): number /*int*/
                        // @ts-ignore
                        public setDatabase(index: number /*int*/): void
                        // @ts-ignore
                        public getPassword(): org.springframework.data.redis.connection.RedisPassword
                        // @ts-ignore
                        public setPassword(password: org.springframework.data.redis.connection.RedisPassword): void
                    }
                }
            }
        }
    }
}
