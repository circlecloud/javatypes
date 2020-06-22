declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * {@code LINSERT} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/linsert">Redis Documentation: LINSERT</a>
                         */
                        // @ts-ignore
                        class LInsertCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link LInsertCommand} given a {@link ByteBuffer value}.
                             * @param value must not be {#literal null}.
                             * @return a new {#link LInsertCommand} for {@link ByteBuffer value}.
                             */
                            // @ts-ignore
                            public static value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LInsertCommand
                            /**
                             * Applies the before {@literal pivot}. Constructs a new command instance with all previously configured properties.
                             * @param pivot must not be {#literal null}.
                             * @return a new {#link LInsertCommand} with {@literal pivot} applied.
                             */
                            // @ts-ignore
                            public before(pivot: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LInsertCommand
                            /**
                             * Applies the after {@literal pivot}. Constructs a new command instance with all previously configured properties.
                             * @param pivot must not be {#literal null}.
                             * @return a new {#link LInsertCommand} with {@literal pivot} applied.
                             */
                            // @ts-ignore
                            public after(pivot: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LInsertCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link LInsertCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public forKey(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LInsertCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getPosition(): org.springframework.data.redis.connection.RedisListCommands.Position
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getPivot(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
