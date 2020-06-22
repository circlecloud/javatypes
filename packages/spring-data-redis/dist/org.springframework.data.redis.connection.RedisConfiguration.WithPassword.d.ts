declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisConfiguration {
                        /**
                         * {@link RedisConfiguration} part suitable for configurations that may use authentication when connecting.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface WithPassword {
                            /**
                             * Create and set a {@link RedisPassword} for given {@link String}.
                             * @param password can be {#literal null}.
                             */
                            // @ts-ignore
                            setPassword(password: java.lang.String | string): void
                            /**
                             * Create and set a {@link RedisPassword} for given {@link String}.
                             * @param password can be {#literal null}.
                             */
                            // @ts-ignore
                            setPassword(password: string[]): void
                            /**
                             * Create and set a {@link RedisPassword} for given {@link String}.
                             * @param password must not be {#literal null} use {@link RedisPassword#none()} instead.
                             */
                            // @ts-ignore
                            setPassword(password: org.springframework.data.redis.connection.RedisPassword): void
                            /**
                             * Get the RedisPassword to use when connecting.
                             * @return {#link RedisPassword#none()} if none set.
                             */
                            // @ts-ignore
                            getPassword(): org.springframework.data.redis.connection.RedisPassword
                        }
                    }
                }
            }
        }
    }
}
