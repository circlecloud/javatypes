declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BooleanOperators {
                            /**
                             * {@link AggregationExpression} for {@code $not}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Not extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Not} that evaluates the boolean value of the referenced field and returns the opposite boolean
                                 * value.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static not(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Not
                                /**
                                 * Creates new {@link Not} that evaluates the resulting boolean value of the given {@link AggregationExpression} and
                                 * returns the opposite boolean value.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static not(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Not
                            }
                        }
                    }
                }
            }
        }
    }
}
