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
                                interface InputBuilder {
                                    /**
                                     * Set the {@literal values} to apply the {@code $filter} to.
                                     * @param array must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    filter(array: java.util.List<any> | Array<any>): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter.AsBuilder
                                    /**
                                     * Set the {@literal field} holding an array to apply the {@code $filter} to.
                                     * @param field must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    filter(field: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter.AsBuilder
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
