declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code APPEND} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/append">Redis Documentation: APPEND</a>
                         */
                        // @ts-ignore
                        class AppendCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link AppendCommand} given a {@literal key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link AppendCommand} for a {@literal key}.
                             */
                            // @ts-ignore
                            public static key(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.AppendCommand
                            /**
                             * Applies the {@literal value} to append. Constructs a new command instance with all previously configured
                             * properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link AppendCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public append(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.AppendCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
