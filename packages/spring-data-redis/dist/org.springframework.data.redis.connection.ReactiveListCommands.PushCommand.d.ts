declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * {@code LPUSH}/{@literal RPUSH} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/lpush">Redis Documentation: LPUSH</a>
                         * @see <a href="https://redis.io/commands/rpush">Redis Documentation: RPUSH</a>
                         */
                        // @ts-ignore
                        class PushCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link PushCommand} for right push ({@literal RPUSH}).
                             * @return a new {#link PushCommand} for right push ({@literal RPUSH}).
                             */
                            // @ts-ignore
                            public static right(): org.springframework.data.redis.connection.ReactiveListCommands.PushCommand
                            /**
                             * Creates a new {@link PushCommand} for left push ({@literal LPUSH}).
                             * @return a new {#link PushCommand} for left push ({@literal LPUSH}).
                             */
                            // @ts-ignore
                            public static left(): org.springframework.data.redis.connection.ReactiveListCommands.PushCommand
                            /**
                             * Applies the {@literal value}. Constructs a new command instance with all previously configured properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link PushCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.PushCommand
                            /**
                             * Applies a {@link List} of {@literal values}.
                             * @param values must not be {#literal null}.
                             * @return a new {#link PushCommand} with {@literal values} applied.
                             */
                            // @ts-ignore
                            public values(values: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveListCommands.PushCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link PushCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public to(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.PushCommand
                            /**
                             * Disable upsert. Constructs a new command instance with all previously configured properties.
                             * @return a new {#link PushCommand} with upsert disabled.
                             */
                            // @ts-ignore
                            public ifExists(): org.springframework.data.redis.connection.ReactiveListCommands.PushCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getValues(): Array<java.nio.ByteBuffer>
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getUpsert(): boolean
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
