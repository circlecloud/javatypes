declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Default implementation of {@link IndexOperations}.
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     * @author Komi Innocent
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class DefaultIndexOperations extends java.lang.Object implements org.springframework.data.mongodb.core.index.IndexOperations {
                        /**
                         * Creates a new {@link DefaultIndexOperations}.
                         * @param mongoDbFactory must not be {#literal null}.
                         * @param collectionName must not be {#literal null}.
                         * @param queryMapper must not be {#literal null}.
                         * @deprecated since 2.1. Please use
                         *              {#link DefaultIndexOperations#DefaultIndexOperations(MongoOperations, String, Class)}.
                         */
                        // @ts-ignore
                        constructor(mongoDbFactory: org.springframework.data.mongodb.MongoDbFactory, collectionName: java.lang.String | string, queryMapper: org.springframework.data.mongodb.core.convert.QueryMapper)
                        /**
                         * Creates a new {@link DefaultIndexOperations}.
                         * @param mongoDbFactory must not be {#literal null}.
                         * @param collectionName must not be {#literal null}.
                         * @param queryMapper must not be {#literal null}.
                         * @param type Type used for mapping potential partial index filter expression. Can be {#literal null}.
                         * @since 1.10
                         * @deprecated since 2.1. Please use
                         *              {#link DefaultIndexOperations#DefaultIndexOperations(MongoOperations, String, Class)}.
                         */
                        // @ts-ignore
                        constructor(mongoDbFactory: org.springframework.data.mongodb.MongoDbFactory, collectionName: java.lang.String | string, queryMapper: org.springframework.data.mongodb.core.convert.QueryMapper, type: java.lang.Class<any>)
                        /**
                         * Creates a new {@link DefaultIndexOperations}.
                         * @param mongoOperations must not be {#literal null}.
                         * @param collectionName must not be {#literal null} or empty.
                         * @param type can be {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        constructor(mongoOperations: org.springframework.data.mongodb.core.MongoOperations, collectionName: java.lang.String | string, type: java.lang.Class<any>)
                        // @ts-ignore
                        public ensureIndex(indexDefinition: org.springframework.data.mongodb.core.index.IndexDefinition): string
                        // @ts-ignore
                        public dropIndex(name: java.lang.String | string): void
                        // @ts-ignore
                        public dropAllIndexes(): void
                        // @ts-ignore
                        public getIndexInfo(): Array<org.springframework.data.mongodb.core.index.IndexInfo>
                        // @ts-ignore
                        public execute<T>(callback: org.springframework.data.mongodb.core.CollectionCallback<T>): T
                    }
                }
            }
        }
    }
}
