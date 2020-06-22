declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $substr}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Substr extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Substr}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Substr
                                /**
                                 * Creates new {@link Substr}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Substr
                                // @ts-ignore
                                public substring(start: number /*int*/): org.springframework.data.mongodb.core.aggregation.StringOperators.Substr
                                // @ts-ignore
                                public substring(start: number /*int*/, nrOfChars: number /*int*/): org.springframework.data.mongodb.core.aggregation.StringOperators.Substr
                            }
                        }
                    }
                }
            }
        }
    }
}
