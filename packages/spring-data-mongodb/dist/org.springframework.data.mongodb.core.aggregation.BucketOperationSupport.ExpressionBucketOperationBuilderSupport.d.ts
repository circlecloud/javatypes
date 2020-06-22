declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketOperationSupport {
                            /**
                             * Builder for SpEL expression-based {@link Output}.
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            abstract class ExpressionBucketOperationBuilderSupport<B extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.OutputBuilder<B, T>, T extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport<T, B>> extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.OutputBuilder<B, T> {
                                /**
                                 * Creates a new {@link ExpressionBucketOperationBuilderSupport} for the given value, {@link BucketOperationSupport}
                                 * and parameters.
                                 * @param expression must not be {#literal null}.
                                 * @param operation must not be {#literal null}.
                                 * @param parameters
                                 */
                                // @ts-ignore
                                constructor(expression: java.lang.String | string, operation: T, parameters: java.lang.Object[] | any[])
                            }
                        }
                    }
                }
            }
        }
    }
}
