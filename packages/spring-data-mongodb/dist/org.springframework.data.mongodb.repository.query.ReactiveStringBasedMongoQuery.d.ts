declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Query to use a plain JSON String to create the {@link Query} to actually execute.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        class ReactiveStringBasedMongoQuery extends org.springframework.data.mongodb.repository.query.AbstractReactiveMongoQuery {
                            /**
                             * Creates a new {@link ReactiveStringBasedMongoQuery} for the given {@link MongoQueryMethod} and
                             * {@link MongoOperations}.
                             * @param method must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             * @param expressionParser must not be {#literal null}.
                             * @param evaluationContextProvider must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: org.springframework.data.mongodb.repository.query.ReactiveMongoQueryMethod, mongoOperations: org.springframework.data.mongodb.core.ReactiveMongoOperations, expressionParser: SpelExpressionParser, evaluationContextProvider: QueryMethodEvaluationContextProvider)
                            /**
                             * Creates a new {@link ReactiveStringBasedMongoQuery} for the given {@link String}, {@link MongoQueryMethod},
                             * {@link MongoOperations}, {@link SpelExpressionParser} and {@link QueryMethodEvaluationContextProvider}.
                             * @param query must not be {#literal null}.
                             * @param method must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             * @param expressionParser must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(query: java.lang.String | string, method: org.springframework.data.mongodb.repository.query.ReactiveMongoQueryMethod, mongoOperations: org.springframework.data.mongodb.core.ReactiveMongoOperations, expressionParser: SpelExpressionParser, evaluationContextProvider: QueryMethodEvaluationContextProvider)
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
