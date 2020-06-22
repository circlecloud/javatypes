declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $size}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Size extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Size}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static lengthOfArray(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Size
                                /**
                                 * Creates new {@link Size}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static lengthOfArray(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Size
                            }
                        }
                    }
                }
            }
        }
    }
}
