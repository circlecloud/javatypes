declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace SetOperators {
                            /**
                             * {@link AggregationExpression} for {@code $setUnion}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class SetUnion extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link SetUnion}.
                                 * @param arrayReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(arrayReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.SetUnion
                                /**
                                 * Creates new {@link SetUnion}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.SetUnion
                                /**
                                 * Creates new {@link SetUnion} with all previously added arguments appending the given one.
                                 * @param arrayReferences must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public union(...arrayReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetUnion
                                /**
                                 * Creates new {@link SetUnion} with all previously added arguments appending the given one.
                                 * @param expressions must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public union(...expressions: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetUnion
                            }
                        }
                    }
                }
            }
        }
    }
}
