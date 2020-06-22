declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $sortByCount}-operation.
                         * <p/>
                         * {@code $sortByCount} stage is typically used with {@link Aggregation} and {@code $facet}. Groups incoming documents
                         * based on the value of a specified expression and computes the count of documents in each distinct group.
                         * {@link SortByCountOperation} is equivalent to {@code { $group: { _id: <expression>, count: { $sum: 1 } } }, { $sort:
                         * { count: -1 } }}.
                         * <p/>
                         * We recommend to use the static factory method {@link Aggregation#sortByCount(String)} instead of creating instances
                         * of this class directly.
                         * @see <a href=
                         *       "https://docs.mongodb.com/manual/reference/operator/aggregation/sortByCount/">https://docs.mongodb.com/manual/reference/operator/aggregation/sortByCount/</a>
                         * @author Jérôme Guyon
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class SortByCountOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * Creates a new {@link SortByCountOperation} given a {@link Field group-by field}.
                             * @param groupByField must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(groupByField: org.springframework.data.mongodb.core.aggregation.Field)
                            /**
                             * Creates a new {@link SortByCountOperation} given a {@link AggregationExpression group-by expression}.
                             * @param groupByExpression must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(groupByExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
