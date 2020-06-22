declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZSCORE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zscore">Redis Documentation: ZSCORE</a>
                         */
                        // @ts-ignore
                        class ZScoreCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZScoreCommand} given a {@link ByteBuffer member}.
                             * @param member must not be {#literal null}.
                             * @return a new {#link ZScoreCommand} for {@link Range}.
                             */
                            // @ts-ignore
                            public static scoreOf(member: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZScoreCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZScoreCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public forKey(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZScoreCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
