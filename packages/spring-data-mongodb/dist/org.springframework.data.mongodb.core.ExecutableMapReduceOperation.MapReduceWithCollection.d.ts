declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableMapReduceOperation {
                        /**
                         * Collection override (Optional).
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface MapReduceWithCollection<T> extends org.springframework.data.mongodb.core.ExecutableMapReduceOperation.MapReduceWithQuery<T> {
                            /**
                             * Explicitly set the name of the collection to perform the mapReduce operation on. <br />
                             * Skip this step to use the default collection derived from the domain type.
                             * @param collection must not be {#literal null} nor {@literal empty}.
                             * @return new instance of {#link MapReduceWithProjection}.
                             * @throws IllegalArgumentException if collection is {#literal null}.
                             */
                            // @ts-ignore
                            inCollection(collection: java.lang.String | string): org.springframework.data.mongodb.core.ExecutableMapReduceOperation.MapReduceWithProjection<T>
                        }
                    }
                }
            }
        }
    }
}
