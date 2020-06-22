declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace AccumulatorOperators {
                            /**
                             * {@link AggregationExpression} for {@code $avg}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Avg extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Avg}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static avgOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Avg
                                /**
                                 * Creates new {@link Avg}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static avgOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Avg
                                /**
                                 * Creates new {@link Avg} with all previously added arguments appending the given one. <br />
                                 * <strong>NOTE:</strong> Only possible in {@code $project} stage.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Avg
                                /**
                                 * Creates new {@link Avg} with all previously added arguments appending the given one. <br />
                                 * <strong>NOTE:</strong> Only possible in {@code $project} stage.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Avg
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
