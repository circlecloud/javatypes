declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveHashCommands {
                        /**
                         * {@literal HEXISTS} {@link Command}.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/hexists">Redis Documentation: HEXISTS</a>
                         */
                        // @ts-ignore
                        class HExistsCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link HExistsCommand} given a {@link ByteBuffer field name}.
                             * @param field must not be {#literal null}.
                             * @return a new {#link HExistsCommand} for a {@link ByteBuffer field name}.
                             */
                            // @ts-ignore
                            public static field(field: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HExistsCommand
                            /**
                             * Applies the hash {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link HExistsCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public in(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HExistsCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getField(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
