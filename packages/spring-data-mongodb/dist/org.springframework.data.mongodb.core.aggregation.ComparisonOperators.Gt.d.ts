declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ComparisonOperators {
                            /**
                             * {@link AggregationExpression} for {@code $gt}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Gt extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Gt}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gt
                                /**
                                 * Creates new {@link Gt}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gt
                                /**
                                 * Creates new {@link Gt} with all previously added arguments appending the given one.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThan(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gt
                                /**
                                 * Creates new {@link Gt} with all previously added arguments appending the given one.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThan(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gt
                                /**
                                 * Creates new {@link Gt} with all previously added arguments appending the given one.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThanValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gt
                            }
                        }
                    }
                }
            }
        }
    }
}
