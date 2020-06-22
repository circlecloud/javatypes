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
                                interface WhenBuilder {
                                    /**
                                     * @param booleanExpression expression that yields in a boolean result, must not be {#literal null}.
                                     * @return the {#link ThenBuilder}
                                     */
                                    // @ts-ignore
                                    when(booleanExpression: Document): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.ThenBuilder
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
