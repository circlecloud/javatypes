declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace config {
                        /**
                         * Reactive {@link RepositoryConfigurationExtension} for MongoDB.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @since 2.0
                         */
                        // @ts-ignore
                        class ReactiveMongoRepositoryConfigurationExtension extends org.springframework.data.mongodb.repository.config.MongoRepositoryConfigurationExtension {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getModuleName(): string
                            // @ts-ignore
                            public getRepositoryFactoryClassName(): string
                            // @ts-ignore
                            getIdentifyingTypes(): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public postProcess(builder: BeanDefinitionBuilder, config: XmlRepositoryConfigurationSource): void
                            // @ts-ignore
                            public postProcess(builder: BeanDefinitionBuilder, config: AnnotationRepositoryConfigurationSource): void
                            // @ts-ignore
                            useRepositoryConfiguration(metadata: RepositoryMetadata): boolean
                        }
                    }
                }
            }
        }
    }
}
