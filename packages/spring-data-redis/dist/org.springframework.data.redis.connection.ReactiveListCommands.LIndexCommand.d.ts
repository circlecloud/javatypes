declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * {@code LINDEX} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/lindex">Redis Documentation: LINDEX</a>
                         */
                        // @ts-ignore
                        class LIndexCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link LIndexCommand} given an {@literal index}.
                             * @param index
                             * @return a new {#link LIndexCommand} for {@literal index}.
                             */
                            // @ts-ignore
                            public static elementAt(index: number /*long*/): org.springframework.data.redis.connection.ReactiveListCommands.LIndexCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link LIndexCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.LIndexCommand
                            /**
                             * @return 
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
