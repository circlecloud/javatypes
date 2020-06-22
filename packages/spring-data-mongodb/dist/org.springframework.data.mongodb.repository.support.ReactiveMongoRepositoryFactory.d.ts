declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * Factory to create {@link org.springframework.data.mongodb.repository.ReactiveMongoRepository} instances.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @since 2.0
                         */
                        // @ts-ignore
                        class ReactiveMongoRepositoryFactory extends ReactiveRepositoryFactorySupport {
                            /**
                             * Creates a new {@link ReactiveMongoRepositoryFactory} with the given {@link ReactiveMongoOperations}.
                             * @param mongoOperations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mongoOperations: org.springframework.data.mongodb.core.ReactiveMongoOperations)
                            // @ts-ignore
                            getRepositoryBaseClass(metadata: RepositoryMetadata): java.lang.Class<any>
                            // @ts-ignore
                            getTargetRepository(information: RepositoryInformation): any
                            // @ts-ignore
                            getQueryLookupStrategy(key: Key, evaluationContextProvider: QueryMethodEvaluationContextProvider): java.util.Optional<QueryLookupStrategy>
                            // @ts-ignore
                            public getEntityInformation<T, ID>(domainClass: java.lang.Class<T>): org.springframework.data.mongodb.repository.query.MongoEntityInformation<T, ID>
                        }
                    }
                }
            }
        }
    }
}
