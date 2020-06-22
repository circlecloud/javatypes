declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        namespace JedisClientConfiguration {
                            /**
                             * Builder for Pooling-related {@link JedisClientConfiguration}.
                             */
                            // @ts-ignore
                            interface JedisPoolingClientConfigurationBuilder {
                                /**
                                 * @param poolConfig must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if poolConfig is {#literal null}.
                                 */
                                // @ts-ignore
                                poolConfig(poolConfig: GenericObjectPoolConfig): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisPoolingClientConfigurationBuilder
                                /**
                                 * Return to {@link JedisClientConfigurationBuilder}.
                                 * @return {#link JedisClientConfigurationBuilder}.
                                 */
                                // @ts-ignore
                                and(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
                                /**
                                 * Build the {@link JedisClientConfiguration} with the configuration applied from this builder.
                                 * @return a new {#link JedisClientConfiguration} object.
                                 */
                                // @ts-ignore
                                build(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration
                            }
                        }
                    }
                }
            }
        }
    }
}
