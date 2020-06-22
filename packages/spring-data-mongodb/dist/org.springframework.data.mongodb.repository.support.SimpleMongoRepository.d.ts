declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * Repository base implementation for Mongo.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class SimpleMongoRepository<T, ID> extends java.lang.Object implements org.springframework.data.mongodb.repository.MongoRepository<T, ID> {
                            /**
                             * Creates a new {@link SimpleMongoRepository} for the given {@link MongoEntityInformation} and {@link MongoTemplate}.
                             * @param metadata must not be {#literal null}.
                             * @param mongoOperations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(metadata: org.springframework.data.mongodb.repository.query.MongoEntityInformation<T, ID>, mongoOperations: org.springframework.data.mongodb.core.MongoOperations)
                            // @ts-ignore
                            public save<S extends T>(entity: S): S
                            // @ts-ignore
                            public saveAll<S extends T>(entities: java.lang.Iterable<S>): Array<S>
                            // @ts-ignore
                            public findById(id: ID): java.util.Optional<T>
                            // @ts-ignore
                            public existsById(id: ID): boolean
                            // @ts-ignore
                            public count(): number /*long*/
                            // @ts-ignore
                            public deleteById(id: ID): void
                            // @ts-ignore
                            public delete(entity: T): void
                            // @ts-ignore
                            public deleteAll(entities: java.lang.Iterable<any>): void
                            // @ts-ignore
                            public deleteAll(): void
                            // @ts-ignore
                            public findAll(): Array<T>
                            // @ts-ignore
                            public findAllById(ids: java.lang.Iterable<ID>): java.lang.Iterable<T>
                            // @ts-ignore
                            public findAll(pageable: Pageable): object
                            // @ts-ignore
                            public findAll(sort: Sort): Array<T>
                            // @ts-ignore
                            public insert<S extends T>(entity: S): S
                            // @ts-ignore
                            public insert<S extends T>(entities: java.lang.Iterable<S>): Array<S>
                            // @ts-ignore
                            public findAll<S extends T>(example: object, pageable: Pageable): object
                            // @ts-ignore
                            public findAll<S extends T>(example: object, sort: Sort): Array<S>
                            // @ts-ignore
                            public findAll<S extends T>(example: object): Array<S>
                            // @ts-ignore
                            public findOne<S extends T>(example: object): java.util.Optional<S>
                            // @ts-ignore
                            public count<S extends T>(example: object): number /*long*/
                            // @ts-ignore
                            public exists<S extends T>(example: object): boolean
                        }
                    }
                }
            }
        }
    }
}
