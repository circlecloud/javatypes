declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * {@code LPOP}/{@literal RPOP} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/lpop">Redis Documentation: LPOP</a>
                         * @see <a href="https://redis.io/commands/rpop">Redis Documentation: RPOP</a>
                         */
                        // @ts-ignore
                        class PopCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link PopCommand} for right push ({@literal RPOP}).
                             * @return a new {#link PopCommand} for right push ({@literal RPOP}).
                             */
                            // @ts-ignore
                            public static right(): org.springframework.data.redis.connection.ReactiveListCommands.PopCommand
                            /**
                             * Creates a new {@link PopCommand} for right push ({@literal LPOP}).
                             * @return a new {#link PopCommand} for right push ({@literal LPOP}).
                             */
                            // @ts-ignore
                            public static left(): org.springframework.data.redis.connection.ReactiveListCommands.PopCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link LSetCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.PopCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getDirection(): org.springframework.data.redis.connection.ReactiveListCommands.Direction
                        }
                    }
                }
            }
        }
    }
}
