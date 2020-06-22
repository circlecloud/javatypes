declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            namespace DateFromParts {
                                /**
                                 * @author Christoph Strobl
                                 */
                                // @ts-ignore
                                interface DateFromPartsWithYear {
                                    /**
                                     * Set the {@literal year} to the given value which must resolve to a calendar year. Can be a simple value,
                                     * {@link Field field reference} or {@link AggregationExpression expression}.
                                     * @param year must not be {#literal null}.
                                     * @return new instance of {#link DateFromParts}.
                                     * @throws IllegalArgumentException if given {#literal year} is {@literal null}
                                     */
                                    // @ts-ignore
                                    year(year: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                    /**
                                     * Set the {@literal year} to the value resolved by following the given {@link Field field reference}.
                                     * @param fieldReference must not be {#literal null}.
                                     * @return new instance of {#link DateFromParts}.
                                     * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                     */
                                    // @ts-ignore
                                    yearOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                    /**
                                     * Set the {@literal year} to the result of the given {@link AggregationExpression expression}.
                                     * @param expression must not be {#literal null}.
                                     * @return new instance of {#link DateFromParts}.
                                     * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                     */
                                    // @ts-ignore
                                    yearOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
