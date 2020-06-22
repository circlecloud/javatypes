declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $graphLookup}-operation. <br />
                         * Performs a recursive search on a collection, with options for restricting the search by recursion depth and query
                         * filter. <br />
                         * We recommend to use the static factory method {@link Aggregation#graphLookup(String)} instead of creating instances
                         * of this class directly.
                         * @see <a href=
                         *       "https://docs.mongodb.org/manual/reference/aggregation/graphLookup/">https://docs.mongodb.org/manual/reference/aggregation/graphLookup/</a>
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        class GraphLookupOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation.InheritsFieldsAggregationOperation {
                            /**
                             * Creates a new {@link FromBuilder} to build {@link GraphLookupOperation}.
                             * @return a new {#link FromBuilder}.
                             */
                            // @ts-ignore
                            public static builder(): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.FromBuilder
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            // @ts-ignore
                            public getFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                        }
                    }
                }
            }
        }
    }
}
