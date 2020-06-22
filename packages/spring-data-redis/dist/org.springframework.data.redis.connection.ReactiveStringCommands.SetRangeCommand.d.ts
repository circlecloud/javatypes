declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code SETRANGE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/setrange">Redis Documentation: SETRANGE</a>
                         */
                        // @ts-ignore
                        class SetRangeCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SetRangeCommand} given a {@literal key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SetRangeCommand} for a {@literal key}.
                             */
                            // @ts-ignore
                            public static overwrite(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.SetRangeCommand
                            /**
                             * Applies the {@literal value}. Constructs a new command instance with all previously configured properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link SetCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public withValue(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.SetRangeCommand
                            /**
                             * Applies the {@literal index}. Constructs a new command instance with all previously configured properties.
                             * @param index
                             * @return a new {#link SetRangeCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public atPosition(index: number /*long*/): org.springframework.data.redis.connection.ReactiveStringCommands.SetRangeCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getOffset(): number
                        }
                    }
                }
            }
        }
    }
}
