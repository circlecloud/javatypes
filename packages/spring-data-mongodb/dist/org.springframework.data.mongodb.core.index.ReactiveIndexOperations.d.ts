declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Index operations on a collection.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface ReactiveIndexOperations {
                            /**
                             * Ensure that an index for the provided {@link IndexDefinition} exists for the collection indicated by the entity
                             * class. If not it will be created.
                             * @param indexDefinition must not be {#literal null}.
                             */
                            // @ts-ignore
                            ensureIndex(indexDefinition: org.springframework.data.mongodb.core.index.IndexDefinition): object
                            /**
                             * Drops an index from this collection.
                             * @param name name of index to drop
                             */
                            // @ts-ignore
                            dropIndex(name: java.lang.String | string): object
                            /**
                             * Drops all indices from this collection.
                             */
                            // @ts-ignore
                            dropAllIndexes(): object
                            /**
                             * Returns the index information on the collection.
                             * @return index information on the collection
                             */
                            // @ts-ignore
                            getIndexInfo(): object
                        }
                    }
                }
            }
        }
    }
}
