declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * {@link AggregationExpression} for {@code $dateFromParts}.<br />
                             * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                             * @author Matt Morrissette
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/dateFromParts/">https://docs.mongodb.com/manual/reference/operator/aggregation/dateFromParts/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class DateFromParts extends org.springframework.data.mongodb.core.aggregation.DateOperators.TimezonedDateAggregationExpression implements org.springframework.data.mongodb.core.aggregation.DateOperators.DateParts<org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts> {
                                /**
                                 * Creates new {@link DateFromPartsWithYear}.
                                 * @return new instance of {#link DateFromPartsWithYear}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public static dateFromParts(): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts.DateFromPartsWithYear
                                /**
                                 * Set the {@literal month} to the given value which must resolve to a calendar month in range {@code 1 - 12}. Can
                                 * be a simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param month must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal month} is {@literal null}.
                                 */
                                // @ts-ignore
                                public month(month: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Set the {@literal month} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                public monthOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Set the {@literal month} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                public monthOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Set the {@literal day} to the given value which must resolve to a calendar day in range {@code 1 - 31}. Can be a
                                 * simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param day must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal day} is {@literal null}.
                                 */
                                // @ts-ignore
                                public day(day: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Set the {@literal day} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                public dayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Set the {@literal day} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                public dayOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                // @ts-ignore
                                public hour(hour: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                // @ts-ignore
                                public minute(minute: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                // @ts-ignore
                                public second(second: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                // @ts-ignore
                                public milliseconds(milliseconds: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
                                /**
                                 * Optionally set the {@link Timezone} to use. If not specified {@literal UTC} is used.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @param timezone must not be {#literal null}. Consider {@link Timezone#none()} instead.
                                 * @return new instance of {#link DateFromParts}.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 */
                                // @ts-ignore
                                public withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromParts
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
