declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * Base class to create repository implementations based on Querydsl.
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        abstract class QuerydslRepositorySupport extends java.lang.Object {
                            /**
                             * Creates a new {@link QuerydslRepositorySupport} for the given {@link MongoOperations}.
                             * @param operations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(operations: org.springframework.data.mongodb.core.MongoOperations)
                            /**
                             * Returns a {@link SpringDataMongodbQuery} for the given {@link EntityPath}. The collection being queried is derived from the
                             * entity metadata.
                             * @param path
                             * @return 
                             */
                            // @ts-ignore
                            from<T>(path: object): org.springframework.data.mongodb.repository.support.SpringDataMongodbQuery<T>
                            /**
                             * Returns a {@link SpringDataMongodbQuery} for the given {@link EntityPath} querying the given collection.
                             * @param path must not be {#literal null}
                             * @param collection must not be blank or {#literal null}
                             * @return 
                             */
                            // @ts-ignore
                            from<T>(path: object, collection: java.lang.String | string): org.springframework.data.mongodb.repository.support.SpringDataMongodbQuery<T>
                        }
                    }
                }
            }
        }
    }
}
