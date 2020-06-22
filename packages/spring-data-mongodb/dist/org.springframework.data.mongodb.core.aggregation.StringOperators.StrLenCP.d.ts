declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $strLenCP}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class StrLenCP extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link StrLenCP}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static stringLengthOfCP(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StrLenCP
                                /**
                                 * Creates new {@link StrLenCP}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static stringLengthOfCP(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.StrLenCP
                            }
                        }
                    }
                }
            }
        }
    }
}
