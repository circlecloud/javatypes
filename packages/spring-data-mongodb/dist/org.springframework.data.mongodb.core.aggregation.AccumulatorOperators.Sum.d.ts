declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace AccumulatorOperators {
                            /**
                             * {@link AggregationExpression} for {@code $sum}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Sum extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Sum}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static sumOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Sum
                                /**
                                 * Creates new {@link Sum}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static sumOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Sum
                                /**
                                 * Creates new {@link Sum} with all previously added arguments appending the given one. <br />
                                 * <strong>NOTE:</strong> Only possible in {@code $project} stage.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Sum
                                /**
                                 * Creates new {@link Sum} with all previously added arguments appending the given one. <br />
                                 * <strong>NOTE:</strong> Only possible in {@code $project} stage.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Sum
                                // @ts-ignore
                                public toDocument(value: java.lang.Object | any, context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            }
                        }
                    }
                }
            }
        }
    }
}
