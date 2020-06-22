declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Connection factory creating <a href="https://github.com/mp911de/lettuce">Lettuce</a>-based connections.
                         * <p>
                         * This factory creates a new {@link LettuceConnection} on each call to {@link #getConnection()}. Multiple
                         * {@link LettuceConnection}s share a single thread-safe native connection by default.
                         * <p>
                         * The shared native connection is never closed by {@link LettuceConnection}, therefore it is not validated by default
                         * on {@link #getConnection()}. Use {@link #setValidateConnection(boolean)} to change this behavior if necessary. Inject
                         * a {@link Pool} to pool dedicated connections. If shareNativeConnection is true, the pool will be used to select a
                         * connection for blocking and tx operations only, which should not share a connection. If native connection sharing is
                         * disabled, the selected connection will be used for all operations.
                         * <p>
                         * {@link LettuceConnectionFactory} should be configured using an environmental configuration and the
                         * {@link LettuceConnectionFactory client configuration}. Lettuce supports the following environmental configurations:
                         * <ul>
                         * <li>{@link RedisStandaloneConfiguration}</li>
                         * <li>{@link RedisStaticMasterReplicaConfiguration}</li>
                         * <li>{@link RedisSocketConfiguration}</li>
                         * <li>{@link RedisSentinelConfiguration}</li>
                         * <li>{@link RedisClusterConfiguration}</li>
                         * </ul>
                         * @author Costin Leau
                         * @author Jennifer Hickey
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Balázs Németh
                         * @author Ruben Cervilla
                         * @author Luis De Bello
                         */
                        // @ts-ignore
                        class LettuceConnectionFactory extends java.lang.Object implements org.springframework.data.redis.connection.RedisConnectionFactory, org.springframework.data.redis.connection.ReactiveRedisConnectionFactory {
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance with default settings.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance with default settings.
                             */
                            // @ts-ignore
                            constructor(configuration: org.springframework.data.redis.connection.RedisStandaloneConfiguration)
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance with default settings.
                             */
                            // @ts-ignore
                            constructor(host: java.lang.String | string, port: number /*int*/)
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance using the given {@link RedisSocketConfiguration}.
                             * @param redisConfiguration must not be {#literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            constructor(redisConfiguration: org.springframework.data.redis.connection.RedisConfiguration)
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance using the given {@link RedisSentinelConfiguration}.
                             * @param sentinelConfiguration must not be {#literal null}.
                             * @since 1.6
                             */
                            // @ts-ignore
                            constructor(sentinelConfiguration: org.springframework.data.redis.connection.RedisSentinelConfiguration)
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance using the given {@link RedisClusterConfiguration}
                             * applied to create a {@link RedisClusterClient}.
                             * @param clusterConfiguration must not be {#literal null}.
                             * @since 1.7
                             */
                            // @ts-ignore
                            constructor(clusterConfiguration: org.springframework.data.redis.connection.RedisClusterConfiguration)
                            /**
                             * @param pool
                             * @deprecated since 2.0, use pooling via {#link LettucePoolingClientConfiguration}.
                             */
                            // @ts-ignore
                            constructor(pool: org.springframework.data.redis.connection.lettuce.LettucePool)
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance using the given {@link RedisStandaloneConfiguration} and
                             * {@link LettuceClientConfiguration}.
                             * @param standaloneConfig must not be {#literal null}.
                             * @param clientConfig must not be {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            constructor(standaloneConfig: org.springframework.data.redis.connection.RedisStandaloneConfiguration, clientConfig: org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration)
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance using the given
                             * {@link RedisStaticMasterReplicaConfiguration} and {@link LettuceClientConfiguration}.
                             * @param redisConfiguration must not be {#literal null}.
                             * @param clientConfig must not be {#literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            constructor(redisConfiguration: org.springframework.data.redis.connection.RedisConfiguration, clientConfig: org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration)
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance using the given {@link RedisSentinelConfiguration} and
                             * {@link LettuceClientConfiguration}.
                             * @param sentinelConfiguration must not be {#literal null}.
                             * @param clientConfig must not be {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            constructor(sentinelConfiguration: org.springframework.data.redis.connection.RedisSentinelConfiguration, clientConfig: org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration)
                            /**
                             * Constructs a new {@link LettuceConnectionFactory} instance using the given {@link RedisClusterConfiguration} and
                             * {@link LettuceClientConfiguration}.
                             * @param clusterConfiguration must not be {#literal null}.
                             * @param clientConfig must not be {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            constructor(clusterConfiguration: org.springframework.data.redis.connection.RedisClusterConfiguration, clientConfig: org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration)
                            // @ts-ignore
                            public afterPropertiesSet(): void
                            // @ts-ignore
                            public destroy(): void
                            // @ts-ignore
                            public getConnection(): org.springframework.data.redis.connection.RedisConnection
                            // @ts-ignore
                            public getClusterConnection(): org.springframework.data.redis.connection.RedisClusterConnection
                            // @ts-ignore
                            public getReactiveConnection(): org.springframework.data.redis.connection.lettuce.LettuceReactiveRedisConnection
                            // @ts-ignore
                            public getReactiveClusterConnection(): org.springframework.data.redis.connection.lettuce.LettuceReactiveRedisClusterConnection
                            /**
                             * Initialize the shared connection if {@link #getShareNativeConnection() native connection sharing} is enabled and
                             * reset any previously existing connection.
                             */
                            // @ts-ignore
                            public initConnection(): void
                            /**
                             * Reset the underlying shared Connection, to be reinitialized on next access.
                             */
                            // @ts-ignore
                            public resetConnection(): void
                            /**
                             * Validate the shared connections and reinitialize if invalid.
                             */
                            // @ts-ignore
                            public validateConnection(): void
                            // @ts-ignore
                            public translateExceptionIfPossible(ex: java.lang.RuntimeException): DataAccessException
                            /**
                             * Returns the current host.
                             * @return the host.
                             */
                            // @ts-ignore
                            public getHostName(): string
                            /**
                             * Sets the hostname.
                             * @param hostName the hostname to set.
                             * @deprecated since 2.0, configure the hostname using {#link RedisStandaloneConfiguration}.
                             */
                            // @ts-ignore
                            public setHostName(hostName: java.lang.String | string): void
                            /**
                             * Returns the current port.
                             * @return the port.
                             */
                            // @ts-ignore
                            public getPort(): number /*int*/
                            /**
                             * Sets the port.
                             * @param port the port to set.
                             * @deprecated since 2.0, configure the port using {#link RedisStandaloneConfiguration}.
                             */
                            // @ts-ignore
                            public setPort(port: number /*int*/): void
                            /**
                             * Returns the connection timeout (in milliseconds).
                             * @return connection timeout.
                             */
                            // @ts-ignore
                            public getTimeout(): number /*long*/
                            /**
                             * Sets the connection timeout (in milliseconds).
                             * @param timeout the timeout.
                             * @deprecated since 2.0, configure the timeout using {#link LettuceClientConfiguration}.
                             * @throws IllegalStateException if {#link LettuceClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setTimeout(timeout: number /*long*/): void
                            /**
                             * Returns whether to use SSL.
                             * @return use of SSL.
                             */
                            // @ts-ignore
                            public isUseSsl(): boolean
                            /**
                             * Sets to use SSL connection.
                             * @param useSsl {#literal true} to use SSL.
                             * @deprecated since 2.0, configure SSL usage using {#link LettuceClientConfiguration}.
                             * @throws IllegalStateException if {#link LettuceClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setUseSsl(useSsl: boolean): void
                            /**
                             * Returns whether to verify certificate validity/hostname check when SSL is used.
                             * @return whether to verify peers when using SSL.
                             */
                            // @ts-ignore
                            public isVerifyPeer(): boolean
                            /**
                             * Sets to use verify certificate validity/hostname check when SSL is used.
                             * @param verifyPeer {#literal false} not to verify hostname.
                             * @deprecated since 2.0, configure peer verification using {#link LettuceClientConfiguration}.
                             * @throws IllegalStateException if {#link LettuceClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setVerifyPeer(verifyPeer: boolean): void
                            /**
                             * Returns whether to issue a StartTLS.
                             * @return use of StartTLS.
                             */
                            // @ts-ignore
                            public isStartTls(): boolean
                            /**
                             * Sets to issue StartTLS.
                             * @param startTls {#literal true} to issue StartTLS.
                             * @deprecated since 2.0, configure StartTLS using {#link LettuceClientConfiguration}.
                             * @throws IllegalStateException if {#link LettuceClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setStartTls(startTls: boolean): void
                            /**
                             * Indicates if validation of the native Lettuce connection is enabled.
                             * @return connection validation enabled.
                             */
                            // @ts-ignore
                            public getValidateConnection(): boolean
                            /**
                             * Enables validation of the shared native Lettuce connection on calls to {@link #getConnection()}. A new connection
                             * will be created and used if validation fails.
                             * <p>
                             * Lettuce will automatically reconnect until close is called, which should never happen through
                             * {@link LettuceConnection} if a shared native connection is used, therefore the default is {@literal false}.
                             * <p>
                             * Setting this to {@literal true} will result in a round-trip call to the server on each new connection, so this
                             * setting should only be used if connection sharing is enabled and there is code that is actively closing the native
                             * Lettuce connection.
                             * @param validateConnection enable connection validation.
                             */
                            // @ts-ignore
                            public setValidateConnection(validateConnection: boolean): void
                            /**
                             * Indicates if multiple {@link LettuceConnection}s should share a single native connection.
                             * @return native connection shared.
                             */
                            // @ts-ignore
                            public getShareNativeConnection(): boolean
                            /**
                             * Enables multiple {@link LettuceConnection}s to share a single native connection. If set to {@literal false}, every
                             * operation on {@link LettuceConnection} will open and close a socket.
                             * @param shareNativeConnection enable connection sharing.
                             */
                            // @ts-ignore
                            public setShareNativeConnection(shareNativeConnection: boolean): void
                            /**
                             * Returns the index of the database.
                             * @return the database index.
                             */
                            // @ts-ignore
                            public getDatabase(): number /*int*/
                            /**
                             * Sets the index of the database used by this connection factory. Default is 0.
                             * @param index database index
                             */
                            // @ts-ignore
                            public setDatabase(index: number /*int*/): void
                            /**
                             * Returns the client name.
                             * @return the client name or {#literal null} if not set.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public getClientName(): string
                            /**
                             * Sets the client name used by this connection factory.
                             * @param clientName the client name. Can be {#literal null}.
                             * @since 2.1
                             * @deprecated configure the client name using {#link LettuceClientConfiguration}.
                             * @throws IllegalStateException if {#link LettuceClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setClientName(clientName: java.lang.String | string): void
                            /**
                             * Returns the password used for authenticating with the Redis server.
                             * @return password for authentication or {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getPassword(): string
                            /**
                             * Sets the password used for authenticating with the Redis server.
                             * @param password the password to set
                             * @deprecated since 2.0, configure the password using {#link RedisStandaloneConfiguration},
                             *              {@link RedisSentinelConfiguration} or {@link RedisClusterConfiguration}.
                             */
                            // @ts-ignore
                            public setPassword(password: java.lang.String | string): void
                            /**
                             * Returns the shutdown timeout for shutting down the RedisClient (in milliseconds).
                             * @return shutdown timeout.
                             * @since 1.6
                             */
                            // @ts-ignore
                            public getShutdownTimeout(): number /*long*/
                            /**
                             * Sets the shutdown timeout for shutting down the RedisClient (in milliseconds).
                             * @param shutdownTimeout the shutdown timeout.
                             * @since 1.6
                             * @deprecated since 2.0, configure the shutdown timeout using {#link LettuceClientConfiguration}.
                             * @throws IllegalStateException if {#link LettuceClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setShutdownTimeout(shutdownTimeout: number /*long*/): void
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
                             * @deprecated since 2.0, configure {#link ClientResources} using {@link LettuceClientConfiguration}.
                             * @throws IllegalStateException if {#link LettuceClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setClientResources(clientResources: ClientResources): void
                            /**
                             * @return the {#link LettuceClientConfiguration}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getClientConfiguration(): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration
                            /**
                             * @return the {#link RedisStandaloneConfiguration}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getStandaloneConfiguration(): org.springframework.data.redis.connection.RedisStandaloneConfiguration
                            /**
                             * @return the {#link RedisSocketConfiguration} or {@literal null} if not set.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public getSocketConfiguration(): org.springframework.data.redis.connection.RedisSocketConfiguration
                            /**
                             * @return the {#link RedisStandaloneConfiguration}, may be {@literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getSentinelConfiguration(): org.springframework.data.redis.connection.RedisSentinelConfiguration
                            /**
                             * @return the {#link RedisClusterConfiguration}, may be {@literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getClusterConfiguration(): org.springframework.data.redis.connection.RedisClusterConfiguration
                            /**
                             * Specifies if pipelined results should be converted to the expected data type. If false, results of
                             * {@link LettuceConnection#closePipeline()} and {LettuceConnection#exec()} will be of the type returned by the
                             * Lettuce driver.
                             * @return Whether or not to convert pipeline and tx results.
                             */
                            // @ts-ignore
                            public getConvertPipelineAndTxResults(): boolean
                            /**
                             * Specifies if pipelined and transaction results should be converted to the expected data type. If false, results of
                             * {@link LettuceConnection#closePipeline()} and {LettuceConnection#exec()} will be of the type returned by the
                             * Lettuce driver.
                             * @param convertPipelineAndTxResults Whether or not to convert pipeline and tx results.
                             */
                            // @ts-ignore
                            public setConvertPipelineAndTxResults(convertPipelineAndTxResults: boolean): void
                            /**
                             * @return true when {#link RedisSentinelConfiguration} is present.
                             * @since 1.5
                             */
                            // @ts-ignore
                            public isRedisSentinelAware(): boolean
                            /**
                             * @return true when {#link RedisClusterConfiguration} is present.
                             * @since 1.7
                             */
                            // @ts-ignore
                            public isClusterAware(): boolean
                            /**
                             * @return the shared connection using {#literal byte} array encoding for imperative API use. {@literal null} if
                             *          {@link #getShareNativeConnection() connection sharing} is disabled.
                             */
                            // @ts-ignore
                            getSharedConnection(): object
                            /**
                             * @return the shared connection using {#link ByteBuffer} encoding for reactive API use. {@literal null} if
                             *          {@link #getShareNativeConnection() connection sharing} is disabled.
                             * @since 2.0.1
                             */
                            // @ts-ignore
                            getSharedReactiveConnection(): object
                            /**
                             * Create a {@link LettuceConnectionProvider} given {@link AbstractRedisClient} and {@link RedisCodec}. Configuration
                             * of this connection factory specifies the type of the created connection provider. This method creates either a
                             * {@link LettuceConnectionProvider} for either {@link RedisClient} or {@link RedisClusterClient}. Subclasses may
                             * override this method to decorate the connection provider.
                             * @param client either {#link RedisClient} or {@link RedisClusterClient}, must not be {@literal null}.
                             * @param codec used for connection creation, must not be {#literal null}. By default, a {@code byte[]} codec.
                             *           Reactive connections require a {@link java.nio.ByteBuffer} codec.
                             * @return the connection provider.
                             * @since 2.1
                             */
                            // @ts-ignore
                            doCreateConnectionProvider(client: AbstractRedisClient, codec: object): org.springframework.data.redis.connection.lettuce.LettuceConnectionProvider
                            // @ts-ignore
                            createClient(): AbstractRedisClient
                            // @ts-ignore
                            public getSentinelConnection(): org.springframework.data.redis.connection.RedisSentinelConnection
                        }
                    }
                }
            }
        }
    }
}
