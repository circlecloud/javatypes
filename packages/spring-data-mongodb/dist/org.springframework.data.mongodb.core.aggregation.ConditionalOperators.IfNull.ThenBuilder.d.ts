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
                                interface ThenBuilder {
                                    /**
                                     * @param value the value to be used if the {#code $ifNull} condition evaluates {@literal true}. Can be a
                                     *           {@link Document}, a value that is supported by MongoDB or a value that can be converted to a MongoDB
                                     *           representation but must not be {@literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    then(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull
                                    /**
                                     * @param fieldReference the field holding the replacement value, must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    thenValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull
                                    /**
                                     * @param expression the expression yielding to the replacement value, must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    thenValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
