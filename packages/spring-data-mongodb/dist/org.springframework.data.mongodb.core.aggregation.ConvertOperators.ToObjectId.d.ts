declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $toObjectId} that converts a value to {@literal objectId}. Shorthand for
                             * {@link Convert#to(String) Convert#to("objectId")}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/toObjectId/">https://docs.mongodb.com/manual/reference/operator/aggregation/toObjectId/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ToObjectId extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ToObjectId} using the given value as input.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ToObjectId}.
                                 */
                                // @ts-ignore
                                public static toObjectId(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToObjectId
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
