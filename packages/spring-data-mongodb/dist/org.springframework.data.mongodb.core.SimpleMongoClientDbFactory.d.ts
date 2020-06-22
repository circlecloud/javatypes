declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Factory to create {@link MongoDatabase} instances from a {@link MongoClient} instance.
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    class SimpleMongoClientDbFactory extends org.springframework.data.mongodb.core.MongoDbFactorySupport<MongoClient> {
                        /**
                         * Creates a new {@link SimpleMongoClientDbFactory} instance for the given {@code connectionString}.
                         * @param connectionString connection coordinates for a database connection. Must contain a database name and must not
                         *           be {#literal null} or empty.
                         * @see <a href="https://docs.mongodb.com/manual/reference/connection-string/">MongoDB Connection String reference</a>
                         */
                        // @ts-ignore
                        constructor(connectionString: java.lang.String | string)
                        /**
                         * Creates a new {@link SimpleMongoClientDbFactory} instance from the given {@link MongoClient}.
                         * @param connectionString connection coordinates for a database connection. Must contain also a database name and not
                         *           be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(connectionString: ConnectionString)
                        /**
                         * Creates a new {@link SimpleMongoClientDbFactory} instance from the given {@link MongoClient}.
                         * @param mongoClient must not be {#literal null}.
                         * @param databaseName must not be {#literal null} or empty.
                         */
                        // @ts-ignore
                        constructor(mongoClient: MongoClient, databaseName: java.lang.String | string)
                        // @ts-ignore
                        public getLegacyDb(): DB
                        // @ts-ignore
                        public getSession(options: ClientSessionOptions): ClientSession
                        // @ts-ignore
                        closeClient(): void
                        // @ts-ignore
                        doGetMongoDatabase(dbName: java.lang.String | string): MongoDatabase
                    }
                }
            }
        }
    }
}
