declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ComparisonOperators {
                            /**
                             * {@link AggregationExpression} for {@code $lt}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Lt extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Lt}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lt
                                /**
                                 * Creates new {@link Lt}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lt
                                /**
                                 * Creates new {@link Lt} with all previously added arguments appending the given one.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThan(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lt
                                /**
                                 * Creates new {@link Lt} with all previously added arguments appending the given one.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThan(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lt
                                /**
                                 * Creates new {@link Lt} with all previously added arguments appending the given one.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThanValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lt
                            }
                        }
                    }
                }
            }
        }
    }
}
