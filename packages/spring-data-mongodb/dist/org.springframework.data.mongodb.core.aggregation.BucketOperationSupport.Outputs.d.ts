declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketOperationSupport {
                            /**
                             * Encapsulates {@link Output}s.
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class Outputs extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                // @ts-ignore
                                static readonly EMPTY: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Outputs
                                /**
                                 * @return the {#link ExposedFields} derived from {@link Output}.
                                 */
                                // @ts-ignore
                                asExposedFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                                /**
                                 * Create a new {@link Outputs} that contains the new {@link Output}.
                                 * @param output must not be {#literal null}.
                                 * @return the new {#link Outputs} that contains the new {@link Output}
                                 */
                                // @ts-ignore
                                and(output: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Output): org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Outputs
                                /**
                                 * @return {#literal true} if {@link Outputs} contains no {@link Output}.
                                 */
                                // @ts-ignore
                                isEmpty(): boolean
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
