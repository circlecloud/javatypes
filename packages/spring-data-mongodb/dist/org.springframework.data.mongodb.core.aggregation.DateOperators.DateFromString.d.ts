declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * {@link AggregationExpression} for {@code $dateFromString}.<br />
                             * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                             * @author Matt Morrissette
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/dateFromString/">https://docs.mongodb.com/manual/reference/operator/aggregation/dateFromString/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class DateFromString extends org.springframework.data.mongodb.core.aggregation.DateOperators.TimezonedDateAggregationExpression {
                                /**
                                 * Creates new {@link DateFromString}.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link DateFromString}.
                                 * @throws IllegalArgumentException if given {#literal value} is {@literal null}.
                                 */
                                // @ts-ignore
                                public static fromString(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromString
                                /**
                                 * Creates new {@link DateFromString}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link DateFromString}.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                public static fromStringOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromString
                                /**
                                 * Creates new {@link DateFromString}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link DateFromString}.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                public static fromStringOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromString
                                /**
                                 * Optionally set the {@link Timezone} to use. If not specified {@literal UTC} is used.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @param timezone must not be {#literal null}. Consider {@link Timezone#none()} instead.
                                 * @return new instance of {#link DateFromString}.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 */
                                // @ts-ignore
                                public withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromString
                                /**
                                 * Optionally set the date format to use. If not specified {@code %Y-%m-%dT%H:%M:%S.%LZ} is used.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param format must not be {#literal null}.
                                 * @return new instance of {#link DateFromString}.
                                 * @throws IllegalArgumentException if given {#literal format} is {@literal null}.
                                 */
                                // @ts-ignore
                                public withFormat(format: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromString
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
