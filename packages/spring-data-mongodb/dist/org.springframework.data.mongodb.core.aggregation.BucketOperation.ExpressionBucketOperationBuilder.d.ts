declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketOperation {
                            /**
                             * {@link ExpressionBucketOperationBuilderSupport} implementation for {@link BucketOperation} using SpEL expression
                             * based {@link Output}.
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class ExpressionBucketOperationBuilder extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.ExpressionBucketOperationBuilderSupport<org.springframework.data.mongodb.core.aggregation.BucketOperation.BucketOperationOutputBuilder, org.springframework.data.mongodb.core.aggregation.BucketOperation> {
                                /**
                                 * Creates a new {@link ExpressionBucketOperationBuilderSupport} for the given value, {@link BucketOperation}
                                 * and parameters.
                                 * @param expression must not be {#literal null}.
                                 * @param operation must not be {#literal null}.
                                 * @param parameters
                                 */
                                // @ts-ignore
                                constructor(expression: java.lang.String | string, operation: org.springframework.data.mongodb.core.aggregation.BucketOperation, parameters: java.lang.Object[] | any[])
                                // @ts-ignore
                                apply(operationOutput: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.OperationOutput): org.springframework.data.mongodb.core.aggregation.BucketOperation.BucketOperationOutputBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
