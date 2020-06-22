declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * Spring Data specific simple {@link com.querydsl.core.Fetchable} {@link com.querydsl.core.SimpleQuery Query}
                         * implementation.
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class SpringDataMongodbQuery<T> extends org.springframework.data.mongodb.repository.support.QuerydslFetchableMongodbQuery<T, org.springframework.data.mongodb.repository.support.SpringDataMongodbQuery<T>> {
                            /**
                             * Creates a new {@link SpringDataMongodbQuery}.
                             * @param operations must not be {#literal null}.
                             * @param type must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(operations: org.springframework.data.mongodb.core.MongoOperations, type: java.lang.Class<any>)
                            /**
                             * Creates a new {@link SpringDataMongodbQuery} to query the given collection.
                             * @param operations must not be {#literal null}.
                             * @param type must not be {#literal null}.
                             * @param collectionName must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(operations: org.springframework.data.mongodb.core.MongoOperations, type: java.lang.Class<any>, collectionName: java.lang.String | string)
                        }
                    }
                }
            }
        }
    }
}
