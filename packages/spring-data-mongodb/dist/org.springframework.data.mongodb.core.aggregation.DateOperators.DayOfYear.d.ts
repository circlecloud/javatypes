declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * {@link AggregationExpression} for {@code $dayOfYear}.
                             * @author Christoph Strobl
                             * @author Matt Morrissette
                             */
                            // @ts-ignore
                            class DayOfYear extends org.springframework.data.mongodb.core.aggregation.DateOperators.TimezonedDateAggregationExpression {
                                /**
                                 * Creates new {@link DayOfYear}.
                                 * @param value must not be {#literal null} and resolve to field, expression or object that represents a date.
                                 * @return new instance of {#link DayOfYear}.
                                 * @throws IllegalArgumentException if given value is {#literal null}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public static dayOfYear(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DayOfYear
                                /**
                                 * Creates new {@link DayOfYear}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static dayOfYear(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DayOfYear
                                /**
                                 * Creates new {@link DayOfYear}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static dayOfYear(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DayOfYear
                                /**
                                 * Optionally set the {@link Timezone} to use. If not specified {@literal UTC} is used.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @param timezone must not be {#literal null}. Consider {@link Timezone#none()} instead.
                                 * @return new instance of {#link DayOfYear}.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.DayOfYear
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
