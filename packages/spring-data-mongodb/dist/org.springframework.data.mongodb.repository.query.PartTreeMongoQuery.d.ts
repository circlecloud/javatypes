declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * {@link RepositoryQuery} implementation for Mongo.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class PartTreeMongoQuery extends org.springframework.data.mongodb.repository.query.AbstractMongoQuery {
                            /**
                             * Creates a new {@link PartTreeMongoQuery} from the given {@link QueryMethod} and {@link MongoTemplate}.
                             * @param method must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: org.springframework.data.mongodb.repository.query.MongoQueryMethod, mongoOperations: org.springframework.data.mongodb.core.MongoOperations)
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
