declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Base class for reactive {@link RepositoryQuery} implementations for MongoDB.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        abstract class AbstractReactiveMongoQuery extends java.lang.Object {
                            /**
                             * Creates a new {@link AbstractReactiveMongoQuery} from the given {@link MongoQueryMethod} and
                             * {@link MongoOperations}.
                             * @param method must not be {#literal null}.
                             * @param operations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: org.springframework.data.mongodb.repository.query.ReactiveMongoQueryMethod, operations: org.springframework.data.mongodb.core.ReactiveMongoOperations)
                            // @ts-ignore
                            public getQueryMethod(): org.springframework.data.mongodb.repository.query.MongoQueryMethod
                            // @ts-ignore
                            public execute(parameters: java.lang.Object[] | any[]): any
                            /**
                             * Creates a {@link Query} instance using the given {@link ConvertingParameterAccessor}. Will delegate to
                             * {@link #createQuery(ConvertingParameterAccessor)} by default but allows customization of the count query to be
                             * triggered.
                             * @param accessor must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            createCountQuery(accessor: org.springframework.data.mongodb.repository.query.ConvertingParameterAccessor): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Creates a {@link Query} instance using the given {@link ParameterAccessor}
                             * @param accessor must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            abstract createQuery(accessor: org.springframework.data.mongodb.repository.query.ConvertingParameterAccessor): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Returns whether the query should get a count projection applied.
                             * @return 
                             */
                            // @ts-ignore
                            abstract isCountQuery(): boolean
                            /**
                             * Returns whether the query should get an exists projection applied.
                             * @return 
                             * @since 2.0.9
                             */
                            // @ts-ignore
                            abstract isExistsQuery(): boolean
                            /**
                             * Return weather the query should delete matching documents.
                             * @return 
                             * @since 1.5
                             */
                            // @ts-ignore
                            abstract isDeleteQuery(): boolean
                            /**
                             * Return whether the query has an explicit limit set.
                             * @return 
                             * @since 2.0.4
                             */
                            // @ts-ignore
                            abstract isLimiting(): boolean
                        }
                    }
                }
            }
        }
    }
}
