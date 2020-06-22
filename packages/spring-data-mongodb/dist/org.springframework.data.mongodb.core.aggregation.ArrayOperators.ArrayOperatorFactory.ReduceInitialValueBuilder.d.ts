declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            namespace ArrayOperatorFactory {
                                /**
                                 * @author Christoph Strobl
                                 */
                                // @ts-ignore
                                interface ReduceInitialValueBuilder {
                                    /**
                                     * Define the initial cumulative value set before in is applied to the first element of the input array.
                                     * @param initialValue must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    startingWith(initialValue: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
