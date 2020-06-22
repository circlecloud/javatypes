declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArithmeticOperators {
                            /**
                             * {@link AggregationExpression} for {@code $subtract}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Subtract extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Subtract}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                                /**
                                 * Creates new {@link Subtract}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                                /**
                                 * Creates new {@link Subtract}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                                // @ts-ignore
                                public subtract(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                                // @ts-ignore
                                public subtract(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                                // @ts-ignore
                                public subtract(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                            }
                        }
                    }
                }
            }
        }
    }
}
