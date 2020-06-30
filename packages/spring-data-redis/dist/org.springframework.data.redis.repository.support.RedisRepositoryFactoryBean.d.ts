declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace support {
                        /**
                         * Adapter for Springs {@link FactoryBean} interface to allow easy setup of {@link RedisRepositoryFactory} via Spring
                         * configuration.
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         * @param <T> The repository type.
                         * @param <S> The repository domain type.
                         * @param <ID> The repository id type.
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisRepositoryFactoryBean<T extends object, S, ID> extends java.lang.Object {
                            /**
                             * Creates a new {@link RedisRepositoryFactoryBean} for the given repository interface.
                             * @param repositoryInterface must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(repositoryInterface: java.lang.Class<any>)
                            // @ts-ignore
                            createRepositoryFactory(operations: KeyValueOperations, queryCreator: java.lang.Class<any>, repositoryQueryType: java.lang.Class<any>): org.springframework.data.redis.repository.support.RedisRepositoryFactory
                        }
                    }
                }
            }
        }
    }
}
