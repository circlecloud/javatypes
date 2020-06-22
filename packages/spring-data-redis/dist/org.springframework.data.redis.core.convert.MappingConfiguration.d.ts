declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link MappingConfiguration} is used for programmatic configuration of secondary indexes, key prefixes, expirations
                         * and the such.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class MappingConfiguration extends java.lang.Object {
                            /**
                             * Creates new {@link MappingConfiguration}.
                             * @param indexConfiguration must not be {#literal null}.
                             * @param keyspaceConfiguration must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(indexConfiguration: org.springframework.data.redis.core.index.ConfigurableIndexDefinitionProvider, keyspaceConfiguration: org.springframework.data.redis.core.convert.KeyspaceConfiguration)
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getIndexConfiguration(): org.springframework.data.redis.core.index.ConfigurableIndexDefinitionProvider
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getKeyspaceConfiguration(): org.springframework.data.redis.core.convert.KeyspaceConfiguration
                        }
                    }
                }
            }
        }
    }
}
