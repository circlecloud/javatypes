declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            namespace Reduce {
                                /**
                                 * @author Christoph Strobl
                                 */
                                // @ts-ignore
                                class PropertyExpression extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                    // @ts-ignore
                                    constructor(propertyName: java.lang.String | string, aggregationExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                    /**
                                     * Define a result property for an {@link AggregationExpression} used in {@link Reduce}.
                                     * @param name must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    public static property(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.PropertyExpression.AsBuilder
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
