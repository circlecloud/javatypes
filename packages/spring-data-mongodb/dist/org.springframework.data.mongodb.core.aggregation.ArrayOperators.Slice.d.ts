declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $slice}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Slice extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Slice}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static sliceArrayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Slice
                                /**
                                 * Creates new {@link Slice}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static sliceArrayOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Slice
                                // @ts-ignore
                                public itemCount(nrElements: number /*int*/): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Slice
                                // @ts-ignore
                                public offset(position: number /*int*/): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Slice.SliceElementsBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
