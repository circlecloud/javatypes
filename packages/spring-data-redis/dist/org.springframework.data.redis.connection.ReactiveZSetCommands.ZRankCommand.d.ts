declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZRANK}/{@literal ZREVRANK} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zrank">Redis Documentation: ZRANK</a>
                         * @see <a href="https://redis.io/commands/zrevrank">Redis Documentation: ZREVRANK</a>
                         */
                        // @ts-ignore
                        class ZRankCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZRankCommand} given a {@link ByteBuffer member} to obtain its rank (ordering low to high).
                             * @param member must not be {#literal null}.
                             * @return a new {#link ZRankCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static indexOf(member: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRankCommand
                            /**
                             * Creates a new {@link ZIncrByCommand} given a {@link ByteBuffer member} to obtain its reversed rank (ordering high
                             * to low).
                             * @param member must not be {#literal null}.
                             * @return a new {#link ZRankCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static reverseIndexOf(member: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRankCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZRankCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public storedWithin(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRankCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
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
