declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code BITCOUNT} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/bitcount">Redis Documentation: BITCOUNT</a>
                         */
                        // @ts-ignore
                        class BitCountCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link BitCountCommand} given a {@literal key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link BitCountCommand} for a {@literal key}.
                             */
                            // @ts-ignore
                            public static bitCount(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.BitCountCommand
                            /**
                             * Applies the {@link Range}. Constructs a new command instance with all previously configured properties.
                             * @param range must not be {#literal null}.
                             * @return a new {#link BitCountCommand} with {@link Range} applied.
                             */
                            // @ts-ignore
                            public within(range: object): org.springframework.data.redis.connection.ReactiveStringCommands.BitCountCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getRange(): object
                        }
                    }
                }
            }
        }
    }
}
