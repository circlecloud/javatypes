declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Index operations on a collection.
                         * @author Mark Pollack
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Jens Schauder
                         */
                        // @ts-ignore
                        interface IndexOperations {
                            /**
                             * Ensure that an index for the provided {@link IndexDefinition} exists for the collection indicated by the entity
                             * class. If not it will be created.
                             * @param indexDefinition must not be {#literal null}.
                             */
                            // @ts-ignore
                            ensureIndex(indexDefinition: org.springframework.data.mongodb.core.index.IndexDefinition): string
                            /**
                             * Drops an index from this collection.
                             * @param name name of index to drop
                             */
                            // @ts-ignore
                            dropIndex(name: java.lang.String | string): void
                            /**
                             * Drops all indices from this collection.
                             */
                            // @ts-ignore
                            dropAllIndexes(): void
                            /**
                             * Returns the index information on the collection.
                             * @return index information on the collection
                             */
                            // @ts-ignore
                            getIndexInfo(): Array<org.springframework.data.mongodb.core.index.IndexInfo>
                        }
                    }
                }
            }
        }
    }
}
