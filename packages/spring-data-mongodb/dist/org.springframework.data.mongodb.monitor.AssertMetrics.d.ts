declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * JMX Metrics for assertions
                     * @author Mark Pollack
                     */
                    // @ts-ignore
                    class AssertMetrics extends org.springframework.data.mongodb.monitor.AbstractMonitor {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public getRegular(): number /*int*/
                        // @ts-ignore
                        public getWarning(): number /*int*/
                        // @ts-ignore
                        public getMsg(): number /*int*/
                        // @ts-ignore
                        public getUser(): number /*int*/
                        // @ts-ignore
                        public getRollovers(): number /*int*/
                    }
                }
            }
        }
    }
}
