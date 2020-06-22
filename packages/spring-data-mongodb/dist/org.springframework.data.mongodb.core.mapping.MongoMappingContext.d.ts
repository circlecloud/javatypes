declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        /**
                         * Default implementation of a {@link MappingContext} for MongoDB using {@link BasicMongoPersistentEntity} and
                         * {@link BasicMongoPersistentProperty} as primary abstractions.
                         * @author Jon Brisbin
                         * @author Oliver Gierke
                         */
                        // @ts-ignore
                        class MongoMappingContext extends java.lang.Object {
                            /**
                             * Creates a new {@link MongoMappingContext}.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Configures the {@link FieldNamingStrategy} to be used to determine the field name if no manual mapping is applied.
                             * Defaults to a strategy using the plain property name.
                             * @param fieldNamingStrategy the {#link FieldNamingStrategy} to be used to determine the field name if no manual
                             *           mapping is applied.
                             */
                            // @ts-ignore
                            public setFieldNamingStrategy(fieldNamingStrategy: FieldNamingStrategy): void
                            // @ts-ignore
                            shouldCreatePersistentEntityFor(type: object): boolean
                            // @ts-ignore
                            public createPersistentProperty(property: Property, owner: org.springframework.data.mongodb.core.mapping.BasicMongoPersistentEntity<any>, simpleTypeHolder: SimpleTypeHolder): org.springframework.data.mongodb.core.mapping.MongoPersistentProperty
                            // @ts-ignore
                            createPersistentEntity<T>(typeInformation: object): org.springframework.data.mongodb.core.mapping.BasicMongoPersistentEntity<T>
                            // @ts-ignore
                            public setApplicationContext(applicationContext: ApplicationContext): void
                        }
                    }
                }
            }
        }
    }
}
