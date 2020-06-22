declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Default implementation of {@link ReactiveIndexOperations}.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    class DefaultReactiveIndexOperations extends java.lang.Object implements org.springframework.data.mongodb.core.index.ReactiveIndexOperations {
                        /**
                         * Creates a new {@link DefaultReactiveIndexOperations}.
                         * @param mongoOperations must not be {#literal null}.
                         * @param collectionName must not be {#literal null}.
                         * @param queryMapper must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(mongoOperations: org.springframework.data.mongodb.core.ReactiveMongoOperations, collectionName: java.lang.String | string, queryMapper: org.springframework.data.mongodb.core.convert.QueryMapper)
                        /**
                         * Creates a new {@link DefaultReactiveIndexOperations}.
                         * @param mongoOperations must not be {#literal null}.
                         * @param collectionName must not be {#literal null}.
                         * @param queryMapper must not be {#literal null}.
                         * @param type used for mapping potential partial index filter expression, must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(mongoOperations: org.springframework.data.mongodb.core.ReactiveMongoOperations, collectionName: java.lang.String | string, queryMapper: org.springframework.data.mongodb.core.convert.QueryMapper, type: java.lang.Class<any>)
                        // @ts-ignore
                        public ensureIndex(indexDefinition: org.springframework.data.mongodb.core.index.IndexDefinition): object
                        // @ts-ignore
                        public dropIndex(name: java.lang.String | string): object
                        // @ts-ignore
                        public dropAllIndexes(): object
                        // @ts-ignore
                        public getIndexInfo(): object
                    }
                }
            }
        }
    }
}
