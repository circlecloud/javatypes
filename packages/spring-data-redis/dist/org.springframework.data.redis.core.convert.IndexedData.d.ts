declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link IndexedData} represents a secondary index for a property path in a given keyspace.
                         * @author Christoph Strobl
                         * @author Rob Winch
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface IndexedData {
                            /**
                             * Get the {@link String} representation of the index name.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getIndexName(): string
                            /**
                             * Get the associated keyspace the index resides in.
                             * @return 
                             */
                            // @ts-ignore
                            getKeyspace(): string
                        }
                    }
                }
            }
        }
    }
}
