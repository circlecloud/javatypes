declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZRANGEBYLEX}/{@literal ZREVRANGEBYLEX} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         * @see <a href="https://redis.io/commands/zrevrangebylex">Redis Documentation: ZREVRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        class ZRangeByLexCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZRangeByLexCommand} given a {@link Range} of {@link String} to retrieve elements
                             * lexicographical ordering.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZRangeByLexCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static stringsWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByLexCommand
                            /**
                             * Creates a new {@link ZRangeByLexCommand} given a {@link Range} of {@link String} to obtain elements in reverse
                             * lexicographical ordering.
                             * @param range must not be {#literal null}.
                             * @return a new {#link ZRangeByLexCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static reverseStringsWithin(range: object): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByLexCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZRangeByLexCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByLexCommand
                            /**
                             * Applies the {@link Limit}. Constructs a new command instance with all previously configured properties.
                             * @param limit must not be {#literal null}.
                             * @return a new {#link ZRangeByLexCommand} with {@link Limit} applied.
                             */
                            // @ts-ignore
                            public limitTo(limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRangeByLexCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getRange(): object
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getLimit(): org.springframework.data.redis.connection.RedisZSetCommands.Limit
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
