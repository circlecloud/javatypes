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
                                interface ThenBuilder {
                                    /**
                                     * @param value the value to be used if the condition evaluates {#literal true}. Can be a {@link Document}, a
                                     *           value that is supported by MongoDB or a value that can be converted to a MongoDB representation but
                                     *           must not be {@literal null}.
                                     * @return the {#link OtherwiseBuilder}
                                     */
                                    // @ts-ignore
                                    then(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.OtherwiseBuilder
                                    /**
                                     * @param fieldReference must not be {#literal null}.
                                     * @return the {#link OtherwiseBuilder}
                                     */
                                    // @ts-ignore
                                    thenValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.OtherwiseBuilder
                                    /**
                                     * @param expression must not be {#literal null}.
                                     * @return the {#link OtherwiseBuilder}
                                     */
                                    // @ts-ignore
                                    thenValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.OtherwiseBuilder
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
