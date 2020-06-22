declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * {@link IndexConfiguration} allows programmatic setup of indexes. This is suitable for cases where there is no option
                         * to use the equivalent {@link Indexed} annotation.
                         * @author Christoph Strobl
                         * @author Rob Winch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class IndexConfiguration extends java.lang.Object implements org.springframework.data.redis.core.index.ConfigurableIndexDefinitionProvider {
                            /**
                             * Creates new empty {@link IndexConfiguration}.
                             */
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public hasIndexFor(keyspace: java.io.Serializable): boolean
                            // @ts-ignore
                            public hasIndexFor(keyspace: java.io.Serializable, path: java.lang.String | string): boolean
                            // @ts-ignore
                            public getIndexDefinitionsFor(keyspace: java.io.Serializable, path: java.lang.String | string): Array<org.springframework.data.redis.core.index.IndexDefinition>
                            // @ts-ignore
                            public getIndexDefinitionsFor(keyspace: java.io.Serializable): Array<org.springframework.data.redis.core.index.IndexDefinition>
                            // @ts-ignore
                            public addIndexDefinition(indexDefinition: org.springframework.data.redis.core.index.IndexDefinition): void
                            /**
                             * Customization hook.
                             * @return must not return {#literal null}.
                             */
                            // @ts-ignore
                            initialConfiguration(): java.lang.Iterable<any>
                        }
                    }
                }
            }
        }
    }
}
