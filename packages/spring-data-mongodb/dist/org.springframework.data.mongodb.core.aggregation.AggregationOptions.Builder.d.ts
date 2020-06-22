declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace AggregationOptions {
                            /**
                             * A Builder for {@link AggregationOptions}.
                             * @author Thomas Darimont
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class Builder extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Defines whether to off-load intensive sort-operations to disk.
                                 * @param allowDiskUse
                                 * @return 
                                 */
                                // @ts-ignore
                                public allowDiskUse(allowDiskUse: boolean): org.springframework.data.mongodb.core.aggregation.AggregationOptions.Builder
                                /**
                                 * Defines whether to get the execution plan for the aggregation instead of the actual results.
                                 * @param explain
                                 * @return 
                                 */
                                // @ts-ignore
                                public explain(explain: boolean): org.springframework.data.mongodb.core.aggregation.AggregationOptions.Builder
                                /**
                                 * Additional options to the aggregation.
                                 * @param cursor
                                 * @return 
                                 */
                                // @ts-ignore
                                public cursor(cursor: Document): org.springframework.data.mongodb.core.aggregation.AggregationOptions.Builder
                                /**
                                 * Define the initial cursor batch size.
                                 * @param batchSize
                                 * @return 
                                 * @since 2.0
                                 */
                                // @ts-ignore
                                public cursorBatchSize(batchSize: number /*int*/): org.springframework.data.mongodb.core.aggregation.AggregationOptions.Builder
                                /**
                                 * Define collation settings for string comparison.
                                 * @param collation can be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.aggregation.AggregationOptions.Builder
                                /**
                                 * Returns a new {@link AggregationOptions} instance with the given configuration.
                                 * @return 
                                 */
                                // @ts-ignore
                                public build(): org.springframework.data.mongodb.core.aggregation.AggregationOptions
                            }
                        }
                    }
                }
            }
        }
    }
}
