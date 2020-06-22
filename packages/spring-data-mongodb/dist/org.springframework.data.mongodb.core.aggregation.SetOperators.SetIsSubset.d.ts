declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace SetOperators {
                            /**
                             * {@link AggregationExpression} for {@code $setIsSubset}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class SetIsSubset extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link SetIsSubset}.
                                 * @param arrayReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(arrayReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.SetIsSubset
                                /**
                                 * Creates new {@link SetIsSubset}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.SetIsSubset
                                /**
                                 * Creates new {@link SetIsSubset} with all previously added arguments appending the given one.
                                 * @param arrayReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isSubsetOf(arrayReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.SetIsSubset
                                /**
                                 * Creates new {@link SetIsSubset} with all previously added arguments appending the given one.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isSubsetOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.SetIsSubset
                            }
                        }
                    }
                }
            }
        }
    }
}
