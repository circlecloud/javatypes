declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace SetOperators {
                            /**
                             * {@link AggregationExpression} for {@code $anyElementTrue}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class AnyElementTrue extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link AnyElementTrue}.
                                 * @param arrayReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(arrayReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.AnyElementTrue
                                /**
                                 * Creates new {@link AnyElementTrue}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.AnyElementTrue
                                // @ts-ignore
                                public anyElementTrue(): org.springframework.data.mongodb.core.aggregation.SetOperators.AnyElementTrue
                            }
                        }
                    }
                }
            }
        }
    }
}
