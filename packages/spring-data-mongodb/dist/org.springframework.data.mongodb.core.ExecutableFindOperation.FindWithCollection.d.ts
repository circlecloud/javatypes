declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableFindOperation {
                        /**
                         * Collection override (Optional).
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface FindWithCollection<T> extends org.springframework.data.mongodb.core.ExecutableFindOperation.FindWithQuery<T> {
                            /**
                             * Explicitly set the name of the collection to perform the query on. <br />
                             * Skip this step to use the default collection derived from the domain type.
                             * @param collection must not be {#literal null} nor {@literal empty}.
                             * @return new instance of {#link FindWithProjection}.
                             * @throws IllegalArgumentException if collection is {#literal null}.
                             */
                            // @ts-ignore
                            inCollection(collection: java.lang.String | string): org.springframework.data.mongodb.core.ExecutableFindOperation.FindWithProjection<T>
                        }
                    }
                }
            }
        }
    }
}
