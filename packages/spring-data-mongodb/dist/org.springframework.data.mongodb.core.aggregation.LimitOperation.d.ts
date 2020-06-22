declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the {@code $limit}-operation.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#limit(long)} instead of creating instances of this
                         * class directly.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @since 1.3
                         * @see <a href="https://docs.mongodb.org/manual/reference/aggregation/limit/">MongoDB Aggregation Framework: $limit</a>
                         */
                        // @ts-ignore
                        class LimitOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * @param maxElements Number of documents to consider.
                             */
                            // @ts-ignore
                            constructor(maxElements: number /*long*/)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
