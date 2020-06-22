declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZUNIONSTORE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        class ZUnionStoreCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZUnionStoreCommand} given a {@link List} of keys.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link ZUnionStoreCommand} for {@link Range}.
                             */
                            // @ts-ignore
                            public static sets(keys: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveZSetCommands.ZUnionStoreCommand
                            /**
                             * Applies the {@link List} of weights. Constructs a new command instance with all previously configured properties.
                             * @param weights must not be {#literal null}.
                             * @return a new {#link ZUnionStoreCommand} with {@literal weights} applied.
                             */
                            // @ts-ignore
                            public applyWeights(weights: java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>): org.springframework.data.redis.connection.ReactiveZSetCommands.ZUnionStoreCommand
                            /**
                             * Applies the {@link Weights}. Constructs a new command instance with all previously configured properties.
                             * @param weights must not be {#literal null}.
                             * @return a new {#link ZUnionStoreCommand} with {@literal weights} applied.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public applyWeights(weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): org.springframework.data.redis.connection.ReactiveZSetCommands.ZUnionStoreCommand
                            /**
                             * Applies a specific {@link Aggregate} function. Constructs a new command instance with all previously configured
                             * properties.
                             * @param aggregateFunction can be {#literal null}.
                             * @return a new {#link ZUnionStoreCommand} with {@link Aggregate} applied.
                             */
                            // @ts-ignore
                            public aggregateUsing(aggregateFunction: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): org.springframework.data.redis.connection.ReactiveZSetCommands.ZUnionStoreCommand
                            /**
                             * Applies the {@literal key} at which the result is stored. Constructs a new command instance with all previously
                             * configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZUnionStoreCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public storeAs(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZUnionStoreCommand
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
                             * @return never {#literal null}.
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
