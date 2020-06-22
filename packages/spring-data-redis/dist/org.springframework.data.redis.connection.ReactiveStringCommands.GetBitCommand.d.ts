declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code GETBIT} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/getbit">Redis Documentation: GETBIT</a>
                         */
                        // @ts-ignore
                        class GetBitCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link GetBitCommand} given a {@literal key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link GetBitCommand} for a {@literal key}.
                             */
                            // @ts-ignore
                            public static bit(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.GetBitCommand
                            /**
                             * Applies the offset {@literal index}. Constructs a new command instance with all previously configured properties.
                             * @param offset
                             * @return a new {#link GetBitCommand} with {@literal offset} applied.
                             */
                            // @ts-ignore
                            public atOffset(offset: number /*long*/): org.springframework.data.redis.connection.ReactiveStringCommands.GetBitCommand
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
