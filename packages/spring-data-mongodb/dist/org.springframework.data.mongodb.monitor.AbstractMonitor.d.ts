declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * Base class to encapsulate common configuration settings when connecting to a database
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    abstract class AbstractMonitor extends java.lang.Object {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public getServerStatus(): Document
                        // @ts-ignore
                        public getDb(databaseName: java.lang.String | string): MongoDatabase
                        // @ts-ignore
                        getMongoClient(): MongoClient
                    }
                }
            }
        }
    }
}
