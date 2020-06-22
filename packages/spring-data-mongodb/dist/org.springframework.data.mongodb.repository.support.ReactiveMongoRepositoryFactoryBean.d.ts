declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * {@link org.springframework.beans.factory.FactoryBean} to create
                         * {@link org.springframework.data.mongodb.repository.ReactiveMongoRepository} instances.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         * @see org.springframework.data.repository.reactive.ReactiveSortingRepository
                         * @see org.springframework.data.repository.reactive.RxJava2SortingRepository
                         */
                        // @ts-ignore
                        class ReactiveMongoRepositoryFactoryBean<T extends <any>, S, ID extends java.io.Serializable> extends java.lang.Object {
                            /**
                             * Creates a new {@link ReactiveMongoRepositoryFactoryBean} for the given repository interface.
                             * @param repositoryInterface must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(repositoryInterface: java.lang.Class<any>)
                            /**
                             * Configures the {@link ReactiveMongoOperations} to be used.
                             * @param operations the operations to set
                             */
                            // @ts-ignore
                            public setReactiveMongoOperations(operations: org.springframework.data.mongodb.core.ReactiveMongoOperations): void
                            /**
                             * Configures whether to automatically create indexes for the properties referenced in a query method.
                             * @param createIndexesForQueryMethods the createIndexesForQueryMethods to set
                             */
                            // @ts-ignore
                            public setCreateIndexesForQueryMethods(createIndexesForQueryMethods: boolean): void
                            // @ts-ignore
                            setMappingContext(mappingContext: object): void
                            // @ts-ignore
                            createRepositoryFactory(): RepositoryFactorySupport
                            /**
                             * Creates and initializes a {@link RepositoryFactorySupport} instance.
                             * @param operations
                             * @return 
                             */
                            // @ts-ignore
                            getFactoryInstance(operations: org.springframework.data.mongodb.core.ReactiveMongoOperations): RepositoryFactorySupport
                            // @ts-ignore
                            public afterPropertiesSet(): void
                        }
                    }
                }
            }
        }
    }
}
