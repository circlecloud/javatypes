declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $skip}-operation.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#skip(int)} instead of creating instances of this
                         * class directly.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @since 1.3
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/skip/">MongoDB Aggregation Framework: $skip</a>
                         */
                        // @ts-ignore
                        class SkipOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * Creates a new {@link SkipOperation} skipping the given number of elements.
                             * @param skipCount number of documents to skip, must not be less than zero.
                             */
                            // @ts-ignore
                            constructor(skipCount: number /*long*/)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
