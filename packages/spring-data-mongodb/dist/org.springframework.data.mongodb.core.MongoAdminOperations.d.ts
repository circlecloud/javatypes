declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     */
                    // @ts-ignore
                    interface MongoAdminOperations {
                        // @ts-ignore
                        dropDatabase(databaseName: java.lang.String | string): void
                        // @ts-ignore
                        createDatabase(databaseName: java.lang.String | string): void
                        // @ts-ignore
                        getDatabaseStats(databaseName: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
