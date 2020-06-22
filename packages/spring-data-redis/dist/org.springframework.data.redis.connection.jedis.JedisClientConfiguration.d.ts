declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * Redis client configuration for jedis. This configuration provides optional configuration elements such as
                         * {@link SSLSocketFactory} and {@link JedisPoolConfig} specific to jedis client features.
                         * <p/>
                         * Providing optional elements allows a more specific configuration of the client:
                         * <ul>
                         * <li>Whether to use SSL</li>
                         * <li>Optional {@link SSLSocketFactory}</li>
                         * <li>Optional {@link SSLParameters}</li>
                         * <li>Optional {@link HostnameVerifier}</li>
                         * <li>Whether to use connection-pooling</li>
                         * <li>Optional {@link GenericObjectPoolConfig}</li>
                         * <li>Optional client name</li>
                         * <li>Connect {@link Duration timeout}</li>
                         * <li>Read {@link Duration timeout}</li>
                         * </ul>
                         * <p />
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @author Chao Chang
                         * @since 2.0
                         * @see redis.clients.jedis.Jedis
                         * @see org.springframework.data.redis.connection.RedisStandaloneConfiguration
                         * @see org.springframework.data.redis.connection.RedisSentinelConfiguration
                         * @see org.springframework.data.redis.connection.RedisClusterConfiguration
                         */
                        // @ts-ignore
                        interface JedisClientConfiguration {
                            /**
                             * @return {#literal true} to use SSL, {@literal false} to use unencrypted connections.
                             */
                            // @ts-ignore
                            isUseSsl(): boolean
                            /**
                             * @return the optional {#link SSLSocketFactory}.
                             */
                            // @ts-ignore
                            getSslSocketFactory(): java.util.Optional<javax.net.ssl.SSLSocketFactory>
                            /**
                             * @return the optional {#link SSLParameters}.
                             */
                            // @ts-ignore
                            getSslParameters(): java.util.Optional<javax.net.ssl.SSLParameters>
                            /**
                             * @return the optional {#link HostnameVerifier}.
                             */
                            // @ts-ignore
                            getHostnameVerifier(): java.util.Optional<javax.net.ssl.HostnameVerifier>
                            /**
                             * @return {#literal true} to use connection-pooling. Applies only to single node Redis. Sentinel and Cluster modes
                             *          use always connection-pooling regardless of the pooling setting.
                             */
                            // @ts-ignore
                            isUsePooling(): boolean
                            /**
                             * @return the optional {#link GenericObjectPoolConfig}.
                             */
                            // @ts-ignore
                            getPoolConfig(): java.util.Optional<GenericObjectPoolConfig>
                            /**
                             * @return the optional client name to be set with {#code CLIENT SETNAME}.
                             */
                            // @ts-ignore
                            getClientName(): java.util.Optional<java.lang.String | string>
                            /**
                             * @return the connection timeout.
                             * @see java.net.Socket#connect(SocketAddress, int)
                             */
                            // @ts-ignore
                            getConnectTimeout(): java.time.Duration
                            /**
                             * @return the read timeout.
                             * @see java.net.Socket#setSoTimeout(int)
                             */
                            // @ts-ignore
                            getReadTimeout(): java.time.Duration
                            /**
                             * Creates a new {@link JedisClientConfigurationBuilder} to build {@link JedisClientConfiguration} to be used with the
                             * jedis client.
                             * @return a new {#link JedisClientConfigurationBuilder} to build {@link JedisClientConfiguration}.
                             */
                            // @ts-ignore
                            builder(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
                            /**
                             * Creates a default {@link JedisClientConfiguration}.
                             * <dl>
                             * <dt>SSL enabled</dt>
                             * <dd>no</dd>
                             * <dt>Pooling enabled</dt>
                             * <dd>no</dd>
                             * <dt>Client Name</dt>
                             * <dd>[not set]</dd>
                             * <dt>Read Timeout</dt>
                             * <dd>2000 msec</dd>
                             * <dt>Connect Timeout</dt>
                             * <dd>2000 msec</dd>
                             * </dl>
                             * @return a {#link JedisClientConfiguration} with defaults.
                             */
                            // @ts-ignore
                            defaultConfiguration(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration
                        }
                    }
                }
            }
        }
    }
}
