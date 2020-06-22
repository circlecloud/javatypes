declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Common base class for usage with both {@link com.mongodb.client.MongoClients} and {@link com.mongodb.MongoClient}
                     * defining common properties such as database name and exception translator.
                     * <p/>
                     * Not intended to be used directly.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @param <C> Client type.
                     * @since 2.1
                     * @see SimpleMongoDbFactory
                     * @see SimpleMongoClientDbFactory
                     */
                    // @ts-ignore
                    abstract class MongoDbFactorySupport<C> extends java.lang.Object implements org.springframework.data.mongodb.MongoDbFactory {
                        /**
                         * Create a new {@link MongoDbFactorySupport} object given {@code mongoClient}, {@code databaseName},
                         * {@code mongoInstanceCreated} and {@link PersistenceExceptionTranslator}.
                         * @param mongoClient must not be {#literal null}.
                         * @param databaseName must not be {#literal null} or empty.
                         * @param mongoInstanceCreated {#literal true} if the client instance was created by a subclass of
                         *           {@link MongoDbFactorySupport} to close the client on {@link #destroy()}.
                         * @param exceptionTranslator must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(mongoClient: C, databaseName: java.lang.String | string, mongoInstanceCreated: boolean, exceptionTranslator: PersistenceExceptionTranslator)
                        /**
                         * Configures the {@link WriteConcern} to be used on the {@link MongoDatabase} instance being created.
                         * @param writeConcern the writeConcern to set
                         */
                        // @ts-ignore
                        public setWriteConcern(writeConcern: WriteConcern): void
                        // @ts-ignore
                        public getDb(): MongoDatabase
                        // @ts-ignore
                        public getDb(dbName: java.lang.String | string): MongoDatabase
                        /**
                         * Get the actual {@link MongoDatabase} from the client.
                         * @param dbName must not be {#literal null} or empty.
                         * @return 
                         */
                        // @ts-ignore
                        abstract doGetMongoDatabase(dbName: java.lang.String | string): MongoDatabase
                        // @ts-ignore
                        public destroy(): void
                        // @ts-ignore
                        public getExceptionTranslator(): PersistenceExceptionTranslator
                        // @ts-ignore
                        public withSession(session: ClientSession): org.springframework.data.mongodb.MongoDbFactory
                        /**
                         * Close the client instance.
                         */
                        // @ts-ignore
                        abstract closeClient(): void
                        /**
                         * @return the Mongo client object.
                         */
                        // @ts-ignore
                        getMongoClient(): C
                        /**
                         * @return the database name.
                         */
                        // @ts-ignore
                        getDefaultDatabaseName(): string
                    }
                }
            }
        }
    }
}
