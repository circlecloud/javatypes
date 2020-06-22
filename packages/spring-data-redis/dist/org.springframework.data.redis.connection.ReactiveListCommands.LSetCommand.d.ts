declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * {@code LSET} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/lset">Redis Documentation: LSET</a>
                         */
                        // @ts-ignore
                        class LSetCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link LSetCommand} given an {@literal index}.
                             * @param index
                             * @return a new {#link LSetCommand} for {@literal index}.
                             */
                            // @ts-ignore
                            public static elementAt(index: number /*long*/): org.springframework.data.redis.connection.ReactiveListCommands.LSetCommand
                            /**
                             * Applies the {@literal value}. Constructs a new command instance with all previously configured properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link LSetCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public to(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LSetCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link LSetCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public forKey(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LSetCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getIndex(): number
                        }
                    }
                }
            }
        }
    }
}
