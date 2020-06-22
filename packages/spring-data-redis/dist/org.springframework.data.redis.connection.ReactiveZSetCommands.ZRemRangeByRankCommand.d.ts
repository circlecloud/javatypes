declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZREMRANGEBYRANK} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zremrangebyrank">Redis Documentation: ZREMRANGEBYRANK</a>
                         */
                        // @ts-ignore
                        class ZRemRangeByRankCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZRemRangeByRankCommand} given a {@link Range}.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZRemRangeByRankCommand} for {@link Range}.
                             */
                            // @ts-ignore
                            public static valuesWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRemRangeByRankCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZRemRangeByRankCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRemRangeByRankCommand
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
