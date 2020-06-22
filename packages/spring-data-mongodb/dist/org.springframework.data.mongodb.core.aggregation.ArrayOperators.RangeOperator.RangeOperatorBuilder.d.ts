declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            namespace RangeOperator {
                                // @ts-ignore
                                class RangeOperatorBuilder extends java.lang.Object {
                                    /**
                                     * Creates new {@link RangeOperator}.
                                     * @param index
                                     * @return 
                                     */
                                    // @ts-ignore
                                    public to(index: number /*long*/): org.springframework.data.mongodb.core.aggregation.ArrayOperators.RangeOperator
                                    /**
                                     * Creates new {@link RangeOperator}.
                                     * @param expression must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    public to(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.RangeOperator
                                    /**
                                     * Creates new {@link RangeOperator}.
                                     * @param fieldReference must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    public to(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.RangeOperator
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
