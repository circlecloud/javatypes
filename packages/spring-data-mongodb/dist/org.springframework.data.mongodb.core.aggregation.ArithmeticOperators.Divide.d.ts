declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArithmeticOperators {
                            /**
                             * {@link AggregationExpression} for {@code $divide}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Divide extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Divide}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                                /**
                                 * Creates new {@link Divide}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                                /**
                                 * Creates new {@link Divide}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                                // @ts-ignore
                                public divideBy(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                                // @ts-ignore
                                public divideBy(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                                // @ts-ignore
                                public divideBy(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                            }
                        }
                    }
                }
            }
        }
    }
}
