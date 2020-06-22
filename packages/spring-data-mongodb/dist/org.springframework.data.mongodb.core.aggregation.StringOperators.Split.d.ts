declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $split}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Split extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Start creating a new {@link Split}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Split
                                /**
                                 * Start creating a new {@link Split}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Split
                                /**
                                 * Use given {@link String} as delimiter.
                                 * @param delimiter must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public split(delimiter: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Split
                                /**
                                 * Use value of referenced field as delimiter.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public split(fieldReference: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.StringOperators.Split
                                /**
                                 * Use value resulting from {@link AggregationExpression} as delimiter.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public split(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Split
                            }
                        }
                    }
                }
            }
        }
    }
}
