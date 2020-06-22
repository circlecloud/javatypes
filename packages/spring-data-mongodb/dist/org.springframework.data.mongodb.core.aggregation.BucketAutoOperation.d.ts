declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $bucketAuto}-operation. <br />
                         * Bucket stage is typically used with {@link Aggregation} and {@code $facet}. Categorizes incoming documents into a
                         * specific number of groups, called buckets, based on a specified expression. Bucket boundaries are automatically
                         * determined in an attempt to evenly distribute the documents into the specified number of buckets. <br />
                         * We recommend to use the static factory method {@link Aggregation#bucketAuto(String, int)} instead of creating
                         * instances of this class directly.
                         * @see <a href=
                         *       "https://docs.mongodb.org/manual/reference/aggregation/bucketAuto/">https://docs.mongodb.org/manual/reference/aggregation/bucketAuto/</a>
                         * @see BucketOperationSupport
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        class BucketAutoOperation extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport<org.springframework.data.mongodb.core.aggregation.BucketAutoOperation, org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.BucketAutoOperationOutputBuilder> implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                            /**
                             * Creates a new {@link BucketAutoOperation} given a {@link Field group-by field}.
                             * @param groupByField must not be {#literal null}.
                             * @param buckets number of buckets, must be a positive integer.
                             */
                            // @ts-ignore
                            constructor(groupByField: org.springframework.data.mongodb.core.aggregation.Field, buckets: number /*int*/)
                            /**
                             * Creates a new {@link BucketAutoOperation} given a {@link AggregationExpression group-by expression}.
                             * @param groupByExpression must not be {#literal null}.
                             * @param buckets number of buckets, must be a positive integer.
                             */
                            // @ts-ignore
                            constructor(groupByExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression, buckets: number /*int*/)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            /**
                             * Configures a number of bucket {@literal buckets} and return a new {@link BucketAutoOperation}.
                             * @param buckets must be a positive number.
                             * @return 
                             */
                            // @ts-ignore
                            public withBuckets(buckets: number /*int*/): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation
                            /**
                             * Configures {@link Granularity granularity} that specifies the preferred number series to use to ensure that the
                             * calculated boundary edges end on preferred round numbers or their powers of 10 and return a new
                             * {@link BucketAutoOperation}. <br />
                             * Use either predefined {@link Granularities} or provide a own one.
                             * @param granularity must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public withGranularity(granularity: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularity): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation
                            // @ts-ignore
                            newBucketOperation(outputs: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Outputs): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation
                            // @ts-ignore
                            public andOutputExpression(expression: java.lang.String | string, ...params: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.ExpressionBucketAutoOperationBuilder
                            // @ts-ignore
                            public andOutput(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.BucketAutoOperationOutputBuilder
                            // @ts-ignore
                            public andOutput(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.BucketAutoOperationOutputBuilder
                        }
                    }
                }
            }
        }
    }
}
