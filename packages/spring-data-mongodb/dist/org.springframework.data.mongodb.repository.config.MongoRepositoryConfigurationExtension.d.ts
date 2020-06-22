declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace config {
                        /**
                         * {@link RepositoryConfigurationExtension} for MongoDB.
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MongoRepositoryConfigurationExtension extends RepositoryConfigurationExtensionSupport {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getModuleName(): string
                            // @ts-ignore
                            getModulePrefix(): string
                            // @ts-ignore
                            public getRepositoryFactoryBeanClassName(): string
                            // @ts-ignore
                            getIdentifyingAnnotations(): Array<java.lang.Class<any>>
                            // @ts-ignore
                            getIdentifyingTypes(): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public postProcess(builder: BeanDefinitionBuilder, config: XmlRepositoryConfigurationSource): void
                            // @ts-ignore
                            public postProcess(builder: BeanDefinitionBuilder, config: AnnotationRepositoryConfigurationSource): void
                            // @ts-ignore
                            public registerBeansForRoot(registry: BeanDefinitionRegistry, configurationSource: RepositoryConfigurationSource): void
                            // @ts-ignore
                            useRepositoryConfiguration(metadata: RepositoryMetadata): boolean
                        }
                    }
                }
            }
        }
    }
}
