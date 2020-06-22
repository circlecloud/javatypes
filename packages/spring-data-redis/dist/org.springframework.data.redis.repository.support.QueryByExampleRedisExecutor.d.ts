declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace support {
                        /**
                         * Repository fragment implementing Redis {@link QueryByExampleExecutor Query-by-Example} operations.
                         * <p/>
                         * This executor uses {@link ExampleQueryMapper} to map {@link Example}s into {@link KeyValueQuery} to execute its query
                         * methods.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class QueryByExampleRedisExecutor<T> extends java.lang.Object {
                            /**
                             * Create a new {@link QueryByExampleRedisExecutor} given {@link EntityInformation} and {@link RedisKeyValueTemplate}.
                             * This constructor uses the configured {@link IndexResolver} from the converter.
                             * @param entityInformation must not be {#literal null}.
                             * @param keyValueTemplate must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(entityInformation: object, keyValueTemplate: org.springframework.data.redis.core.RedisKeyValueTemplate)
                            /**
                             * Create a new {@link QueryByExampleRedisExecutor} given {@link EntityInformation} and {@link RedisKeyValueTemplate}.
                             * @param entityInformation must not be {#literal null}.
                             * @param keyValueTemplate must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(entityInformation: object, keyValueTemplate: org.springframework.data.redis.core.RedisKeyValueTemplate, indexResolver: org.springframework.data.redis.core.convert.IndexResolver)
                            // @ts-ignore
                            public findOne<S extends T>(example: object): java.util.Optional<S>
                            // @ts-ignore
                            public findAll<S extends T>(example: object): java.lang.Iterable<S>
                            // @ts-ignore
                            public findAll<S extends T>(example: object, sort: Sort): java.lang.Iterable<S>
                            // @ts-ignore
                            public findAll<S extends T>(example: object, pageable: Pageable): object
                            // @ts-ignore
                            public count<S extends T>(example: object): number /*long*/
                            // @ts-ignore
                            public exists<S extends T>(example: object): boolean
                        }
                    }
                }
            }
        }
    }
}
