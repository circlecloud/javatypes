declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * {@link AggregationExpression} for {@code $dateToString}.
                             * @author Christoph Strobl
                             * @author Matt Morrissette
                             */
                            // @ts-ignore
                            class DateToString extends org.springframework.data.mongodb.core.aggregation.DateOperators.TimezonedDateAggregationExpression {
                                /**
                                 * Creates new {@link FormatBuilder}.
                                 * @param value must not be {#literal null} and resolve to field, expression or object that represents a date.
                                 * @return new instance of {#link FormatBuilder}.
                                 * @throws IllegalArgumentException if given value is {#literal null}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public static dateToString(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString.FormatBuilder
                                /**
                                 * Creates new {@link FormatBuilder} allowing to define the date format to apply.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static dateOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString.FormatBuilder
                                /**
                                 * Creates new {@link FormatBuilder} allowing to define the date format to apply.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static dateOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString.FormatBuilder
                                /**
                                 * Optionally set the {@link Timezone} to use. If not specified {@literal UTC} is used.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @param timezone must not be {#literal null}. Consider {@link Timezone#none()} instead.
                                 * @return new instance of {#link Millisecond}.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString
                                /**
                                 * Optionally specify the value to return when the date is {@literal null} or missing. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link DateToString}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public onNullReturn(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString
                                /**
                                 * Optionally specify the field holding the value to return when the date is {@literal null} or missing. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link DateToString}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public onNullReturnValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString
                                /**
                                 * Optionally specify the expression to evaluate and return when the date is {@literal null} or missing. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link DateToString}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public onNullReturnValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString
                                // @ts-ignore
                                getMongoMethod(): string
                                // @ts-ignore
                                append(key: java.lang.String | string, value: java.lang.Object | any): java.util.Map<java.lang.String | string, java.lang.Object | any>
                            }
                        }
                    }
                }
            }
        }
    }
}
