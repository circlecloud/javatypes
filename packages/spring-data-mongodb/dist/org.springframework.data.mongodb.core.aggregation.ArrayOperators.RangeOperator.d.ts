declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $range}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class RangeOperator extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Start creating new {@link RangeOperator}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static rangeStartingAt(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.RangeOperator.RangeOperatorBuilder
                                /**
                                 * Start creating new {@link RangeOperator}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static rangeStartingAt(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.RangeOperator.RangeOperatorBuilder
                                /**
                                 * Start creating new {@link RangeOperator}.
                                 * @param value
                                 * @return 
                                 */
                                // @ts-ignore
                                public static rangeStartingAt(value: number /*long*/): org.springframework.data.mongodb.core.aggregation.ArrayOperators.RangeOperator.RangeOperatorBuilder
                                // @ts-ignore
                                public withStepSize(stepSize: number /*long*/): org.springframework.data.mongodb.core.aggregation.ArrayOperators.RangeOperator
                            }
                        }
                    }
                }
            }
        }
    }
}
