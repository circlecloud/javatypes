declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ComparisonOperators {
                            /**
                             * {@link AggregationExpression} for {@code $eq}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Eq extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Eq}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq
                                /**
                                 * Creates new {@link Eq}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq
                                /**
                                 * Creates new {@link Eq} with all previously added arguments appending the given one.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public equalTo(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq
                                /**
                                 * Creates new {@link Eq} with all previously added arguments appending the given one.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public equalTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq
                                /**
                                 * Creates new {@link Eq} with all previously added arguments appending the given one.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public equalToValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq
                            }
                        }
                    }
                }
            }
        }
    }
}
