declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ObjectOperators {
                            /**
                             * {@link AggregationExpression} for {@code $objectToArray} that converts a document to an array of {@link Document
                             * documents} that each contains two fields {@literal k} and {@literal v}. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/objectToArray/">https://docs.mongodb.com/manual/reference/operator/aggregation/objectToArray/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ObjectToArray extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link ObjectToArray aggregation expression} that takes the value pointed to by given {@link Field
                                 * fieldReference} and converts it to an array.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link ObjectToArray}.
                                 */
                                // @ts-ignore
                                public static valueOfToArray(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ObjectOperators.ObjectToArray
                                /**
                                 * Creates new {@link ObjectToArray aggregation expression} that takes the result value of the given
                                 * {@link AggregationExpression expression} and converts it to an array.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link ObjectToArray}.
                                 */
                                // @ts-ignore
                                public static valueOfToArray(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ObjectOperators.ObjectToArray
                                /**
                                 * Creates new {@link ObjectToArray aggregation expression} that takes the given value and converts it to an array.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link ObjectToArray}.
                                 */
                                // @ts-ignore
                                public static toArray(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ObjectOperators.ObjectToArray
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
