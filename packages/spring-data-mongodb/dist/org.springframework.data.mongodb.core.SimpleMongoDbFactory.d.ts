declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Factory to create {@link MongoDatabase} instances from a {@link MongoClient} instance.
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     * @author Thomas Darimont
                     * @author Christoph Strobl
                     * @author George Moraitis
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class SimpleMongoDbFactory extends org.springframework.data.mongodb.core.MongoDbFactorySupport<MongoClient> {
                        /**
                         * Creates a new {@link SimpleMongoDbFactory} instance from the given {@link MongoClientURI}.
                         * @param uri coordinates for a database connection. Must contain a database name and must not be {#literal null}.
                         * @since 1.7
                         */
                        // @ts-ignore
                        constructor(uri: MongoClientURI)
                        /**
                         * Creates a new {@link SimpleMongoDbFactory} instance from the given {@link MongoClient}.
                         * @param mongoClient must not be {#literal null}.
                         * @param databaseName must not be {#literal null} or empty.
                         * @since 1.7
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
