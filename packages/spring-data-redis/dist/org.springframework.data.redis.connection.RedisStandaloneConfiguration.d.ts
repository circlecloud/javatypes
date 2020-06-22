declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Configuration class used for setting up {@link RedisConnection} via {@link RedisConnectionFactory} using connecting
                     * to a single node <a href="https://redis.io/">Redis</a> installation.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    class RedisStandaloneConfiguration extends java.lang.Object implements org.springframework.data.redis.connection.RedisConfiguration, org.springframework.data.redis.connection.RedisConfiguration.WithHostAndPort, org.springframework.data.redis.connection.RedisConfiguration.WithPassword, org.springframework.data.redis.connection.RedisConfiguration.WithDatabaseIndex {
                        /**
                         * Create a new default {@link RedisStandaloneConfiguration}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@link RedisStandaloneConfiguration} given {@code hostName}.
                         * @param hostName must not be {#literal null} or empty.
                         */
                        // @ts-ignore
                        constructor(hostName: java.lang.String | string)
                        /**
                         * Create a new {@link RedisStandaloneConfiguration} given {@code hostName} and {@code port}.
                         * @param hostName must not be {#literal null} or empty.
                         * @param port a valid TCP port (1-65535).
                         */
                        // @ts-ignore
                        constructor(hostName: java.lang.String | string, port: number /*int*/)
                        // @ts-ignore
                        public getHostName(): string
                        // @ts-ignore
                        public getPort(): number /*int*/
                        // @ts-ignore
                        public setHostName(hostName: java.lang.String | string): void
                        // @ts-ignore
                        public setPort(port: number /*int*/): void
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
