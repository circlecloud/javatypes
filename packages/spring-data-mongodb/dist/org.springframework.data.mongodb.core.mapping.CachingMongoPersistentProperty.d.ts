declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        /**
                         * {@link MongoPersistentProperty} caching access to {@link #isIdProperty()} and {@link #getFieldName()}.
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class CachingMongoPersistentProperty extends org.springframework.data.mongodb.core.mapping.BasicMongoPersistentProperty {
                            /**
                             * Creates a new {@link CachingMongoPersistentProperty}.
                             * @param property
                             * @param owner
                             * @param simpleTypeHolder
                             * @param fieldNamingStrategy
                             */
                            // @ts-ignore
                            constructor(property: Property, owner: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>, simpleTypeHolder: SimpleTypeHolder, fieldNamingStrategy: FieldNamingStrategy)
                            // @ts-ignore
                            public isIdProperty(): boolean
                            // @ts-ignore
                            public isAssociation(): boolean
                            // @ts-ignore
                            public getFieldName(): string
                            // @ts-ignore
                            public usePropertyAccess(): boolean
                            // @ts-ignore
                            public isTransient(): boolean
                            // @ts-ignore
                            public isDbReference(): boolean
                            // @ts-ignore
                            public getDBRef(): org.springframework.data.mongodb.core.mapping.DBRef
                        }
                    }
                }
            }
        }
    }
}
