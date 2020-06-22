declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $reduce}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Reduce extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                // @ts-ignore
                                public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                                /**
                                 * Start creating new {@link Reduce}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.InitialValueBuilder
                                /**
                                 * Start creating new {@link Reduce}.
                                 * @param arrayValueExpression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(arrayValueExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.InitialValueBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
