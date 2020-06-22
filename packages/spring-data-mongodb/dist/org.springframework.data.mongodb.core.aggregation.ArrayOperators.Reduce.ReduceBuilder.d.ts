declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            namespace Reduce {
                                /**
                                 * @author Christoph Strobl
                                 */
                                // @ts-ignore
                                interface ReduceBuilder {
                                    /**
                                     * Define the {@link AggregationExpression} to apply to each element in the input array in left-to-right order.
                                     * <br />
                                     * <b>NOTE:</b> During evaluation of the in expression the variable references {@link Variable#THIS} and
                                     * {@link Variable#VALUE} are available.
                                     * @param expression must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    reduce(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce
                                    /**
                                     * Define the {@link PropertyExpression}s to apply to each element in the input array in left-to-right order.
                                     * <br />
                                     * <b>NOTE:</b> During evaluation of the in expression the variable references {@link Variable#THIS} and
                                     * {@link Variable#VALUE} are available.
                                     * @param expressions must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    reduce(...expressions: org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.PropertyExpression[]): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
