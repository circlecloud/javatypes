declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toDecimal} that converts a value to {@literal decimal}. Shorthand for
                             * {@link Convert#to(String) Convert#to("decimal")}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/toDecimal/">https://docs.mongodb.com/manual/reference/operator/aggregation/toDecimal/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ToDecimal extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ToDecimal} using the given value as input.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ToDecimal}.
                                 */
                                // @ts-ignore
                                public static toDecimal(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToDecimal
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
