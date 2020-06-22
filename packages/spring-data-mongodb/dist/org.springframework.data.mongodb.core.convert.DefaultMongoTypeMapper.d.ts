declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Default implementation of {@link MongoTypeMapper} allowing configuration of the key to lookup and store type
                         * information in {@link Document}. The key defaults to {@link #DEFAULT_TYPE_KEY}. Actual type-to-{@link String}
                         * conversion and back is done in {@link #getTypeString(TypeInformation)} or {@link #getTypeInformation(String)}
                         * respectively.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class DefaultMongoTypeMapper extends java.lang.Object implements org.springframework.data.mongodb.core.convert.MongoTypeMapper {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(typeKey: java.lang.String | string)
                            // @ts-ignore
                            constructor(typeKey: java.lang.String | string, mappingContext: object)
                            // @ts-ignore
                            public static readonly DEFAULT_TYPE_KEY: java.lang.String | string
                            // @ts-ignore
                            public isTypeKey(key: java.lang.String | string): boolean
                            // @ts-ignore
                            public writeTypeRestrictions(result: Document, restrictedTypes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): void
                            // @ts-ignore
                            getFallbackTypeFor(source: Bson): object
                        }
                    }
                }
            }
        }
    }
}
