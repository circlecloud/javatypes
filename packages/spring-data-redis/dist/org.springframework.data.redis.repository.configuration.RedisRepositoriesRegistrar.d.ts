declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace configuration {
                        /**
                         * Redis specific {@link ImportBeanDefinitionRegistrar}.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisRepositoriesRegistrar extends RepositoryBeanDefinitionRegistrarSupport {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            getAnnotation(): java.lang.Class<any>
                            // @ts-ignore
                            getExtension(): RepositoryConfigurationExtension
                        }
                    }
                }
            }
        }
    }
}
