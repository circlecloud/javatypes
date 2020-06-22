declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace cdi {
                        /**
                         * {@link CdiRepositoryBean} to create Mongo repository instances.
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MongoRepositoryBean<T> extends java.lang.Object {
                            /**
                             * Creates a new {@link MongoRepositoryBean}.
                             * @param operations must not be {#literal null}.
                             * @param qualifiers must not be {#literal null}.
                             * @param repositoryType must not be {#literal null}.
                             * @param beanManager must not be {#literal null}.
                             * @param detector detector for the custom {#link org.springframework.data.repository.Repository} implementations
                             *           {@link CustomRepositoryImplementationDetector}, can be {@link Optional#empty()}.
                             */
                            // @ts-ignore
                            constructor(operations: object, qualifiers: java.util.Set<java.lang.annotation.Annotation> | Array<java.lang.annotation.Annotation>, repositoryType: java.lang.Class<T>, beanManager: BeanManager, detector: java.util.Optional<CustomRepositoryImplementationDetector>)
                            // @ts-ignore
                            create(creationalContext: object, repositoryType: java.lang.Class<T>): T
                        }
                    }
                }
            }
        }
    }
}
