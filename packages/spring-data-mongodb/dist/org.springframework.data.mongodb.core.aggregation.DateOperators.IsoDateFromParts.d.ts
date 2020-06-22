declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * {@link AggregationExpression} for {@code $dateFromParts} using ISO week date.<br />
                             * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                             * @author Matt Morrissette
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/dateFromParts/">https://docs.mongodb.com/manual/reference/operator/aggregation/dateFromParts/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class IsoDateFromParts extends org.springframework.data.mongodb.core.aggregation.DateOperators.TimezonedDateAggregationExpression implements org.springframework.data.mongodb.core.aggregation.DateOperators.DateParts<org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts> {
                                /**
                                 * Creates new {@link IsoDateFromPartsWithYear}.
                                 * @return new instance of {#link IsoDateFromPartsWithYear}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public static dateFromParts(): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts.IsoDateFromPartsWithYear
                                /**
                                 * Set the {@literal week of year} to the given value which must resolve to a calendar week in range {@code 1 - 53}.
                                 * Can be a simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param isoWeek must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal isoWeek} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoWeek(isoWeek: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Set the {@literal week of year} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoWeekOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Set the {@literal week of year} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoWeekOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Set the {@literal day of week} to the given value which must resolve to a weekday in range {@code 1 - 7}. Can be
                                 * a simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param day must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal isoWeek} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoDayOfWeek(day: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Set the {@literal day of week} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoDayOfWeekOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Set the {@literal day of week} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                public isoDayOfWeekOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                // @ts-ignore
                                public hour(hour: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                // @ts-ignore
                                public minute(minute: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                // @ts-ignore
                                public second(second: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                // @ts-ignore
                                public milliseconds(milliseconds: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                /**
                                 * Optionally set the {@link Timezone} to use. If not specified {@literal UTC} is used.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @param timezone must not be {#literal null}. Consider {@link Timezone#none()} instead.
                                 * @return new instance of {#link IsoDateFromParts}.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 */
                                // @ts-ignore
                                public withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDateFromParts
                                // @ts-ignore
                                getMongoMethod(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
