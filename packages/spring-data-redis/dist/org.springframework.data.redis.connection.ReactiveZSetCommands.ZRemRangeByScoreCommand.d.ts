declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZREMRANGEBYSCORE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        class ZRemRangeByScoreCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZRemRangeByScoreCommand} given a {@link Range}.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZRemRangeByScoreCommand} for {@link Range}.
                             */
                            // @ts-ignore
                            public static scoresWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRemRangeByScoreCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZRemRangeByRankCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRemRangeByScoreCommand
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
