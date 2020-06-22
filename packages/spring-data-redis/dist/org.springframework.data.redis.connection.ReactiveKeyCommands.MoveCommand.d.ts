declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveKeyCommands {
                        /**
                         * {@code MOVE} command parameters.
                         * @author Mark Paluch
                         * @see <a href="https://redis.io/commands/move">Redis Documentation: MOVE</a>
                         */
                        // @ts-ignore
                        class MoveCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link MoveCommand} given a {@link ByteBuffer key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ExpireCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static key(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveKeyCommands.MoveCommand
                            /**
                             * Applies the {@literal database} index. Constructs a new command instance with all previously configured
                             * properties.
                             * @param database
                             * @return a new {#link MoveCommand} with {@literal database} applied.
                             */
                            // @ts-ignore
                            public timeout(database: number /*int*/): org.springframework.data.redis.connection.ReactiveKeyCommands.MoveCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getDatabase(): number
                        }
                    }
                }
            }
        }
    }
}
