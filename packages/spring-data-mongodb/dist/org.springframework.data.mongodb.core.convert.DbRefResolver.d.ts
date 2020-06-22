declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Used to resolve associations annotated with {@link org.springframework.data.mongodb.core.mapping.DBRef}.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.4
                         */
                        // @ts-ignore
                        interface DbRefResolver {
                            /**
                             * Resolves the given {@link DBRef} into an object of the given {@link MongoPersistentProperty}'s type. The method
                             * might return a proxy object for the {@link DBRef} or resolve it immediately. In both cases the
                             * {@link DbRefResolverCallback} will be used to obtain the actual backing object.
                             * @param property will never be {#literal null}.
                             * @param dbref the {#link DBRef} to resolve.
                             * @param callback will never be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            resolveDbRef(property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty, dbref: DBRef, callback: org.springframework.data.mongodb.core.convert.DbRefResolverCallback, proxyHandler: org.springframework.data.mongodb.core.convert.DbRefProxyHandler): any
                            /**
                             * Creates a {@link DBRef} instance for the given {@link org.springframework.data.mongodb.core.mapping.DBRef}
                             * annotation, {@link MongoPersistentEntity} and id.
                             * @param annotation will never be {#literal null}.
                             * @param entity will never be {#literal null}.
                             * @param id will never be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            createDbRef(annotation: org.springframework.data.mongodb.core.mapping.DBRef, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>, id: java.lang.Object | any): DBRef
                            /**
                             * Actually loads the {@link DBRef} from the datasource.
                             * @param dbRef must not be {#literal null}.
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            fetch(dbRef: DBRef): Document
                            /**
                             * Loads a given {@link List} of {@link DBRef}s from the datasource in one batch. The resulting {@link List} of
                             * {@link Document} will reflect the ordering of the {@link DBRef} passed in.<br />
                             * The {@link DBRef} elements in the list must not reference different collections.
                             * @param dbRefs must not be {#literal null}.
                             * @return never {#literal null}.
                             * @throws InvalidDataAccessApiUsageException in case not all {#link DBRef} target the same collection.
                             * @since 1.10
                             */
                            // @ts-ignore
                            bulkFetch(dbRefs: java.util.List<DBRef> | Array<DBRef>): Array<Document>
                        }
                    }
                }
            }
        }
    }
}
