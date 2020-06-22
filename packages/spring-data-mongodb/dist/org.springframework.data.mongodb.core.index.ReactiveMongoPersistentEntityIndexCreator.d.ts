declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Component that inspects {@link MongoPersistentEntity} instances contained in the given {@link MongoMappingContext}
                         * for indexing metadata and ensures the indexes to be available using reactive infrastructure.
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class ReactiveMongoPersistentEntityIndexCreator extends java.lang.Object {
                            /**
                             * Creates a new {@link ReactiveMongoPersistentEntityIndexCreator} for the given {@link MongoMappingContext},
                             * {@link ReactiveIndexOperationsProvider}.
                             * @param mappingContext must not be {#literal null}.
                             * @param operationsProvider must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.mongodb.core.mapping.MongoMappingContext, operationsProvider: org.springframework.data.mongodb.core.index.ReactiveIndexOperationsProvider)
                            /**
                             * Creates a new {@link ReactiveMongoPersistentEntityIndexCreator} for the given {@link MongoMappingContext},
                             * {@link ReactiveIndexOperationsProvider}, and {@link IndexResolver}.
                             * @param mappingContext must not be {#literal null}.
                             * @param operationsProvider must not be {#literal null}.
                             * @param indexResolver must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.mongodb.core.mapping.MongoMappingContext, operationsProvider: org.springframework.data.mongodb.core.index.ReactiveIndexOperationsProvider, indexResolver: org.springframework.data.mongodb.core.index.IndexResolver)
                            /**
                             * Returns whether the current index creator was registered for the given {@link MappingContext}.
                             * @param context
                             * @return 
                             */
                            // @ts-ignore
                            public isIndexCreatorFor(context: object): boolean
                            /**
                             * Inspect entities for index creation.
                             * @return a {#link Mono} that completes without value after indexes were created.
                             */
                            // @ts-ignore
                            public checkForIndexes(entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): object
                        }
                    }
                }
            }
        }
    }
}
