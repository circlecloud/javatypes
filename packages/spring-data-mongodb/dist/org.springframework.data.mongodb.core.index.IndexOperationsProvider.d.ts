declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Provider interface to obtain {@link IndexOperations} by MongoDB collection name.
                         * @author Mark Paluch
                         * @author Jens Schauder
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface IndexOperationsProvider {
                            /**
                             * Returns the operations that can be performed on indexes
                             * @param collectionName name of the MongoDB collection, must not be {#literal null}.
                             * @return index operations on the named collection
                             */
                            // @ts-ignore
                            indexOps(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.index.IndexOperations
                        }
                    }
                }
            }
        }
    }
}
