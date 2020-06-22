declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $concat}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Concat extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Concat}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                                /**
                                 * Creates new {@link Concat}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                                /**
                                 * Creates new {@link Concat}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static stringValue(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                                // @ts-ignore
                                public concatValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                                // @ts-ignore
                                public concatValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                                // @ts-ignore
                                public concat(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                            }
                        }
                    }
                }
            }
        }
    }
}
