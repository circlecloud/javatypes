declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        /**
                         * MongoDB specific {@link org.springframework.data.mapping.PersistentProperty} implementation.
                         * @author Oliver Gierke
                         * @author Patryk Wasik
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class BasicMongoPersistentProperty extends java.lang.Object implements org.springframework.data.mongodb.core.mapping.MongoPersistentProperty {
                            /**
                             * Creates a new {@link BasicMongoPersistentProperty}.
                             * @param field
                             * @param propertyDescriptor
                             * @param owner
                             * @param simpleTypeHolder
                             * @param fieldNamingStrategy
                             */
                            // @ts-ignore
                            constructor(property: Property, owner: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>, simpleTypeHolder: SimpleTypeHolder, fieldNamingStrategy: FieldNamingStrategy)
                            /**
                             * Also considers fields as id that are of supported id type and name.
                             * @see #SUPPORTED_ID_PROPERTY_NAMES
                             * @see #SUPPORTED_ID_TYPES
                             */
                            // @ts-ignore
                            public isIdProperty(): boolean
                            // @ts-ignore
                            public isExplicitIdProperty(): boolean
                            /**
                             * Returns the key to be used to store the value of the property inside a Mongo {@link org.bson.Document}.
                             * @return 
                             */
                            // @ts-ignore
                            public getFieldName(): string
                            /**
                             * @return true if {#link org.springframework.data.mongodb.core.mapping.Field} having non blank
                             *          {@link org.springframework.data.mongodb.core.mapping.Field#value()} present.
                             * @since 1.7
                             */
                            // @ts-ignore
                            hasExplicitFieldName(): boolean
                            // @ts-ignore
                            public getFieldOrder(): number /*int*/
                            // @ts-ignore
                            createAssociation(): object
                            // @ts-ignore
                            public isDbReference(): boolean
                            // @ts-ignore
                            public getDBRef(): org.springframework.data.mongodb.core.mapping.DBRef
                            // @ts-ignore
                            public isLanguageProperty(): boolean
                            // @ts-ignore
                            public isExplicitLanguageProperty(): boolean
                            // @ts-ignore
                            public isTextScoreProperty(): boolean
                        }
                    }
                }
            }
        }
    }
}
