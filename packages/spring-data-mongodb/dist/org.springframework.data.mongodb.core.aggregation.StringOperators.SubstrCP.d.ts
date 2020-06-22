declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $substrCP}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class SubstrCP extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link SubstrCP}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.SubstrCP
                                /**
                                 * Creates new {@link SubstrCP}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.SubstrCP
                                // @ts-ignore
                                public substringCP(start: number /*int*/): org.springframework.data.mongodb.core.aggregation.StringOperators.SubstrCP
                                // @ts-ignore
                                public substringCP(start: number /*int*/, nrOfChars: number /*int*/): org.springframework.data.mongodb.core.aggregation.StringOperators.SubstrCP
                            }
                        }
                    }
                }
            }
        }
    }
}
