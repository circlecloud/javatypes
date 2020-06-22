declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArithmeticOperators {
                            /**
                             * {@link AggregationExpression} for {@code $ln}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Ln extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Ln}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static lnValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Ln
                                /**
                                 * Creates new {@link Ln}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static lnValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Ln
                                /**
                                 * Creates new {@link Ln}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static lnValueOf(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Ln
                            }
                        }
                    }
                }
            }
        }
    }
}
