declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        namespace QueryMapper {
                            /**
                             * Extension of {@link Field} to be backed with mapping metadata.
                             * @author Oliver Gierke
                             * @author Thomas Darimont
                             */
                            // @ts-ignore
                            class MetadataBackedField extends org.springframework.data.mongodb.core.convert.QueryMapper.Field {
                                /**
                                 * Creates a new {@link MetadataBackedField} with the given name, {@link MongoPersistentEntity} and
                                 * {@link MappingContext}.
                                 * @param name must not be {#literal null} or empty.
                                 * @param entity must not be {#literal null}.
                                 * @param context must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(name: java.lang.String | string, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>, context: object)
                                /**
                                 * Creates a new {@link MetadataBackedField} with the given name, {@link MongoPersistentEntity} and
                                 * {@link MappingContext} with the given {@link MongoPersistentProperty}.
                                 * @param name must not be {#literal null} or empty.
                                 * @param entity must not be {#literal null}.
                                 * @param context must not be {#literal null}.
                                 * @param property may be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(name: java.lang.String | string, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>, context: object, property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty)
                                // @ts-ignore
                                public with(name: java.lang.String | string): org.springframework.data.mongodb.core.convert.QueryMapper.MetadataBackedField
                                // @ts-ignore
                                public isIdField(): boolean
                                // @ts-ignore
                                public getProperty(): org.springframework.data.mongodb.core.mapping.MongoPersistentProperty
                                // @ts-ignore
                                public getPropertyEntity(): org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>
                                // @ts-ignore
                                public isAssociation(): boolean
                                // @ts-ignore
                                public getAssociation(): object
                                // @ts-ignore
                                public getMappedKey(): string
                                // @ts-ignore
                                getPath(): object
                                /**
                                 * Return the {@link Converter} to be used to created the mapped key. Default implementation will use
                                 * {@link PropertyToFieldNameConverter}.
                                 * @return 
                                 */
                                // @ts-ignore
                                getPropertyConverter(): object
                                /**
                                 * Return the {@link Converter} to use for creating the mapped key of an association. Default implementation is
                                 * {@link AssociationConverter}.
                                 * @return 
                                 * @since 1.7
                                 */
                                // @ts-ignore
                                getAssociationConverter(): object
                                // @ts-ignore
                                public getTypeHint(): object
                            }
                        }
                    }
                }
            }
        }
    }
}
