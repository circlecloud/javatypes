declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableAggregationOperation {
                        /**
                         * Collection override (Optional).
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface AggregationWithCollection<T> {
                            /**
                             * Explicitly set the name of the collection to perform the query on. <br />
                             * Skip this step to use the default collection derived from the domain type.
                             * @param collection must not be {#literal null} nor {@literal empty}.
                             * @return new instance of {#link AggregationWithAggregation}.
                             * @throws IllegalArgumentException if collection is {#literal null}.
                             */
                            // @ts-ignore
                            inCollection(collection: java.lang.String | string): org.springframework.data.mongodb.core.ExecutableAggregationOperation.AggregationWithAggregation<T>
                        }
                    }
                }
            }
        }
    }
}
