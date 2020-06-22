declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace VariableOperators {
                            /**
                             * {@link AggregationExpression} for {@code $map}.
                             */
                            // @ts-ignore
                            class Map extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                /**
                                 * Starts building new {@link Map} that applies an {@link AggregationExpression} to each item of a referenced array
                                 * and returns an array with the applied results.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static itemsOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.VariableOperators.Map.AsBuilder
                                /**
                                 * Starts building new {@link Map} that applies an {@link AggregationExpression} to each item of a referenced array
                                 * and returns an array with the applied results.
                                 * @param source must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static itemsOf(source: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.VariableOperators.Map.AsBuilder
                                // @ts-ignore
                                public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            }
                        }
                    }
                }
            }
        }
    }
}
