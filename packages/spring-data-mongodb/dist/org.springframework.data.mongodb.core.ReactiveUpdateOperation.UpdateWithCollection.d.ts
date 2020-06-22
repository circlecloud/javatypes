declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveUpdateOperation {
                        /**
                         * Explicitly define the name of the collection to perform operation in (optional).
                         */
                        // @ts-ignore
                        interface UpdateWithCollection<T> {
                            /**
                             * Explicitly set the name of the collection to perform the query on. <br />
                             * Skip this step to use the default collection derived from the domain type.
                             * @param collection must not be {#literal null} nor {@literal empty}.
                             * @return new instance of {#link UpdateWithCollection}. Never {@literal null}.
                             * @throws IllegalArgumentException if collection is {#literal null} or empty.
                             */
                            // @ts-ignore
                            inCollection(collection: java.lang.String | string): org.springframework.data.mongodb.core.ReactiveUpdateOperation.UpdateWithQuery<T>
                        }
                    }
                }
            }
        }
    }
}
