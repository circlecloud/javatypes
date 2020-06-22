declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Redis client configuration for lettuce. This configuration provides optional configuration elements such as
                         * {@link ClientResources} and {@link ClientOptions} specific to Lettuce client features.
                         * <p>
                         * Providing optional elements allows a more specific configuration of the client:
                         * <ul>
                         * <li>Whether to use SSL</li>
                         * <li>Whether to verify peers using SSL</li>
                         * <li>Whether to use StartTLS</li>
                         * <li>Optional {@link ClientResources}</li>
                         * <li>Optional {@link ClientOptions}, defaults to {@link ClientOptions} with enabled {@link TimeoutOptions}.</li>
                         * <li>Optional client name</li>
                         * <li>Optional {@link ReadFrom}. Enables Master/Replica operations if configured.</li>
                         * <li>Client {@link Duration timeout}</li>
                         * <li>Shutdown {@link Duration timeout}</li>
                         * </ul>
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         * @see org.springframework.data.redis.connection.RedisStandaloneConfiguration
                         * @see org.springframework.data.redis.connection.RedisSentinelConfiguration
                         * @see org.springframework.data.redis.connection.RedisClusterConfiguration
                         */
                        // @ts-ignore
                        interface LettuceClientConfiguration {
                            /**
                             * @return {#literal true} to use SSL, {@literal false} to use unencrypted connections.
                             */
                            // @ts-ignore
                            isUseSsl(): boolean
                            /**
                             * @return {#literal true} to verify peers when using {@link #isUseSsl() SSL}.
                             */
                            // @ts-ignore
                            isVerifyPeer(): boolean
                            /**
                             * @return {#literal true} to use Start TLS ({@code true} if the first write request shouldn't be encrypted).
                             */
                            // @ts-ignore
                            isStartTls(): boolean
                            /**
                             * @return the optional {#link ClientResources}.
                             */
                            // @ts-ignore
                            getClientResources(): java.util.Optional<ClientResources>
                            /**
                             * @return the optional {#link io.lettuce.core.ClientOptions}.
                             */
                            // @ts-ignore
                            getClientOptions(): java.util.Optional<ClientOptions>
                            /**
                             * @return the optional client name to be set with {#code CLIENT SETNAME}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            getClientName(): java.util.Optional<java.lang.String | string>
                            /**
                             * Note: Redis is undergoing a nomenclature change where the term replica is used synonymously to slave.
                             * @return the optional {#link io.lettuce.core.ReadFrom} setting.
                             * @since 2.1
                             */
                            // @ts-ignore
                            getReadFrom(): java.util.Optional<ReadFrom>
                            /**
                             * @return the timeout.
                             */
                            // @ts-ignore
                            getCommandTimeout(): java.time.Duration
                            /**
                             * @return the shutdown timeout used to close the client.
                             * @see io.lettuce.core.AbstractRedisClient#shutdown(long, long, TimeUnit)
                             */
                            // @ts-ignore
                            getShutdownTimeout(): java.time.Duration
                            /**
                             * Creates a new {@link LettuceClientConfigurationBuilder} to build {@link LettuceClientConfiguration} to be used with
                             * the Lettuce client.
                             * @return a new {#link LettuceClientConfigurationBuilder} to build {@link LettuceClientConfiguration}.
                             */
                            // @ts-ignore
                            builder(): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder
                            /**
                             * Creates a default {@link LettuceClientConfiguration} with:
                             * <dl>
                             * <dt>SSL</dt>
                             * <dd>no</dd>
                             * <dt>Peer Verification</dt>
                             * <dd>yes</dd>
                             * <dt>Start TLS</dt>
                             * <dd>no</dd>
                             * <dt>Client Options</dt>
                             * <dd>{@link ClientOptions} with enabled {@link io.lettuce.core.TimeoutOptions}</dd>
                             * <dt>Client Resources</dt>
                             * <dd>none</dd>
                             * <dt>Client name</dt>
                             * <dd>none</dd>
                             * <dt>Read From</dt>
                             * <dd>none</dd>
                             * <dt>Connect Timeout</dt>
                             * <dd>60 Seconds</dd>
                             * <dt>Shutdown Timeout</dt>
                             * <dd>100 Milliseconds</dd>
                             * </dl>
                             * @return a {#link LettuceClientConfiguration} with defaults.
                             */
                            // @ts-ignore
                            defaultConfiguration(): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration
                        }
                    }
                }
            }
        }
    }
}
