declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $indexOfArray}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class IndexOfArray extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Start creating new {@link IndexOfArray}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.IndexOfArray.IndexOfArrayBuilder
                                /**
                                 * Start creating new {@link IndexOfArray}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.IndexOfArray.IndexOfArrayBuilder
                                // @ts-ignore
                                public within(range: object): org.springframework.data.mongodb.core.aggregation.ArrayOperators.IndexOfArray
                            }
                        }
                    }
                }
            }
        }
    }
}
