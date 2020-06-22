declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $arrayElementAt}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ArrayElemAt extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link ArrayElemAt}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayElemAt
                                /**
                                 * Creates new {@link ArrayElemAt}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayElemAt
                                // @ts-ignore
                                public elementAt(index: number /*int*/): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayElemAt
                                // @ts-ignore
                                public elementAt(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayElemAt
                                // @ts-ignore
                                public elementAt(arrayFieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayElemAt
                            }
                        }
                    }
                }
            }
        }
    }
}
