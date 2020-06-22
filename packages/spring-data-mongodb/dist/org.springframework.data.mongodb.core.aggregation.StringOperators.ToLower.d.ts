declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toLower}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ToLower extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link ToLower}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static lowerValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.ToLower
                                /**
                                 * Creates new {@link ToLower}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static lowerValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.ToLower
                                /**
                                 * Creates new {@link ToLower}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static lower(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.ToLower
                            }
                        }
                    }
                }
            }
        }
    }
}
