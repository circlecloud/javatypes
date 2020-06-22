declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            namespace IndexOfCP {
                                // @ts-ignore
                                class SubstringBuilder extends java.lang.Object {
                                    /**
                                     * Creates a new {@link IndexOfCP} given {@literal substring}.
                                     * @param substring must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    public indexOf(substring: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP
                                    /**
                                     * Creates a new {@link IndexOfCP} given {@link AggregationExpression} that resolves to the substring.
                                     * @param expression must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    public indexOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP
                                    /**
                                     * Creates a new {@link IndexOfCP} given {@link Field} that resolves to the substring.
                                     * @param fieldReference must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    public indexOf(fieldReference: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
