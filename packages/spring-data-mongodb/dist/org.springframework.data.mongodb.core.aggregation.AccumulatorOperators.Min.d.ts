declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace AccumulatorOperators {
                            /**
                             * {@link AggregationExpression} for {@code $min}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Min extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Min}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static minOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Min
                                /**
                                 * Creates new {@link Min}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static minOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Min
                                /**
                                 * Creates new {@link Min} with all previously added arguments appending the given one. <br />
                                 * <strong>NOTE:</strong> Only possible in {@code $project} stage.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Min
                                /**
                                 * Creates new {@link Min} with all previously added arguments appending the given one. <br />
                                 * <strong>NOTE:</strong> Only possible in {@code $project} stage.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Min
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
