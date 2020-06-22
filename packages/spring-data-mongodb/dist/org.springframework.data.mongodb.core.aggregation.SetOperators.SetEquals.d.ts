declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace SetOperators {
                            /**
                             * {@link AggregationExpression} for {@code $setEquals}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class SetEquals extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Create new {@link SetEquals}.
                                 * @param arrayReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(arrayReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.SetEquals
                                /**
                                 * Create new {@link SetEquals}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayAsSet(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.SetEquals
                                /**
                                 * Creates new {@link java.util.Set} with all previously added arguments appending the given one.
                                 * @param arrayReferences must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isEqualTo(...arrayReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetEquals
                                /**
                                 * Creates new {@link Sum} with all previously added arguments appending the given one.
                                 * @param expressions must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isEqualTo(...expressions: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetEquals
                                /**
                                 * Creates new {@link Sum} with all previously added arguments appending the given one.
                                 * @param array must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isEqualTo(array: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetEquals
                            }
                        }
                    }
                }
            }
        }
    }
}
