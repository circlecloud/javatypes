declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@literal ZRANGEBYSCORE}/{@literal ZREVRANGEBYSCORE}.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        class ZRangeByScoreCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZRangeByScoreCommand} given a {@link Range} to obtain elements ordered from the lowest to
                             * the highest score.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZRangeByScoreCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static scoresWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByScoreCommand
                            /**
                             * Creates a new {@link ZRangeByScoreCommand} given a {@link Range} to obtain elements ordered from the highest to
                             * the lowest score.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZRangeByScoreCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static reverseScoresWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByScoreCommand
                            /**
                             * Return the score along with each returned element. Constructs a new command instance with all previously
                             * configured properties.
                             * @return a new {#link ZRangeByScoreCommand} with score retrieval applied.
                             */
                            // @ts-ignore
                            public withScores(): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByScoreCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZRangeByScoreCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByScoreCommand
                            /**
                             * Applies the {@link Limit}. Constructs a new command instance with all previously configured properties.
                             * @param limit must not be {#literal null}.
                             * @return a new {#link ZRangeByScoreCommand} with {@link Limit} applied.
                             */
                            // @ts-ignore
                            public limitTo(limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByScoreCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getRange(): object
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public isWithScores(): boolean
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getDirection(): Direction
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getLimit(): java.util.Optional<org.springframework.data.redis.connection.RedisZSetCommands.Limit>
                        }
                    }
                }
            }
        }
    }
}
