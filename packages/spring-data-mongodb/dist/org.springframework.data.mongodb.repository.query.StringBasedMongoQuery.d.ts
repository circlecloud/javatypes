declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Query to use a plain JSON String to create the {@link Query} to actually execute.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class StringBasedMongoQuery extends org.springframework.data.mongodb.repository.query.AbstractMongoQuery {
                            /**
                             * Creates a new {@link StringBasedMongoQuery} for the given {@link MongoQueryMethod}, {@link MongoOperations},
                             * {@link SpelExpressionParser} and {@link QueryMethodEvaluationContextProvider}.
                             * @param method must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             * @param expressionParser must not be {#literal null}.
                             * @param evaluationContextProvider must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: org.springframework.data.mongodb.repository.query.MongoQueryMethod, mongoOperations: org.springframework.data.mongodb.core.MongoOperations, expressionParser: SpelExpressionParser, evaluationContextProvider: QueryMethodEvaluationContextProvider)
                            /**
                             * Creates a new {@link StringBasedMongoQuery} for the given {@link String}, {@link MongoQueryMethod},
                             * {@link MongoOperations}, {@link SpelExpressionParser} and {@link QueryMethodEvaluationContextProvider}.
                             * @param query must not be {#literal null}.
                             * @param method must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             * @param expressionParser must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(query: java.lang.String | string, method: org.springframework.data.mongodb.repository.query.MongoQueryMethod, mongoOperations: org.springframework.data.mongodb.core.MongoOperations, expressionParser: SpelExpressionParser, evaluationContextProvider: QueryMethodEvaluationContextProvider)
                            // @ts-ignore
                            createQuery(accessor: org.springframework.data.mongodb.repository.query.ConvertingParameterAccessor): org.springframework.data.mongodb.core.query.Query
                            // @ts-ignore
                            isCountQuery(): boolean
                            // @ts-ignore
                            isExistsQuery(): boolean
                            // @ts-ignore
                            isDeleteQuery(): boolean
                            // @ts-ignore
                            isLimiting(): boolean
                        }
                    }
                }
            }
        }
    }
}
