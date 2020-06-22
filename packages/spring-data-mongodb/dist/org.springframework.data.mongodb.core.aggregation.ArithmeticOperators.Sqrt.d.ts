declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArithmeticOperators {
                            /**
                             * {@link AggregationExpression} for {@code $sqrt}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Sqrt extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Sqrt}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static sqrtOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Sqrt
                                /**
                                 * Creates new {@link Sqrt}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static sqrtOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Sqrt
                                /**
                                 * Creates new {@link Sqrt}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static sqrtOf(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Sqrt
                            }
                        }
                    }
                }
            }
        }
    }
}
