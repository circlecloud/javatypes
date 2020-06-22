declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $sort}-operation.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#sort(Direction, String...)} instead of creating
                         * instances of this class directly.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.3
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/sort/">MongoDB Aggregation Framework: $sort</a>
                         */
                        // @ts-ignore
                        class SortOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * Creates a new {@link SortOperation} for the given {@link Sort} instance.
                             * @param sort must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(sort: Sort)
                            // @ts-ignore
                            public and(direction: Direction, ...fields: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.SortOperation
                            // @ts-ignore
                            public and(sort: Sort): org.springframework.data.mongodb.core.aggregation.SortOperation
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
