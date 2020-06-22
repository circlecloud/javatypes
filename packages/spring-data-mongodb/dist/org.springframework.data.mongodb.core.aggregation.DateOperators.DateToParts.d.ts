declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * {@link AggregationExpression} for {@code $dateToParts}.<br />
                             * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                             * @author Matt Morrissette
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/dateToParts/">https://docs.mongodb.com/manual/reference/operator/aggregation/dateToParts/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class DateToParts extends org.springframework.data.mongodb.core.aggregation.DateOperators.TimezonedDateAggregationExpression {
                                /**
                                 * Creates new {@link DateToParts}.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link DateToParts}.
                                 * @throws IllegalArgumentException if given {#literal value} is {@literal null}.
                                 */
                                // @ts-ignore
                                public static dateToParts(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToParts
                                /**
                                 * Creates new {@link DateToParts}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link DateToParts}.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                public static datePartsOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToParts
                                /**
                                 * Creates new {@link DateToParts}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link DateToParts}.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                public static datePartsOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToParts
                                /**
                                 * Use ISO week date fields in the resulting document.
                                 * @return new instance of {#link DateToParts}.
                                 */
                                // @ts-ignore
                                public iso8601(): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToParts
                                /**
                                 * Optionally set the {@link Timezone} to use. If not specified {@literal UTC} is used.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @param timezone must not be {#literal null}. Consider {@link Timezone#none()} instead.
                                 * @return new instance of {#link DateFromParts}.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 */
                                // @ts-ignore
                                public withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToParts
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
