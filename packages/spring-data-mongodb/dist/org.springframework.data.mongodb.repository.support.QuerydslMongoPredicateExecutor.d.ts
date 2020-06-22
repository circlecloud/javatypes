declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * MongoDB-specific {@link QuerydslPredicateExecutor} that allows execution {@link Predicate}s in various forms.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.0
                         */
                        // @ts-ignore
                        class QuerydslMongoPredicateExecutor<T> extends java.lang.Object {
                            /**
                             * Creates a new {@link QuerydslMongoPredicateExecutor} for the given {@link MongoEntityInformation} and
                             * {@link MongoOperations}. Uses the {@link SimpleEntityPathResolver} to create an {@link EntityPath} for the given
                             * domain class.
                             * @param entityInformation must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(entityInformation: org.springframework.data.mongodb.repository.query.MongoEntityInformation<T, any>, mongoOperations: org.springframework.data.mongodb.core.MongoOperations)
                            /**
                             * Creates a new {@link QuerydslMongoPredicateExecutor} for the given {@link MongoEntityInformation},
                             * {@link MongoOperations} and {@link EntityPathResolver}.
                             * @param entityInformation must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             * @param resolver must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(entityInformation: org.springframework.data.mongodb.repository.query.MongoEntityInformation<T, any>, mongoOperations: org.springframework.data.mongodb.core.MongoOperations, resolver: EntityPathResolver)
                            // @ts-ignore
                            public findOne(predicate: Predicate): java.util.Optional<T>
                            // @ts-ignore
                            public findAll(predicate: Predicate): Array<T>
                            // @ts-ignore
                            public findAll(predicate: Predicate, ...orders: object[]): Array<T>
                            // @ts-ignore
                            public findAll(predicate: Predicate, sort: Sort): Array<T>
                            // @ts-ignore
                            public findAll(...orders: object[]): java.lang.Iterable<T>
                            // @ts-ignore
                            public findAll(predicate: Predicate, pageable: Pageable): object
                            // @ts-ignore
                            public count(predicate: Predicate): number /*long*/
                            // @ts-ignore
                            public exists(predicate: Predicate): boolean
                        }
                    }
                }
            }
        }
    }
}
