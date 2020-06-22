declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * Base {@link IndexDefinition} implementation.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        abstract class RedisIndexDefinition extends java.lang.Object implements org.springframework.data.redis.core.index.IndexDefinition {
                            /**
                             * Creates new {@link RedisIndexDefinition}.
                             * @param keyspace
                             * @param path
                             * @param indexName
                             */
                            // @ts-ignore
                            constructor(keyspace: java.lang.String | string, path: java.lang.String | string, indexName: java.lang.String | string)
                            // @ts-ignore
                            public getKeyspace(): string
                            // @ts-ignore
                            public getConditions(): Array<org.springframework.data.redis.core.index.IndexDefinition.Condition<any>>
                            // @ts-ignore
                            public valueTransformer(): org.springframework.data.redis.core.index.IndexValueTransformer
                            // @ts-ignore
                            public getIndexName(): string
                            // @ts-ignore
                            public getPath(): string
                            // @ts-ignore
                            addCondition(condition: org.springframework.data.redis.core.index.IndexDefinition.Condition<any>): void
                            // @ts-ignore
                            public setValueTransformer(valueTransformer: org.springframework.data.redis.core.index.IndexValueTransformer): void
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                        }
                    }
                }
            }
        }
    }
}
