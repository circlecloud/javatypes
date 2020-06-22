declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveAggregationOperation {
                        /**
                         * Collection override (optional).
                         */
                        // @ts-ignore
                        interface AggregationOperationWithCollection<T> {
                            /**
                             * Explicitly set the name of the collection to perform the query on. <br />
                             * Skip this step to use the default collection derived from the domain type.
                             * @param collection must not be {#literal null} nor {@literal empty}.
                             * @return new instance of {#link AggregationOperationWithAggregation}. Never {@literal null}.
                             * @throws IllegalArgumentException if collection is {#literal null} or empty.
                             */
                            // @ts-ignore
                            inCollection(collection: java.lang.String | string): org.springframework.data.mongodb.core.ReactiveAggregationOperation.AggregationOperationWithAggregation<T>
                        }
                    }
                }
            }
        }
    }
}
