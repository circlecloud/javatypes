declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toString} that converts a value to {@literal string}. Shorthand for
                             * {@link Convert#to(String) Convert#to("string")}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/toString/">https://docs.mongodb.com/manual/reference/operator/aggregation/toString/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ToString extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ToString} using the given value as input.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ToString}.
                                 */
                                // @ts-ignore
                                public static toString(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToString
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
