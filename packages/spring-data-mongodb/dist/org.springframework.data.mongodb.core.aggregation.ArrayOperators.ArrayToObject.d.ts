declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $arrayToObject} that transforms an array into a single document. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/arrayToObject/">https://docs.mongodb.com/manual/reference/operator/aggregation/arrayToObject/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ArrayToObject extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Converts the given array (e.g. an array of two-element arrays, a field reference to an array,...) to an object.
                                 * @param array must not be {#literal null}.
                                 * @return new instance of {#link ArrayToObject}.
                                 */
                                // @ts-ignore
                                public static arrayToObject(array: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayToObject
                                /**
                                 * Converts the array pointed to by the given {@link Field field reference} to an object.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link ArrayToObject}.
                                 */
                                // @ts-ignore
                                public static arrayValueOfToObject(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayToObject
                                /**
                                 * Converts the result array of the given {@link AggregationExpression expression} to an object.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link ArrayToObject}.
                                 */
                                // @ts-ignore
                                public static arrayValueOfToObject(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayToObject
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
