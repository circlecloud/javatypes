declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        namespace JedisClientConfiguration {
                            /**
                             * Builder for SSL-related {@link JedisClientConfiguration}.
                             */
                            // @ts-ignore
                            interface JedisSslClientConfigurationBuilder {
                                /**
                                 * @param sslSocketFactory must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if sslSocketFactory is {#literal null}.
                                 */
                                // @ts-ignore
                                sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder
                                /**
                                 * @param sslParameters must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if sslParameters is {#literal null}.
                                 */
                                // @ts-ignore
                                sslParameters(sslParameters: javax.net.ssl.SSLParameters): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder
                                /**
                                 * @param hostnameVerifier must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if hostnameVerifier is {#literal null}.
                                 */
                                // @ts-ignore
                                hostnameVerifier(hostnameVerifier: javax.net.ssl.HostnameVerifier): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder
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
