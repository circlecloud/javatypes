declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code SET} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/set">Redis Documentation: SET</a>
                         */
                        // @ts-ignore
                        class SetCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SetCommand} given a {@literal key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SetCommand} for a {@literal key}.
                             */
                            // @ts-ignore
                            public static set(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.SetCommand
                            /**
                             * Applies the {@literal value}. Constructs a new command instance with all previously configured properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link SetCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.SetCommand
                            /**
                             * Applies {@link Expiration}. Constructs a new command instance with all previously configured properties.
                             * @param expiration must not be {#literal null}.
                             * @return a new {#link SetCommand} with {@link Expiration} applied.
                             */
                            // @ts-ignore
                            public expiring(expiration: org.springframework.data.redis.core.types.Expiration): org.springframework.data.redis.connection.ReactiveStringCommands.SetCommand
                            /**
                             * Applies {@link SetOption}. Constructs a new command instance with all previously configured properties.
                             * @param option must not be {#literal null}.
                             * @return a new {#link SetCommand} with {@link SetOption} applied.
                             */
                            // @ts-ignore
                            public withSetOption(option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): org.springframework.data.redis.connection.ReactiveStringCommands.SetCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getExpiration(): java.util.Optional<org.springframework.data.redis.core.types.Expiration>
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getOption(): java.util.Optional<org.springframework.data.redis.connection.RedisStringCommands.SetOption>
                        }
                    }
                }
            }
        }
    }
}
