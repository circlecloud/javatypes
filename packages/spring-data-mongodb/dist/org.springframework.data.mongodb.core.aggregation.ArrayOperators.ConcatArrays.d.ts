declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $concatArrays}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ConcatArrays extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link ConcatArrays}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ConcatArrays
                                /**
                                 * Creates new {@link ConcatArrays}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ConcatArrays
                                // @ts-ignore
                                public concat(arrayFieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ConcatArrays
                                // @ts-ignore
                                public concat(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ConcatArrays
                            }
                        }
                    }
                }
            }
        }
    }
}
