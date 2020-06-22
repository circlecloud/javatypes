declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Redis client configuration for lettuce using a driver level pooled connection by adding pooling specific
                         * configuration to {@link LettuceClientConfiguration}.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface LettucePoolingClientConfiguration extends org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration {
                            /**
                             * @return the {#link GenericObjectPoolConfig}. Never {@literal null}.
                             */
                            // @ts-ignore
                            getPoolConfig(): GenericObjectPoolConfig
                            /**
                             * Creates a new {@link LettucePoolingClientConfigurationBuilder} to build {@link LettucePoolingClientConfiguration}
                             * to be used with the Lettuce client.
                             * @return a new {#link LettucePoolingClientConfigurationBuilder} to build {@link LettucePoolingClientConfiguration}.
                             */
                            // @ts-ignore
                            builder(): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder
                            /**
                             * Creates a default {@link LettucePoolingClientConfiguration} with
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
                             * <dt>pool config</dt>
                             * <dd>default {@link GenericObjectPoolConfig}</dd>
                             * </dl>
                             * @return a {#link LettucePoolingClientConfiguration} with defaults.
                             */
                            // @ts-ignore
                            defaultConfiguration(): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration
                        }
                    }
                }
            }
        }
    }
}
