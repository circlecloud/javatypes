declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * A {@link DbRefResolver} that resolves {@link org.springframework.data.mongodb.core.mapping.DBRef}s by delegating to a
                         * {@link DbRefResolverCallback} than is able to generate lazy loading proxies.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.4
                         */
                        // @ts-ignore
                        class DefaultDbRefResolver extends java.lang.Object implements org.springframework.data.mongodb.core.convert.DbRefResolver {
                            /**
                             * Creates a new {@link DefaultDbRefResolver} with the given {@link MongoDbFactory}.
                             * @param mongoDbFactory must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mongoDbFactory: org.springframework.data.mongodb.MongoDbFactory)
                            // @ts-ignore
                            public resolveDbRef(property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty, dbref: DBRef, callback: org.springframework.data.mongodb.core.convert.DbRefResolverCallback, handler: org.springframework.data.mongodb.core.convert.DbRefProxyHandler): any
                            // @ts-ignore
                            public fetch(dbRef: DBRef): Document
                            // @ts-ignore
                            public bulkFetch(refs: java.util.List<DBRef> | Array<DBRef>): Array<Document>
                            /**
                             * Customization hook for obtaining the {@link MongoCollection} for a given {@link DBRef}.
                             * @param dbref must not be {#literal null}.
                             * @return the {#link MongoCollection} the given {@link DBRef} points to.
                             * @since 2.1
                             */
                            // @ts-ignore
                            getCollection(dbref: DBRef): object
                        }
                    }
                }
            }
        }
    }
}
