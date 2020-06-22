declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * {@code LREM} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/lrem">Redis Documentation: LREM</a>
                         */
                        // @ts-ignore
                        class LRemCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link LRemCommand} to delete all values.
                             * @return a new {#link LRemCommand} for {@link ByteBuffer value}.
                             */
                            // @ts-ignore
                            public static all(): org.springframework.data.redis.connection.ReactiveListCommands.LRemCommand
                            /**
                             * Creates a new {@link LRemCommand} to first {@literal count} values.
                             * @return a new {#link LRemCommand} to delete first {@literal count} values.
                             */
                            // @ts-ignore
                            public static first(count: number /*long*/): org.springframework.data.redis.connection.ReactiveListCommands.LRemCommand
                            /**
                             * Creates a new {@link LRemCommand} to last {@literal count} values.
                             * @return a new {#link LRemCommand} to delete last {@literal count} values.
                             */
                            // @ts-ignore
                            public static last(count: number /*long*/): org.springframework.data.redis.connection.ReactiveListCommands.LRemCommand
                            /**
                             * Applies the {@literal value}. Constructs a new command instance with all previously configured properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link LRemCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public occurrencesOf(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LRemCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link LRemCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LRemCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getCount(): number
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
