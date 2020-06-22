declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Reactive PartTree {@link RepositoryQuery} implementation for Mongo.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        class ReactivePartTreeMongoQuery extends org.springframework.data.mongodb.repository.query.AbstractReactiveMongoQuery {
                            /**
                             * Creates a new {@link ReactivePartTreeMongoQuery} from the given {@link QueryMethod} and {@link MongoTemplate}.
                             * @param method must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: org.springframework.data.mongodb.repository.query.ReactiveMongoQueryMethod, mongoOperations: org.springframework.data.mongodb.core.ReactiveMongoOperations)
                            /**
                             * Return the {@link PartTree} backing the query.
                             * @return the tree
                             */
                            // @ts-ignore
                            public getTree(): PartTree
                            // @ts-ignore
                            createQuery(accessor: org.springframework.data.mongodb.repository.query.ConvertingParameterAccessor): org.springframework.data.mongodb.core.query.Query
                            // @ts-ignore
                            createCountQuery(accessor: org.springframework.data.mongodb.repository.query.ConvertingParameterAccessor): org.springframework.data.mongodb.core.query.Query
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
