declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toLong} that converts a value to {@literal long}. Shorthand for
                             * {@link Convert#to(String) Convert#to("long")}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/toLong/">https://docs.mongodb.com/manual/reference/operator/aggregation/toLong/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ToLong extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ToLong} using the given value as input.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ToLong}.
                                 */
                                // @ts-ignore
                                public static toLong(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToLong
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
