declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * A helper class to encapsulate any modifications of a Query object before it gets submitted to the database.
                         * @author Jon Brisbin
                         * @author Oliver Gierke
                         * @author Patryk Wasik
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class QueryMapper extends java.lang.Object {
                            /**
                             * Creates a new {@link QueryMapper} with the given {@link MongoConverter}.
                             * @param converter must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(converter: org.springframework.data.mongodb.core.convert.MongoConverter)
                            // @ts-ignore
                            public getMappedObject(query: Bson, entity: java.util.Optional<any>): Document
                            /**
                             * Replaces the property keys used in the given {@link Document} with the appropriate keys by using the
                             * {@link PersistentEntity} metadata.
                             * @param query must not be {#literal null}.
                             * @param entity can be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public getMappedObject(query: Bson, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): Document
                            /**
                             * Maps fields used for sorting to the {@link MongoPersistentEntity}s properties. <br />
                             * Also converts properties to their {@code $meta} representation if present.
                             * @param sortObject
                             * @param entity
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public getMappedSort(sortObject: Document, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): Document
                            /**
                             * Maps fields to retrieve to the {@link MongoPersistentEntity}s properties. <br />
                             * Also converts and potentially adds missing property {@code $meta} representation.
                             * @param fieldsObject must not be {#literal null}.
                             * @param entity can be {#litearl null}.
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public getMappedFields(fieldsObject: Document, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): Document
                            /**
                             * Extracts the mapped object value for given field out of rawValue taking nested {@link Keyword}s into account
                             * @param field
                             * @param rawValue
                             * @return 
                             */
                            // @ts-ignore
                            getMappedObjectForField(field: org.springframework.data.mongodb.core.convert.QueryMapper.Field, rawValue: java.lang.Object | any): java.util.Map.Entry<java.lang.String | string, java.lang.Object | any>
                            /**
                             * @param entity
                             * @param key
                             * @param mappingContext
                             * @return 
                             */
                            // @ts-ignore
                            createPropertyField(entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>, key: java.lang.String | string, mappingContext: object): org.springframework.data.mongodb.core.convert.QueryMapper.Field
                            /**
                             * Returns the given {@link Document} representing a keyword by mapping the keyword's value.
                             * @param keyword the {#link Document} representing a keyword (e.g. {@code $ne : … } )
                             * @param entity
                             * @return 
                             */
                            // @ts-ignore
                            getMappedKeyword(keyword: org.springframework.data.mongodb.core.convert.QueryMapper.Keyword, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): Document
                            /**
                             * Returns the mapped keyword considered defining a criteria for the given property.
                             * @param property
                             * @param keyword
                             * @return 
                             */
                            // @ts-ignore
                            getMappedKeyword(property: org.springframework.data.mongodb.core.convert.QueryMapper.Field, keyword: org.springframework.data.mongodb.core.convert.QueryMapper.Keyword): Document
                            /**
                             * Returns the mapped value for the given source object assuming it's a value for the given
                             * {@link MongoPersistentProperty}.
                             * @param documentField the key the value will be bound to eventually
                             * @param value the source object to be mapped
                             * @return 
                             */
                            // @ts-ignore
                            getMappedValue(documentField: org.springframework.data.mongodb.core.convert.QueryMapper.Field, value: java.lang.Object | any): any
                            /**
                             * Returns whether the given {@link Field} represents an association reference that together with the given value
                             * requires conversion to a {@link org.springframework.data.mongodb.core.mapping.DBRef} object. We check whether the
                             * type of the given value is compatible with the type of the given document field in order to deal with potential
                             * query field exclusions, since MongoDB uses the {@code int} {@literal 0} as an indicator for an excluded field.
                             * @param documentField must not be {#literal null}.
                             * @param value
                             * @return 
                             */
                            // @ts-ignore
                            isAssociationConversionNecessary(documentField: org.springframework.data.mongodb.core.convert.QueryMapper.Field, value: java.lang.Object | any): boolean
                            /**
                             * Retriggers mapping if the given source is a {@link Document} or simply invokes the
                             * @param source
                             * @param entity
                             * @return 
                             */
                            // @ts-ignore
                            convertSimpleOrDocument(source: java.lang.Object | any, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): any
                            /**
                             * Converts the given source Object to a mongo type with the type information of the original source type omitted.
                             * Subclasses may overwrite this method to retain the type information of the source type on the resulting mongo type.
                             * @param source
                             * @param entity
                             * @return the converted mongo type or null if source is null
                             */
                            // @ts-ignore
                            delegateConvertToMongoType(source: java.lang.Object | any, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): any
                            // @ts-ignore
                            convertAssociation(source: java.lang.Object | any, field: org.springframework.data.mongodb.core.convert.QueryMapper.Field): any
                            /**
                             * Converts the given source assuming it's actually an association to another object.
                             * @param source
                             * @param property
                             * @return 
                             */
                            // @ts-ignore
                            convertAssociation(source: java.lang.Object | any, property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): any
                            /**
                             * Checks whether the given value is a {@link Document}.
                             * @param value can be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            isDocument(value: java.lang.Object | any): boolean
                            /**
                             * Checks whether the given value is a {@link DBObject}.
                             * @param value can be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            isDBObject(value: java.lang.Object | any): boolean
                            /**
                             * Creates a new {@link Entry} for the given {@link Field} with the given value.
                             * @param field must not be {#literal null}.
                             * @param value can be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            createMapEntry(field: org.springframework.data.mongodb.core.convert.QueryMapper.Field, value: java.lang.Object | any): java.util.Map.Entry<java.lang.String | string, java.lang.Object | any>
                            /**
                             * Converts the given raw id value into either {@link ObjectId} or {@link String}.
                             * @param id
                             * @return 
                             */
                            // @ts-ignore
                            public convertId(id: java.lang.Object | any): any
                            /**
                             * Returns whether the given {@link Object} is a keyword, i.e. if it's a {@link Document} with a keyword key.
                             * @param candidate
                             * @return 
                             */
                            // @ts-ignore
                            isNestedKeyword(candidate: java.lang.Object | any): boolean
                            /**
                             * Returns whether the given {@link String} is the type key.
                             * @param key
                             * @return 
                             * @see MongoTypeMapper#isTypeKey(String)
                             * @since 2.2
                             */
                            // @ts-ignore
                            isTypeKey(key: java.lang.String | string): boolean
                            /**
                             * Returns whether the given {@link String} is a MongoDB keyword. The default implementation will check against the
                             * set of registered keywords returned by {@link #getKeywords()}.
                             * @param candidate
                             * @return 
                             */
                            // @ts-ignore
                            isKeyword(candidate: java.lang.String | string): boolean
                            // @ts-ignore
                            public getMappingContext(): object
                        }
                    }
                }
            }
        }
    }
}
