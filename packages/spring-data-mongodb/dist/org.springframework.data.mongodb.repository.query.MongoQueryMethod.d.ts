declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Mongo specific implementation of {@link QueryMethod}.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MongoQueryMethod extends QueryMethod {
                            /**
                             * Creates a new {@link MongoQueryMethod} from the given {@link Method}.
                             * @param method must not be {#literal null}.
                             * @param metadata must not be {#literal null}.
                             * @param projectionFactory must not be {#literal null}.
                             * @param mappingContext must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: java.lang.reflect.Method, metadata: RepositoryMetadata, projectionFactory: ProjectionFactory, mappingContext: object)
                            // @ts-ignore
                            createParameters(method: java.lang.reflect.Method): org.springframework.data.mongodb.repository.query.MongoParameters
                            /**
                             * Returns whether the method has an annotated query.
                             * @return 
                             */
                            // @ts-ignore
                            public hasAnnotatedQuery(): boolean
                            // @ts-ignore
                            public getEntityInformation(): org.springframework.data.mongodb.repository.query.MongoEntityMetadata<any>
                            // @ts-ignore
                            public getParameters(): org.springframework.data.mongodb.repository.query.MongoParameters
                            /**
                             * Returns whether the query is a geo near query.
                             * @return 
                             */
                            // @ts-ignore
                            public isGeoNearQuery(): boolean
                            /**
                             * @return return true if {#link Meta} annotation is available.
                             * @since 1.6
                             */
                            // @ts-ignore
                            public hasQueryMetaAttributes(): boolean
                            /**
                             * Returns the {@link org.springframework.data.mongodb.core.query.Meta} attributes to be applied.
                             * @return never {#literal null}.
                             * @since 1.6
                             */
                            // @ts-ignore
                            public getQueryMetaAttributes(): org.springframework.data.mongodb.core.query.Meta
                            /**
                             * Check if the query method is decorated with an non empty {@link Query#sort()}.
                             * @return true if method annotated with {#link Query} having an non empty sort attribute.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public hasAnnotatedSort(): boolean
                            /**
                             * Get the sort value, used as default, extracted from the {@link Query} annotation.
                             * @return the {#link Query#sort()} value.
                             * @throws IllegalStateException if method not annotated with {#link Query}. Make sure to check
                             *            {@link #hasAnnotatedQuery()} first.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public getAnnotatedSort(): string
                        }
                    }
                }
            }
        }
    }
}
