declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Base class for bucket operations that support output expressions the aggregation framework. <br />
                         * Bucket stages collect documents into buckets and can contribute output fields. <br />
                         * Implementing classes are required to provide an {@link OutputBuilder}.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        abstract class BucketOperationSupport<T extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport<T, B>, B extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.OutputBuilder<B, T>> extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                            /**
                             * Creates a new {@link BucketOperationSupport} given a {@link Field group-by field}.
                             * @param groupByField must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(groupByField: org.springframework.data.mongodb.core.aggregation.Field)
                            /**
                             * Creates a new {@link BucketOperationSupport} given a {@link AggregationExpression group-by expression}.
                             * @param groupByExpression must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(groupByExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                            /**
                             * Creates a copy of {@link BucketOperationSupport}.
                             * @param operationSupport must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(operationSupport: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport<any, any>)
                            /**
                             * Creates a copy of {@link BucketOperationSupport} and applies the new {@link Outputs}.
                             * @param operationSupport must not be {#literal null}.
                             * @param outputs must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(operationSupport: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport<any, any>, outputs: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Outputs)
                            /**
                             * Creates a new {@link ExpressionBucketOperationBuilderSupport} given a SpEL {@literal expression} and optional
                             * {@literal params} to add an output field to the resulting bucket documents.
                             * @param expression the SpEL expression, must not be {#literal null} or empty.
                             * @param params must not be {#literal null}
                             * @return 
                             */
                            // @ts-ignore
                            public abstract andOutputExpression(expression: java.lang.String | string, ...params: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.ExpressionBucketOperationBuilderSupport<B, T>
                            /**
                             * Creates a new {@link BucketOperationSupport} given an {@link AggregationExpression} to add an output field to the
                             * resulting bucket documents.
                             * @param expression the SpEL expression, must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public abstract andOutput(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): B
                            /**
                             * Creates a new {@link BucketOperationSupport} given {@literal fieldName} to add an output field to the resulting
                             * bucket documents. {@link BucketOperationSupport} exposes accumulation operations that can be applied to
                             * {@literal fieldName}.
                             * @param fieldName must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public abstract andOutput(fieldName: java.lang.String | string): B
                            /**
                             * Creates a new {@link BucketOperationSupport} given to add a count field to the resulting bucket documents.
                             * @return 
                             */
                            // @ts-ignore
                            public andOutputCount(): B
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            // @ts-ignore
                            public getFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            /**
                             * Implementation hook to create a new bucket operation.
                             * @param outputs the outputs
                             * @return the new bucket operation.
                             */
                            // @ts-ignore
                            abstract newBucketOperation(outputs: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Outputs): T
                            // @ts-ignore
                            andOutput(output: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Output): T
                        }
                    }
                }
            }
        }
    }
}
