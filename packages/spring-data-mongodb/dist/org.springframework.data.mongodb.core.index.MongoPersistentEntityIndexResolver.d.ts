declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * {@link IndexResolver} implementation inspecting {@link MongoPersistentEntity} for {@link MongoPersistentEntity} to be
                         * indexed. <br />
                         * All {@link MongoPersistentProperty} of the {@link MongoPersistentEntity} are inspected for potential indexes by
                         * scanning related annotations.
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Martin Macko
                         * @author Mark Paluch
                         * @since 1.5
                         */
                        // @ts-ignore
                        class MongoPersistentEntityIndexResolver extends java.lang.Object implements org.springframework.data.mongodb.core.index.IndexResolver {
                            /**
                             * Create new {@link MongoPersistentEntityIndexResolver}.
                             * @param mappingContext must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.mongodb.core.mapping.MongoMappingContext)
                            // @ts-ignore
                            public resolveIndexFor(typeInformation: object): java.lang.Iterable<any>
                            /**
                             * Resolve the {@link IndexDefinition}s for given {@literal root} entity by traversing {@link MongoPersistentProperty}
                             * scanning for index annotations {@link Indexed}, {@link CompoundIndex} and {@link GeospatialIndex}. The given
                             * {@literal root} has therefore to be annotated with {@link Document}.
                             * @param root must not be null.
                             * @return List of {#link IndexDefinitionHolder}. Will never be {@code null}.
                             * @throws IllegalArgumentException in case of missing {#link Document} annotation marking root entities.
                             */
                            // @ts-ignore
                            public resolveIndexForEntity(root: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): Array<org.springframework.data.mongodb.core.index.MongoPersistentEntityIndexResolver.IndexDefinitionHolder>
                            /**
                             * Create {@link IndexDefinition} wrapped in {@link IndexDefinitionHolder} for {@link CompoundIndexes} of given type.
                             * @param dotPath The properties {#literal "dot"} path representation from its document root.
                             * @param fallbackCollection
                             * @param type
                             * @return 
                             */
                            // @ts-ignore
                            createCompoundIndexDefinitions(dotPath: java.lang.String | string, fallbackCollection: java.lang.String | string, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): Array<org.springframework.data.mongodb.core.index.MongoPersistentEntityIndexResolver.IndexDefinitionHolder>
                            // @ts-ignore
                            createCompoundIndexDefinition(dotPath: java.lang.String | string, collection: java.lang.String | string, index: org.springframework.data.mongodb.core.index.CompoundIndex, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): org.springframework.data.mongodb.core.index.MongoPersistentEntityIndexResolver.IndexDefinitionHolder
                            /**
                             * Creates {@link IndexDefinition} wrapped in {@link IndexDefinitionHolder} out of {@link Indexed} for given
                             * {@link MongoPersistentProperty}.
                             * @param dotPath The properties {#literal "dot"} path representation from its document root.
                             * @param collection
                             * @param persitentProperty
                             * @return 
                             */
                            // @ts-ignore
                            createIndexDefinition(dotPath: java.lang.String | string, collection: java.lang.String | string, persitentProperty: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): org.springframework.data.mongodb.core.index.MongoPersistentEntityIndexResolver.IndexDefinitionHolder
                            /**
                             * Creates {@link IndexDefinition} wrapped in {@link IndexDefinitionHolder} out of {@link GeoSpatialIndexed} for
                             * {@link MongoPersistentProperty}.
                             * @param dotPath The properties {#literal "dot"} path representation from its document root.
                             * @param collection
                             * @param persistentProperty
                             * @return 
                             */
                            // @ts-ignore
                            createGeoSpatialIndexDefinition(dotPath: java.lang.String | string, collection: java.lang.String | string, persistentProperty: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): org.springframework.data.mongodb.core.index.MongoPersistentEntityIndexResolver.IndexDefinitionHolder
                        }
                    }
                }
            }
        }
    }
}
