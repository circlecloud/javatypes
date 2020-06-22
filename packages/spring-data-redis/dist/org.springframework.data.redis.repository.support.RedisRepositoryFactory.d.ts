declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace support {
                        /**
                         * {@link RepositoryFactorySupport} specific of handing Redis
                         * {@link org.springframework.data.keyvalue.repository.KeyValueRepository}.
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisRepositoryFactory extends KeyValueRepositoryFactory {
                            /**
                             * @param keyValueOperations
                             * @see KeyValueRepositoryFactory#KeyValueRepositoryFactory(KeyValueOperations)
                             */
                            // @ts-ignore
                            constructor(keyValueOperations: KeyValueOperations)
                            /**
                             * @param keyValueOperations
                             * @param queryCreator
                             * @see KeyValueRepositoryFactory#KeyValueRepositoryFactory(KeyValueOperations, Class)
                             */
                            // @ts-ignore
                            constructor(keyValueOperations: KeyValueOperations, queryCreator: java.lang.Class<any>)
                            /**
                             * @param keyValueOperations
                             * @param queryCreator
                             * @param repositoryQueryType
                             * @see KeyValueRepositoryFactory#KeyValueRepositoryFactory(KeyValueOperations, Class, Class)
                             */
                            // @ts-ignore
                            constructor(keyValueOperations: KeyValueOperations, queryCreator: java.lang.Class<any>, repositoryQueryType: java.lang.Class<any>)
                            // @ts-ignore
                            getRepositoryFragments(metadata: RepositoryMetadata): RepositoryFragments
                            // @ts-ignore
                            public getEntityInformation<T, ID>(domainClass: java.lang.Class<T>): object
                        }
                    }
                }
            }
        }
    }
}
