declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveRemoveOperation {
                        /**
                         * Collection override (optional).
                         */
                        // @ts-ignore
                        interface RemoveWithCollection<T> extends org.springframework.data.mongodb.core.ReactiveRemoveOperation.RemoveWithQuery<T> {
                            /**
                             * Explicitly set the name of the collection to perform the query on. <br />
                             * Skip this step to use the default collection derived from the domain type.
                             * @param collection must not be {#literal null} nor {@literal empty}.
                             * @return new instance of {#link RemoveWithCollection}. Never {@literal null}.
                             * @throws IllegalArgumentException if collection is {#literal null} or empty.
                             */
                            // @ts-ignore
                            inCollection(collection: java.lang.String | string): org.springframework.data.mongodb.core.ReactiveRemoveOperation.RemoveWithQuery<T>
                        }
                    }
                }
            }
        }
    }
}
