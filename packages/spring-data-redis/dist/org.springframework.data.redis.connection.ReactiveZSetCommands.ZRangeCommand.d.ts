declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZRANGE}/{@literal ZREVRANGE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        class ZRangeCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZRangeCommand} given a {@link Range} to obtain elements ordered from the lowest to the
                             * highest score.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZRangeCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static valuesWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeCommand
                            /**
                             * Creates a new {@link ZRangeCommand} given a {@link Range} to obtain elements ordered from the highest to the
                             * lowest score.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZRangeCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static reverseValuesWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeCommand
                            /**
                             * Return the score along with each returned element. Constructs a new command instance with all previously
                             * configured properties.
                             * @return a new {#link ZRangeCommand} with score retrieval applied.
                             */
                            // @ts-ignore
                            public withScores(): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZRangeCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeCommand
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
                        }
                    }
                }
            }
        }
    }
}
