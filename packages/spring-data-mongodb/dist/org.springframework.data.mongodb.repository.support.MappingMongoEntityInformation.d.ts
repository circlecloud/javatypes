declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * {@link MongoEntityInformation} implementation using a {@link MongoPersistentEntity} instance to lookup the necessary
                         * information. Can be configured with a custom collection to be returned which will trump the one returned by the
                         * {@link MongoPersistentEntity} if given.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MappingMongoEntityInformation<T, ID> extends java.lang.Object implements org.springframework.data.mongodb.repository.query.MongoEntityInformation<T, ID> {
                            /**
                             * Creates a new {@link MappingMongoEntityInformation} for the given {@link MongoPersistentEntity}.
                             * @param entity must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<T>)
                            /**
                             * Creates a new {@link MappingMongoEntityInformation} for the given {@link MongoPersistentEntity} and fallback
                             * identifier type.
                             * @param entity must not be {#literal null}.
                             * @param fallbackIdType can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<T>, fallbackIdType: java.lang.Class<ID>)
                            /**
                             * Creates a new {@link MappingMongoEntityInformation} for the given {@link MongoPersistentEntity} and custom
                             * collection name.
                             * @param entity must not be {#literal null}.
                             * @param customCollectionName can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<T>, customCollectionName: java.lang.String | string)
                            // @ts-ignore
                            public getCollectionName(): string
                            // @ts-ignore
                            public getIdAttribute(): string
                            // @ts-ignore
                            public getIdType(): java.lang.Class<ID>
                        }
                    }
                }
            }
        }
    }
}
