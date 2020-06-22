declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Extension of {@link EntityMetadata} to additionally expose the collection name an entity shall be persisted to.
                         * @author Oliver Gierke
                         */
                        // @ts-ignore
                        interface MongoEntityMetadata<T> {
                            /**
                             * Returns the name of the collection the entity shall be persisted to.
                             * @return 
                             */
                            // @ts-ignore
                            getCollectionName(): string
                            /**
                             * Returns the {@link MongoPersistentEntity} that supposed to determine the collection to be queried.
                             * @return 
                             * @since 2.0.4
                             */
                            // @ts-ignore
                            getCollectionEntity(): org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>
                        }
                    }
                }
            }
        }
    }
}
