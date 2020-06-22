declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Represents one single operation in an aggregation pipeline.
                         * @author Sebastian Herold
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @since 1.3
                         */
                        // @ts-ignore
                        interface AggregationOperation {
                            /**
                             * Turns the {@link AggregationOperation} into a {@link Document} by using the given
                             * {@link AggregationOperationContext}.
                             * @return the Document
                             */
                            // @ts-ignore
                            toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
