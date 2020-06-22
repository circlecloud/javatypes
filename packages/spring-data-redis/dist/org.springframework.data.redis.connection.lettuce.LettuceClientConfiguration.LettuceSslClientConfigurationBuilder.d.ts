declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        namespace LettuceClientConfiguration {
                            /**
                             * Builder for SSL-related {@link LettuceClientConfiguration}.
                             */
                            // @ts-ignore
                            class LettuceSslClientConfigurationBuilder extends java.lang.Object {
                                /**
                                 * Disable peer verification.
                                 * @return {#literal this} builder.
                                 */
                                // @ts-ignore
                                public disablePeerVerification(): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceSslClientConfigurationBuilder
                                /**
                                 * Enable Start TLS to send the first bytes unencrypted.
                                 * @return {#literal this} builder.
                                 */
                                // @ts-ignore
                                public startTls(): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceSslClientConfigurationBuilder
                                /**
                                 * Return to {@link LettuceClientConfigurationBuilder}.
                                 * @return {#link LettuceClientConfigurationBuilder}.
                                 */
                                // @ts-ignore
                                public and(): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder
                                /**
                                 * Build the {@link LettuceClientConfiguration} with the configuration applied from this builder.
                                 * @return a new {#link LettuceClientConfiguration} object.
                                 */
                                // @ts-ignore
                                public build(): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration
                            }
                        }
                    }
                }
            }
        }
    }
}
