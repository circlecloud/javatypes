declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace AccumulatorOperators {
                            /**
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class AccumulatorOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link AccumulatorOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link AccumulatorOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated numeric value expression and calculates and
                                 * returns the sum.
                                 * @return 
                                 */
                                // @ts-ignore
                                public sum(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Sum
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated numeric value expression and returns the
                                 * average value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public avg(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Avg
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated numeric value expression and returns the
                                 * maximum value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public max(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Max
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated numeric value expression and returns the
                                 * minimum value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public min(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Min
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated numeric value expression and calculates the
                                 * population standard deviation of the input values.
                                 * @return 
                                 */
                                // @ts-ignore
                                public stdDevPop(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.StdDevPop
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated numeric value expression and calculates the
                                 * sample standard deviation of the input values.
                                 * @return 
                                 */
                                // @ts-ignore
                                public stdDevSamp(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.StdDevSamp
                            }
                        }
                    }
                }
            }
        }
    }
}
