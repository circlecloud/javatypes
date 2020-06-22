declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * Registry that allows adding {@link IndexDefinition}.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface IndexDefinitionRegistry {
                            /**
                             * Add given {@link RedisIndexSetting}.
                             * @param indexDefinition must not be {#literal null}.
                             */
                            // @ts-ignore
                            addIndexDefinition(indexDefinition: org.springframework.data.redis.core.index.IndexDefinition): void
                        }
                    }
                }
            }
        }
    }
}
