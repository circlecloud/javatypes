declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the {@code $match}-operation.
                         * <p>
                         * We recommend to use the static factory method
                         * {@link Aggregation#match(org.springframework.data.mongodb.core.query.Criteria)} instead of creating instances of this
                         * class directly.
                         * @author Sebastian Herold
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @since 1.3
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/match/">MongoDB Aggregation Framework: $match</a>
                         */
                        // @ts-ignore
                        class MatchOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * Creates a new {@link MatchOperation} for the given {@link CriteriaDefinition}.
                             * @param criteriaDefinition must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(criteriaDefinition: org.springframework.data.mongodb.core.query.CriteriaDefinition)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
