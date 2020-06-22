declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            namespace IsoDateFromParts {
                                /**
                                 * @author Christoph Strobl
                                 */
                                // @ts-ignore
                                interface IsoDateFromPartsWithYear {
                                    /**
                                     * Set the {@literal week date year} to the given value which must resolve to a weekday in range {@code 0 - 9999}.
                                     * Can be a simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                     * @param isoWeekYear must not be {#literal null}.
                                     * @return new instance.
                                     * @throws IllegalArgumentException if given {#literal isoWeekYear} is {@literal null}.
                                     */
                                    // @ts-ignore
                                    isoWeekYear(isoWeekYear: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                    /**
                                     * Set the {@literal week date year} to the value resolved by following the given {@link Field field reference}.
                                     * @param fieldReference must not be {#literal null}.
                                     * @return new instance.
                                     * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                     */
                                    // @ts-ignore
                                    isoWeekYearOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                    /**
                                     * Set the {@literal week date year} to the result of the given {@link AggregationExpression expression}.
                                     * @param expression must not be {#literal null}.
                                     * @return new instance.
                                     * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                     */
                                    // @ts-ignore
                                    isoWeekYearOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
