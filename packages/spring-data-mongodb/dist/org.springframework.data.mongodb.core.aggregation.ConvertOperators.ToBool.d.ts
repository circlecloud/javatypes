declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toBool} that converts a value to {@literal boolean}. Shorthand for
                             * {@link Convert#to(String) Convert#to("bool")}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/toBool/">https://docs.mongodb.com/manual/reference/operator/aggregation/toBool/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ToBool extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ToBool} using the given value as input.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ToBool}.
                                 */
                                // @ts-ignore
                                public static toBoolean(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToBool
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
