declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Reactive specific implementation of {@link MongoQueryMethod}.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        class ReactiveMongoQueryMethod extends org.springframework.data.mongodb.repository.query.MongoQueryMethod {
                            /**
                             * Creates a new {@link ReactiveMongoQueryMethod} from the given {@link Method}.
                             * @param method must not be {#literal null}.
                             * @param metadata must not be {#literal null}.
                             * @param projectionFactory must not be {#literal null}.
                             * @param mappingContext must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: java.lang.reflect.Method, metadata: RepositoryMetadata, projectionFactory: ProjectionFactory, mappingContext: object)
                            // @ts-ignore
                            createParameters(method: java.lang.reflect.Method): org.springframework.data.mongodb.repository.query.MongoParameters
                            // @ts-ignore
                            public isCollectionQuery(): boolean
                            // @ts-ignore
                            public isGeoNearQuery(): boolean
                            // @ts-ignore
                            public isModifyingQuery(): boolean
                            // @ts-ignore
                            public isQueryForEntity(): boolean
                            // @ts-ignore
                            public isStreamQuery(): boolean
                            /**
                             * Check if the given {@link org.springframework.data.repository.query.QueryMethod} receives a reactive parameter
                             * wrapper as one of its parameters.
                             * @return 
                             */
                            // @ts-ignore
                            public hasReactiveWrapperParameter(): boolean
                        }
                    }
                }
            }
        }
    }
}
