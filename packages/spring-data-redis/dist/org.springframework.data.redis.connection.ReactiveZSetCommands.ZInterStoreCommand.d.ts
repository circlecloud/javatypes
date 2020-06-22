declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZINTERSTORE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        class ZInterStoreCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZInterStoreCommand} given a {@link List} of keys.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link ZInterStoreCommand} for {@link Range}.
                             */
                            // @ts-ignore
                            public static sets(keys: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveZSetCommands.ZInterStoreCommand
                            /**
                             * Applies the {@link Collection} of weights. Constructs a new command instance with all previously configured
                             * properties.
                             * @param weights must not be {#literal null}.
                             * @return a new {#link ZInterStoreCommand} with {@literal weights} applied.
                             */
                            // @ts-ignore
                            public applyWeights(weights: java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>): org.springframework.data.redis.connection.ReactiveZSetCommands.ZInterStoreCommand
                            /**
                             * Applies the {@link Weights}. Constructs a new command instance with all previously configured properties.
                             * @param weights must not be {#literal null}.
                             * @return a new {#link ZInterStoreCommand} with {@literal weights} applied.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public applyWeights(weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): org.springframework.data.redis.connection.ReactiveZSetCommands.ZInterStoreCommand
                            /**
                             * Applies a specific {@link Aggregate} function. Constructs a new command instance with all previously configured
                             * properties.
                             * @param aggregateFunction can be {#literal null}.
                             * @return a new {#link ZInterStoreCommand} with {@link Aggregate} applied.
                             */
                            // @ts-ignore
                            public aggregateUsing(aggregateFunction: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): org.springframework.data.redis.connection.ReactiveZSetCommands.ZInterStoreCommand
                            /**
                             * Applies the {@literal key} at which the result is stored. Constructs a new command instance with all previously
                             * configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZInterStoreCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public storeAs(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZInterStoreCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getSourceKeys(): Array<java.nio.ByteBuffer>
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getWeights(): Array<java.lang.Double | number>
                            /**
                             * @return never {#literal null}.ø
                             */
                            // @ts-ignore
                            public getAggregateFunction(): java.util.Optional<org.springframework.data.redis.connection.RedisZSetCommands.Aggregate>
                        }
                    }
                }
            }
        }
    }
}
