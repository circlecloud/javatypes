declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $indexOfCP}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class IndexOfCP extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Start creating a new {@link IndexOfCP}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP.SubstringBuilder
                                /**
                                 * Start creating a new {@link IndexOfCP}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP.SubstringBuilder
                                /**
                                 * Optionally define the substring search start and end position.
                                 * @param range must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public within(range: object): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP
                            }
                        }
                    }
                }
            }
        }
    }
}
