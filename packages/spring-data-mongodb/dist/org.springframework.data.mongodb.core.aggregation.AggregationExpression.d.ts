declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * An {@link AggregationExpression} can be used with field expressions in aggregation pipeline stages like
                         * {@code project} and {@code group}.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface AggregationExpression {
                            /**
                             * Turns the {@link AggregationExpression} into a {@link Document} within the given
                             * {@link AggregationOperationContext}.
                             * @param context
                             * @return 
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
