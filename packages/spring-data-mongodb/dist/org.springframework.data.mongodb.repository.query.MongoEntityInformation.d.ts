declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Mongo specific {@link EntityInformation}.
                         * @author Oliver Gierke
                         */
                        // @ts-ignore
                        interface MongoEntityInformation<T, ID> {
                            /**
                             * Returns the name of the collection the entity shall be persisted to.
                             * @return 
                             */
                            // @ts-ignore
                            getCollectionName(): string
                            /**
                             * Returns the attribute that the id will be persisted to.
                             * @return 
                             */
                            // @ts-ignore
                            getIdAttribute(): string
                        }
                    }
                }
            }
        }
    }
}
