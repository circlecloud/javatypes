declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace SetOperators {
                            /**
                             * {@link AggregationExpression} for {@code $allElementsTrue}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class AllElementsTrue extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link AllElementsTrue}.
                                 * @param arrayReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(arrayReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.AllElementsTrue
                                /**
                                 * Creates new {@link AllElementsTrue}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.AllElementsTrue
                                // @ts-ignore
                                public allElementsTrue(): org.springframework.data.mongodb.core.aggregation.SetOperators.AllElementsTrue
                            }
                        }
                    }
                }
            }
        }
    }
}
