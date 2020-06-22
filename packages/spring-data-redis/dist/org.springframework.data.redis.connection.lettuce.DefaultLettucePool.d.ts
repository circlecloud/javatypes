declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Default implementation of {@link LettucePool}.
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @deprecated since 2.0, use pooling via {#link LettucePoolingClientConfiguration}.
                         */
                        // @ts-ignore
                        class DefaultLettucePool extends java.lang.Object implements org.springframework.data.redis.connection.lettuce.LettucePool {
                            /**
                             * Constructs a new <code>DefaultLettucePool</code> instance with default settings.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Uses the {@link Config} and {@link RedisClient} defaults for configuring the connection pool
                             * @param hostName The Redis host
                             * @param port The Redis port
                             */
                            // @ts-ignore
                            constructor(hostName: java.lang.String | string, port: number /*int*/)
                            /**
                             * Uses the {@link RedisSentinelConfiguration} and {@link RedisClient} defaults for configuring the connection pool
                             * based on sentinels.
                             * @param sentinelConfiguration The Sentinel configuration
                             * @since 1.6
                             */
                            // @ts-ignore
                            constructor(sentinelConfiguration: org.springframework.data.redis.connection.RedisSentinelConfiguration)
                            /**
                             * Uses the {@link RedisClient} defaults for configuring the connection pool
                             * @param hostName The Redis host
                             * @param port The Redis port
                             * @param poolConfig The pool {#link GenericObjectPoolConfig}
                             */
                            // @ts-ignore
                            constructor(hostName: java.lang.String | string, port: number /*int*/, poolConfig: GenericObjectPoolConfig)
                            /**
                             * @return true when {#link RedisSentinelConfiguration} is present.
                             * @since 1.6
                             */
                            // @ts-ignore
                            public isRedisSentinelAware(): boolean
                            // @ts-ignore
                            public afterPropertiesSet(): void
                            // @ts-ignore
                            public getResource(): object
                            // @ts-ignore
                            public returnBrokenResource(resource: object): void
                            // @ts-ignore
                            public returnResource(resource: object): void
                            // @ts-ignore
                            public destroy(): void
                            /**
                             * @return The Redis client
                             */
                            // @ts-ignore
                            public getClient(): RedisClient
                            /**
                             * @return The pool configuration
                             */
                            // @ts-ignore
                            public getPoolConfig(): GenericObjectPoolConfig
                            /**
                             * @param poolConfig The pool configuration to use
                             */
                            // @ts-ignore
                            public setPoolConfig(poolConfig: GenericObjectPoolConfig): void
                            /**
                             * Returns the index of the database.
                             * @return Returns the database index
                             */
                            // @ts-ignore
                            public getDatabase(): number /*int*/
                            /**
                             * Sets the index of the database used by this connection pool. Default is 0.
                             * @param index database index
                             */
                            // @ts-ignore
                            public setDatabase(index: number /*int*/): void
                            /**
                             * Returns the password used for authenticating with the Redis server.
                             * @return password for authentication
                             */
                            // @ts-ignore
                            public getPassword(): string
                            /**
                             * Sets the password used for authenticating with the Redis server.
                             * @param password the password to set
                             */
                            // @ts-ignore
                            public setPassword(password: java.lang.String | string): void
                            /**
                             * Returns the current host.
                             * @return the host
                             */
                            // @ts-ignore
                            public getHostName(): string
                            /**
                             * Sets the host.
                             * @param host the host to set
                             */
                            // @ts-ignore
                            public setHostName(host: java.lang.String | string): void
                            /**
                             * Returns the current port.
                             * @return the port
                             */
                            // @ts-ignore
                            public getPort(): number /*int*/
                            /**
                             * Sets the port.
                             * @param port the port to set
                             */
                            // @ts-ignore
                            public setPort(port: number /*int*/): void
                            /**
                             * Returns the connection timeout (in milliseconds).
                             * @return connection timeout
                             */
                            // @ts-ignore
                            public getTimeout(): number /*long*/
                            /**
                             * Sets the connection timeout (in milliseconds).
                             * @param timeout connection timeout
                             */
                            // @ts-ignore
                            public setTimeout(timeout: number /*long*/): void
                            /**
                             * Get the {@link ClientResources} to reuse infrastructure.
                             * @return {#literal null} if not set.
                             * @since 1.7
                             */
                            // @ts-ignore
                            public getClientResources(): ClientResources
                            /**
                             * Sets the {@link ClientResources} to reuse the client infrastructure. <br />
                             * Set to {@literal null} to not share resources.
                             * @param clientResources can be {#literal null}.
                             * @since 1.7
                             */
                            // @ts-ignore
                            public setClientResources(clientResources: ClientResources): void
                        }
                    }
                }
            }
        }
    }
}
