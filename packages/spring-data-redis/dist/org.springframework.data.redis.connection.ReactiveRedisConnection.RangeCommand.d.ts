declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class RangeCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link RangeCommand} given a {@code key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link RangeCommand} for {@code key}.
                             */
                            // @ts-ignore
                            public static key(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveRedisConnection.RangeCommand
                            /**
                             * Applies a {@link Range}. Constructs a new command instance with all previously configured properties.
                             * @param range must not be {#literal null}.
                             * @return a new {#link RangeCommand} with {@link Range} applied.
                             */
                            // @ts-ignore
                            public within(range: object): org.springframework.data.redis.connection.ReactiveRedisConnection.RangeCommand
                            /**
                             * Applies a lower bound to the {@link Range}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param start
                             * @return a new {#link RangeCommand} with the lower bound applied.
                             */
                            // @ts-ignore
                            public fromIndex(start: number /*long*/): org.springframework.data.redis.connection.ReactiveRedisConnection.RangeCommand
                            /**
                             * Applies an upper bound to the {@link Range}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param end
                             * @return a new {#link RangeCommand} with the upper bound applied.
                             */
                            // @ts-ignore
                            public toIndex(end: number /*long*/): org.springframework.data.redis.connection.ReactiveRedisConnection.RangeCommand
                            /**
                             * @return the {#link Range}.
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
