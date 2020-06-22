declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $isArray}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class IsArray extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link IsArray}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static isArray(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.IsArray
                                /**
                                 * Creates new {@link IsArray}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static isArray(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.IsArray
                            }
                        }
                    }
                }
            }
        }
    }
}
