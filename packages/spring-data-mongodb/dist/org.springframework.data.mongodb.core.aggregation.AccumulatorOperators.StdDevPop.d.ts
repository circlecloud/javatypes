declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace AccumulatorOperators {
                            /**
                             * {@link AggregationExpression} for {@code $stdDevPop}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class StdDevPop extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link StdDevPop}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static stdDevPopOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.StdDevPop
                                /**
                                 * Creates new {@link StdDevPop} with all previously added arguments appending the given one.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static stdDevPopOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.StdDevPop
                                /**
                                 * Creates new {@link StdDevPop} with all previously added arguments appending the given one. <br/>
                                 * <strong>NOTE:</strong> Only possible in {@code $project} stage.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.StdDevPop
                                /**
                                 * Creates new {@link StdDevSamp} with all previously added arguments appending the given one. <br />
                                 * <strong>NOTE:</strong> Only possible in {@code $project} stage.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.StdDevPop
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
