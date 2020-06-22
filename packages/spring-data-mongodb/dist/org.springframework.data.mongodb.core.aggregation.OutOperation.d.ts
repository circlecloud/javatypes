declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the {@code $out}-operation.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#out(String)} instead of creating instances of this
                         * class directly.
                         * @author Nikolay Bogdanov
                         * @author Christoph Strobl
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/out/">MongoDB Aggregation Framework: $out</a>
                         */
                        // @ts-ignore
                        class OutOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * @param outCollectionName Collection name to export the results. Must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(outCollectionName: java.lang.String | string)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
