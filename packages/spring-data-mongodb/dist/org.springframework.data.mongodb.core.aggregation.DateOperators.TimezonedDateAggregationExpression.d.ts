declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * {@link AggregationExpression} capable of setting a given {@link Timezone}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            abstract class TimezonedDateAggregationExpression extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                constructor(value: java.lang.Object | any)
                                /**
                                 * Append the {@code timezone} to a given source. The source itself can be a {@link Map} of already set properties
                                 * or a single value. In case of single value {@code source} the value will be added as {@code date} property.
                                 * @param source must not be {#literal null}.
                                 * @param timezone must not be {#literal null} use {@link Timezone#none()} instead.
                                 * @return 
                                 */
                                // @ts-ignore
                                static appendTimezone(source: java.lang.Object | any, timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): java.util.Map<java.lang.String | string, java.lang.Object | any>
                                /**
                                 * Optionally set the {@link Timezone} to use. If not specified {@literal UTC} is used.<br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @param timezone must not be {#literal null}. Consider {@link Timezone#none()} instead.
                                 * @return new instance.
                                 * @throws IllegalArgumentException if given {#literal timezone} is {@literal null}.
                                 */
                                // @ts-ignore
                                abstract withTimezone(timezone: org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone): org.springframework.data.mongodb.core.aggregation.DateOperators.TimezonedDateAggregationExpression
                                // @ts-ignore
                                hasTimezone(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
