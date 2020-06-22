declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * A subclass of {@link QueryMapper} that retains type information on the mongo types.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class UpdateMapper extends org.springframework.data.mongodb.core.convert.QueryMapper {
                            /**
                             * Creates a new {@link UpdateMapper} using the given {@link MongoConverter}.
                             * @param converter must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(converter: org.springframework.data.mongodb.core.convert.MongoConverter)
                            // @ts-ignore
                            public getMappedObject(query: Bson, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): Document
                            /**
                             * Returns {@literal true} if the given {@link Document} is an update object that uses update operators.
                             * @param updateObj can be {#literal null}.
                             * @return {#literal true} if the given {@link Document} is an update object.
                             */
                            // @ts-ignore
                            public static isUpdateObject(updateObj: Document): boolean
                            /**
                             * Converts the given source object to a mongo type retaining the original type information of the source type on the
                             * mongo type.
                             * @see org.springframework.data.mongodb.core.convert.QueryMapper#delegateConvertToMongoType(java.lang.Object,
                             *       org.springframework.data.mongodb.core.mapping.MongoPersistentEntity)
                             */
                            // @ts-ignore
                            delegateConvertToMongoType(source: java.lang.Object | any, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): any
                            // @ts-ignore
                            getMappedObjectForField(field: org.springframework.data.mongodb.core.convert.QueryMapper.Field, rawValue: java.lang.Object | any): java.util.Map.Entry<java.lang.String | string, java.lang.Object | any>
                            // @ts-ignore
                            isAssociationConversionNecessary(documentField: org.springframework.data.mongodb.core.convert.QueryMapper.Field, value: java.lang.Object | any): boolean
                            // @ts-ignore
                            createPropertyField(entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>, key: java.lang.String | string, mappingContext: object): org.springframework.data.mongodb.core.convert.QueryMapper.Field
                        }
                    }
                }
            }
        }
    }
}
