declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArithmeticOperators {
                            /**
                             * {@link AggregationExpression} for {@code $ceil}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Ceil extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Ceil}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static ceilValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Ceil
                                /**
                                 * Creates new {@link Ceil}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static ceilValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Ceil
                                /**
                                 * Creates new {@link Ceil}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static ceilValueOf(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Ceil
                            }
                        }
                    }
                }
            }
        }
    }
}
