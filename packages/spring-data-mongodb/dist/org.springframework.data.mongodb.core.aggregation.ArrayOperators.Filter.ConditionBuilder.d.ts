declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            namespace Filter {
                                /**
                                 * @author Christoph Strobl
                                 */
                                // @ts-ignore
                                interface ConditionBuilder {
                                    /**
                                     * Set the {@link AggregationExpression} that determines whether to include the element in the resulting array.
                                     * @param expression must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    by(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter
                                    /**
                                     * Set the {@literal expression} that determines whether to include the element in the resulting array.
                                     * @param expression must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    by(expression: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter
                                    /**
                                     * Set the {@literal expression} that determines whether to include the element in the resulting array.
                                     * @param expression must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    by(expression: Document): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
