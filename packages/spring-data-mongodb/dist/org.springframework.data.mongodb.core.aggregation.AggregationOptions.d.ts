declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Holds a set of configurable aggregation options that can be used within an aggregation pipeline. A list of support
                         * aggregation options can be found in the MongoDB reference documentation
                         * https://docs.mongodb.org/manual/reference/command/aggregate/#aggregate
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @see Aggregation#withOptions(AggregationOptions)
                         * @see TypedAggregation#withOptions(AggregationOptions)
                         * @since 1.6
                         */
                        // @ts-ignore
                        class AggregationOptions extends java.lang.Object {
                            /**
                             * Creates a new {@link AggregationOptions}.
                             * @param allowDiskUse whether to off-load intensive sort-operations to disk.
                             * @param explain whether to get the execution plan for the aggregation instead of the actual results.
                             * @param cursor can be {#literal null}, used to pass additional options to the aggregation.
                             */
                            // @ts-ignore
                            constructor(allowDiskUse: boolean, explain: boolean, cursor: Document)
                            /**
                             * Creates a new {@link AggregationOptions}.
                             * @param allowDiskUse whether to off-load intensive sort-operations to disk.
                             * @param explain whether to get the execution plan for the aggregation instead of the actual results.
                             * @param cursor can be {#literal null}, used to pass additional options (such as {@code batchSize}) to the
                             *           aggregation.
                             * @param collation collation for string comparison. Can be {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            constructor(allowDiskUse: boolean, explain: boolean, cursor: Document, collation: org.springframework.data.mongodb.core.query.Collation)
                            /**
                             * Creates new {@link AggregationOptions} given {@link DBObject} containing aggregation options.
                             * @param document must not be {#literal null}.
                             * @return the {#link AggregationOptions}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static fromDocument(document: Document): org.springframework.data.mongodb.core.aggregation.AggregationOptions
                            /**
                             * Obtain a new {@link Builder} for constructing {@link AggregationOptions}.
                             * @return never {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static builder(): org.springframework.data.mongodb.core.aggregation.AggregationOptions.Builder
                            /**
                             * Enables writing to temporary files. When set to true, aggregation stages can write data to the _tmp subdirectory in
                             * the dbPath directory.
                             * @return 
                             */
                            // @ts-ignore
                            public isAllowDiskUse(): boolean
                            /**
                             * Specifies to return the information on the processing of the pipeline.
                             * @return 
                             */
                            // @ts-ignore
                            public isExplain(): boolean
                            /**
                             * The initial cursor batch size, if available, otherwise {@literal null}.
                             * @return the batch size or {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getCursorBatchSize(): number
                            /**
                             * Specify a document that contains options that control the creation of the cursor object.
                             * @return 
                             */
                            // @ts-ignore
                            public getCursor(): java.util.Optional<Document>
                            /**
                             * Get collation settings for string comparison.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getCollation(): java.util.Optional<org.springframework.data.mongodb.core.query.Collation>
                            /**
                             * Returns a {@link Document} representation of this {@link AggregationOptions}.
                             * @return 
                             */
                            // @ts-ignore
                            public toDocument(): Document
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
