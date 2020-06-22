declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * @author Matt Morrissette
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class DateFromPartsOperatorFactory extends java.lang.Object {
                                /**
                                 * Set the {@literal week date year} to the given value which must resolve to a weekday in range {@code 0 - 9999}.
                                 * Can be a simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param isoWeekYear must not be {#literal null}.
                                 * @return new instance of {#link IsoDateFromParts} with {@link Timezone} if set.
                                 * @throws IllegalArgumentException if given {#literal isoWeekYear} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoWeekYear(isoWeekYear: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Set the {@literal week date year} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link IsoDateFromParts} with {@link Timezone} if set.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoWeekYearOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Set the {@literal week date year} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link IsoDateFromParts} with {@link Timezone} if set.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoWeekYearOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Set the {@literal year} to the given value which must resolve to a calendar year. Can be a simple value,
                                 * {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param year must not be {#literal null}.
                                 * @return new instance of {#link DateFromParts} with {@link Timezone} if set.
                                 * @throws IllegalArgumentException if given {#literal year} is {@literal null}
                                 */
                                // @ts-ignore
                                public year(year: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Set the {@literal year} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link DateFromParts} with {@link Timezone} if set.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                public yearOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Set the {@literal year} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link DateFromParts} with {@link Timezone} if set.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                public yearOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Create a new {@link DateFromPartsOperatorFactory} bound to a given {@link Timezone}.<br />
                                 * @param timezone must not be {#literal null}. Use {@link Timezone#none()} instead.
                                 * @return new instance of {#link DateFromPartsOperatorFactory}.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 */
                                // @ts-ignore
                                public withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromPartsOperatorFactory
                            }
                        }
                    }
                }
            }
        }
    }
}
