declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $strLenBytes}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class StrLenBytes extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link StrLenBytes}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static stringLengthOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StrLenBytes
                                /**
                                 * Creates new {@link StrLenBytes}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static stringLengthOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.StrLenBytes
                            }
                        }
                    }
                }
            }
        }
    }
}
