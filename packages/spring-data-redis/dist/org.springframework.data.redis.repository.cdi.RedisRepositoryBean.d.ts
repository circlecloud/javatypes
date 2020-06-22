declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace cdi {
                        /**
                         * {@link CdiRepositoryBean} to create Redis repository instances.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class RedisRepositoryBean<T> extends java.lang.Object {
                            /**
                             * Creates a new {@link CdiRepositoryBean}.
                             * @param keyValueTemplate must not be {#literal null}.
                             * @param qualifiers must not be {#literal null}.
                             * @param repositoryType must not be {#literal null}.
                             * @param beanManager must not be {#literal null}.
                             * @param detector detector for the custom {#link org.springframework.data.repository.Repository} implementations
                             *           {@link CustomRepositoryImplementationDetector}, can be {@literal null}.
                             */
                            // @ts-ignore
                            constructor(keyValueTemplate: object, qualifiers: java.util.Set<java.lang.annotation.Annotation> | Array<java.lang.annotation.Annotation>, repositoryType: java.lang.Class<T>, beanManager: BeanManager, detector: CustomRepositoryImplementationDetector)
                            // @ts-ignore
                            create(creationalContext: object, repositoryType: java.lang.Class<T>): T
                        }
                    }
                }
            }
        }
    }
}
