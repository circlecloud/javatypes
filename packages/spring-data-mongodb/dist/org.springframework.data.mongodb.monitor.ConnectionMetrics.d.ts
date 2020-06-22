declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * JMX Metrics for Connections
                     * @author Mark Pollack
                     */
                    // @ts-ignore
                    class ConnectionMetrics extends org.springframework.data.mongodb.monitor.AbstractMonitor {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public getCurrent(): number /*int*/
                        // @ts-ignore
                        public getAvailable(): number /*int*/
                    }
                }
            }
        }
    }
}
