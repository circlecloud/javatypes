declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Provider interface to obtain {@link ReactiveIndexOperations} by MongoDB collection name.
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface ReactiveIndexOperationsProvider {
                            /**
                             * Returns the operations that can be performed on indexes.
                             * @param collectionName name of the MongoDB collection, must not be {#literal null}.
                             * @return index operations on the named collection
                             */
                            // @ts-ignore
                            indexOps(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.index.ReactiveIndexOperations
                        }
                    }
                }
            }
        }
    }
}
