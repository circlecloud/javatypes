declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * Reactive repository base implementation for Mongo.
                         * @author Mark Paluch
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Ruben J Garcia
                         * @since 2.0
                         */
                        // @ts-ignore
                        class SimpleReactiveMongoRepository<T, ID extends java.io.Serializable> extends java.lang.Object implements org.springframework.data.mongodb.repository.ReactiveMongoRepository<T, ID> {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public findById(id: ID): object
                            // @ts-ignore
                            public findById(publisher: object): object
                            // @ts-ignore
                            public findOne<S extends T>(example: object): object
                            // @ts-ignore
                            public existsById(id: ID): object
                            // @ts-ignore
                            public existsById(publisher: object): object
                            // @ts-ignore
                            public exists<S extends T>(example: object): object
                            // @ts-ignore
                            public findAll(): object
                            // @ts-ignore
                            public findAllById(ids: java.lang.Iterable<ID>): object
                            // @ts-ignore
                            public findAllById(ids: object): object
                            // @ts-ignore
                            public findAll(sort: Sort): object
                            // @ts-ignore
                            public findAll<S extends T>(example: object, sort: Sort): object
                            // @ts-ignore
                            public findAll<S extends T>(example: object): object
                            // @ts-ignore
                            public count(): object
                            // @ts-ignore
                            public count<S extends T>(example: object): object
                            // @ts-ignore
                            public insert<S extends T>(entity: S): object
                            // @ts-ignore
                            public insert<S extends T>(entities: java.lang.Iterable<S>): object
                            // @ts-ignore
                            public insert<S extends T>(entities: object): object
                            // @ts-ignore
                            public save<S extends T>(entity: S): object
                            // @ts-ignore
                            public saveAll<S extends T>(entities: java.lang.Iterable<S>): object
                            // @ts-ignore
                            public saveAll<S extends T>(entityStream: object): object
                            // @ts-ignore
                            public deleteById(id: ID): object
                            // @ts-ignore
                            public deleteById(publisher: object): object
                            // @ts-ignore
                            public delete(entity: T): object
                            // @ts-ignore
                            public deleteAll(entities: java.lang.Iterable<any>): object
                            // @ts-ignore
                            public deleteAll(entityStream: object): object
                            // @ts-ignore
                            public deleteAll(): object
                        }
                    }
                }
            }
        }
    }
}
