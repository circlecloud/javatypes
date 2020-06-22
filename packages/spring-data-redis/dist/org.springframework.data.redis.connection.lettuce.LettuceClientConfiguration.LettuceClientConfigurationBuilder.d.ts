declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        namespace LettuceClientConfiguration {
                            /**
                             * @author Mark Paluch
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class LettuceClientConfigurationBuilder extends java.lang.Object {
                                /**
                                 * Enable SSL connections.
                                 * @return {#link LettuceSslClientConfigurationBuilder}.
                                 */
                                // @ts-ignore
                                public useSsl(): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceSslClientConfigurationBuilder
                                /**
                                 * Configure {@link ClientResources}.
                                 * @param clientResources must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if clientResources is {#literal null}.
                                 */
                                // @ts-ignore
                                public clientResources(clientResources: ClientResources): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder
                                /**
                                 * Configure {@link ClientOptions}.
                                 * @param clientOptions must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if clientOptions is {#literal null}.
                                 */
                                // @ts-ignore
                                public clientOptions(clientOptions: ClientOptions): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder
                                /**
                                 * Configure {@link ReadFrom}. Enables Master/Replica operations if configured. <br/>
                                 * Note: Redis is undergoing a nomenclature change where the term replica is used synonymously to slave.
                                 * @param readFrom must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if clientOptions is {#literal null}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public readFrom(readFrom: ReadFrom): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder
                                /**
                                 * Configure a {@code clientName} to be set with {@code CLIENT SETNAME}.
                                 * @param clientName must not be {#literal null} or empty.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if clientName is {#literal null} or empty.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public clientName(clientName: java.lang.String | string): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder
                                /**
                                 * Configure a command timeout.
                                 * @param timeout must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if timeout is {#literal null}.
                                 */
                                // @ts-ignore
                                public commandTimeout(timeout: java.time.Duration): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder
                                /**
                                 * Configure a shutdown timeout.
                                 * @param shutdownTimeout must not be {#literal null}.
                                 * @return {#literal this} builder.
                                 * @throws IllegalArgumentException if shutdownTimeout is {#literal null}.
                                 */
                                // @ts-ignore
                                public shutdownTimeout(shutdownTimeout: java.time.Duration): org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration.LettuceClientConfigurationBuilder
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
