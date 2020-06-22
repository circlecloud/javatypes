declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toInt} that converts a value to {@literal integer}. Shorthand for
                             * {@link Convert#to(String) Convert#to("int")}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/">https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ToInt extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ToInt} using the given value as input.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ToInt}.
                                 */
                                // @ts-ignore
                                public static toInt(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToInt
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
