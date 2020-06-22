declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SPOP} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        class SPopCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SPopCommand} for a single member.
                             * @return a new {#link SPopCommand} for a single member.
                             */
                            // @ts-ignore
                            public static one(): org.springframework.data.redis.connection.ReactiveSetCommands.SPopCommand
                            /**
                             * Creates a new {@link SPopCommand} for {@code count} members.
                             * @return a new {#link SPopCommand} for {@code count} members.
                             */
                            // @ts-ignore
                            public static members(count: number /*long*/): org.springframework.data.redis.connection.ReactiveSetCommands.SPopCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SRemCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SPopCommand
                            // @ts-ignore
                            public getCount(): number /*long*/
                        }
                    }
                }
            }
        }
    }
}
