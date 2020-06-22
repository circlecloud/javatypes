declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Redis specific {@link EntityConverter}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface RedisConverter {
                            // @ts-ignore
                            getMappingContext(): org.springframework.data.redis.core.mapping.RedisMappingContext
                            /**
                             * @return the configured {#link IndexResolver}, may be {@literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            getIndexResolver(): org.springframework.data.redis.core.convert.IndexResolver
                        }
                    }
                }
            }
        }
    }
}
