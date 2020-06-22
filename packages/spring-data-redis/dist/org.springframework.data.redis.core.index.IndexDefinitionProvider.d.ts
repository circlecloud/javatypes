declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * {@link IndexDefinitionProvider} give access to {@link IndexDefinition}s for creating secondary index structures.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface IndexDefinitionProvider {
                            /**
                             * Checks if an index is defined for a given {@code keyspace}.
                             * @param keyspace the keyspace to get
                             * @return never {#literal null}
                             */
                            // @ts-ignore
                            hasIndexFor(keyspace: java.io.Serializable): boolean
                            /**
                             * Checks if an index is defined for a given {@code keyspace} and property {@code path}.
                             * @param keyspace
                             * @param path
                             * @return true if index is defined.
                             */
                            // @ts-ignore
                            hasIndexFor(keyspace: java.io.Serializable, path: java.lang.String | string): boolean
                            /**
                             * Get the list of {@link IndexDefinition} for a given {@code keyspace}.
                             * @param keyspace
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getIndexDefinitionsFor(keyspace: java.io.Serializable): Array<org.springframework.data.redis.core.index.IndexDefinition>
                            /**
                             * Get the list of {@link IndexDefinition} for a given {@code keyspace} and property {@code path}.
                             * @param keyspace
                             * @param path
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getIndexDefinitionsFor(keyspace: java.io.Serializable, path: java.lang.String | string): Array<org.springframework.data.redis.core.index.IndexDefinition>
                        }
                    }
                }
            }
        }
    }
}
