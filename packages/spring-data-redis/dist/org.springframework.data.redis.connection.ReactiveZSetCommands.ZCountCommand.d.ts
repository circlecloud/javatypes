declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZCOUNT} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         */
                        // @ts-ignore
                        class ZCountCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZCountCommand} given a {@link Range}.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZCountCommand} for {@link Range}.
                             */
                            // @ts-ignore
                            public static scoresWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZCountCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZCountCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public forKey(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZCountCommand
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
