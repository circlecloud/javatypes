declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $facet}-operation. <br />
                         * Facet of {@link AggregationOperation}s to be used in an {@link Aggregation}. Processes multiple
                         * {@link AggregationOperation} pipelines within a single stage on the same set of input documents. Each sub-pipeline
                         * has its own field in the output document where its results are stored as an array of documents.
                         * {@link FacetOperation} enables various aggregations on the same set of input documents, without needing to retrieve
                         * the input documents multiple times. <br />
                         * As of MongoDB 3.4, {@link FacetOperation} cannot be used with nested pipelines containing {@link GeoNearOperation},
                         * {@link OutOperation} and {@link FacetOperation}. <br />
                         * We recommend to use the static factory method {@link Aggregation#facet()} instead of creating instances of this class
                         * directly.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 1.10
                         * @see <a href="https://docs.mongodb.org/manual/reference/aggregation/facet/">MongoDB Aggregation Framework: $facet</a>
                         */
                        // @ts-ignore
                        class FacetOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                            /**
                             * Creates a new {@link FacetOperation}.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Empty (initial) {@link FacetOperation}.
                             */
                            // @ts-ignore
                            public static readonly EMPTY: org.springframework.data.mongodb.core.aggregation.FacetOperation
                            /**
                             * Creates a new {@link FacetOperationBuilder} to append a new facet using {@literal operations}. <br />
                             * {@link FacetOperationBuilder} takes a pipeline of {@link AggregationOperation} to categorize documents into a
                             * single facet.
                             * @param operations must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public and(...operations: org.springframework.data.mongodb.core.aggregation.AggregationOperation[]): org.springframework.data.mongodb.core.aggregation.FacetOperation.FacetOperationBuilder
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
