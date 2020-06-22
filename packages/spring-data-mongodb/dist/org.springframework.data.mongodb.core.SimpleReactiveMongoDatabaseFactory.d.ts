declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Factory to create {@link MongoDatabase} instances from a {@link MongoClient} instance.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    class SimpleReactiveMongoDatabaseFactory extends java.lang.Object implements org.springframework.data.mongodb.ReactiveMongoDatabaseFactory {
                        /**
                         * Creates a new {@link SimpleReactiveMongoDatabaseFactory} instance from the given {@link ConnectionString}.
                         * @param connectionString must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(connectionString: ConnectionString)
                        /**
                         * Creates a new {@link SimpleReactiveMongoDatabaseFactory} instance from the given {@link MongoClient}.
                         * @param mongoClient must not be {#literal null}.
                         * @param databaseName must not be {#literal null}.
                         * @since 1.7
                         */
                        // @ts-ignore
                        constructor(mongoClient: MongoClient, databaseName: java.lang.String | string)
                        /**
                         * Configures the {@link WriteConcern} to be used on the {@link MongoDatabase} instance being created.
                         * @param writeConcern the writeConcern to set
                         */
                        // @ts-ignore
                        public setWriteConcern(writeConcern: WriteConcern): void
                        // @ts-ignore
                        public getMongoDatabase(): MongoDatabase
                        // @ts-ignore
                        public getMongoDatabase(dbName: java.lang.String | string): MongoDatabase
                        /**
                         * Clean up the Mongo instance if it was created by the factory itself.
                         * @see DisposableBean#destroy()
                         */
                        // @ts-ignore
                        public destroy(): void
                        // @ts-ignore
                        public getExceptionTranslator(): PersistenceExceptionTranslator
                        // @ts-ignore
                        public getSession(options: ClientSessionOptions): object
                        // @ts-ignore
                        public withSession(session: ClientSession): org.springframework.data.mongodb.ReactiveMongoDatabaseFactory
                    }
                }
            }
        }
    }
}
