declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConditionalOperators {
                            namespace Cond {
                                /**
                                 * @author Mark Paluch
                                 */
                                // @ts-ignore
                                interface OtherwiseBuilder {
                                    /**
                                     * @param value the value to be used if the condition evaluates {#literal false}. Can be a {@link Document}, a
                                     *           value that is supported by MongoDB or a value that can be converted to a MongoDB representation but
                                     *           must not be {@literal null}.
                                     * @return the {#link Cond}
                                     */
                                    // @ts-ignore
                                    otherwise(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond
                                    /**
                                     * @param fieldReference must not be {#literal null}.
                                     * @return the {#link Cond}
                                     */
                                    // @ts-ignore
                                    otherwiseValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond
                                    /**
                                     * @param expression must not be {#literal null}.
                                     * @return the {#link Cond}
                                     */
                                    // @ts-ignore
                                    otherwiseValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
