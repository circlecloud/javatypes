declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisZSetCommands {
                        /**
                         * Value object encapsulating a multiplication factor for each input sorted set. This means that the score of every
                         * element in every input sorted set is multiplied by this factor before being passed to the aggregation function.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class Weights extends java.lang.Object {
                            /**
                             * Create new {@link Weights} given {@code weights} as {@code int}.
                             * @param weights must not be {#literal null}.
                             * @return the {#link Weights} for {@code weights}.
                             */
                            // @ts-ignore
                            public static of(...weights: number /*int*/[]): org.springframework.data.redis.connection.RedisZSetCommands.Weights
                            /**
                             * Create new {@link Weights} given {@code weights} as {@code double}.
                             * @param weights must not be {#literal null}.
                             * @return the {#link Weights} for {@code weights}.
                             */
                            // @ts-ignore
                            public static of(...weights: number /*double*/[]): org.springframework.data.redis.connection.RedisZSetCommands.Weights
                            /**
                             * Creates equal {@link Weights} for a number of input sets {@code count} with a weight of one.
                             * @param count number of input sets. Must be greater or equal to zero.
                             * @return equal {#link Weights} for a number of input sets with a weight of one.
                             */
                            // @ts-ignore
                            public static fromSetCount(count: number /*int*/): org.springframework.data.redis.connection.RedisZSetCommands.Weights
                            /**
                             * Creates a new {@link Weights} object that contains all weights multiplied by {@code multiplier}
                             * @param multiplier multiplier used to multiply each weight with.
                             * @return equal {#link Weights} for a number of input sets with a weight of one.
                             */
                            // @ts-ignore
                            public multiply(multiplier: number /*int*/): org.springframework.data.redis.connection.RedisZSetCommands.Weights
                            /**
                             * Creates a new {@link Weights} object that contains all weights multiplied by {@code multiplier}
                             * @param multiplier multiplier used to multiply each weight with.
                             * @return equal {#link Weights} for a number of input sets with a weight of one.
                             */
                            // @ts-ignore
                            public multiply(multiplier: number /*double*/): org.springframework.data.redis.connection.RedisZSetCommands.Weights
                            /**
                             * Creates a new {@link Weights} object that contains all weights with {@link Function} applied.
                             * @param operator operator function.
                             * @return the new {#link Weights} with {@link DoubleUnaryOperator} applied.
                             */
                            // @ts-ignore
                            public apply(operator: java.util.function$.Function<java.lang.Double | number, java.lang.Double | number>): org.springframework.data.redis.connection.RedisZSetCommands.Weights
                            /**
                             * Retrieve the weight at {@code index}.
                             * @param index the weight index.
                             * @return the weight at {#code index}.
                             * @throws IndexOutOfBoundsException if the index is out of range
                             */
                            // @ts-ignore
                            public getWeight(index: number /*int*/): number /*double*/
                            /**
                             * @return number of weights.
                             */
                            // @ts-ignore
                            public size(): number /*int*/
                            /**
                             * @return an array containing all of the weights in this list in proper sequence (from first to last element).
                             */
                            // @ts-ignore
                            public toArray(): number /*double*/[]
                            /**
                             * @return a {#link List} containing all of the weights in this list in proper sequence (from first to last
                             *          element).
                             */
                            // @ts-ignore
                            public toList(): Array<java.lang.Double | number>
                        }
                    }
                }
            }
        }
    }
}
