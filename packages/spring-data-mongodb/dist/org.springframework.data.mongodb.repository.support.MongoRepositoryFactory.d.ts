declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * Factory to create {@link MongoRepository} instances.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MongoRepositoryFactory extends RepositoryFactorySupport {
                            /**
                             * Creates a new {@link MongoRepositoryFactory} with the given {@link MongoOperations}.
                             * @param mongoOperations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mongoOperations: org.springframework.data.mongodb.core.MongoOperations)
                            // @ts-ignore
                            getRepositoryBaseClass(metadata: RepositoryMetadata): java.lang.Class<any>
                            // @ts-ignore
                            getRepositoryFragments(metadata: RepositoryMetadata): RepositoryFragments
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
