declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        /**
                         * MongoDB specific {@link MongoPersistentEntity} implementation that adds Mongo specific meta-data such as the
                         * collection name and the like.
                         * @author Jon Brisbin
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class BasicMongoPersistentEntity<T> extends java.lang.Object implements org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<T> {
                            /**
                             * Creates a new {@link BasicMongoPersistentEntity} with the given {@link TypeInformation}. Will default the
                             * collection name to the entities simple type name.
                             * @param typeInformation must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(typeInformation: object)
                            // @ts-ignore
                            public getCollection(): string
                            // @ts-ignore
                            public getLanguage(): string
                            // @ts-ignore
                            public getTextScoreProperty(): org.springframework.data.mongodb.core.mapping.MongoPersistentProperty
                            // @ts-ignore
                            public hasTextScoreProperty(): boolean
                            // @ts-ignore
                            public verify(): void
                            /**
                             * As a general note: An implicit id property has a name that matches "id" or "_id". An explicit id property is one
                             * that is annotated with @see {@link Id}. The property id is updated according to the following rules: 1) An id
                             * property which is defined explicitly takes precedence over an implicitly defined id property. 2) In case of any
                             * ambiguity a @see {@link MappingException} is thrown.
                             * @param property - the new id property candidate
                             * @return 
                             */
                            // @ts-ignore
                            returnPropertyIfBetterIdPropertyCandidateOrNull(property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): org.springframework.data.mongodb.core.mapping.MongoPersistentProperty
                        }
                    }
                }
            }
        }
    }
}
