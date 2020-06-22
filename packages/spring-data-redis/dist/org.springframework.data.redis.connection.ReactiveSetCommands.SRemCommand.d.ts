declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SREM} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         */
                        // @ts-ignore
                        class SRemCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SRemCommand} given a {@literal value}.
                             * @param value must not be {#literal null}.
                             * @return a new {#link SRemCommand} for a {@literal value}.
                             */
                            // @ts-ignore
                            public static value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SRemCommand
                            /**
                             * Creates a new {@link SRemCommand} given a {@link Collection} of values.
                             * @param values must not be {#literal null}.
                             * @return a new {#link SRemCommand} for a {@link Collection} of values.
                             */
                            // @ts-ignore
                            public static values(values: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveSetCommands.SRemCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SRemCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SRemCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getValues(): Array<java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
