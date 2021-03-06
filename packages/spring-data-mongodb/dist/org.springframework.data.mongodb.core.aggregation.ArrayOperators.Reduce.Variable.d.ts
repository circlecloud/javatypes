declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            namespace Reduce {
                                // @ts-ignore
                                class Variable extends java.lang.Enum<org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.Variable> implements org.springframework.data.mongodb.core.aggregation.Field {
                                    // @ts-ignore
                                    public static readonly THIS: org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.Variable
                                    // @ts-ignore
                                    public static readonly VALUE: org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.Variable
                                    // @ts-ignore
                                    public static values(): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.Variable[]
                                    // @ts-ignore
                                    public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.Variable
                                    /**
                                     * Create a {@link Field} reference to a given {@literal property} prefixed with the {@link Variable} identifier.
                                     * eg. {@code $$value.product}
                                     * @param property must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    public referringTo(property: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.Field
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
