declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toDate} that converts a value to {@literal date}. Shorthand for
                             * {@link Convert#to(String) Convert#to("date")}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/toDate/">https://docs.mongodb.com/manual/reference/operator/aggregation/toDate/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ToDate extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ToDate} using the given value as input.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ToDate}.
                                 */
                                // @ts-ignore
                                public static toDate(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToDate
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
