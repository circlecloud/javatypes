declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace configuration {
                        /**
                         * {@link RepositoryConfigurationExtension} for Redis.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisRepositoryConfigurationExtension extends KeyValueRepositoryConfigurationExtension {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getModuleName(): string
                            // @ts-ignore
                            getModulePrefix(): string
                            // @ts-ignore
                            getDefaultKeyValueTemplateRef(): string
                            // @ts-ignore
                            public registerBeansForRoot(registry: BeanDefinitionRegistry, configurationSource: RepositoryConfigurationSource): void
                            // @ts-ignore
                            getDefaultKeyValueTemplateBeanDefinition(configurationSource: RepositoryConfigurationSource): AbstractBeanDefinition
                            // @ts-ignore
                            getIdentifyingAnnotations(): Array<java.lang.Class<any>>
                        }
                    }
                }
            }
        }
    }
}
