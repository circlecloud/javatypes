declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $reverseArray}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ReverseArray extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link ReverseArray} given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static reverseArrayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ReverseArray
                                /**
                                 * Creates new {@link ReverseArray} given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static reverseArrayOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ReverseArray
                            }
                        }
                    }
                }
            }
        }
    }
}
