declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toDouble} that converts a value to {@literal double}. Shorthand for
                             * {@link Convert#to(String) Convert#to("double")}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/toDouble/">https://docs.mongodb.com/manual/reference/operator/aggregation/toDouble/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ToDouble extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ToDouble} using the given value as input.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ToDouble}.
                                 */
                                // @ts-ignore
                                public static toDouble(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToDouble
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
