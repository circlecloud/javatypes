declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * {@link IndexDefinitionProvider} that allows registering new {@link IndexDefinition} via
                         * {@link IndexDefinitionRegistry}.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface ConfigurableIndexDefinitionProvider extends org.springframework.data.redis.core.index.IndexDefinitionProvider, org.springframework.data.redis.core.index.IndexDefinitionRegistry {
                        }
                    }
                }
            }
        }
    }
}
