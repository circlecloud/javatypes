declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * {@link SpelIndexDefinition} defines index that is evaluated based on a {@link SpelExpression} requires the
                         * {@link SpelIndexResolver} to be evaluated.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class SpelIndexDefinition extends org.springframework.data.redis.core.index.RedisIndexDefinition {
                            /**
                             * Creates new {@link SpelIndexDefinition}.
                             * @param keyspace must not be {#literal null}.
                             * @param expression must not be {#literal null}.
                             * @param indexName must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(keyspace: java.lang.String | string, expression: java.lang.String | string, indexName: java.lang.String | string)
                            /**
                             * Get the raw expression.
                             * @return 
                             */
                            // @ts-ignore
                            public getExpression(): string
                        }
                    }
                }
            }
        }
    }
}
