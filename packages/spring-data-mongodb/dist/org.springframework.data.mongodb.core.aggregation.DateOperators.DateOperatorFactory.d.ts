declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * @author Christoph Strobl
                             * @author Matt Morrissette
                             */
                            // @ts-ignore
                            class DateOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link DateOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link DateOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link DateOperatorFactory} for given {@code value} that resolves to a Date.
                                 * <p/>
                                 * <ul>
                                 * <li>{@link java.util.Date}</li>
                                 * <li>{@link java.util.Calendar}</li>
                                 * <li>{@link java.time.Instant}</li>
                                 * <li>{@link java.time.ZonedDateTime}</li>
                                 * <li>{@link java.lang.Long}</li>
                                 * </ul>
                                 * @param value must not be {#literal null}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                constructor(value: java.lang.Object | any)
                                /**
                                 * Create a new {@link DateOperatorFactory} bound to a given {@link Timezone}.<br />
                                 * <strong>NOTE:</strong> Requires Mongo 3.6 or later.
                                 * @param timezone must not be {#literal null}. Use {@link Timezone#none()} instead.
                                 * @return new instance of {#link DateOperatorFactory}.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.DateOperatorFactory
                                /**
                                 * Creates new {@link AggregationExpression} that returns the day of the year for a date as a number between 1 and
                                 * 366.
                                 * @return 
                                 */
                                // @ts-ignore
                                public dayOfYear(): org.springframework.data.mongodb.core.aggregation.DateOperators.DayOfYear
                                /**
                                 * Creates new {@link AggregationExpression} that returns the day of the month for a date as a number between 1 and
                                 * 31.
                                 * @return 
                                 */
                                // @ts-ignore
                                public dayOfMonth(): org.springframework.data.mongodb.core.aggregation.DateOperators.DayOfMonth
                                /**
                                 * Creates new {@link AggregationExpression} that returns the day of the week for a date as a number between 1
                                 * (Sunday) and 7 (Saturday).
                                 * @return 
                                 */
                                // @ts-ignore
                                public dayOfWeek(): org.springframework.data.mongodb.core.aggregation.DateOperators.DayOfWeek
                                /**
                                 * Creates new {@link AggregationExpression} that returns the year portion of a date.
                                 * @return 
                                 */
                                // @ts-ignore
                                public year(): org.springframework.data.mongodb.core.aggregation.DateOperators.Year
                                /**
                                 * Creates new {@link AggregationExpression} that returns the month of a date as a number between 1 and 12.
                                 * @return 
                                 */
                                // @ts-ignore
                                public month(): org.springframework.data.mongodb.core.aggregation.DateOperators.Month
                                /**
                                 * Creates new {@link AggregationExpression} that returns the week of the year for a date as a number between 0 and
                                 * 53.
                                 * @return 
                                 */
                                // @ts-ignore
                                public week(): org.springframework.data.mongodb.core.aggregation.DateOperators.Week
                                /**
                                 * Creates new {@link AggregationExpression} that returns the hour portion of a date as a number between 0 and 23.
                                 * @return 
                                 */
                                // @ts-ignore
                                public hour(): org.springframework.data.mongodb.core.aggregation.DateOperators.Hour
                                /**
                                 * Creates new {@link AggregationExpression} that returns the minute portion of a date as a number between 0 and 59.
                                 * @return 
                                 */
                                // @ts-ignore
                                public minute(): org.springframework.data.mongodb.core.aggregation.DateOperators.Minute
                                /**
                                 * Creates new {@link AggregationExpression} that returns the second portion of a date as a number between 0 and 59,
                                 * but can be 60 to account for leap seconds.
                                 * @return 
                                 */
                                // @ts-ignore
                                public second(): org.springframework.data.mongodb.core.aggregation.DateOperators.Second
                                /**
                                 * Creates new {@link AggregationExpression} that returns the millisecond portion of a date as an integer between 0
                                 * and 999.
                                 * @return 
                                 */
                                // @ts-ignore
                                public millisecond(): org.springframework.data.mongodb.core.aggregation.DateOperators.Millisecond
                                /**
                                 * Creates new {@link AggregationExpression} that converts a date object to a string according to a user-specified
                                 * {@literal format}.
                                 * @param format must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public toString(format: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString
                                /**
                                 * Creates new {@link AggregationExpression} that converts a date object to a string according to the server default
                                 * format.
                                 * @return new instance of {#link DateToString}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public toStringWithDefaultFormat(): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString
                                /**
                                 * Creates new {@link AggregationExpression} that returns the weekday number in ISO 8601-2018 format, ranging from 1
                                 * (for Monday) to 7 (for Sunday).
                                 * @return 
                                 */
                                // @ts-ignore
                                public isoDayOfWeek(): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoDayOfWeek
                                /**
                                 * Creates new {@link AggregationExpression} that returns the week number in ISO 8601-2018 format, ranging from 1 to
                                 * 53.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isoWeek(): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoWeek
                                /**
                                 * Creates new {@link AggregationExpression} that returns the year number in ISO 8601-2018 format.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isoWeekYear(): org.springframework.data.mongodb.core.aggregation.DateOperators.IsoWeekYear
                                /**
                                 * Creates new {@link AggregationExpression} that returns a document containing the constituent parts of the date as
                                 * individual properties.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @return new instance of {#link DateToParts}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public toParts(): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToParts
                                /**
                                 * Creates new {@link AggregationExpression} that converts a date/time string to a date object.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @return new instance of {#link DateFromString}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public fromString(): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromString
                            }
                        }
                    }
                }
            }
        }
    }
}
