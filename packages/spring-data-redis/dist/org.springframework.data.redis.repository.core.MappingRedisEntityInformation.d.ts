declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace core {
                        /**
                         * {@link RedisEntityInformation} implementation using a {@link RedisPersistentEntity} instance to lookup the necessary
                         * information. Can be configured with a custom collection to be returned which will trump the one returned by the
                         * {@link RedisPersistentEntity} if given.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @param <T>
                         * @param <ID>
                         */
                        // @ts-ignore
                        class MappingRedisEntityInformation<T, ID> extends java.lang.Object implements org.springframework.data.redis.repository.core.RedisEntityInformation<T, ID> {
                            /**
                             * @param entity
                             */
                            // @ts-ignore
                            constructor(entity: org.springframework.data.redis.core.mapping.RedisPersistentEntity<T>)
                        }
                    }
                }
            }
        }
    }
}
