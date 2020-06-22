declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $bucket}-operation. <br />
                         * Bucket stage is typically used with {@link Aggregation} and {@code $facet}. Categorizes incoming documents into
                         * groups, called buckets, based on a specified expression and bucket boundaries. <br />
                         * We recommend to use the static factory method {@link Aggregation#bucket(String)} instead of creating instances of
                         * this class directly.
                         * @see <a href="https://docs.mongodb.org/manual/reference/aggregation/bucket/">https://docs.mongodb.org/manual/reference/aggregation/bucket/</a>
                         * @see BucketOperationSupport
                         * @author Mark Paluch
                         * @since 1.10
                         */
                        // @ts-ignore
                        class BucketOperation extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport<org.springframework.data.mongodb.core.aggregation.BucketOperation, org.springframework.data.mongodb.core.aggregation.BucketOperation.BucketOperationOutputBuilder> implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                            /**
                             * Creates a new {@link BucketOperation} given a {@link Field group-by field}.
                             * @param groupByField must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(groupByField: org.springframework.data.mongodb.core.aggregation.Field)
                            /**
                             * Creates a new {@link BucketOperation} given a {@link AggregationExpression group-by expression}.
                             * @param groupByExpression must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(groupByExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            /**
                             * Configures a default bucket {@literal literal} and return a new {@link BucketOperation}.
                             * @param literal must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public withDefaultBucket(literal: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.BucketOperation
                            /**
                             * Configures {@literal boundaries} and return a new {@link BucketOperation}. Existing {@literal boundaries} are
                             * preserved and the new {@literal boundaries} are appended.
                             * @param boundaries must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public withBoundaries(...boundaries: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.BucketOperation
                            // @ts-ignore
                            newBucketOperation(outputs: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Outputs): org.springframework.data.mongodb.core.aggregation.BucketOperation
                            // @ts-ignore
                            public andOutputExpression(expression: java.lang.String | string, ...params: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.BucketOperation.ExpressionBucketOperationBuilder
                            // @ts-ignore
                            public andOutput(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BucketOperation.BucketOperationOutputBuilder
                            // @ts-ignore
                            public andOutput(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BucketOperation.BucketOperationOutputBuilder
                        }
                    }
                }
            }
        }
    }
}
