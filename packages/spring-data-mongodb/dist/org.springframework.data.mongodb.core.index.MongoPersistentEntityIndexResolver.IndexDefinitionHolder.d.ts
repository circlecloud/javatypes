declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        namespace MongoPersistentEntityIndexResolver {
                            /**
                             * Implementation of {@link IndexDefinition} holding additional (property)path information used for creating the
                             * index. The path itself is the properties {@literal "dot"} path representation from its root document.
                             * @author Christoph Strobl
                             * @since 1.5
                             */
                            // @ts-ignore
                            class IndexDefinitionHolder extends java.lang.Object implements org.springframework.data.mongodb.core.index.IndexDefinition {
                                /**
                                 * Create
                                 * @param path
                                 */
                                // @ts-ignore
                                constructor(path: java.lang.String | string, definition: org.springframework.data.mongodb.core.index.IndexDefinition, collection: java.lang.String | string)
                                // @ts-ignore
                                public getCollection(): string
                                /**
                                 * Get the {@literal "dot"} path used to create the index.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getPath(): string
                                /**
                                 * Get the {@literal raw} {@link IndexDefinition}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getIndexDefinition(): org.springframework.data.mongodb.core.index.IndexDefinition
                                // @ts-ignore
                                public getIndexKeys(): org.bson.Document
                                // @ts-ignore
                                public getIndexOptions(): org.bson.Document
                            }
                        }
                    }
                }
            }
        }
    }
}
