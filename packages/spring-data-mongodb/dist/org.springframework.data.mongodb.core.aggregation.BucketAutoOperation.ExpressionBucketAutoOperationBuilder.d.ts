declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketAutoOperation {
                            /**
                             * {@link ExpressionBucketOperationBuilderSupport} implementation for {@link BucketAutoOperation} using SpEL
                             * expression based {@link Output}.
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class ExpressionBucketAutoOperationBuilder extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.ExpressionBucketOperationBuilderSupport<org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.BucketAutoOperationOutputBuilder, org.springframework.data.mongodb.core.aggregation.BucketAutoOperation> {
                                /**
                                 * Creates a new {@link ExpressionBucketAutoOperationBuilder} for the given value, {@link BucketAutoOperation} and
                                 * parameters.
                                 * @param expression must not be {#literal null}.
                                 * @param operation must not be {#literal null}.
                                 * @param parameters
                                 */
                                // @ts-ignore
                                constructor(expression: java.lang.String | string, operation: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation, parameters: java.lang.Object[] | any[])
                                // @ts-ignore
                                apply(operationOutput: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.OperationOutput): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.BucketAutoOperationOutputBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
