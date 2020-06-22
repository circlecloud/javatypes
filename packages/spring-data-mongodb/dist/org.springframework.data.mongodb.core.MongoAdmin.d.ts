declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Mongo server administration exposed via JMX annotations
                     * @author Mark Pollack
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class MongoAdmin extends java.lang.Object implements org.springframework.data.mongodb.core.MongoAdminOperations {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public dropDatabase(databaseName: java.lang.String | string): void
                        // @ts-ignore
                        public createDatabase(databaseName: java.lang.String | string): void
                        // @ts-ignore
                        public getDatabaseStats(databaseName: java.lang.String | string): string
                        // @ts-ignore
                        public getServerStatus(): string
                    }
                }
            }
        }
    }
}
