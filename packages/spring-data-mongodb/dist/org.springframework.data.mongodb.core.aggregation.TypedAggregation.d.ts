declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * A {@code TypedAggregation} is a special {@link Aggregation} that holds information of the input aggregation type.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         */
                        // @ts-ignore
                        class TypedAggregation<I> extends org.springframework.data.mongodb.core.aggregation.Aggregation {
                            /**
                             * Creates a new {@link TypedAggregation} from the given {@link AggregationOperation}s.
                             * @param inputType must not be {#literal null}.
                             * @param operations must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(inputType: java.lang.Class<I>, ...operations: org.springframework.data.mongodb.core.aggregation.AggregationOperation[])
                            /**
                             * Creates a new {@link TypedAggregation} from the given {@link AggregationOperation}s.
                             * @param inputType must not be {#literal null}.
                             * @param operations must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(inputType: java.lang.Class<I>, operations: java.util.List<org.springframework.data.mongodb.core.aggregation.AggregationOperation> | Array<org.springframework.data.mongodb.core.aggregation.AggregationOperation>)
                            /**
                             * Creates a new {@link TypedAggregation} from the given {@link AggregationOperation}s and the given
                             * {@link AggregationOptions}.
                             * @param inputType must not be {#literal null}.
                             * @param operations must not be {#literal null} or empty.
                             * @param options must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(inputType: java.lang.Class<I>, operations: java.util.List<org.springframework.data.mongodb.core.aggregation.AggregationOperation> | Array<org.springframework.data.mongodb.core.aggregation.AggregationOperation>, options: org.springframework.data.mongodb.core.aggregation.AggregationOptions)
                            /**
                             * Returns the input type for the {@link Aggregation}.
                             * @return the inputType will never be {#literal null}.
                             */
                            // @ts-ignore
                            public getInputType(): java.lang.Class<I>
                            // @ts-ignore
                            public withOptions(options: org.springframework.data.mongodb.core.aggregation.AggregationOptions): org.springframework.data.mongodb.core.aggregation.TypedAggregation<I>
                        }
                    }
                }
            }
        }
    }
}
