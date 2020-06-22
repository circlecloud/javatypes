declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * Special Querydsl based repository implementation that allows execution {@link Predicate}s in various forms.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @deprecated since 2.0. Querydsl execution is now linked via composable repositories and no longer requires to be a
                         *              subclass of {#link SimpleMongoRepository}. Use {@link QuerydslMongoPredicateExecutor} for standalone
                         *              Querydsl {@link Predicate} execution.
                         */
                        // @ts-ignore
                        class QuerydslMongoRepository<T, ID extends java.io.Serializable> extends org.springframework.data.mongodb.repository.support.QuerydslMongoPredicateExecutor<T> {
                            // @ts-ignore
                            constructor(entityInformation: org.springframework.data.mongodb.repository.query.MongoEntityInformation<T, any>, mongoOperations: org.springframework.data.mongodb.core.MongoOperations)
                            // @ts-ignore
                            constructor(entityInformation: org.springframework.data.mongodb.repository.query.MongoEntityInformation<T, any>, mongoOperations: org.springframework.data.mongodb.core.MongoOperations, resolver: EntityPathResolver)
                        }
                    }
                }
            }
        }
    }
}
