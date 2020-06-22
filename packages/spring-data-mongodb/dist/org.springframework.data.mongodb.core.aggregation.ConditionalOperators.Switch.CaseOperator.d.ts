declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConditionalOperators {
                            namespace Switch {
                                /**
                                 * Encapsulates the aggregation framework case document inside a {@code $switch}-operation.
                                 */
                                // @ts-ignore
                                class CaseOperator extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                    // @ts-ignore
                                    public static when(condition: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch.CaseOperator.ThenBuilder
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
}
