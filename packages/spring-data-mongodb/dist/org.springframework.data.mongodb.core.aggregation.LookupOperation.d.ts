declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $lookup}-operation. We recommend to use the static factory method
                         * {@link Aggregation#lookup(String, String, String, String)} instead of creating instances of this class directly.
                         * @author Alessio Fachechi
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.9
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/">MongoDB Aggregation Framework:
                         *       $lookup</a>
                         */
                        // @ts-ignore
                        class LookupOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation, org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation.InheritsFieldsAggregationOperation {
                            /**
                             * Creates a new {@link LookupOperation} for the given {@link Field}s.
                             * @param from must not be {#literal null}.
                             * @param localField must not be {#literal null}.
                             * @param foreignField must not be {#literal null}.
                             * @param as must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(from: org.springframework.data.mongodb.core.aggregation.Field, localField: org.springframework.data.mongodb.core.aggregation.Field, foreignField: org.springframework.data.mongodb.core.aggregation.Field, as: org.springframework.data.mongodb.core.aggregation.Field)
                            // @ts-ignore
                            public getFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            /**
                             * Get a builder that allows creation of {@link LookupOperation}.
                             * @return 
                             */
                            // @ts-ignore
                            public static newLookup(): org.springframework.data.mongodb.core.aggregation.LookupOperation.FromBuilder
                        }
                    }
                }
            }
        }
    }
}
