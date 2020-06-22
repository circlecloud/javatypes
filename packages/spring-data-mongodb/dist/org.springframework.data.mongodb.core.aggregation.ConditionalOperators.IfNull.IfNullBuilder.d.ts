declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConditionalOperators {
                            namespace IfNull {
                                /**
                                 * @author Mark Paluch
                                 */
                                // @ts-ignore
                                interface IfNullBuilder {
                                    /**
                                     * @param fieldReference the field to check for a {#literal null} value, field reference must not be
                                     *           {@literal null}.
                                     * @return the {#link ThenBuilder}
                                     */
                                    // @ts-ignore
                                    ifNull(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull.ThenBuilder
                                    /**
                                     * @param expression the expression to check for a {#literal null} value, field name must not be {@literal null}
                                     *           or empty.
                                     * @return the {#link ThenBuilder}
                                     */
                                    // @ts-ignore
                                    ifNull(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull.ThenBuilder
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
