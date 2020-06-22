declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * {@link IndexDefinition} that is based on a property paths.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface PathBasedRedisIndexDefinition extends org.springframework.data.redis.core.index.IndexDefinition {
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            getPath(): string
                        }
                    }
                }
            }
        }
    }
}
