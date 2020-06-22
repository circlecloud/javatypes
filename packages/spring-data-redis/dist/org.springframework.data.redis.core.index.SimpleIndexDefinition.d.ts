declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * {@link PathBasedRedisIndexDefinition} for including property values in a secondary index. <br />
                         * Uses Redis {@literal SET} for storage. <br />
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class SimpleIndexDefinition extends org.springframework.data.redis.core.index.RedisIndexDefinition implements org.springframework.data.redis.core.index.PathBasedRedisIndexDefinition {
                            /**
                             * Creates new {@link SimpleIndexDefinition}.
                             * @param keyspace must not be {#literal null}.
                             * @param path
                             */
                            // @ts-ignore
                            constructor(keyspace: java.lang.String | string, path: java.lang.String | string)
                            /**
                             * Creates new {@link SimpleIndexDefinition}.
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
