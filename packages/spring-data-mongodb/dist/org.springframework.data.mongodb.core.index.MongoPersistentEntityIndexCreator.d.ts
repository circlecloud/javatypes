declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Component that inspects {@link MongoPersistentEntity} instances contained in the given {@link MongoMappingContext}
                         * for indexing metadata and ensures the indexes to be available.
                         * @author Jon Brisbin
                         * @author Oliver Gierke
                         * @author Philipp Schneider
                         * @author Johno Crawford
                         * @author Laurent Canet
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MongoPersistentEntityIndexCreator extends java.lang.Object {
                            /**
                             * Creates a new {@link MongoPersistentEntityIndexCreator} for the given {@link MongoMappingContext} and
                             * {@link MongoDbFactory}.
                             * @param mappingContext must not be {#literal null}.
                             * @param indexOperationsProvider must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.mongodb.core.mapping.MongoMappingContext, indexOperationsProvider: org.springframework.data.mongodb.core.index.IndexOperationsProvider)
                            /**
                             * Creates a new {@link MongoPersistentEntityIndexCreator} for the given {@link MongoMappingContext} and
                             * {@link MongoDbFactory}.
                             * @param mappingContext must not be {#literal null}.
                             * @param mongoDbFactory must not be {#literal null}.
                             * @param indexResolver must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.mongodb.core.mapping.MongoMappingContext, indexOperationsProvider: org.springframework.data.mongodb.core.index.IndexOperationsProvider, indexResolver: org.springframework.data.mongodb.core.index.IndexResolver)
                            // @ts-ignore
                            public onApplicationEvent(event: object): void
                            /**
                             * Returns whether the current index creator was registered for the given {@link MappingContext}.
                             * @param context
                             * @return 
                             */
                            // @ts-ignore
                            public isIndexCreatorFor(context: object): boolean
                        }
                    }
                }
            }
        }
    }
}
