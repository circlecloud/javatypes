declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        namespace LettucePoolingClientConfiguration {
                            /**
                             * @author Mark Paluch
                             * @author Christoph Strobl
                             * @author Longlong Zhao
                             */
                            // @ts-ignore
                            class LettucePoolingClientConfigurationBuilder extends org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder {
                                // @ts-ignore
                                public useSsl(): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingSslClientConfigurationBuilder
                                // @ts-ignore
                                public clientResources(clientResources: ClientResources): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder
                                // @ts-ignore
                                public clientOptions(clientOptions: ClientOptions): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder
                                // @ts-ignore
                                public commandTimeout(timeout: java.time.Duration): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder
                                // @ts-ignore
                                public shutdownTimeout(shutdownTimeout: java.time.Duration): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder
                                // @ts-ignore
                                public readFrom(readFrom: ReadFrom): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder
                                // @ts-ignore
                                public clientName(clientName: java.lang.String | string): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder
                                /**
                                 * Set the {@link GenericObjectPoolConfig} used by the driver.
                                 * @param poolConfig must not be {#literal null}.
                                 */
                                // @ts-ignore
                                public poolConfig(poolConfig: GenericObjectPoolConfig): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder
                                // @ts-ignore
                                public build(): org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration
                            }
                        }
                    }
                }
            }
        }
    }
}
