declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        namespace JedisClientConfiguration {
                            /**
                             * Default {@link JedisClientConfigurationBuilder} implementation to build an immutable
                             * {@link JedisClientConfiguration}.
                             */
                            // @ts-ignore
                            class DefaultJedisClientConfigurationBuilder extends java.lang.Object implements org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder, org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisPoolingClientConfigurationBuilder, org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder {
                                // @ts-ignore
                                public useSsl(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder
                                // @ts-ignore
                                public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder
                                // @ts-ignore
                                public sslParameters(sslParameters: javax.net.ssl.SSLParameters): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder
                                // @ts-ignore
                                public hostnameVerifier(hostnameVerifier: javax.net.ssl.HostnameVerifier): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisSslClientConfigurationBuilder
                                // @ts-ignore
                                public usePooling(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisPoolingClientConfigurationBuilder
                                // @ts-ignore
                                public poolConfig(poolConfig: GenericObjectPoolConfig): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisPoolingClientConfigurationBuilder
                                // @ts-ignore
                                public and(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
                                // @ts-ignore
                                public clientName(clientName: java.lang.String | string): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
                                // @ts-ignore
                                public readTimeout(readTimeout: java.time.Duration): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
                                // @ts-ignore
                                public connectTimeout(connectTimeout: java.time.Duration): org.springframework.data.redis.connection.jedis.JedisClientConfiguration.JedisClientConfigurationBuilder
                                // @ts-ignore
                                public build(): org.springframework.data.redis.connection.jedis.JedisClientConfiguration
                            }
                        }
                    }
                }
            }
        }
    }
}
