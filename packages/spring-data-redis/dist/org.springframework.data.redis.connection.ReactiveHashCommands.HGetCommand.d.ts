declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveHashCommands {
                        /**
                         * {@literal HGET} {@link Command}.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/hget">Redis Documentation: HGET</a>
                         */
                        // @ts-ignore
                        class HGetCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link HGetCommand} given a {@link ByteBuffer field name}.
                             * @param field must not be {#literal null}.
                             * @return a new {#link HGetCommand} for a {@link ByteBuffer field name}.
                             */
                            // @ts-ignore
                            public static field(field: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HGetCommand
                            /**
                             * Creates a new {@link HGetCommand} given a {@link Collection} of field names.
                             * @param fields must not be {#literal null}.
                             * @return a new {#link HGetCommand} for a {@link Collection} of field names.
                             */
                            // @ts-ignore
                            public static fields(fields: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveHashCommands.HGetCommand
                            /**
                             * Applies the hash {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link HGetCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HGetCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getFields(): Array<java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
