declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * Connection factory creating <a href="https://github.com/xetorthio/jedis">Jedis</a> based connections.
                         * <p>
                         * {@link JedisConnectionFactory} should be configured using an environmental configuration and the
                         * {@link JedisClientConfiguration client configuration}. Jedis supports the following environmental configurations:
                         * <ul>
                         * <li>{@link RedisStandaloneConfiguration}</li>
                         * <li>{@link RedisSentinelConfiguration}</li>
                         * <li>{@link RedisClusterConfiguration}</li>
                         * </ul>
                         * @author Costin Leau
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Fu Jian
                         * @author Ajith Kumar
                         * @see JedisClientConfiguration
                         * @see Jedis
                         */
                        // @ts-ignore
                        class JedisConnectionFactory extends java.lang.Object implements org.springframework.data.redis.connection.RedisConnectionFactory {
                            /**
                             * Constructs a new <code>JedisConnectionFactory</code> instance with default settings (default connection pooling, no
                             * shard information).
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Constructs a new <code>JedisConnectionFactory</code> instance. Will override the other connection parameters passed
                             * to the factory.
                             * @param shardInfo shard information
                             * @deprecated since 2.0, configure Jedis with {#link JedisClientConfiguration} and
                             *              {@link RedisStandaloneConfiguration}.
                             */
                            // @ts-ignore
                            constructor(shardInfo: JedisShardInfo)
                            /**
                             * Constructs a new <code>JedisConnectionFactory</code> instance using the given pool configuration.
                             * @param poolConfig pool configuration
                             */
                            // @ts-ignore
                            constructor(poolConfig: JedisPoolConfig)
                            /**
                             * Constructs a new {@link JedisConnectionFactory} instance using the given {@link JedisPoolConfig} applied to
                             * {@link JedisSentinelPool}.
                             * @param sentinelConfig the sentinel configuration to use.
                             * @param poolConfig pool configuration. Defaulted to new instance if {#literal null}.
                             * @since 1.4
                             */
                            // @ts-ignore
                            constructor(sentinelConfig: org.springframework.data.redis.connection.RedisSentinelConfiguration, poolConfig: JedisPoolConfig)
                            /**
                             * Constructs a new {@link JedisConnectionFactory} instance using the given {@link RedisClusterConfiguration} applied
                             * to create a {@link JedisCluster}.
                             * @param clusterConfig must not be {#literal null}.
                             * @since 1.7
                             */
                            // @ts-ignore
                            constructor(clusterConfig: org.springframework.data.redis.connection.RedisClusterConfiguration, poolConfig: JedisPoolConfig)
                            /**
                             * Constructs a new {@link JedisConnectionFactory} instance using the given {@link RedisStandaloneConfiguration} and
                             * {@link JedisClientConfiguration}.
                             * @param standaloneConfig must not be {#literal null}.
                             * @param clientConfig must not be {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            constructor(standaloneConfig: org.springframework.data.redis.connection.RedisStandaloneConfiguration, clientConfig: org.springframework.data.redis.connection.jedis.JedisClientConfiguration)
                            /**
                             * Returns a Jedis instance to be used as a Redis connection. The instance can be newly created or retrieved from a
                             * pool.
                             * @return Jedis instance ready for wrapping into a {#link RedisConnection}.
                             */
                            // @ts-ignore
                            fetchJedisConnector(): Jedis
                            /**
                             * Post process a newly retrieved connection. Useful for decorating or executing initialization commands on a new
                             * connection. This implementation simply returns the connection.
                             * @param connection the jedis connection.
                             * @return processed connection
                             */
                            // @ts-ignore
                            postProcessConnection(connection: org.springframework.data.redis.connection.jedis.JedisConnection): org.springframework.data.redis.connection.jedis.JedisConnection
                            // @ts-ignore
                            public afterPropertiesSet(): void
                            /**
                             * Creates {@link JedisSentinelPool}.
                             * @param config the actual {#link RedisSentinelConfiguration}. Never {@literal null}.
                             * @return the {#link Pool} to use. Never {@literal null}.
                             * @since 1.4
                             */
                            // @ts-ignore
                            createRedisSentinelPool(config: org.springframework.data.redis.connection.RedisSentinelConfiguration): org.springframework.data.redis.connection.Pool<Jedis>
                            /**
                             * Creates {@link JedisPool}.
                             * @return the {#link Pool} to use. Never {@literal null}.
                             * @since 1.4
                             */
                            // @ts-ignore
                            createRedisPool(): org.springframework.data.redis.connection.Pool<Jedis>
                            /**
                             * Creates {@link JedisCluster} for given {@link RedisClusterConfiguration} and {@link GenericObjectPoolConfig}.
                             * @param clusterConfig must not be {#literal null}.
                             * @param poolConfig can be {#literal null}.
                             * @return the actual {#link JedisCluster}.
                             * @since 1.7
                             */
                            // @ts-ignore
                            createCluster(clusterConfig: org.springframework.data.redis.connection.RedisClusterConfiguration, poolConfig: GenericObjectPoolConfig): JedisCluster
                            // @ts-ignore
                            public destroy(): void
                            // @ts-ignore
                            public getConnection(): org.springframework.data.redis.connection.RedisConnection
                            // @ts-ignore
                            public getClusterConnection(): org.springframework.data.redis.connection.RedisClusterConnection
                            // @ts-ignore
                            public translateExceptionIfPossible(ex: java.lang.RuntimeException): DataAccessException
                            /**
                             * Returns the Redis hostname.
                             * @return the hostName.
                             */
                            // @ts-ignore
                            public getHostName(): string
                            /**
                             * Sets the Redis hostname.
                             * @param hostName the hostname to set.
                             * @deprecated since 2.0, configure the hostname using {#link RedisStandaloneConfiguration}.
                             */
                            // @ts-ignore
                            public setHostName(hostName: java.lang.String | string): void
                            /**
                             * Returns whether to use SSL.
                             * @return use of SSL.
                             * @since 1.8
                             */
                            // @ts-ignore
                            public isUseSsl(): boolean
                            /**
                             * Sets whether to use SSL.
                             * @param useSsl {#literal true} to use SSL.
                             * @since 1.8
                             * @deprecated since 2.0, configure the SSL usage with {#link JedisClientConfiguration}.
                             * @throws IllegalStateException if {#link JedisClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setUseSsl(useSsl: boolean): void
                            /**
                             * Returns the password used for authenticating with the Redis server.
                             * @return password for authentication.
                             */
                            // @ts-ignore
                            public getPassword(): string
                            /**
                             * Sets the password used for authenticating with the Redis server.
                             * @param password the password to set.
                             * @deprecated since 2.0, configure the password using {#link RedisStandaloneConfiguration},
                             *              {@link RedisSentinelConfiguration} or {@link RedisClusterConfiguration}.
                             */
                            // @ts-ignore
                            public setPassword(password: java.lang.String | string): void
                            /**
                             * Returns the port used to connect to the Redis instance.
                             * @return the Redis port.
                             */
                            // @ts-ignore
                            public getPort(): number /*int*/
                            /**
                             * Sets the port used to connect to the Redis instance.
                             * @param port the Redis port.
                             * @deprecated since 2.0, configure the port using {#link RedisStandaloneConfiguration}.
                             */
                            // @ts-ignore
                            public setPort(port: number /*int*/): void
                            /**
                             * Returns the shardInfo.
                             * @return the shardInfo.
                             * @deprecated since 2.0.
                             */
                            // @ts-ignore
                            public getShardInfo(): JedisShardInfo
                            /**
                             * Sets the shard info for this factory.
                             * @param shardInfo the shardInfo to set.
                             * @deprecated since 2.0, configure the individual properties from {#link JedisShardInfo} using
                             *              {@link JedisClientConfiguration}.
                             * @throws IllegalStateException if {#link JedisClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setShardInfo(shardInfo: JedisShardInfo): void
                            /**
                             * Returns the timeout.
                             * @return the timeout.
                             */
                            // @ts-ignore
                            public getTimeout(): number /*int*/
                            /**
                             * Sets the timeout.
                             * @param timeout the timeout to set.
                             * @deprecated since 2.0, configure the timeout using {#link JedisClientConfiguration}.
                             * @throws IllegalStateException if {#link JedisClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setTimeout(timeout: number /*int*/): void
                            /**
                             * Indicates the use of a connection pool.
                             * <p />
                             * Applies only to single node Redis. Sentinel and Cluster modes use always connection-pooling regardless of the
                             * pooling setting.
                             * @return the use of connection pooling.
                             */
                            // @ts-ignore
                            public getUsePool(): boolean
                            /**
                             * Turns on or off the use of connection pooling.
                             * @param usePool the usePool to set.
                             * @deprecated since 2.0, configure pooling usage with {#link JedisClientConfiguration}.
                             * @throws IllegalStateException if {#link JedisClientConfiguration} is immutable.
                             * @throws IllegalStateException if configured to use sentinel and {#code usePool} is {@literal false} as Jedis
                             *            requires pooling for Redis sentinel use.
                             */
                            // @ts-ignore
                            public setUsePool(usePool: boolean): void
                            /**
                             * Returns the poolConfig.
                             * @return the poolConfig
                             */
                            // @ts-ignore
                            public getPoolConfig(): GenericObjectPoolConfig
                            /**
                             * Sets the pool configuration for this factory.
                             * @param poolConfig the poolConfig to set.
                             * @deprecated since 2.0, configure {#link JedisPoolConfig} using {@link JedisClientConfiguration}.
                             * @throws IllegalStateException if {#link JedisClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setPoolConfig(poolConfig: JedisPoolConfig): void
                            /**
                             * Returns the index of the database.
                             * @return the database index.
                             */
                            // @ts-ignore
                            public getDatabase(): number /*int*/
                            /**
                             * Sets the index of the database used by this connection factory. Default is 0.
                             * @param index database index.
                             * @deprecated since 2.0, configure the client name using {#link RedisSentinelConfiguration} or
                             *              {@link RedisStandaloneConfiguration}.
                             */
                            // @ts-ignore
                            public setDatabase(index: number /*int*/): void
                            /**
                             * Returns the client name.
                             * @return the client name.
                             * @since 1.8
                             */
                            // @ts-ignore
                            public getClientName(): string
                            /**
                             * Sets the client name used by this connection factory. Defaults to none which does not set a client name.
                             * @param clientName the client name.
                             * @since 1.8
                             * @deprecated since 2.0, configure the client name using {#link JedisClientConfiguration}.
                             * @throws IllegalStateException if {#link JedisClientConfiguration} is immutable.
                             */
                            // @ts-ignore
                            public setClientName(clientName: java.lang.String | string): void
                            /**
                             * @return the {#link JedisClientConfiguration}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getClientConfiguration(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration
                            /**
                             * @return the {#link RedisStandaloneConfiguration}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getStandaloneConfiguration(): org.springframework.data.redis.connection.RedisStandaloneConfiguration
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
                             * {@link JedisConnection#closePipeline()} and {@link JedisConnection#exec()} will be of the type returned by the
                             * Jedis driver.
                             * @return Whether or not to convert pipeline and tx results.
                             */
                            // @ts-ignore
                            public getConvertPipelineAndTxResults(): boolean
                            /**
                             * Specifies if pipelined results should be converted to the expected data type. If false, results of
                             * {@link JedisConnection#closePipeline()} and {@link JedisConnection#exec()} will be of the type returned by the
                             * Jedis driver.
                             * @param convertPipelineAndTxResults Whether or not to convert pipeline and tx results.
                             */
                            // @ts-ignore
                            public setConvertPipelineAndTxResults(convertPipelineAndTxResults: boolean): void
                            /**
                             * @return true when {#link RedisSentinelConfiguration} is present.
                             * @since 1.4
                             */
                            // @ts-ignore
                            public isRedisSentinelAware(): boolean
                            /**
                             * @return true when {#link RedisClusterConfiguration} is present.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public isRedisClusterAware(): boolean
                            // @ts-ignore
                            public getSentinelConnection(): org.springframework.data.redis.connection.RedisSentinelConnection
                        }
                    }
                }
            }
        }
    }
}
