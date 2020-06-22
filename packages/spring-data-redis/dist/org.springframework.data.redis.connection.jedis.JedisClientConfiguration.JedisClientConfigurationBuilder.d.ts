declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        namespace JedisClientConfiguration {
                            /**
                             * Builder for {@link JedisClientConfiguration}.
                             */
                            // @ts-ignore
                            interface JedisClientConfigurationBuilder {
                                /**
                                 * Enable SSL connections.
                                 * @return {#link JedisSslClientConfigurationBuilder}.
                                 */
                                // @ts-ignore
                                useSsl(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder
                                /**
                                 * Enable connection-pooling.
                                 * <p />
                                 * Applies only to single node Redis. Sentinel and Cluster modes use always connection-pooling regardless of the
                                 * pooling setting.
                                 * @return {#link JedisPoolingClientConfigurationBuilder}.
                                 */
                                // @ts-ignore
                                usePooling(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisPoolingClientConfigurationBuilder
                                /**
                                 * Configure a {@code clientName} to be set with {@code CLIENT SETNAME}.
                                 * @param clientName must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if clientName is {#literal null}.
                                 */
                                // @ts-ignore
                                clientName(clientName: java.lang.String | string): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
                                /**
                                 * Configure a read timeout.
                                 * @param readTimeout must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if readTimeout is {#literal null}.
                                 */
                                // @ts-ignore
                                readTimeout(readTimeout: java.time.Duration): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
                                /**
                                 * Configure a connection timeout.
                                 * @param connectTimeout must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if connectTimeout is {#literal null}.
                                 */
                                // @ts-ignore
                                connectTimeout(connectTimeout: java.time.Duration): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
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
