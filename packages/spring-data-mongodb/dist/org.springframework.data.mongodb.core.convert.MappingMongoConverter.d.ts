declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * {@link MongoConverter} that uses a {@link MappingContext} to do sophisticated mapping of domain objects to
                         * {@link Document}.
                         * @author Oliver Gierke
                         * @author Jon Brisbin
                         * @author Patrik Wasik
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Jordi Llach
                         * @author Mark Paluch
                         * @author Heesu Jung
                         */
                        // @ts-ignore
                        class MappingMongoConverter extends org.springframework.data.mongodb.core.convert.AbstractMongoConverter {
                            /**
                             * Creates a new {@link MappingMongoConverter} given the new {@link DbRefResolver} and {@link MappingContext}.
                             * @param dbRefResolver must not be {#literal null}.
                             * @param mappingContext must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(dbRefResolver: org.springframework.data.mongodb.core.convert.DbRefResolver, mappingContext: object)
                            /**
                             * Creates a new {@link MappingMongoConverter} given the new {@link MongoDbFactory} and {@link MappingContext}.
                             * @deprecated use the constructor taking a {#link DbRefResolver} instead.
                             * @param mongoDbFactory must not be {#literal null}.
                             * @param mappingContext must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mongoDbFactory: org.springframework.data.mongodb.MongoDbFactory, mappingContext: object)
                            // @ts-ignore
                            static readonly LOGGER: Logger
                            // @ts-ignore
                            readonly mappingContext: object
                            // @ts-ignore
                            readonly idMapper: org.springframework.data.mongodb.core.convert.QueryMapper
                            // @ts-ignore
                            readonly dbRefResolver: org.springframework.data.mongodb.core.convert.DbRefResolver
                            // @ts-ignore
                            readonly dbRefProxyHandler: org.springframework.data.mongodb.core.convert.DefaultDbRefProxyHandler
                            // @ts-ignore
                            applicationContext: ApplicationContext
                            // @ts-ignore
                            typeMapper: org.springframework.data.mongodb.core.convert.MongoTypeMapper
                            // @ts-ignore
                            mapKeyDotReplacement: java.lang.String | string
                            /**
                             * Configures the {@link MongoTypeMapper} to be used to add type information to {@link Document}s created by the
                             * converter and how to lookup type information from {@link Document}s when reading them. Uses a
                             * {@link DefaultMongoTypeMapper} by default. Setting this to {@literal null} will reset the {@link TypeMapper} to the
                             * default one.
                             * @param typeMapper the typeMapper to set. Can be {#literal null}.
                             */
                            // @ts-ignore
                            public setTypeMapper(typeMapper: org.springframework.data.mongodb.core.convert.MongoTypeMapper): void
                            // @ts-ignore
                            public getTypeMapper(): org.springframework.data.mongodb.core.convert.MongoTypeMapper
                            /**
                             * Configure the characters dots potentially contained in a {@link Map} shall be replaced with. By default we don't do
                             * any translation but rather reject a {@link Map} with keys containing dots causing the conversion for the entire
                             * object to fail. If further customization of the translation is needed, have a look at
                             * {@link #potentiallyEscapeMapKey(String)} as well as {@link #potentiallyUnescapeMapKey(String)}.
                             * @param mapKeyDotReplacement the mapKeyDotReplacement to set. Can be {#literal null}.
                             */
                            // @ts-ignore
                            public setMapKeyDotReplacement(mapKeyDotReplacement: java.lang.String | string): void
                            // @ts-ignore
                            public getMappingContext(): object
                            // @ts-ignore
                            public setApplicationContext(applicationContext: ApplicationContext): void
                            // @ts-ignore
                            public read<S>(clazz: java.lang.Class<S>, bson: Bson): S
                            // @ts-ignore
                            read<S>(type: object, bson: Bson): S
                            // @ts-ignore
                            public toDBRef(object: java.lang.Object | any, referringProperty: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): DBRef
                            /**
                             * Root entry method into write conversion. Adds a type discriminator to the {@link Document}. Shouldn't be called for
                             * nested conversions.
                             * @see org.springframework.data.mongodb.core.convert.MongoWriter#write(java.lang.Object, com.mongodb.Document)
                             */
                            // @ts-ignore
                            public write(obj: java.lang.Object | any, bson: Bson): void
                            /**
                             * Internal write conversion method which should be used for nested invocations.
                             * @param obj
                             * @param bson
                             * @param typeHint
                             */
                            // @ts-ignore
                            writeInternal(obj: java.lang.Object | any, bson: Bson, typeHint: object): void
                            // @ts-ignore
                            writeInternal(obj: java.lang.Object | any, bson: Bson, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): void
                            // @ts-ignore
                            writePropertyInternal(obj: java.lang.Object | any, accessor: org.springframework.data.mongodb.core.convert.DocumentAccessor, prop: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): void
                            /**
                             * Writes the given {@link Collection} using the given {@link MongoPersistentProperty} information.
                             * @param collection must not be {#literal null}.
                             * @param property must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            createCollection(collection: java.util.Collection<any> | Array<any>, property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): Array<java.lang.Object | any>
                            /**
                             * Writes the given {@link Map} using the given {@link MongoPersistentProperty} information.
                             * @param map must not {#literal null}.
                             * @param property must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            createMap(map: java.util.Map<java.lang.Object | any, java.lang.Object | any>, property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): Bson
                            /**
                             * Writes the given {@link Map} to the given {@link Document} considering the given {@link TypeInformation}.
                             * @param obj must not be {#literal null}.
                             * @param bson must not be {#literal null}.
                             * @param propertyType must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            writeMapInternal(obj: java.util.Map<java.lang.Object | any, java.lang.Object | any>, bson: Bson, propertyType: object): Bson
                            /**
                             * Potentially replaces dots in the given map key with the configured map key replacement if configured or aborts
                             * conversion if none is configured.
                             * @see #setMapKeyDotReplacement(String)
                             * @param source
                             * @return 
                             */
                            // @ts-ignore
                            potentiallyEscapeMapKey(source: java.lang.String | string): string
                            /**
                             * Translates the map key replacements in the given key just read with a dot in case a map key replacement has been
                             * configured.
                             * @param source
                             * @return 
                             */
                            // @ts-ignore
                            potentiallyUnescapeMapKey(source: java.lang.String | string): string
                            /**
                             * Adds custom type information to the given {@link Document} if necessary. That is if the value is not the same as
                             * the one given. This is usually the case if you store a subtype of the actual declared type of the property.
                             * @param type
                             * @param value must not be {#literal null}.
                             * @param bson must not be {#literal null}.
                             */
                            // @ts-ignore
                            addCustomTypeKeyIfNecessary(type: object, value: java.lang.Object | any, bson: Bson): void
                            // @ts-ignore
                            createDBRef(target: java.lang.Object | any, property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): DBRef
                            // @ts-ignore
                            public getValueInternal(prop: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty, bson: Bson, evaluator: SpELExpressionEvaluator, path: org.springframework.data.mongodb.core.convert.ObjectPath): any
                            /**
                             * Reads the given {@link Document} into a {@link Map}. will recursively resolve nested {@link Map}s as well.
                             * @param type the {#link Map} {@link TypeInformation} to be used to unmarshall this {@link Document}.
                             * @param bson must not be {#literal null}
                             * @param path must not be {#literal null}
                             * @return 
                             */
                            // @ts-ignore
                            readMap(type: object, bson: Bson, path: org.springframework.data.mongodb.core.convert.ObjectPath): java.util.Map<java.lang.Object | any, java.lang.Object | any>
                            // @ts-ignore
                            public convertToMongoType(obj: java.lang.Object | any, typeInformation: object): any
                            // @ts-ignore
                            public maybeConvertList(source: java.lang.Iterable<any>, typeInformation: object): Array<java.lang.Object | any>
                            /**
                             * Create a new {@link MappingMongoConverter} using the given {@link MongoDbFactory} when loading {@link DBRef}.
                             * @return new instance of {#link MappingMongoConverter}. Never {@literal null}.
                             * @since 2.1.6
                             */
                            // @ts-ignore
                            public with(dbFactory: org.springframework.data.mongodb.MongoDbFactory): org.springframework.data.mongodb.core.convert.MappingMongoConverter
                        }
                    }
                }
            }
        }
    }
}
