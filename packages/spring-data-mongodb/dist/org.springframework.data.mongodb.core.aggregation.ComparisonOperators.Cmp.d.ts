declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ComparisonOperators {
                            /**
                             * {@link AggregationExpression} for {@code $cmp}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Cmp extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Cmp}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Cmp
                                /**
                                 * Creates new {@link Cmp}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Cmp
                                /**
                                 * Creates new {@link Cmp} with all previously added arguments appending the given one.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public compareTo(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Cmp
                                /**
                                 * Creates new {@link Cmp} with all previously added arguments appending the given one.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public compareTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Cmp
                                /**
                                 * Creates new {@link Cmp} with all previously added arguments appending the given one.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public compareToValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Cmp
                            }
                        }
                    }
                }
            }
        }
    }
}
