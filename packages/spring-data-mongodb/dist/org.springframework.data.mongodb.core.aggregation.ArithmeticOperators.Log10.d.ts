declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArithmeticOperators {
                            /**
                             * {@link AggregationExpression} for {@code $log10}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Log10 extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Log10}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static log10ValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Log10
                                /**
                                 * Creates new {@link Log10}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static log10ValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Log10
                                /**
                                 * Creates new {@link Log10}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static log10ValueOf(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Log10
                            }
                        }
                    }
                }
            }
        }
    }
}
