declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code SETBIT} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/setbit">Redis Documentation: SETBIT</a>
                         */
                        // @ts-ignore
                        class SetBitCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SetBitCommand} given a {@literal key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SetBitCommand} for a {@literal key}.
                             */
                            // @ts-ignore
                            public static bit(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.SetBitCommand
                            /**
                             * Applies the offset {@literal index}. Constructs a new command instance with all previously configured properties.
                             * @param index
                             * @return a new {#link SetBitCommand} with {@literal offset} applied.
                             */
                            // @ts-ignore
                            public atOffset(index: number /*long*/): org.springframework.data.redis.connection.ReactiveStringCommands.SetBitCommand
                            /**
                             * Applies the {@literal bit}. Constructs a new command instance with all previously configured properties.
                             * @param bit
                             * @return a new {#link SetBitCommand} with {@literal offset} applied.
                             */
                            // @ts-ignore
                            public to(bit: boolean): org.springframework.data.redis.connection.ReactiveStringCommands.SetBitCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getOffset(): number
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): boolean
                        }
                    }
                }
            }
        }
    }
}
