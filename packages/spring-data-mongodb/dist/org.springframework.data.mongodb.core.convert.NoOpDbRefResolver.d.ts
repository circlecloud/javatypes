declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * No-Operation {@link org.springframework.data.mongodb.core.mapping.DBRef} resolver throwing
                         * {@link UnsupportedOperationException} when attempting to resolve database references.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class NoOpDbRefResolver extends java.lang.Enum<org.springframework.data.mongodb.core.convert.NoOpDbRefResolver> implements org.springframework.data.mongodb.core.convert.DbRefResolver {
                            // @ts-ignore
                            public static readonly INSTANCE: org.springframework.data.mongodb.core.convert.NoOpDbRefResolver
                            // @ts-ignore
                            public static values(): org.springframework.data.mongodb.core.convert.NoOpDbRefResolver[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.convert.NoOpDbRefResolver
                            // @ts-ignore
                            public resolveDbRef(property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty, dbref: DBRef, callback: org.springframework.data.mongodb.core.convert.DbRefResolverCallback, proxyHandler: org.springframework.data.mongodb.core.convert.DbRefProxyHandler): any
                            // @ts-ignore
                            public fetch(dbRef: DBRef): Document
                            // @ts-ignore
                            public bulkFetch(dbRefs: java.util.List<DBRef> | Array<DBRef>): Array<Document>
                        }
                    }
                }
            }
        }
    }
}
