declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * @author Christoph Strobl
                         * @since 1.8
                         */
                        // @ts-ignore
                        class GeoIndexDefinition extends org.springframework.data.redis.core.index.RedisIndexDefinition implements org.springframework.data.redis.core.index.PathBasedRedisIndexDefinition {
                            /**
                             * Creates new {@link GeoIndexDefinition}.
                             * @param keyspace must not be {#literal null}.
                             * @param path
                             */
                            // @ts-ignore
                            constructor(keyspace: java.lang.String | string, path: java.lang.String | string)
                            /**
                             * Creates new {@link GeoIndexDefinition}.
                             * @param keyspace must not be {#literal null}.
                             * @param path
                             * @param name must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(keyspace: java.lang.String | string, path: java.lang.String | string, name: java.lang.String | string)
                        }
                    }
                }
            }
        }
    }
}
