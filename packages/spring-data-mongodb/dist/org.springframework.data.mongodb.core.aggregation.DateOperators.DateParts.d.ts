declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            interface DateParts<T extends org.springframework.data.mongodb.core.aggregation.DateOperators.DateParts<T>> {
                                /**
                                 * Set the {@literal hour} to the given value which must resolve to a value in range of {@code 0 - 23}. Can be a
                                 * simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param hour must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal hour} is {@literal null}
                                 */
                                // @ts-ignore
                                hour(hour: java.lang.Object | any): T
                                /**
                                 * Set the {@literal hour} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                hourOf(fieldReference: java.lang.String | string): T
                                /**
                                 * Set the {@literal hour} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                hourOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): T
                                /**
                                 * Set the {@literal minute} to the given value which must resolve to a value in range {@code 0 - 59}. Can be a
                                 * simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param minute must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal minute} is {@literal null}
                                 */
                                // @ts-ignore
                                minute(minute: java.lang.Object | any): T
                                /**
                                 * Set the {@literal minute} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                minuteOf(fieldReference: java.lang.String | string): T
                                /**
                                 * Set the {@literal minute} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                minuteOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): T
                                /**
                                 * Set the {@literal second} to the given value which must resolve to a value in range {@code 0 - 59}. Can be a
                                 * simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param second must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal second} is {@literal null}
                                 */
                                // @ts-ignore
                                second(second: java.lang.Object | any): T
                                /**
                                 * Set the {@literal second} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                secondOf(fieldReference: java.lang.String | string): T
                                /**
                                 * Set the {@literal second} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                secondOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): T
                                /**
                                 * Set the {@literal milliseconds} to the given value which must resolve to a value in range {@code 0 - 999}. Can be
                                 * a simple value, {@link Field field reference} or {@link AggregationExpression expression}.
                                 * @param milliseconds must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal milliseconds} is {@literal null}
                                 */
                                // @ts-ignore
                                milliseconds(milliseconds: java.lang.Object | any): T
                                /**
                                 * Set the {@literal milliseconds} to the value resolved by following the given {@link Field field reference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal fieldReference} is {@literal null}.
                                 */
                                // @ts-ignore
                                millisecondsOf(fieldReference: java.lang.String | string): T
                                /**
                                 * Set the {@literal milliseconds} to the result of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal expression} is {@literal null}.
                                 */
                                // @ts-ignore
                                millisecondsOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): T
                            }
                        }
                    }
                }
            }
        }
    }
}
