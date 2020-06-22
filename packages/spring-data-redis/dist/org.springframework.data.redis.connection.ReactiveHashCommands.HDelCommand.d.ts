declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveHashCommands {
                        /**
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/hdel">Redis Documentation: HDEL</a>
                         */
                        // @ts-ignore
                        class HDelCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link HDelCommand} given a {@link ByteBuffer field name}.
                             * @param field must not be {#literal null}.
                             * @return a new {#link HDelCommand} for a {@link ByteBuffer field name}.
                             */
                            // @ts-ignore
                            public static field(field: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HDelCommand
                            /**
                             * Creates a new {@link HDelCommand} given a {@link Collection} of field names.
                             * @param fields must not be {#literal null}.
                             * @return a new {#link HDelCommand} for a {@link Collection} of field names.
                             */
                            // @ts-ignore
                            public static fields(fields: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveHashCommands.HDelCommand
                            /**
                             * Applies the hash {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link HDelCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HDelCommand
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
