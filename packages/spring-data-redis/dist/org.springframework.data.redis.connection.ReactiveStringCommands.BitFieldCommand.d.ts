declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code BITFIELD} command parameters.
                         * @author Mark Paluch
                         * @see <a href="https://redis.io/commands/bitfield">Redis Documentation: BITFIELD</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        class BitFieldCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link BitFieldCommand} given a {@literal key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link BitFieldCommand} for a {@literal key}.
                             */
                            // @ts-ignore
                            public static bitField(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.BitFieldCommand
                            /**
                             * Applies the {@link BitFieldSubCommands}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param commands must not be {#literal null}.
                             * @return a new {#link BitFieldSubCommands} with {@link BitFieldSubCommands} applied.
                             */
                            // @ts-ignore
                            public commands(commands: org.springframework.data.redis.connection.BitFieldSubCommands): org.springframework.data.redis.connection.ReactiveStringCommands.BitFieldCommand
                            // @ts-ignore
                            public getSubCommands(): org.springframework.data.redis.connection.BitFieldSubCommands
                        }
                    }
                }
            }
        }
    }
}
