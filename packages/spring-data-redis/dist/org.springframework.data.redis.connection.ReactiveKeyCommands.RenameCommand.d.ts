declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveKeyCommands {
                        /**
                         * {@code RENAME} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/rename">Redis Documentation: RENAME</a>
                         */
                        // @ts-ignore
                        class RenameCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link RenameCommand} given a {@link ByteBuffer key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link RenameCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static key(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveKeyCommands.RenameCommand
                            /**
                             * Applies the {@literal newName}. Constructs a new command instance with all previously configured properties.
                             * @param newName must not be {#literal null}.
                             * @return a new {#link RenameCommand} with {@literal newName} applied.
                             */
                            // @ts-ignore
                            public to(newName: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveKeyCommands.RenameCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getNewName(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
